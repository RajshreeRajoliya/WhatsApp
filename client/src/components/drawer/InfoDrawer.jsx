import React from "react";
import { Drawer, Typography, styled } from "@mui/material";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profile from "./Profile";

const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};
const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBackIcon onClick={() => setOpen(false)} />
        <Typography>Profile</Typography>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
