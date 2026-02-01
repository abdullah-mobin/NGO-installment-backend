export function LogRequest(req, res, next) {

    const start = Date.now()

    res.on('finish', () => {
        const speed = Date.now() - start
        const time = new Date().toTimeString().slice(0, 8)
        console.log(
            `[LOG] ${ time } | ${req.method} | ${speed}ms | ${res.statusCode} | ${req.ip} | ${req.originalUrl}`
        )
        
    })
    next()
}