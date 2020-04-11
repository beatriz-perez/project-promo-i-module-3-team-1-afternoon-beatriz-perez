import React from 'react';
import Form from './Form';
import Input from './Input';
import InputFile from './InputFile';

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
          <form className="designForm">
            <p className="designForm__title">colores</p>
            <div className="designForm__inputGroup">

              <label htmlFor="palette1" className="paletteLabel">
                <Input 
                  type="radio" 
                  name="palette" 
                  id="palette1" 
                  inputTask={this.props.inputTask}
                  value="1"
                  checked={this.props.info.palette === "1" ? true : false}
                />
                <div className="square palette1-1"></div>
                <div className="square palette1-2"></div>
                <div className="square palette1-3"></div>
              </label>

              <label htmlFor="palette1" className="paletteLabel">
                <Input 
                  type="radio" 
                  name="palette" 
                  id="palette2" 
                  inputTask={this.props.inputTask}
                  value="2"
                  checked={this.props.info.palette === "2" ? true : false}
                />
                <div className="square palette2-1"></div>
                <div className="square palette2-2"></div>
                <div className="square palette2-3"></div>
              </label>

              <label htmlFor="palette1" className="paletteLabel">
                <Input 
                  type="radio" 
                  name="palette" 
                  id="palette3" 
                  inputTask={this.props.inputTask}
                  value="3"
                  checked={this.props.info.palette === "3" ? true : false}
                />
                <div className="square palette3-1"></div>
                <div className="square palette3-2"></div>
                <div className="square palette3-3"></div>
              </label>

            </div>
          </form>
        </Form>

        <Form 
          formNumber='2' 
          open={this.state.openForm}
          name="rellena" icon="far fa-keyboard" 
          buttonTask={this.handleOpenForm}
        >
          <form className="fillForm">
            <Input 
              type="text" 
              name="name" 
              label="Nombre completo *" 
              placeholder="Ej. Sally Jill" 
              inputTask={this.props.inputTask} 
              value={this.props.info.name}
            />
            <Input 
              type="text" 
              name="job" 
              label="Puesto *" 
              placeholder="Ej. Front-End Unicorn" 
              inputTask={this.props.inputTask} 
              value={this.props.info.job}
            />
            <InputFile
              name="image" 
              label="Imagen de perfil *" 
              buttonText="Añadir imagen"
              inputTask={this.props.inputTask}
              fileInfo={this.props.info.image}
            />
            <Input 
              type="text" 
              name="email" 
              label="Email *" 
              placeholder="Ej: sally-hill@gmail.com" 
              inputTask={this.props.inputTask} 
              value={this.props.info.email}
            />
            <Input 
              type="text" 
              name="phone" 
              label="Teléfono *" 
              placeholder="Ej: 555-55-55-55" 
              inputTask={this.props.inputTask} 
              value={this.props.info.phone}
            />
            <Input 
              type="text" 
              name="linkedin" 
              label="Linkedin *" 
              placeholder="Ej: sally.hill" 
              inputTask={this.props.inputTask} 
              value={this.props.info.linkedin}/
            >
            <Input 
              type="text" 
              name="github" 
              label="Github *" 
              placeholder="Ej: sally-hill" 
              inputTask={this.props.inputTask} 
              value={this.props.info.github}
            />
          </form>
        </Form>

        <Form 
          formNumber='3'
          open={this.state.openForm}
          name="comparte" 
          icon="fas fa-share-alt" 
          buttonTask={this.handleOpenForm}
        >

          <button id="createCardButton" type="button" className="createCardButton off">
            <i className="icon far fa-address-card"></i>
            Crear tarjeta
          </button>
          
          <div className="form-container created-container hidden">
              <p>La tarjeta ha sido creada:</p>
              <p className="linkResponse"></p>
              <a href="./" id="shareOnTwitter" className="share-twitter-button" target="_blank">
                  <i className="fab fa-twitter"></i>
                  Compartir en Twitter
              </a>
          </div>

        </Form>
      </ul>
    );
  }
}

export default FormList;