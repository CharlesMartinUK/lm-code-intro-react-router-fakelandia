 
 import { Routes, Route } from 'react-router-dom'
 
 import Home from '../home/home'
 import Confession from '../confession/confession'
 import Misdemeanour from '../misdemeanour/misdemeanour'
 import MainLayout from '../layouts/main_layouts'
 import NotFound from '../not_found/not_found'
 
 const Router:React.FC = () => (
	<Routes>
		<Route path="/" element={<MainLayout />} >
			<Route index element={<Home/>} />
			<Route path='/confession' element={<Confession/>} />
			<Route path='/misdemeanour' element={<Misdemeanour/>} />
			<Route path = '*' element={<NotFound/>} />
		</Route>
	
	</Routes>
 
 
 )
 
 export default Router