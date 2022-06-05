import React, { Component } from "react";
import ContactDataService from "../services/contact.service";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMainTel = this.onChangeMainTel.bind(this);
    this.onChangeSecondTel = this.onChangeSecondTel.bind(this);
    this.onChangeCellularNumber = this.onChangeCellularNumber.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeJobTittle = this.onChangeJobTittle.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.getContact = this.getContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.state = {
      currentContact: {
        id: null,
        name: "",
        lastName: "", 
        email: "", 
        mainTel: "", 
        secondTel: "", 
        cellularNumber: "", 
        address: "", 
        company: "", 
        jobTittle: "", 
        birthday: "" 
      },
      message: ""
    };
  }
  componentDidMount() {
    this.getContact(this.props.match.params.id);
  }
  onChangeName(e) {
    const name = e.target.value;
    this.setState(function(prevState) {
      return {
        currentContact: {
          ...prevState.currentContact,
          name: name
        }
      };
    });
  }
  onChangeLastName(e) {
    const lastName = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        lastName: lastName
      }
    }));
  }
  onChangeEmail(e) {
    const email = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        email: email
      }
    }));
  }
  onChangeMainTel(e) {
    const mainTel = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        mainTel: mainTel
      }
    }));
  }
  onChangeSecondTel(e) {
    const secondTel = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        secondTel: secondTel
      }
    }));
  }
  onChangeCellularNumber(e) {
    const cellularNumber = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        cellularNumber: cellularNumber
      }
    }));
  }
  onChangeAddress(e) {
    const address = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        address: address
      }
    }));
  }
  onChangeCompany(e) {
    const company = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        company: company
      }
    }));
  }
  onChangeJobTittle(e) {
    const jobTittle = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        jobTittle: jobTittle
      }
    }));
  }
  onChangeBirthday(e) {
    const birthday = e.target.value;
    
    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        birthday: birthday
      }
    }));
  }
  getContact(id) {
    ContactDataService.get(id)
      .then(response => {
        this.setState({
          currentContact: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateContact() {
    ContactDataService.update(
      this.state.currentContact.id,
      this.state.currentContact
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The contact was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteContact() {    
    ContactDataService.delete(this.state.currentContact.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/contacts')
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { currentContact } = this.state;
    return (
      <div>
        {currentContact ? (
          <div className="edit-form">
            <h4>Contact</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentContact.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={currentContact.lastName}
                  onChange={this.onChangeLastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentContact.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mainTelephone">Main Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  id="mainTelephone"
                  value={currentContact.mainTel}
                  onChange={this.onChangeMainTel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="secondTelephone">Second Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  id="secondTelephone"
                  value={currentContact.secondTel}
                  onChange={this.onChangeSecondTel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cellularNumber">Cellular Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cellularNumber"
                  value={currentContact.cellularNumber}
                  onChange={this.onChangeCellularNumber}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentContact.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  value={currentContact.company}
                  onChange={this.onChangeCompany}
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobTittle">Job Tittle</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTittle"
                  value={currentContact.jobTittle}
                  onChange={this.onChangeJobTittle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="text"
                  className="form-control"
                  id="birthday"
                  value={currentContact.birthday}
                  onChange={this.onChangeBirthday}
                />
              </div>
            </form>
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteContact}
            >
              Delete
            </button>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateContact}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Contact...</p>
          </div>
        )}
      </div>
    );
  }
}