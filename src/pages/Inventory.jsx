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
} from "@mui/material";

const Inventory = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Dairy Meal",
      category: "Feed",
      quantity: 500,
      unit: "kg",
      reorderLevel: 200,
    },
    {
      id: 2,
      name: "Antibiotics",
      category: "Medicine",
      quantity: 20,
      unit: "units",
      reorderLevel: 10,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    category: "Feed",
    quantity: "",
    unit: "kg",
    reorderLevel: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    if (!form.name || !form.quantity || !form.reorderLevel) return;

    const newItem = {
      id: Date.now(),
      ...form,
      quantity: Number(form.quantity),
      reorderLevel: Number(form.reorderLevel),
    };

    setItems([...items, newItem]);

    setForm({
      name: "",
      category: "Feed",
      quantity: "",
      unit: "kg",
      reorderLevel: "",
    });
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Inventory Management
      </Typography>

      {/* -------- ADD FORM -------- */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={3}>

          <Grid item xs={12} md={3}>
            <TextField
              label="Item Name"
              name="name"
              fullWidth
              value={form.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              select
              label="Category"
              name="category"
              fullWidth
              value={form.category}
              onChange={handleChange}
            >
              <MenuItem value="Feed">Feed</MenuItem>
              <MenuItem value="Medicine">Medicine</MenuItem>
              <MenuItem value="Equipment">Equipment</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              label="Quantity"
              name="quantity"
              type="number"
              fullWidth
              value={form.quantity}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              select
              label="Unit"
              name="unit"
              fullWidth
              value={form.unit}
              onChange={handleChange}
            >
              <MenuItem value="kg">kg</MenuItem>
              <MenuItem value="litres">litres</MenuItem>
              <MenuItem value="bags">bags</MenuItem>
              <MenuItem value="units">units</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              label="Reorder Level"
              name="reorderLevel"
              type="number"
              fullWidth
              value={form.reorderLevel}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={1}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              onClick={handleAddItem}
            >
              Add
            </Button>
          </Grid>

        </Grid>
      </Paper>

      {/* -------- TABLE -------- */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Reorder Level</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => {
              const lowStock = item.quantity <= item.reorderLevel;

              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    {item.quantity} {item.unit}
                  </TableCell>
                  <TableCell>
                    {item.reorderLevel} {item.unit}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={lowStock ? "Low Stock" : "In Stock"}
                      color={lowStock ? "error" : "success"}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
};

export default Inventory;
