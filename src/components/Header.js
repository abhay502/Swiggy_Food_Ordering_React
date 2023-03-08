import { useState } from "react";
import { Link } from "react-router-dom";

const loginUser=()=>{
    return true;
} 
 
const Title=()=>(
   
    <a href="/">
   <img src="https://aartisto.com/wp-content/uploads/2020/11/swiggy-logo.png" className="logo" alt="swiggylogo" />
   </a>
); 
 


const HeaderComponent=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    return(
        <div className="header">
            <Title/> 
            <div className="nav-items"> 
                <ul>
                    <Link to="/"><li>Home</li></Link>  
                    <Link to="/about"> <li>About</li>  </Link>  
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                {isLoggedIn? <button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>}
                
               
            </div>
           
        </div>            
    );  
}; 

export default HeaderComponent;