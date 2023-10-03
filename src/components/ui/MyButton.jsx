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
  href,
  py,
  fontSize,
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
        boxShadow: 'none',
        py: `${py || 1.5}`,
        px: 3.5,
        fontSize: `${fontSize || "1rem"}`,
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
