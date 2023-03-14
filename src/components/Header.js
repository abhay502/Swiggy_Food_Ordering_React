import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline"

const loginUser=()=>{
    return true;
} 
 
const Title=()=>(
   
    <a href="/">
   <img src="https://aartisto.com/wp-content/uploads/2020/11/swiggy-logo.png" className="h-28" alt="swiggylogo" />
   </a>
); 
 


const HeaderComponent=()=>{ 
    const isOnline=useOnline()
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    return(
           
        <div className=" flex justify-between shadow-md">   
             <Title/> 
            <div className="sm:shrink-0 ">   
                <ul className="flex  py-10 ">
                    <Link to="/"><li className="px-4 hover:text-white hover:bg-black ">Home</li></Link>  
                    <Link to="/about"> <li className="px-2">About</li>  </Link>  
                    <Link to="/contact"> <li className="px-2">Contact</li>  </Link>  
                    
                    <Link to="/instamart"> <li className="px-2">Instamart</li> </Link> 
                    <li className="px-2">Cart</li>
                </ul>  
            </div>   
                 <h1>{isOnline ? "✅" : "🔴"} </h1> 
                {isLoggedIn? <button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>}
        </div>             
    )
};   
  
export default HeaderComponent; 