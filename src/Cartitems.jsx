import { useCart } from "react-use-cart";
import { useState } from 'react';
import ReactModal from 'react-modal';

export default function Cartitems() {
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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <div className="admincart admin container">

                {items.map((item) => {
                    return (
                        <>
                            {/* <Cartitems /> */}
                            <div key={item.id} className=" card mt-4" style={{ width: "18rem" }}>
                                <div className="card-img-top" style={{ backgroundImage: `url(${item.image})` }}>
                                    <h6>{item.category}</h6>
                                </div>

                                <div className="card-body">

                                    <div className="card-title">
                                        <h5 >{item.location}</h5>
                                        <h5 >{item.price}</h5>
                                    </div>
                                    <p className="card-text">{item.description}</p>

                                    <div className="buttoncard buttoncards ">
                                        <button className="btn btn-primarye"
                                            onClick={() => addItems(item.item)}>Rent Now</button>
                                        <div className="container text-center">
                                            <button onClick={setIsOpen} className="buttondertails">More Details</button>
                                            <ReactModal
                                                isOpen={isOpen}
                                                className="popupmodel"
                                                contentLabel="Popup Modal"
                                            >
                                                <div className="cartitemspopup">
                                                    <div style={{ height: "530px" }}>
                                                        <div className="d-flex closebtn">
                                                            <div></div>
                                                            <button className="closebutton btn btn-danger" onClick={() => setIsOpen(false)}>
                                                                <span>X</span>
                                                            </button>
                                                            <div></div>
                                                        </div>
                                                        <div className="formsall">
                                                            <div>
                                                                <div className="allpictures">
                                                                    <img className="imgdetails" src={item.image1} alt="not found" />
                                                                    <img className="imgdetails" src={item.image2} alt="not found" />
                                                                    <img className="imgdetails" src={item.image3} alt="not found" />
                                                                    <img className="imgdetails" src={item.image4} alt="not found" />
                                                                </div>
                                                                <p className="card-text">{item.description}</p>
                                                                <h5 >{item.location}</h5>
                                                                <h5 >{item.price}</h5>
                                                                <button className="btn btn-primary"
                                                                    onClick={() => addItems(item.item)}>Rent </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ReactModal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div >
        </section >
    )
};


