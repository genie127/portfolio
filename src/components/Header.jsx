import { Link } from 'react-router-dom';

import './scss/Header.scss'
import { Wrap } from '../style/StyledComponents';
const Header =()=>{
      
    const headerScroll=()=>{
        const aboutOffset = document.querySelector(".About").offsetTop - 300;
        window.addEventListener('scroll', function(){
            const windowST = window.scrollY;
            if(windowST > aboutOffset){
            document.querySelector(".Header").classList.add("on")
            }else{
            document.querySelector(".Header").classList.remove("on")
            }
        })  
    }
    ["load", "resize"].forEach(function (evt) {
        window.addEventListener(evt, headerScroll);
      });
    const secScroll=(offsetTop)=>{
        const secOffset = document.querySelector(offsetTop).offsetTop;
        window.scrollTo(0,secOffset)
        console.log(secOffset)
    }
    
    return(
        <div className="Header">
            <Wrap>
                <h1 className="logo">
                    <Link to="/">
                        <img src="/img/logo.svg" alt="Portfolio Shinjinhee"/>
                    </Link>
                </h1>
                <nav>
                    <ul className="gnb">
                        <li onClick={()=>secScroll('.Main')}>
                           Home
                        </li>
                        <li onClick={()=>secScroll('.About')}>
                           About
                        </li>
                        <li onClick={()=>secScroll('.Works')}>
                           Works
                        </li>
                        {/* <li onClick={()=>secScroll('.Contact')}>
                           Contact
                        </li> */}
                    </ul>
                </nav>
            </Wrap>            
        </div>
    )
}
export default Header;
