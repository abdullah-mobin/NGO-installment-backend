import { ValidateToken } from "../../utils/jwt.js"

export function IsAuthenticated(req, res, next) {
    const authHeader = req.headers['authorization']
    if (!authHeader) {
        return res.status(401).json({
            "message": "authorization header not provided",
            "data": null,
            "success": false,
        })
    }

    const [type, token] = authHeader.split(' ')
    if (type !== 'Bearer') {
        return res.status(401).json({
            "message": "invalid authorization header",
            "data": null,
            "success": false,
        })
    }
    console.log(authHeader)

    try {
        if (ValidateToken(token)) {
            res.locals.token = token
        }

    } catch (error) {
        return res.status(401).json({
            "message": "unauthorized",
            "data": error.message,
            "success": false,
        })
    }

    next()
} 