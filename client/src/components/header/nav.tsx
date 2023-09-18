import { NavLink } from 'react-router-dom'


const Nav:React.FC = () => (
<nav className='is-flex is-flex-grow-1 is-align-items-center myNav myNav' style={{width:'100%'}}>
    <ul  
            className='is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly'>
        <li><NavLink to='/'>Home</NavLink> </li>
		<li><NavLink to='/confession'>Confession</NavLink> </li>
        <li><NavLink to='/misdemeanour'>Misdemeanour</NavLink> </li>
               
    </ul>
</nav>
);

export default Nav;