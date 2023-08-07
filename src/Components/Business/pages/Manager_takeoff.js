function Manager_takeoff({data}){
    const editClick = (pId) => {
        window.location.href = `/product_edit/${pId}`;
    }

    const deposite = (pId) => {
        const product = data.find((item) => item.pid === pId);
    
        if (!product) {
          console.error(`Product with ID ${pId} not found.`);
          return;
        }
    
        const updatedData = {
            pId: product.pid,
            name: product.name,
            description: product.description,
            price: product.price,
            brand: product.brand,
            age: product.age,
            size: product.size,
            likes: product.likes,
            state: "deposite",
        };
    
        fetch(`/api/update_product/${updatedData.pId}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("商品已上架!");
            window.location.reload();
        })
        .catch((error) => {
            console.error("Error updating data:", error);
        });
    };

    return(
        <div className="bag_order_list">
            {data.map((item)=>
                <div className="bag_order">
                    <img src="/media/images/bag_5.jpg" className="bag_order_img"></img>
                    <div className="bag_order_info padding">
                        <div className="bag_order_info_title">{item.brand}</div>
                        <div className="bag_order_info_word word_color">{item.name}</div>
                        <button className='func_btn btn_1' onClick={() => deposite(item.pid)}><div>上架商品</div></button>
                        <button className='func_btn btn_2' key={item.pid} onClick={() => editClick(item.pid)}><div>編輯商品</div></button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Manager_takeoff;