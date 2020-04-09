import React from 'react';
import '../../stylesheets/Design.scss';

class Design extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="form__sections  form__design">
            <div className="palettesContainer"> {/* aqui newHidden */}
                    
            <h3>colores</h3>
            
            <div className="paletteChoices">
                
                <input type="radio" id="paletteOne" class="radio_button rb_one" name="input-palette" value="radioButtonOne" checked>
                </input>
                <label for="paletteOne" className="palette-grid grid-one">
                    <div className="palOne_colOne"></div>
                    <div className="palOne_colTwo"></div>
                    <div className="palOne_colThree"></div>
                </label>
                
                <input type="radio" id="paletteTwo" className="radio_button rb_two" name="input-palette" value="radioButtonTwo"></input>
                <label for="paletteTwo" class="palette-grid grid-two">
                    <div className="palTwo_colOne"></div>
                    <div className="palTwo_colTwo"></div>
                    <div className="palTwo_colThree"></div>
                </label>

                <input type="radio" id="paletteThree"
                className="radio_button rb_three"  name="input-palette" value="paletteThree"></input>
                <label for="radioButtonThree" className="palette-grid grid-three">
                    <div className="palThree_colOne"></div>
                    <div className="palThree_colTwo"></div>
                    <div className="palThree_colThree"></div>
                </label>
                
                <input type="radio" id="paletteFour"
                className="radio_button rb_four"  name="input-palette" value="paletteFour"></input>
                <label for="radioButtonFour" class="palette-grid grid-four">
                    <div className="palFour_colOne"></div>
                    <div className="palFour_colTwo"></div>
                    <div className="palFour_colThree"></div>
                </label>

            </div>
        </div>
    </section>

        );
    }
}




export default Design; 