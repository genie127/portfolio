import { Button, FilterLi } from '../style/StyledComponents';
import './scss/Modal.scss'

const Modal=({close, worksDetail})=>{

    return(
        <div className="Modal">
            <div className="modalBg">
                {worksDetail &&(
                    <div className="modalBox">
                        <div className="modalBoxTop">
                            <h4 className="conTt">{worksDetail.name}</h4>
                            <div className="btnClose" onClick={close}></div>
                        </div>
                        <div className="modalBoxCon">
                            <div className="modalBoxConImg">
                                <img src={worksDetail.img} alt="" />
                            </div>
                            <div className="modalBoxConTxt">
                                <p className="cate">{worksDetail.cate}</p>
                                <h3 className="name">{worksDetail.name}</h3>
                                <p className="date">{worksDetail.date}</p>
                                <p className="company">{worksDetail.company}</p>
                                <div className="desc">{worksDetail.desc}</div>
                                <ul className="filter">
                                    {worksDetail.filter.map((filter, index)=>(
                                        <FilterLi key={index}>{filter}</FilterLi>
                                    ))}
                                </ul>
                                <div className="btnMore">
                                    <Button $p={'12px'} onClick={()=> window.open(worksDetail.web, "_blank")}>WebSite</Button>
                                    <Button $p={'12px'} onClick={()=> window.open(worksDetail.github, "_blank")}>Github</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal;