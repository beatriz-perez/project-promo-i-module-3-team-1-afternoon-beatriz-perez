import React from 'react';
import Form from './Form';
import Input from './Input';
import InputFile from './InputFile';
import CreateCardButton from './CreateCardButton';

class FormList extends React.Component {

  render() {
    return (
      <ul id="formList" className="formList grid-1">

        <Form
          formNumber='1'
          open={this.props.info.openForm}
          name="diseña"
          icon="far fa-object-ungroup"
          buttonTask={this.props.formTask}
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
          open={this.props.info.openForm}
          name="rellena" icon="far fa-keyboard"
          buttonTask={this.props.formTask}
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
              value={this.props.info.linkedin}
            />
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
          open={this.props.info.openForm}
          name="comparte"
          icon="fas fa-share-alt"
          buttonTask={this.props.formTask}
        >

          <CreateCardButton info={this.props.info} task={this.props.createButtonTask} />

          <div
            className={`URLcontainer ${this.props.info.cardURL !== '' ? 'seen' : 'hidden'}`}
          >
            <p className="introText">La tarjeta ha sido creada:</p>
            <p className="linkResponse">{this.props.info.cardURL}</p>

            <a 
              href={`https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20mi%20tarjeta%20de%20visita%2C%20hecha%20con%20%23AwesomeProfileCards%20versión%20React%3A%20${this.props.info.cardURL}&hashtags=Adalab%2C%20promoIdelisa`}
              target="_blank"
              id="shareOnTwitter" 
              className="share-twitter-button" 
              target="_blank"
            >
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