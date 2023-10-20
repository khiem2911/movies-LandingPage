import {Outlet} from 'react-router-dom'
import MainNavigation from '../UI/MainNavigation'
import Footer from '../UI/Footer'
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