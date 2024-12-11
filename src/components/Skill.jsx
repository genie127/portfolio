import { useRef } from "react"

const Skill = ()=>{
    const skillRef = useRef([]);


    const skillBarMobOn =()=>{
        const skill_li = document.querySelectorAll('.skill li');
        for(var i=0; i<skill_li.length; i++){
            if(window.innerWidth < 991){            
                skill_li[i].querySelector(".color").style.width=skill_li[i].getAttribute("data-percent")
            }else{
                skill_li[i].querySelector(".color").style.width=0
            }
        }
    }
    
    window.addEventListener('load', function(){
        skillBarMobOn();
    })

    window.addEventListener('resize', function(){
        skillBarMobOn();

    })
    const skillBarOn =(percent,idx)=>{
        if(window.innerWidth >= 991){
            skillRef.current[idx].querySelector(".color").style.width=percent
        }
    }
    const skillBarOff =(idx)=>{
        if(window.innerWidth >= 991){
            skillRef.current[idx].querySelector(".color").style.width=0
        }
    }
    return(
        <div className="Skill">
            <p className="pro_car_tt">Skills</p>
            <ul className="skill">
                <li data-percent={'100%'} ref={(el)=> skillRef.current[1]=el} onMouseEnter={()=>skillBarOn('100%',1)} onMouseLeave={()=>skillBarOff(1)} ><span className="color"></span>HTML5</li>
                <li data-percent={'95%'} ref={(el)=> skillRef.current[2]=el} onMouseEnter={()=>skillBarOn('95%',2)} onMouseLeave={()=>skillBarOff(2)} ><span className="color"></span>CSS3</li>
                <li data-percent={'75%'} ref={(el)=> skillRef.current[3]=el} onMouseEnter={()=>skillBarOn('75%',3)} onMouseLeave={()=>skillBarOff(3)} ><span className="color"></span>Javascript</li>
                <li data-percent={'80%'} ref={(el)=> skillRef.current[4]=el} onMouseEnter={()=>skillBarOn('80%',4)} onMouseLeave={()=>skillBarOff(4)} ><span className="color"></span>JQuery</li>
                <li data-percent={'70%'} ref={(el)=> skillRef.current[5]=el} onMouseEnter={()=>skillBarOn('70%',5)} onMouseLeave={()=>skillBarOff(5)} ><span className="color"></span>React</li>
                <li data-percent={'35%'} ref={(el)=> skillRef.current[6]=el} onMouseEnter={()=>skillBarOn('35%',6)} onMouseLeave={()=>skillBarOff(6)} ><span className="color"></span>Node.js</li>
                <li data-percent={'35%'} ref={(el)=> skillRef.current[7]=el} onMouseEnter={()=>skillBarOn('35%',7)} onMouseLeave={()=>skillBarOff(7)} ><span className="color"></span>GNUBoard(php)</li>
                <li data-percent={'30%'} ref={(el)=> skillRef.current[8]=el} onMouseEnter={()=>skillBarOn('30%',8)} onMouseLeave={()=>skillBarOff(8)} ><span className="color"></span>Python</li>
                <li data-percent={'25%'} ref={(el)=> skillRef.current[9]=el} onMouseEnter={()=>skillBarOn('25%',9)} onMouseLeave={()=>skillBarOff(9)} ><span className="color"></span>Java</li>
                <li data-percent={'50%'} ref={(el)=> skillRef.current[10]=el} onMouseEnter={()=>skillBarOn('50%',10)} onMouseLeave={()=>skillBarOff(10)} ><span className="color"></span>MySQL</li>
                <li data-percent={'100%'} ref={(el)=> skillRef.current[11]=el} onMouseEnter={()=>skillBarOn('100%',11)} onMouseLeave={()=>skillBarOff(11)} ><span className="color"></span>Photoshop</li>
                <li data-percent={'80%'} ref={(el)=> skillRef.current[12]=el} onMouseEnter={()=>skillBarOn('80%',12)} onMouseLeave={()=>skillBarOff(12)} ><span className="color"></span>Illustration</li>
                <li data-percent={'80%'} ref={(el)=> skillRef.current[13]=el} onMouseEnter={()=>skillBarOn('80%',13)} onMouseLeave={()=>skillBarOff(13)} ><span className="color"></span>Figma</li>
            </ul>
        </div>  
    )
}

export default Skill;