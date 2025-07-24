import React, { useEffect , useState, usestate } from 'react'
import { useAppContext } from '../context/AppContext'
import { categories } from '../assets/assets'
export const Categories = () => {

// const [categories , setcategories] = useState([])
console.log(categories,">>>>>");

const list = [{
    name:"fruits",
    path:"fruits"

},
{
    name:"vegatable",
    path:"vegatable"

},
{
    name:"dairy product",
    path:"dairy"
},
{
    name:"instand food",
    path:"instand"
},
{
    name:"instand food",
     path:"instand"
},
{
    name:"orange",
     path:"instand"
},
{
    name:"orange",
     path:"instand"
}]

const { navigate } =  useAppContext()

useEffect ( () =>{
//  setcategories(list);
 
}
, []
);



  return (
   <div className='mt-16'>
    <p className='text-2xl  md:text-3xl font-medium'>Categories</p>
    <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
         {categories.map((category,index) => {
            return(

                <div key={index} onClick={()=>{
             navigate(`/products/${category.path.toLowerCase()}`)
               scrollTo(0,0)
            }} 
                className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center  items-center'>
<img className='group-hover:scale-108 transition max-w-28' src={category.image}/>
            <p className='text-sm font-medium'>{category.text}</p>
           </div>
            )
            
   
         }
        )}
         
         
          

           

           
            
        </div>
    </div>
   </div>
  )
}





 