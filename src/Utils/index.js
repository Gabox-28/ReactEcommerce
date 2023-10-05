export function TotalPrice (products){
  return products.reduce((suma, product) => suma + product.price, 0)
}