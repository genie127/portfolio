import './scss/Work.scss'
import { useDispatch, useSelector } from "react-redux"; 
import { fetchWorks } from "../features/works/worksSlice";
import { useEffect, useState } from "react";
import { Button, Wrap } from '../style/StyledComponents'
import './scss/Main.scss'
import WorkList from './WorkList'



const Works = ()=>{
    //게시글 목록, 상세
    const dispatch = useDispatch();
    const {works, loading, error} = useSelector((state)=>(state.works));
    useEffect(()=>{
        dispatch(fetchWorks())
    },[dispatch])
  

    //필터적용
    const [selectedCate, setSelectedCate] = useState("All")
    const filteredList = selectedCate ==="All" ? works : works.filter((item)=> item.filter.includes(selectedCate))

        
    const [isOpen, setIsOpen] = useState(false)
    const [dataId, setDataId] = useState(0)
    const openPopup=async(id)=>{
        setDataId(id)
        setIsOpen(true);
        document.querySelector('body').style.overflow='hidden'


    }
    const closePopup=()=>{
        setIsOpen(false)
        document.querySelector('body').style.overflow='auto'

    }
    const openDrop=()=>{
        document.querySelector('.filter').classList.toggle("on")
    }
    const selectFilter =(id)=>{
        setSelectedCate(id);
        var cate = '';        
        if(id==="디자인"){
            cate = "Design"
        }else if(id==="퍼블리싱"){
            cate = "Publishing"
        }else if(id==="프론트엔드"){
            cate = "Front-end"
        }else if(id==="백엔드"){
            cate = "Back-end"
        }else{
            cate = "All"
        }

        document.querySelector(".m_filter").innerText=cate;
        if(document.querySelector('.filter').classList.contains("on")){
            document.querySelector('.filter').classList.remove("on")
        }
    }

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>{error}</p>
    }
    return(
        <div className="Works section">
            <Wrap>
                <div className="titleSec">
                    <h2 className="secTt">Works</h2>
                    <div className="filterWrap">
                        <Button className="hidden_w m_filter" onClick={()=>{openDrop()}} style={{width:"100%", letterSpacing:"0.17em"}}>All</Button>
                        <ul className="filter">
                            <li className={`${selectedCate === "All" ? "on" : ""}`} onClick={()=>{selectFilter('All')}}>All</li>
                            <li className={`${selectedCate === "디자인" ? "on" : ""}`} onClick={()=>selectFilter('디자인')}>Design</li>
                            <li className={`${selectedCate === "퍼블리싱" ? "on" : ""}`} onClick={()=>selectFilter('퍼블리싱')}>Publishing</li>
                            <li className={`${selectedCate === "프론트엔드" ? "on" : ""}`} onClick={()=>selectFilter('프론트엔드')}>Front-end</li>
                            <li className={`${selectedCate === "백엔드" ? "on" : ""}`} onClick={()=>selectFilter('백엔드')}>Back-end</li>
                        </ul>
                    </div>
                </div>
                <div className="workSec">
                    <WorkList works={filteredList} openPopup={openPopup} closePopup={closePopup} isOpen={isOpen} dataId={dataId} />
                    
                    {/* <Button> View More +</Button> */}
                </div>
                
            </Wrap>
        </div>
    )
}

export default Works