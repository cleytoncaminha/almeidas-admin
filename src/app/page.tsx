"use client"
import React, { useState } from "react";
import Button from "@/components/Button";
import ModalOne from "@/components/ModalOne";
import ModalTwo from "@/components/ModalTwo";
import ModalThree from "@/components/ModalThree";
import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AddHomeIcon from '@mui/icons-material/AddHome';
import Image from "next/image";

const Home: React.FC = () => {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <Box 
        display="flex" 
        alignItems="center" 
        height="100vh"
        width={{ xs: "100%", sm: "100%" }}
        margin="auto"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-end", sm: "space-around" }}
        gap={{ xs: 6, sm: 2 }} 
        padding={{ xs: "30px", sm: "0" }}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
    >
            <Box
        sx={{
          display: { xs: 'block', sm: 'none' }, // Mostra a imagem apenas em telas pequenas
          position: 'absolute',
          top: '2%', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '300px', // Ajuste o tamanho conforme necessário
        }}
      >
        <Image
          src="/logo_almeidas.png"
          alt="Logo Almeidas"
          width={300}
          height={150}
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Button label="Buscar Código" onClick={() => { 
        setModal(1)}
        } icon={<SearchIcon fontSize="inherit" />} />
      <Button label="Solicitar Serviço" onClick={() => setModal(2)} icon={<MiscellaneousServicesIcon fontSize="inherit" />} />
      <Button label="Solicitar Retirada" onClick={() => setModal(3)} icon={<AddHomeIcon fontSize="inherit" />} />

      <ModalOne isOpen={modal === 1} onClose={() => setModal(null)} />
      <ModalTwo isOpen={modal === 2} onClose={() => setModal(null)} />
      <ModalThree isOpen={modal === 3} onClose={() => setModal(null)} />
    </Box>
  );
};

export default Home;