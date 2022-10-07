export function formatDate(date: any) {    
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

    return day + "/" + (month +1) + "/" + year;
  }
  
