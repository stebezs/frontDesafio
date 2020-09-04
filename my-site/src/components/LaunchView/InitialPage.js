import React from 'react';
import 'react-tabs/style/react-tabs.css';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import TabPanel from './Tabpanel';
import NextLaunch from './NextLaunch';
import UpcomingLaunch from './UpcomingLaunch';
import LatestLaunch from './LatestLaunch';
import PastLaunch from './PastLaunch';
import ReactAwesomeClock from "react-awesome-clock";


const allyProps = (index) =>({
    
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
})

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: 20,
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      
    },
  }));

function InitialPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className={classes.root}>
          <ReactAwesomeClock day={true} style={{ color: "black", fontSize: 60 }} startDate="2020-06-06" />
          <h2 align="center">Data do Próximo lançamento</h2>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered >
            <Tab label="Pŕoximo lançamento" {...allyProps(0)} />
            <Tab label="Lançamentos futuros" {...allyProps(1)} />
            <Tab label="Último lançamento" {...allyProps(2)} />
            <Tab label="Lançamentos passados" {...allyProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <NextLaunch />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UpcomingLaunch />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LatestLaunch />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PastLaunch />
        </TabPanel>
      </div>

    );
}

export default InitialPage;
