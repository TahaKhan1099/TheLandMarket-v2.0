import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref, get, remove } from "firebase/database";
import { Pie, PieChart, Cell, Legend, Tooltip } from "recharts";
import { Container, Box, Typography, Paper } from "@mui/material";
import { db } from "../../firebase";
import { auth } from "../../firebase";

const AdminDashboardHome = () => {

          {/* ---------------------Fetching Dealers Data----------------------- */}

  const [dealerData, setDealerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const dealersRef = ref(db, "DealerDataRecords");
      onValue(dealersRef, (snapshot) => {
        if (snapshot.exists()) {
          const dealersData = snapshot.val();
          const dealers = Object.values(dealersData);
          setDealerData(dealers);
        }
      });
    };

    fetchData();
  }, []);

  const getDealerCountBySociety = (societyName) => {
    return dealerData.filter((dealer) => dealer.societyName === societyName)
      .length;
  };

  const totalDealers = dealerData.length;
  const chartData = [
    {
      name: "Bahria Town Phase 3",
      value: getDealerCountBySociety("Bahria Town Phase 3"),
    },
    { name: "D-17", value: getDealerCountBySociety("D17") },
  ];


   {/* ---------------------Fetching Plots Data----------------------- */}


  const [plotCount, setPlotCount] = useState({ plots: 0, bahriaPhase3: 0 });
  useEffect(() => {
    const fetchPlotData = async () => {
      const database = getDatabase();
      const plotsRef = ref(database, 'plots');
      const bahriaPhase3Ref = ref(database, 'bahria_phase3');

      const plotsSnapshot = await get(plotsRef);
      const bahriaPhase3Snapshot = await get(bahriaPhase3Ref);

      if (plotsSnapshot.exists()) {
        const plotsCount = Object.keys(plotsSnapshot.val()).length;
        setPlotCount((prevCount) => ({ ...prevCount, plots: plotsCount }));
      }

      if (bahriaPhase3Snapshot.exists()) {
        const bahriaPhase3Count = Object.keys(bahriaPhase3Snapshot.val()).length;
        setPlotCount((prevCount) => ({ ...prevCount, bahriaPhase3: bahriaPhase3Count }));
      }
    };

    fetchPlotData();
  }, []);
  const { plots, bahriaPhase3 } = plotCount;
  const plotChartData = [
    { name: 'D-17', value: plots },
    { name: 'Bahria Phase 3', value: bahriaPhase3 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <Container maxWidth="xl">

          {/* ---------------------Dealers Chart----------------------- */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6rem",
        }}
      >
       
        <Box sx={{ width: "100%", display: "flex" }}>
          <Box sx={{ width: "50%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper
              elevation={1}
              sx={{
                padding: "4",
                width: "15rem",
                height: "6rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  margin: "2rem 0 0 2.5rem",
                  fontFamily: "Poppins",
                  display: "inline-flex",
                }}
              >
                Total Dealers :{" "}
                <Typography
                  sx={{
                    marginLeft: "1rem",
                    fontWeight: "bold",
                    color: "#3A98B9",
                    fontFamily: "Poppins",
                  }}
                >
                  {totalDealers}
                </Typography>
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              flexGrow: "1",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                padding: "4",
                width: "30rem",
                height: "20rem",
              }}
            >
              {" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PieChart width={300} height={300}>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 0 ? "#3A98B9" : "#F57C00"}
                      />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} />
                  <Tooltip />
                </PieChart>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>


                 {/* ---------------------Plots Chart----------------------- */}


    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
       
        <Box sx={{ width: "100%", display: "flex" }}>
          <Box sx={{ width: "50%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper
              elevation={1}
              sx={{
                padding: "4",
                width: "15rem",
                height: "6rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  margin: "2rem 0 0 2.5rem",
                  fontFamily: "Poppins",
                  display: "inline-flex",
                }}
              >
                Total Plots:{" "}
                <Typography
                  sx={{
                    marginLeft: "1rem",
                    fontWeight: "bold",
                    color: "#3A98B9",
                    fontFamily: "Poppins",
                  }}
                >
                  {plots + bahriaPhase3}
                </Typography>
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              flexGrow: "1",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                padding: "4",
                width: "30rem",
                height: "20rem",
              }}
            >
              {" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
               <PieChart width={300} height={300}>
                 <Pie data={plotChartData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label>
                        {plotChartData.map((entry, index)=>(
                            <Cell 
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                 </Pie>
                 <Legend verticalAlign="bottom" height={36} />
                 <Tooltip/>
               </PieChart>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminDashboardHome;
