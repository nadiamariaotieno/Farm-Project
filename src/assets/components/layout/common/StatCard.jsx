import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({ title, value, icon }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 3,
        height: 140,
        borderLeft: "8px solid #8b5e3c",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ mr: 3, color: "#2f5d34" }}>
        {icon}
      </Box>

      <CardContent sx={{ p: 0 }}>
        <Typography variant="subtitle1" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;