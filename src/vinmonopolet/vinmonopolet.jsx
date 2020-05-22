import React, { Component } from 'react';
import './vinmonopolet.css';
import searchIcon from '../graphics/search_icon.png';
export class vinmonopolet extends Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            liste: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        try {
            fetch(
                'https://apis.vinmonopolet.no/products/v0/details-normal?KEY=6a5497e32c02464c854e54ec27996ab1&maxResults=40'
            )
                .then((results) => {
                    return results.json();
                })
                .then((data) => {
                    this.setState({
                        liste: data,
                    });
                });
            console.log(this.state.liste);
            localStorage.setItem('0', this.state.liste);
        } catch {
            console.log('not connected');
        }
    }

    async handleChange(e) {
        await this.setState({
            searchText: e.target.value.split(' ').join('_'),
        });
        try {
            fetch(
                'https://apis.vinmonopolet.no/products/v0/details-normal?KEY=6a5497e32c02464c854e54ec27996ab1&maxResults=30&productshortnamecontains=' +
                    this.state.searchText
            )
                .then((results) => {
                    return results.json();
                })
                .then((data) => {
                    this.setState({
                        liste: data,
                    });
                });
            console.log(this.state.liste);
            localStorage.setItem('0', this.state.liste);
        } catch {
            console.log('not connected');
        }
    }

    render() {
        return (
            <div>
                <div id="searchAlco">
                    <img src={searchIcon} id="searchIcon" alt="SearchIcon" />
                    <input
                        id="searchBar"
                        type="text"
                        id="searchBar"
                        placeholder="Søk etter polvarer her!"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <p id="APK_info">
                        *APK: Alkohol per krone. Dette er en måleenhet som
                        forklarer hvor mye alkohol man får for pengene. For å gi
                        et perspektiv til forholdstallet så vil en 6-pack med øl
                        på 4,7% til kr 200 ha 0,0705 APK.
                    </p>
                </div>
                <div id="Poloversikt">
                    <h3>Resultater:</h3>
                    {this.state.liste.map((drinks) => {
                        if (drinks.basic.alcoholContent > 0) {
                            return (
                                <div
                                    className="enheter"
                                    key={drinks.basic.productId}
                                >
                                    <div>
                                        <h4>{drinks.basic.productShortName}</h4>
                                    </div>
                                    <img
                                        className="picture"
                                        alt={drinks.basic.productLongName}
                                        src={
                                            'https://bilder.vinmonopolet.no/cache/200x200-0/' +
                                            drinks.basic.productId +
                                            '-1.jpg'
                                        }
                                    />
                                    <div>
                                        <o>Pris:</o>{' '}
                                        {drinks.prices[0].salesPrice}kr
                                        <br />
                                        Prosent: {
                                            drinks.basic.alcoholContent
                                        }% <br />
                                        Volum: {drinks.basic.volume} <br />
                                        APK:{' '}
                                        {Math.round(
                                            ((drinks.basic.volume *
                                                drinks.basic.alcoholContent) /
                                                drinks.prices[0].salesPrice) *
                                                100
                                        ) / 100}
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default vinmonopolet;
