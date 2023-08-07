import React from 'react'
import './Checkout.css'
import image from "../../images/bag_2.jpg";

const checkItem = () => {

    var payImage_style = {
        width: "130px",
        height: "80px",
        border: "1.5px solid rgb(151, 151, 150)",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`

    };
    return (
        <div className='check-item'>
            <div className='check-item-title-container'>
                <div style={payImage_style}></div>
                <div className='check-item-titleText-container'>
                    <div id="check-product-name">Loewe白奢皮質肩包</div>
                    <div className="check-texts" id='check-item-price'>NT $8,000</div>
                </div>
            </div>
            <table className="check-information-table">
                <tbody>
                    <tr className="check-texts">
                        <td>使用年齡</td>
                        <td>六年</td>
                        <td>&emsp;&emsp;尺寸</td>
                        <td>12*18</td>
                    </tr>
                    <tr className="check-texts">
                        <td>類別</td>
                        <td>肩背包</td>
                        <td>&emsp;&emsp;備註</td>
                        <td>無</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default checkItem