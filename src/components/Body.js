import { useState } from "react";
import { RestaurantList } from "../constants";
import Cards from "./Cards";
 
function filterData(searchText,restaurants){
    // console.log(restaurants)
   return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText))
}
const Body = () => {
   
    const [restaurants,setRestaurants]=useState(RestaurantList)
    const [searchText,setSearchText]=useState("") 
     
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" aria-label="Search"
                 value={searchText} aria-describedby="search-addon"
                 onChange={(e)=>{setSearchText(e.target.value)
                
                    const data= filterData(searchText,restaurants)
                    setRestaurants(data)
                }
                  
                }
                       
                 />
                <button className="search-btn" 
                onClick={()=>{
                  const data= filterData(searchText,restaurants) 
                  setRestaurants(data)
                }}>Search</button>
            </div>  
            <div className="cardList">   
                {                                                                                                                             
                    restaurants.map((restaurant) => {     

                        return <Cards restaurant={restaurant} key={restaurant.data.id} />  
                    }) 
                }
            </div>
        </>

    )
}

export default Body; 