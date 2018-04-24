/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
	function Component(props) {
		_classCallCheck(this, Component);

		this.props = props || {};
		this.state = {};
		this.host = null;
		this.onInit();
	}

	_createClass(Component, [{
		key: 'updateState',
		value: function updateState(nextState) {
			this.state = Object.assign({}, this.state, nextState);
			return this._render();
		}
	}, {
		key: 'onInit',
		value: function onInit() {}
	}, {
		key: 'update',
		value: function update(nextProps) {
			this.props = nextProps;
			return this._render();
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			console.log('unmountiong');
			this.onBeforeUnmount();
		}
	}, {
		key: 'onBeforeUnmount',
		value: function onBeforeUnmount() {}
	}, {
		key: 'onBeforeUpdate',
		value: function onBeforeUpdate(nextProps) {}
	}, {
		key: '_render',
		value: function _render() {
			var children = this.render();

			this.host.innerHTML = '';
			if (typeof children === 'string') {
				this.host.innerHTML = children;
			} else if (Array.isArray(children)) {
				var _host;

				(_host = this.host).append.apply(_host, _toConsumableArray(children));
			} else {
				this.host.append(children);
			}

			return this.host;
		}
	}, {
		key: 'render',
		value: function render() {}
	}, {
		key: 'name',
		get: function get() {
			return this.constructor.name;
		}
	}]);

	return Component;
}();

exports.default = Component;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var toHtml = exports.toHtml = function toHtml(string) {
	var template = document.createElement('template');
	template.innerHTML = string;
	return template.content;
};

var RANDOM = exports.RANDOM = function RANDOM(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AUTH_SERVICE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
	function AuthService() {
		_classCallCheck(this, AuthService);

		this._token = localStorage.getItem('token');
		this._claims = JSON.parse(localStorage.getItem('claims'));
		this.loginUrl = _constants.DOMAIN + '/api/v1/user/login';
		this.storeUrl = _constants.DOMAIN + '/api/v1/store/list';
		this.createUrl = _constants.DOMAIN + '/api/v1/user/create';
	}

	_createClass(AuthService, [{
		key: 'isAuthorized',
		value: function isAuthorized() {
			if (!this.token) return false;
			if (!this.tokenIsNotExpired()) {
				this.clearStorage();
				return false;
			}
			return true;
		}
	}, {
		key: 'clearStorage',
		value: function clearStorage() {
			this._claims = null;
			this._token = null;
			localStorage.removeItem('token');
			localStorage.removeItem('claims');
		}
	}, {
		key: 'tokenIsNotExpired',
		value: function tokenIsNotExpired() {
			if (!this.token) return false;
			return this.claims.exp * 1000 > Date.now();
		}
	}, {
		key: 'storeInfo',
		value: function storeInfo() {
			return fetch(this.storeUrl).then(function (res) {
				return res.json();
			});
		}
	}, {
		key: 'loginUser',
		value: function loginUser(data) {
			var _this = this;

			var options = {
				method: 'POST',
				body: JSON.stringify(data),
				headers: new Headers().append('Content-type', 'application/json')
			};

			return fetch(this.loginUrl, options).then(function (res) {
				if (res.ok) {
					return res.json().then(function (answer) {
						_this.token = answer.token;
						_this.claims = _this.parseJwtClaims(answer.token);
						return Promise.resolve({ answer: answer, status: res.status });
					});
				} else {
					return res.json().then(function (answer) {
						return Promise.reject({ answer: answer, status: res.status });
					});
				}
			});
		}
	}, {
		key: 'registerUser',
		value: function registerUser(data) {
			var options = {
				method: 'POST',
				body: JSON.stringify(data)
			};
			return fetch(this.createUrl, options).then(function (res) {
				return res.json();
			});
		}
	}, {
		key: 'parseJwtClaims',
		value: function parseJwtClaims(jwtToken) {
			if (jwtToken) {
				var base64Url = jwtToken.split('.')[1];
				var base64 = base64Url.replace('-', '+').replace('_', '/');
				return JSON.parse(window.atob(base64));
			}
			return {};
		}
	}, {
		key: 'token',
		get: function get() {
			return this._token;
		},
		set: function set(token) {
			this._token = token;
			localStorage.setItem('token', token);
		}
	}, {
		key: 'claims',
		get: function get() {
			return this._claims;
		},
		set: function set(claims) {
			this._claims = claims;
			localStorage.setItem('claims', JSON.stringify(claims));
		}
	}]);

	return AuthService;
}();

var AUTH_SERVICE = exports.AUTH_SERVICE = new AuthService();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOMAIN = exports.DOMAIN = 'https://pizza-tele.ga';
var INGREDIENTS_URL = exports.INGREDIENTS_URL = DOMAIN + '/api/v1/ingredient/list';
var TAG_URL = exports.TAG_URL = DOMAIN + '/api/v1/tag/list';
var USER_URL = exports.USER_URL = DOMAIN + '/api/v1/user/my_info';
var CREATE_PIZZA = exports.CREATE_PIZZA = DOMAIN + '/api/v1/pizza/create';
var PIZZA_LIST = exports.PIZZA_LIST = DOMAIN + '/api/v1/pizza/list';
var WS_TICKET = exports.WS_TICKET = DOMAIN + '/api/v1/ws/ticket';
var WS_PATH = exports.WS_PATH = 'wss://pizza-tele.ga/ws';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.host = document.createElement('footer');
    _this.host.classList.add('footer');
    return _this;
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return '\n            <div class="container">\n                <address>Kottans, Kottans Srt. 1,\n                    <a href="tel:+57778887">tel. 577-788-87</a>\n                </address>\n                <small>Pizza Manager &copy;\n                    <time datetime="2018-01-01">2018</time>\n                </small>\n            </div>\n        ';
    }
  }]);

  return Footer;
}(_component2.default);

exports.default = Footer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(1);

var _auth = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.host = document.createElement('header');
        _this.host.classList.add('header');
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            //TODO: need delete <a href="#/login" class="login__button-link">sign in</a>
            var isAuthorized = _auth.AUTH_SERVICE.isAuthorized();

            var loginButton = '\n            <a href="#/login" class="button auth__button auth__button--in">sign in</a>\n        ';
            var logoutButton = '\n            <a href="#/logout" class="button auth__button auth__button--out">sign out</a>\n        ';
            var userButton = '\n            <a href="#/user" class="button auth__button auth__button--info">user info</a>\n        ';
            var registrationButton = '\n            <a href="#/registration" class="button auth__button auth__button--up">sign up</a>\n        ';

            var header = '\n        <div class="container">\n            <nav class="nav">\n                <aside class="current-time">\n                    <svg width="50" height="50">\n                      <use xlink:href="#clock"></use>\n                    </svg>\n                    <time datetime="2018-02-03 12:01:48">12:01:48</time>\n                </aside>\n                <a class="logo" href="#/">\n                    <svg width="100" height="100">\n                      <use xlink:href="#logo"></use>\n                    </svg>\n                </a>\n                <aside class="auth">\n                    ' + (isAuthorized ? logoutButton : loginButton) + '\n                    ' + (isAuthorized ? userButton : registrationButton) + ' \n                </aside>\n            </nav>\n        </div>\n        ';

            var fragment = (0, _utils.toHtml)(header);
            return fragment;
        }
    }]);

    return Header;
}(_component2.default);

exports.default = Header;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AUTH_HTTP_SERVICE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthHttpService = function () {
	function AuthHttpService() {
		_classCallCheck(this, AuthHttpService);
	}

	_createClass(AuthHttpService, [{
		key: 'get',
		value: function get(url) {
			if (!_auth.AUTH_SERVICE.isAuthorized) {
				throw new Error('Non-authorized request');
			}
			return fetch(url, {
				method: 'GET',
				headers: new Headers({
					Authorization: 'Bearer ' + _auth.AUTH_SERVICE.token,
					'content-type': 'application/json'
				})
			}).then(function (response) {
				return Promise.resolve(response.json());
			}, function (response) {
				return Promise.reject(response.statusCode);
			});
		}
	}, {
		key: 'post',
		value: function post(url, data) {
			return fetch(url, {
				method: 'POST',
				body: data,
				headers: new Headers({
					Authorization: 'Bearer ' + _auth.AUTH_SERVICE.token
				})
			}).then(function (response) {
				return Promise.resolve(response.json());
			}, function (response) {
				return Promise.reject(response.statusCode);
			});
		}
	}, {
		key: 'patch',
		value: function patch() {}
	}]);

	return AuthHttpService;
}();

var AUTH_HTTP_SERVICE = exports.AUTH_HTTP_SERVICE = new AuthHttpService();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APP_ROUTER = undefined;

__webpack_require__(10);

var _router = __webpack_require__(11);

var _router2 = _interopRequireDefault(_router);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ROUTER = exports.APP_ROUTER = new _router2.default({ host: document.querySelector('#root'), routes: _routes2.default });

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
	function Timer() {
		_classCallCheck(this, Timer);
	}

	_createClass(Timer, [{
		key: 'convertDate',
		value: function convertDate(time) {
			var data = new Date(time);
			var day = data.getDate();
			var month = data.getMonth();
			var year = data.getFullYear();
			return day + ' ' + this.convertMount(month) + ' ' + year;
		}
	}, {
		key: 'convertMount',
		value: function convertMount(month) {
			var result = void 0;
			switch (month) {
				case 0:
					result = 'January';
					break;

				case 1:
					result = 'February';
					break;

				case 2:
					result = 'March';
					break;

				case 3:
					result = 'April';
					break;

				case 4:
					result = 'May';
					break;

				case 5:
					result = 'June';
					break;

				case 6:
					result = 'July';
					break;

				case 7:
					result = 'August';
					break;

				case 8:
					result = 'September';
					break;

				case 9:
					result = 'October';
					break;

				case 10:
					result = 'November';
					break;

				case 11:
					result = 'December';
					break;
			}
			return result;
		}
	}]);

	return Timer;
}();

var TIME = exports.TIME = new Timer();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CREATE_DATA = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth = __webpack_require__(6);

var _constants = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PizzaDataService = function () {
	function PizzaDataService() {
		_classCallCheck(this, PizzaDataService);

		this.ingredients = [];
		this.tags = [];
		this.pizzas = [];
		this.addPizza = this.addPizza.bind(this);
		this.removePizza = this.removePizza.bind(this);
	}

	_createClass(PizzaDataService, [{
		key: 'addPizza',
		value: function addPizza(pizza) {
			if (this.pizzas.findIndex(function (p) {
				return pizza.uuid === p.uuid;
			}) != -1) {
				return false;
			}
			this.pizzas.unshift(pizza);
			return true;
		}
	}, {
		key: 'removePizza',
		value: function removePizza(uuids) {
			var _this = this;

			uuids.forEach(function (uuid) {
				var index = _this.pizzas.findIndex(function (p) {
					return uuid === p.uuid;
				});
				{
					if (index != -1) {
						_this.pizzas.splice(index, 1);
					}
				}
			});
		}
	}, {
		key: 'getUnacceptedPizzas',
		value: function getUnacceptedPizzas(reset, limit, offset) {
			var _this2 = this;

			return _auth.AUTH_HTTP_SERVICE.get(_constants.PIZZA_LIST + '?limit=' + (limit || 100) + '&offset=' + (offset || 0)).then(function (res) {
				if (reset) {
					_this2.pizzas = res.results;
				} else {
					_this2.pizzas = _this2.pizzas.concat(res.results);
				}
			});
		}
	}, {
		key: 'getIngredients',
		value: function getIngredients() {
			var _this3 = this;

			return _auth.AUTH_HTTP_SERVICE.get(_constants.INGREDIENTS_URL).then(function (data) {
				_this3.ingredients = data.results;
				return data.results;
			});
		}
	}, {
		key: 'getTags',
		value: function getTags() {
			var _this4 = this;

			return _auth.AUTH_HTTP_SERVICE.get(_constants.TAG_URL).then(function (data) {
				_this4.tags = data.results;
				return data.results;
			});
		}
	}]);

	return PizzaDataService;
}();

