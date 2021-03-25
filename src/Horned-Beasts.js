import React from 'react';


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
        return(
            <div>
            </div>
        )
    }
}

export default HornedBeast;