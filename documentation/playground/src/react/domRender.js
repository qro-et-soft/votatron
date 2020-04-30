'use strict';

const createHelloComp = React.createElement;

class CreateHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { health: false };
    }

    render() {
        if (this.state.health) {
            return 'go GET you Healthy! 🥭';
        }

        return createHelloComp(
            'button',
            { onClick: () => this.setState({ health: true }) },
            'Healthy Yet?'
        );
    }
};

const getRootens = document.querySelector('#rooten');
ReactDOM.render(createHelloComp(CreateHello), getRootens);