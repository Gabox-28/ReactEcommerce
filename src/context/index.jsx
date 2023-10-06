import {createContext, useEffect, useState} from "react";

const ShopContext = createContext()

function ShoppingCartProvider({children}){
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [order, setOrder] = useState([])

  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
  }, []);

  function filterItemsByTitle(items, searchByTitle){
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle) setFilteredItems(filterItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle]);

  const openProductDetail = () => setIsProductDetailOpen(true)

  const closeProductDetail = () => setIsProductDetailOpen(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)

  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


  return(
    <ShopContext.Provider value={{isProductDetailOpen, openProductDetail, closeProductDetail, productToShow, setProductToShow, cartProducts, setCartProducts, isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu, order, setOrder, items, setItems, searchByTitle, setSearchByTitle, filteredItems}}>
      {children}
    </ShopContext.Provider>
  )
}

export {ShoppingCartProvider, ShopContext}