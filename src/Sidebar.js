import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./Datalayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
        className="sidebar_logo"
      />
      <SidebarOption title="Home" icon={HomeIcon} />
      <SidebarOption title="Search" icon={SearchIcon} />
      <SidebarOption title="Your Library" icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        <SidebarOption title={playlist.name} />;
      })}
    </div>
  );
}

export default Sidebar;