var CREATE_DATA = exports.CREATE_DATA = new PizzaDataService();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _auth = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_Component) {
	_inherits(Router, _Component);

	function Router(props) {
		_classCallCheck(this, Router);

		var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

		var _this$props = _this.props,
		    routes = _this$props.routes,
		    host = _this$props.host;

		_this.host = host;

		_this.state = {
			routes: routes,
			activeRoute: null,
			activeComponent: null
		};

		_this.handleUrlChange = _this.handleUrlChange.bind(_this);
		_this.applyRoute = _this.applyRoute.bind(_this);

		window.addEventListener('hashchange', function () {
			return _this.handleUrlChange(_this.path);
		});

		_this.handleUrlChange(_this.path);
		return _this;
	}

	_createClass(Router, [{
		key: 'handleUrlChange',
		value: function handleUrlChange(url) {
			var _state = this.state,
			    routes = _state.routes,
			    activeRoute = _state.activeRoute;

			var nextRoute = routes.find(function (_ref) {
				var href = _ref.href;
				return href === url;
			});
			if (nextRoute && nextRoute !== activeRoute) {
				if (nextRoute.redirectTo) {
					return this.handleRedirect(nextRoute.redirectTo);
				}

				if (nextRoute.onEnter) {
					return this.handleOnEnter(nextRoute);
				}

				this.applyRoute(nextRoute);
			}
		}
	}, {
		key: 'handleRedirect',
		value: function handleRedirect(url) {
			window.location.hash = url;
		}
	}, {
		key: 'handleOnEnter',
		value: function handleOnEnter(nextRoute) {
			var _this2 = this;

			var onEnter = nextRoute.onEnter;


			if (onEnter.logout) {
				_auth.AUTH_SERVICE.clearStorage();
			}

			var onEnterGuard = onEnter.guard;
			onEnterGuard(nextRoute).then(function (res) {
				return res.success ? _this2.applyRoute(res.route) : _this2.handleRedirect(res.redirect);
			});
		}
	}, {
		key: 'applyRoute',
		value: function applyRoute(route) {
			var Component = route.Component;
			var activeComponent = this.state.activeComponent;

			var componentInstance = new Component();

			activeComponent ? activeComponent.unmount() : null;

			this.updateState({
				activeRoute: route,
				activeComponent: componentInstance
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var activeComponent = this.state.activeComponent;

			return activeComponent.update();
		}
	}, {
		key: 'path',
		get: function get() {
			return window.location.hash.slice(1);
		}
	}]);

	return Router;
}(_component2.default);

exports.default = Router;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _login = __webpack_require__(13);

var _login2 = _interopRequireDefault(_login);

var _app = __webpack_require__(16);

var _app2 = _interopRequireDefault(_app);

var _registration = __webpack_require__(20);

var _registration2 = _interopRequireDefault(_registration);

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

var _create = __webpack_require__(23);

var _create2 = _interopRequireDefault(_create);

var _auth = __webpack_require__(26);

var _auth2 = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
	Component: _app2.default,
	href: '',
	redirectTo: '/',
	onEnter: {
		guard: _auth.authGuard
	}
}, {
	Component: _app2.default,
	href: '/',
	onEnter: {
		guard: _auth.authGuard
	}
}, {
	Component: _login2.default,
	href: '/login'
}, {
	Component: _registration2.default,
	href: '/registration'
}, {
	Component: _user2.default,
	href: '/user',
	onEnter: {
		guard: _auth.authGuard
	}
}, {
	href: '/logout',
	onEnter: {
		logout: true,
		guard: _auth.authGuard
	}
}, {
	Component: _create2.default,
	href: '/create',
	onEnter: {
		guard: _auth.authGuard
	}
}];

exports.default = routes;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _footer = __webpack_require__(4);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _login = __webpack_require__(14);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
	_inherits(Login, _Component);

	function Login(props) {
		_classCallCheck(this, Login);

		var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

		_this.host = document.createElement('div');
		_this.host.classList.add('login-container');
		_this.header = new _header2.default();
		_this.loginForm = new _login2.default();
		_this.footer = new _footer2.default();
		return _this;
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			return [this.header.update(), this.loginForm.update(), this.footer.update()];
		}
	}]);

	return Login;
}(_component2.default);

exports.default = Login;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(1);

var _error = __webpack_require__(15);

var _error2 = _interopRequireDefault(_error);

var _auth = __webpack_require__(2);

var _index = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
	_inherits(LoginForm, _Component);

	function LoginForm(props) {
		_classCallCheck(this, LoginForm);

		var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

		_this.state = {
			username: null,
			password: null,
			message: null
		};
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.host = document.createElement('main');
		_this.host.classList.add('login');
		_this.message = new _error2.default();
		return _this;
	}

	_createClass(LoginForm, [{
		key: 'handleSubmit',
		value: function handleSubmit(ev) {
			var _this2 = this;

			ev.preventDefault();
			var host = ev.target;
			var data = {
				username: host.username.value.trim(),
				password: host.password.value.trim()
			};
			_auth.AUTH_SERVICE.loginUser(data).then(function (res) {
				var state = {
					username: host.username.value.trim(),
					password: host.password.value.trim(),
					message: null
				};
				_this2.updateState(state);
				_index.APP_ROUTER.handleRedirect('/');
			}, function (status) {
				var text = status.answer.error;
				var state = {
					username: host.username.value.trim(),
					password: host.password.value.trim(),
					message: text
				};
				_this2.updateState(state);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    username = _state.username,
			    password = _state.password,
			    message = _state.message;


			var loginString = '\n        <div class="container">\n            <form class="login__form">\n                <h2 class="login__title">Login</h2>\n                <label for="login-username">Username</label>\n\t\t\t\t<input class="login__input" id="login-username" type="text" name="username" placeholder="Your name" value=\n\t\t\t\t' + (username ? username : '') + '>\n                <label for="login-password">Password</label>\n\t\t\t\t<input class="login__input" id="login-password" type="password" name="password" placeholder="Your password" value=\n\t\t\t\t' + (password ? password : '') + '>\n                <button class="button login__button" type="submit">sign in</button>\n            </form>\n        </div>\n        ';

			var loginFragment = (0, _utils.toHtml)(loginString);

			if (message) {
				var errorMessage = this.message.update({ text: message });
				loginFragment.querySelector('.login__button').appendChild(errorMessage);
			}

			loginFragment.querySelector('.login__form').addEventListener('submit', this.handleSubmit);
			return loginFragment;
		}
	}]);

	return LoginForm;
}(_component2.default);

exports.default = LoginForm;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorMessage = function (_Component) {
	_inherits(ErrorMessage, _Component);

	function ErrorMessage(props) {
		_classCallCheck(this, ErrorMessage);

		var _this = _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).call(this, props));

		_this.host = document.createElement('div');
		_this.host.classList.add('error__container');
		return _this;
	}

	_createClass(ErrorMessage, [{
		key: 'render',
		value: function render() {
			var text = this.props.text;

			var error = document.createElement('p');
			error.classList.add('error__text');
			error.innerHTML = text;
			return error;
		}
	}]);

	return ErrorMessage;
}(_component2.default);

exports.default = ErrorMessage;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _footer = __webpack_require__(4);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _list = __webpack_require__(17);

var _list2 = _interopRequireDefault(_list);

var _utils = __webpack_require__(1);

var _pizza = __webpack_require__(9);

var _ws = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.host = document.createElement('div');
		_this.host.classList.add('app');
		_this.header = new _header2.default();
		_this.list = new _list2.default();
		_this.footer = new _footer2.default();
		return _this;
	}

	_createClass(App, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			_ws.WS.establish();

			this.unsubscribeAdd = this.subscribe({
				event: 'CREATE_PIZZA',
				method: _pizza.CREATE_DATA.addPizza
			});

			this.unsubscribeRemove = this.subscribe({
				event: 'ACCEPT_PIZZA',
				method: _pizza.CREATE_DATA.removePizza
			});

			_pizza.CREATE_DATA.getUnacceptedPizzas(true, 12, 0).then(function (res) {
				return _this2.updateList();
			});
		}
	}, {
		key: 'subscribe',
		value: function subscribe(param) {
			var _this3 = this;

			var event = param.event,
			    method = param.method;


			var unsubscribe = _ws.WS.subscribe(event, function (data) {
				method(data);
				_this3.updateList();
			});
			return unsubscribe;
		}
	}, {
		key: 'onBeforeUnmount',
		value: function onBeforeUnmount() {
			this.unsubscribeAdd();
			this.unsubscribeRemove();
		}
	}, {
		key: 'updateList',
		value: function updateList() {
			this.list.update({
				pizzas: _pizza.CREATE_DATA.pizzas
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var containerString = '\n\t\t<main class="main pizzas">\n            <div class="container pizzas__container">\n                <a href="#/create" class="button add-link">add pizza</a>\n            </div>\n        </main>\n\t\t';

			var containerFragment = (0, _utils.toHtml)(containerString);
			var container = containerFragment.querySelector('.pizzas__container');

			container.append(this.list.update());

			return [this.header.update(), containerFragment, this.footer.update()];
		}
	}]);

	return App;
}(_component2.default);

exports.default = App;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(1);

var _constants = __webpack_require__(3);

var _time = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PizzaList = function (_Component) {
	_inherits(PizzaList, _Component);

	function PizzaList(props) {
		_classCallCheck(this, PizzaList);

		var _this = _possibleConstructorReturn(this, (PizzaList.__proto__ || Object.getPrototypeOf(PizzaList)).call(this, props));

		_this.host = document.createElement('div');
		_this.host.classList.add('list');
		return _this;
	}

	_createClass(PizzaList, [{
		key: 'createPizza',
		value: function createPizza(pizzas) {
			var container = document.createElement('section');
			var list = function list(pizza) {
				return '\n            <article class="pizza">\n                <img class="pizza__img" src="' + _constants.DOMAIN + '/' + pizza.img_url + '" alt="' + pizza.name + '">\n                <h2 class="pizza__name">' + pizza.name + '</h2>\n\t\t\t\t<time class="pizza__time" datetime="' + _time.TIME.convertDate(pizza.time_prepared) + '">' + _time.TIME.convertDate(pizza.time_prepared) + '</time>\n                <span class="pizza__queue-number">#1</span>\n                <div class="pizza__eta">\n                    <span>eta</span>\n                    <time datetime="04:00">4</time>\n                    <span>min</span>\n                </div>\n                <div class="pizza__price">\n                    <span>$</span>\n                    <span>' + pizza.price + '</span>\n                </div>\n            </article> \n            ';
			};

			pizzas.forEach(function (pizza) {
				container.innerHTML += list(pizza);
			});

			return container;
		}
	}, {
		key: 'render',
		value: function render() {
			var containerString = '\n\t\t<div class="container list__container">\n        </div>\n\t\t';

			var containerFragment = (0, _utils.toHtml)(containerString);
			var container = containerFragment.querySelector('.list__container');

			if (this.props) {
				var pizzas = this.props.pizzas;


				if (pizzas.length === 0) {
					container.innerText = '';
				} else {
					container.append(this.createPizza(pizzas));
				}
			}

			return container;
		}
	}]);

	return PizzaList;
}(_component2.default);

exports.default = PizzaList;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth = __webpack_require__(6);

var _constants = __webpack_require__(3);

var _event = __webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ws = function () {
	function Ws() {
		_classCallCheck(this, Ws);

		this.ws = null;
		this._emitter = new _event.EventEmitter();
	}

	_createClass(Ws, [{
		key: 'getTicket',
		value: function getTicket() {
			return _auth.AUTH_HTTP_SERVICE.get(_constants.WS_TICKET).then(function (res) {
				return res;
			});
		}
	}, {
		key: 'subscribe',
		value: function subscribe(eventName, callback) {
			return this._emitter.subscribe(eventName, callback);
		}
	}, {
		key: '_onmessage',
		value: function _onmessage(data) {
			var event = JSON.parse(data);
			console.log('message: ', event);
			this._emitter.emit(event.event_name, event.data);
		}
	}, {
		key: '_onclose',
		value: function _onclose(e) {
			if (e.code === 4001) {
				console.log('Login plz');
			} else {
				console.log('Lost connection ... reconnect');
				setTimeout(this._establish, 2000);
			}
		}
	}, {
		key: 'establish',
		value: function establish() {
			var _this = this;

			this.getTicket().then(function (data) {
				_this.ws = new WebSocket(_constants.WS_PATH + '?key=' + data.token);
				_this.ws.onopen = console.log;
				_this.ws.onmessage = function (e) {
					return _this._onmessage(e.data);
				};
				_this.ws.onclose = function (e) {
					return _this._onclose(e);
				};
			});
		}
	}]);

	return Ws;
}();

var WS = exports.WS = new Ws();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = exports.EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this.events = {};
	}

	_createClass(EventEmitter, [{
		key: 'emit',
		value: function emit(eventName, data) {
			var event = this.events[eventName];
			if (event) {
				event.forEach(function (fn) {
					fn.call(null, data);
				});
			}
		}
	}, {
		key: 'subscribe',
		value: function subscribe(eventName, fn) {
			var _this = this;

			if (!this.events[eventName]) {
				this.events[eventName] = [];
			}
			console.log('this.events: ', this.events);
			this.events[eventName].push(fn);
			return function () {
				_this.events[eventName] = _this.events[eventName].filter(function (eventFn) {
					return fn !== eventFn;
				});
			};
		}
	}]);

	return EventEmitter;
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _footer = __webpack_require__(4);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _registration = __webpack_require__(21);

