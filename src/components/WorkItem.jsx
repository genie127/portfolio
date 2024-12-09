const WorkItem =()=>{
    return(
        <div className="WorkItem">
            <li className='workItem' onClick={openPopup}>
                <div className="workImg">
                    <img src="https://placehold.co/310x430" alt="" />
                </div>
                <div className="workTxt">
                    <div className="workAwards">
                        <img src="img/gdweb.png" alt="" />
                        <img src="img/webawards.png" alt="" />
                    </div>
                    <p className="workCate">개인작업</p>
                    <h4 className="workName">날씨 API</h4>
                    <p className="workDate">2024.11.25 ~ 2024.11.30</p>
                    <ul className="workFilter">
                        <FilterLi>디자인</FilterLi>
                        <FilterLi>퍼블리싱</FilterLi>
                        <FilterLi>프론트엔드</FilterLi>
                    </ul>
                </div>
            </li>
            <li className='workItem'onClick={openPopup}>
                <div className="workImg">
                    <img src="https://placehold.co/310x430" alt="" />
                </div>
                <div className="workTxt">
                    <div className="workAwards">
                        <img src="img/webawards.png" alt="" />
                    </div>
                    <p className="workCate">팀 프로젝트</p>
                    <h4 className="workName">책 대여관리 사이트</h4>
                    <p className="workDate">2024.07.20 ~ 2024.08.24</p>
                    <ul className="workFilter">
                        <FilterLi>디자인</FilterLi>
                        <FilterLi>퍼블리싱</FilterLi>
                        <FilterLi>프론트엔드</FilterLi>
                        <FilterLi>백엔드</FilterLi>
                    </ul>
                </div>
            </li>
            <li className='workItem'onClick={openPopup}>
                <div className="workImg">
                    <img src="https://placehold.co/310x430" alt="" />
                </div>
                <div className="workTxt">
                    <div className="workAwards">
                        <img src="img/gdweb.png" alt="" />
                    </div>
                    <p className="workCate">팀 프로젝트</p>
                    <h4 className="workName">영화예매 사이트</h4>
                    <p className="workDate">2024.05.27 ~ 2024.07.15</p>
                    <ul className="workFilter">
                        <FilterLi>디자인</FilterLi>
                        <FilterLi>퍼블리싱</FilterLi>
                        <FilterLi>프론트엔드</FilterLi>
                        <FilterLi>백엔드</FilterLi>
                    </ul>
                </div>
            </li>
            <li className='workItem'onClick={openPopup}>
                <div className="workImg">
                    <img src="https://placehold.co/310x430" alt="" />
                </div>
                <div className="workTxt">
                    <p className="workCate">프로젝트</p>
                    <h4 className="workName">[게임] 프리티비지</h4>
                    <p className="workDate">2023.03.14 ~ 2023.03.24</p>
                    <ul className="workFilter">
                    <FilterLi>퍼블리싱</FilterLi>
                    </ul>
                </div>
            </li>
            <li className='workItem'onClick={openPopup}>
                <div className="workImg">
                    <img src="https://placehold.co/310x430" alt="" />
                </div>
                <div className="workTxt">
                    <div className="workAwards">
                        <img src="img/gdweb.png" alt="" />
                        <img src="img/webawards.png" alt="" />
                    </div>
                    <p className="workCate">프로젝트</p>
                    <h4 className="workName">[회계] 인일회계법인</h4>
                    <p className="workDate">2023.03.14 ~ 2023.03.24</p>
                    <ul className="workFilter">
                    <FilterLi>퍼블리싱</FilterLi>
                    </ul>
                </div>
            </li>
            <li className='workItem'onClick={openPopup}>
                <div className="workImg">
                    <img src="https://placehold.co/310x430" alt="" />
                </div>
                <div className="workTxt">
                    <div className="workAwards">
                        <img src="img/gdweb.png" alt="" />
                        <img src="img/webawards.png" alt="" />
                    </div>
                    <p className="workCate">프로젝트</p>
                    <h4 className="workName">[학교] 연세대학교 고압광물</h4>
                    <p className="workDate">2023.03.14 ~ 2023.03.24</p>
                    <ul className="workFilter">
                        <FilterLi>퍼블리싱</FilterLi>
                    </ul>
                </div>
            </li>
        </div>
    )
}

export default WorkItem