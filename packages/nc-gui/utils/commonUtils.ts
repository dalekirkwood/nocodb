export const modalSizes = {
  xs: {
    width: 'min(calc(100vw - 32px), 448px)',
    height: 'min(90vh, 448px)',
  },
  sm: {
    width: 'min(calc(100vw - 32px), 640px)',
    height: 'min(90vh, 424px)',
  },
  md: {
    width: 'min(80vw, 900px)',
    height: 'min(90vh, 540px)',
  },
  lg: {
    width: 'min(80vw, 1280px)',
    height: 'min(90vh, 864px)',
  },
}

/**
 * Creates a promise that resolves after a specified delay.
 *
 * @param ms - The delay in milliseconds.
 * @returns A promise that resolves after the specified delay.
 *
 * @example
 * ```ts
 * // Wait for 2 seconds
 * await delay(2000);
 * console.log('2 seconds have passed');
 * ```
 */
export const ncDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Checks if a string contains Unicode emojis.
 *
 * @param emoji - The string to check.
 * @returns A boolean indicating if the string contains Unicode emojis.
 *
 * @example
 * ```ts
 * const hasEmoji = isUnicodeEmoji('Hello World 😊');
 * console.log(hasEmoji); // Output: true
 * ```
 */
export const isUnicodeEmoji = (emoji: string) => {
  return !!emoji?.match(/(\p{Emoji}|\p{Extended_Pictographic})/gu)
}
