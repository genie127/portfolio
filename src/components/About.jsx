import { Wrap } from "../style/StyledComponents";
import Career from "./Career";
import Skill from "./Skill";

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
            <Wrap>
                <div className="profile">
                    <div className="pro_pic">
                        <h2 className="secTt">About</h2>
                        <div className="pro_pic_photo">
                        <span className="square top"></span><span className="square bot"></span><span className="square mid"></span>
                        </div>
                        <p>me</p>
                    </div>
                    <div className="pro_car">
                        <Career/>
                    </div>
                    <div className="pro_skill">
                        <Skill/>
                    </div>
                </div>
            </Wrap>

        </div>
    )
}
export default About;