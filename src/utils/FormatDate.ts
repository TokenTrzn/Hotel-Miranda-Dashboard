export const formatDate = (date: string) => {
    /**
     * const newDate = new Date(date)
    const dateFormat = newDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
    return dateFormat
     */
    

    const newDate = new Date(date); // Crea un objeto Date a partir del valor de la fecha.
  
  // Obtener el año, mes y día en el formato adecuado
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0, así que sumamos 1
  const day = String(newDate.getDate()).padStart(2, '0'); // Asegura que el día tenga dos dígitos
  
  return `${year}-${month}-${day}`;
}