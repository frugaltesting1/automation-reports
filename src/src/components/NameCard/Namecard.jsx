import React from 'react';
import './Namecard.css'



const googlesurl =
    'https://www.google.com/search?q=';


const NameCard = ({ suggestedName }) => {
    return (
        <a 
        target="_blank"
        rel="noreferrer"
        className="card-link" href={`${googlesurl}${suggestedName}`}>
        <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
        </a>
    )
}

export default NameCard;