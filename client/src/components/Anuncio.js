function Anuncio({ anuncio }) {
  const handleInteresseClick = () => {
    // inserir lógica para o botão "Tenho interesse"
  };

  return (
    <div>
      <h2>{anuncio.titulo}</h2>
      <p>Localização: {anuncio.localizacao}</p>
      <p>Descrição: {anuncio.descricao}</p>
      <button onClick={handleInteresseClick}>Tenho Interesse</button>
    </div>
  );
}

export default Anuncio;
