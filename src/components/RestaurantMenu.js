
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const params = useParams() 

    const restaurant = useRestaurant(params)


    return (!restaurant) ? <Shimmer /> : (
        <>
            {/* <h1>Restaurant id:{restaurant.id}</h1> */}

            <div className="mx-96 m-5">
                <h6 className="font-light text-xs text-gray-600">Home / {restaurant?.city+" / "+restaurant?.area+" / "+restaurant?.name}</h6>

                <h2 className="font-bold mt-7" >{restaurant?.name}</h2>
                <h5 className="font-thin text-sm text-gray-600">{restaurant?.cuisines?.join(" , ")}</h5>
                <h5 className="font-extralight text-sm text-gray-600">{restaurant?.city}, {restaurant?.locality}, {restaurant?.sla?.lastMileTravelString}</h5>
                <h5>---------------------------------------------------------------------------------------------------------------------</h5>

                <h3 className="font-extralight">Close Time : {restaurant?.availability?.nextCloseTime}</h3>
                <img className="w-96" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />

                <h3 className="font-semibold">  {restaurant?.costForTwoMsg}</h3>
                <h3> {restaurant?.totalRatingsString}</h3>

               <div >
               {restaurant?.aggregatedDiscountInfo?.descriptionList?.map((list) => {
                    return (<button className="p-2 border-2 rounded-md m-2 border-grey" key={list?.meta}><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/1acdb97aadcb61b323307845bda86535"></img> {list?.meta}  </button>) 
                })}
               </div>

            </div>

            <div className="mx-96 m-5">
                <h1 className="font-bold">MENU</h1>
                {restaurant && restaurant.menu && (Object.values(restaurant.menu.items).map((item) => {
                    return (
                        <div>

                        <h1>________________________________________ ______________________________</h1>
                        <h3 className="font-semibold" key={item.id}>{item.category}({item.category.sum()})</h3>
                        <h1 className="font-semibold" key={item.id}>{item.name}</h1>
                        <h1 className="font-medium" key={item.id}>₹{item.price/100}</h1>
                        <button className="border-2 border-grey text-green-500 mx-96 px-5 rounded-md font-semibold shadow-md hover:border-orange-400 " >ADD</button>
                        </div>
                    )
                }))}
            </div>

        </>
    )
}
export default RestaurantMenu; 