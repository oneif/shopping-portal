export const SET = (key: string, value: string) => localStorage.setItem(key, value)

export const GET = (key: string) => localStorage.getItem(key)

export const REMOVE = (key: string) => localStorage.removeItem(key)
