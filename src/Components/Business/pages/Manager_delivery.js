import React from "react";
import "../Business.css";

function Manager_delivery({data}){
    const editClick = (pId) => {
        window.location.href = `/product_edit/${pId}`;
    }

    return(
        <div className="bag_order_list">
            {data.map((item)=>
                <div className="bag_order">
                    <img src="/media/images/bag_2.jpg" className="bag_order_img"></img>
                    <div className="bag_order_info padding">
                        <div className="bag_order_info_title">{item.brand}</div>
                        <div className="bag_order_info_word word_color">{item.name}</div>
                        <button className='func_btn btn_1'><div>取消訂單</div></button>
                        <button className='func_btn btn_2' key={item.pid} onClick={() => editClick(item.pid)}><div>編輯訂單</div></button>
                    </div>
                </div>
            )}
            
        </div>


    )
}
export default Manager_delivery;