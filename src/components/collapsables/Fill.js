import React from 'react';

import Avatar from '../profilePageComponents/Avatar';

class Fill extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="form__sections form__fill">
            <div className="form__open" id="form__fill--open">
                <div className="form__flex">
                <label for="name">Nombre completo<span>*</span></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Ej. Sally Jill" 
                    maxlength="20" 
                    required/>
                
                <label for="job">Profesión <span>*</span></label>
                <input 
                    type="text" 
                    id="job" 
                    name="job" 
                    placeholder="Ej: Front-end unicorn" 
                    maxlength="25" 
                    required/>
                
                <label for="photo">Imagen de perfil <span>*</span></label>
                <input
                     type="file" 
                     id="photo" 
                     name="photo" 
                     className="hidden hiddenJS js__photo--file" 
                     required/>

                    <Avatar className="photo__upload"/>
                
                
                <label for="email">Email <span>*</span></label>
                <input
                     type="email"
                      id="email" 
                      name="email" 
                      placeholder="Ej: sally-hill@gmail.com" 
                      required/>
                
                <label for="phone">Teléfono</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Ej: 555-55-55-55"
                    />
                
                <label for="linkedin">LinkedIn <span>*</span></label>
                <input 
                    type="text" 
                    id="linkedin" 
                    name="linkedin" 
                    placeholder="Ej: linkedin.com/in/sally.hill" 
                    required/>
                
                <label for="github">GitHub <span>*</span></label>
                <input 
                    type="text" 
                    id="github" 
                    name="github" 
                    placeholder="Ej: @sally-hill" 
                    required/>
            </div>
        </div>
        </section>
        );
    }
}

export default Fill;