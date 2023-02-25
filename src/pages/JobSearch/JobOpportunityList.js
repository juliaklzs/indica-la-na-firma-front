/**
 *  Lucas Emanuel 2023
 *  https://github.com/LucasDevSystem
 */
import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";

import JobOpportunityCard from "./JobOpportunityCard";

const CardStyle = {
  height: "100%",
  width: 600,
  height: 180,
  margin: 1,
  backgroundColor: (theme) =>
    theme.palette.mode === "dark" ? "#79d5e8" : "#cceffe",
};

const JobOpportunityList = ({ jobs = [], onClick }) => {
  return (
    <Container>
      <Typography fontSize={30} textAlign={"center"}>
        Resultados da pesquisa
      </Typography>
      <div style={{ width: "50%", margin: "auto" }}>
        {jobs.map((job, index) => (
          <Paper key={index} sx={CardStyle}>
            <JobOpportunityCard
              onClick={() => onClick(job)}
              {...job}
            ></JobOpportunityCard>
          </Paper>
        ))}
      </div>
    </Container>
  );
};

export default JobOpportunityList;
