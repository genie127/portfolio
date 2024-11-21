import './Main.scss'

const Main =()=>{
    return(
        <div className="Main">
            <div className="container">
                <div className="popupBox">
                    <h3 className="part"><span className="square top"></span><span className="square bot"></span><span className="square mid"></span>Web Front-end</h3>
                    <div className="btnArea">
                        <span className="btnPopup green"></span>
                        <span className="btnPopup yellow"></span>
                        <span className="btnPopup red"></span>
                    </div>
                    <div className="conArea">
                        <h2 className="mainTt">Portfolio</h2>
                        <h3 className="name"><span>Shin </span><span>JinHee</span></h3>
                        <div className="prop">
                            <div className="propWrap">
                                <p>Efficient</p>
                                <p>Accessibility</p>
                                <p>Responsive</p>
                                <p>Semantic</p>
                                <p>Standards</p>
                                <p>Crossbrowsing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll">
                <p>Scroll down</p>
                <span className="scrollArr"></span>
            </div>
        </div>
    )
}
export default Main;