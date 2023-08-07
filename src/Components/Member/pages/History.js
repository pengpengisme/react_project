const history = ({data}) => {
    return(
        <>
            <div className="bag_order_list">
                {data.map((item)=>
                    <div className="bag_order" key={item.oid}>
                        <img src="/media/images/bag_1.jpg" className="bag_order_img"></img>
                        <div className="bag_order_info">
                            <div className="bag_order_info_word">{item.product_name}</div>
                            <div className="bag_order_info_word">租借日期: {item.starttime}</div>
                            <div className="bag_order_info_word">租借期限: {item.endtime}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default history;