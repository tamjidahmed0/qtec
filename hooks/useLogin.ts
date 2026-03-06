"use client"

import { useMutation } from "@tanstack/react-query"
import { loginAdmin } from "@/api/login"
import Cookies from 'js-cookie'



interface LoginData {
    email: string
    password: string
}

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginData) => loginAdmin(data),
        onSuccess: (data) => {
            Cookies.set('token', data.token, {
                expires: 2 / 24,   // 2 hours
                secure: true,      // must on HTTPS
                sameSite: 'lax',   // avoid cross-site blocking
                path: '/'          // accessible everywhere
            })
            console.log("Login success")
        },
        onError: (error: any) => {
            console.error(error.message)
        }
    })
}