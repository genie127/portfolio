import './scss/About.scss'
import { Wrap } from "../style/StyledComponents";
import Career from "./Career";
import Skill from "./Skill";

const About =()=>{
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