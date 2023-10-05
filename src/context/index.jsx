import {createContext, useState} from "react";

const ShoppingCartContext = createContext()

function ShoppingCartProvider({children}){
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [order, setOrder] = useState([])

  const openProductDetail = () => setIsProductDetailOpen(true)

  const closeProductDetail = () => setIsProductDetailOpen(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)

  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


  return(
    <ShoppingCartContext.Provider value={{isProductDetailOpen, openProductDetail, closeProductDetail, productToShow, setProductToShow, cartProducts, setCartProducts, isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu, order, setOrder}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export {ShoppingCartProvider, ShoppingCartContext}