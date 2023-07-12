import { useCart } from "react-use-cart"
import Breadcrumb from "./Breadcrumb"

export default function Cartitems() {
    function addItems() {
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
                        <div key={item.id} className=" card mt-4" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={item.image} alt="Card image cap" />

                            <div class="card-body">

                                <div className="card-title">
                                    <h5 >{item.location}</h5>
                                    <h5 >{item.price}</h5>
                                </div>
                                <p className="card-text">{item.description}</p>

                                <div className="buttoncard buttoncards ">
                                    <button className="btn btn-primary"
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


