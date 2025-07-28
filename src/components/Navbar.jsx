import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import logo from '../assets/grocery-logo.jpg'
export const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    console.log(open,"open>>>>>>");
    const {user , setUser , navigate,  isSeller ,showUserLogin , setShowUserLogin,getCartCount,getCartAmount} = useAppContext();
    console.log(user,">>>>>>userkk");

 const logout = async () => {
    try{
const { data } = await axios.get('https://newgroceryserver.onrender.com/api/user/logout')
if(data.success){
alert(data.message);
  setUser(null)
 navigate('/')
} else{
    alert(data.message)
}
    }
    catch(error){
alert(error.message)
    }
}

const login = () => {
setShowUserLogin(true)
}
    
  return (
    <>
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

<a href="#">
    <img className="w-[100px] h-[63px]" src={logo} alt="dummyLogoColored" />
</a>

{/* Desktop Menu */}
<div className="hidden sm:flex items-center gap-8">
    <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
    <Link to="/all-product">All Product</Link>
    {user &&
    <Link to="/myorder">My Order</Link>
    }
        <Link to="/seller">Admin</Link>


    

    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
        <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>

    <div className="relative cursor-pointer">
        <Link to='/addtocart'>
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#217c21ff" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </Link>
        
    </div>
 {!user ? (
    <button onClick={()=>login()} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary transition text-white rounded-full">
        Login
    </button>
 )
 : (
    <button onClick={()=>logout()} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary transition text-white rounded-full">
        Logout
    </button>
 )}
    
</div>

<button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
    {/* Menu Icon SVG */}
    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="21" height="1.5" rx=".75" fill="#426287" />
        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
    </svg>
</button>

{/* Mobile Menu */}
<div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
    <a href="#" className="block">Home</a>
    <a href="#" className="block">About</a>
    <a href="#" className="block">Contact</a>
    <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
        Login
    </button>
</div>

</nav>

    </>
   


  )
}
 