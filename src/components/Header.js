import './Header.scss'
const Header =()=>{
    return(
        <div className="Header">
            <div className="container">
                <h1 class="logo">
                    <a>
                        <img src="/img/logo.svg" alt="Portfolio Shinjinhee"/>
                    </a>
                </h1>
                <nav>
                    <ul className="gnb">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Works</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}
export default Header;
