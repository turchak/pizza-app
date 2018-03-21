import Component from '../framework/component';

class ErrorMessage extends Component {
    constructor(props) {
        super(props);
        this.host = document.createElement('div');
        this.host.classList.add('error__container');
    }

    render() {
        const { text } = this.props;
        const error = document.createElement('p');
        error.classList.add('error__text');

        error.innerHTML = text;
        return error;
    }

}

export default ErrorMessage;