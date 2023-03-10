import { IMG_CDN_URL } from "../constants";



const Cards=({restaurant})=>{ //here I'm destructuring props to {restaurant}
    // console.log(props);
   const {name,cuisines,costForTwoString,deliveryTime,cloudinaryImageId}=restaurant.data //here i'm also destructuring restarunt to various keys. To make the code clean
    return(
        
        <div className="cards">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="foodimg" />
            <h3>{name}</h3>
            <h5 className="location">{cuisines?.join(" , ")}</h5>
            <h6>{costForTwoString}   {deliveryTime} MINS   </h6>   
            
        </div>          
    )
} 
 
export default Cards;