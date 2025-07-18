 import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();


export const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user , setUser] = useState(null)
    const [isSeller , setIsSeller] = useState(false)
    const [showUserLogin , setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
        const [cartItems, setCartItems] = useState({}); 


    const fetchProducts = async () => {
          setProducts(dummyProducts)
          
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
         fetchProducts()
           console.log(cartItems, ">>> updated cart");

    },[cartItems])

   
   
    const value = { navigate , user , setUser , setIsSeller , isSeller, fetchProducts , products , setProducts , addToCart , updateCartItem , removeFromCart , cartItems , showUserLogin , setShowUserLogin , getCartCount,getCartAmount}
return <AppContext.Provider value ={value}>
    {children}
</AppContext.Provider>

}
 

export const useAppContext = () => {
    return useContext(AppContext)
}

