const APP_KEY = 'shop';

export function getStorageItem(key) {
    if (typeof window === 'undefined') return;

    let data = window.localStorage.getItem(`${APP_KEY}_${key}`);

    if (!data) return {};

    try {
        return JSON.parse(data);
    } catch (e) {
        throw new Error(`Failed to parse data from ${key}, ${e}`);
    }
}

export function setStorageItem(key, value) {
    if (typeof window === 'undefined') return;
    try {
        const data = JSON.stringify(value);
        return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
    } catch (e) {
        throw new Error(`Failed to stringify value: ${value}, ${e}`);
    }
}