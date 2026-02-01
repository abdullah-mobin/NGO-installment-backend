import { RegisterDTO } from "../dto/auth/register.dto.js"
import { LoginDTO } from "../dto/auth/login.dto.js"
import { RegisterService } from "../services/auth.service.js"
import { LoginService } from "../services/auth.service.js"

export function Register(req, res) {
    try {
        const dto = RegisterDTO(req.body)
        const result = RegisterService(dto)
        const token = res.locals.token

        return res.status(200).json({
            "message": "registration done bro",
            "data": {
                "result": result,
                "access_token":token,
                "refresh_token": token,
            },
            "success": true,
        })

    } catch (error) {
        return res.status(400).json({
            "message": "failed to register",
            "data": error.message,
            "success": false,
        })
    }
}

export function Login(req, res) {
    try {
        const dto = LoginDTO(req.body)
        const result = LoginService(dto)

        return res.status(200).json({
            "message": "login successfull bro",
            "data": result,
            "success": true,
        })

    } catch (error) {
        return res.status(400).json({
            "message": "failed to login",
            "data": error.message,
            "success": false,
        })
    }
}
