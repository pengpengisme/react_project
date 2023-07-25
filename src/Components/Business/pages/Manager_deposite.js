import bag_img_1 from '../../../images/bag_1.jpg';
import bag_img_2 from '../../../images/bag_2.jpg';
import bag_img_3 from '../../../images/bag_3.jpg';
import bag_img_4 from '../../../images/bag_4.jpg';
import "../Business.css";

function Manager_deposite(){
    return(
        <div className="bag_order_list">
            <div className="bag_order">
                <img src={bag_img_1} className="bag_order_img"></img>
                <div className="bag_order_info padding">
                    <div className="bag_order_info_title">CHANELL</div>
                    <div className="bag_order_info_word word_color">CHANELL22包款</div>
                    <button className='func_btn btn_1'><div>下架商品</div></button>
                    <button className='func_btn btn_2'><div>編輯商品</div></button>
                </div>
            </div>
            <div className="bag_order">
                <img src={bag_img_2} className="bag_order_img"></img>
                <div className="bag_order_info padding">
                    <div className="bag_order_info_title">CHANELL</div>
                    <div className="bag_order_info_word word_color">2.55口蓋包</div>
                    <button className='func_btn btn_1'><div>下架商品</div></button>
                    <button className='func_btn btn_2'><div>編輯商品</div></button>
                </div>
            </div>
            <div className="bag_order">
                <img src={bag_img_3} className="bag_order_img"></img>
                <div className="bag_order_info padding">
                <div className="bag_order_info_title">CHANELL</div>
                    <div className="bag_order_info_word word_color">經典CF黑金卡包</div>
                    <button className='func_btn btn_1'><div>下架商品</div></button>
                    <button className='func_btn btn_2'><div>編輯商品</div></button>
                </div>
            </div>
            <div className="bag_order">
                <img src={bag_img_4} className="bag_order_img"></img>
                <div className="bag_order_info padding">
                <div className="bag_order_info_title">CHANELL</div>
                    <div className="bag_order_info_word word_color">灰藍色籌碼迷你口蓋包</div>
                    <button className='func_btn btn_1'><div>下架商品</div></button>
                    <button className='func_btn btn_2'><div>編輯商品</div></button>
                </div>
            </div>
        </div>
    )
}
export default Manager_deposite;