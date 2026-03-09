import {
  Grid,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import GrassIcon from "@mui/icons-material/Grass";
import HealingIcon from "@mui/icons-material/Healing";
import StatCard from "../assets/components/layout/common/StatCard";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const livestockData = [
  { name: "Cows", value: 60 },
  { name: "Goats", value: 40 },
  { name: "Sheep", value: 24 },
];

const healthTrendData = [
  { month: "Jan", sick: 2 },
  { month: "Feb", sick: 5 },
  { month: "Mar", sick: 3 },
  { month: "Apr", sick: 4 },
  { month: "May", sick: 1 },
];

const Dashboard = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Farm Overview
      </Typography>

      {/* Stat Cards */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Total Cattle"
            value="124"
            icon={<AgricultureIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Feed Stock (kg)"
            value="2300"
            icon={<GrassIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Sick Animals"
            value="3"
            icon={<HealingIcon fontSize="large" />}
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={4} mt={1}>
        {/* Livestock Distribution */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              height: 380,
              borderRadius: 4,
              boxShadow: 4,
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Livestock Distribution
            </Typography>

            <ResponsiveContainer width="100%" height="85%">
            <BarChart data={livestockData}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar
    dataKey="value"
    fill="#2f5d34"
    radius={[8, 8, 0, 0]}
    animationDuration={800}
  />
</BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Health Trends */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              height: 380,
              borderRadius: 4,
              boxShadow: 4,
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Monthly Sick Animals Trend
            </Typography>

            <ResponsiveContainer width="100%" height="85%">
            <LineChart data={healthTrendData}>
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Line
    type="monotone"
    dataKey="sick"
    stroke="#8b5e3c"
    strokeWidth={3}
    dot={{ r: 6 }}
    activeDot={{ r: 8 }}
    animationDuration={800}
  />
</LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;