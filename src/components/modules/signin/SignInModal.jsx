import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import SignIn from "./SignIn";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export default function SignInModal({ children, insideSignUpDialog }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {insideSignUpDialog ? (
        <span onClick={handleOpen}>{children}</span>
      ) : (
        <div onClick={handleOpen}>{children}</div>
      )}

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style }}>
          <SignIn
            closeModal={setOpen}
            insideSignUpDialog={insideSignUpDialog}
          />
        </Box>
      </Modal>
    </>
  );
}
