import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteBeasts: 0
        }
    }

    numOfClicks = () => {
        this.setState({ favoriteBeasts: this.state.favoriteBeasts + 1 });
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} onClick= {this.numOfClicks}>
                    <Card.Img variant="top" src= {this.props.image_url} onClick= {() => this.props.displayAsModal(this.props.index)}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>Horns: {this.props.horns}</Card.Text>
                        <Card.Text>
                        ❤️ = {this.state.favoriteBeasts}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;