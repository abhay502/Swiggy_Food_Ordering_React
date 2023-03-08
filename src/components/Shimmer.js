
const Shimmer = () => {
    return (
        <>
        <input  className="search-container" placeholder="Search" type="text"></input>
            <div className="cardList">
                
                {Array(20).fill("").map((e,index)=>(<div key={index} className="shimmer"></div>))}
                

            </div>

 
        </>


    )
}
export default Shimmer;  