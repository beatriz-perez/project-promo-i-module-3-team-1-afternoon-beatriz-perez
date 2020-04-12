import React from 'react';

import FormList from './CardInfoComponents/FormList';
import CardPreview from './CardPreviewComponents/CardPreview';

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      openForm: '1',
      palette: '1',
      name: '',
      job: '',
      image: '',
      email: '',
      phone: '',
      linkedin: '',
      github: ''
    };
    this.baseState = this.state;
  }

  componentDidMount() {
    let savedInfo = {};
    for (const prop in this.state) {
      savedInfo[prop] = (localStorage.getItem(prop) === null ? this.state[prop] : localStorage.getItem(prop) );
    }
    this.setState(savedInfo);
  }

  handleOpenForm(number) {
    if (this.state.openForm === number) {
      this.setState({
        openForm: ''
      })
      localStorage.setItem('openForm', '');
    } else {
      this.setState({
        openForm: number
      })
      localStorage.setItem('openForm', number);
    }
  }

  handleChange(name, info) {
    this.setState({[name]: info });
    localStorage.setItem(name, info);
  }

  handleReset() {
    localStorage.clear();
    this.setState(this.baseState);
  }

  render() {
    return (
      <div id="profilePageBody" className="profilePageBody">
        <CardPreview info={this.state} resetFunction={this.handleReset}/>
        <FormList info={this.state} formTask={this.handleOpenForm} inputTask={this.handleChange}/>
      </div>
    );
  }
}

export default ProfilePageBody;