import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constants";


const useRestaurant=(params)=>{

    const [restaurant,setRestaurant]=useState(null)
    useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data= await axios.get(FETCH_RESTAURANT_URL+params.id)
        setRestaurant(data?.data?.data)
    }
    console.log(restaurant)
    return restaurant;
    
}
export default useRestaurant;