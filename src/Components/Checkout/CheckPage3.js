import React from "react";
import "./CheckPage3.css"

const CheckPage3 = () => {
    return (
        <div className="upper">
                <h3>Chanel</h3>
                <div className="checkList">
                    <div className="checkNname">
                        Item
                    </div>
                    <div className="checkContent">
                        classic 60's
                    </div>
                </div>
                <div className="checkList">
                    <div className="checkNname">
                        Price(per day)
                    </div>
                    <div className="checkContent">
                        150$
                    </div>
                </div>
                <div className="checkList">
                    <div className="checkNname">
                        days
                    </div>
                    <div className="checkContent">
                        3
                    </div>
                </div>
                <h3 id="check_price_page3">Total 450$</h3>
                <div>付款方式：貨到付款</div>
                <div>收件地址：大安街168號</div>
                <div>聯絡電話：0973306374</div>
            </div>
    )
}

export default CheckPage3