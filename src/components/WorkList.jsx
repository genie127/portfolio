import { useDispatch, useSelector } from "react-redux"; 
import WorkItem from "./WorkItem"
import { fetchWorks } from "../features/works/worksSlice";
import { useEffect, useState } from "react";
import { FilterLi } from "../style/StyledComponents"

const WorkList =({openPopup})=>{

    
    const dispatch = useDispatch();
    const {works, loading, error} = useSelector((state)=>state.works);
    console.log(works)

    useEffect(()=>{
        dispatch(fetchWorks())
    },[dispatch])
    

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>{error}</p>
    }
    return(
            <ul className="workList">
                     {works.map((work)=>(
                        <li className='workItem' key={work.id} onClick={openPopup}>
                            <div className="workImg">
                                <img src={work.img} alt="" />
                            </div>
                            <div className="workTxt">
                                    <div className="workAwards">
                                        {work.gd && (
                                            <img src="img/gdweb.png" alt="GD Web Award" />
                                        )}
                                        {work.wa && (
                                            <img src="img/webawards.png" alt="" />
                                        )}
                                    </div>
                                <p className="workCate">{work.cate} </p>
                                <h4 className="workName">{work.name} </h4>
                                <p className="workDate">{work.date}</p>
                                <ul className="workFilter">
                                {work.filter}
                                </ul>
                            </div>
                        </li>
                    ))}
            </ul>
    )
}

export default WorkList