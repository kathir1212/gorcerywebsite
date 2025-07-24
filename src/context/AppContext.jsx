 import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { dummyProducts } from "../assets/assets";
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKED;

export const AppContext = createContext();


export const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user , setUser] = useState("68807ea385539fa2f3230892")
    const [isSeller , setIsSeller] = useState(true)
    const [showUserLogin , setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
        const [cartItems, setCartItems] = useState({}); 


 const fetchSeller = async () => {
        try {
            const {data} = await axios.get('/api/seller/is-auth');
            if(data.success){
                setIsSeller(true)
            }else{
                setIsSeller(false)
            }
        } catch(error){
              alert(error)
        }
    }

    const fetchUser = async () => {
        try{
    const {data} = await axios.get('api/user/is-auth');
    if(data.success){
setUser(data.user)
setCartItems(data.user.cartItems)
    }
    
} 
        catch(error){
          setUser(null)
        }
    }
    

    // const fetchProducts = async () => {
    //       setProducts(dummyProducts)
          
    // }

    const fetchProducts = async () =>{
        try{
   const { data } = await axios.get('/api/product/list')
   console.log(data,"prooooo");
   
   if(data.success){
    setProducts(data.products)
   }
   else{
    alert(data.message)
   }
        }
        catch(error){
alert(error.message)
        }
    }


    
    const addToCart = (_id) => {
    setCartItems(prev => ({ ...prev, [_id]: 1 }));

    console.log(cartItems,">>>card");
    
};

const updateCartItem = (id, newQuantity) => {
    setCartItems(prev => ({ ...prev, [id]: newQuantity }));
};

const removeFromCart = (id) => {
    const updated = { ...cartItems };
    delete updated[id];
    setCartItems(updated);
};

const getCartCount = () => { 
let totalCount = 0;
for (const item in cartItems){
    totalCount += cartItems[item];
}
return totalCount;
}

const getCartAmount = () => {
    let totalAmount = 0;
    for ( const items in cartItems){
        let itemInfo = products.find((product)=>product._id === items);
        if(cartItems[items] > 0){
            totalAmount += itemInfo.offerPrice * cartItems[items]
        }
            
    }
    return Math.floor(totalAmount * 100) / 100;
}


    useEffect (() => {   
        fetchUser()
        fetchSeller()              
         fetchProducts()
           console.log(cartItems, ">>> updated cart");

    },[cartItems])

    useEffect(()=>{
        const updateCart = async () => {
            try{
                const {data} = await axios.patch('api/cart/update', {
                    user:"68807ea385539fa2f3230892",
                    cartItems})
                if(!data.success){
                    alert(data.message)
                }
            }
            catch(error){
                alert(error.message)
            }
        }
        console.log("user", user);
        
        if(user){

            updateCart()
        }
    },[cartItems])

   
   
    const value = { navigate , user , setUser , setIsSeller , isSeller, fetchProducts , products , setProducts , addToCart , updateCartItem , removeFromCart , cartItems , showUserLogin , setShowUserLogin ,
         getCartCount,getCartAmount}
return <AppContext.Provider value ={value}>
    {children}
</AppContext.Provider>

}
 

export const useAppContext = () => {
    return useContext(AppContext)
}

