import { Grid } from "@mui/material";
import React from "react";
import ProfileDetail from "./components/ProfileDetail/ProfileDetail";
import { useGetUser } from "./hook/useGetUser";

const Profile = () => {
  const { data } = useGetUser();

  console.log(data);

  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px",
      }}
    >
      <ProfileDetail {...data} />
    </Grid>
  );
};

export default Profile;
