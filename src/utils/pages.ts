// Utility functions used in pages.

export const id = (func: (id: number) => void) => {
    return (id: number) => {
        return () => {
            func(id)
        }
    }
}

const toMinutes = (n: number) => [Math.floor(n / 60), n % 60]

const toHours = (n: number) => [Math.floor(n / (60 * 60)), n % (60 * 60)]

// Where `duration` represents a duration of time in seconds.
export const prettifyDuration = (duration: number) => {
    const [hours, remaining] = toHours(duration)
    const [minutes] = toMinutes(remaining)
    return `${hours}h ${minutes}m`
}
