import { IMG_CDN_URL } from "../constants";



const Cards=({restaurant})=>{ //here I'm destructuring props to {restaurant}
    // console.log(props);
   const {name,cuisines,costForTwoString,deliveryTime,cloudinaryImageId}=restaurant.data //here i'm also destructuring restarunt to various keys. To make the code clean
    return(
        
        <div className="w-60 h-72  p-5 m-5 shadow-md bg-orange-50">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="foodimg" />
            <h3 className="font-semibold">{name}</h3>
            <h5 className="font-light text-sm leading-5">{cuisines?.join(" , ")}</h5>
            <h6 className="font-normal text-sm leading-10">{costForTwoString}   {deliveryTime} MINS   </h6>   
            
        </div>          
    ) 
} 
  
export default Cards;