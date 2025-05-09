import React, { useEffect , useState, usestate } from 'react'
import { useAppContext } from '../context/AppContext'
export const Categories = () => {

const [categories , setcategories] = useState([])
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
 setcategories(list);
 
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
<img className='group-hover:scale-108 transition max-w-28' src="data:image/jpeg;base64,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" alt="images" />
            <p className='text-sm font-medium'>{category.name}</p>
           </div>
            )
            
   
         }
        )}
         
         
          

           

           
            
        </div>
    </div>
   </div>
  )
}





 