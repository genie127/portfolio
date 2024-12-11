import { useEffect } from 'react';
import { Button, FilterLi } from '../style/StyledComponents';
import './scss/Modal.scss'

const Modal=({close, worksDetail})=>{
    useEffect(() => {
        const modalBoxCon = document.querySelector('.modalBoxCon');
        // 모달이 열릴 때, .modalBoxCon의 스크롤을 맨 위로 설정
        if (modalBoxCon) {
            console.log(modalBoxCon.scrollTop)
            modalBoxCon.scrollTop = -9999; // 스크롤을 맨 위로 설정
        }
    }, []);

   
    

    console.log()
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
                                {worksDetail.company&&(
                                    <p className="company">근무처: {worksDetail.company}</p>
                                )}
                                <div className="desc">{worksDetail.desc}</div>
                                <ul className="filter">
                                    {worksDetail.filter.map((filter, index)=>(
                                        <FilterLi key={index}>{filter}</FilterLi>
                                    ))}
                                </ul>
                                <div className="btnMore">
                                    {worksDetail.web&&(
                                        <Button $p={'12px'} onClick={()=> window.open(worksDetail.web, "_blank")}>WebSite</Button>
                                    )}
                                    {worksDetail.github&&(
                                        <Button $p={'12px'} onClick={()=> window.open(worksDetail.github, "_blank")}>Github</Button>
                                    )}
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