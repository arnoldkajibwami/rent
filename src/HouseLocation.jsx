import React from 'react'
import "./Houselocation.css"
import Cartitems from './Cartitems'
import CartIbanda from './CardIbanda'
import CartBagira from './CardBagira'
import CartKadutu from './CartKadutu'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CartRent from './CartRent'
import CartSell from './CartSell'
import HomeCard from './HomeCard'

export default function Houselocation() {
    return (
        <Tabs >
            <TabList className="container" style={{marginTop:"20px"}}>
                <Tab style={{ color: "#001253" }}>All</Tab>
                <Tab style={{ color: "#001253" }}>Ibanda</Tab>
                <Tab style={{ color: "#001253" }}>Kadutu</Tab>
                <Tab style={{ color: "#001253" }}>Bagira</Tab>
                <Tab style={{ color: "#001253" }}>To Sell</Tab>
                <Tab style={{ color: "#001253" }}>To Rent</Tab>
            </TabList>

            <TabPanel>
                {/* <h2>All</h2> */}
                {/* <Cartitems /> */}
            
                    <HomeCard/>
                    <CartRent/>
                    <CartSell/>
                {/* </div> */}
            </TabPanel>
            <TabPanel>
                {/* <h2>Ibanda</h2> */}
                <CartIbanda />
            </TabPanel>
                <TabPanel>
                    {/* <h2>Kadutu</h2> */}
                    <CartKadutu />
                </TabPanel>
                <TabPanel>
                    {/* <h2>Bagira</h2> */}
                    <CartBagira />
                </TabPanel>
            <TabPanel>
                {/* <h2>To Sell</h2> */}
                <CartSell/>
            </TabPanel>
            <TabPanel>
                {/* <h2>To Rent</h2> */}
                <CartRent />
            </TabPanel>
        </Tabs>
    );
}

