import Button from "@mui/material/Button";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} sx={{ width: 200, height: 50 }}>
      {label}
    </Button>
  );
};

export default CustomButton;
