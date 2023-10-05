import {CalendarIcon, ChevronRightIcon, ShoppingBagIcon} from "@heroicons/react/24/solid/index.js";


function OrdersCard({date, totalPrice, totalProducts}){
  console.log(date)
  console.log(totalPrice)
  console.log(date)
  return(
    <div className={'flex mb-3 border border-black w-80 p-4 rounded-lg'}>
      <div className={'flex justify-between w-full'}>
        <p className={'flex flex-col'}>
          <div className={'flex gap-2'}>
            <CalendarIcon className={'w-6 h-6 text-black'}/>
            <span className={'font-light'}>{date}</span>
          </div>
          <div className={'flex gap-2'}>
            <ShoppingBagIcon className={'w-6 h-6 text-black'}/>
            <span className={'font-light'}>{totalProducts} articles</span>
          </div>
        </p>
        <p className={'flex items-center gap-2'}>
          <span className={'font-medium text-2xl'}>${totalPrice}</span>
          <ChevronRightIcon className={'w-6 h-6 text-black'}/>
        </p>
      </div>
    </div>
  )
}

export {OrdersCard}