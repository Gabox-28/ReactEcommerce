import {XMarkIcon} from "@heroicons/react/24/solid/index.js";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../../context/index.jsx";
import {OrderCard} from "../OrderCard/index.jsx";
import {TotalPrice, GetDate} from "../../Utils/index.js";

function CheckoutSideMenu(){
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  const handleCheckout = () =>  {
    if(context.cartProducts.length > 0){
      const orderToAdd = {
        date: GetDate(),
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: TotalPrice(context.cartProducts)
      }

      context.setOrder([...context.order, orderToAdd])
      context.setCartProducts([])
      context.closeCheckoutSideMenu()
    }
  }

  return(
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}>
      <div className={'flex justify-between items-center p-6'}>
        <h2 className={'font-medium text-xl'}>My order</h2>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => context.closeCheckoutSideMenu()}/>
      </div>
      <div className={'px-6 overflow-y-scroll flex-1'}>
        {context.cartProducts.map((product) => <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.images[0]} price={product.price} handleDelete={handleDelete}/>)}
      </div>
      <div className={'px-6'}>
        <p className={'flex justify-between items-center mb-2'}>
          <span className={'font-light'}>Total:</span>
          <span className={'font-medium text-2xl'}>${TotalPrice(context.cartProducts)}</span>
        </p>
        <Link to={'/my-orders/last'}>
          <button className={'bg-black py-3 w-full text-white rounded-lg mb-6'} onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export {CheckoutSideMenu}