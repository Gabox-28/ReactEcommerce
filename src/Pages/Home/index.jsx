import {useContext} from "react";
import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {ProductDetail} from "../../Components/ProductDetail/index.jsx";
import {ShopContext} from "../../context/index.jsx";

function Home(){
  const context = useContext(ShopContext)
  const currentPath = window.location.pathname
  let category = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  function RenderItems () {

    let itemsToRender

    if (category){
      if(category === 'clothes'){
        itemsToRender = context.searchByTitle?.length > 0
          ? context.filteredItems?.filter(item => item.category.name === 'Electrónica')
          : context.items.filter(item => item.category.name === 'Electrónica')
      }else if(category === 'electronics'){
        itemsToRender = context.searchByTitle?.length > 0
          ? context.filteredItems?.filter(item => item.category.name === 'Electrónica')
          : context.items.filter(item => item.category.name === 'Electrónica')
      }else if(category === 'furnitures'){
        itemsToRender = context.searchByTitle?.length > 0
          ? context.filteredItems?.filter(item => item.category.name === 'Electrónica')
          : context.items.filter(item => item.category.name === 'Electrónica')
      }else if(category === 'toys'){
        itemsToRender = context.searchByTitle?.length > 0
          ? context.filteredItems?.filter(item => item.category.name === 'Electrónica')
          : context.items.filter(item => item.category.name === 'Electrónica')
      }else if(category === 'others'){
        itemsToRender = context.searchByTitle?.length > 0
          ? context.filteredItems?.filter(item => item.category.name === 'Electrónica')
          : context.items.filter(item => item.category.name === 'Electrónica')
      }
    }else{
      itemsToRender = context.searchByTitle?.length > 0
        ? context.filteredItems
        : context.items;
    }

    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => {
        return <Card key={item.id} {...item} />
    })
    }else {
      return <p>We don't have anything :(</p>
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
        {RenderItems()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export {Home}