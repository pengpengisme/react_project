import React from "react";
import "./Bag.css"
import ImageSlider from "./ImageSlider"
import Comment from "./Comment/Comment"
import image from "../../images/bag_5.jpg"

const Bag = () => {
    const slides = [
        { url: image, title: 'chanel_brown' },
        { url: image, title: 'chanel_black' },
        { url: image, title: 'chanel_white' },
    ]
    return (
        <div className="all_container">
            <div className="pic_container">
                <ImageSlider slides={slides} />
            </div>
            <div className="right_container">
                <div className="info">
                    <div className="bag-texts" id='name'>Loewe白奢皮質肩包</div>
                    <div className="bag-texts" id='price'>NT$ 8000</div>
                    <hr className="area-divider"></hr>
                    <table className="bag-information-table">
                        <tbody>
                            <tr className="bag-texts">
                                <td>・使用年齡</td>
                                <td>五年</td>
                            </tr>
                            <tr className="bag-texts">
                                <td>・尺寸</td>
                                <td>12*18</td>
                            </tr>
                            <tr className="bag-texts">
                                <td>・類別</td>
                                <td>肩背包</td>
                            </tr>
                            <tr className="bag-texts">
                                <td>・備註</td>
                                <td>無</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="info_buttons">
                        <button className="product-buttons" id="add-to-cart">加入租借車</button>
                        <button className="product-buttons" id="rent">立即租借</button>
                    </div>
                </div>
                <div className="comment_area">
                    <hr className="area-divider"></hr>
                    <div className="comment-title">留言區</div>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        </div>
    )
}

export default Bag