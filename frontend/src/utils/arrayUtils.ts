export function generateRandomArray(size: number): number[] {
    return Array.from(
        { length: size },
        () => Math.floor(Math.random() * 1000) + 1
    )
}