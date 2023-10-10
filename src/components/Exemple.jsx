import React from "react";

export default class ExempleMultipleEvent extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    
        this.state = {
            nom: '',
            prenom: '',
            age: '',
            filiere: '',
            vaccin: false
        }
    }
    
    handleOnchange(e) {
        const value = e.target.value;
        const name = e.target.name;
        const type = e.target.type;
    
        this.setState({
            [name]: type === "checkbox" ? e.target.checked : value
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();

        console.log('Nom : ' + this.state.nom)
        console.log('Prenom : ' + this.state.prenom)
        console.log('Age : ' + this.state.age)
        console.log('Filiere :' + this.state.filiere)
        console.log('Vaccin : ' + this.state.vaccin)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        Nom :
                        <input name="nom" value={this.state.nom} onChange={this.handleOnchange} />
                    </label>
                    <br />
                    <label>
                        Prenom :
                        <input name="prenom" value={this.state.prenom} onChange={this.handleOnchange} />
                    </label>
                    <br />
                    <label>
                        Age :
                        <input name="age" value={this.state.age} onChange={this.handleOnchange} />
                    </label>
                    <br />
                    <label>
                        Filiere :
                        <input name="filiere" type="radio" value="TDI"
                            checked={this.state.filiere === "TDI"} onChange={this.handleOnchange} /> TDI
                        <input name="filiere" type="radio" value="TRI"
                            checked={this.state.filiere === "TRI"} onChange={this.handleOnchange} /> TRI
                    </label>
                    <br />
                    <label>
                        Vaccine :
                        <input type="checkbox" name="vaccin" checked={this.state.vaccin} onChange={this.handleOnchange} />
                    </label>
                    <br />
                    <input type="submit" value="Soumettre les donnees" />
                </form>
            </div>
        );
    }
}            