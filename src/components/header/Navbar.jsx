import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WorkspacesComponent from "../workspaces/WorkspacesComponent";
import Recently from "./menus/Recently";
import Starred from "./menus/Starred";
import ModeSwitch from "../modeSwitch/ModeSwitch";
import AccountProfiles from "./menus/AccountProfiles";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Task Board
        </Typography>
        <WorkspacesComponent />
        <Recently />
        <Starred />
        <ModeSwitch />
        <AccountProfiles />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
