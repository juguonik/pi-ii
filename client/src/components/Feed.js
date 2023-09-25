"use client";
import { useState } from "react";
import Anuncio from "./Anuncio";
import CadastroAnuncio from "./CadastroAnuncio";

function Feed() {
  const [anuncios, setAnuncios] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [anunciosExibidos, setAnunciosExibidos] = useState(anuncios);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar a abertura do modal

  const adicionarAnuncio = (novoAnuncio) => {
    setAnuncios([...anuncios, novoAnuncio]);
    setAnunciosExibidos([...anuncios, novoAnuncio]);
  };

  const filtrarAnuncios = () => {
    const termoLowerCase = filtro.toLowerCase();
    const anunciosFiltrados = anuncios.filter((anuncio) => {
      return (
        anuncio.titulo.toLowerCase().includes(termoLowerCase) ||
        anuncio.localizacao.toLowerCase().includes(termoLowerCase) ||
        anuncio.descricao.toLowerCase().includes(termoLowerCase)
      );
    });
    setAnunciosExibidos(anunciosFiltrados);
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Cadastrar Anúncio</button>
      {modalIsOpen && (
        <CadastroAnuncio
          onAdicionarAnuncio={adicionarAnuncio}
          closeModal={() => setModalIsOpen(false)}
        />
      )}

      <div>
        <input
          type="text"
          placeholder="Buscar em todos os campos"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button onClick={filtrarAnuncios}>Filtrar</button>
      </div>
      {anunciosExibidos.map((anuncio, index) => (
        <Anuncio key={index} anuncio={anuncio} />
      ))}
    </div>
  );
}

export default Feed;
