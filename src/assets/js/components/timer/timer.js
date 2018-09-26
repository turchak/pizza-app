import Component from '../../framework/component';
import { toHtml } from '../../utils/utils';

export class Timer extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
	}

	render() {
		const registration = `
        <div>
            
        </div>
        `;

		const fragment = toHtml(registration);
		return fragment;
	}
}
