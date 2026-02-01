export function LoginDTO(data) {
    if (!data) {
        throw new Error("invalid request body");
    }

    const { phone, password } = data;
    if (!phone) {
        throw new Error("phone is required");
    }
    if (!password) {
        throw new Error("password is required");
    }

    const dto = {
        phone: phone,
        password: password,
    }
    return dto
}