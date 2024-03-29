import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "",
      }}
    >
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="openai"
          width={"30px"}
          height={"30px"}
          className="image-inverted"
        />
       
      </Link>
      <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
          }}
        >
          <span style={{fontSize:"20px"}}>ChartGPt</span>
        </Typography>
    </div>
  );
};

export default Logo;
