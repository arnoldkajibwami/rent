import React from 'react'
import "./Houselocation.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carssell from './Carssell';
import CarsRent from './CarsRent';

export default function CarsitemsLocation() {
    return (
        <Tabs >
            <TabList className="container" style={{ marginTop: "20px" }}>
                <Tab style={{ color: "#001253" }}>All</Tab>
                <Tab style={{ color: "#001253" }}>To Sell</Tab>
                <Tab style={{ color: "#001253" }}>To Rent</Tab>
            </TabList>

            <TabPanel>
                <CarsRent />
                <Carssell />
            </TabPanel>
            <TabPanel>
                <Carssell />
            </TabPanel>
            <TabPanel>
                <CarsRent />
            </TabPanel>
        </Tabs>
    );
}

