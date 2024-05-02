import * as React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchAndSelectDropdown({
  data,
  placeholder,
  state,
  setState,
}) {
  // console.log(data);

  const dataWithoutDuplicates = data?.filter(
    (item, index) => data?.indexOf(item) === index
  );
  const fixedOptions = [];
  const [value, setValue] = React.useState([...fixedOptions]);

  React.useEffect(() => {
    setState(value);
  }, [value]);

  React.useEffect(() => {
    if (state === "") {
      setValue([...fixedOptions]);
    }
  }, [state]);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          // ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      options={data ? dataWithoutDuplicates : []}
      getOptionLabel={(option) => option}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            // disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField {...params} placeholder={placeholder} />
      )}
    />
  );
}
