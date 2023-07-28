import React from "react";
import './CheckPage2.css'
const CheckPage2 = () => {
    return (
        <div className="page2">
            <form className="pay_container">
                <div className="payMethod_contatiner">
                    <label>
                        <input type="radio" name="payMethod" value={1} checked></input>
                        取貨付款
                    </label>
                    <label>
                        <input type="radio" name="payMethod" value={2}></input>
                        信用卡付款
                    </label>
                </div>
                <div className="payInformation_container">
                    <label>收貨地址
                        <input type="text"></input>
                    </label>
                    <label>收貨人姓名
                        <input type="text"></input>
                    </label>
                    <label>聯絡電話
                        <input type="text"></input>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default CheckPage2