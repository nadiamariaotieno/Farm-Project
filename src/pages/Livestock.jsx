import { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Box,
} from "@mui/material";

const Livestock = () => {

  const [animals, setAnimals] = useState([
    { id: 1, tag: "COW-001", breed: "Friesian", age: 4, status: "Healthy" },
    { id: 2, tag: "COW-002", breed: "Jersey", age: 3, status: "Sick" },
  ]);

  const [form, setForm] = useState({
    tag: "",
    breed: "",
    age: "",
    status: "Healthy",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddAnimal = () => {
    if (!form.tag || !form.breed || !form.age) return;

    const newAnimal = {
      id: Date.now(),
      ...form,
    };

    setAnimals([...animals, newAnimal]);

    setForm({
      tag: "",
      breed: "",
      age: "",
      status: "Healthy",
    });
  };

  const handleDelete = (id) => {
    setAnimals(animals.filter((animal) => animal.id !== id));
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Livestock Management
      </Typography>

      {/* -------- ADD FORM -------- */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <TextField
              label="Tag ID"
              name="tag"
              fullWidth
              value={form.tag}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Breed"
              name="breed"
              fullWidth
              value={form.breed}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              label="Age"
              name="age"
              type="number"
              fullWidth
              value={form.age}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              select
              label="Status"
              name="status"
              fullWidth
              value={form.status}
              onChange={handleChange}
            >
              <MenuItem value="Healthy">Healthy</MenuItem>
              <MenuItem value="Sick">Sick</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              onClick={handleAddAnimal}
            >
              Add Animal
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* -------- TABLE -------- */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tag ID</TableCell>
              <TableCell>Breed</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {animals.map((animal) => (
              <TableRow key={animal.id}>
                <TableCell>{animal.tag}</TableCell>
                <TableCell>{animal.breed}</TableCell>
                <TableCell>{animal.age}</TableCell>
                <TableCell>
                  <Chip
                    label={animal.status}
                    color={
                      animal.status === "Healthy" ? "success" : "error"
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <Button
                    color="error"
                    onClick={() => handleDelete(animal.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
};

export default Livestock;
//WORKIN ON THIS PAGE!