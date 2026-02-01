export function RegisterDTO(data) {
    if (!data) {
        throw new Error("invalid request body");
    }

    const { name, email, phone, password } = data;

    if (!name) {
        throw new Error("name is required");
    }
    if (!email) {
        throw new Error("email is required");
    }
    if (!phone) {
        throw new Error("phone is required");
    }
    if (!password) {
        throw new Error("password is required");
    }


    const dto = {
        name: name,
        email: email,
        phone: phone,
        password: password,
    }

    return dto
}