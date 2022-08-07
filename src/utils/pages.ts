// Utility functions used in pages.

export const id = (func: (id: number) => void) => {
    return (id: number) => {
        return () => {
            func(id)
        }
    }
}

// Where `duration` represents a duration of time in minutes.
export const prettifyDuration = (duration: number) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    return `${hours}h ${minutes}m`
}

const formatter = new Intl.DateTimeFormat('default', {
    timeStyle: 'short',
    timeZone: 'utc',
    hour12: false
})

export const getTime = (time: string) => {
    const d = new Date(time)
    return formatter.format(d)
}
