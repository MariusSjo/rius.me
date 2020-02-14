import React, { Component } from "react";

export class enhet extends Component {
    constructor() {
        super();
        this.state = {
            liste: []
        };
    }

    componentDidMount() {
        fetch(
            "https://apis.vinmonopolet.no/products/v0/details-normal?maxResults=500&key=6a5497e32c02464c854e54ec27996ab1"
        )
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                this.setState({
                    liste: data
                });
            });
        console.log(this.state.liste);
    }

    render() {
        return (
            <div>
                {this.state.liste.map(drinks => {
                    return (
                        <li key={drinks.basic.productId}>
                            Navn: {drinks.basic.productLongName}, Volum:
                            {drinks.basic.volume}
                            ,Pris: {drinks.prices[0].salesPrice},
                            <img
                                alt={drinks.basic.productLongName}
                                src={
                                    "https://bilder.vinmonopolet.no/cache/100x100-0/" +
                                    drinks.basic.productId +
                                    "-1.jpg"
                                }
                            />
                        </li>
                    );
                })}
            </div>
        );
    }
}

export default enhet;
