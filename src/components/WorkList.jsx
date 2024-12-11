import { FilterLi } from "../style/StyledComponents"
import Modal from './Modal';
const WorkList =({works, openPopup, closePopup, isOpen, dataId})=>{

    return(
            <>
                <ul className="workList">
                    {works.map((work)=>(
                        <li className='workItem' key={work.id} onClick={()=>openPopup(work.id)}>
                            <div className="workImg">
                                <img src={work.img} alt="" />
                            </div>
                            <div className="workTxt">
                                    <div className="workAwards">
                                        {work.gd && (
                                            <img src="/img/gdweb.png" alt="GD Web Award" />
                                        )}
                                        {work.wa && (
                                            <img src="/img/webawards.png" alt="" />
                                        )}
                                    </div>
                                <p className="workCate">{work.cate} </p>
                                <h4 className="workName">{work.name} </h4>
                                <p className="workDate">{work.date}</p>
                                <ul className="workFilter">
                                    {work.filter.map((filter, index)=>(
                                        <FilterLi key={index}>{filter}</FilterLi>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
                {isOpen &&
                <Modal close={closePopup} worksDetail={works[dataId]}/>
                }
              
            </>
    )
}

export default WorkList