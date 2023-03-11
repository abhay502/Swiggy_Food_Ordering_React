import axios from "axios"
import { useEffect, useState } from "react"
import { GET_ALL_RESTUARANT } from "../constants"
import { filterData } from "../utils/Helper";  

const useRestaurantHome = (searchText) => {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])


    useEffect(() => {
        getRestaurants()
    }, [])

    useEffect(() => {  
        const data = filterData(searchText, allRestaurants)
        setFilteredRestaurants(data)
    }, [searchText, allRestaurants])    

    async function getRestaurants() {
        axios.get(GET_ALL_RESTUARANT)
            .then(response => {
                setAllRestaurants(response?.data?.data?.cards[2]?.data?.data?.cards)
                setFilteredRestaurants(response?.data?.data?.cards[2]?.data?.data?.cards)
            }).catch(error => {
                console.log(error) 
            })
    }

    return [allRestaurants, filteredRestaurants]
    
}

export default useRestaurantHome;
