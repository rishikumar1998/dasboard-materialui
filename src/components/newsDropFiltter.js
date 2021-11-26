import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [today, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div id="newsDropdown">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={today}
          onChange={handleChange}
          placeholder="Today"
        //   label="Age"
        >
          <MenuItem value="Today">
            <em>Today</em>
          </MenuItem>
          <MenuItem value={10}>Tommorow</MenuItem>
          <MenuItem value={20}>Yesterdat</MenuItem>
          <MenuItem value={30}>Today</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}