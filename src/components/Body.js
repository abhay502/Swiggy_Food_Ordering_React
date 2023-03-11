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

            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" aria-label="Search"
                    value={searchText} aria-describedby="search-addon"
                    onChange={(e) => {

                        setSearchText(e.target.value)
                    }

                    }

                />
                <button className="search-btn"
                    onClick={() => {
                        setSearchText(e.target.value)
                    }}>Search</button>
            </div>

            <div className="cardList">

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