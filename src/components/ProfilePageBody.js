import React from 'react';

import FormList from './CardInfoComponents/FormList';
import CardPreview from './CardPreviewComponents/CardPreview';

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.createCard = this.createCard.bind(this);
    this.showLoader = this.showLoader.bind(this);
    this.showURL = this.showURL.bind(this);
    this.state = {
      openForm: '1',
      palette: '1',
      name: '',
      job: '',
      image: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      loading: false,
      cardURL: ''
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
      this.setState({ openForm: '' })
      localStorage.setItem('openForm', '');
    } else {
      this.setState({ openForm: number })
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
    window.location.reload(false);
  }

  createCard() {
    let myJson = {
      "palette": this.state.palette,
      "name": this.state.name,
      "job": this.state.job,
      "phone": this.state.phone,
      "email": this.state.email,
      "linkedin": this.state.linkedin,
      "github": this.state.github,
      "photo": this.state.image
    };
    this.showLoader();
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(myJson),
    headers: {
      'content-type': 'application/json'
    },
    })
    .then(function(resp) { return resp.json(); })
    .then((result)=> { this.showURL(result); })
    .catch((error)=> { console.log(error); });
  }

  showLoader() {
    this.handleChange('loading', true);//------------->NEW
  }

  showURL(url) {
    if (url.success === true) {
      this.handleChange('loading', false);//------------------>NEW
      this.handleChange('cardURL', url.cardURL);
    }
  }


  render() {
    return (
      <div id="profilePageBody" className="profilePageBody">
        <CardPreview info={this.state} resetFunction={this.handleReset}/>
        <FormList 
          info={this.state} 
          formTask={this.handleOpenForm} 
          inputTask={this.handleChange}
          createButtonTask={this.createCard}
        />
      </div>
    );
  }
}

export default ProfilePageBody;