export const dateFormater=(date)=>{
  const d= new Date(date).getDate()
  const m= new Date(date).getMonth()
  const y= new Date(date).getFullYear()
  return `${d}-${m}-${y}`
}