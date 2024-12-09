import WorkItem from "./WorkItem"

const WorkList =()=>{
    return(
        <div className="WorkList">
            <ul className="workList">
                <WorkItem/>
            </ul>
            <Button> View More +</Button>

            {isOpen &&
                (<Modal close={closePopup}/>)
            }
        </div>
    )
}

export default WorkList