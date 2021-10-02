import React from 'react';
import NameCard from '../NameCard/Namecard';
import './Results.css'
const Results = ({suggestedNames}) =>{
    const suggestedNameJSX = suggestedNames.map((suggestedName) => {
        return <NameCard key ={suggestedName} suggestedName ={suggestedName}/>;
    });

    return (
        <div className="result-container">
           {suggestedNameJSX}
        </div>
    )
}

export default Results;