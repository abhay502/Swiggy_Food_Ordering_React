export function filterData(searchText, restaurants) {
    // console.log(restaurants)
    return restaurants?.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
}