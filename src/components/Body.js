import { useEffect, useState } from "react";
// import { RestaurantList } from "../constants";
import Cards from "./Cards";
import axios from "axios";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
    // console.log(restaurants)
    return restaurants?.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
}
const Body = () => {
    const [allRestaurants,setAllRestaurants]=useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        getRestaurants()
    }, [])
    async function getRestaurants() {
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.623255499999999&lng=76.3810922&page_type=DESKTOP_WEB_LISTING")
            .then(response => {
                console.log(response.data.data)
                setAllRestaurants(response?.data?.data?.cards[0]?.data?.data?.cards)
                setFilteredRestaurants(response?.data?.data?.cards[0]?.data?.data?.cards)

            }).catch(error => {
                console.log(error)
            }) 

    }
        if(!allRestaurants)return null;
      


        return (allRestaurants?.length===0)?<Shimmer/>: (
            <>
            
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search" aria-label="Search"
                        value={searchText} aria-describedby="search-addon"
                        onChange={(e) => {
                            setSearchText(e.target.value)

                            const data = filterData(searchText, allRestaurants)
                            setFilteredRestaurants(data)
                        }

                        } 
        
                    />
                    <button className="search-btn"
                        onClick={() => {
                            const data = filterData(searchText, allRestaurants)
                            setFilteredRestaurants(data)
                        }}>Search</button>
                </div>
                
                <div className="cardList">
                
                    {   filteredRestaurants?.length===0?<h1>No Restaurant Match Your Filter!🥲</h1>:
                        filteredRestaurants?.map((restaurant) => {

                            return <Cards restaurant={restaurant} key={restaurant.data.id} />
                        })
                    }
                </div>
            </>

        )
    

}

export default Body; 