function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  const styleCarte = {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '12px 0',
    borderRadius: '8px',
  }
  return (
    <div style={styleCarte}>
      <h3>{titre}</h3>
      <p>Auteur : {auteur}</p>

      {estDisponible ? (
        <p style={{ color: 'green' }}>✅ Disponible</p>
      ) : (
        <p style={{ color: 'red' }}>❌ Emprunté</p>
      )}

      <button onClick={onClickEmprunt}>
        {estDisponible ? 'Emprunter' : 'Rendre'}
      </button>
    </div>
  )
}
export default BookCard