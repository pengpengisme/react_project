import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import './Cartproductprop.css';



export const Cartproductprop = (props) => {

    // const [checkedValue, setisChecked] = useState([]);

    // const hadleChange = (event) => {
    //     const { check, value } = event.target
    //     if (check) {
    //         setisChecked(pre => [...pre, value])
    //     }
    //     else {
    //         setisChecked(pre => {
    //             return [...pre.filter(price => price != value)]
    //         })
    //     }
    // }


    const { id, brand, name, startdate, enddate, price, pic } = props.data;

    return (
        <div className="cartproduct">
            {/* <input
                className="inputcheckbox"
                type="checkbox"
                value={price}
                onChange={hadleChange}
            /> */}
            <div className="cartimage">
                <img src={pic}></img>
            </div>
            <div className="description">
                <div className="brand">
                    <div className="sedate">
                        <p className="brandandname">{brand}  {name}</p>

                    </div>
                    <p>NT${price}</p>
                </div>

                <div className="sedate"><p>開始日期：</p>
                    <p>{startdate}</p></div>
                <div className="sedate"><p>歸還日期：</p>
                    <p>{enddate}</p></div>

            </div>
            <button className="deletebutton">刪除</button>

        </div>
    );

}


export default Cartproductprop;