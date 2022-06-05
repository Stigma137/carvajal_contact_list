import React, { Component } from "react";
import ContactDataService from "../services/contact.service";
export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
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
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeMainTel(e) {
    this.setState({
      mainTel: e.target.value
    });
  }
  onChangeSecondTel(e) {
    this.setState({
      secondTel: e.target.value
    });
  }
  onChangeCellularNumber(e) {
    this.setState({
      cellularNumber: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangeCompany(e) {
    this.setState({
      company: e.target.value
    });
  }
  onChangeJobTittle(e) {
    this.setState({
      jobTittle: e.target.value
    });
  }
  onChangeBirthday(e) {
    this.setState({
      birthday: e.target.value
    });
  }
  saveContact() {
    var data = {
        name: this.state.name,
        lastName: this.state.lastName, 
        email: this.state.email, 
        mainTel: this.state.mainTel, 
        secondTel: this.state.secondTel, 
        cellularNumber: this.state.cellularNumber, 
        address: this.state.address, 
        company: this.state.company, 
        jobTittle: this.state.jobTittle, 
        birthday: this.state.birthday
    };
    ContactDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          lastName: response.data.lastName, 
          email: response.data.email, 
          mainTel: response.data.mainTel, 
          secondTel: response.data.secondTel, 
          cellularNumber: response.data.cellularNumber, 
          address: response.data.address, 
          company: response.data.company, 
          jobTittle: response.data.jobTittle, 
          birthday: response.data.birthday
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newContact() {
    this.setState({
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
    });
  }
  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You added a contact successfully!</h4>
              <button className="btn btn-success" onClick={this.newContact}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                  value={this.state.lastName}
                  onChange={this.onChangeLastName}
                  name="lastName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mainTel">Main Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  id="mainTel"
                  required
                  value={this.state.mainTel}
                  onChange={this.onChangeMainTel}
                  name="mainTel"
                />
              </div>
              <div className="form-group">
                <label htmlFor="secondTel">Second Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  id="secondTel"
                  required
                  value={this.state.secondTel}
                  onChange={this.onChangeSecondTel}
                  name="secondTel"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cellularNumber">Cellular Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cellularNumber"
                  required
                  value={this.state.cellularNumber}
                  onChange={this.onChangeCellularNumber}
                  name="cellularNumber"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                  name="address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  required
                  value={this.state.company}
                  onChange={this.onChangeCompany}
                  name="company"
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobTittle">Job Tittle</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTittle"
                  required
                  value={this.state.jobTittle}
                  onChange={this.onChangeJobTittle}
                  name="jobTittle"
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="text"
                  className="form-control"
                  id="birthday"
                  required
                  value={this.state.birthday}
                  onChange={this.onChangeBirthday}
                  name="birthday"
                />
              </div>
              <button onClick={this.saveContact} className="btn btn-success">
                Add Contact
              </button>
            </div>
          )}
        </div>
      );
  }
}