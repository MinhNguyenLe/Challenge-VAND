import { useState } from "react";

export interface UseDialogReturn {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}

const useDialog = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { open, handleClickOpen, handleClose };
};

export default useDialog;
