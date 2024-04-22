import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export class Navbar extends Component {  
  handleCountryChange = (event) => {
      const selectedCountry = event.target.value;
      this.props.updateCountry(selectedCountry);
    };
  render() {
    const { mode, toggleMode} = this.props;
    
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsAizen
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">General</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
              </ul>
              <div
                className={`form-check form-switch text-${
                  mode === "light" ? "dark" : "light"
                } mx-2`}
              >
                <input
                  className="form-check-input"
                  onClick={toggleMode}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
                </label>
              </div>
              <select className="form-select mx-2" aria-label="Default select example" style={{width: '168px',backgroundColor: mode === 'dark' ? 'black' : 'white',color: mode === 'dark' ? 'white' : 'black'}}  onChange={this.handleCountryChange}
  value={this.props.selectedCountry}>
  <option value="">Select Country</option>
  <option value="1">AFGHANISTAN</option>
  <option value="2">BANGLADESH</option>
  <option value="3">CHINA</option>
  <option value="4">EGYPT</option>
  <option value="5">HONG KONG</option>
  <option value="6">INDIA</option>
  <option value="7">INDONESIA</option>
  <option value="8">IRAN</option>
  <option value="9">IRAQ</option>
  <option value="10">IRELAND</option>
  <option value="11">ISRAEL</option>
  <option value="12">ITALY</option>
  <option value="13">JAPAN</option>
  <option value="14">KAZAKHSTAN</option>
  <option value="15">KOREA,DEMOCRATIC</option>
  <option value="16">KOREA, REPUBLIC</option>
  <option value="17">PAKISTAN</option>
  <option value="18">PALESTINE</option>
  <option value="19">QATAR</option>
  <option value="20">RUSSIA</option>
  <option value="21">SAUDI ARABIA</option>
  <option value="22">SRI LANKA</option>
  <option value="23">TURKEY</option>
  <option value="24">UKRAINE</option>
  <option value="25">UNITED ARAB EMIRATES</option>
  <option value="26">UNITED KINGDOM</option>
  <option value="27">UNITED STATES</option>
  <option value="28">UNITED STATES</option>
</select>
            </div>
            
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "NewAizen" };
export default Navbar;
