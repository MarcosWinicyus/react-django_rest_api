import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLead } from '../../actions/leads'

class Formu extends Component {
  state = {
    name: '',
    mail: '',
    message: '',
  }

  static propTypes = {
    addLead: PropTypes.func.isRequired
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    // console.log([e.target.name], ' : ', e.target.value )
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, mail, message } = this.state
    const lead = {
                    "name" : name,
                    "mail" : mail,
                    "message" : message
                  }
    this.props.addLead(lead)
    this.setState({
        name: '',
        mail: '',
        message: '',
    })
  }

  
  render() {
    const {name, mail, message} = this.state
    return (
      <div className="card card-body mt-4 mb-4"> 
          <h2>Add Lead</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label >Name</label>
              <input type="text" name="name" className="form-control" id="1" placeholder="Name" onChange={this.onChange} value={name} ></input>
            </div>
            <div className="form-group">
              <label >Mail</label>
              <input type="email" name="mail" className="form-control"  placeholder="example" onChange={this.onChange} value={mail} ></input>
            </div>
            <div className="form-group">
              <label >Example textarea</label>
              <textarea name="message" className="form-control" id="3" rows="3" onChange={this.onChange} value={message} ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit" >Submit</button>
            </div>
          </form>
      </div>
    );
  }
}

export default connect(null, {addLead})(Formu);
