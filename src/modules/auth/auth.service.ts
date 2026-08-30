type LoginParam = {
    email: string
    password: string
}

type RegisterParam = {
    email: string,
    password: string,
    name: string,
    age: number,
    job?: string
}

abstract class AuthService {
    static async login(param: LoginParam) {

    }
}