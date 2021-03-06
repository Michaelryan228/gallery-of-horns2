import React from 'react';
import HornedBeasts from './Horned-Beasts.js';
import CardDeck from 'react-bootstrap/CardDeck';
import FormInfo from './form.js'
// import Data from './data.json';

class Main extends React.Component {
    render() {
        return (
            <>
            <FormInfo
                filteredHorns={this.props.filteredHorns}
                />
                <CardDeck>
                    {this.props.beasts.map((thisBeast, index) => {
                            return (
                                <div key={index}>
                                    <HornedBeasts
                                        image_url={thisBeast.image_url}
                                        title={thisBeast.title}
                                        description={thisBeast.description}
                                        displayAsModal={this.props.displayAsModal}
                                        index= {index}
                                        horns={thisBeast.horns}
                                    />
                                </div>
                            )

                        })
                    }
                </CardDeck>
            </>
        )
    }
}

// return (
//     <div>
//         <HornedBeasts
//         image_url={this.props.beasts[0].image_url}
//         title={this.props.beasts[0].title}
//         description={this.props.beasts[0].description}
//         />
//     </div>
// )

export default Main;