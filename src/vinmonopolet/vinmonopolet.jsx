import React, { useEffect, useState } from 'react';
import './vinmonopolet.css';
import searchIcon from '../graphics/search_icon.png';
function Vinmonopolet() {
    const [liste, setListe] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [alternative, setAlternative] = useState(0);
    const alternatives = [
        { name: 'Alle', value: 0, checked: 'checked' },
        { name: 'Øl', value: 5, checked: '' },
        { name: 'Vin', value: 1, checked: '' },
        { name: 'Brennevin', value: 3, checked: '' },
    ];

    useEffect(handleChange, [searchText]);

    function handleChange(liste) {
        try {
            fetch(
                'https://apis.vinmonopolet.no/products/v0/details-normal?KEY=6a5497e32c02464c854e54ec27996ab1&maxResults=30&productshortnamecontains=' +
                    searchText
            )
                .then((results) => {
                    return results.json();
                })
                .then((data) => {
                    setListe(data);
                });
            console.log(liste);
        } catch {
            console.log('not connected');
        }
    }
    return (
        <div>
            <div id="searchAlco">
                <img src={searchIcon} id="searchIcon" alt="SearchIcon" />
                <input
                    id="searchBar"
                    type="text"
                    id="searchBar"
                    placeholder="Søk etter polvarer her!"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <p id="APK_info">
                    *APK: Alkohol per krone. Dette er en måleenhet som forklarer
                    hvor mye alkohol man får for pengene. For å gi et perspektiv
                    til forholdstallet så vil en 6-pack med øl på 4,7% til kr
                    200 ha 0,0705 APK.
                </p>
                <div id="alternatives">
                    <select onChange={(e) => setAlternative(e.target.value)}>
                        {alternatives.map((alt) => {
                            return (
                                <option value={alt.value}>{alt.name}</option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div id="Poloversikt">
                <h3>Resultater:</h3>
                {liste.map((drinks) => {
                    if (drinks.basic.alcoholContent > 0) {
                        console.log(
                            drinks.classification.mainProductTypeName.includes(
                                'vin'
                            ),
                            drinks.classification.mainProductTypeId,
                            alternative,
                            drinks.classification.mainProductTypeName == 'Øl'
                        );
                        if (
                            drinks.classification.mainProductTypeId ==
                                alternative ||
                            alternative == 0
                        ) {
                            {
                                return (
                                    <div
                                        className="enheter"
                                        key={drinks.basic.productId}
                                    >
                                        <div>
                                            <h4>
                                                {drinks.basic.productShortName}
                                            </h4>
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
                                            Prosent:{' '}
                                            {drinks.basic.alcoholContent}%{' '}
                                            <br />
                                            Volum: {drinks.basic.volume} <br />
                                            APK:{' '}
                                            {Math.round(
                                                ((drinks.basic.volume *
                                                    drinks.basic
                                                        .alcoholContent) /
                                                    drinks.prices[0]
                                                        .salesPrice) *
                                                    100
                                            ) / 100}
                                        </div>
                                    </div>
                                );
                            }
                        }
                    }
                })}
            </div>
        </div>
    );
}

export default Vinmonopolet;
