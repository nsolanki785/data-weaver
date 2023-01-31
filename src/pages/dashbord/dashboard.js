import React from "react";

import { Typography } from "@mui/material";
import Sidebar from "../../components/sidebar";

const Dashboard = () => {
    return(
        <>
        <Sidebar/>
        <Typography variant="h3"  sx={{margin:'100px',marginLeft:'80px'}}>Dashboard</Typography>

        </>
    )
}


export default Dashboard;