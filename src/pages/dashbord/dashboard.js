import React,{useState} from "react";

import { Typography } from "@mui/material";
import Sidebar from "../../components/sidebar";
import { UserData } from "../../data";
import BarChart from "../../components/views/charts/BarChart";
import LineChart from "../../components/views/charts/LineChart"
import PieChart from "../../components/views/charts/PieChart"
import { Stack } from "@mui/system";


const Dashboard = () => {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    return(
        <>
        <Sidebar/>
        <Stack sx={{ display:'grid',justifyContent:'center', marginTop:'70px'}}>
          <Typography variant="h6"  >Dashboard</Typography>
          <Stack sx={{display:'flex' ,marginTop:'10px'}}>
            <div style={{ width: 700 }}>
              <BarChart chartData={userData} />
            </div>
            <div style={{ width: 700 }}>
               <LineChart chartData={userData} />
            </div>
            <div style={{ width: 700 }}>
               <PieChart chartData={userData} />
            </div>
           </Stack>
        </Stack>
    
        </>
    )
}


export default Dashboard;