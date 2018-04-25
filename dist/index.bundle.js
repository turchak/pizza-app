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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 8 */
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
/* 9 */
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

var _auth = __webpack_require__(27);

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

var _index = __webpack_require__(8);

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

var _pizza = __webpack_require__(7);

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

var _time = __webpack_require__(9);

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
				return '\n            <article class="pizza">\n                <img class="pizza__img" src="' + _constants.DOMAIN + '/' + pizza.img_url + '" alt="' + pizza.name + '">\n                <h2 class="pizza__name">' + pizza.name + '</h2>\n\t\t\t\t<time class="pizza__time" datetime="' + _time.TIME.convertDate(pizza.time_prepared) + '">' + _time.TIME.convertDate(pizza.time_prepared) + '</time>\n                <span class="pizza__queue-number">#1</span>\n                <div class="pizza__eta">\n                    <span>eta</span>\n                    <time datetime="07:00">7</time>\n                    <span>min</span>\n                </div>\n                <div class="pizza__price">\n                    <span>$</span>\n                    <span>' + pizza.price + '</span>\n                </div>\n            </article> \n            ';
			};

			pizzas.forEach(function (pizza) {
				container.innerHTML += list(pizza);
			});

			return container;
		}
	}, {
		key: 'render',
		value: function render() {
			var containerString = '\n\t\t\t<div class="container list__container">\n        \t</div>\n\t\t';

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
		key: "emit",
		value: function emit(eventName, data) {
			var event = this.events[eventName];
			if (event) {
				event.forEach(function (fn) {
					fn.call(null, data);
				});
			}
		}
	}, {
		key: "subscribe",
		value: function subscribe(eventName, fn) {
			var _this = this;

			if (!this.events[eventName]) {
				this.events[eventName] = [];
			}
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

var _time = __webpack_require__(9);

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

var _pizza = __webpack_require__(7);

var _utils = __webpack_require__(1);

var _constants = __webpack_require__(3);

var _draw = __webpack_require__(24);

var _auth = __webpack_require__(6);

var _price = __webpack_require__(26);

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
		_this.price = new _price.Price();
		_this.header = new _header2.default();
		_this.footer = new _footer2.default();
		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(NewPizza, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			Promise.all([_pizza.CREATE_DATA.getIngredients(), _pizza.CREATE_DATA.getTags()]).then(function () {
				var container = document.querySelector('.create__options');
				var canvas = document.querySelector('.create__canvas');

				container.addEventListener('change', _this2.handleClick);

				var form = document.createElement('form');
				var buttonsString = '\n            \t<div class=\'create__button\'>\n                \t<button class=\'button create__button-cancel\' type=\'button\'>cancel</button>\n                 \t<button class=\'button create__button-send\' type=\'submit\'>create</button>\n            \t</div>\n                ';
				var buttonsFragment = (0, _utils.toHtml)(buttonsString);
				var buttons = buttonsFragment.querySelector('.create__button');
				buttons.addEventListener('click', _this2.handleClick);
				form.addEventListener('submit', _this2.handleSubmit);
				container.append(form);
				form.append(_this2.renderForm());
				form.append(_this2.renderIngredients(_pizza.CREATE_DATA.ingredients));
				form.append(_this2.renderTags(_pizza.CREATE_DATA.tags));
				form.append(_this2.price.update({ condition: _this2.condition }));
				form.append(buttonsFragment);

				_draw.DRAW.onInit({
					host: canvas,
					ingredients: _pizza.CREATE_DATA.ingredients
				});
			});
		}
	}, {
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
		key: 'handleClick',
		value: function handleClick(ev) {
			var _this3 = this;

			if (ev.target.dataset.flag === 'size') {
				var sizes = document.querySelectorAll('input[data-flag="size"]');
				sizes.forEach(function (size) {
					if (size.checked) {
						var newSize = size.value;
						_this3.condition = Object.assign({}, _this3.condition, {
							size: newSize
						});
					}
				});
				var _condition2 = this.condition,
				    size = _condition2.size,
				    options = _condition2.options;

				_draw.DRAW.handleClick(options, size);
				this.price.update({ condition: this.condition });
			}

			if (ev.target.dataset.flag === 'ingredient') {
				var newOptions = [];
				var newIngredients = [];
				var ingredients = document.querySelectorAll('input[data-flag="ingredient"]');
				ingredients.forEach(function (ingredient) {
					if (ingredient.checked) {
						newOptions.push(ingredient.value);
						newIngredients.push(parseInt(ingredient.dataset.id));
					}
				});

				this.condition = Object.assign({}, this.condition, {
					options: newOptions,
					ingredients: newIngredients
				});

				var _condition3 = this.condition,
				    _size = _condition3.size,
				    _options = _condition3.options;

				_draw.DRAW.handleClick(_options, _size);
				this.price.update({ condition: this.condition });
			}

			if (ev.target.dataset.flag === 'tag') {
				var newTags = [];
				var tags = document.querySelectorAll('input[data-flag="tag"]');
				tags.forEach(function (tag) {
					if (tag.checked) {
						newTags.push(parseInt(tag.dataset.id));
					}

					_this3.condition = Object.assign({}, _this3.condition, {
						tags: newTags
					});
				});
			}

			if (ev.target.className === 'button create__button-cancel') {
				window.location.hash = '/';
			}

			return false;
		}
	}, {
		key: 'renderForm',
		value: function renderForm() {
			var formString = '\n        <label>\n            <span class=\'create__name\'>Pizza Name</span>\n            <input type=\'text\' name=\'name\' required min=\'3\' max=\'24\' class=\'create__name-value\'>\n        </label>\n        <label>\n            <span>Description</span>\n            <textarea class=\'create__description\'></textarea>\n        </label>\n        <label class=\'create__size\'>\n            <span class=\'create__size-title\'>Size</span>\n            <label class=\'create__size-option\'>\n                <span>30</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'30\' data-flag=\'size\'>\n                <i class="fas fa-circle create__size-option--small"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>45</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'45\' data-flag=\'size\'>\n                <i class="fas fa-circle create__size-option--medium"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>60</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'60\' data-flag=\'size\' checked>\n                <i class="fas fa-circle create__size-option--large"></i>\n            </label>    \n        </label>\n        <span class=\'create__ingredients-title\'>Ingredients<span>\n        ';

			var formFragment = (0, _utils.toHtml)(formString);
			return formFragment;
		}
	}, {
		key: 'renderIngredients',
		value: function renderIngredients(data) {
			var ingredientsString = '   \n        <div class=\'create__ingredients\'>' + data.reduce(function (html, data) {
				html += '\n        \t<label class=\'create__ingredients-item\'>\n\t\t\t\t<input class=\'create__ingredients-input\' type=\'checkbox\' value=\'' + data.name + '\' data-flag=\'ingredient\' data-id=\'' + data.id + '\'>\n\t\t\t\t<img src=\'' + _constants.DOMAIN + '/' + data.image_url + '\' class=\'create__ingredients\' title=\'' + data.description + '\' data-name=\'ingredient\'>\n            \t<span>' + data.name + '</span>\n        \t</label>';
				return html;
			}, '') + '\n        </div>\n        <span class=\'create__tags-title\'>Tag<span>\n        ';
			var ingredientsFragment = (0, _utils.toHtml)(ingredientsString);
			return ingredientsFragment;
		}
	}, {
		key: 'renderTags',
		value: function renderTags(data) {
			var tagsString = '\n        <div class=\'create__tags\'>' + data.reduce(function (html, data) {
				html += '\n        <label class=\'create__tags-item\' for=' + data.name + '>\n\t\t\t<input type=\'checkbox\' id=' + data.name + ' data-id=' + data.id + ' data-flag=\'tag\'>\n\t\t\t<i class="far fa-square create__tags-icon create__tags-icon--unchecked"></i>\n\t\t\t<i class="far fa-check-square create__tags-icon create__tags-icon--checked"></i>\n            <span>' + data.name + '</span>\n        </label>\n                ';
				return html;
			}, '') + '\n                </div>\n        ';
			var tagsFragment = (0, _utils.toHtml)(tagsString);
			return tagsFragment;
		}
	}, {
		key: 'render',
		value: function render() {
			var containerString = '\n            <main class=\'create\' id=\'create\'>\n                <div class=\'container create__container\'>\n\t\t\t\t\t<h1 class=\'create__title\'>Create Pizza</h1>\n                    <section class=\'create__canvas\'></section>\n                    <section class=\'create__options\'></section>\n                </div>\n            </main>\n        ';
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
exports.Price = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _pizza = __webpack_require__(7);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Price = exports.Price = function (_Component) {
	_inherits(Price, _Component);

	function Price(props) {
		_classCallCheck(this, Price);

		var _this = _possibleConstructorReturn(this, (Price.__proto__ || Object.getPrototypeOf(Price)).call(this, props));

		_this.host = document.createElement('div');
		_this.host.classList.add('price');
		return _this;
	}

	_createClass(Price, [{
		key: 'calcPrice',
		value: function calcPrice(condition) {
			var data = _pizza.CREATE_DATA.ingredients;
			var size = condition.size,
			    ingredients = condition.ingredients;

			var price = '0.00';

			if (ingredients.length !== 0) {
				var sum = [];
				ingredients.forEach(function (ingredient) {
					sum.push(data[ingredient - 1].price);
				});
				price = sum.reduce(function (prev, curr) {
					return prev + curr;
				}, size / 5).toFixed(2);
			}

			return price;
		}
	}, {
		key: 'render',
		value: function render() {
			var condition = this.props.condition;


			var priceString = '\n            <span>Price:</span>\n            <span class=\'price__amount\'>$ ' + this.calcPrice(condition) + '</span>\n\t    ';
			var priceFragment = (0, _utils.toHtml)(priceString);
			return priceFragment;
		}
	}]);

	return Price;
}(_component2.default);

/***/ }),
/* 27 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTJkNTIxMTMzNGI5MGM3MjZiZTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3BpenphLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy90aW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2V2ZW50LmVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wcmljZS9wcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaG9zdCIsIm9uSW5pdCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJjb25zb2xlIiwibG9nIiwib25CZWZvcmVVbm1vdW50IiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJpbm5lckhUTUwiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0b0h0bWwiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0cmluZyIsImNvbnRlbnQiLCJSQU5ET00iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJBdXRoU2VydmljZSIsIl90b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfY2xhaW1zIiwiSlNPTiIsInBhcnNlIiwibG9naW5VcmwiLCJzdG9yZVVybCIsImNyZWF0ZVVybCIsInRva2VuIiwidG9rZW5Jc05vdEV4cGlyZWQiLCJjbGVhclN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiY2xhaW1zIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm9rIiwiYW5zd2VyIiwicGFyc2VKd3RDbGFpbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YXR1cyIsInJlamVjdCIsImp3dFRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsInNldEl0ZW0iLCJBVVRIX1NFUlZJQ0UiLCJET01BSU4iLCJJTkdSRURJRU5UU19VUkwiLCJUQUdfVVJMIiwiVVNFUl9VUkwiLCJDUkVBVEVfUElaWkEiLCJQSVpaQV9MSVNUIiwiV1NfVElDS0VUIiwiV1NfUEFUSCIsIkZvb3RlciIsImNsYXNzTGlzdCIsImFkZCIsIkhlYWRlciIsImlzQXV0aG9yaXplZCIsImxvZ2luQnV0dG9uIiwibG9nb3V0QnV0dG9uIiwidXNlckJ1dHRvbiIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsImhlYWRlciIsImZyYWdtZW50IiwiQXV0aEh0dHBTZXJ2aWNlIiwidXJsIiwiRXJyb3IiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiQVVUSF9IVFRQX1NFUlZJQ0UiLCJQaXp6YURhdGFTZXJ2aWNlIiwiaW5ncmVkaWVudHMiLCJ0YWdzIiwicGl6emFzIiwiYWRkUGl6emEiLCJiaW5kIiwicmVtb3ZlUGl6emEiLCJwaXp6YSIsImZpbmRJbmRleCIsInV1aWQiLCJwIiwidW5zaGlmdCIsInV1aWRzIiwiZm9yRWFjaCIsImluZGV4Iiwic3BsaWNlIiwicmVzZXQiLCJsaW1pdCIsIm9mZnNldCIsImdldCIsInJlc3VsdHMiLCJjb25jYXQiLCJDUkVBVEVfREFUQSIsIkFQUF9ST1VURVIiLCJxdWVyeVNlbGVjdG9yIiwicm91dGVzIiwiVGltZXIiLCJ0aW1lIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJjb252ZXJ0TW91bnQiLCJyZXN1bHQiLCJUSU1FIiwiUm91dGVyIiwiYWN0aXZlUm91dGUiLCJhY3RpdmVDb21wb25lbnQiLCJoYW5kbGVVcmxDaGFuZ2UiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsIm9uRW50ZXIiLCJoYW5kbGVPbkVudGVyIiwibG9jYXRpb24iLCJoYXNoIiwibG9nb3V0Iiwib25FbnRlckd1YXJkIiwiZ3VhcmQiLCJzdWNjZXNzIiwicm91dGUiLCJyZWRpcmVjdCIsImNvbXBvbmVudEluc3RhbmNlIiwidW5tb3VudCIsInVwZGF0ZVN0YXRlIiwidXBkYXRlIiwic2xpY2UiLCJMb2dpbiIsImxvZ2luRm9ybSIsImZvb3RlciIsIkxvZ2luRm9ybSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImxvZ2luU3RyaW5nIiwibG9naW5GcmFnbWVudCIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibGlzdCIsImVzdGFibGlzaCIsInVuc3Vic2NyaWJlQWRkIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJ1bnN1YnNjcmliZVJlbW92ZSIsImdldFVuYWNjZXB0ZWRQaXp6YXMiLCJ1cGRhdGVMaXN0IiwicGFyYW0iLCJ1bnN1YnNjcmliZSIsImNvbnRhaW5lclN0cmluZyIsImNvbnRhaW5lckZyYWdtZW50IiwiY29udGFpbmVyIiwiUGl6emFMaXN0IiwiaW1nX3VybCIsImNvbnZlcnREYXRlIiwidGltZV9wcmVwYXJlZCIsInByaWNlIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJXcyIsIndzIiwiX2VtaXR0ZXIiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImVtaXQiLCJldmVudF9uYW1lIiwiZSIsImNvZGUiLCJzZXRUaW1lb3V0IiwiX2VzdGFibGlzaCIsImdldFRpY2tldCIsIldlYlNvY2tldCIsIm9ub3BlbiIsIm9ubWVzc2FnZSIsIl9vbm1lc3NhZ2UiLCJvbmNsb3NlIiwiX29uY2xvc2UiLCJXUyIsIkV2ZW50RW1pdHRlciIsImV2ZW50cyIsImZuIiwiY2FsbCIsInB1c2giLCJmaWx0ZXIiLCJldmVudEZuIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uRm9ybSIsInN0b3JlcyIsImdldFN0b3JlcyIsInN0b3JlSW5mbyIsInBhc3N3b3JkX3JlcGVhdCIsImVtYWlsIiwic3RvcmVfaWQiLCJwYXJzZUludCIsInN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJpZCIsInN0b3JlX3Bhc3N3b3JkIiwicmVnaXN0ZXJVc2VyIiwic2VsZWN0IiwiaGlkZGVuIiwib3B0aW9uIiwiZWxlbWVudCIsImZvcm0iLCJVc2VyIiwiaXNWYWxpZCIsImNyZWF0ZWQiLCJ2aXNpdGVkIiwiZ2V0VXNlciIsImNyZWF0ZWRfYXQiLCJsYXN0X2xvZ2luIiwiY29udGFpbmVyRWxlbWVudCIsInVzZXJTdHJpbmciLCJ1c2VyRnJhZ21lbnQiLCJOZXdQaXp6YSIsImNvbmRpdGlvbiIsInNpemUiLCJoYW5kbGVDbGljayIsImFsbCIsImdldEluZ3JlZGllbnRzIiwiZ2V0VGFncyIsImNhbnZhcyIsImJ1dHRvbnNTdHJpbmciLCJidXR0b25zRnJhZ21lbnQiLCJidXR0b25zIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwicmVuZGVyVGFncyIsImRlc2NyaXB0aW9uIiwiZmQiLCJGb3JtRGF0YSIsInRvQmxvYiIsImJsb2IiLCJwb3N0IiwiZmxhZyIsInNpemVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrZWQiLCJuZXdTaXplIiwibmV3T3B0aW9ucyIsIm5ld0luZ3JlZGllbnRzIiwiaW5ncmVkaWVudCIsIm5ld1RhZ3MiLCJ0YWciLCJjbGFzc05hbWUiLCJmb3JtU3RyaW5nIiwiZm9ybUZyYWdtZW50IiwiaW5ncmVkaWVudHNTdHJpbmciLCJyZWR1Y2UiLCJodG1sIiwiaW1hZ2VfdXJsIiwiaW5ncmVkaWVudHNGcmFnbWVudCIsInRhZ3NTdHJpbmciLCJ0YWdzRnJhZ21lbnQiLCJEcmF3IiwiY3J1c3RfcGl6emEiLCJfbG9hZEltYWdlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaW1hZ2VzIiwic3ByaXRlcyIsImxhc3RPcHRpb25zIiwiYnVmZmVyIiwic3ByaXRlc1Bvb2wiLCJ3aWR0aCIsImhlaWdodCIsIl9sb2FkUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwicmVzb3VyY2UiLCJpbWFnZSIsIl9zdGFydFNldCIsIl9kcmF3IiwiZmlsdGVyZWRFbGVtIiwiZWxlbSIsIngiLCJ5IiwicHJlQnVmZmVyIiwiZWwiLCJpbmNsdWRlcyIsIl9nZW5lcmF0ZVNwcml0ZSIsImNvdW50IiwiaSIsImNsZWFyUmVjdCIsInNwcml0ZSIsImRyYXciLCJwcm9taXNlcyIsIm1hcCIsImluZ3JfdXJsIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsImRyYXdJbWFnZSIsInJvdW5kIiwiUHJpY2UiLCJzdW0iLCJwcmV2IiwiY3VyciIsInRvRml4ZWQiLCJwcmljZVN0cmluZyIsImNhbGNQcmljZSIsInByaWNlRnJhZ21lbnQiLCJhdXRoR3VhcmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7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b0MsS0FBS0MsU0FBTCxDQUFlNUYsU0FBZixDQUZwQyxvQkFBTjtBQUlBLE9BQU02RixnQkFBZ0IsbUJBQU9GLFdBQVAsQ0FBdEI7QUFDQSxVQUFPRSxhQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRjs7QUFFTyxJQUFNQyxnQ0FBWSxTQUFaQSxTQUFZLFFBQVM7QUFDakMsUUFBTyxtQkFBYWpSLFlBQWIsS0FDSnpCLFFBQVFDLE9BQVIsQ0FBZ0IsRUFBRThGLFNBQVMsSUFBWCxFQUFpQkMsT0FBT3FDLEtBQXhCLEVBQWhCLENBREksR0FFSnJJLFFBQVFDLE9BQVIsQ0FBZ0IsRUFBRThGLFNBQVMsS0FBWCxFQUFrQkUsVUFBVSxRQUE1QixFQUFoQixDQUZIO0FBR0EsQ0FKTSxDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkyZDUyMTEzMzRiOTBjNzI2YmU2IiwiY2xhc3MgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xyXG5cdFx0dGhpcy5ob3N0ID0gbnVsbDtcclxuXHRcdHRoaXMub25Jbml0KCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KCkge31cclxuXHJcblx0dXBkYXRlKG5leHRQcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuXHRcdHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdHVubW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZygndW5tb3VudGlvbmcnKTtcclxuXHRcdHRoaXMub25CZWZvcmVVbm1vdW50KCk7XHJcblx0fVxyXG5cclxuXHRvbkJlZm9yZVVubW91bnQoKSB7fVxyXG5cclxuXHRvbkJlZm9yZVVwZGF0ZShuZXh0UHJvcHMpIHt9XHJcblxyXG5cdGdldCBuYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cdF9yZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0aWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQoY2hpbGRyZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmhvc3Q7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvY29tcG9uZW50LmpzIiwiZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cmluZztcclxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5ET00gPSAobWluLCBtYXgpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGFpbXMnKSk7XHJcblx0XHR0aGlzLmxvZ2luVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9sb2dpbmA7XHJcblx0XHR0aGlzLnN0b3JlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvc3RvcmUvbGlzdGA7XHJcblx0XHR0aGlzLmNyZWF0ZVVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvY3JlYXRlYDtcclxuXHR9XHJcblxyXG5cdGdldCB0b2tlbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b2tlbjtcclxuXHR9XHJcblxyXG5cdHNldCB0b2tlbih0b2tlbikge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuXHR9XHJcblxyXG5cdGdldCBjbGFpbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2xhaW1zO1xyXG5cdH1cclxuXHJcblx0c2V0IGNsYWltcyhjbGFpbXMpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IGNsYWltcztcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGFpbXMnLCBKU09OLnN0cmluZ2lmeShjbGFpbXMpKTtcclxuXHR9XHJcblxyXG5cdGlzQXV0aG9yaXplZCgpIHtcclxuXHRcdGlmICghdGhpcy50b2tlbikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuSXNOb3RFeHBpcmVkKCkpIHtcclxuXHRcdFx0dGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRjbGVhclN0b3JhZ2UoKSB7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBudWxsO1xyXG5cdFx0dGhpcy5fdG9rZW4gPSBudWxsO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2xhaW1zJyk7XHJcblx0fVxyXG5cclxuXHR0b2tlbklzTm90RXhwaXJlZCgpIHtcclxuXHRcdGlmICghdGhpcy50b2tlbikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xhaW1zLmV4cCAqIDEwMDAgPiBEYXRlLm5vdygpO1xyXG5cdH1cclxuXHJcblx0c3RvcmVJbmZvKCkge1xyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMuc3RvcmVVcmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0bG9naW5Vc2VyKGRhdGEpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuXHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoKS5hcHBlbmQoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyksXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLmxvZ2luVXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGlmIChyZXMub2spIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRva2VuID0gYW5zd2VyLnRva2VuO1xyXG5cdFx0XHRcdFx0dGhpcy5jbGFpbXMgPSB0aGlzLnBhcnNlSnd0Q2xhaW1zKGFuc3dlci50b2tlbik7XHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4gUHJvbWlzZS5yZWplY3QoeyBhbnN3ZXIsIHN0YXR1czogcmVzLnN0YXR1cyB9KSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVnaXN0ZXJVc2VyKGRhdGEpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5jcmVhdGVVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0cGFyc2VKd3RDbGFpbXMoand0VG9rZW4pIHtcclxuXHRcdGlmIChqd3RUb2tlbikge1xyXG5cdFx0XHRsZXQgYmFzZTY0VXJsID0gand0VG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuXHRcdFx0bGV0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKTtcclxuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge307XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9TRVJWSUNFID0gbmV3IEF1dGhTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwiZXhwb3J0IGNvbnN0IERPTUFJTiA9ICdodHRwczovL3BpenphLXRlbGUuZ2EnO1xyXG5leHBvcnQgY29uc3QgSU5HUkVESUVOVFNfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvaW5ncmVkaWVudC9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFRBR19VUkwgPSBgJHtET01BSU59L2FwaS92MS90YWcvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBVU0VSX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvbXlfaW5mb2A7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUElaWkEgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9jcmVhdGVgO1xyXG5leHBvcnQgY29uc3QgUElaWkFfTElTVCA9IGAke0RPTUFJTn0vYXBpL3YxL3BpenphL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgV1NfVElDS0VUID0gYCR7RE9NQUlOfS9hcGkvdjEvd3MvdGlja2V0YDtcclxuZXhwb3J0IGNvbnN0IFdTX1BBVEggPSAnd3NzOi8vcGl6emEtdGVsZS5nYS93cyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YWRkcmVzcz5Lb3R0YW5zLCBLb3R0YW5zIFNydC4gMSxcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis1Nzc3ODg4N1wiPnRlbC4gNTc3LTc4OC04NzwvYT5cclxuICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5QaXp6YSBNYW5hZ2VyICZjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMS0wMVwiPjIwMTg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Ly9UT0RPOiBuZWVkIGRlbGV0ZSA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwibG9naW5fX2J1dHRvbi1saW5rXCI+c2lnbiBpbjwvYT5cclxuXHRcdGNvbnN0IGlzQXV0aG9yaXplZCA9IEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKTtcclxuXHJcblx0XHRjb25zdCBsb2dpbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvbG9naW5cIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pblwiPnNpZ24gaW48L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGxvZ291dEJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvbG9nb3V0XCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tb3V0XCI+c2lnbiBvdXQ8L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHVzZXJCdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3VzZXJcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pbmZvXCI+dXNlciBpbmZvPC9hPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCByZWdpc3RyYXRpb25CdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3JlZ2lzdHJhdGlvblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLXVwXCI+c2lnbiB1cDwvYT5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImN1cnJlbnQtdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjY2xvY2tcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDItMDMgMTI6MDE6NDhcIj4xMjowMTo0ODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxvZ29cIiBocmVmPVwiIy9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjbG9nb1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNBdXRob3JpemVkID8gbG9nb3V0QnV0dG9uIDogbG9naW5CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyB1c2VyQnV0dG9uIDogcmVnaXN0cmF0aW9uQnV0dG9ufSBcclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaGVhZGVyKTtcclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5jbGFzcyBBdXRoSHR0cFNlcnZpY2Uge1xyXG5cdGdldCh1cmwpIHtcclxuXHRcdGlmICghQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vbi1hdXRob3JpemVkIHJlcXVlc3QnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtBVVRIX1NFUlZJQ0UudG9rZW59YCxcclxuXHRcdFx0XHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBvc3QodXJsLCBkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2godXJsLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBkYXRhLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBhdGNoKCkge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfSFRUUF9TRVJWSUNFID0gbmV3IEF1dGhIdHRwU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5odHRwLmpzIiwiaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGguaHR0cCc7XHJcbmltcG9ydCB7IElOR1JFRElFTlRTX1VSTCwgVEFHX1VSTCwgUElaWkFfTElTVCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFBpenphRGF0YVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0dGhpcy50YWdzID0gW107XHJcblx0XHR0aGlzLnBpenphcyA9IFtdO1xyXG5cdFx0dGhpcy5hZGRQaXp6YSA9IHRoaXMuYWRkUGl6emEuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMucmVtb3ZlUGl6emEgPSB0aGlzLnJlbW92ZVBpenphLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRhZGRQaXp6YShwaXp6YSkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR0aGlzLnBpenphcy5maW5kSW5kZXgocCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHBpenphLnV1aWQgPT09IHAudXVpZDtcclxuXHRcdFx0fSkgIT0gLTFcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLnBpenphcy51bnNoaWZ0KHBpenphKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlUGl6emEodXVpZHMpIHtcclxuXHRcdHV1aWRzLmZvckVhY2godXVpZCA9PiB7XHJcblx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5waXp6YXMuZmluZEluZGV4KHAgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB1dWlkID09PSBwLnV1aWQ7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGluZGV4ICE9IC0xKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBpenphcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRVbmFjY2VwdGVkUGl6emFzKHJlc2V0LCBsaW1pdCwgb2Zmc2V0KSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KGAke1BJWlpBX0xJU1R9P2xpbWl0PSR7bGltaXQgfHwgMTAwfSZvZmZzZXQ9JHtvZmZzZXQgfHwgMH1gKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGlmIChyZXNldCkge1xyXG5cdFx0XHRcdHRoaXMucGl6emFzID0gcmVzLnJlc3VsdHM7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5waXp6YXMgPSB0aGlzLnBpenphcy5jb25jYXQocmVzLnJlc3VsdHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldEluZ3JlZGllbnRzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChJTkdSRURJRU5UU19VUkwpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldFRhZ3MoKSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFRBR19VUkwpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMudGFncyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0cmV0dXJuIGRhdGEucmVzdWx0cztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9EQVRBID0gbmV3IFBpenphRGF0YVNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3BpenphLmRhdGEuanMiLCJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vZnJhbWV3b3JrL3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVIgPSBuZXcgUm91dGVyKHsgaG9zdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSwgcm91dGVzIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW5kZXguanMiLCJjbGFzcyBUaW1lciB7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjb252ZXJ0RGF0ZSh0aW1lKSB7XHJcblx0XHRjb25zdCBkYXRhID0gbmV3IERhdGUodGltZSk7XHJcblx0XHRjb25zdCBkYXkgPSBkYXRhLmdldERhdGUoKTtcclxuXHRcdGNvbnN0IG1vbnRoID0gZGF0YS5nZXRNb250aCgpO1xyXG5cdFx0Y29uc3QgeWVhciA9IGRhdGEuZ2V0RnVsbFllYXIoKTtcclxuXHRcdHJldHVybiBgJHtkYXl9ICR7dGhpcy5jb252ZXJ0TW91bnQobW9udGgpfSAke3llYXJ9YDtcclxuXHR9XHJcblxyXG5cdGNvbnZlcnRNb3VudChtb250aCkge1xyXG5cdFx0bGV0IHJlc3VsdDtcclxuXHRcdHN3aXRjaCAobW9udGgpIHtcclxuXHRcdGNhc2UgMDpcclxuXHRcdFx0cmVzdWx0ID0gJ0phbnVhcnknO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDE6XHJcblx0XHRcdHJlc3VsdCA9ICdGZWJydWFyeSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0cmVzdWx0ID0gJ01hcmNoJztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSAzOlxyXG5cdFx0XHRyZXN1bHQgPSAnQXByaWwnO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDQ6XHJcblx0XHRcdHJlc3VsdCA9ICdNYXknO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDU6XHJcblx0XHRcdHJlc3VsdCA9ICdKdW5lJztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSA2OlxyXG5cdFx0XHRyZXN1bHQgPSAnSnVseSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgNzpcclxuXHRcdFx0cmVzdWx0ID0gJ0F1Z3VzdCc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgODpcclxuXHRcdFx0cmVzdWx0ID0gJ1NlcHRlbWJlcic7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgOTpcclxuXHRcdFx0cmVzdWx0ID0gJ09jdG9iZXInO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDEwOlxyXG5cdFx0XHRyZXN1bHQgPSAnTm92ZW1iZXInO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDExOlxyXG5cdFx0XHRyZXN1bHQgPSAnRGVjZW1iZXInO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVElNRSA9IG5ldyBUaW1lcigpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvdGltZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0Y29uc3QgeyByb3V0ZXMsIGhvc3QgfSA9IHRoaXMucHJvcHM7XHJcblx0XHR0aGlzLmhvc3QgPSBob3N0O1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHJvdXRlcyxcclxuXHRcdFx0YWN0aXZlUm91dGU6IG51bGwsXHJcblx0XHRcdGFjdGl2ZUNvbXBvbmVudDogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVVcmxDaGFuZ2UgPSB0aGlzLmhhbmRsZVVybENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5hcHBseVJvdXRlID0gdGhpcy5hcHBseVJvdXRlLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHBhdGgoKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVVcmxDaGFuZ2UodXJsKSB7XHJcblx0XHRjb25zdCB7IHJvdXRlcywgYWN0aXZlUm91dGUgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCBuZXh0Um91dGUgPSByb3V0ZXMuZmluZCgoeyBocmVmIH0pID0+IGhyZWYgPT09IHVybCk7XHJcblx0XHRpZiAobmV4dFJvdXRlICYmIG5leHRSb3V0ZSAhPT0gYWN0aXZlUm91dGUpIHtcclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5yZWRpcmVjdFRvKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlUmVkaXJlY3QobmV4dFJvdXRlLnJlZGlyZWN0VG8pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFJvdXRlLm9uRW50ZXIpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVPbkVudGVyKG5leHRSb3V0ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYXBwbHlSb3V0ZShuZXh0Um91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVkaXJlY3QodXJsKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcclxuXHR9XHJcblxyXG5cdGhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKSB7XHJcblx0XHRjb25zdCB7IG9uRW50ZXIgfSA9IG5leHRSb3V0ZTtcclxuXHJcblx0XHRpZiAob25FbnRlci5sb2dvdXQpIHtcclxuXHRcdFx0QVVUSF9TRVJWSUNFLmNsZWFyU3RvcmFnZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9uRW50ZXJHdWFyZCA9IG9uRW50ZXIuZ3VhcmQ7XHJcblx0XHRvbkVudGVyR3VhcmQobmV4dFJvdXRlKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHJldHVybiByZXMuc3VjY2VzcyA/IHRoaXMuYXBwbHlSb3V0ZShyZXMucm91dGUpIDogdGhpcy5oYW5kbGVSZWRpcmVjdChyZXMucmVkaXJlY3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhcHBseVJvdXRlKHJvdXRlKSB7XHJcblx0XHRjb25zdCB7IENvbXBvbmVudCB9ID0gcm91dGU7XHJcblx0XHRjb25zdCB7IGFjdGl2ZUNvbXBvbmVudCB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IGNvbXBvbmVudEluc3RhbmNlID0gbmV3IENvbXBvbmVudCgpO1xyXG5cclxuXHRcdGFjdGl2ZUNvbXBvbmVudCA/IGFjdGl2ZUNvbXBvbmVudC51bm1vdW50KCkgOiBudWxsO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRhY3RpdmVSb3V0ZTogcm91dGUsXHJcblx0XHRcdGFjdGl2ZUNvbXBvbmVudDogY29tcG9uZW50SW5zdGFuY2UsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgYWN0aXZlQ29tcG9uZW50IH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0cmV0dXJuIGFjdGl2ZUNvbXBvbmVudC51cGRhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ZyYW1ld29yay9yb3V0ZXIuanMiLCJpbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyJztcclxuaW1wb3J0IE5ld1BpenphIGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlJztcclxuaW1wb3J0IHsgYXV0aEd1YXJkIH0gZnJvbSAnLi91dGlscy9hdXRoLmd1YXJkJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi91dGlscy9hdXRoJztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IEFwcCxcclxuXHRcdGhyZWY6ICcnLFxyXG5cdFx0cmVkaXJlY3RUbzogJy8nLFxyXG5cdFx0b25FbnRlcjoge1xyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJy8nLFxyXG5cdFx0b25FbnRlcjoge1xyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogTG9naW4sXHJcblx0XHRocmVmOiAnL2xvZ2luJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogUmVnaXN0cmF0aW9uLFxyXG5cdFx0aHJlZjogJy9yZWdpc3RyYXRpb24nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBVc2VyLFxyXG5cdFx0aHJlZjogJy91c2VyJyxcclxuXHRcdG9uRW50ZXI6IHtcclxuXHRcdFx0Z3VhcmQ6IGF1dGhHdWFyZCxcclxuXHRcdH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRocmVmOiAnL2xvZ291dCcsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGxvZ291dDogdHJ1ZSxcclxuXHRcdFx0Z3VhcmQ6IGF1dGhHdWFyZCxcclxuXHRcdH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IE5ld1BpenphLFxyXG5cdFx0aHJlZjogJy9jcmVhdGUnLFxyXG5cdFx0b25FbnRlcjoge1xyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcm91dGVzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2xvZ2luLmZvcm0nO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5sb2dpbkZvcm0gPSBuZXcgTG9naW5Gb3JtKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgdGhpcy5sb2dpbkZvcm0udXBkYXRlKCksIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZSc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgeyBBUFBfUk9VVEVSIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xyXG5cclxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRcdHBhc3N3b3JkOiBudWxsLFxyXG5cdFx0XHRtZXNzYWdlOiBudWxsLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2dpbicpO1xyXG5cdFx0dGhpcy5tZXNzYWdlID0gbmV3IEVycm9yTWVzc2FnZSgpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgaG9zdCA9IGV2LnRhcmdldDtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0fTtcclxuXHRcdEFVVEhfU0VSVklDRS5sb2dpblVzZXIoZGF0YSkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IG51bGwsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0XHRBUFBfUk9VVEVSLmhhbmRsZVJlZGlyZWN0KCcvJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXR1cyA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGV4dCA9IHN0YXR1cy5hbnN3ZXIuZXJyb3I7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdGUgPSB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRtZXNzYWdlOiB0ZXh0LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgbWVzc2FnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblx0XHRjb25zdCBsb2dpblN0cmluZyA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibG9naW5fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImxvZ2luX190aXRsZVwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpbi11c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJsb2dpbl9faW5wdXRcIiBpZD1cImxvZ2luLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHZhbHVlPVxyXG5cdFx0XHRcdCR7dXNlcm5hbWUgPyB1c2VybmFtZSA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJsb2dpbl9faW5wdXRcIiBpZD1cImxvZ2luLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgdmFsdWU9XHJcblx0XHRcdFx0JHtwYXNzd29yZCA/IHBhc3N3b3JkIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsb2dpbl9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5GcmFnbWVudCA9IHRvSHRtbChsb2dpblN0cmluZyk7XHJcblxyXG5cdFx0aWYgKG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5tZXNzYWdlLnVwZGF0ZSh7IHRleHQ6IG1lc3NhZ2UgfSk7XHJcblx0XHRcdGxvZ2luRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19idXR0b24nKS5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxvZ2luRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cdFx0cmV0dXJuIGxvZ2luRnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRXJyb3JNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZXJyb3JfX2NvbnRhaW5lcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fdGV4dCcpO1xyXG5cdFx0ZXJyb3IuaW5uZXJIVE1MID0gdGV4dDtcclxuXHRcdHJldHVybiBlcnJvcjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgUGl6emFMaXN0IGZyb20gJy4uL2xpc3QvbGlzdCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ1JFQVRFX0RBVEEgfSBmcm9tICcuLi8uLi91dGlscy9waXp6YS5kYXRhJztcclxuaW1wb3J0IHsgV1MgfSBmcm9tICcuLi8uLi91dGlscy93cyc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdhcHAnKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5saXN0ID0gbmV3IFBpenphTGlzdCgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7XHJcblx0XHRXUy5lc3RhYmxpc2goKTtcclxuXHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlQWRkID0gdGhpcy5zdWJzY3JpYmUoe1xyXG5cdFx0XHRldmVudDogJ0NSRUFURV9QSVpaQScsXHJcblx0XHRcdG1ldGhvZDogQ1JFQVRFX0RBVEEuYWRkUGl6emEsXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlUmVtb3ZlID0gdGhpcy5zdWJzY3JpYmUoe1xyXG5cdFx0XHRldmVudDogJ0FDQ0VQVF9QSVpaQScsXHJcblx0XHRcdG1ldGhvZDogQ1JFQVRFX0RBVEEucmVtb3ZlUGl6emEsXHJcblx0XHR9KTtcclxuXHJcblx0XHRDUkVBVEVfREFUQS5nZXRVbmFjY2VwdGVkUGl6emFzKHRydWUsIDEyLCAwKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3Vic2NyaWJlKHBhcmFtKSB7XHJcblx0XHRsZXQgeyBldmVudCwgbWV0aG9kIH0gPSBwYXJhbTtcclxuXHJcblx0XHRjb25zdCB1bnN1YnNjcmliZSA9IFdTLnN1YnNjcmliZShldmVudCwgZGF0YSA9PiB7XHJcblx0XHRcdG1ldGhvZChkYXRhKTtcclxuXHRcdFx0dGhpcy51cGRhdGVMaXN0KCk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB1bnN1YnNjcmliZTtcclxuXHR9XHJcblxyXG5cdG9uQmVmb3JlVW5tb3VudCgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmVBZGQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmVSZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUxpc3QoKSB7XHJcblx0XHR0aGlzLmxpc3QudXBkYXRlKHtcclxuXHRcdFx0cGl6emFzOiBDUkVBVEVfREFUQS5waXp6YXMsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuXHRcdDxtYWluIGNsYXNzPVwibWFpbiBwaXp6YXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwaXp6YXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMvY3JlYXRlXCIgY2xhc3M9XCJidXR0b24gYWRkLWxpbmtcIj5hZGQgcGl6emE8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuXHRcdGA7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyRnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lckZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waXp6YXNfX2NvbnRhaW5lcicpO1xyXG5cclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGhpcy5saXN0LnVwZGF0ZSgpKTtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBjb250YWluZXJGcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUSU1FIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XHJcblxyXG5jbGFzcyBQaXp6YUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQaXp6YShwaXp6YXMpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuXHRcdGNvbnN0IGxpc3QgPSBwaXp6YSA9PiB7XHJcblx0XHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGl6emFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwaXp6YV9faW1nXCIgc3JjPVwiJHtET01BSU59LyR7cGl6emEuaW1nX3VybH1cIiBhbHQ9XCIke3BpenphLm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwaXp6YV9fbmFtZVwiPiR7cGl6emEubmFtZX08L2gyPlxyXG5cdFx0XHRcdDx0aW1lIGNsYXNzPVwicGl6emFfX3RpbWVcIiBkYXRldGltZT1cIiR7VElNRS5jb252ZXJ0RGF0ZShwaXp6YS50aW1lX3ByZXBhcmVkKX1cIj4ke1RJTUUuY29udmVydERhdGUocGl6emEudGltZV9wcmVwYXJlZCl9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaXp6YV9fcXVldWUtbnVtYmVyXCI+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2V0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmV0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjA3OjAwXCI+NzwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cGl6emEucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXHJcbiAgICAgICAgICAgIGA7XHJcblx0XHR9O1xyXG5cclxuXHRcdHBpenphcy5mb3JFYWNoKHBpenphID0+IHtcclxuXHRcdFx0Y29udGFpbmVyLmlubmVySFRNTCArPSBsaXN0KHBpenphKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgXHQ8L2Rpdj5cclxuXHRcdGA7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyRnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lckZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19jb250YWluZXInKTtcclxuXHJcblx0XHRpZiAodGhpcy5wcm9wcykge1xyXG5cdFx0XHRjb25zdCB7IHBpenphcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRcdGlmIChwaXp6YXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0Y29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQodGhpcy5jcmVhdGVQaXp6YShwaXp6YXMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBpenphTGlzdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwiaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGguaHR0cCc7XHJcbmltcG9ydCB7IFdTX1RJQ0tFVCwgV1NfUEFUSCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi9ldmVudC5lbWl0dGVyJztcclxuXHJcbmNsYXNzIFdzIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMud3MgPSBudWxsO1xyXG5cdFx0dGhpcy5fZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldFRpY2tldCgpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoV1NfVElDS0VUKS50aGVuKHJlcyA9PiByZXMpO1xyXG5cdH1cclxuXHJcblx0c3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcclxuXHRcdHJldHVybiB0aGlzLl9lbWl0dGVyLnN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKTtcclxuXHR9XHJcblxyXG5cdF9vbm1lc3NhZ2UoZGF0YSkge1xyXG5cdFx0Y29uc3QgZXZlbnQgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cdFx0dGhpcy5fZW1pdHRlci5lbWl0KGV2ZW50LmV2ZW50X25hbWUsIGV2ZW50LmRhdGEpO1xyXG5cdH1cclxuXHJcblx0X29uY2xvc2UoZSkge1xyXG5cdFx0aWYgKGUuY29kZSA9PT0gNDAwMSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTG9naW4gcGx6Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTG9zdCBjb25uZWN0aW9uIC4uLiByZWNvbm5lY3QnKTtcclxuXHRcdFx0c2V0VGltZW91dCh0aGlzLl9lc3RhYmxpc2gsIDIwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXN0YWJsaXNoKCkge1xyXG5cdFx0dGhpcy5nZXRUaWNrZXQoKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLndzID0gbmV3IFdlYlNvY2tldChgJHtXU19QQVRIfT9rZXk9JHtkYXRhLnRva2VufWApO1xyXG5cdFx0XHR0aGlzLndzLm9ub3BlbiA9IGNvbnNvbGUubG9nO1xyXG5cdFx0XHR0aGlzLndzLm9ubWVzc2FnZSA9IGUgPT4gdGhpcy5fb25tZXNzYWdlKGUuZGF0YSk7XHJcblx0XHRcdHRoaXMud3Mub25jbG9zZSA9IGUgPT4gdGhpcy5fb25jbG9zZShlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdTID0gbmV3IFdzKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy93cy5qcyIsImV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5ldmVudHMgPSB7fTtcclxuXHR9XHJcblxyXG5cdGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcblx0XHRjb25zdCBldmVudCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XHJcblx0XHRpZiAoZXZlbnQpIHtcclxuXHRcdFx0ZXZlbnQuZm9yRWFjaChmbiA9PiB7XHJcblx0XHRcdFx0Zm4uY2FsbChudWxsLCBkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcblx0XHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnRGbiA9PiBmbiAhPT0gZXZlbnRGbik7XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvZXZlbnQuZW1pdHRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4vcmVnaXN0cmF0aW9uLmZvcm0nO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIHRoaXMucmVnaXN0cmF0aW9uLnVwZGF0ZSgpLCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHN0b3JlczogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb24nKTtcclxuXHRcdHRoaXMuZ2V0U3RvcmVzKCk7XHJcblx0fVxyXG5cclxuXHRnZXRTdG9yZXMoKSB7XHJcblx0XHRBVVRIX1NFUlZJQ0Uuc3RvcmVJbmZvKCkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLnN0YXRlLnN0b3JlcyA9IHJlc3VsdDtcclxuXHRcdFx0dGhpcy51cGRhdGVTdGF0ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VybmFtZTogZXYudGFyZ2V0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmQ6IGV2LnRhcmdldC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkX3JlcGVhdDogZXYudGFyZ2V0LnBhc3N3b3JkX3JlcGVhdC52YWx1ZS50cmltKCksXHJcblx0XHRcdGVtYWlsOiBldi50YXJnZXQuZW1haWwudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRzdG9yZV9pZDogcGFyc2VJbnQoZXYudGFyZ2V0LnN0b3JlLm9wdGlvbnNbZXYudGFyZ2V0LnN0b3JlLnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQuaWQpLFxyXG5cdFx0XHRzdG9yZV9wYXNzd29yZDogZXYudGFyZ2V0LnN0b3JlX3Bhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdH07XHJcblx0XHRBVVRIX1NFUlZJQ0UucmVnaXN0ZXJVc2VyKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJyZWdpc3RyYXRpb25fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fdGl0bGVcIj5yZWdpc3RyYXRpb24gZm9ybTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVuaXF1ZS4gTWluIGxlbmd0aCAyIGNoYXJzLCBtYXggLSAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCI+UmUtZW50ZXIgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX3JlcGVhdFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIG1hdGNoIHdpdGggcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiPlN0b3JlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaGlkZGVuIGlkPVwicmVnaXN0cmF0aW9uLXN0b3JlXCIgbmFtZT1cInN0b3JlXCI+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCI+U3RvcmUgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJzdG9yZV9wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIHN0b3JlIHBhc3N3b3JkLiBNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gcmVnaXN0cmF0aW9uX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChyZWdpc3RyYXRpb24pO1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbl9fc2VsZWN0Jyk7XHJcblxyXG5cdFx0aWYgKHN0b3Jlcykge1xyXG5cdFx0XHRzZWxlY3QuaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cdFx0XHRcdG9wdGlvbi50ZXh0ID0gZWxlbWVudC5uYW1lO1xyXG5cdFx0XHRcdG9wdGlvbi5kYXRhc2V0LmlkID0gZWxlbWVudC5pZDtcclxuXHRcdFx0XHRzZWxlY3QuYWRkKG9wdGlvbik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5odHRwJztcclxuaW1wb3J0IHsgVVNFUl9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUSU1FIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0aXNWYWxpZDogZmFsc2UsXHJcblx0XHRcdHVzZXJuYW1lOiBudWxsLFxyXG5cdFx0XHRlbWFpbDogbnVsbCxcclxuXHRcdFx0Y3JlYXRlZDogbnVsbCxcclxuXHRcdFx0dmlzaXRlZDogbnVsbCxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCd1c2VyLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuZ2V0VXNlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0VXNlcigpIHtcclxuXHRcdEFVVEhfSFRUUF9TRVJWSUNFLmdldChVU0VSX1VSTCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHtcclxuXHRcdFx0XHR1c2VybmFtZTogcmVzLnVzZXJuYW1lLFxyXG5cdFx0XHRcdGVtYWlsOiByZXMuZW1haWwsXHJcblx0XHRcdFx0Y3JlYXRlZDogcmVzLmNyZWF0ZWRfYXQsXHJcblx0XHRcdFx0dmlzaXRlZDogcmVzLmxhc3RfbG9naW4sXHJcblx0XHRcdFx0aXNWYWxpZDogdHJ1ZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBjcmVhdGVkLCB2aXNpdGVkLCBpc1ZhbGlkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuXHRcdFx0PG1haW4gY2xhc3M9J3VzZXInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9J2NvbnRhaW5lciB1c2VyX19jb250YWluZXInPjwvZGl2PlxyXG5cdFx0XHQ8L21haW4+YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lckZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuXHJcblx0XHRpZiAoaXNWYWxpZCkge1xyXG5cdFx0XHRjb25zdCB1c2VyU3RyaW5nID0gYFxyXG5cdFx0XHRcdDx1bCBjbGFzcz0ndXNlcl9faW5mbyc+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9J3VzZXJfX25hbWUnPlVzZXI6IFxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke3VzZXJuYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9J3VzZXJfX21haWwnPkUtbWFpbDogXHJcblx0XHRcdFx0XHRcdDxzcGFuPiR7ZW1haWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz0ndXNlcl9fY3JlYXRlZCc+Q3JlYXRlZDpcclxuXHRcdFx0XHRcdFx0PHNwYW4+JHtUSU1FLmNvbnZlcnREYXRlKGNyZWF0ZWQpfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9J3VzZXJfX3Zpc2l0ZWQnPkxhc3Qgc2VlbjpcclxuXHRcdFx0XHRcdFx0PHNwYW4+JHtUSU1FLmNvbnZlcnREYXRlKHZpc2l0ZWQpfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PC91bD5gO1xyXG5cdFx0XHRjb25zdCB1c2VyRnJhZ21lbnQgPSB0b0h0bWwodXNlclN0cmluZyk7XHJcblx0XHRcdGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHVzZXJGcmFnbWVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgY29udGFpbmVyRnJhZ21lbnQsIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXIvdXNlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCB7IENSRUFURV9EQVRBIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGl6emEuZGF0YSc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgRE9NQUlOLCBDUkVBVEVfUElaWkEgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEUkFXIH0gZnJvbSAnLi9kcmF3JztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmh0dHAnO1xyXG5pbXBvcnQgeyBQcmljZSB9IGZyb20gJy4uL3ByaWNlL3ByaWNlJztcclxuXHJcbmNsYXNzIE5ld1BpenphIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5jb25kaXRpb24gPSB7XHJcblx0XHRcdHNpemU6ICc2MCcsXHJcblx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0XHRpbmdyZWRpZW50czogW10sXHJcblx0XHRcdHRhZ3M6IFtdLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jb250YWluZXInKTtcclxuXHRcdHRoaXMucHJpY2UgPSBuZXcgUHJpY2UoKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KCkge1xyXG5cdFx0UHJvbWlzZS5hbGwoW0NSRUFURV9EQVRBLmdldEluZ3JlZGllbnRzKCksIENSRUFURV9EQVRBLmdldFRhZ3MoKV0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19vcHRpb25zJyk7XHJcblx0XHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX2NhbnZhcycpO1xyXG5cclxuXHRcdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHRcdFx0Y29uc3QgYnV0dG9uc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzPSdjcmVhdGVfX2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICBcdDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1jYW5jZWwnIHR5cGU9J2J1dHRvbic+Y2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgXHQ8YnV0dG9uIGNsYXNzPSdidXR0b24gY3JlYXRlX19idXR0b24tc2VuZCcgdHlwZT0nc3VibWl0Jz5jcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgXHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbnNGcmFnbWVudCA9IHRvSHRtbChidXR0b25zU3RyaW5nKTtcclxuXHRcdFx0Y29uc3QgYnV0dG9ucyA9IGJ1dHRvbnNGcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19idXR0b24nKTtcclxuXHRcdFx0YnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZChmb3JtKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmQodGhpcy5yZW5kZXJGb3JtKCkpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZCh0aGlzLnJlbmRlckluZ3JlZGllbnRzKENSRUFURV9EQVRBLmluZ3JlZGllbnRzKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kKHRoaXMucmVuZGVyVGFncyhDUkVBVEVfREFUQS50YWdzKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kKHRoaXMucHJpY2UudXBkYXRlKHsgY29uZGl0aW9uOiB0aGlzLmNvbmRpdGlvbiB9KSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kKGJ1dHRvbnNGcmFnbWVudCk7XHJcblxyXG5cdFx0XHREUkFXLm9uSW5pdCh7XHJcblx0XHRcdFx0aG9zdDogY2FudmFzLFxyXG5cdFx0XHRcdGluZ3JlZGllbnRzOiBDUkVBVEVfREFUQS5pbmdyZWRpZW50cyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHsgc2l6ZSwgaW5ncmVkaWVudHMsIHRhZ3MgfSA9IHRoaXMuY29uZGl0aW9uO1xyXG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcblx0XHRjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fbmFtZS12YWx1ZScpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19kZXNjcmlwdGlvbicpO1xyXG5cclxuXHRcdGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmZC5hcHBlbmQoJ25hbWUnLCBuYW1lLnZhbHVlKTtcclxuXHRcdGZkLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbi52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ3NpemUnLCBzaXplKTtcclxuXHRcdGZkLmFwcGVuZCgnaW5ncmVkaWVudHMnLCBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50cykpO1xyXG5cdFx0ZmQuYXBwZW5kKCd0YWdzJywgSlNPTi5zdHJpbmdpZnkodGFncykpO1xyXG5cclxuXHRcdGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcblx0XHRcdGZkLmFwcGVuZCgnaW1hZ2UnLCBibG9iLCAnbmV3X2ltYWdlLnBuZycpO1xyXG5cdFx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UucG9zdChDUkVBVEVfUElaWkEsIGZkKS50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQ2xpY2soZXYpIHtcclxuXHRcdGlmIChldi50YXJnZXQuZGF0YXNldC5mbGFnID09PSAnc2l6ZScpIHtcclxuXHRcdFx0Y29uc3Qgc2l6ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLWZsYWc9XCJzaXplXCJdJyk7XHJcblx0XHRcdHNpemVzLmZvckVhY2goc2l6ZSA9PiB7XHJcblx0XHRcdFx0aWYgKHNpemUuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3U2l6ZSA9IHNpemUudmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLmNvbmRpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZGl0aW9uLCB7XHJcblx0XHRcdFx0XHRcdHNpemU6IG5ld1NpemUsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCB7IHNpemUsIG9wdGlvbnMgfSA9IHRoaXMuY29uZGl0aW9uO1xyXG5cdFx0XHREUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpO1xyXG5cdFx0XHR0aGlzLnByaWNlLnVwZGF0ZSh7IGNvbmRpdGlvbjogdGhpcy5jb25kaXRpb24gfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGV2LnRhcmdldC5kYXRhc2V0LmZsYWcgPT09ICdpbmdyZWRpZW50Jykge1xyXG5cdFx0XHRjb25zdCBuZXdPcHRpb25zID0gW107XHJcblx0XHRcdGNvbnN0IG5ld0luZ3JlZGllbnRzID0gW107XHJcblx0XHRcdGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbZGF0YS1mbGFnPVwiaW5ncmVkaWVudFwiXScpO1xyXG5cdFx0XHRpbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xyXG5cdFx0XHRcdGlmIChpbmdyZWRpZW50LmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdG5ld09wdGlvbnMucHVzaChpbmdyZWRpZW50LnZhbHVlKTtcclxuXHRcdFx0XHRcdG5ld0luZ3JlZGllbnRzLnB1c2gocGFyc2VJbnQoaW5ncmVkaWVudC5kYXRhc2V0LmlkKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuY29uZGl0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25kaXRpb24sIHtcclxuXHRcdFx0XHRvcHRpb25zOiBuZXdPcHRpb25zLFxyXG5cdFx0XHRcdGluZ3JlZGllbnRzOiBuZXdJbmdyZWRpZW50cyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCB7IHNpemUsIG9wdGlvbnMgfSA9IHRoaXMuY29uZGl0aW9uO1xyXG5cdFx0XHREUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpO1xyXG5cdFx0XHR0aGlzLnByaWNlLnVwZGF0ZSh7IGNvbmRpdGlvbjogdGhpcy5jb25kaXRpb24gfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGV2LnRhcmdldC5kYXRhc2V0LmZsYWcgPT09ICd0YWcnKSB7XHJcblx0XHRcdGNvbnN0IG5ld1RhZ3MgPSBbXTtcclxuXHRcdFx0Y29uc3QgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2RhdGEtZmxhZz1cInRhZ1wiXScpO1xyXG5cdFx0XHR0YWdzLmZvckVhY2godGFnID0+IHtcclxuXHRcdFx0XHRpZiAodGFnLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdG5ld1RhZ3MucHVzaChwYXJzZUludCh0YWcuZGF0YXNldC5pZCkpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5jb25kaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmRpdGlvbiwge1xyXG5cdFx0XHRcdFx0dGFnczogbmV3VGFncyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGV2LnRhcmdldC5jbGFzc05hbWUgPT09ICdidXR0b24gY3JlYXRlX19idXR0b24tY2FuY2VsJykge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJGb3JtKCkge1xyXG5cdFx0Y29uc3QgZm9ybVN0cmluZyA9IGBcclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX25hbWUnPlBpenphIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyByZXF1aXJlZCBtaW49JzMnIG1heD0nMjQnIGNsYXNzPSdjcmVhdGVfX25hbWUtdmFsdWUnPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5EZXNjcmlwdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPSdjcmVhdGVfX2Rlc2NyaXB0aW9uJz48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX19zaXplLXRpdGxlJz5TaXplPC9zcGFuPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MzA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nMzAnIGRhdGEtZmxhZz0nc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tc21hbGxcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj40NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSc0NScgZGF0YS1mbGFnPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1tZWRpdW1cIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj42MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSc2MCcgZGF0YS1mbGFnPSdzaXplJyBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLWxhcmdlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPiAgICBcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLXRpdGxlJz5JbmdyZWRpZW50czxzcGFuPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZm9ybUZyYWdtZW50ID0gdG9IdG1sKGZvcm1TdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZvcm1GcmFnbWVudDtcclxuXHR9XHJcblxyXG5cdHJlbmRlckluZ3JlZGllbnRzKGRhdGEpIHtcclxuXHRcdGNvbnN0IGluZ3JlZGllbnRzU3RyaW5nID0gYCAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuXHRcdGh0bWwgKz0gYFxyXG4gICAgICAgIFx0PGxhYmVsIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLWl0ZW0nPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pbnB1dCcgdHlwZT0nY2hlY2tib3gnIHZhbHVlPScke2RhdGEubmFtZX0nIGRhdGEtZmxhZz0naW5ncmVkaWVudCcgZGF0YS1pZD0nJHtkYXRhLmlkfSc+XHJcblx0XHRcdFx0PGltZyBzcmM9JyR7RE9NQUlOfS8ke2RhdGEuaW1hZ2VfdXJsfScgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnIHRpdGxlPScke2RhdGEuZGVzY3JpcHRpb259JyBkYXRhLW5hbWU9J2luZ3JlZGllbnQnPlxyXG4gICAgICAgICAgICBcdDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICBcdDwvbGFiZWw+YDtcclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH0sICcnKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX190YWdzLXRpdGxlJz5UYWc8c3Bhbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgaW5ncmVkaWVudHNGcmFnbWVudCA9IHRvSHRtbChpbmdyZWRpZW50c1N0cmluZyk7XHJcblx0XHRyZXR1cm4gaW5ncmVkaWVudHNGcmFnbWVudDtcclxuXHR9XHJcblxyXG5cdHJlbmRlclRhZ3MoZGF0YSkge1xyXG5cdFx0Y29uc3QgdGFnc1N0cmluZyA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX3RhZ3MnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuXHRcdGh0bWwgKz0gYFxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX190YWdzLWl0ZW0nIGZvcj0ke2RhdGEubmFtZX0+XHJcblx0XHRcdDxpbnB1dCB0eXBlPSdjaGVja2JveCcgaWQ9JHtkYXRhLm5hbWV9IGRhdGEtaWQ9JHtkYXRhLmlkfSBkYXRhLWZsYWc9J3RhZyc+XHJcblx0XHRcdDxpIGNsYXNzPVwiZmFyIGZhLXNxdWFyZSBjcmVhdGVfX3RhZ3MtaWNvbiBjcmVhdGVfX3RhZ3MtaWNvbi0tdW5jaGVja2VkXCI+PC9pPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhciBmYS1jaGVjay1zcXVhcmUgY3JlYXRlX190YWdzLWljb24gY3JlYXRlX190YWdzLWljb24tLWNoZWNrZWRcIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH0sICcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCB0YWdzRnJhZ21lbnQgPSB0b0h0bWwodGFnc1N0cmluZyk7XHJcblx0XHRyZXR1cm4gdGFnc0ZyYWdtZW50O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzcz0nY3JlYXRlJyBpZD0nY3JlYXRlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lciBjcmVhdGVfX2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3M9J2NyZWF0ZV9fdGl0bGUnPkNyZWF0ZSBQaXp6YTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fY2FudmFzJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fb3B0aW9ucyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyRnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBjb250YWluZXJGcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UGl6emE7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNsYXNzIERyYXcge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5jcnVzdF9waXp6YSA9ICdodHRwczovL3BpenphLXRlbGUuZ2Evc3RhdGljL2ltYWdlcy9waXp6YS5wbmcnO1xyXG5cdFx0dGhpcy5fbG9hZEltYWdlID0gdGhpcy5fbG9hZEltYWdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoZGF0YSkge1xyXG5cdFx0dGhpcy5ob3N0ID0gZGF0YS5ob3N0O1xyXG5cdFx0dGhpcy5zaXplID0gJzYwJztcclxuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHR0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblx0XHR0aGlzLmNhbnZhc1dpZHRoID0gMzIwO1xyXG5cdFx0dGhpcy5jYW52YXNIZWlnaHQgPSAzMjA7XHJcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5pbmdyZWRpZW50cztcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLnNwcml0ZXMgPSB7fTtcclxuXHRcdHRoaXMubGFzdE9wdGlvbnMgPSBbXTtcclxuXHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sID0gW107XHJcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzV2lkdGg7XHJcblx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhc0hlaWdodDtcclxuXHRcdHRoaXMuX2xvYWRSZXNvdXJjZXMoKS50aGVuKHJlc291cmNlcyA9PiB7XHJcblx0XHRcdHJlc291cmNlcy5mb3JFYWNoKHJlc291cmNlID0+ICh0aGlzLmltYWdlc1tyZXNvdXJjZS5uYW1lXSA9IHJlc291cmNlLmltYWdlKSk7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQodGhpcy5jYW52YXMpO1xyXG5cdFx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfc3RhcnRTZXQoKSB7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sID0gW107XHJcblx0XHQvLyBsZXQgcGl6emEgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzWydwaXp6YSddLCAxNjAsIDE2MCwgMzAwLCAzMDApO1xyXG5cdFx0bGV0IHBpenphID0gbmV3IFNwcml0ZShcclxuXHRcdFx0dGhpcy5pbWFnZXNbJ3BpenphJ10sXHJcblx0XHRcdDE2MCxcclxuXHRcdFx0MTYwLFxyXG5cdFx0XHQzMDAgKiBgJHtwYXJzZUludCh0aGlzLnNpemUpfWAgLyA2MCxcclxuXHRcdFx0MzAwICogYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gIC8gNjBcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNwcml0ZXNbJ3BpenphJ10gPSBwaXp6YTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wucHVzaChwaXp6YSk7XHJcblx0XHR0aGlzLl9kcmF3KCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVDbGljayhvcHRpb25zLCBzaXplKSB7XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA9PSB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbGVtID0+IHtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbGVtLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoIDwgdGhpcy5idWZmZXIubGVuZ3RoKSB7XHJcblx0XHRcdGxldCBwcmVCdWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5sYXN0T3B0aW9ucyA9IFtdO1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdHRoaXMubGFzdE9wdGlvbnMucHVzaChlbCk7XHJcblx0XHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbGVtID0+IHtcclxuXHRcdFx0XHRcdGlmIChlbGVtLmlkID09PSBlbCkge1xyXG5cdFx0XHRcdFx0XHRwcmVCdWZmZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IGVsZW0uaWQsXHJcblx0XHRcdFx0XHRcdFx0c3ByaXRlczogZWxlbS5zcHJpdGVzLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWxlbS5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZWxlbS5zcHJpdGVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmNvbmNhdChwcmVCdWZmZXIpO1xyXG5cdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdE9wdGlvbnMuaW5jbHVkZXMoZWwpKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubGFzdE9wdGlvbnMucHVzaChlbCk7XHJcblx0XHRcdFx0XHR0aGlzLl9nZW5lcmF0ZVNwcml0ZShlbCwgMTApO1xyXG5cdFx0XHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGVsZW0uc3ByaXRlcyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X2dlbmVyYXRlU3ByaXRlKG5hbWUsIGNvdW50KSB7XHJcblx0XHRjb25zdCBzcHJpdGVzID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcblx0XHRcdGxldCBpbmdyZWRpZW50ID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1tgJHtuYW1lfWBdLCBSQU5ET00oNzAsIDI1MCksIFJBTkRPTSg3MCwgMjUwKSk7XHJcblx0XHRcdHNwcml0ZXMucHVzaChpbmdyZWRpZW50KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYnVmZmVyLnB1c2goe1xyXG5cdFx0XHRpZDogbmFtZSxcclxuXHRcdFx0c3ByaXRlczogc3ByaXRlcyxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X2RyYXcoKSB7XHJcblx0XHR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbC5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuZHJhdyh0aGlzLmN0eCkpO1xyXG5cdH1cclxuXHJcblx0X2xvYWRSZXNvdXJjZXMoKSB7XHJcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHRcdHByb21pc2VzLnB1c2godGhpcy5fbG9hZEltYWdlKCdwaXp6YScsIHRoaXMuY3J1c3RfcGl6emEpKTtcclxuXHRcdHByb21pc2VzID0gcHJvbWlzZXMuY29uY2F0KFxyXG5cdFx0XHR0aGlzLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IHtcclxuXHRcdFx0XHRsZXQgaW5ncl91cmwgPSBgJHtET01BSU59LyR7aW5ncmVkaWVudC5pbWFnZV91cmx9YDtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbG9hZEltYWdlKGluZ3JlZGllbnQubmFtZSwgaW5ncl91cmwpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0fVxyXG5cclxuXHRfbG9hZEltYWdlKG5hbWUsIHVybCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0aW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcclxuXHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xyXG5cdFx0XHRpbWFnZS53aWR0aCA9IDIwO1xyXG5cdFx0XHRpbWFnZS5oZWlnaHQgPSAyMDtcclxuXHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh7IG5hbWUsIGltYWdlIH0pO1xyXG5cdFx0XHRpbWFnZS5vbmVycm9yID0gZSA9PiByZWplY3QoZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEUkFXID0gbmV3IERyYXcoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuXHRjb25zdHJ1Y3RvcihpbWFnZSwgY3gsIGN5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHR0aGlzLnggPSAwO1xyXG5cdFx0dGhpcy55ID0gMDtcclxuXHRcdHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmltYWdlLndpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5pbWFnZS5oZWlnaHQ7XHJcblx0XHR0aGlzLmN4ID0gY3ggfHwgMDtcclxuXHRcdHRoaXMuY3kgPSBjeSB8fCAwO1xyXG5cdH1cclxuXHRnZXQgY3goKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnggKyB0aGlzLndpZHRoICogMC41KTtcclxuXHR9XHJcblxyXG5cdGdldCBjeSgpIHtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRoaXMueSArIHRoaXMuaGVpZ2h0ICogMC41KTtcclxuXHR9XHJcblxyXG5cdHNldCBjeCh2YWx1ZSkge1xyXG5cdFx0dGhpcy54ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMud2lkdGggKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0c2V0IGN5KHZhbHVlKSB7XHJcblx0XHR0aGlzLnkgPSBNYXRoLnJvdW5kKHZhbHVlIC0gdGhpcy5oZWlnaHQgKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhjdHgpIHtcclxuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IENSRUFURV9EQVRBIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGl6emEuZGF0YSc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmljZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XHJcblx0fVxyXG5cclxuXHRjYWxjUHJpY2UoY29uZGl0aW9uKSB7XHJcblx0XHRjb25zdCBkYXRhID0gQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHM7XHJcblx0XHRjb25zdCB7IHNpemUsIGluZ3JlZGllbnRzIH0gPSBjb25kaXRpb247XHJcblx0XHRsZXQgcHJpY2UgPSAnMC4wMCc7XHJcblxyXG5cdFx0aWYgKGluZ3JlZGllbnRzLmxlbmd0aCAhPT0gMCkge1xyXG5cdFx0XHRjb25zdCBzdW0gPSBbXTtcclxuXHRcdFx0aW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcclxuXHRcdFx0XHRzdW0ucHVzaChkYXRhW2luZ3JlZGllbnQgLSAxXS5wcmljZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRwcmljZSA9IHN1bVxyXG5cdFx0XHRcdC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBwcmV2ICsgY3VycjtcclxuXHRcdFx0XHR9LCBzaXplIC8gNSlcclxuXHRcdFx0XHQudG9GaXhlZCgyKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcHJpY2U7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGNvbmRpdGlvbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBwcmljZVN0cmluZyA9IGBcclxuICAgICAgICAgICAgPHNwYW4+UHJpY2U6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ncHJpY2VfX2Ftb3VudCc+JCAke3RoaXMuY2FsY1ByaWNlKGNvbmRpdGlvbil9PC9zcGFuPlxyXG5cdCAgICBgO1xyXG5cdFx0Y29uc3QgcHJpY2VGcmFnbWVudCA9IHRvSHRtbChwcmljZVN0cmluZyk7XHJcblx0XHRyZXR1cm4gcHJpY2VGcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJpY2UvcHJpY2UuanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoR3VhcmQgPSBwYXJhbSA9PiB7XHJcblx0cmV0dXJuIEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKVxyXG5cdFx0PyBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCByb3V0ZTogcGFyYW0gfSlcclxuXHRcdDogUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogZmFsc2UsIHJlZGlyZWN0OiAnL2xvZ2luJyB9KTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguZ3VhcmQuanMiXSwic291cmNlUm9vdCI6IiJ9