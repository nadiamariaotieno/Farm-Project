import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Paper, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Example Data
const kpiData = {
  cows: 45,
  chickens: 120,
  pigs: 20,
  sickAnimals: 5,
  feedInventory: 300, // kg
};

const feedTrendData = [
  { month: 'Jan', feedUsed: 50 },
  { month: 'Feb', feedUsed: 60 },
  { month: 'Mar', feedUsed: 55 },
  { month: 'Apr', feedUsed: 70 },
];

const recentActivity = [
  { id: 1, date: '2026-03-01', type: 'Vaccination', animal: 'Cow #12', notes: 'Routine check' },
  { id: 2, date: '2026-03-02', type: 'Birth', animal: 'Goat #5', notes: 'Healthy kid born' },
  { id: 3, date: '2026-03-03', type: 'Feed delivery', animal: '-', notes: '50kg corn' },
];

const columns = [
  { field: 'date', headerName: 'Date', width: 120 },
  { field: 'type', headerName: 'Activity Type', width: 150 },
  { field: 'animal', headerName: 'Animal', width: 150 },
  { field: 'notes', headerName: 'Notes', width: 250 },
];

export default function ReportsPage() {
  const [animalFilter, setAnimalFilter] = useState('All');

  return (
    <Grid container spacing={3} padding={3}>
      {/* KPI Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Cows</Typography>
              <Typography variant="h4">{kpiData.cows}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Chickens</Typography>
              <Typography variant="h4">{kpiData.chickens}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Sick Animals</Typography>
              <Typography variant="h4">{kpiData.sickAnimals}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Feed Inventory (kg)</Typography>
              <Typography variant="h4">{kpiData.feedInventory}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters */}
      <Grid item xs={12} md={3} marginTop={2}>
        <Select
          fullWidth
          value={animalFilter}
          onChange={(e) => setAnimalFilter(e.target.value)}
        >
          <MenuItem value="All">All Animals</MenuItem>
          <MenuItem value="Cows">Cows</MenuItem>
          <MenuItem value="Chickens">Chickens</MenuItem>
          <MenuItem value="Pigs">Pigs</MenuItem>
          <MenuItem value="Goats">Goats</MenuItem>
          <MenuItem value="Horses">Horses</MenuItem>
        </Select>
      </Grid>

      {/* Feed Usage Trend Chart */}
      <Grid item xs={12} md={9} marginTop={2}>
        <Paper style={{ padding: 16, height: 300 }}>
          <Typography variant="h6">Feed Usage Trend</Typography>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={feedTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="feedUsed" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      {/* Recent Activity Table */}
      <Grid item xs={12} marginTop={2}>
        <Typography variant="h6" marginBottom={1}>Recent Activity</Typography>
        <DataGrid
          autoHeight
          rows={recentActivity}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Grid>
    </Grid>
  );
}