/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let post = '맛집';
    let [title1, actionChangeTitle] = useState(['파이썬',  '자바', '코틀린', '루비']);
    let [logo, setLogo] = useState('title');
    let [popupApply, good] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>
            <div className="list">
                <button onClick={() => {
                    let copy = [...title1]
                    copy[0] = '여성 코트 추천'
                    actionChangeTitle(copy);
                }}>글 수정
                </button>

                <h4>{title1[0]}
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
                <h4>{title1[1]}</h4>
                <p>2/18 발행</p>
            </div>
        </div>
    );
}

export default App;
