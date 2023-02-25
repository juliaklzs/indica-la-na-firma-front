/**
 *  Lucas Emanuel 2023
 *  https://github.com/LucasDevSystem
 */
import { useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";

import JobOpportunityList from "./JobOpportunityList";
import SuggestedJobsList from "./SuggestedJobsList";
import NavBar from "../../components/NavBar";
import AutoCompleteSearch from "./AutoCompleteSearch";

// api data exemple
const apiSuggestedJobs = [
  {
    title: "Desenvolvedor nodeJs",
    description: "desenvolvedro node com salario de 20k por meis",
    created_at: "29/01/2023",
    authorId: 1,
    offerer: "google",
    location: "sabara",
  },
  {
    title: "Desenvolvedor react",
    description: "desenvolvedor node com salario de 20k por meis",
    created_at: "29/01/2023",
    authorId: 1,
    offerer: "google",
    location: "sabara",
  },
];

function JobSearch() {
  const [suggestedJobs, setSuggestedJobs] = useState([]);
  const [jobs, setJobs] = useState(apiSuggestedJobs);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const handleSearch = async (query) => {
    const result = await axios.get("back-end_url", {
      params: {
        query,
      },
    });

    setJobs(apiSuggestedJobs);
  };

  const handleRegisterJob = () => {};

  const handleApplyJob = async () => {
    // const result = await axios.post("back-edn_url/job/apply", {
    //   authorId: "",
    //   jobId: "",
    // });
  };

  const getSuggestedOpportunities = async () => {
    // const result = await axios.get("back-end_url/job/suggested", {
    //   params: { interest: "user interests" },
    // });

    setSuggestedJobs(apiSuggestedJobs);
  };

  // get suggested opportunies by user interests
  useEffect(() => {
    getSuggestedOpportunities();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Container maxWidth="sm">
        <AutoCompleteSearch
          onSearch={handleSearch}
          suggestions={searchSuggestions}
        />
        <Divider
          style={{
            borderBottomWidth: 4,
            margin: 10,
            backgroundColor: "#cceffe",
          }}
          variant="middle"
        />
        <Typography fontSize={30} textAlign={"center"}>
          Destaques com o seu perfil
        </Typography>
      </Container>
      <SuggestedJobsList jobs={jobs} onClick={(job) => handleApplyJob(job)} />
      <JobOpportunityList jobs={jobs} onClick={(job) => handleApplyJob(job)} />
    </div>
  );
}

export default JobSearch;
