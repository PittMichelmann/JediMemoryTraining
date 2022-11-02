import React from 'react';
import './SingleCard.css'
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function SingleCard({ handleChoice, card, flipped, disabled, matched }) {
    return (
        <div className={matched ? "border-yellow card" : "border card"}>
                <div className={flipped ? "flipped" : ""}>
                    <img className="front" src={card.src} alt="card front" />
                    <img
                        className="back"
                        onClick={() => {
                            if (!disabled) {
                                handleChoice(card)
                            }
                        }}
                        src="/img/cover.png"
                        alt="card back"
                    />
                </div>
           
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);