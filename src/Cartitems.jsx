import { useCart } from "react-use-cart"
import Breadcrumb from "./Breadcrumb"

export default function Cartitems() {
    function addItems(){
        alert("open www.auctux.com")
    }
    const {
        isEmty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart()
    if (isEmty) return <h1>Empty</h1>

    return (
        <section>
             <div className="admincart admin container">

                {items.map((item) => {
                    return (
                              <div key={item.id} className="container itembox card mb-5" style={{ backgroundImage: `url(${item.image})` }}>
                            <div class="card_content">
                                <span class="card_subtitle ">
                                    <h6>{item.description}</h6>
                                </span>
                                <div className="card_description text-center">
                                    <h6 >{item.location}</h6>
                                    <h6>{item.price}</h6>
                                    <h6>Made By: {item.by}</h6>
                                </div>
                                <div className="buttoncard buttoncards ">
                                    <button className="btn btn-success"
                                        onClick={() => addItems(item.item)}>Rent your house</button>
                                </div>
                                     </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};


