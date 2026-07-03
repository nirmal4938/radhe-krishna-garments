import { Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ placeholder }) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 500,
        px: 2,
        py: 0.5,
        border: 1,
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <SearchIcon sx={{ mr: 1, color: "text.secondary" }} />

      <InputBase fullWidth placeholder={placeholder} />
    </Paper>
  );
}
