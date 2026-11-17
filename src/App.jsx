import BookCard from './components/BookCard'

function App() {
  return (
    <div>
      <h1>Bibliothèque universitaire</h1>
      <BookCard
        titre="Le Petit Prince"
        auteur="Antoine de Saint-Exupéry"
        estDisponible={true}
        onClickEmprunt={() => alert('Clic !')}
      />
    </div>
  )
}

export default App