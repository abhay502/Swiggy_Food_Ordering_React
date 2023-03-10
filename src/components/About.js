import {Outlet} from "react-router-dom"

const About=()=>{
    return(
        <>
        <h1>About Us... Page</h1>
        <p>This is the namste react live course</p>
        <Outlet/>
        </>
    )
}
export default About;