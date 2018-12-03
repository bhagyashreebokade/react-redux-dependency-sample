import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Current age is : {this.props.age}</h1><br />
        <button onClick={this.props.ageUp}>AGE UP!</button> &nbsp;
        <button onClick={this.props.ageDown}>AGE DOWN!</button><br />
        <p>
          {this.props.history.length > 0 && <span>Another conditional programming example. The button was clicked now!</span>}
          <span style={{ display: this.props.history && this.props.history.length > 0 ? "block" : "none" }}>The previous values were..</span>
          {this.props.history.map((elem,index) => {
            console.log("elem...", elem);
            return (
              <span key={index}>
                {elem}<br />
              </span>
            )
          })}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapstatetorops..');
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispatchToProps = dispatch => {
  console.log('mapDispatchToProps');
  return {
    ageUp: () => {
      console.log('ageup...');
      dispatch({ type: "AGEUP" });
    },
    ageDown: () => {
      console.log('agedown...');
      dispatch({ type: "AGEDOWN" });
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
