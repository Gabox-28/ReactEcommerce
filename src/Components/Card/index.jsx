import {useContext} from "react";
import {ShopContext} from "../../context/index.jsx";
import {CheckIcon, PlusIcon} from "@heroicons/react/24/solid/index.js";
import {data} from "autoprefixer";

function Card({id, title, price, images, category : {name} }){
  const context = useContext(ShopContext)

  const showProduct = (title, price, images, name) => {
    context.openProductDetail()
    context.closeCheckoutSideMenu()
    context.setProductToShow({title, price, images, name})
  }

  const addProductsToCart = (event, id, title, price, images, name) => {
    event.stopPropagation()
    context.setCartProducts([...context.cartProducts, {id, title, price, images, name}])
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.find(product => product.id === id)

    if (isInCart){
      return (
      <CheckIcon className={'w-6 h-6 text-white absolute top-0 right-0 bg-green-700 rounded-full m-2 p-1'}/>
      )
    }else {
      return (
        <PlusIcon className={'w-6 h-6 text-black absolute top-0 right-0 bg-white rounded-full m-2 p-1'}
                  onClick={(event) => addProductsToCart(event, id, title, price, images, name)}/>
      )
    }
  }

  return(
    <div className={'bg-white cursor-pointer w-56 h-60 rounded-lg'}
          onClick={() => showProduct(title, price, images, name)}>
      <figure className={'relative mb-2 w-full h-4/5'}>
        <span className={'absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'}>{name}</span>
        <img className={'w-full h-full object-cover rounded-lg'} src={images?.[0]} alt="Headphones"/>

        {renderIcon(id)}
      </figure>
      <p className={'flex justify-between'}>
        <span className={'text-sm font-light'}>{title}</span>
        <span className={'text-lg font-medium'}>${price}</span>
      </p>
    </div>
  )
}

export {Card}