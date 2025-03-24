import React, { useState } from "react";
import CustomModal from "../Modal";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

type ModalOneProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalOne: React.FC<ModalOneProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState(""); // Para armazenar o código (agora com 'code')
  const [loading, setLoading] = useState(false); // Para controlar o carregamento
  const [error, setError] = useState<string | null>(null); // Para armazenar erros
  const [result, setResult] = useState({title: "", code: ""}); // Para armazenar o resultado da API

  const handleSubmit = async () => {
    if (code) {
      const requestUrl = `https://api-almeida.vercel.app/tasks/code/${code}`; // Substitua pela URL correta da sua API

      setLoading(true); // Inicia o carregamento
      setError(null); // Reseta o erro
      setResult({title: "", code: ""})

      try {
        // Faz a requisição à API
        const response = await axios.get(requestUrl);
        setResult(response.data); // Armazena o resultado da API
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Erro ao carregar dados da API. Tente novamente."); // Em caso de erro
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <Box width="80%" display="flex" flexDirection="column" gap={1} margin="auto">
        <Typography variant="h5" component="h2" gutterBottom>
            Digite o Código
        </Typography>
        <TextField
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          helperText= "Digite seu codigo"
          fullWidth
        />
        <Button
          onClick={handleSubmit}
          disabled={loading}
          variant="contained"
          sx={{
            backgroundColor: "#000", // Cor de fundo branco para o TextField
            marginTop: "12px", // Espaçamento acima do TextField
          }}
        >
          {loading ? "Carregando..." : "Buscar"}
        </Button>
        { result.code !== "" &&
          <>
            <h2 className="text-lg font-bold">Olá seu produto {result.title}</h2>
            <p>está com o status de concluido se este nao for seu produto verifique se o codigo {result.code} está correto</p>
          </>
        }

        { error && (
            <div className="mt-4 text-red-500">
              <p>{error}</p>
            </div>
        )}
      </Box>
    </CustomModal>
  );
};

export default ModalOne;