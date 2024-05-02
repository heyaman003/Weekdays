import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectComponent({
  data,
  setData,
  placeholder,
  options,
}) {
  //   const [data, setData] = React.useState("");

  const dataWithoutDuplicates = options?.filter(
    (item, index) => options?.indexOf(item) === index
  );

  const dataWithoutNullValues = dataWithoutDuplicates?.filter(
    (item, index) => item !== null
  );

  // console.log(dataWithoutDuplicates);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{placeholder}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={data}
          label={placeholder}
          onChange={handleChange}>
          {options && options?.some((item) => item !== undefined) ? (
            dataWithoutNullValues.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })
          ) : (
            <MenuItem value={"No Data"} disabled>
              No Data
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
