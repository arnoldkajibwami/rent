import React from "react";
import Data from "./Data";
import Items from "./Items";
import DataIbanda from "./Dataibanda";
import Datakadutu from "./Datakadutu";
import Databagira from "./Databagira";
import ItemsIbanda from "./ItemsIbanda";
import Itemskadutu from "./ItemsKadutu";
import Itemsbagira from "./ItemsBagira";


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

                {/* {DataIbanda.map((item, index) => {
                    return (
                        <>
                            <div className="mt-4">
                                <ItemsIbanda
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

                {Datakadutu.map((item, index) => {
                    return (
                        <>
                            <div className="mt-4">
                                <Itemskadutu
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

                {Databagira.map((item, index) => {
                    return (
                        <>
                            <div className="mt-4">
                                <Itemsbagira
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
                })} */}
            </div>

        </>
    )
}

export default Dataitems;