var _registration2 = _interopRequireDefault(_registration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Registration = function (_Component) {
	_inherits(Registration, _Component);

	function Registration(props) {
		_classCallCheck(this, Registration);

		var _this = _possibleConstructorReturn(this, (Registration.__proto__ || Object.getPrototypeOf(Registration)).call(this, props));

		_this.host = document.createElement('div');
		_this.host.classList.add('registration-container');
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.host.addEventListener('submit', _this.handleSubmit);

		_this.header = new _header2.default();
		_this.registration = new _registration2.default();
		_this.footer = new _footer2.default();
		return _this;
	}

	_createClass(Registration, [{
		key: 'handleSubmit',
		value: function handleSubmit(ev) {
			ev.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			return [this.header.update(), this.registration.update(), this.footer.update()];
		}
	}]);

	return Registration;
}(_component2.default);

exports.default = Registration;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(1);

var _auth = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationForm = function (_Component) {
	_inherits(RegistrationForm, _Component);

	function RegistrationForm(props) {
		_classCallCheck(this, RegistrationForm);

		var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

		_this.state = {
			stores: null
		};

		_this.handleSubmit = _this.handleSubmit.bind(_this);

		_this.host = document.createElement('main');
		_this.host.classList.add('registration');
		_this.getStores();
		return _this;
	}

	_createClass(RegistrationForm, [{
		key: 'getStores',
		value: function getStores() {
			var _this2 = this;

			_auth.AUTH_SERVICE.storeInfo().then(function (result) {
				_this2.state.stores = result;
				_this2.updateState();
			});
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(ev) {
			ev.preventDefault();
			var data = {
				username: ev.target.username.value.trim(),
				password: ev.target.password.value.trim(),
				password_repeat: ev.target.password_repeat.value.trim(),
				email: ev.target.email.value.trim(),
				store_id: parseInt(ev.target.store.options[ev.target.store.selectedIndex].dataset.id),
				store_password: ev.target.store_password.value.trim()
			};
			_auth.AUTH_SERVICE.registerUser(data).then(function (result) {
				console.log(result);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var stores = this.state.stores;


			var registration = '\n        <div class="container">\n            <form class="registration__form">\n                <h2 class="registration__title">registration form</h2>\n                <label for="registration-username">Username</label>\n                <input class="registration__input" id="registration-username" type="text" name="username" placeholder="Unique. Min length 2 chars, max - 24">\n                <label for="registration-password">Password</label>\n                <input class="registration__input" id="registration-password" type="password" name="password" placeholder="Min length 8 chars">\n                <label for="registration-re-password">Re-enter password</label>\n                <input class="registration__input" id="registration-re-password" type="password" name="password_repeat" placeholder="Should match with password">\n                <label for="registration-email">Email</label>\n                <input class="registration__input" id="registration-email" type="email" name="email" placeholder="Should be valid email">\n                <label for="registration-store">Store</label>\n                <select hidden id="registration-store" name="store"></select>\n                <label for="registration-store-password">Store password</label>\n                <input class="registration__input" for="registration-store-password" type="password" name="store_password" placeholder="Should be valid store password. Min length 8 chars">\n                <button class="button registration__button" type="submit">sign up</button>\n            </form>\n        </div>\n        ';

			var fragment = (0, _utils.toHtml)(registration);

			var select = fragment.querySelector('select');
			select.classList.add('registration__select');

			if (stores) {
				select.hidden = false;
				stores.forEach(function (element) {
					var option = document.createElement('option');
					option.text = element.name;
					option.dataset.id = element.id;
					select.add(option);
				});
			}

			var form = fragment.querySelector('form');
			form.addEventListener('submit', this.handleSubmit);

			return fragment;
		}
	}]);

	return RegistrationForm;
}(_component2.default);

exports.default = RegistrationForm;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(4);

var _footer2 = _interopRequireDefault(_footer);

var _utils = __webpack_require__(1);

var _auth = __webpack_require__(6);

var _constants = __webpack_require__(3);

var _time = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
	_inherits(User, _Component);

	function User(props) {
		_classCallCheck(this, User);

		var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

		_this.state = {
			isValid: false,
			username: null,
			email: null,
			created: null,
			visited: null
		};
		_this.host = document.createElement('div');
		_this.host.classList.add('user-container');
		_this.header = new _header2.default();
		_this.footer = new _footer2.default();
		_this.getUser();
		return _this;
	}

	_createClass(User, [{
		key: 'getUser',
		value: function getUser() {
			var _this2 = this;

			_auth.AUTH_HTTP_SERVICE.get(_constants.USER_URL).then(function (res) {
				_this2.updateState({
					username: res.username,
					email: res.email,
					created: res.created_at,
					visited: res.last_login,
					isValid: true
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    username = _state.username,
			    email = _state.email,
			    created = _state.created,
			    visited = _state.visited,
			    isValid = _state.isValid;


			var containerString = '\n\t\t\t<main class=\'user\'>\n\t\t\t\t<div class=\'container user__container\'></div>\n\t\t\t</main>';

			var containerFragment = (0, _utils.toHtml)(containerString);
			var containerElement = containerFragment.querySelector('.container');

			if (isValid) {
				var userString = '\n\t\t\t\t<ul class=\'user__info\'>\n\t\t\t\t\t<li class=\'user__name\'>User: \n\t\t\t\t\t\t<span>' + username + '</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\'user__mail\'>E-mail: \n\t\t\t\t\t\t<span>' + email + '</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\'user__created\'>Created:\n\t\t\t\t\t\t<span>' + _time.TIME.convertDate(created) + '</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\'user__visited\'>Last seen:\n\t\t\t\t\t\t<span>' + _time.TIME.convertDate(visited) + '</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>';
				var userFragment = (0, _utils.toHtml)(userString);
				containerElement.append(userFragment);
			}

			return [this.header.update(), containerFragment, this.footer.update()];
		}
	}]);

	return User;
}(_component2.default);

exports.default = User;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(4);

var _footer2 = _interopRequireDefault(_footer);

var _pizza = __webpack_require__(9);

var _utils = __webpack_require__(1);

var _constants = __webpack_require__(3);

var _draw = __webpack_require__(24);

var _auth = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPizza = function (_Component) {
	_inherits(NewPizza, _Component);

	function NewPizza(props) {
		_classCallCheck(this, NewPizza);

		var _this = _possibleConstructorReturn(this, (NewPizza.__proto__ || Object.getPrototypeOf(NewPizza)).call(this, props));

		_this.condition = {
			size: '60',
			options: [],
			ingredients: [],
			tags: []
		};
		_this.host = document.createElement('div');
		_this.host.classList.add('create-container');
		_this.header = new _header2.default();
		_this.footer = new _footer2.default();
		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(NewPizza, [{
		key: 'handleSubmit',
		value: function handleSubmit(ev) {
			ev.preventDefault();
			var _condition = this.condition,
			    size = _condition.size,
			    ingredients = _condition.ingredients,
			    tags = _condition.tags;

			var canvas = document.querySelector('canvas');
			var name = document.querySelector('.create__name-value');
			var description = document.querySelector('.create__description');

			var fd = new FormData();
			fd.append('name', name.value);
			fd.append('description', description.value);
			fd.append('size', size);
			fd.append('ingredients', JSON.stringify(ingredients));
			fd.append('tags', JSON.stringify(tags));

			canvas.toBlob(function (blob) {
				fd.append('image', blob, 'new_image.png');
				return _auth.AUTH_HTTP_SERVICE.post(_constants.CREATE_PIZZA, fd).then(function (result) {
					return console.log(result);
				});
			});
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			Promise.all([_pizza.CREATE_DATA.getIngredients(), _pizza.CREATE_DATA.getTags()]).then(function () {
				var container = document.querySelector('.create__options');
				container.addEventListener('change', _this2.handleClick);

				var canvas = document.querySelector('.create__canvas');
				var form = document.createElement('form');
				var buttonsString = '\n                    <div class=\'create__button\'>\n                        <button class=\'button create__button-cancel\' type=\'button\'>cancel</button>\n                        <button class=\'button create__button-send\' type=\'submit\'>create</button>\n                    </div>\n                ';
				var buttons = (0, _utils.toHtml)(buttonsString);
				form.addEventListener('submit', _this2.handleSubmit);
				container.appendChild(form);
				form.append(_this2.renderForm());
				form.appendChild(_this2.renderIngredients(_pizza.CREATE_DATA.ingredients));
				form.appendChild(_this2.renderTags(_pizza.CREATE_DATA.tags));
				form.appendChild(buttons);
				_draw.DRAW.onInit({
					host: canvas,
					ingredients: _pizza.CREATE_DATA.ingredients
				});
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick(ev) {
			var _this3 = this;

			if (ev.target.dataset.flag === 'ingredient') {
				var ingredientsInputs = document.querySelectorAll('[data-flag]');
				var newOptions = [];
				var newIngredients = [];
				ingredientsInputs.forEach(function (ingredientInput) {
					if (ingredientInput.checked) {
						newOptions.push(ingredientInput.value);
						newIngredients.push(parseInt(ingredientInput.dataset.id));
					}
				});

				this.condition = Object.assign({}, this.condition, {
					options: newOptions
				});
				this.condition = Object.assign({}, this.condition, {
					ingredients: newIngredients
				});
				var _condition2 = this.condition,
				    size = _condition2.size,
				    options = _condition2.options;

				_draw.DRAW.handleClick(options, size);
			}

			if (ev.target.dataset.attr === 'size') {
				var sizeFields = document.querySelectorAll('[data-attr]');
				sizeFields.forEach(function (sizeField) {
					if (sizeField.checked) {
						var newSize = sizeField.value;
						_this3.condition = Object.assign({}, _this3.condition, {
							size: newSize
						});
					}
				});
				var _condition3 = this.condition,
				    _size = _condition3.size,
				    _options = _condition3.options;

				_draw.DRAW.handleClick(_options, _size);
			}
			return false;
		}
	}, {
		key: 'renderForm',
		value: function renderForm() {
			var formString = '\n        <label>\n            <span class=\'create__name\'>Pizza Name</span>\n            <input type=\'text\' name=\'name\' required min=\'3\' max=\'24\' class=\'create__name-value\'>\n        </label>\n        <label>\n            <span>Description</span>\n            <textarea class=\'create__description\'></textarea>\n        </label>\n        <label class=\'create__size\'>\n            <span class=\'create__size-title\'>Size</span>\n            <label class=\'create__size-option\'>\n                <span>30</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'30\' data-attr=\'size\'>\n                <i class="fas fa-circle create__size-option--small"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>45</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'45\' data-attr=\'size\'>\n                <i class="fas fa-circle create__size-option--medium"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>60</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'60\' data-attr=\'size\' checked>\n                <i class="fas fa-circle create__size-option--large"></i>\n            </label>    \n        </label>\n            <span class=\'create__ingredients-title\'>Ingredients<span>\n        ';

			var form = (0, _utils.toHtml)(formString);
			return form;
		}
	}, {
		key: 'renderIngredients',
		value: function renderIngredients(data) {
			var ingredientsString = '   \n        <div class=\'create__ingredients\'>' + data.reduce(function (html, data) {
				html += '\n        <label class=\'create__ingredients-item\'>\n\t\t\t<input class=\'create__ingredients-input\' type=\'checkbox\' value=\'' + data.name + '\' \n\t\t\tdata-flag=\'ingredient\' data-id=\'' + data.id + '\'>\n\t\t\t<img src=\'' + _constants.DOMAIN + '/' + data.image_url + '\' class=\'create__ingredients\' title=\'' + data.description + '\'\n\t\t\tdata-name=\'ingredient\'>\n            <span>' + data.name + '</span>\n        </label>';
				return html;
			}, '') + '\n        </div>\n        \t<span class=\'create__tag-title\'>Tag<span>\n        ';
			var fragment = (0, _utils.toHtml)(ingredientsString);
			return fragment;
		}
	}, {
		key: 'renderTags',
		value: function renderTags(data) {
			var tagsString = '\n        <div class=\'create__tags\'>' + data.reduce(function (html, data) {
				html += '\n        <label class=\'create__tags-item\' for=' + data.name + '>\n\t\t\t<input type=\'checkbox\' id=' + data.name + ' data-id=' + data.id + '>\n\t\t\t<i class="far fa-square create__tags-icon create__tags-icon--unchecked"></i>\n\t\t\t<i class="far fa-check-square create__tags-icon create__tags-icon--checked"></i>\n            <span>' + data.name + '</span>\n        </label>\n                ';
				return html;
			}, '') + '\n                </div>\n        ';
			var fragment = (0, _utils.toHtml)(tagsString);
			return fragment;
		}
	}, {
		key: 'render',
		value: function render() {
			var containerString = '\n            <main class=\'create\' id=\'create\'>\n                <div class=\'container create__container\'>\n                    <h1 class=\'create__title\'>Create Pizza</h1>\n                    <section class=\'create__canvas\'></section>\n                    <section class=\'create__options\'></section>\n                </div>\n            </main>\n        ';
			var containerFragment = (0, _utils.toHtml)(containerString);

			return [this.header.update(), containerFragment, this.footer.update()];
		}
	}]);

	return NewPizza;
}(_component2.default);

exports.default = NewPizza;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DRAW = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(3);

var _sprite = __webpack_require__(25);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Draw = function () {
	function Draw() {
		_classCallCheck(this, Draw);

		this.crust_pizza = 'https://pizza-tele.ga/static/images/pizza.png';
		this._loadImage = this._loadImage.bind(this);
	}

	_createClass(Draw, [{
		key: 'onInit',
		value: function onInit(data) {
			var _this = this;

			this.host = data.host;
			this.size = '60';
			this.canvas = document.createElement('canvas');
			this.ctx = this.canvas.getContext('2d');
			this.canvasWidth = 320;
			this.canvasHeight = 320;
			this.ingredients = data.ingredients;
			this.images = {};
			this.sprites = {};
			this.lastOptions = [];
			this.buffer = [];
			this.spritesPool = [];
			this.canvas.width = this.canvasWidth;
			this.canvas.height = this.canvasHeight;
			this._loadResources().then(function (resources) {
				resources.forEach(function (resource) {
					return _this.images[resource.name] = resource.image;
				});
				_this.host.append(_this.canvas);
				_this._startSet();
			});
		}
	}, {
		key: '_startSet',
		value: function _startSet() {
			this.spritesPool = [];
			// let pizza = new Sprite(this.images['pizza'], 160, 160, 300, 300);
			var pizza = new _sprite.Sprite(this.images['pizza'], 160, 160, 300 * ('' + parseInt(this.size)) / 60, 300 * ('' + parseInt(this.size)) / 60);
			this.sprites['pizza'] = pizza;
			this.spritesPool.push(pizza);
			this._draw();
		}
	}, {
		key: 'handleClick',
		value: function handleClick(options, size) {
			var _this2 = this;

			this.size = size;
			this._startSet();
			if (options.length == this.buffer.length) {
				this.buffer.forEach(function (elem) {
					var filteredElem = elem.sprites.filter(function (elem) {
						if (_this2.size == 30) {
							return elem.x < 180 && elem.x > 110 && elem.y > 110 && elem.y < 180;
						}
						if (_this2.size == 45) {
							return elem.x < 200 && elem.x > 90 && elem.y > 90 && elem.y < 200;
						}
						if (_this2.size == 60) {
							return elem.x < 255 && elem.x > 40 && elem.y > 40 && elem.y < 255;
						}
					});
					_this2.spritesPool = _this2.spritesPool.concat(filteredElem);
				});
				this._draw();
			}

			if (options.length < this.buffer.length) {
				var preBuffer = [];
				this.lastOptions = [];
				options.forEach(function (el) {
					_this2.lastOptions.push(el);
					_this2.buffer.forEach(function (elem) {
						if (elem.id === el) {
							preBuffer.push({
								id: elem.id,
								sprites: elem.sprites
							});
							var filteredElem = elem.sprites.filter(function (elem) {
								if (_this2.size == 30) {
									return elem.x < 180 && elem.x > 110 && elem.y > 110 && elem.y < 180;
								}
								if (_this2.size == 45) {
									return elem.x < 200 && elem.x > 90 && elem.y > 90 && elem.y < 200;
								}
								if (_this2.size == 60) {
									return elem.x < 255 && elem.x > 40 && elem.y > 40 && elem.y < 255;
								}
							});
							_this2.spritesPool = _this2.spritesPool.concat(filteredElem);

							// this.spritesPool = this.spritesPool.concat(elem.sprites);
						}
					});
				});

				this.buffer = [];
				this.buffer = this.buffer.concat(preBuffer);
				this._draw();
			}
			if (options.length === 0) {
				this.buffer = [];
				this._startSet();
			} else {
				options.forEach(function (el) {
					if (_this2.lastOptions.includes(el)) {
						_this2._draw();
					} else {
						_this2.lastOptions.push(el);
						_this2._generateSprite(el, 10);
						_this2.buffer.forEach(function (el) {
							var filteredElem = el.sprites.filter(function (elem) {
								if (_this2.size == 30) {
									return elem.x < 180 && elem.x > 110 && elem.y > 110 && elem.y < 180;
								}
								if (_this2.size == 45) {
									return elem.x < 200 && elem.x > 90 && elem.y > 90 && elem.y < 200;
								}
								if (_this2.size == 60) {
									return elem.x < 255 && elem.x > 40 && elem.y > 40 && elem.y < 255;
								}
							});
							_this2.spritesPool = _this2.spritesPool.concat(filteredElem);
							// this.spritesPool = this.spritesPool.concat(elem.sprites);
						});
						_this2._draw();
					}
				});
			}
		}
	}, {
		key: '_generateSprite',
		value: function _generateSprite(name, count) {
			var sprites = [];
			for (var i = 1; i <= count; i++) {
				var ingredient = new _sprite.Sprite(this.images['' + name], (0, _utils.RANDOM)(70, 250), (0, _utils.RANDOM)(70, 250));
				sprites.push(ingredient);
			}
			this.buffer.push({
				id: name,
				sprites: sprites
			});
		}
	}, {
		key: '_draw',
		value: function _draw() {
			var _this3 = this;

			this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
			this.spritesPool.forEach(function (sprite) {
				return sprite.draw(_this3.ctx);
			});
		}
	}, {
		key: '_loadResources',
		value: function _loadResources() {
			var _this4 = this;

			var promises = [];
			promises.push(this._loadImage('pizza', this.crust_pizza));
			promises = promises.concat(this.ingredients.map(function (ingredient) {
				var ingr_url = _constants.DOMAIN + '/' + ingredient.image_url;
				return _this4._loadImage(ingredient.name, ingr_url);
			}));
			return Promise.all(promises);
		}
	}, {
		key: '_loadImage',
		value: function _loadImage(name, url) {
			return new Promise(function (resolve, reject) {
				var image = new Image();
				image.crossOrigin = 'anonymous';
				image.src = url;
				image.width = 20;
				image.height = 20;
				image.onload = function () {
					return resolve({ name: name, image: image });
				};
				image.onerror = function (e) {
					return reject(e);
				};
			});
		}
	}]);

	return Draw;
}();

var DRAW = exports.DRAW = new Draw();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = exports.Sprite = function () {
	function Sprite(image, cx, cy, width, height) {
		_classCallCheck(this, Sprite);

		this.x = 0;
		this.y = 0;
		this.image = image;
		this.width = width || this.image.width;
		this.height = height || this.image.height;
		this.cx = cx || 0;
		this.cy = cy || 0;
	}

	_createClass(Sprite, [{
		key: "draw",
		value: function draw(ctx) {
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		}
	}, {
		key: "cx",
		get: function get() {
			return Math.round(this.x + this.width * 0.5);
		},
		set: function set(value) {
			this.x = Math.round(value - this.width * 0.5);
		}
	}, {
		key: "cy",
		get: function get() {
			return Math.round(this.y + this.height * 0.5);
		},
		set: function set(value) {
			this.y = Math.round(value - this.height * 0.5);
		}
	}]);

	return Sprite;
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.authGuard = undefined;

var _auth = __webpack_require__(2);

var authGuard = exports.authGuard = function authGuard(param) {
	return _auth.AUTH_SERVICE.isAuthorized() ? Promise.resolve({ success: true, route: param }) : Promise.resolve({ success: false, redirect: '/login' });
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDgxMzM1N2UzNzE5M2EzNWYyMjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy90aW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9waXp6YS5kYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2V2ZW50LmVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaG9zdCIsIm9uSW5pdCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJjb25zb2xlIiwibG9nIiwib25CZWZvcmVVbm1vdW50IiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJpbm5lckhUTUwiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0b0h0bWwiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0cmluZyIsImNvbnRlbnQiLCJSQU5ET00iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJBdXRoU2VydmljZSIsIl90b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfY2xhaW1zIiwiSlNPTiIsInBhcnNlIiwibG9naW5VcmwiLCJzdG9yZVVybCIsImNyZWF0ZVVybCIsInRva2VuIiwidG9rZW5Jc05vdEV4cGlyZWQiLCJjbGVhclN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiY2xhaW1zIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm9rIiwiYW5zd2VyIiwicGFyc2VKd3RDbGFpbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YXR1cyIsInJlamVjdCIsImp3dFRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsInNldEl0ZW0iLCJBVVRIX1NFUlZJQ0UiLCJET01BSU4iLCJJTkdSRURJRU5UU19VUkwiLCJUQUdfVVJMIiwiVVNFUl9VUkwiLCJDUkVBVEVfUElaWkEiLCJQSVpaQV9MSVNUIiwiV1NfVElDS0VUIiwiV1NfUEFUSCIsIkZvb3RlciIsImNsYXNzTGlzdCIsImFkZCIsIkhlYWRlciIsImlzQXV0aG9yaXplZCIsImxvZ2luQnV0dG9uIiwibG9nb3V0QnV0dG9uIiwidXNlckJ1dHRvbiIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsImhlYWRlciIsImZyYWdtZW50IiwiQXV0aEh0dHBTZXJ2aWNlIiwidXJsIiwiRXJyb3IiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiQVVUSF9IVFRQX1NFUlZJQ0UiLCJBUFBfUk9VVEVSIiwicXVlcnlTZWxlY3RvciIsInJvdXRlcyIsIlRpbWVyIiwidGltZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiY29udmVydE1vdW50IiwicmVzdWx0IiwiVElNRSIsIlBpenphRGF0YVNlcnZpY2UiLCJpbmdyZWRpZW50cyIsInRhZ3MiLCJwaXp6YXMiLCJhZGRQaXp6YSIsImJpbmQiLCJyZW1vdmVQaXp6YSIsInBpenphIiwiZmluZEluZGV4IiwidXVpZCIsInAiLCJ1bnNoaWZ0IiwidXVpZHMiLCJmb3JFYWNoIiwiaW5kZXgiLCJzcGxpY2UiLCJyZXNldCIsImxpbWl0Iiwib2Zmc2V0IiwiZ2V0IiwicmVzdWx0cyIsImNvbmNhdCIsIkNSRUFURV9EQVRBIiwiUm91dGVyIiwiYWN0aXZlUm91dGUiLCJhY3RpdmVDb21wb25lbnQiLCJoYW5kbGVVcmxDaGFuZ2UiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsIm9uRW50ZXIiLCJoYW5kbGVPbkVudGVyIiwibG9jYXRpb24iLCJoYXNoIiwibG9nb3V0Iiwib25FbnRlckd1YXJkIiwiZ3VhcmQiLCJzdWNjZXNzIiwicm91dGUiLCJyZWRpcmVjdCIsImNvbXBvbmVudEluc3RhbmNlIiwidW5tb3VudCIsInVwZGF0ZVN0YXRlIiwidXBkYXRlIiwic2xpY2UiLCJMb2dpbiIsImxvZ2luRm9ybSIsImZvb3RlciIsIkxvZ2luRm9ybSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImxvZ2luU3RyaW5nIiwibG9naW5GcmFnbWVudCIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibGlzdCIsImVzdGFibGlzaCIsInVuc3Vic2NyaWJlQWRkIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJ1bnN1YnNjcmliZVJlbW92ZSIsImdldFVuYWNjZXB0ZWRQaXp6YXMiLCJ1cGRhdGVMaXN0IiwicGFyYW0iLCJ1bnN1YnNjcmliZSIsImNvbnRhaW5lclN0cmluZyIsImNvbnRhaW5lckZyYWdtZW50IiwiY29udGFpbmVyIiwiUGl6emFMaXN0IiwiaW1nX3VybCIsImNvbnZlcnREYXRlIiwidGltZV9wcmVwYXJlZCIsInByaWNlIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJXcyIsIndzIiwiX2VtaXR0ZXIiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImVtaXQiLCJldmVudF9uYW1lIiwiZSIsImNvZGUiLCJzZXRUaW1lb3V0IiwiX2VzdGFibGlzaCIsImdldFRpY2tldCIsIldlYlNvY2tldCIsIm9ub3BlbiIsIm9ubWVzc2FnZSIsIl9vbm1lc3NhZ2UiLCJvbmNsb3NlIiwiX29uY2xvc2UiLCJXUyIsIkV2ZW50RW1pdHRlciIsImV2ZW50cyIsImZuIiwiY2FsbCIsInB1c2giLCJmaWx0ZXIiLCJldmVudEZuIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uRm9ybSIsInN0b3JlcyIsImdldFN0b3JlcyIsInN0b3JlSW5mbyIsInBhc3N3b3JkX3JlcGVhdCIsImVtYWlsIiwic3RvcmVfaWQiLCJwYXJzZUludCIsInN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJpZCIsInN0b3JlX3Bhc3N3b3JkIiwicmVnaXN0ZXJVc2VyIiwic2VsZWN0IiwiaGlkZGVuIiwib3B0aW9uIiwiZWxlbWVudCIsImZvcm0iLCJVc2VyIiwiaXNWYWxpZCIsImNyZWF0ZWQiLCJ2aXNpdGVkIiwiZ2V0VXNlciIsImNyZWF0ZWRfYXQiLCJsYXN0X2xvZ2luIiwiY29udGFpbmVyRWxlbWVudCIsInVzZXJTdHJpbmciLCJ1c2VyRnJhZ21lbnQiLCJOZXdQaXp6YSIsImNvbmRpdGlvbiIsInNpemUiLCJoYW5kbGVDbGljayIsImNhbnZhcyIsImRlc2NyaXB0aW9uIiwiZmQiLCJGb3JtRGF0YSIsInRvQmxvYiIsImJsb2IiLCJwb3N0IiwiYWxsIiwiZ2V0SW5ncmVkaWVudHMiLCJnZXRUYWdzIiwiYnV0dG9uc1N0cmluZyIsImJ1dHRvbnMiLCJyZW5kZXJGb3JtIiwicmVuZGVySW5ncmVkaWVudHMiLCJyZW5kZXJUYWdzIiwiZmxhZyIsImluZ3JlZGllbnRzSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5ld09wdGlvbnMiLCJuZXdJbmdyZWRpZW50cyIsImluZ3JlZGllbnRJbnB1dCIsImNoZWNrZWQiLCJhdHRyIiwic2l6ZUZpZWxkcyIsInNpemVGaWVsZCIsIm5ld1NpemUiLCJmb3JtU3RyaW5nIiwiaW5ncmVkaWVudHNTdHJpbmciLCJyZWR1Y2UiLCJodG1sIiwiaW1hZ2VfdXJsIiwidGFnc1N0cmluZyIsIkRyYXciLCJjcnVzdF9waXp6YSIsIl9sb2FkSW1hZ2UiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbWFnZXMiLCJzcHJpdGVzIiwibGFzdE9wdGlvbnMiLCJidWZmZXIiLCJzcHJpdGVzUG9vbCIsIndpZHRoIiwiaGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsImltYWdlIiwiX3N0YXJ0U2V0IiwiX2RyYXciLCJmaWx0ZXJlZEVsZW0iLCJlbGVtIiwieCIsInkiLCJwcmVCdWZmZXIiLCJlbCIsImluY2x1ZGVzIiwiX2dlbmVyYXRlU3ByaXRlIiwiY291bnQiLCJpIiwiaW5ncmVkaWVudCIsImNsZWFyUmVjdCIsInNwcml0ZSIsImRyYXciLCJwcm9taXNlcyIsIm1hcCIsImluZ3JfdXJsIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsImRyYXdJbWFnZSIsInJvdW5kIiwiYXV0aEd1YXJkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNB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OztzQkFOUTtBQUNSLFVBQU85UixLQUFLaVUsS0FBTCxDQUFXLEtBQUt4QixDQUFMLEdBQVMsS0FBS1YsTUFBTCxHQUFjLEdBQWxDLENBQVA7QUFDQSxHO29CQU1NMUksSyxFQUFPO0FBQ2IsUUFBS29KLENBQUwsR0FBU3pTLEtBQUtpVSxLQUFMLENBQVc1SyxRQUFRLEtBQUswSSxNQUFMLEdBQWMsR0FBakMsQ0FBVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkY7O0FBRU8sSUFBTW1DLGdDQUFZLFNBQVpBLFNBQVksUUFBUztBQUNqQyxRQUFPLG1CQUFhdFEsWUFBYixLQUNKekIsUUFBUUMsT0FBUixDQUFnQixFQUFFOEYsU0FBUyxJQUFYLEVBQWlCQyxPQUFPcUMsS0FBeEIsRUFBaEIsQ0FESSxHQUVKckksUUFBUUMsT0FBUixDQUFnQixFQUFFOEYsU0FBUyxLQUFYLEVBQWtCRSxVQUFVLFFBQTVCLEVBQWhCLENBRkg7QUFHQSxDQUpNLEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDgxMzM1N2UzNzE5M2EzNWYyMjgiLCJjbGFzcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHMgfHwge307XHJcblx0XHR0aGlzLnN0YXRlID0ge307XHJcblx0XHR0aGlzLmhvc3QgPSBudWxsO1xyXG5cdFx0dGhpcy5vbkluaXQoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7fVxyXG5cclxuXHR1cGRhdGUobmV4dFByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0dW5tb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd1bm1vdW50aW9uZycpO1xyXG5cdFx0dGhpcy5vbkJlZm9yZVVubW91bnQoKTtcclxuXHR9XHJcblxyXG5cdG9uQmVmb3JlVW5tb3VudCgpIHt9XHJcblxyXG5cdG9uQmVmb3JlVXBkYXRlKG5leHRQcm9wcykge31cclxuXHJcblx0Z2V0IG5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcblx0X3JlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy5yZW5kZXIoKTtcclxuXHJcblx0XHR0aGlzLmhvc3QuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHR0aGlzLmhvc3QuaW5uZXJIVE1MID0gY2hpbGRyZW47XHJcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQoLi4uY2hpbGRyZW4pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZChjaGlsZHJlbik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaG9zdDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJleHBvcnQgY29uc3QgdG9IdG1sID0gc3RyaW5nID0+IHtcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyaW5nO1xyXG5cdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBTkRPTSA9IChtaW4sIG1heCkgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvdXRpbHMuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHRcdHRoaXMuX2NsYWltcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NsYWltcycpKTtcclxuXHRcdHRoaXMubG9naW5VcmwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL2xvZ2luYDtcclxuXHRcdHRoaXMuc3RvcmVVcmwgPSBgJHtET01BSU59L2FwaS92MS9zdG9yZS9saXN0YDtcclxuXHRcdHRoaXMuY3JlYXRlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9jcmVhdGVgO1xyXG5cdH1cclxuXHJcblx0Z2V0IHRva2VuKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Rva2VuO1xyXG5cdH1cclxuXHJcblx0c2V0IHRva2VuKHRva2VuKSB7XHJcblx0XHR0aGlzLl90b2tlbiA9IHRva2VuO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNsYWltcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jbGFpbXM7XHJcblx0fVxyXG5cclxuXHRzZXQgY2xhaW1zKGNsYWltcykge1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gY2xhaW1zO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsYWltcycsIEpTT04uc3RyaW5naWZ5KGNsYWltcykpO1xyXG5cdH1cclxuXHJcblx0aXNBdXRob3JpemVkKCkge1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuKSByZXR1cm4gZmFsc2U7XHJcblx0XHRpZiAoIXRoaXMudG9rZW5Jc05vdEV4cGlyZWQoKSkge1xyXG5cdFx0XHR0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RvcmFnZSgpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IG51bGw7XHJcblx0XHR0aGlzLl90b2tlbiA9IG51bGw7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjbGFpbXMnKTtcclxuXHR9XHJcblxyXG5cdHRva2VuSXNOb3RFeHBpcmVkKCkge1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuKSByZXR1cm4gZmFsc2U7XHJcblx0XHRyZXR1cm4gdGhpcy5jbGFpbXMuZXhwICogMTAwMCA+IERhdGUubm93KCk7XHJcblx0fVxyXG5cclxuXHRzdG9yZUluZm8oKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5zdG9yZVVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRsb2dpblVzZXIoZGF0YSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycygpLmFwcGVuZCgnQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKSxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMubG9naW5VcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcy5vaykge1xyXG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudG9rZW4gPSBhbnN3ZXIudG9rZW47XHJcblx0XHRcdFx0XHR0aGlzLmNsYWltcyA9IHRoaXMucGFyc2VKd3RDbGFpbXMoYW5zd2VyLnRva2VuKTtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBhbnN3ZXIsIHN0YXR1czogcmVzLnN0YXR1cyB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiBQcm9taXNlLnJlamVjdCh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZWdpc3RlclVzZXIoZGF0YSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLmNyZWF0ZVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRwYXJzZUp3dENsYWltcyhqd3RUb2tlbikge1xyXG5cdFx0aWYgKGp3dFRva2VuKSB7XHJcblx0XHRcdGxldCBiYXNlNjRVcmwgPSBqd3RUb2tlbi5zcGxpdCgnLicpWzFdO1xyXG5cdFx0XHRsZXQgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpO1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX1NFUlZJQ0UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJleHBvcnQgY29uc3QgRE9NQUlOID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYSc7XHJcbmV4cG9ydCBjb25zdCBJTkdSRURJRU5UU19VUkwgPSBgJHtET01BSU59L2FwaS92MS9pbmdyZWRpZW50L2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVEFHX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL3RhZy9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFVTRVJfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9teV9pbmZvYDtcclxuZXhwb3J0IGNvbnN0IENSRUFURV9QSVpaQSA9IGAke0RPTUFJTn0vYXBpL3YxL3BpenphL2NyZWF0ZWA7XHJcbmV4cG9ydCBjb25zdCBQSVpaQV9MSVNUID0gYCR7RE9NQUlOfS9hcGkvdjEvcGl6emEvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBXU19USUNLRVQgPSBgJHtET01BSU59L2FwaS92MS93cy90aWNrZXRgO1xyXG5leHBvcnQgY29uc3QgV1NfUEFUSCA9ICd3c3M6Ly9waXp6YS10ZWxlLmdhL3dzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NvbnN0YW50cy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhZGRyZXNzPktvdHRhbnMsIEtvdHRhbnMgU3J0LiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzU3Nzc4ODg3XCI+dGVsLiA1NzctNzg4LTg3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPlBpenphIE1hbmFnZXIgJmNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE4LTAxLTAxXCI+MjAxODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvL1RPRE86IG5lZWQgZGVsZXRlIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJsb2dpbl9fYnV0dG9uLWxpbmtcIj5zaWduIGluPC9hPlxyXG5cdFx0Y29uc3QgaXNBdXRob3JpemVkID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluXCI+c2lnbiBpbjwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgbG9nb3V0QnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dvdXRcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1vdXRcIj5zaWduIG91dDwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgdXNlckJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvdXNlclwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluZm9cIj51c2VyIGluZm88L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvcmVnaXN0cmF0aW9uXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tdXBcIj5zaWduIHVwPC9hPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY3VycmVudC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNjbG9ja1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMi0wMyAxMjowMTo0OFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCIjL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2dvXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJhdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyBsb2dvdXRCdXR0b24gOiBsb2dpbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAke2lzQXV0aG9yaXplZCA/IHVzZXJCdXR0b24gOiByZWdpc3RyYXRpb25CdXR0b259IFxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChoZWFkZXIpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmNsYXNzIEF1dGhIdHRwU2VydmljZSB7XHJcblx0Z2V0KHVybCkge1xyXG5cdFx0aWYgKCFBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm9uLWF1dGhvcml6ZWQgcmVxdWVzdCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZldGNoKHVybCwge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cG9zdCh1cmwsIGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGF0Y2goKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9IVFRQX1NFUlZJQ0UgPSBuZXcgQXV0aEh0dHBTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmh0dHAuanMiLCJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vZnJhbWV3b3JrL3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVIgPSBuZXcgUm91dGVyKHsgaG9zdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSwgcm91dGVzIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW5kZXguanMiLCJjbGFzcyBUaW1lciB7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjb252ZXJ0RGF0ZSh0aW1lKSB7XHJcblx0XHRjb25zdCBkYXRhID0gbmV3IERhdGUodGltZSk7XHJcblx0XHRjb25zdCBkYXkgPSBkYXRhLmdldERhdGUoKTtcclxuXHRcdGNvbnN0IG1vbnRoID0gZGF0YS5nZXRNb250aCgpO1xyXG5cdFx0Y29uc3QgeWVhciA9IGRhdGEuZ2V0RnVsbFllYXIoKTtcclxuXHRcdHJldHVybiBgJHtkYXl9ICR7dGhpcy5jb252ZXJ0TW91bnQobW9udGgpfSAke3llYXJ9YDtcclxuXHR9XHJcblxyXG5cdGNvbnZlcnRNb3VudChtb250aCkge1xyXG5cdFx0bGV0IHJlc3VsdDtcclxuXHRcdHN3aXRjaCAobW9udGgpIHtcclxuXHRcdGNhc2UgMDpcclxuXHRcdFx0cmVzdWx0ID0gJ0phbnVhcnknO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDE6XHJcblx0XHRcdHJlc3VsdCA9ICdGZWJydWFyeSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0cmVzdWx0ID0gJ01hcmNoJztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSAzOlxyXG5cdFx0XHRyZXN1bHQgPSAnQXByaWwnO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDQ6XHJcblx0XHRcdHJlc3VsdCA9ICdNYXknO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDU6XHJcblx0XHRcdHJlc3VsdCA9ICdKdW5lJztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSA2OlxyXG5cdFx0XHRyZXN1bHQgPSAnSnVseSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgNzpcclxuXHRcdFx0cmVzdWx0ID0gJ0F1Z3VzdCc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgODpcclxuXHRcdFx0cmVzdWx0ID0gJ1NlcHRlbWJlcic7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgOTpcclxuXHRcdFx0cmVzdWx0ID0gJ09jdG9iZXInO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDEwOlxyXG5cdFx0XHRyZXN1bHQgPSAnTm92ZW1iZXInO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDExOlxyXG5cdFx0XHRyZXN1bHQgPSAnRGVjZW1iZXInO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVElNRSA9IG5ldyBUaW1lcigpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvdGltZS5qcyIsImltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoLmh0dHAnO1xyXG5pbXBvcnQgeyBJTkdSRURJRU5UU19VUkwsIFRBR19VUkwsIFBJWlpBX0xJU1QgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YURhdGFTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW5ncmVkaWVudHMgPSBbXTtcclxuXHRcdHRoaXMudGFncyA9IFtdO1xyXG5cdFx0dGhpcy5waXp6YXMgPSBbXTtcclxuXHRcdHRoaXMuYWRkUGl6emEgPSB0aGlzLmFkZFBpenphLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnJlbW92ZVBpenphID0gdGhpcy5yZW1vdmVQaXp6YS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0YWRkUGl6emEocGl6emEpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5waXp6YXMuZmluZEluZGV4KHAgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBwaXp6YS51dWlkID09PSBwLnV1aWQ7XHJcblx0XHRcdH0pICE9IC0xXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5waXp6YXMudW5zaGlmdChwaXp6YSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVBpenphKHV1aWRzKSB7XHJcblx0XHR1dWlkcy5mb3JFYWNoKHV1aWQgPT4ge1xyXG5cdFx0XHRjb25zdCBpbmRleCA9IHRoaXMucGl6emFzLmZpbmRJbmRleChwID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdXVpZCA9PT0gcC51dWlkO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChpbmRleCAhPSAtMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5waXp6YXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0VW5hY2NlcHRlZFBpenphcyhyZXNldCwgbGltaXQsIG9mZnNldCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChgJHtQSVpaQV9MSVNUfT9saW1pdD0ke2xpbWl0IHx8IDEwMH0mb2Zmc2V0PSR7b2Zmc2V0IHx8IDB9YCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzZXQpIHtcclxuXHRcdFx0XHR0aGlzLnBpenphcyA9IHJlcy5yZXN1bHRzO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucGl6emFzID0gdGhpcy5waXp6YXMuY29uY2F0KHJlcy5yZXN1bHRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRJbmdyZWRpZW50cygpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoSU5HUkVESUVOVFNfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWdzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChUQUdfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnRhZ3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfREFUQSA9IG5ldyBQaXp6YURhdGFTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9waXp6YS5kYXRhLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHRjb25zdCB7IHJvdXRlcywgaG9zdCB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHRoaXMuaG9zdCA9IGhvc3Q7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0cm91dGVzLFxyXG5cdFx0XHRhY3RpdmVSb3V0ZTogbnVsbCxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVVybENoYW5nZSA9IHRoaXMuaGFuZGxlVXJsQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmFwcGx5Um91dGUgPSB0aGlzLmFwcGx5Um91dGUuYmluZCh0aGlzKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHRoaXMuaGFuZGxlVXJsQ2hhbmdlKHRoaXMucGF0aCkpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlVXJsQ2hhbmdlKHRoaXMucGF0aCk7XHJcblx0fVxyXG5cclxuXHRnZXQgcGF0aCgpIHtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVVybENoYW5nZSh1cmwpIHtcclxuXHRcdGNvbnN0IHsgcm91dGVzLCBhY3RpdmVSb3V0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IG5leHRSb3V0ZSA9IHJvdXRlcy5maW5kKCh7IGhyZWYgfSkgPT4gaHJlZiA9PT0gdXJsKTtcclxuXHRcdGlmIChuZXh0Um91dGUgJiYgbmV4dFJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xyXG5cdFx0XHRpZiAobmV4dFJvdXRlLnJlZGlyZWN0VG8pIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVSZWRpcmVjdChuZXh0Um91dGUucmVkaXJlY3RUbyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0Um91dGUub25FbnRlcikge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hcHBseVJvdXRlKG5leHRSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVSZWRpcmVjdCh1cmwpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlT25FbnRlcihuZXh0Um91dGUpIHtcclxuXHRcdGNvbnN0IHsgb25FbnRlciB9ID0gbmV4dFJvdXRlO1xyXG5cclxuXHRcdGlmIChvbkVudGVyLmxvZ291dCkge1xyXG5cdFx0XHRBVVRIX1NFUlZJQ0UuY2xlYXJTdG9yYWdlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgb25FbnRlckd1YXJkID0gb25FbnRlci5ndWFyZDtcclxuXHRcdG9uRW50ZXJHdWFyZChuZXh0Um91dGUpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5zdWNjZXNzID8gdGhpcy5hcHBseVJvdXRlKHJlcy5yb3V0ZSkgOiB0aGlzLmhhbmRsZVJlZGlyZWN0KHJlcy5yZWRpcmVjdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFwcGx5Um91dGUocm91dGUpIHtcclxuXHRcdGNvbnN0IHsgQ29tcG9uZW50IH0gPSByb3V0ZTtcclxuXHRcdGNvbnN0IHsgYWN0aXZlQ29tcG9uZW50IH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5cdFx0YWN0aXZlQ29tcG9uZW50ID8gYWN0aXZlQ29tcG9uZW50LnVubW91bnQoKSA6IG51bGw7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTdGF0ZSh7XHJcblx0XHRcdGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gYWN0aXZlQ29tcG9uZW50LnVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsImltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXInO1xyXG5pbXBvcnQgTmV3UGl6emEgZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL3V0aWxzL2F1dGgnO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJycsXHJcblx0XHRyZWRpcmVjdFRvOiAnLycsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnLycsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBMb2dpbixcclxuXHRcdGhyZWY6ICcvbG9naW4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBSZWdpc3RyYXRpb24sXHJcblx0XHRocmVmOiAnL3JlZ2lzdHJhdGlvbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IFVzZXIsXHJcblx0XHRocmVmOiAnL3VzZXInLFxyXG5cdFx0b25FbnRlcjoge1xyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGhyZWY6ICcvbG9nb3V0JyxcclxuXHRcdG9uRW50ZXI6IHtcclxuXHRcdFx0bG9nb3V0OiB0cnVlLFxyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogTmV3UGl6emEsXHJcblx0XHRocmVmOiAnL2NyZWF0ZScsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vbG9naW4uZm9ybSc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxvZ2luRm9ybSA9IG5ldyBMb2dpbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCB0aGlzLmxvZ2luRm9ybS51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL25vdGlmaWNhdGlvbi9lcnJvci5tZXNzYWdlJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCB7IEFQUF9ST1VURVIgfSBmcm9tICcuLi8uLi9pbmRleCc7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VybmFtZTogbnVsbCxcclxuXHRcdFx0cGFzc3dvcmQ6IG51bGwsXHJcblx0XHRcdG1lc3NhZ2U6IG51bGwsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luJyk7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLmxvZ2luVXNlcihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdFx0XHRcdEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RhdHVzID0+IHtcclxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gc3RhdHVzLmFuc3dlci5lcnJvcjtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHRleHQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBtZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luU3RyaW5nID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgdmFsdWU9XHJcblx0XHRcdFx0JHt1c2VybmFtZSA/IHVzZXJuYW1lIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiB2YWx1ZT1cclxuXHRcdFx0XHQke3Bhc3N3b3JkID8gcGFzc3dvcmQgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBsb2dpbkZyYWdtZW50ID0gdG9IdG1sKGxvZ2luU3RyaW5nKTtcclxuXHJcblx0XHRpZiAobWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UudXBkYXRlKHsgdGV4dDogbWVzc2FnZSB9KTtcclxuXHRcdFx0bG9naW5GcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2J1dHRvbicpLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bG9naW5GcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRyZXR1cm4gbG9naW5GcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fY29udGFpbmVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHRleHQgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX190ZXh0Jyk7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cdFx0cmV0dXJuIGVycm9yO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBQaXp6YUxpc3QgZnJvbSAnLi4vbGlzdC9saXN0JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL3BpenphLmRhdGEnO1xyXG5pbXBvcnQgeyBXUyB9IGZyb20gJy4uLy4uL3V0aWxzL3dzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxpc3QgPSBuZXcgUGl6emFMaXN0KCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdCgpIHtcclxuXHRcdFdTLmVzdGFibGlzaCgpO1xyXG5cclxuXHRcdHRoaXMudW5zdWJzY3JpYmVBZGQgPSB0aGlzLnN1YnNjcmliZSh7XHJcblx0XHRcdGV2ZW50OiAnQ1JFQVRFX1BJWlpBJyxcclxuXHRcdFx0bWV0aG9kOiBDUkVBVEVfREFUQS5hZGRQaXp6YSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMudW5zdWJzY3JpYmVSZW1vdmUgPSB0aGlzLnN1YnNjcmliZSh7XHJcblx0XHRcdGV2ZW50OiAnQUNDRVBUX1BJWlpBJyxcclxuXHRcdFx0bWV0aG9kOiBDUkVBVEVfREFUQS5yZW1vdmVQaXp6YSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdENSRUFURV9EQVRBLmdldFVuYWNjZXB0ZWRQaXp6YXModHJ1ZSwgMTIsIDApLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlTGlzdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdWJzY3JpYmUocGFyYW0pIHtcclxuXHRcdGxldCB7IGV2ZW50LCBtZXRob2QgfSA9IHBhcmFtO1xyXG5cclxuXHRcdGNvbnN0IHVuc3Vic2NyaWJlID0gV1Muc3Vic2NyaWJlKGV2ZW50LCBkYXRhID0+IHtcclxuXHRcdFx0bWV0aG9kKGRhdGEpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHVuc3Vic2NyaWJlO1xyXG5cdH1cclxuXHJcblx0b25CZWZvcmVVbm1vdW50KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZUFkZCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZVJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGlzdCgpIHtcclxuXHRcdHRoaXMubGlzdC51cGRhdGUoe1xyXG5cdFx0XHRwaXp6YXM6IENSRUFURV9EQVRBLnBpenphcyxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG5cdFx0PG1haW4gY2xhc3M9XCJtYWluIHBpenphc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBpenphc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIy9jcmVhdGVcIiBjbGFzcz1cImJ1dHRvbiBhZGQtbGlua1wiPmFkZCBwaXp6YTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLnBpenphc19fY29udGFpbmVyJyk7XHJcblxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmxpc3QudXBkYXRlKCkpO1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGNvbnRhaW5lckZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC9hcHAuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRJTUUgfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcclxuXHJcbmNsYXNzIFBpenphTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBpenphKHBpenphcykge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cdFx0Y29uc3QgbGlzdCA9IHBpenphID0+IHtcclxuXHRcdFx0cmV0dXJuIGBcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwaXp6YVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBpenphX19pbWdcIiBzcmM9XCIke0RPTUFJTn0vJHtwaXp6YS5pbWdfdXJsfVwiIGFsdD1cIiR7cGl6emEubmFtZX1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBpenphX19uYW1lXCI+JHtwaXp6YS5uYW1lfTwvaDI+XHJcblx0XHRcdFx0PHRpbWUgY2xhc3M9XCJwaXp6YV9fdGltZVwiIGRhdGV0aW1lPVwiJHtUSU1FLmNvbnZlcnREYXRlKHBpenphLnRpbWVfcHJlcGFyZWQpfVwiPiR7VElNRS5jb252ZXJ0RGF0ZShcclxuXHRwaXp6YS50aW1lX3ByZXBhcmVkXHJcbil9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaXp6YV9fcXVldWUtbnVtYmVyXCI+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2V0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmV0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjA0OjAwXCI+NDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cGl6emEucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXHJcbiAgICAgICAgICAgIGA7XHJcblx0XHR9O1xyXG5cclxuXHRcdHBpenphcy5mb3JFYWNoKHBpenphID0+IHtcclxuXHRcdFx0Y29udGFpbmVyLmlubmVySFRNTCArPSBsaXN0KHBpenphKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGxpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfX2NvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzKSB7XHJcblx0XHRcdGNvbnN0IHsgcGl6emFzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdFx0aWYgKHBpenphcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmNyZWF0ZVBpenphKHBpenphcykpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGl6emFMaXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJpbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4vYXV0aC5odHRwJztcclxuaW1wb3J0IHsgV1NfVElDS0VULCBXU19QQVRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50LmVtaXR0ZXInO1xyXG5cclxuY2xhc3MgV3Mge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy53cyA9IG51bGw7XHJcblx0XHR0aGlzLl9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGlja2V0KCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChXU19USUNLRVQpLnRoZW4ocmVzID0+IHJlcyk7XHJcblx0fVxyXG5cclxuXHRzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2VtaXR0ZXIuc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG5cdH1cclxuXHJcblx0X29ubWVzc2FnZShkYXRhKSB7XHJcblx0XHRjb25zdCBldmVudCA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblx0XHRjb25zb2xlLmxvZygnbWVzc2FnZTogJywgZXZlbnQpO1xyXG5cdFx0dGhpcy5fZW1pdHRlci5lbWl0KGV2ZW50LmV2ZW50X25hbWUsIGV2ZW50LmRhdGEpO1xyXG5cdH1cclxuXHJcblx0X29uY2xvc2UoZSkge1xyXG5cdFx0aWYgKGUuY29kZSA9PT0gNDAwMSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTG9naW4gcGx6Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTG9zdCBjb25uZWN0aW9uIC4uLiByZWNvbm5lY3QnKTtcclxuXHRcdFx0c2V0VGltZW91dCh0aGlzLl9lc3RhYmxpc2gsIDIwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXN0YWJsaXNoKCkge1xyXG5cdFx0dGhpcy5nZXRUaWNrZXQoKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLndzID0gbmV3IFdlYlNvY2tldChgJHtXU19QQVRIfT9rZXk9JHtkYXRhLnRva2VufWApO1xyXG5cdFx0XHR0aGlzLndzLm9ub3BlbiA9IGNvbnNvbGUubG9nO1xyXG5cdFx0XHR0aGlzLndzLm9ubWVzc2FnZSA9IGUgPT4gdGhpcy5fb25tZXNzYWdlKGUuZGF0YSk7XHJcblx0XHRcdHRoaXMud3Mub25jbG9zZSA9IGUgPT4gdGhpcy5fb25jbG9zZShlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdTID0gbmV3IFdzKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy93cy5qcyIsImV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5ldmVudHMgPSB7fTtcclxuXHR9XHJcblxyXG5cdGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcblx0XHRjb25zdCBldmVudCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XHJcblx0XHRpZiAoZXZlbnQpIHtcclxuXHRcdFx0ZXZlbnQuZm9yRWFjaChmbiA9PiB7XHJcblx0XHRcdFx0Zm4uY2FsbChudWxsLCBkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcblx0XHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKCd0aGlzLmV2ZW50czogJywgdGhpcy5ldmVudHMpO1xyXG5cdFx0dGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudEZuID0+IGZuICE9PSBldmVudEZuKTtcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9ldmVudC5lbWl0dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbkZvcm0gZnJvbSAnLi9yZWdpc3RyYXRpb24uZm9ybSc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMucmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgdGhpcy5yZWdpc3RyYXRpb24udXBkYXRlKCksIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c3RvcmVzOiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbicpO1xyXG5cdFx0dGhpcy5nZXRTdG9yZXMoKTtcclxuXHR9XHJcblxyXG5cdGdldFN0b3JlcygpIHtcclxuXHRcdEFVVEhfU0VSVklDRS5zdG9yZUluZm8oKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMuc3RhdGUuc3RvcmVzID0gcmVzdWx0O1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBldi50YXJnZXQudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogZXYudGFyZ2V0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmRfcmVwZWF0OiBldi50YXJnZXQucGFzc3dvcmRfcmVwZWF0LnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0ZW1haWw6IGV2LnRhcmdldC5lbWFpbC52YWx1ZS50cmltKCksXHJcblx0XHRcdHN0b3JlX2lkOiBwYXJzZUludChldi50YXJnZXQuc3RvcmUub3B0aW9uc1tldi50YXJnZXQuc3RvcmUuc2VsZWN0ZWRJbmRleF0uZGF0YXNldC5pZCksXHJcblx0XHRcdHN0b3JlX3Bhc3N3b3JkOiBldi50YXJnZXQuc3RvcmVfcGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0fTtcclxuXHRcdEFVVEhfU0VSVklDRS5yZWdpc3RlclVzZXIoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JlcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblx0XHRjb25zdCByZWdpc3RyYXRpb24gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVnaXN0cmF0aW9uX190aXRsZVwiPnJlZ2lzdHJhdGlvbiBmb3JtPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVW5pcXVlLiBNaW4gbGVuZ3RoIDIgY2hhcnMsIG1heCAtIDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIj5SZS1lbnRlciBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRfcmVwZWF0XCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgbWF0Y2ggd2l0aCBwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIGVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlXCI+U3RvcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBoaWRkZW4gaWQ9XCJyZWdpc3RyYXRpb24tc3RvcmVcIiBuYW1lPVwic3RvcmVcIj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIj5TdG9yZSBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInN0b3JlX3Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgc3RvcmUgcGFzc3dvcmQuIE1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiByZWdpc3RyYXRpb25fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHJlZ2lzdHJhdGlvbik7XHJcblxyXG5cdFx0Y29uc3Qgc2VsZWN0ID0gZnJhZ21lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uX19zZWxlY3QnKTtcclxuXHJcblx0XHRpZiAoc3RvcmVzKSB7XHJcblx0XHRcdHNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdFx0c3RvcmVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcblx0XHRcdFx0b3B0aW9uLnRleHQgPSBlbGVtZW50Lm5hbWU7XHJcblx0XHRcdFx0b3B0aW9uLmRhdGFzZXQuaWQgPSBlbGVtZW50LmlkO1xyXG5cdFx0XHRcdHNlbGVjdC5hZGQob3B0aW9uKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmh0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX1VSTCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRJTUUgfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRpc1ZhbGlkOiBmYWxzZSxcclxuXHRcdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRcdGVtYWlsOiBudWxsLFxyXG5cdFx0XHRjcmVhdGVkOiBudWxsLFxyXG5cdFx0XHR2aXNpdGVkOiBudWxsLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3VzZXItY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdFx0dGhpcy5nZXRVc2VyKCk7XHJcblx0fVxyXG5cclxuXHRnZXRVc2VyKCkge1xyXG5cdFx0QVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFVTRVJfVVJMKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRcdHVzZXJuYW1lOiByZXMudXNlcm5hbWUsXHJcblx0XHRcdFx0ZW1haWw6IHJlcy5lbWFpbCxcclxuXHRcdFx0XHRjcmVhdGVkOiByZXMuY3JlYXRlZF9hdCxcclxuXHRcdFx0XHR2aXNpdGVkOiByZXMubGFzdF9sb2dpbixcclxuXHRcdFx0XHRpc1ZhbGlkOiB0cnVlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGNyZWF0ZWQsIHZpc2l0ZWQsIGlzVmFsaWQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG5cdFx0XHQ8bWFpbiBjbGFzcz0ndXNlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz0nY29udGFpbmVyIHVzZXJfX2NvbnRhaW5lcic+PC9kaXY+XHJcblx0XHRcdDwvbWFpbj5gO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRhaW5lckZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblx0XHRjb25zdCBjb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmIChpc1ZhbGlkKSB7XHJcblx0XHRcdGNvbnN0IHVzZXJTdHJpbmcgPSBgXHJcblx0XHRcdFx0PHVsIGNsYXNzPSd1c2VyX19pbmZvJz5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz0ndXNlcl9fbmFtZSc+VXNlcjogXHJcblx0XHRcdFx0XHRcdDxzcGFuPiR7dXNlcm5hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz0ndXNlcl9fbWFpbCc+RS1tYWlsOiBcclxuXHRcdFx0XHRcdFx0PHNwYW4+JHtlbWFpbH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPSd1c2VyX19jcmVhdGVkJz5DcmVhdGVkOlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke1RJTUUuY29udmVydERhdGUoY3JlYXRlZCl9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz0ndXNlcl9fdmlzaXRlZCc+TGFzdCBzZWVuOlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke1RJTUUuY29udmVydERhdGUodmlzaXRlZCl9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPmA7XHJcblx0XHRcdGNvbnN0IHVzZXJGcmFnbWVudCA9IHRvSHRtbCh1c2VyU3RyaW5nKTtcclxuXHRcdFx0Y29udGFpbmVyRWxlbWVudC5hcHBlbmQodXNlckZyYWdtZW50KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBjb250YWluZXJGcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IHsgQ1JFQVRFX0RBVEEgfSBmcm9tICcuLi8uLi91dGlscy9waXp6YS5kYXRhJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4sIENSRUFURV9QSVpaQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERSQVcgfSBmcm9tICcuL2RyYXcnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGguaHR0cCc7XHJcblxyXG5jbGFzcyBOZXdQaXp6YSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuY29uZGl0aW9uID0ge1xyXG5cdFx0XHRzaXplOiAnNjAnLFxyXG5cdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdFx0aW5ncmVkaWVudHM6IFtdLFxyXG5cdFx0XHR0YWdzOiBbXSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHsgc2l6ZSwgaW5ncmVkaWVudHMsIHRhZ3MgfSA9IHRoaXMuY29uZGl0aW9uO1xyXG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcblx0XHRjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fbmFtZS12YWx1ZScpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19kZXNjcmlwdGlvbicpO1xyXG5cclxuXHRcdGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmZC5hcHBlbmQoJ25hbWUnLCBuYW1lLnZhbHVlKTtcclxuXHRcdGZkLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbi52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ3NpemUnLCBzaXplKTtcclxuXHRcdGZkLmFwcGVuZCgnaW5ncmVkaWVudHMnLCBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50cykpO1xyXG5cdFx0ZmQuYXBwZW5kKCd0YWdzJywgSlNPTi5zdHJpbmdpZnkodGFncykpO1xyXG5cclxuXHRcdGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcblx0XHRcdGZkLmFwcGVuZCgnaW1hZ2UnLCBibG9iLCAnbmV3X2ltYWdlLnBuZycpO1xyXG5cdFx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UucG9zdChDUkVBVEVfUElaWkEsIGZkKS50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KCkge1xyXG5cdFx0UHJvbWlzZS5hbGwoW0NSRUFURV9EQVRBLmdldEluZ3JlZGllbnRzKCksIENSRUFURV9EQVRBLmdldFRhZ3MoKV0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19vcHRpb25zJyk7XHJcblx0XHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuXHJcblx0XHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19jYW52YXMnKTtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHRcdFx0Y29uc3QgYnV0dG9uc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1jYW5jZWwnIHR5cGU9J2J1dHRvbic+Y2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1zZW5kJyB0eXBlPSdzdWJtaXQnPmNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHRcdFx0Y29uc3QgYnV0dG9ucyA9IHRvSHRtbChidXR0b25zU3RyaW5nKTtcclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmQodGhpcy5yZW5kZXJGb3JtKCkpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVySW5ncmVkaWVudHMoQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRhZ3MoQ1JFQVRFX0RBVEEudGFncykpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xyXG5cdFx0XHREUkFXLm9uSW5pdCh7XHJcblx0XHRcdFx0aG9zdDogY2FudmFzLFxyXG5cdFx0XHRcdGluZ3JlZGllbnRzOiBDUkVBVEVfREFUQS5pbmdyZWRpZW50cyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKGV2KSB7XHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuZmxhZyA9PT0gJ2luZ3JlZGllbnQnKSB7XHJcblx0XHRcdGNvbnN0IGluZ3JlZGllbnRzSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmxhZ10nKTtcclxuXHRcdFx0Y29uc3QgbmV3T3B0aW9ucyA9IFtdO1xyXG5cdFx0XHRjb25zdCBuZXdJbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0XHRpbmdyZWRpZW50c0lucHV0cy5mb3JFYWNoKGluZ3JlZGllbnRJbnB1dCA9PiB7XHJcblx0XHRcdFx0aWYgKGluZ3JlZGllbnRJbnB1dC5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRuZXdPcHRpb25zLnB1c2goaW5ncmVkaWVudElucHV0LnZhbHVlKTtcclxuXHRcdFx0XHRcdG5ld0luZ3JlZGllbnRzLnB1c2gocGFyc2VJbnQoaW5ncmVkaWVudElucHV0LmRhdGFzZXQuaWQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5jb25kaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmRpdGlvbiwge1xyXG5cdFx0XHRcdG9wdGlvbnM6IG5ld09wdGlvbnMsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmNvbmRpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZGl0aW9uLCB7XHJcblx0XHRcdFx0aW5ncmVkaWVudHM6IG5ld0luZ3JlZGllbnRzLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLmNvbmRpdGlvbjtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuYXR0ciA9PT0gJ3NpemUnKSB7XHJcblx0XHRcdGNvbnN0IHNpemVGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRyXScpO1xyXG5cdFx0XHRzaXplRmllbGRzLmZvckVhY2goc2l6ZUZpZWxkID0+IHtcclxuXHRcdFx0XHRpZiAoc2l6ZUZpZWxkLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld1NpemUgPSBzaXplRmllbGQudmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLmNvbmRpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZGl0aW9uLCB7XHJcblx0XHRcdFx0XHRcdHNpemU6IG5ld1NpemUsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRsZXQgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLmNvbmRpdGlvbjtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckZvcm0oKSB7XHJcblx0XHRjb25zdCBmb3JtU3RyaW5nID0gYFxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fbmFtZSc+UGl6emEgTmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHJlcXVpcmVkIG1pbj0nMycgbWF4PScyNCcgY2xhc3M9J2NyZWF0ZV9fbmFtZS12YWx1ZSc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9J2NyZWF0ZV9fZGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZSc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX3NpemUtdGl0bGUnPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSczMCcgZGF0YS1hdHRyPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1zbWFsbFwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjQ1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzQ1JyBkYXRhLWF0dHI9J3NpemUnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLW1lZGl1bVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjYwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzYwJyBkYXRhLWF0dHI9J3NpemUnIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICAgIFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLXRpdGxlJz5JbmdyZWRpZW50czxzcGFuPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IHRvSHRtbChmb3JtU3RyaW5nKTtcclxuXHRcdHJldHVybiBmb3JtO1xyXG5cdH1cclxuXHJcblx0cmVuZGVySW5ncmVkaWVudHMoZGF0YSkge1xyXG5cdFx0Y29uc3QgaW5ncmVkaWVudHNTdHJpbmcgPSBgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG5cdFx0aHRtbCArPSBgXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLWl0ZW0nPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaW5wdXQnIHR5cGU9J2NoZWNrYm94JyB2YWx1ZT0nJHtkYXRhLm5hbWV9JyBcclxuXHRcdFx0ZGF0YS1mbGFnPSdpbmdyZWRpZW50JyBkYXRhLWlkPScke2RhdGEuaWR9Jz5cclxuXHRcdFx0PGltZyBzcmM9JyR7RE9NQUlOfS8ke2RhdGEuaW1hZ2VfdXJsfScgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnIHRpdGxlPScke2RhdGEuZGVzY3JpcHRpb259J1xyXG5cdFx0XHRkYXRhLW5hbWU9J2luZ3JlZGllbnQnPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5gO1xyXG5cdFx0cmV0dXJuIGh0bWw7XHJcblx0fSwgJycpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFx0PHNwYW4gY2xhc3M9J2NyZWF0ZV9fdGFnLXRpdGxlJz5UYWc8c3Bhbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaW5ncmVkaWVudHNTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyVGFncyhkYXRhKSB7XHJcblx0XHRjb25zdCB0YWdzU3RyaW5nID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9fdGFncyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG5cdFx0aHRtbCArPSBgXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3RhZ3MtaXRlbScgZm9yPSR7ZGF0YS5uYW1lfT5cclxuXHRcdFx0PGlucHV0IHR5cGU9J2NoZWNrYm94JyBpZD0ke2RhdGEubmFtZX0gZGF0YS1pZD0ke2RhdGEuaWR9PlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhciBmYS1zcXVhcmUgY3JlYXRlX190YWdzLWljb24gY3JlYXRlX190YWdzLWljb24tLXVuY2hlY2tlZFwiPjwvaT5cclxuXHRcdFx0PGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stc3F1YXJlIGNyZWF0ZV9fdGFncy1pY29uIGNyZWF0ZV9fdGFncy1pY29uLS1jaGVja2VkXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIGA7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwodGFnc1N0cmluZyk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzPSdjcmVhdGUnIGlkPSdjcmVhdGUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29udGFpbmVyIGNyZWF0ZV9fY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9J2NyZWF0ZV9fdGl0bGUnPkNyZWF0ZSBQaXp6YTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fY2FudmFzJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fb3B0aW9ucyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyRnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBjb250YWluZXJGcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UGl6emE7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNsYXNzIERyYXcge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5jcnVzdF9waXp6YSA9ICdodHRwczovL3BpenphLXRlbGUuZ2Evc3RhdGljL2ltYWdlcy9waXp6YS5wbmcnO1xyXG5cdFx0dGhpcy5fbG9hZEltYWdlID0gdGhpcy5fbG9hZEltYWdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoZGF0YSkge1xyXG5cdFx0dGhpcy5ob3N0ID0gZGF0YS5ob3N0O1xyXG5cdFx0dGhpcy5zaXplID0gJzYwJztcclxuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHR0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblx0XHR0aGlzLmNhbnZhc1dpZHRoID0gMzIwO1xyXG5cdFx0dGhpcy5jYW52YXNIZWlnaHQgPSAzMjA7XHJcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5pbmdyZWRpZW50cztcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLnNwcml0ZXMgPSB7fTtcclxuXHRcdHRoaXMubGFzdE9wdGlvbnMgPSBbXTtcclxuXHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sID0gW107XHJcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzV2lkdGg7XHJcblx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhc0hlaWdodDtcclxuXHRcdHRoaXMuX2xvYWRSZXNvdXJjZXMoKS50aGVuKHJlc291cmNlcyA9PiB7XHJcblx0XHRcdHJlc291cmNlcy5mb3JFYWNoKHJlc291cmNlID0+ICh0aGlzLmltYWdlc1tyZXNvdXJjZS5uYW1lXSA9IHJlc291cmNlLmltYWdlKSk7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQodGhpcy5jYW52YXMpO1xyXG5cdFx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfc3RhcnRTZXQoKSB7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sID0gW107XHJcblx0XHQvLyBsZXQgcGl6emEgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzWydwaXp6YSddLCAxNjAsIDE2MCwgMzAwLCAzMDApO1xyXG5cdFx0bGV0IHBpenphID0gbmV3IFNwcml0ZShcclxuXHRcdFx0dGhpcy5pbWFnZXNbJ3BpenphJ10sXHJcblx0XHRcdDE2MCxcclxuXHRcdFx0MTYwLFxyXG5cdFx0XHQzMDAgKiBgJHtwYXJzZUludCh0aGlzLnNpemUpfWAgLyA2MCxcclxuXHRcdFx0MzAwICogYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gIC8gNjBcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNwcml0ZXNbJ3BpenphJ10gPSBwaXp6YTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wucHVzaChwaXp6YSk7XHJcblx0XHR0aGlzLl9kcmF3KCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVDbGljayhvcHRpb25zLCBzaXplKSB7XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA9PSB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbGVtID0+IHtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbGVtLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoIDwgdGhpcy5idWZmZXIubGVuZ3RoKSB7XHJcblx0XHRcdGxldCBwcmVCdWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5sYXN0T3B0aW9ucyA9IFtdO1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdHRoaXMubGFzdE9wdGlvbnMucHVzaChlbCk7XHJcblx0XHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbGVtID0+IHtcclxuXHRcdFx0XHRcdGlmIChlbGVtLmlkID09PSBlbCkge1xyXG5cdFx0XHRcdFx0XHRwcmVCdWZmZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IGVsZW0uaWQsXHJcblx0XHRcdFx0XHRcdFx0c3ByaXRlczogZWxlbS5zcHJpdGVzLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWxlbS5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZWxlbS5zcHJpdGVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmNvbmNhdChwcmVCdWZmZXIpO1xyXG5cdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdE9wdGlvbnMuaW5jbHVkZXMoZWwpKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubGFzdE9wdGlvbnMucHVzaChlbCk7XHJcblx0XHRcdFx0XHR0aGlzLl9nZW5lcmF0ZVNwcml0ZShlbCwgMTApO1xyXG5cdFx0XHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGVsZW0uc3ByaXRlcyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X2dlbmVyYXRlU3ByaXRlKG5hbWUsIGNvdW50KSB7XHJcblx0XHRjb25zdCBzcHJpdGVzID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcblx0XHRcdGxldCBpbmdyZWRpZW50ID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1tgJHtuYW1lfWBdLCBSQU5ET00oNzAsIDI1MCksIFJBTkRPTSg3MCwgMjUwKSk7XHJcblx0XHRcdHNwcml0ZXMucHVzaChpbmdyZWRpZW50KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYnVmZmVyLnB1c2goe1xyXG5cdFx0XHRpZDogbmFtZSxcclxuXHRcdFx0c3ByaXRlczogc3ByaXRlcyxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X2RyYXcoKSB7XHJcblx0XHR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbC5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuZHJhdyh0aGlzLmN0eCkpO1xyXG5cdH1cclxuXHJcblx0X2xvYWRSZXNvdXJjZXMoKSB7XHJcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHRcdHByb21pc2VzLnB1c2godGhpcy5fbG9hZEltYWdlKCdwaXp6YScsIHRoaXMuY3J1c3RfcGl6emEpKTtcclxuXHRcdHByb21pc2VzID0gcHJvbWlzZXMuY29uY2F0KFxyXG5cdFx0XHR0aGlzLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IHtcclxuXHRcdFx0XHRsZXQgaW5ncl91cmwgPSBgJHtET01BSU59LyR7aW5ncmVkaWVudC5pbWFnZV91cmx9YDtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbG9hZEltYWdlKGluZ3JlZGllbnQubmFtZSwgaW5ncl91cmwpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0fVxyXG5cclxuXHRfbG9hZEltYWdlKG5hbWUsIHVybCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0aW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcclxuXHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xyXG5cdFx0XHRpbWFnZS53aWR0aCA9IDIwO1xyXG5cdFx0XHRpbWFnZS5oZWlnaHQgPSAyMDtcclxuXHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh7IG5hbWUsIGltYWdlIH0pO1xyXG5cdFx0XHRpbWFnZS5vbmVycm9yID0gZSA9PiByZWplY3QoZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEUkFXID0gbmV3IERyYXcoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuXHRjb25zdHJ1Y3RvcihpbWFnZSwgY3gsIGN5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHR0aGlzLnggPSAwO1xyXG5cdFx0dGhpcy55ID0gMDtcclxuXHRcdHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmltYWdlLndpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5pbWFnZS5oZWlnaHQ7XHJcblx0XHR0aGlzLmN4ID0gY3ggfHwgMDtcclxuXHRcdHRoaXMuY3kgPSBjeSB8fCAwO1xyXG5cdH1cclxuXHRnZXQgY3goKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnggKyB0aGlzLndpZHRoICogMC41KTtcclxuXHR9XHJcblxyXG5cdGdldCBjeSgpIHtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRoaXMueSArIHRoaXMuaGVpZ2h0ICogMC41KTtcclxuXHR9XHJcblxyXG5cdHNldCBjeCh2YWx1ZSkge1xyXG5cdFx0dGhpcy54ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMud2lkdGggKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0c2V0IGN5KHZhbHVlKSB7XHJcblx0XHR0aGlzLnkgPSBNYXRoLnJvdW5kKHZhbHVlIC0gdGhpcy5oZWlnaHQgKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhjdHgpIHtcclxuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhHdWFyZCA9IHBhcmFtID0+IHtcclxuXHRyZXR1cm4gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpXHJcblx0XHQ/IFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUsIHJvdXRlOiBwYXJhbSB9KVxyXG5cdFx0OiBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiBmYWxzZSwgcmVkaXJlY3Q6ICcvbG9naW4nIH0pO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=