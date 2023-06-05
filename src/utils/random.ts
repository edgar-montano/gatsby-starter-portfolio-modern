/**
 * @function randomNumber
 * @description Generates a random number between min and max, inclusive.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} The random float number.
 */
export function randomNumber(min: number, max: number): number {
    // Generate a random number between min and max, inclusive.
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random element from an array.
 * @param arr The array to choose from.
 * @returns A random element from the array.
 */
export function randomElement<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
/**
 * Randoms sign used for calculating positive or negative direction.
 * @returns sign {number} `-1` or `1`
 */
export function randomSign(): number {
    return Math.random() < 0.5 ? -1 : 1;
}
