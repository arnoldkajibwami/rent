import { useCart } from "react-use-cart"
import Breadcrumb from "./Breadcrumb"
import Contact from "./Contact"

export default function CartIbanda() {
    function addItems() {
        alert("contact us on +243 999 888 777 THANK YOU")
    }
    const {
        isEmty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart()
    if (isEmty) return <h1>Empty</h1>

    const filtered = items.filter(item => {
        return item.commune === 'ibanda';
      });

    return (
        <section>
            <div className="admincart admin container">

                {filtered.map((item) => {
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


