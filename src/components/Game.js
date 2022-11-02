import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'
import SingleCard from './SingleCard';
import { Link } from 'react-router-dom';

function Game({
    choiceOne,
    choiceTwo,
    turns,
    endTurn,
    matchCards,
    cards, createCards,
    setDisabled}) {

    //compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled()
            if (choiceOne.src === choiceTwo.src) {
                //match
                matchCards()
                endTurn()
            } else {
                //no match
                setTimeout(() => endTurn(), 1000)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [choiceOne, choiceTwo])

    return (
        <div className='Game'>
            <div className='button-row'>
                <Link className='button-left' to='/'><button>Back</button></Link>
                <button className='button-center' onClick={createCards}>New Game</button>
            </div>
            <div className="card-grid">
                {
                    cards &&
                    cards.map((card) => (
                        <SingleCard
                            card={card}
                            key={card.id}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            matched={card.matched}
                        />
                    ))
                }
            </div>
            <p className='font2'>Turns: {turns}</p>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);