import bcrypt from 'bcrypt'

export function HashPassword(password) {
    if (!password) {
        throw new Error('Password required')
    }
    return bcrypt.hashSync(password, 10)
}

export function ComparePassword(password, hashed) {
    if (!password || !hashed) {
        return false
    }
    return bcrypt.compareSync(password, hashed)
}