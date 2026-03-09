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

const Health = () => {

  const [records, setRecords] = useState([
    {
      id: 1,
      tag: "COW-002",
      condition: "Mastitis",
      date: "2026-03-01",
      status: "Under Treatment",
      notes: "Administered antibiotics",
    },
  ]);

  const [form, setForm] = useState({
    tag: "",
    condition: "",
    date: "",
    status: "Under Treatment",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddRecord = () => {
    if (!form.tag || !form.condition || !form.date) return;

    const newRecord = {
      id: Date.now(),
      ...form,
    };

    setRecords([...records, newRecord]);

    setForm({
      tag: "",
      condition: "",
      date: "",
      status: "Under Treatment",
      notes: "",
    });
  };

  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const toggleRecovery = (id) => {
    setRecords(
      records.map((record) =>
        record.id === id
          ? {
              ...record,
              status:
                record.status === "Recovered"
                  ? "Under Treatment"
                  : "Recovered",
            }
          : record
      )
    );
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Health Monitoring
      </Typography>

      {/* -------- ADD FORM -------- */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={3}>

          <Grid item xs={12} md={2}>
            <TextField
              label="Animal Tag"
              name="tag"
              fullWidth
              value={form.tag}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Condition"
              name="condition"
              fullWidth
              value={form.condition}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              type="date"
              name="date"
              fullWidth
              value={form.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
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
              <MenuItem value="Under Treatment">
                Under Treatment
              </MenuItem>
              <MenuItem value="Recovered">
                Recovered
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              label="Notes"
              name="notes"
              fullWidth
              value={form.notes}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={1}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              onClick={handleAddRecord}
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
              <TableCell>Animal</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.tag}</TableCell>
                <TableCell>{record.condition}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>
                  <Chip
                    label={record.status}
                    color={
                      record.status === "Recovered"
                        ? "success"
                        : "warning"
                    }
                  />
                </TableCell>
                <TableCell>{record.notes}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    onClick={() => toggleRecovery(record.id)}
                  >
                    Toggle Status
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(record.id)}
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

export default Health;