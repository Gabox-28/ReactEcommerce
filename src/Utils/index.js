export function TotalPrice (products){
  return products.reduce((suma, product) => suma + product.price, 0)
}

export function GetDate(){
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + ' ' + time;
}