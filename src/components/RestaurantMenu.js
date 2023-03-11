
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const params = useParams()

    const restaurant = useRestaurant(params)


    return (!restaurant) ? <Shimmer /> : (
        <>
            <h1>Restaurant id:{restaurant.id}</h1>

            <div className="main">
                <h2 >{restaurant?.name}</h2>
                <h5 className="location2">{restaurant?.cuisines?.join(" , ")}</h5>
                <h5 className="location2">{restaurant?.city}, {restaurant?.locality}, {restaurant?.sla?.lastMileTravelString}</h5>
                <h3>Close Time : {restaurant?.availability?.nextCloseTime}</h3>
                <img className="cards" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>  {restaurant?.costForTwoMsg}</h3>
                <h3> {restaurant?.totalRatingsString}</h3>

                {restaurant?.aggregatedDiscountInfo?.descriptionList?.map((list) => {
                    return (<h5 key={list?.meta}>{list?.meta}  </h5>)
                })}

            </div>

            <div className="menu">
                <h1>menu</h1>
                {restaurant && restaurant.menu && (Object.values(restaurant.menu.items).map((item) => {
                    return (
                        <h1 key={item.id}>{item.name}</h1>
                    )
                }))}
            </div>

        </>
    )
}
export default RestaurantMenu; 