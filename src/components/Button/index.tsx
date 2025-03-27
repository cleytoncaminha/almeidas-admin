import Button from "@mui/material/Button";
import { ReactNode } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
};

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, icon }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        width: { xs: '50vw', sm: '200px' },
        height: { xs: '20vh', sm: '200px' },
        borderRadius: "20px",
        backgroundColor: "grey.500",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "grey.700",
          boxShadow: "6px 6px 15px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      {icon && <span style={{ fontSize: 70 }}>{icon}</span>}
      <span style={{fontWeight: "bold", marginTop: -10}}>{label}</span>
    </Button>
  );
};

export default CustomButton;
