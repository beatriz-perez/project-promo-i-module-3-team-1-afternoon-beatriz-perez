import React from 'react';
import Form from './Form';
import Input from './Input';

class FormList extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.state={
      openForm: '1'
    }
  }

  handleOpenForm(number) {
    if (this.state.openForm === number) {
      this.setState({
        openForm: ''
      })
    } else {
      this.setState({
        openForm: number
      })
    }
  }

  render() {
    return (
      <ul id="formList" className="formList grid-1">
        <Form 
          formNumber='1' 
          open={this.state.openForm} 
          name="diseña" 
          icon="far fa-object-ungroup" 
          buttonTask={this.handleOpenForm}
        >
          <Input type="radio" name="paletteOptions" inputTask={this.props.inputTask}/>
        </Form>

        <Form 
          formNumber='2' 
          open={this.state.openForm}
          name="rellena" icon="far fa-keyboard" 
          buttonTask={this.handleOpenForm}
        >
          <form>
            <Input 
              type="text" 
              name="name" 
              label="Nombre completo *" 
              placeholder="Ej. Sally Jill" 
              inputTask={this.props.inputTask} 
              value={this.props.info.name}/>
            <Input 
              type="text" 
              name="job" 
              label="Puesto *" 
              placeholder="Ej. Front-End Unicorn" 
              inputTask={this.props.inputTask} 
              value={this.props.info.job}/>
            <Input 
              type="file" 
              inputStyle="fileButton"
              name="image" 
              label="Imagen de perfil *" 
              placeholder="Añadir imagen"
              inputTask={this.props.inputTask}
              value={this.props.info.image}
            />
            <Input type="text" name="email" label="Email *" placeholder="Ej: sally-hill@gmail.com" inputTask={this.props.inputTask} value={this.props.info.email}/>
            <Input type="text" name="phone" label="Teléfono *" placeholder="Ej: 555-55-55-55" inputTask={this.props.inputTask} value={this.props.info.phone}/>
            <Input type="text" name="linkedin" label="Linkedin *" placeholder="Ej: sally.hill" inputTask={this.props.inputTask} value={this.props.info.linkedin}/>
            <Input type="text" name="github" label="Github *" placeholder="Ej: sally-hill" inputTask={this.props.inputTask} value={this.props.info.github}/>
          </form>
        </Form>

        <Form 
          formNumber='3'
          open={this.state.openForm}
          name="comparte" 
          icon="fas fa-share-alt" 
          buttonTask={this.handleOpenForm}
        >
          <Input/>
        </Form>
      </ul>
    );
  }
}

export default FormList;