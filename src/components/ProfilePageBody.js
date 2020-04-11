import React from 'react';

import FormList from './CardInfoComponents/FormList';
import CardPreview from './CardPreviewComponents/CardPreview';

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      palette: '1',
      name: '',
      job: '',
      image: '',
      email: '',
      phone: '',
      linkedin: '',
      github: ''
    };
  }

  componentDidMount(){
    const localInfo = JSON.parse(localStorage.getItem('localInfo'));
    console.log('localinfo', localInfo);
  }

  handleChange(name, info) {
    this.setState({[name]: info });
    console.log('aqui', this.state);
    let localInfo = this.state;
    localStorage.setItem('localInfo', JSON.stringify(localInfo));
  }

  render() {
    return (
      <div id="profilePageBody" className="profilePageBody">
        <CardPreview info={this.state} />
        <FormList info={this.state} inputTask={this.handleChange} />
      </div>
    );
  }
}

export default ProfilePageBody;