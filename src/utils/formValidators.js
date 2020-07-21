
export const maxLength = (length) => (input) => {
    if (input && input.length > length) return `${length} symbols max`
}
export const required = (input) => {
    if (!input || input === "") return 'required field'
    return undefined
}