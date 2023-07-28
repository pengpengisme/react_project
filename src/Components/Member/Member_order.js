import React, { useState } from "react";
import "./Member.css";

import History from "./pages/History";
import Waiting_payment from "./pages/Waiting_payment";
import Waiting_received from "./pages/Waiting_received";
import Waiting_shipped from "./pages/Waiting_shipped";

const Member_test = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [1, 2, 3, 4];
    const pageNames = ["歷史訂單", "待付款", "待出貨", "待收貨"];

    const setPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="member_container">
            <div className="info_list">
                <div className="title">我的訂單</div>
                <div className="bag_order_all">
                    <div className="btn_list">
                        {pageNumbers.map((pageNumber, index) => (
                            <div className="btn_list_btn">
                                <button key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNames[index]}</button>
                            </div>
                        ))}
                    </div>
                    <div className="forpages">
                        {currentPage === 1 && <History/>}
                        {currentPage === 2 && <Waiting_payment/>}
                        {currentPage === 3 && <Waiting_received/>}
                        {currentPage === 4 && <Waiting_shipped/>}
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Member_test;
