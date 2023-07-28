import bag_img_1 from '../../../images/bag_1.jpg';
import bag_img_2 from '../../../images/bag_2.jpg';
import bag_img_3 from '../../../images/bag_3.jpg';
import bag_img_4 from '../../../images/bag_4.jpg';

function history(){
    return(
        <>
            <div className="bag_order_list">
                <div className="bag_order">
                    <img src={bag_img_1} className="bag_order_img"></img>
                    <div className="bag_order_info">
                        <div className="bag_order_info_word">CHANELL22包款</div>
                        <div className="bag_order_info_word">租借日期: 2023/03/18</div>
                        <div className="bag_order_info_word">租借期限: 2023/03/25</div>
                    </div>
                </div>
                <div className="bag_order">
                    <img src={bag_img_2} className="bag_order_img"></img>
                    <div className="bag_order_info">
                        <div className="bag_order_info_word">2.55口蓋包</div>
                        <div className="bag_order_info_word">租借日期: 2023/03/01</div>
                        <div className="bag_order_info_word">租借期限: 2023/03/14</div>
                    </div>
                </div>
                <div className="bag_order">
                    <img src={bag_img_3} className="bag_order_img"></img>
                    <div className="bag_order_info">
                        <div className="bag_order_info_word">2.55口蓋包</div>
                        <div className="bag_order_info_word">租借日期: 2023/03/01</div>
                        <div className="bag_order_info_word">租借期限: 2023/03/14</div>
                    </div>
                </div>
                <div className="bag_order">
                    <img src={bag_img_4} className="bag_order_img"></img>
                    <div className="bag_order_info">
                        <div className="bag_order_info_word">2.55口蓋包</div>
                        <div className="bag_order_info_word">租借日期: 2023/03/01</div>
                        <div className="bag_order_info_word">租借期限: 2023/03/14</div>
                    </div>
                </div>
            </div>
            <div className="bag_order_list">
                <div className="bag_order">
                    <img src={bag_img_1} className="bag_order_img"></img>
                    <div className="bag_order_info">
                        <div className="bag_order_info_word">CHANELL22包款</div>
                        <div className="bag_order_info_word">租借日期: 2023/03/18</div>
                        <div className="bag_order_info_word">租借期限: 2023/03/25</div>
                    </div>
                </div>
                <div className="bag_order">
                    <img src={bag_img_3} className="bag_order_img"></img>
                    <div className="bag_order_info">
                        <div className="bag_order_info_word">2.55口蓋包</div>
                        <div className="bag_order_info_word">租借日期: 2023/03/01</div>
                        <div className="bag_order_info_word">租借期限: 2023/03/14</div>
                    </div>
                </div>
                <div className="bag_order">
                    <img src={bag_img_2} className="bag_order_img"></img>
                    <div className="bag_order_info">
                        <div className="bag_order_info_word">2.55口蓋包</div>
                        <div className="bag_order_info_word">租借日期: 2023/03/01</div>
                        <div className="bag_order_info_word">租借期限: 2023/03/14</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default history;