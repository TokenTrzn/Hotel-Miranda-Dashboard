export const formatDate = (date: string) => {
    const newDate = new Date(date)
    const dateFormat = newDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
    return dateFormat
}