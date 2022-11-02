import * as ACTION from '../redux/actionTypeStrings'

const initState = {
  characters: [],
  cards: [],
  turns: 0,
  choiceOne: null,
  choiceTwo: null,
  disabled: false,
  selectedCharacters: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.SET_CARDS:
      return {
        ...state,
        cards: action.payload
      }
    //add or remove character from selection
    case ACTION.SELECT_CHARACTER:
      //remove if found
      if (state.selectedCharacters.find((char) => {
        return char.name === action.payload.name
      })) {
        return {
          ...state,
          selectedCharacters: state.selectedCharacters.filter((char) => {
            return char.name !== action.payload.name
          })
        }
        //add
      } else {
        if (state.selectedCharacters.length < 8) {
          return {
            ...state,
            selectedCharacters: [...state.selectedCharacters, action.payload]
          }
        }else{ return {...state}}
      }
    //assign cards to choices
    case ACTION.HANDLE_CHOICE:
      if (state.choiceOne) {
        return {
          ...state,
          choiceTwo: action.payload
        }
      } else {
        return {
          ...state,
          choiceOne: action.payload
        }
      }
    //when cards match set them matched
    case ACTION.MATCH_CARDS:
      const NEW_ARRAY = state.cards.map(card => {
        if (card.src === state.choiceOne.src) {
          return { ...card, matched: true }
        } else {
          return card
        }
      })
      return {
        ...state,
        cards: NEW_ARRAY
      }
    case ACTION.SET_DISABLED:
      return {
        ...state,
        disabled: true
      }
    //at eot reset choices and enable clicking, increment turns
    case ACTION.END_TURN:
      return {
        ...state,
        choiceOne: null,
        choiceTwo: null,
        turns: state.turns + 1,
        disabled: false
      }
    //duplicate card images and randomize, reset turns and choices
    case ACTION.CREATE_CARDS:
      console.log("reducer creating cards:")
      console.log(state.selectedCharacters.length)
      if (state.selectedCharacters.length > 0) {
        let cardImages= state.selectedCharacters.map((char)=>{
          return {src: char.image, matched: false}
        })
        return {
          ...state,
          cards: [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() })),
          turns: 0,
          choiceOne: null,
          choiceTwo: null
        }
      } else {
        return { ...state }
      }
    case ACTION.LOAD_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      }
      case ACTION.SET_TURNS:
        return {
          ...state,
          turns: action.payload
        }
      case ACTION.SET_SELECTED_CHARACTERS:
        return {
          ...state,
          selectedCharacters: action.payload
        }
    default:
      return state
  }
}

export default reducer