import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setBalance, setProjectBalance } from '../actions';

const styles = {
  width: 380,
  height: 400,
  padding: 15,
  margin: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

class ProjectSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
    };
    this.openDonate = this.openDonate.bind(this);
    this.updateProjectBalance = this.updateProjectBalance.bind(this);
  }

  updateProjectBalance() {
    console.log(this.props.project.project_wallet);
    axios.get('/projects/getBalance/' + this.props.project.project_wallet)
    .then((res) => {
      this.props.setProjectBalance(res.data.balance);
    })
    .catch((err) => { console.log(err); });
  }

  openDonate() {
    this.props.toggleDonate();
    this.props.setProjectInFocus(this.props.project);
    const context = this;
    axios.get('/projects/getBalance/' + this.props.userWallet)
    .then((res) => {
      context.props.setBalance(res.data.balance);
    })
    .catch((err) => { console.log(err); });
  }

  render() {
    const { id, title, description, image, project_wallet } = this.props.project;
    const context = this;
    return (
      <div>
        <Card style={styles}>
          <h4>{title}</h4>
          <div style={{ margin: 20 }}>
            <img src={image} alt={id} width={300} /> <br />
          </div>
          <span style={{ margin: 20 }}>
            <RaisedButton label="Donate" primary onTouchTap={this.openDonate} />
          </span>
          <Link to={`/project/${this.props.index}`}>
            <RaisedButton label="Learn More" primary onTouchTap={this.updateProjectBalance}/>
          </Link>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    balance: state.donate.balance,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setBalance, setProjectBalance,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ProjectSummary);
