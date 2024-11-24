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

    [1, 2, 3].map(function (a) {
        return '123123123';
    })

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

                {
                    title1.map(function (a, i) {
                        return (
                            <div className="list">
                                <h4 onClick={() => setModal(!modal)}>{a}</h4>
                                <p>2/18 발행</p>

                                <button onClick={() => {
                                    good(popupApply + 1)
                                }}>좋아요
                                </button>

                                <p>{popupApply}</p>
                            </div>
                        )
                    })
                }
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
