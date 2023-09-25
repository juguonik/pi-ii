import { useState } from "react";
import Modal from "react-modal";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

function CadastroAnuncio({ onAdicionarAnuncio, closeModal }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [imagem, setImagem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoAnuncio = {
      titulo,
      descricao,
      localizacao,
      imagemUrl: URL.createObjectURL(imagem),
    };
    onAdicionarAnuncio(novoAnuncio);
    closeModal();
    setTitulo("");
    setDescricao("");
    setLocalizacao("");
    setImagem(null);
  };

  return (
    <Modal isOpen={true} onRequestClose={closeModal} style={customModalStyles}>
      <h2>Cadastro de Anúncio</h2>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Descrição:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <label>Localização:</label>
        <input
          type="text"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
        />

        <label>Imagem:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagem(e.target.files[0])}
        />

        <button type="submit">Salvar</button>
      </form>
    </Modal>
  );
}

export default CadastroAnuncio;
