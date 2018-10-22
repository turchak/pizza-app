import Component from '../../framework/component';
import { toHtml } from '../../utils/utils';

export class Timer extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
	}

	render() {
		const timer = `
        <div>
            
        </div>
        `;

		const fragment = toHtml(timer);
		return fragment;
	}
}
