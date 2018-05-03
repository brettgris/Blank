import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addScore} from '../../actions/actions';

import './Home.css';

class Home extends Component{
  render(){
    const { score,
           addScore
    } = this.props;

    return (
      <div className="i-gameview">
        <h1>{score}</h1>
        <p><a onClick={()=>addScore(1)}>Add</a></p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    score: state.score
  }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		addScore
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
