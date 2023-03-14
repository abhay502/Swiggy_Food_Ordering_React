import { useState } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantHome from "../utils/useRestaurantHome";
import useOnline from "../utils/useOnline";

const Body = () => {

    const [searchText, setSearchText] = useState("")
    const [allRestaurants, filteredRestaurants] = useRestaurantHome(searchText)

    const Online=useOnline() 
    if(!Online)return<h1>🦆 Please Check your Internet Connection!! 🔴</h1>

    if (!allRestaurants) return null;

  

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>

            <div className="flex p-6 pl-20 bg-orange-50 m-2 ">
                <input type="text" className="rounded-md border-2 focus:bg-gray-100 mx-2" placeholder="Search" aria-label="Search"
                    value={searchText} aria-describedby="search-addon"
                    onChange={(e) => {

                        setSearchText(e.target.value)
                    }

                    }

                />
                <button className="p-1  bg-orange-400 text-white rounded-md hover:bg-orange-500"
                    onClick={() => {
                        setSearchText(e.target.value)
                    }}>Search</button>
                    <div className="mx-40">
                        <h6>50% OFF ON FIRST ORDER + FREE DELIVERY</h6> 
                    </div>
            </div>

            <div className="flex flex-wrap mx-14">

                {filteredRestaurants?.length === 0 ? <h1>No Restaurant Match Your Filter!🥲</h1> :
                    filteredRestaurants?.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id} >
                                <Cards restaurant={restaurant} />
                            </Link>
                        )
                    })
                }
            </div>
        </>

    )


}

export default Body; 