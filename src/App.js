import './App.css';
import { useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import { connect } from 'react-redux'
import mapStateToProps from './redux/mapStateToProps'
import mapDispatchToProps from './redux/mapDispatchToProps'
import CharSelect from './components/CharSelect';
import Game from './components/Game';

function App({
  loadCharacters, 
  turns, setTurns, 
  cards, setCards, 
  selectedCharacters, setSelectedCharacters
}) {

  //local Storage loads and saves
  //load characters, turns, selected characters, cards
  useEffect(() => {
    loadCharacters()
    if (Storage) {
      console.log("I AM CHANGED")
      //localStorage.clear()
      //load turns
      let turnsString = localStorage.getItem("turns")
      if(turnsString !== null && turnsString !== undefined){
        setTurns(Number(JSON.parse(turnsString)))
      }        
      //load cards
      let cardsString = localStorage.getItem("cards")
      if (cardsString !== null && cardsString !== undefined) {
          setCards(JSON.parse(cardsString))
      }
      //load selectedCharacters
      let selectedCharactersString = localStorage.getItem("selectedCharacters")
      if(selectedCharactersString != null && selectedCharactersString !== undefined){
        setSelectedCharacters(JSON.parse(selectedCharactersString))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //save turns
  useEffect(() => {
    localStorage.setItem("turns", JSON.stringify(turns))
  },[turns])
  //save cards
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards))
  },[cards])
  //save selected characters
  useEffect(() => {
    localStorage.setItem("selectedCharacters", JSON.stringify(selectedCharacters))
  },[selectedCharacters])

  return (
    <div >
      <h1>Jedi Memory Training</h1>
      <Routes>
        <Route exact path="/JediMemoryTraining" element={(<CharSelect />)} />
        <Route path="/JediMemoryTraining/game" element={(<Game />)} />
      </Routes>
    </div >
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//lotr database
/* const config = {
  headers: { Authorization: "Bearer UKcyepcILkKPy09mPz8F" }
}; */
/* axios.get('https://the-one-api.dev/v2/character',
config
).then((res) => console.log(res.data.docs[0])).catch(console.log) */