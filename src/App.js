import React from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalExp from './components/EducationalExp';
import PracticalExp from './components/PracticalExp';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          value: '',
      };
  }

  render() {
    return (
      <div className="App">
        <GeneralInfo />
        <EducationalExp />
        {/* <PracticalExp /> */}
      </div>
    );
  }
}

export default App;
