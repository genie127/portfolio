import { Link } from 'react-router-dom';

import './scss/Header.scss'

const Header =()=>{
    return(
        <div className="Header">
            <div className="container">
                <h1 className="logo">
                    <Link to="/">
                        <img src="/img/logo.svg" alt="Portfolio Shinjinhee"/>
                    </Link>
                </h1>
                <nav>
                    <ul className="gnb">
                        <li>
                           Home
                        </li>
                        <li>
                           About
                        </li>
                        <li>
                           Works
                        </li>
                        <li>
                           Contact
                        </li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}
export default Header;
