import {CheckoutSideMenu} from "../CheckoutSideMenu/index.jsx";

function Layout({children}) {
  return (
    <div className={'flex flex-col items-center mt-20'}>
      {children}
      <CheckoutSideMenu/>
    </div>
  )
}

export {Layout}