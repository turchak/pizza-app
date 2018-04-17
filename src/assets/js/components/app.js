import Component from '../framework/component';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

class App extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
		this.host.classList.add('app');
		this.header = new Header();
		this.main = new Main();
		this.footer = new Footer();
	}

	render() {
		return [this.header.update(), this.main.update(), this.footer.update()];
	}
}

export default App;
