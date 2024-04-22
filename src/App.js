import './App.css';

import React, { Component} from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
      selectedISO:'in'
    };
  }
  toggleMode = () => {
    const { mode } = this.state;
  if(mode==='light'){
    this.setState({mode:'dark'});
    document.body.style.backgroundColor="black";
  }
  else{
    this.setState({mode:'light'});
    document.body.style.backgroundColor="white";
  }
};
 countryISO = {
  AFGHANISTAN: 'af',
  BANGLADESH: 'bd',
  CHINA:'cn',
  EGYPT:'eg',
  HONGKONG:'hk',
  INDIA:'in',
  INDONESIA:'id',
  IRAN:''
};
updateCountry = (selectedCountry) => {
  const selectedISO = this.countryISO[selectedCountry];
  this.setState({ selectedISO });
};
pageSize=10;
  render() 
  {
    const { mode,selectedISO } = this.state;
    return (
      <Router>
      <Navbar mode={mode} toggleMode={this.toggleMode} updateCountry={this.updateCountry}/>
      <div>
      <Routes>
          <Route exact path="/" element={ <News key="general" mode={mode} pageSize={this.pageSize} country={selectedISO} category="general"/>} />
          <Route exact path="/business" element={ <News key="business" mode={mode} pageSize={this.pageSize} country={selectedISO} category="business"/>} />
          <Route exact path="/entertainment" element={ <News key="entertainment" mode={mode} pageSize={this.pageSize} country={selectedISO} category="entertainment"/>} />
          <Route exact path="/general" element={ <News key="general" mode={mode} pageSize={this.pageSize} country={selectedISO} category="general"/>} />
          <Route exact path="/health" element={ <News key="science" mode={mode} pageSize={this.pageSize} country={selectedISO} category="science"/>} />
          <Route exact path="/sports" element={ <News key="sports" mode={mode} pageSize={this.pageSize} country={selectedISO} category="sports"/>} />
          <Route exact path="/technology" element={ <News key="technology" mode={mode} pageSize={this.pageSize} country={selectedISO} category="technology"/>} />
          </Routes>
      </div>
      </Router>
    )
  }
}