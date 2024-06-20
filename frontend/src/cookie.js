function getCookie(name) {
    const cookieRegex = new RegExp(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    const cookieMatch = document.cookie.match(cookieRegex);
    return cookieMatch ? decodeURIComponent(cookieMatch[2]) : null;
}

export {getCookie};