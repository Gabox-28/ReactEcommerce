import {Layout} from "../../Components/Layout/index.jsx";
import {useContext} from "react";
import {ShopContext} from "../../context/index.jsx";
import {Link} from "react-router-dom";
import {OrdersCard} from "../../Components/OrdersCard/index.jsx";
import {ChevronLeftIcon} from "@heroicons/react/24/solid/index.js";

function MyOrders(){
  const context = useContext(ShopContext)
  return(
    <Layout>
      <div className={'flex items-center justify-center relative w-80'}>
        <h1 className={'font-medium text-xl mb-4'}>My orders</h1>
      </div>
      {context.order.map((order, index) =>
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard date={order.date} totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
        </Link>
      )}
    </Layout>
  )
}

export {MyOrders}