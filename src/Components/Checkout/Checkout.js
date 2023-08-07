import React, { useState } from "react";
import './Checkout.css'
import CheckItem from "./CheckItem";
const Checkout = () => {
    var open = false;
    const check_ToggleInformation = () => {
        const information = document.querySelector(".information-container")
        const form = document.querySelector(".check-form-container")
        if(!open){
            information.style.transform = 'translateY(0px)';
            form.style.transform = 'translateY(0px)'
            open = true;
        }
        else if(open){
            information.style.transform = 'translateY(-500px)'
            form.style.transform = 'translateY(-441px)'
            open = false;
        }
    }

    return (
        <div className="checkoutBackground">
            <div className="check-form-page">
                <div className="check-form-container">
                    <form className="check-form">
                        <div className="check-form-up">
                            <div className="input-label">電子郵件</div>
                            <input type="email" placeholder="E-mail" className="information-input" id="email-input"></input>
                            <div className="check-and-text-comb">
                                <input type="checkbox"></input>
                                <div id="check-peter-information">我想接收關於PETER的優惠資訊</div>
                            </div>
                        </div>

                        <div className="check-form-down">
                            <div className="input-label">配送資訊</div>
                            <div className="name-input-container">
                                <input placeholder="姓" className="information-input" id="lastname-input"></input>
                                <input placeholder="名" className="information-input" id="firstname-input"></input>
                            </div>
                            <div className="address-input-container-a">
                                <input placeholder="郵遞區號" className="information-input"></input>
                                <div className="select-container" >
                                    {/* <label id="select-city-label">縣市</label> */}
                                    <select id="check-city" className="information-input-select">
                                        <option value="">縣市</option>
                                        <option>基隆</option>
                                        <option>台北</option>
                                        <option>新北</option>
                                        <option>桃園</option>
                                        <option>新竹</option>
                                        <option>苗栗</option>
                                        <option>台中</option>
                                        <option>彰化</option>
                                        <option>南投</option>
                                        <option>雲林</option>
                                        <option>嘉義</option>
                                        <option>台南</option>
                                        <option>高雄</option>
                                        <option>屏東</option>
                                        <option>宜蘭</option>
                                        <option>花蓮</option>
                                        <option>台東</option>
                                    </select>
                                </div>
                            </div>

                            <div className="address-input-container-b">
                                <input placeholder="區" className="information-input" id="adrres-area-zone"></input>
                                <input placeholder="詳細地址" className="information-input" id="firstname-input"></input>
                            </div>
                            <input placeholder="連絡電話" className="information-input"></input>
                            <input placeholder="備註" className="information-input"></input>
                        </div>
                    </form>
                </div>
            </div>


            <div className="check-information">
                <div className="phone-information-toggle">
                    <button className="phone-button" onClick={check_ToggleInformation}>展開購買資訊</button>
                </div>
                <div className="information-container">
                    <CheckItem />
                    <CheckItem />
                    <div className="check-final-price">
                        <div className="price-comb">
                            <div>小計</div>
                            <div>$ 16,000</div>
                        </div>
                        <div className="price-comb">
                            <div>運費</div>
                            <div>$ 100</div>
                        </div>
                        <div className="price-comb" id="check-total-price">
                            <div>合計</div>
                            <div>$ 16,100</div>
                        </div>

                        <div className="check-button">
                            <button className="check-final-button">送出訂單</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout