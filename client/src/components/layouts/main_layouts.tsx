import { Outlet } from 'react-router'

import Header from '../header/header';
import Footer from '../footer/footer';


const MainLayout = () => <>
	<Header/>
		
	<main className='p-6' style={{flex:'1'}}>
		<Outlet />
	</main>
    
	<Footer/>
	
</>


export default MainLayout