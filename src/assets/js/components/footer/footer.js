import Component from '../../framework/component';

class Footer extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('footer');
		this.host.classList.add('footer');
	}

	render() {
		return `
            <div class="container">
                <address>Kottans, Kottans Srt. 1,
                    <a href="tel:+57778887">tel. 577-788-87</a>
                </address>
                <small>Pizza Manager &copy;
                    <time datetime="2018-01-01">2018</time>
                </small>
            </div>
        `;
	}
}

export default Footer;
