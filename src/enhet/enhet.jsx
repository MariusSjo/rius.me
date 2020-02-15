import React, { Component } from "react";
import "./enhet.css";

export class enhet extends Component {
    constructor() {
        super();
        this.state = {
            liste: []
        };
    }

    componentDidMount() {
        try {
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
            localStorage.setItem(0, this.state.liste);
        } catch {
            console.log("not connected");
        }
    }

    sortBeer() {}

    render() {
        return (
            <div>
                <h1>Polet kommer her</h1>
                <div className="enhet">
                    <div id="namecolumn">Name</div>
                    <div id="pricecolumn">Price</div>
                    <div id="alco">Alco</div>
                    <div id="picturecolumn">Picture</div>
                </div>
                {this.state.liste.map(drinks => {
                    console.log(drinks.basic.alcoholicContent);
                    if (drinks.basic.alcoholContent > 0) {
                        return (
                            <div
                                className="enheter"
                                key={drinks.basic.productId}
                            >
                                {/*   <div>Bache-Gabrielsen 3 kors</div>
                            <div>0,7</div>
                            <div>40%</div> */}

                                {drinks.basic.productLongName}
                                <div>{drinks.basic.volume}</div>
                                <div>{drinks.basic.alcoholContent}%</div>
                                <div>{drinks.prices[0].salesPrice}</div>
                                <img
                                    className="picture"
                                    alt={drinks.basic.productLongName}
                                    src={
                                        "https://bilder.vinmonopolet.no/cache/100x100-0/" +
                                        drinks.basic.productId +
                                        "-1.jpg"
                                    }
                                />
                            </div>
                        );
                    } else {
                        console.log("bullshit");
                    }
                })}
            </div>
        );
    }
}

export default enhet;
