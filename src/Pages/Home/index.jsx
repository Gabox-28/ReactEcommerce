import {useContext} from "react";
import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {ProductDetail} from "../../Components/ProductDetail/index.jsx";
import {ShopContext} from "../../context/index.jsx";

function Home(){
  const context = useContext(ShopContext)

  function RenderView () {
    if(context.searchByTitle?.length > 0){
      if(context.filteredItems?.length > 0){
        return (
          context.filteredItems?.map((item) =>
            <Card key={item.id} {...item}/>
          )
        )
      }else{
        return (
          <div>We don't have anything :(</div>
        )
      }
    }else{
      return(
        context.items?.map((item) =>
          <Card key={item.id} {...item}/>
        )
      )
    }
  }

  return(
    <Layout>
      <div className={'flex items-center justify-center relative w-80'}>
        <h1 className={'font-medium text-xl mb-4'}>Exclusive Products</h1>
      </div>
      <input type="text" placeholder={'Search a product'} className={'rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'}
      onChange={(event) => context.setSearchByTitle(event.target.value)}/>

      <div className={'grid gap-4 grid-cols-4 w-full max-w-screen-lg'}>
        {RenderView()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export {Home}