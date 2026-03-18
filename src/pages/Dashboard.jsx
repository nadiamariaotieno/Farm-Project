import {
  Grid,
  Typography,
  Paper,
} from "@mui/material";

import AgricultureIcon from "@mui/icons-material/Agriculture";
import GrassIcon from "@mui/icons-material/Grass";
import HealingIcon from "@mui/icons-material/Healing";
import InsightsIcon from "@mui/icons-material/Insights";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

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

/* ---------------- DATA ---------------- */

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

const revenueData = [
  { month: "Jan", revenue: 120000, expenses: 80000 },
  { month: "Feb", revenue: 150000, expenses: 90000 },
  { month: "Mar", revenue: 170000, expenses: 95000 },
  { month: "Apr", revenue: 140000, expenses: 85000 },
  { month: "May", revenue: 190000, expenses: 100000 },
];


const Dashboard = () => {

  const totalRevenue = revenueData.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  const totalExpenses = revenueData.reduce(
    (sum, item) => sum + item.expenses,
    0
  );

  const totalProfit = totalRevenue - totalExpenses;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Farm Overview
      </Typography>

      {/* -------- STAT CARDS -------- */}
      <Grid container spacing={4} mb={4}>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Cattle"
            value="124"
            icon={<AgricultureIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Feed Stock (kg)"
            value="2300"
            icon={<GrassIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Revenue (KES)"
            value={totalRevenue.toLocaleString()}
            icon={<InsightsIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Profit (KES)"
            value={totalProfit.toLocaleString()}
            icon={<MonetizationOnIcon fontSize="large" />}
          />
        </Grid>

      </Grid>

      {/* -------- LIVESTOCK & HEALTH CHARTS -------- */}
      <Grid container spacing={4} mt={1}>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: 380, borderRadius: 4, boxShadow: 4 }}>
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

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: 380, borderRadius: 4, boxShadow: 4 }}>
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

      {/* -------- REVENUE CHARTS -------- */}
      <Grid container spacing={4} mt={4}>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: 380, borderRadius: 4, boxShadow: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Monthly Revenue Trend
            </Typography>

            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2f5d34"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  animationDuration={800}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: 380, borderRadius: 4, boxShadow: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Revenue vs Expenses
            </Typography>

            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#2f5d34" />
                <Bar dataKey="expenses" fill="#8B0000" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

      </Grid>
    </>
  );
};

export default Dashboard;