"use client";

import Input from "@/components/designSystem/Input";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function SearchInpot() {
  return (
    <Input
      style={{ borderRadius: 'calc(infinity * 1px)', padding: '1rem' }}
      buttonStyle={{
        borderRadius: "100%",
        width: "2.5rem",
        height: "2.5rem",
        padding: 0,
      }}
      placeholder="search, in foods"
      buttonContent={
        <div className="py-0.5">
          <SearchIcon sx={{ fontSize: 20 }} />
        </div>
      }
    />
  );
}

export default SearchInpot;
