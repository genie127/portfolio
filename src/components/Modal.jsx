import { Button, FilterLi } from '../style/StyledComponents';
import './scss/Modal.scss'

const Modal=({close})=>{
    return(
        <div className="Modal">
            <div className="modalBg">
                <div className="modalBox">
                    <div className="modalBoxTop">
                        <h4 className="conTt">날씨 API</h4>
                        <div className="btnClose" onClick={close}></div>
                    </div>
                    <div className="modalBoxCon">
                        <div className="modalBoxConImg">
                            <img src="https://placehold.co/500x650" alt="" />
                        </div>
                        <div className="modalBoxConTxt">
                            <p className="cate">개인 프로젝트</p>
                            <h3 className="name">날씨 API</h3>
                            <p className="date">2024.11.25 ~ 2024.11.30</p>
                            <p className="company">근무처: 파이브센스</p>
                            <div className="desc">OepnWeather API를 활용해 작업<br />Axios, style-components, redux, swiper, router-dom 등 ㄹㄹㅇㄹㅇㄹㅇㄹ라이브러리 활용<br />반응형 지원</div>
                            <ul className="filter">
                                <FilterLi>디자인</FilterLi>
                                <FilterLi>퍼블리싱</FilterLi>
                                <FilterLi>프론트엔드</FilterLi>
                            </ul>
                            <div className="btnMore">
                                <Button $p={'12px'}>WebSite</Button>
                                <Button $p={'12px'}>Github</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;