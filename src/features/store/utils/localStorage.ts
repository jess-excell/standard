/** Saves a given object to localStorage.
 * @param key {string} - The key for the item
 * @param value {unknown} - The value of the item
 */
export function setItem(key: string, value: unknown)  {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

/** Retrieves a given object from localStorage.
 * @param key {string} - The key for the item
 * @returns The item from localStorage, if it exists.
 */
export function getItem(key: string) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    } catch (error) {
        console.log(error);
    }
}