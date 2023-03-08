import { useRouteError } from "react-router-dom";



const ErrorPage=()=>{
    const error=useRouteError()
    console.log(error)
    return(
        <>
        <h1>OOPS!</h1>
        <h2>SOMETHING WENT WRONG.....!</h2>
        <h3>{error.status+" : "+error.statusText}</h3>
        </>
    )
}
export default ErrorPage;