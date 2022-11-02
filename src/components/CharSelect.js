import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'
import SingleChar from './SingleChar';
import { Link } from 'react-router-dom';

function CharSelect({ characters, selectedCharacters, setSelectedCharacters, createCards }) {

    function checkSelected(character) {
        return selectedCharacters.find((char) => {
            return char.name === character.name
        }) ? true : false
    }

    return (
        <div>
            <h2 className='font2'>Select  8  characters</h2>
            {
                selectedCharacters.length < 8 ?
                    <button className='disabled-button' disabled={true}>Characters: {selectedCharacters.length + "/8"}</button>
                    : <Link to='/game'><button onClick={()=>{
                        console.log('clicked')
                        createCards()
                    }}>Start Game</button></Link>
            }
            <button className={selectedCharacters.length > 0 ? '' : 'disabled-button'} onClick={()=>setSelectedCharacters([])}>Reset</button>
            <div className="char-select-grid">
                {
                    characters.map((char) => (
                        <SingleChar key={char.id} char={char} selected={checkSelected(char)} />
                    ))
                }
            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(CharSelect);