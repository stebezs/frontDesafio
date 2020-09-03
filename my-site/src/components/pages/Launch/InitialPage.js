import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function InitialPage() {
    return (
            <Tabs>
                <TabList>
                    <Tab>Próximo lançamento</Tab>
                    <Tab>Lançamentos futuros</Tab>
                    <Tab>Último lançamento</Tab>
                    <Tab>Lançamentos passados</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>

    );
}

export default InitialPage;
