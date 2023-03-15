import { createContext } from "react";


const UserContext=createContext({
    user:{
        userName:"Abhay",
        Email:"abay8888@gmail.com"
    }
    
})

export default UserContext;