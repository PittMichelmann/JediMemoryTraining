import React from 'react';
import './SingleChar.css'
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function SingleChar({ char, selectCharacter, selected }) {
    return (
        <div className="char" onClick={()=>{
            selectCharacter(char)
        }}>
            <div className={selected ? "selected border-yellow" : "border"}>
                <img className="char-image" src={char.image} alt={char.name} />
                <div className="overlay-text">{char.name}</div>
            </div>
        </div>

    );
}

export default connect(mapStateToProps, mapDispatchToProps) (SingleChar);