import React, { useState, useEffect } from 'react';
import PollItem from '../PollItem';


const PollWidgetContainer = ({ config: { dataWidgetId, dataPollOptions = "", dataPollQuestion = "" } }) => {

  const options = Array(JSON.parse(dataPollOptions))[0]
  const [results, setResults] = useState([]);
  const [activeOption, setActiveOption] = useState(null);
  const [userVoted, setUserVoted] = useState(false);

  useEffect(() => {
    const savedResults = localStorage.getItem(`poll_results_${dataWidgetId}`);
    setResults(savedResults ? JSON.parse(savedResults) : createInitialResults());
  }, []);

  const createInitialResults = () => {
    return Array.from({ length: options.length }, () => 0);
  };

  const saveResults = (updatedResults) => {
    localStorage.setItem(`poll_results_${dataWidgetId}`, JSON.stringify(updatedResults));
  };

  const handleVote = (optionIndex) => {
    const updatedResults = [...results];
    if (userVoted) {
      updatedResults[activeOption]--;
    }
    updatedResults[optionIndex]++;
    setResults(updatedResults);
    setActiveOption(optionIndex);
    saveResults(updatedResults);
    setUserVoted(true);
  };

  const renderPoll = (question, options) => {
    return (
      <div key={dataWidgetId} className="poll">
        <p>{question}</p>
        {options.map((option, index) => (
          <PollItem
            index={index}
            activeOption={activeOption}
            itemKey={`${option}-${dataWidgetId}`}
            option={option}
            handleVote={handleVote}
            results={results}
            dataWidgetId={dataWidgetId}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="poll-container">
      {renderPoll(dataPollQuestion, options)}
    </div>
  );
};

export default PollWidgetContainer;