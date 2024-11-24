/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let post = '맛집';
    let [title1, actionChangeTitle] = useState(['python', 'java', 'kotlin', 'ruby']);
    let [logo, setLogo] = useState('title');
    let [popupApply, good] = useState(0);
    const [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>
            <div className="list">
                <button onClick={() => {
                    let copy = [...title1]
                    copy[0] = '여성 코트 추천';
                    actionChangeTitle(copy);
                }}>글 수정
                </button>

                <button onClick={() => {
                    let copy = [...title1]
                    copy.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
                    actionChangeTitle(copy);
                }}>가나다라 순 정렬
                </button>

                <h4 onClick={() => setModal(!modal)}>{title1[0]}
                    <button onClick={() => {
                        good(popupApply + 1)
                    }}>좋아요
                    </button>
                    {popupApply} </h4>
                <p>2/18 발행</p>
            </div>
            <div className="list">
                <h4>{title1[1]}</h4>
                <p>2/18 발행</p>
            </div>
            <div className="list">
                <h4>{title1[2]}</h4>
                <p>2/18 발행</p>
            </div>

            {
                modal === true ? <Modal/> : null
            }

            <Anime/>
        </div>
    );
}

function Modal() {
    return (
        <div className={"modal"}>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

function Anime() {
    return (
        <div className="animated-div">
            애니메이션
        </div>
    )
}

export default App;
