interface LoginData {
    email: string
    password: string
}

interface LoginResponse {
    success: boolean
    token: string
}

export const loginAdmin = async (data: LoginData): Promise<LoginResponse> => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        const err = await res.json()
        throw new Error(err.message || "Login failed")
    }

    return res.json()
}