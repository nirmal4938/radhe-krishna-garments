import { Badge, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function CartButton() {
  return (
    <Badge badgeContent={0} color="error">
      <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />}>
        Cart
      </Button>
    </Badge>
  );
}
