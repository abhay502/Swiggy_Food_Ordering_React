import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
const RestaurantMenu=()=>{
    const params=useParams()
    // console.log(params)

    
    const [restaurant,setRestaurant]=useState({});

    useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data= await axios.get("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&Ing=77.62448069999999&menuId=642768")
        // console.log(data?.data?.data)  
        setRestaurant(data?.data?.data)

    }
    
    
    return(
        <>
            <h1>Restaurant id:{restaurant.id}</h1>
           
            <div className="main">
            <h2 >{restaurant?.name}</h2>
            <h5 className="location2">{restaurant?.cuisines?.join(" , ")}</h5>
            <h5 className="location2">{restaurant?.city}, {restaurant?.locality}, {restaurant?.sla?.lastMileTravelString}</h5>
            <h3>Close Time : {restaurant?.availability?.nextCloseTime}</h3>
            <img className="cards" src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
            <h3>  {restaurant?.costForTwoMsg}</h3>
            <h3> {restaurant?.totalRatingsString}</h3>
            
            </div>
            
            <div className="menu">
                <h1>menu</h1>
                {restaurant && restaurant.menu && (Object.values(restaurant.menu.items).map((item)=>{
                    return(
                        <h1 key={item.id}>{item.name}</h1>
                    )
                }))}
            </div>
                   
                
          
           
        </>
    )
}  
export default RestaurantMenu; 