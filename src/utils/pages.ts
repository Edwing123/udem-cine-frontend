// Utility functions used in pages.

export const id = (func: (id: number) => void) => {
    return (id: number) => {
        return () => {
            func(id)
        }
    }
}
