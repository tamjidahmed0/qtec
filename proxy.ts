import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
    const cookie = request.cookies.get('token')?.value
    const pathname = request.nextUrl.pathname
    const validate = await verifyTokenWithServer(cookie || '', request)

    // Login page
    if (pathname === '/dashboard/login') {
        if (validate.success) {
            return NextResponse.redirect(new URL('/dashboard/admin', request.url))
        }
        return NextResponse.next()
    }

    // Protected pages
    if (!validate.success) {
        const response = NextResponse.redirect(new URL('/dashboard/login', request.url))
        response.cookies.delete('token')
        return response
    }

    return NextResponse.next()
}

async function verifyTokenWithServer(token: string, req: NextRequest): Promise<{ success: boolean }> {
    try {
        const res = await fetch('http://localhost:5000/api/auth/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ cookie: req.cookies.get('token')?.value })
        })
        const response = await res.json()
        return response
    } catch {
        return { success: false }
    }
}

export const config = {
    matcher: ['/dashboard/:path*']
}
