/* import axios from 'axios'
import { BASE_URL } from '../assets/baseURL' */
import * as ACTION from '../redux/actionTypeStrings'
import data from '../assets/db.json'

const mapDispatchToProps = (dispatch) => {
    return {
        selectCharacter: (char) => {
            dispatch({
                type: ACTION.SELECT_CHARACTER,
                payload: char
            })
        },
        handleChoice: (card) => {
            dispatch({
                type: ACTION.HANDLE_CHOICE,
                payload: card
            })
        },
        matchCards: () => {
            dispatch({
                type: ACTION.MATCH_CARDS
            })
        },
        setDisabled: () => {
            dispatch({
                type: ACTION.SET_DISABLED
            })
        },
        endTurn: () => {
            dispatch({
                type: ACTION.END_TURN
            })
        },
        createCards: () => {
            dispatch({
                type: ACTION.CREATE_CARDS,
            })
        },
        loadCharacters: () => {
            console.log(data)
            dispatch(/* () => {
                axios.get(`${BASE_URL}/characters`)
                    .then((res) => {
                        dispatch({
                            type: ACTION.LOAD_CHARACTERS,
                            payload: res.data
                        })
                    }) */
                    {
                    type: ACTION.LOAD_CHARACTERS,
                    payload: data.characters
            })
        },
        setTurns: (turns)=>{
            dispatch({
                type: ACTION.SET_TURNS,
                payload: turns
            })
        },
        setCards: (cards)=>{
            dispatch({
                type: ACTION.SET_CARDS,
                payload: cards
            })
        },
        setSelectedCharacters: (chars)=>{
            dispatch({
                type: ACTION.SET_SELECTED_CHARACTERS,
                payload: chars
            })
        }
    }
}

export default mapDispatchToProps