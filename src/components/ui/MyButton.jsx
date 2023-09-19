import { Button } from "@mui/material";

export default function MyButton({
  children,
  width,
  color,
  variant,
  fontWeight,
  mySubmit,
  myDisabled,
  onClick,
  href
}) {
  return (
    <Button
      href={href}
      onClick={onClick}
      disabled={myDisabled || false}
      type={mySubmit || "button"}
      variant={variant || "contained"}
      sx={{
        borderRadius: "2rem",
        py: 1.5,
        px: 3.5,
        fontSize: "1rem",
        textTransform: "capitalize",
        width,
        color,
        fontWeight,
      }}
    >
      {children}
    </Button>
  );
}
