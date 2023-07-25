import React from "react";

const CheckPage1 = () => {
    return (
        <div className="page1">
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
                <h3 id="check_price">Total 450$</h3>
            </div>
        </div>
    )
}

export default CheckPage1