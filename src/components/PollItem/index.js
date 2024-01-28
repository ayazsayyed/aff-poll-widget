import React from 'react';
const PollItem = ({ index, activeOption, itemKey, option, handleVote, results, dataWidgetId }) => {
    const getHighligts = (index) => {
        const pollSum = results?.reduce((a, b) => a + b, 0)
        const res = results[index] / pollSum
        return {
            transform: `scaleX(${res})`,
            background: !pollSum ? '#fff' : (activeOption === index ? '#b5f5ce' : '#eee')
        }
    }
    return (
        <div key={index} className={`option ${activeOption === index ? 'active' : ''}`}>
            <div className='radio-container'>
                <input type='radio' id={itemKey} name={dataWidgetId} onClick={() => handleVote(index)} />
                <label htmlFor={itemKey}> {option} <strong>{results[index]} Votes</strong> </label>
                <span className="checkmark"></span>
                <div className='highlight' style={{ ...getHighligts(index) }}></div>
            </div>
        </div>
    )
}

export default PollItem;