import { User } from "../../database/db.js";
import { ComparePassword, HashPassword } from "../../utils/hash.js";

export function RegisterService(data) {
    try {
        const pass = HashPassword(data.password)
        data.password = pass
    
        User.push(data)
        return User
    } catch (error) {
        return error.message
    }
}

export function LoginService(data) {
    const { phone, password } = data;

    for (let i = 0; i < User.length; i++) {
        const { phone: ph, password: ps } = User[i];

        if (ph == phone) {
            if(ComparePassword(password, ps)){
                return User[i]
            }
        }
    }

    throw new Error("invalid phone or password");
}
