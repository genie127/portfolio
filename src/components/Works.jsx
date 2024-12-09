
import { useEffect, useState } from "react";
import { Button, Wrap } from '../style/StyledComponents'
import './scss/Main.scss'
import WorkList from './WorkList'

import Modal from './Modal';


const Works = ()=>{

    const [isOpen, setIsOpen] = useState(false);

    const openPopup=()=>{
        setIsOpen(true);
        document.querySelector('body').style.overflow='hidden'
    }
    const closePopup=()=>{
        setIsOpen(false)
        document.querySelector('body').style.overflow='auto'

    }
    return(
        <div className="Works section">
            <Wrap>
                <div className="titleSec">
                    <h2 className="secTt">Works</h2>
                    <div className="filterWrap">
                        <Button className="hidden_w">All</Button>
                        <ul className="filter">
                            <li>All</li>
                            <li className='on'>Design</li>
                            <li>Publishing</li>
                            <li>Front-end</li>
                            <li>Back-end</li>
                        </ul>
                    </div>
                </div>
                <div className="workSec">
                    <WorkList openPopup={openPopup}/>
                    
                    <Button> View More +</Button>

                    {isOpen &&
                        (<Modal close={closePopup}/>)
                    }
                </div>
                
            </Wrap>
        </div>
    )
}

export default Works