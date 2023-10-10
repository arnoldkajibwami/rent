import React from "react";
import Data from "./Data";
import Items from "./Items";

const Dataitems = () => {
    return (
        <>
            <div className="admin">
                {Data.map((item, index) => {
                    return (
                        <>
                            <div >
                                <Items
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    location={item.location}
                                    item={item}
                                    by={item.by}
                                    remove={item.id}
                                    key={index}
                                />
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    )
}

export default Dataitems;