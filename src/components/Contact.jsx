import { Wrap } from "../style/StyledComponents";

const Contact =()=>{
    return(
        <div className="Contact section">
            <Wrap>
                <div className="titleSec">
                    <h2 className="secTt">Contact</h2>
                    <ul className="address">
                        <li>Mail: k-vll0i27@daum.net</li>
                        <li>Github: https://github.</li>
                    </ul>
                </div>
                <div className="conSec">
                    <form action="">
                        <div className="formCon">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="이름을 입력해주세요." />
                        </div>
                        <div className="formCon">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="이름을 입력해주세요." />
                        </div>
                        <div className="formCon">
                            <label htmlFor="">Subject</label>
                            <input type="text" placeholder="이름을 입력해주세요." />
                        </div>
                        <div className="formCon">
                            <label htmlFor="">Message</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </form>
                </div>
            </Wrap>
        </div>
    )
}

export default Contact;