export function checkCredentials(params) {
    params.password = params.password.trim()
    if (params.username.length < 5) {
        params.errorMsg = 'Логин должен быть не менее 5 символов'
        return false
    }

    if (params.password.length < 8) {
        params.errorMsg = 'Пароль должен быть не менее 8 символов'
        return false
    }

    if (params.password.search('[А-ЯЁA-Z]') == -1) {
        params.errorMsg = 'Пароль должен содержать хотя бы одну заглавную букву'
        return false
    }

    if (params.password.search('[^А-Яа-яёЁA-Za-z0-9]') == -1) {
        params.errorMsg = 'Пароль должен содержать хотя бы один специальный символ'
        return false
    }

    if (params.password.search('[0-9]') == -1) {
        params.errorMsg = 'Пароль должен содержать хотя бы одну цифру'
        return false
    }

    return true
}
