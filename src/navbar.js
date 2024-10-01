import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
    <>
    <div className='navbar-div'>
        <div className='nav-div'>
        <Link to='/' className='link-navbar'>

        <div className='logo-div'>
           <h2><span className='span-text'>Safe</span><span className='detect-text'>Mail</span></h2>

        </div>
        </ Link> 
        <div className='overview-div'>
            <Link to='/overview' className='overview-link'>
            <h3 className='p-overview'>About</h3>
            </Link>
        </div>
        </div>

    </div>
    </>)
}

export default Navbar;