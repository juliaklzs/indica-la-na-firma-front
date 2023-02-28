import { AppBar, Avatar, IconButton, Tooltip } from "@mui/material";
import { Box, Container } from "@mui/system";

import Logo from "../../assets/Logo.jpg"

const NavBar = () => {
  return (
    <AppBar style={{ backgroundColor: "#50bde4" }} position="static">
      <Container maxWidth="xl">
        <Box sx={{ height: 50, flexGrow: 0 }}>
          <Box
            component="img"
            sx={{
              height: 50,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={Logo}
          />
          <Tooltip style={{ float: "right" }} title="Open settings">
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Foto de Perfil"
                src="https://avatars.githubusercontent.com/u/36340073?s=400&u=2426b833712b87aac6bd12ed684481c4219a9cd2&v=4"
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;
