import React, { useState } from "react";
import Deposite from './pages/Manager_deposite';
import Delivery from './pages/Manager_delivery';
import Renting from './pages/Manager_renting';
import Takeoff from './pages/Manager_takeoff';
// import Analyze from './pages/Manager_analyze';

const Business= () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [1, 2, 3, 4];
    const pageNames = ["倉庫存放中", "配送中", "租借中", "以下架商品"];

    const setPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return(
        <div className="member_container">
            <div className="info_list">
                <div className="title">商品管理</div>
                <div className="bag_order_all">
                    <div className="btn_list business_btn">
                        {pageNumbers.map((pageNumber, index) => (
                            <div className="btn_list_btn page_btn">
                                <button key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNames[index]}</button>
                            </div>
                        ))}
                    </div>
                    <div className="forpages">
                        {currentPage === 1 && <Deposite/>}
                        {currentPage === 2 && <Delivery/>}
                        {currentPage === 3 && <Renting/>}
                        {currentPage === 4 && <Takeoff/>}
                    </div>
                </div>
            </div>
        </div> 
    )

}
export default Business;