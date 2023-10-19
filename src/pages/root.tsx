import {Outlet} from 'react-router-dom'
import MainNavigation from "../Components/MainNavigation"
import Footer from '../Components/Footer'
const Root =()=>{

    
    return (
        <>
        <header>
            <MainNavigation/>
        </header>
        <main>
        <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
       </>
    )
}
export default Root