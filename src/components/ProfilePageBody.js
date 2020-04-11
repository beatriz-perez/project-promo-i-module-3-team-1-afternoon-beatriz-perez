import React from 'react';

import FormList from './CardInfoComponents/FormList';
import CardPreview from './CardPreviewComponents/CardPreview';

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.getLocalInfo = this.getLocalInfo.bind(this);
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
    this.saved = {};
  }

  getLocalInfo(){
    const localInfo = JSON.parse(localStorage.getItem('localInfo'));
    console.log(localInfo)
  }

  handleChange(name, info) {
    this.setState({[name]: info });
  }
  handleReset() {
    localStorage.clear();
    this.forceUpdate();
  }

  render() {
    this.getLocalInfo();
    localStorage.setItem('localInfo', JSON.stringify(this.state));

    return (
      <div id="profilePageBody" className="profilePageBody">
        <CardPreview info={this.state} resetFunction={this.handleReset}/>
        <FormList info={this.state} inputTask={this.handleChange} />
      </div>
    );
  }
}

export default ProfilePageBody;