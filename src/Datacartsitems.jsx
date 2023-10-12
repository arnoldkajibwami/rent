import React from "react";
import Carsitems from "./CarsItem";
import Datacars from "./Datacars";

const Datacarsitems = () => {
    return (
        <>
            <div className="admin">
                {Datacars.map((item, index) => {
                    return (
                        <>
                            <div >
                                <Carsitems
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    location={item.location}
                                    item={item}
                                    marque={item.marque}
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

export default Datacarsitems;