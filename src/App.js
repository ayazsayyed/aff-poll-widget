import React from 'react';
import './App.scss'
import PollWidgetContainer from './components/PollWidgetContainer';

const App = ({ pollConfig }) => {
  return <PollWidgetContainer config={pollConfig} />
};

export default App;




