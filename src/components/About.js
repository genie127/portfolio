const About =()=>{

    
    const skill_li = document.querySelectorAll('.skill_li li'),
    pointColor = '#467A00';
    ;

    skill_li.forEach(function(e, idx){
        e.addEventListener('mouseenter', function(){
            e.style.backgroundImage = `linear-gradient(90deg, #fff 0%, #fff ${e.getAttribute('data-percent')}, ${pointColor} ${e.getAttribute('data-percent')})`
            e.querySelector('.color').style.width = e.getAttribute('data-percent')
        })
        e.addEventListener('mouseleave', function(){
            e.style.backgroundImage = 'none'
            e.querySelector('.color').style.width = 0
        })
    })

    return(
        <div className="About section">
            <div className="container">
                <div className="profile">
                    <div className="pro_pic">
                        <h2 className="secTt">About</h2>
                        <div className="pro_pic_photo">
                        <span className="square top"></span><span className="square bot"></span><span className="square mid"></span>
                        </div>
                        <p>me</p>
                    </div>
                    <div className="pro_car">
                        <div className="pro_car_con">
                            <p className="pro_car_tt">Profile</p>
                            <ul>
                                <li><p>신진희 <span>1997.01.27</span></p></li>
                                <li><p>인천광역시 부평구</p></li>
                                <li><p><a href="mailto:k-vll0i27@daum.net">k-vll0i27@daum.net</a></p></li>
                            </ul>
                        </div>
                        <div className="pro_car_con">
                            <p className="pro_car_tt">Career</p>
                            <ul>
                                <li>
                                    <p className="date">2021.04 ~ 2023.08</p>
                                    <p>파이브센스 <span>개발팀 사원</span></p>
                                </li>
                                <li>
                                    <p className="date">2017.03 ~ 2018.02</p>
                                    <p>한국학교사회복지사협회 <span>홍보팀 인턴</span></p>
                                </li>
                            </ul>
                        </div>
                        <div className="pro_car_con">
                            <p className="pro_car_tt">Edu</p>
                            <ul>
                                <li>
                                    <p className="date">2024.09 ~ 2024.11</p>
                                    <p>프론트엔드 개발(React, JS)<span>이젠아카데미 인천</span></p>
                                </li>
                                <li>
                                    <p className="date">2024.03 ~ 2024.08</p>
                                    <p>AWS클라우드 활용 지능형 웹서비스 풀스택 개발<span>이젠아카데미 인천</span></p>
                                </li>                                
                                <li>
                                    <p className="date">2019.03 ~ 2019.07</p>
                                    <p>모바일웹 UI/UX 콘텐츠제작(웹표준, 반응형웹) <span>더조은컴퓨터아트학원 노원</span></p>
                                </li>
                                <li>
                                    <p className="date">2018.09 ~ 2018.11</p>
                                    <p>웹퍼블리셔(자바스크립트,제이쿼리,반응형웹디자인) <span>이젠아카데미 DX교육센터</span></p>
                                </li>
                                <li>
                                    <p className="date">2018.03 ~ 2018.07</p>
                                    <p>쇼핑몰구축과 웹디자인실무 <span>인컴트랜드평생교육원</span></p>
                                </li>
                                <li>
                                    <p className="date">2015.03 ~ 2019.02</p>
                                    <p>경기대학교 사회복지학 <span>전공</span> 커뮤니티 안전회복학 <span>융합전공</span></p>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="pro_car_con">
                            <p className="pro_car_tt">License</p>
                            <ul>
                                <li>
                                    <p className="date">2024.09</p>
                                    <p>국가공인 SQL 개발자 자격증</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pro_skill">
                        <p className="pro_car_tt">Skills</p>
                        <ul className="skill">
                            <li data-percent="100%"><span className="color"></span>HTML5</li>
                            <li data-percent="100%"><span className="color"></span>CSS3</li>
                            <li data-percent="100%"><span className="color"></span>Javascript</li>
                            <li data-percent="100%"><span className="color"></span>JQuery</li>
                            <li data-percent="100%"><span className="color"></span>React</li>
                            <li data-percent="100%"><span className="color"></span>Node.js</li>
                            <li data-percent="100%"><span className="color"></span>GNUBoard(php)</li>
                            <li data-percent="100%"><span className="color"></span>Python</li>
                            <li data-percent="100%"><span className="color"></span>Java</li>
                            <li data-percent="100%"><span className="color"></span>MySQL</li>
                            <li data-percent="100%"><span className="color"></span>Photoshop</li>
                            <li data-percent="100%"><span className="color"></span>Illustration</li>
                            <li data-percent="100%"><span className="color"></span>Figma</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About;