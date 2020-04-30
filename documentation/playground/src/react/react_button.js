'use strict';

const e = React.createElement;

class CreateButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        if (this.state.clicked) {
            return 'React Component Extended: rendered a button.';
        }

        return e(    
            'button',
            { onClick: () => this.setState({ clicked: true }) },
            'S-Lick!'
        );
    }
};

const domContainer = document.querySelector('#create_button_container');
ReactDOM.render(e(CreateButton), domContainer);

/*
However, React also offers an option to use JSX instead:

// Display a "Like" <button>
return (
  <button onClick={() => this.setState({ clicked: true })}>
    s-Licked!
  </button>
);
*/