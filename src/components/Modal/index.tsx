import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        },
      }}
      >
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button 
          onClick={onClose} 
          color="primary" 
          variant="contained" 
          sx={{
              backgroundColor: "#000",
              marginTop: "12px",
            }}
          >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
