import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { useDialogContext } from "./DialogStore";

export const MyDialog = () => {
  const { state, setState } = useDialogContext();

  const handleClose = () => {
    setState(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={state}
    >
      <DialogTitle id="simple-dialog-title">Dialog</DialogTitle>
      <Typography>
        This is just a simple dialog using context to know if it should be open
        or not.
      </Typography>
    </Dialog>
  );
};
