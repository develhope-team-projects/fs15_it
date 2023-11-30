import { Card } from "@mui/joy";
import {
  Button,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
export default function Form() {
  const sendUser = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, role }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("singer");

  return (
    <Card style={{ maxWidth: 450, margin: "0 auto" }}>
      <CardContent>
        <form>
          <Grid container spacing={1}>
            <Grid xs={12} item sm={6}>
              <TextField
                label="email"
                placeholder="Enter your email *"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="email"
              ></TextField>
            </Grid>
            <Grid xs={12} item sm={6}>
              <TextField
                label="password"
                placeholder="Enter your password *"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              ></TextField>
            </Grid>
            <Grid xs={12} item sm={6}>
              <InputLabel id="demo-simple-select-label">Role *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="role "
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <MenuItem value="singer">Singer</MenuItem>
                <MenuItem value="beatmaker">Beatmaker</MenuItem>
              </Select>
            </Grid>
            <Grid xs={12} item>
              <Button
                type="button"
                onClick={sendUser}
                variant="contained"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
