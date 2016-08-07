import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import CardList from './CardsList';

const Main = ({cards}) => {
    return (
    <Tabs>
        <Tab label="Programa" value="a" >
            <div>
                <CardList cards={cards} />
            </div>
        </Tab>
        <Tab label="Mi Lista" value="b">
            <div>
                <h3>fff</h3>
            </div>
        </Tab>
    </Tabs>
)};

export default Main;