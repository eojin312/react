/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let post = '맛집';
    let [title1, setChangeTitle] = useState(['python', 'java', 'kotlin', 'ruby']);
    let [logo, setLogo] = useState('title');
    let [popupApply, setPopupApply] = useState(Array(title1.length).fill(0));
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);


    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>
            <div className="list">
                <button onClick={() => {
                    let copy = [...title1]
                    copy[0] = '여성 코트 추천';
                    setChangeTitle(copy);
                }}>글 수정
                </button>

                <button onClick={() => {
                    let copy = [...title1]
                    copy.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
                    setChangeTitle(copy);
                }}>가나다라 순 정렬
                </button>

                {
                    title1.map(function (a, i) {
                        return (
                            <div className="list" key={i}>
                                <h4 onClick={() => {setModal(!modal); setTitle(i);} }> { title1[i] }</h4>
                                <p>2/18 발행</p>

                                <button onClick={() => {
                                    let copyPopupApply = [...popupApply];
                                    copyPopupApply[i] += 1;
                                    setPopupApply(copyPopupApply);
                                }}>좋아요
                                </button>

                                <p>{popupApply[i]}</p>
                            </div>
                        )
                    })
                }
            </div>

            {
                modal === true ? <Modal title = {title} bookTitle={title1} /> : null
            }

            <Anime/>
        </div>
    );
}

function Modal(props) {
    return (
        <div className={"modal"}>
            <h4>{ props.bookTitle[props.title] }</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                props.bookTitle(['자바', '파이썬', '코틀린', '루비'])
            }}>제목 수정</button>
        </div>
    );
}

function Anime() {
    return (
        <div className="animated-div">
            애니메이션
        </div>
    )
}

export default App;
