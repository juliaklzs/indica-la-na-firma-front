/**
 *  Lucas Emanuel 2023
 *  https://github.com/LucasDevSystem
 */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SuggestedOpportunityCard = ({
  title = "",
  description = "",
  location = "",
  created_at = "",
  offerer = "",
  onClick,
}) => {
  return (
    <Box sx={{ minWidth: 250, height: 250 }}>
      <Card onClick={() => onClick()} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {offerer}
          </Typography>
          <Typography variant="body2">
            <br />
            {location}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SuggestedOpportunityCard;
