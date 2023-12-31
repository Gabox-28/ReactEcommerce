import {Layout} from "../../Components/Layout/index.jsx";
import {OrderCard} from "../../Components/OrderCard/index.jsx";
import {useContext} from "react";
import {ShopContext} from "../../context/index.jsx";
import {Link} from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/24/solid/index.js";

function MyOrder(){
  const context = useContext(ShopContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length - 1

  return(
    <Layout>
      <div className={'flex items-center justify-center relative w-80 mb-6'}>
        <Link to={'/my-orders'} className={'absolute left-0'}>
          <ChevronLeftIcon className={'w-6 h-6 text-black cursor-pointer'}/>
        </Link>
        <h1>My order</h1>
      </div>
      <div className={'flex flex-col w-80'}>
        {context.order?.[index]?.products.map((product) => <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.images[0]} price={product.price}/>)}
      </div>
    </Layout>
  )
}

export {MyOrder}