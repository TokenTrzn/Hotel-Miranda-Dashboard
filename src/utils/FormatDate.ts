export const formatDate = (date: string) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = String(newDate.getMonth() + 1).padStart(2, '0')
  const day = String(newDate.getDate()).padStart(2, '0') 
  
  return `${year}-${month}-${day}`
}