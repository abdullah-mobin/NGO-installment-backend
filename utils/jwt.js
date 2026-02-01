export function ValidateToken(tocken) {
    if (!tocken) {
        throw new Error("invalid token");
    }
    return true
}