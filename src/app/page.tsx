"use client"
import React, { useState } from "react";
import Button from "@/components/Button";
import ModalOne from "@/components/ModalOne";
import ModalTwo from "@/components/ModalTwo";
import ModalThree from "@/components/ModalThree";
import { Box } from "@mui/material";

const Home: React.FC = () => {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="space-between"
        height="90vh"
        width={{ xs: "100%", sm: "70%" }}
        margin="auto"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2} 
        padding={{ xs: "20px", sm: "0" }}
    >
      <Button label="Abrir Modal 1" onClick={() => { 
        setModal(1)}
        } />
      <Button label="Abrir Modal 2" onClick={() => setModal(2)} />
      <Button label="Abrir Modal 3" onClick={() => setModal(3)} />

      <ModalOne isOpen={modal === 1} onClose={() => setModal(null)} />
      <ModalTwo isOpen={modal === 2} onClose={() => setModal(null)} />
      <ModalThree isOpen={modal === 3} onClose={() => setModal(null)} />
    </Box>
  );
};

export default Home;