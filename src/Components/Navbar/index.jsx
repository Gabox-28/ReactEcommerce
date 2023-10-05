import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ShoppingCartContext} from "../../context/index.jsx";
import {ShoppingCartIcon} from "@heroicons/react/24/solid/index.js";

function Navbar(){
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className={'flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'}>
      <ul className={'flex items-center gap-3'}>
        <li className={'font-bold text-lg'}>
          <NavLink to={'/'}>Shopi</NavLink>
        </li>
        <li>
          <NavLink to={'/all'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>All</NavLink>
        </li>
        <li>
          <NavLink to={'/clothes'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>Clothes</NavLink>
        </li>
        <li>
          <NavLink to={'/electronics'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>Electronics</NavLink>
        </li>
        <li>
          <NavLink to={'/fornitures'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>Fornitures</NavLink>
        </li>
        <li>
          <NavLink to={'/toys'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>Toys</NavLink>
        </li>
        <li>
          <NavLink to={'/others'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>Others</NavLink>
        </li>
      </ul>
      <ul className={'flex items-center gap-3'}>
        <li className={'text-black/60'}>
          gabox@mortacorp.com
        </li>
        <li>
          <NavLink to={'/my-orders'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>My orders</NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>My account</NavLink>
        </li>
        <li>
          <NavLink to={'/sign-in'} className={({isActive}) =>
            isActive ? activeStyle : undefined
          }>Sign in</NavLink>
        </li>
        <li className={'flex gap-1 cursor-pointer'} onClick={() => {
          context.openCheckoutSideMenu()
          context.closeProductDetail()
        }}>
          <ShoppingCartIcon className={'w-5 h-5 text-black'}/>
          <span>{context.cartProducts.length}</span>
        </li>
      </ul>
    </nav>
  )
}

export {Navbar}