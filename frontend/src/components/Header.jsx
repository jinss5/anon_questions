import {FaSignInAlt, FaUser, FaSignOutAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div classname='logo'>
                <Link to='/'>Question Me</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header