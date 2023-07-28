import React from 'react'
import './sidebar.css';
import CARTPRODUCT from "./Cartproduct";
import Cartproductprop from "./Cartproductprop";
import { useState } from 'react';
import CARTPRODUCTpic from "../../images/bag_1.jpg";//記得換

function Sidebar() {
    const [open, setOpen] = useState(false);
    // const showsidebar = () => { setOpen(!open); }
    const handleClick = () => {
        window.location.href = "/checkout";
    };

    return (
        <div className='dropdowncontainer'>

            <div className='sidebar'>
                <p className='sidebartitle'>購物車</p>
                <div className='sidebar_content'>
                    {CARTPRODUCT.map((product) => <Cartproductprop
                        key={product.id}
                        data={product} />
                    )}
                </div>
                <div>
                    <button className='button-81' onClick={handleClick}>goto結帳</button>
                </div>

            </div>

        </div>
    )
}

export default Sidebar;
