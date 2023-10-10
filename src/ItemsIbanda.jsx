import React from "react";
import { useCart } from "react-use-cart";

export default function ItemsIbanda(props) {

  const { addItem,
    removeItem,
  } = useCart();

  return (
    <>
      <div className="container itembox cards" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="card_content">
          <span className="card_subtitle text-center">
            <h6>{props.description}</h6>
          </span>
          <div className="card_description">
            <h6 >{props.location}</h6>
            <h6>{props.price}</h6>
            <h6>Made By: {props.by}</h6>
          </div>
          <div className="buttoncard">
            <button className="btn btn-success"
              onClick={() => addItem(props.item)}>Add</button>
            <button className="btn btn-danger"
              onClick={() => removeItem(props.remove)}>Remove</button>
          </div>
        </div>
      </div>
    </>
  )
}


