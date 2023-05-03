import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="student-input"
      options={students}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Students"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <SearchIcon color="disabled" sx={{ mr: 1 }} />
                {params.InputProps.startAdornment}
              </>
            )
          }}
        />
      )}
    />
  );
}

const students = [
  { label: "Ranchhod Das" },
  { label: "Babu Rao" },
  { label: "Shyam" },
  { label: "Raju" },
  { label: "Anuradha" },
  { label: "Tiwari Seth" },
  { label: "Circuit" },
  { label: "Tatya Bichchu" },
  { label: "Radhe" },
  { label: "KRK" },
  { label: "Deepak Kalal" },
  { label: "Jagdish Bhagat" },
  { label: "Bhuvan Bham" },
  { label: "Gajodhar Singh Cool" },
  { label: "Elon Mishra" },
  { label: "Pablo Yadav" },
];
