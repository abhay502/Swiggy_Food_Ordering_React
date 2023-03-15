import { useState } from "react"

const Section=({title,description,contact})=>{
    const [isVisible,setIsvisible]=useState(true)
    return(
        <div className="m-10 p-5 ">
        <h1 className="font-extrabold ">{title}</h1>
        {isVisible? <button  className="border-2 rounded-lg p-1 cursor-pointer border-gray-900"
         onClick={()=>setIsvisible(false)}     >Show</button> :
         <button  className="border-2 rounded-lg p-1 cursor-pointer border-gray-900"
         onClick={()=>setIsvisible(true)}     >Hide</button>
         
         }
        

        <h2>{isVisible &&  description}</h2>
        <h3>{contact}</h3>
        </div>
    )
}





const Instamart=()=>{
    return(
        <>
         <Section title={"About Instamart"} description={"Daily essentials delivery in minitues, from the house of swiggy."}
         
         contact={"Download Swiggy & order now on Instamart!"}/>
         <Section title={"Team Instamart"} description={"Open 6 AM to 9 PM late night everyday, from your morning coffee needs to snacks for your late night binge.."}
         
         contact={"Download Swiggy & order now on Instamart!"}/>

         <Section title={"Contact Instamart"} description={"Daily essentials delivery in minitues, from the house of swiggy."}
         
         contact={"Download Swiggy & order now on Instamart!"}/>
        </>
    )
}
export default Instamart;