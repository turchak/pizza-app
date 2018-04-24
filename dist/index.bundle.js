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
				var buttonsString = '\n                    <div class=\'create__button\'>\n                        <button class=\'button create__button-cancel\' type=\'button\'>cancel</button>\n                        <button class=\'button create__button-send\' type=\'submit\'>create</button>\n                    </div>\n                ';
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
			var formString = '\n        <label>\n            <span class=\'create__name\'>Pizza Name</span>\n            <input type=\'text\' name=\'name\' required min=\'3\' max=\'24\' class=\'create__name-value\'>\n        </label>\n        <label>\n            <span>Description</span>\n            <textarea class=\'create__description\'></textarea>\n        </label>\n        <label class=\'create__size\'>\n            <span class=\'create__size-title\'>Size</span>\n            <label class=\'create__size-option\'>\n                <span>30</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'30\' data-flag=\'size\'>\n                <i class="fas fa-circle create__size-option--small"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>45</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'45\' data-flag=\'size\'>\n                <i class="fas fa-circle create__size-option--medium"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>60</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'60\' data-flag=\'size\' checked>\n                <i class="fas fa-circle create__size-option--large"></i>\n            </label>    \n        </label>\n            <span class=\'create__ingredients-title\'>Ingredients<span>\n        ';

			var form = (0, _utils.toHtml)(formString);
			return form;
		}
	}, {
		key: 'renderIngredients',
		value: function renderIngredients(data) {
			var ingredientsString = '   \n        <div class=\'create__ingredients\'>' + data.reduce(function (html, data) {
				html += '\n        <label class=\'create__ingredients-item\'>\n\t\t\t<input class=\'create__ingredients-input\' type=\'checkbox\' value=\'' + data.name + '\' data-flag=\'ingredient\' data-id=\'' + data.id + '\'>\n\t\t\t<img src=\'' + _constants.DOMAIN + '/' + data.image_url + '\' class=\'create__ingredients\' title=\'' + data.description + '\'\n\t\t\tdata-name=\'ingredient\'>\n            <span>' + data.name + '</span>\n        </label>';
				return html;
			}, '') + '\n        </div>\n        \t<span class=\'create__tags-title\'>Tag<span>\n        ';
			var fragment = (0, _utils.toHtml)(ingredientsString);
			return fragment;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjVkOGZhODVhMjVhMDZiOGQ4YTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3BpenphLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy90aW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2V2ZW50LmVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wcmljZS9wcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaG9zdCIsIm9uSW5pdCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJjb25zb2xlIiwibG9nIiwib25CZWZvcmVVbm1vdW50IiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJpbm5lckhUTUwiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0b0h0bWwiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0cmluZyIsImNvbnRlbnQiLCJSQU5ET00iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJBdXRoU2VydmljZSIsIl90b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfY2xhaW1zIiwiSlNPTiIsInBhcnNlIiwibG9naW5VcmwiLCJzdG9yZVVybCIsImNyZWF0ZVVybCIsInRva2VuIiwidG9rZW5Jc05vdEV4cGlyZWQiLCJjbGVhclN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiY2xhaW1zIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm9rIiwiYW5zd2VyIiwicGFyc2VKd3RDbGFpbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YXR1cyIsInJlamVjdCIsImp3dFRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsInNldEl0ZW0iLCJBVVRIX1NFUlZJQ0UiLCJET01BSU4iLCJJTkdSRURJRU5UU19VUkwiLCJUQUdfVVJMIiwiVVNFUl9VUkwiLCJDUkVBVEVfUElaWkEiLCJQSVpaQV9MSVNUIiwiV1NfVElDS0VUIiwiV1NfUEFUSCIsIkZvb3RlciIsImNsYXNzTGlzdCIsImFkZCIsIkhlYWRlciIsImlzQXV0aG9yaXplZCIsImxvZ2luQnV0dG9uIiwibG9nb3V0QnV0dG9uIiwidXNlckJ1dHRvbiIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsImhlYWRlciIsImZyYWdtZW50IiwiQXV0aEh0dHBTZXJ2aWNlIiwidXJsIiwiRXJyb3IiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiQVVUSF9IVFRQX1NFUlZJQ0UiLCJQaXp6YURhdGFTZXJ2aWNlIiwiaW5ncmVkaWVudHMiLCJ0YWdzIiwicGl6emFzIiwiYWRkUGl6emEiLCJiaW5kIiwicmVtb3ZlUGl6emEiLCJwaXp6YSIsImZpbmRJbmRleCIsInV1aWQiLCJwIiwidW5zaGlmdCIsInV1aWRzIiwiZm9yRWFjaCIsImluZGV4Iiwic3BsaWNlIiwicmVzZXQiLCJsaW1pdCIsIm9mZnNldCIsImdldCIsInJlc3VsdHMiLCJjb25jYXQiLCJDUkVBVEVfREFUQSIsIkFQUF9ST1VURVIiLCJxdWVyeVNlbGVjdG9yIiwicm91dGVzIiwiVGltZXIiLCJ0aW1lIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJjb252ZXJ0TW91bnQiLCJyZXN1bHQiLCJUSU1FIiwiUm91dGVyIiwiYWN0aXZlUm91dGUiLCJhY3RpdmVDb21wb25lbnQiLCJoYW5kbGVVcmxDaGFuZ2UiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsIm9uRW50ZXIiLCJoYW5kbGVPbkVudGVyIiwibG9jYXRpb24iLCJoYXNoIiwibG9nb3V0Iiwib25FbnRlckd1YXJkIiwiZ3VhcmQiLCJzdWNjZXNzIiwicm91dGUiLCJyZWRpcmVjdCIsImNvbXBvbmVudEluc3RhbmNlIiwidW5tb3VudCIsInVwZGF0ZVN0YXRlIiwidXBkYXRlIiwic2xpY2UiLCJMb2dpbiIsImxvZ2luRm9ybSIsImZvb3RlciIsIkxvZ2luRm9ybSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImxvZ2luU3RyaW5nIiwibG9naW5GcmFnbWVudCIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibGlzdCIsImVzdGFibGlzaCIsInVuc3Vic2NyaWJlQWRkIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJ1bnN1YnNjcmliZVJlbW92ZSIsImdldFVuYWNjZXB0ZWRQaXp6YXMiLCJ1cGRhdGVMaXN0IiwicGFyYW0iLCJ1bnN1YnNjcmliZSIsImNvbnRhaW5lclN0cmluZyIsImNvbnRhaW5lckZyYWdtZW50IiwiY29udGFpbmVyIiwiUGl6emFMaXN0IiwiaW1nX3VybCIsImNvbnZlcnREYXRlIiwidGltZV9wcmVwYXJlZCIsInByaWNlIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJXcyIsIndzIiwiX2VtaXR0ZXIiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImVtaXQiLCJldmVudF9uYW1lIiwiZSIsImNvZGUiLCJzZXRUaW1lb3V0IiwiX2VzdGFibGlzaCIsImdldFRpY2tldCIsIldlYlNvY2tldCIsIm9ub3BlbiIsIm9ubWVzc2FnZSIsIl9vbm1lc3NhZ2UiLCJvbmNsb3NlIiwiX29uY2xvc2UiLCJXUyIsIkV2ZW50RW1pdHRlciIsImV2ZW50cyIsImZuIiwiY2FsbCIsInB1c2giLCJmaWx0ZXIiLCJldmVudEZuIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uRm9ybSIsInN0b3JlcyIsImdldFN0b3JlcyIsInN0b3JlSW5mbyIsInBhc3N3b3JkX3JlcGVhdCIsImVtYWlsIiwic3RvcmVfaWQiLCJwYXJzZUludCIsInN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJpZCIsInN0b3JlX3Bhc3N3b3JkIiwicmVnaXN0ZXJVc2VyIiwic2VsZWN0IiwiaGlkZGVuIiwib3B0aW9uIiwiZWxlbWVudCIsImZvcm0iLCJVc2VyIiwiaXNWYWxpZCIsImNyZWF0ZWQiLCJ2aXNpdGVkIiwiZ2V0VXNlciIsImNyZWF0ZWRfYXQiLCJsYXN0X2xvZ2luIiwiY29udGFpbmVyRWxlbWVudCIsInVzZXJTdHJpbmciLCJ1c2VyRnJhZ21lbnQiLCJOZXdQaXp6YSIsImNvbmRpdGlvbiIsInNpemUiLCJoYW5kbGVDbGljayIsImFsbCIsImdldEluZ3JlZGllbnRzIiwiZ2V0VGFncyIsImNhbnZhcyIsImJ1dHRvbnNTdHJpbmciLCJidXR0b25zRnJhZ21lbnQiLCJidXR0b25zIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwicmVuZGVyVGFncyIsImRlc2NyaXB0aW9uIiwiZmQiLCJGb3JtRGF0YSIsInRvQmxvYiIsImJsb2IiLCJwb3N0IiwiZmxhZyIsInNpemVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrZWQiLCJuZXdTaXplIiwibmV3T3B0aW9ucyIsIm5ld0luZ3JlZGllbnRzIiwiaW5ncmVkaWVudCIsIm5ld1RhZ3MiLCJ0YWciLCJjbGFzc05hbWUiLCJmb3JtU3RyaW5nIiwiaW5ncmVkaWVudHNTdHJpbmciLCJyZWR1Y2UiLCJodG1sIiwiaW1hZ2VfdXJsIiwidGFnc1N0cmluZyIsInRhZ3NGcmFnbWVudCIsIkRyYXciLCJjcnVzdF9waXp6YSIsIl9sb2FkSW1hZ2UiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbWFnZXMiLCJzcHJpdGVzIiwibGFzdE9wdGlvbnMiLCJidWZmZXIiLCJzcHJpdGVzUG9vbCIsIndpZHRoIiwiaGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsImltYWdlIiwiX3N0YXJ0U2V0IiwiX2RyYXciLCJmaWx0ZXJlZEVsZW0iLCJlbGVtIiwieCIsInkiLCJwcmVCdWZmZXIiLCJlbCIsImluY2x1ZGVzIiwiX2dlbmVyYXRlU3ByaXRlIiwiY291bnQiLCJpIiwiY2xlYXJSZWN0Iiwic3ByaXRlIiwiZHJhdyIsInByb21pc2VzIiwibWFwIiwiaW5ncl91cmwiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwib25sb2FkIiwib25lcnJvciIsIkRSQVciLCJTcHJpdGUiLCJjeCIsImN5IiwiZHJhd0ltYWdlIiwicm91bmQiLCJQcmljZSIsInN1bSIsInByZXYiLCJjdXJyIiwidG9GaXhlZCIsInByaWNlU3RyaW5nIiwiY2FsY1ByaWNlIiwicHJpY2VGcmFnbWVudCIsImF1dGhHdWFyZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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U0FEQSxHQUNjLEtBQUs1USxLQURuQixDQUNBNFEsU0FEQTs7O0FBR1IsT0FBTXlGLGtHQUVvQyxLQUFLQyxTQUFMLENBQWUxRixTQUFmLENBRnBDLG9CQUFOO0FBSUEsT0FBTTJGLGdCQUFnQixtQkFBT0YsV0FBUCxDQUF0QjtBQUNBLFVBQU9FLGFBQVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENGOztBQUVPLElBQU1DLGdDQUFZLFNBQVpBLFNBQVksUUFBUztBQUNqQyxRQUFPLG1CQUFhL1EsWUFBYixLQUNKekIsUUFBUUMsT0FBUixDQUFnQixFQUFFOEYsU0FBUyxJQUFYLEVBQWlCQyxPQUFPcUMsS0FBeEIsRUFBaEIsQ0FESSxHQUVKckksUUFBUUMsT0FBUixDQUFnQixFQUFFOEYsU0FBUyxLQUFYLEVBQWtCRSxVQUFVLFFBQTVCLEVBQWhCLENBRkg7QUFHQSxDQUpNLEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjVkOGZhODVhMjVhMDZiOGQ4YTQiLCJjbGFzcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHMgfHwge307XHJcblx0XHR0aGlzLnN0YXRlID0ge307XHJcblx0XHR0aGlzLmhvc3QgPSBudWxsO1xyXG5cdFx0dGhpcy5vbkluaXQoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7fVxyXG5cclxuXHR1cGRhdGUobmV4dFByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0dW5tb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd1bm1vdW50aW9uZycpO1xyXG5cdFx0dGhpcy5vbkJlZm9yZVVubW91bnQoKTtcclxuXHR9XHJcblxyXG5cdG9uQmVmb3JlVW5tb3VudCgpIHt9XHJcblxyXG5cdG9uQmVmb3JlVXBkYXRlKG5leHRQcm9wcykge31cclxuXHJcblx0Z2V0IG5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcblx0X3JlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy5yZW5kZXIoKTtcclxuXHJcblx0XHR0aGlzLmhvc3QuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHR0aGlzLmhvc3QuaW5uZXJIVE1MID0gY2hpbGRyZW47XHJcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQoLi4uY2hpbGRyZW4pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZChjaGlsZHJlbik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaG9zdDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJleHBvcnQgY29uc3QgdG9IdG1sID0gc3RyaW5nID0+IHtcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyaW5nO1xyXG5cdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBTkRPTSA9IChtaW4sIG1heCkgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvdXRpbHMuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHRcdHRoaXMuX2NsYWltcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NsYWltcycpKTtcclxuXHRcdHRoaXMubG9naW5VcmwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL2xvZ2luYDtcclxuXHRcdHRoaXMuc3RvcmVVcmwgPSBgJHtET01BSU59L2FwaS92MS9zdG9yZS9saXN0YDtcclxuXHRcdHRoaXMuY3JlYXRlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9jcmVhdGVgO1xyXG5cdH1cclxuXHJcblx0Z2V0IHRva2VuKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Rva2VuO1xyXG5cdH1cclxuXHJcblx0c2V0IHRva2VuKHRva2VuKSB7XHJcblx0XHR0aGlzLl90b2tlbiA9IHRva2VuO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNsYWltcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jbGFpbXM7XHJcblx0fVxyXG5cclxuXHRzZXQgY2xhaW1zKGNsYWltcykge1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gY2xhaW1zO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsYWltcycsIEpTT04uc3RyaW5naWZ5KGNsYWltcykpO1xyXG5cdH1cclxuXHJcblx0aXNBdXRob3JpemVkKCkge1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuKSByZXR1cm4gZmFsc2U7XHJcblx0XHRpZiAoIXRoaXMudG9rZW5Jc05vdEV4cGlyZWQoKSkge1xyXG5cdFx0XHR0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RvcmFnZSgpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IG51bGw7XHJcblx0XHR0aGlzLl90b2tlbiA9IG51bGw7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjbGFpbXMnKTtcclxuXHR9XHJcblxyXG5cdHRva2VuSXNOb3RFeHBpcmVkKCkge1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuKSByZXR1cm4gZmFsc2U7XHJcblx0XHRyZXR1cm4gdGhpcy5jbGFpbXMuZXhwICogMTAwMCA+IERhdGUubm93KCk7XHJcblx0fVxyXG5cclxuXHRzdG9yZUluZm8oKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5zdG9yZVVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRsb2dpblVzZXIoZGF0YSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycygpLmFwcGVuZCgnQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKSxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMubG9naW5VcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcy5vaykge1xyXG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudG9rZW4gPSBhbnN3ZXIudG9rZW47XHJcblx0XHRcdFx0XHR0aGlzLmNsYWltcyA9IHRoaXMucGFyc2VKd3RDbGFpbXMoYW5zd2VyLnRva2VuKTtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBhbnN3ZXIsIHN0YXR1czogcmVzLnN0YXR1cyB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiBQcm9taXNlLnJlamVjdCh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZWdpc3RlclVzZXIoZGF0YSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLmNyZWF0ZVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRwYXJzZUp3dENsYWltcyhqd3RUb2tlbikge1xyXG5cdFx0aWYgKGp3dFRva2VuKSB7XHJcblx0XHRcdGxldCBiYXNlNjRVcmwgPSBqd3RUb2tlbi5zcGxpdCgnLicpWzFdO1xyXG5cdFx0XHRsZXQgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpO1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX1NFUlZJQ0UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJleHBvcnQgY29uc3QgRE9NQUlOID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYSc7XHJcbmV4cG9ydCBjb25zdCBJTkdSRURJRU5UU19VUkwgPSBgJHtET01BSU59L2FwaS92MS9pbmdyZWRpZW50L2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVEFHX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL3RhZy9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFVTRVJfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9teV9pbmZvYDtcclxuZXhwb3J0IGNvbnN0IENSRUFURV9QSVpaQSA9IGAke0RPTUFJTn0vYXBpL3YxL3BpenphL2NyZWF0ZWA7XHJcbmV4cG9ydCBjb25zdCBQSVpaQV9MSVNUID0gYCR7RE9NQUlOfS9hcGkvdjEvcGl6emEvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBXU19USUNLRVQgPSBgJHtET01BSU59L2FwaS92MS93cy90aWNrZXRgO1xyXG5leHBvcnQgY29uc3QgV1NfUEFUSCA9ICd3c3M6Ly9waXp6YS10ZWxlLmdhL3dzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NvbnN0YW50cy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhZGRyZXNzPktvdHRhbnMsIEtvdHRhbnMgU3J0LiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzU3Nzc4ODg3XCI+dGVsLiA1NzctNzg4LTg3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPlBpenphIE1hbmFnZXIgJmNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE4LTAxLTAxXCI+MjAxODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvL1RPRE86IG5lZWQgZGVsZXRlIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJsb2dpbl9fYnV0dG9uLWxpbmtcIj5zaWduIGluPC9hPlxyXG5cdFx0Y29uc3QgaXNBdXRob3JpemVkID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluXCI+c2lnbiBpbjwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgbG9nb3V0QnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dvdXRcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1vdXRcIj5zaWduIG91dDwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgdXNlckJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvdXNlclwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluZm9cIj51c2VyIGluZm88L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvcmVnaXN0cmF0aW9uXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tdXBcIj5zaWduIHVwPC9hPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY3VycmVudC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNjbG9ja1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMi0wMyAxMjowMTo0OFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCIjL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2dvXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJhdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyBsb2dvdXRCdXR0b24gOiBsb2dpbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAke2lzQXV0aG9yaXplZCA/IHVzZXJCdXR0b24gOiByZWdpc3RyYXRpb25CdXR0b259IFxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChoZWFkZXIpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmNsYXNzIEF1dGhIdHRwU2VydmljZSB7XHJcblx0Z2V0KHVybCkge1xyXG5cdFx0aWYgKCFBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm9uLWF1dGhvcml6ZWQgcmVxdWVzdCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZldGNoKHVybCwge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cG9zdCh1cmwsIGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGF0Y2goKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9IVFRQX1NFUlZJQ0UgPSBuZXcgQXV0aEh0dHBTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmh0dHAuanMiLCJpbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4vYXV0aC5odHRwJztcclxuaW1wb3J0IHsgSU5HUkVESUVOVFNfVVJMLCBUQUdfVVJMLCBQSVpaQV9MSVNUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgUGl6emFEYXRhU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gW107XHJcblx0XHR0aGlzLnRhZ3MgPSBbXTtcclxuXHRcdHRoaXMucGl6emFzID0gW107XHJcblx0XHR0aGlzLmFkZFBpenphID0gdGhpcy5hZGRQaXp6YS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5yZW1vdmVQaXp6YSA9IHRoaXMucmVtb3ZlUGl6emEuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGFkZFBpenphKHBpenphKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHRoaXMucGl6emFzLmZpbmRJbmRleChwID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcGl6emEudXVpZCA9PT0gcC51dWlkO1xyXG5cdFx0XHR9KSAhPSAtMVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMucGl6emFzLnVuc2hpZnQocGl6emEpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVQaXp6YSh1dWlkcykge1xyXG5cdFx0dXVpZHMuZm9yRWFjaCh1dWlkID0+IHtcclxuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnBpenphcy5maW5kSW5kZXgocCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHV1aWQgPT09IHAudXVpZDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoaW5kZXggIT0gLTEpIHtcclxuXHRcdFx0XHRcdHRoaXMucGl6emFzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldFVuYWNjZXB0ZWRQaXp6YXMocmVzZXQsIGxpbWl0LCBvZmZzZXQpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoYCR7UElaWkFfTElTVH0/bGltaXQ9JHtsaW1pdCB8fCAxMDB9Jm9mZnNldD0ke29mZnNldCB8fCAwfWApLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0aWYgKHJlc2V0KSB7XHJcblx0XHRcdFx0dGhpcy5waXp6YXMgPSByZXMucmVzdWx0cztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnBpenphcyA9IHRoaXMucGl6emFzLmNvbmNhdChyZXMucmVzdWx0cyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0SW5ncmVkaWVudHMoKSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KElOR1JFRElFTlRTX1VSTCkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5pbmdyZWRpZW50cyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0cmV0dXJuIGRhdGEucmVzdWx0cztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0VGFncygpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoVEFHX1VSTCkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0dGhpcy50YWdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RBVEEgPSBuZXcgUGl6emFEYXRhU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvcGl6emEuZGF0YS5qcyIsImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9mcmFtZXdvcmsvcm91dGVyJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUiA9IG5ldyBSb3V0ZXIoeyBob3N0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLCByb3V0ZXMgfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbmRleC5qcyIsImNsYXNzIFRpbWVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNvbnZlcnREYXRlKHRpbWUpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSBuZXcgRGF0ZSh0aW1lKTtcclxuXHRcdGNvbnN0IGRheSA9IGRhdGEuZ2V0RGF0ZSgpO1xyXG5cdFx0Y29uc3QgbW9udGggPSBkYXRhLmdldE1vbnRoKCk7XHJcblx0XHRjb25zdCB5ZWFyID0gZGF0YS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0cmV0dXJuIGAke2RheX0gJHt0aGlzLmNvbnZlcnRNb3VudChtb250aCl9ICR7eWVhcn1gO1xyXG5cdH1cclxuXHJcblx0Y29udmVydE1vdW50KG1vbnRoKSB7XHJcblx0XHRsZXQgcmVzdWx0O1xyXG5cdFx0c3dpdGNoIChtb250aCkge1xyXG5cdFx0Y2FzZSAwOlxyXG5cdFx0XHRyZXN1bHQgPSAnSmFudWFyeSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgMTpcclxuXHRcdFx0cmVzdWx0ID0gJ0ZlYnJ1YXJ5JztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSAyOlxyXG5cdFx0XHRyZXN1bHQgPSAnTWFyY2gnO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDM6XHJcblx0XHRcdHJlc3VsdCA9ICdBcHJpbCc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgNDpcclxuXHRcdFx0cmVzdWx0ID0gJ01heSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgNTpcclxuXHRcdFx0cmVzdWx0ID0gJ0p1bmUnO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIDY6XHJcblx0XHRcdHJlc3VsdCA9ICdKdWx5JztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSA3OlxyXG5cdFx0XHRyZXN1bHQgPSAnQXVndXN0JztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSA4OlxyXG5cdFx0XHRyZXN1bHQgPSAnU2VwdGVtYmVyJztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSA5OlxyXG5cdFx0XHRyZXN1bHQgPSAnT2N0b2Jlcic7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgMTA6XHJcblx0XHRcdHJlc3VsdCA9ICdOb3ZlbWJlcic7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgMTE6XHJcblx0XHRcdHJlc3VsdCA9ICdEZWNlbWJlcic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUSU1FID0gbmV3IFRpbWVyKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy90aW1lLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHRjb25zdCB7IHJvdXRlcywgaG9zdCB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHRoaXMuaG9zdCA9IGhvc3Q7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0cm91dGVzLFxyXG5cdFx0XHRhY3RpdmVSb3V0ZTogbnVsbCxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVVybENoYW5nZSA9IHRoaXMuaGFuZGxlVXJsQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmFwcGx5Um91dGUgPSB0aGlzLmFwcGx5Um91dGUuYmluZCh0aGlzKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHRoaXMuaGFuZGxlVXJsQ2hhbmdlKHRoaXMucGF0aCkpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlVXJsQ2hhbmdlKHRoaXMucGF0aCk7XHJcblx0fVxyXG5cclxuXHRnZXQgcGF0aCgpIHtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVVybENoYW5nZSh1cmwpIHtcclxuXHRcdGNvbnN0IHsgcm91dGVzLCBhY3RpdmVSb3V0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IG5leHRSb3V0ZSA9IHJvdXRlcy5maW5kKCh7IGhyZWYgfSkgPT4gaHJlZiA9PT0gdXJsKTtcclxuXHRcdGlmIChuZXh0Um91dGUgJiYgbmV4dFJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xyXG5cdFx0XHRpZiAobmV4dFJvdXRlLnJlZGlyZWN0VG8pIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVSZWRpcmVjdChuZXh0Um91dGUucmVkaXJlY3RUbyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0Um91dGUub25FbnRlcikge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hcHBseVJvdXRlKG5leHRSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVSZWRpcmVjdCh1cmwpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlT25FbnRlcihuZXh0Um91dGUpIHtcclxuXHRcdGNvbnN0IHsgb25FbnRlciB9ID0gbmV4dFJvdXRlO1xyXG5cclxuXHRcdGlmIChvbkVudGVyLmxvZ291dCkge1xyXG5cdFx0XHRBVVRIX1NFUlZJQ0UuY2xlYXJTdG9yYWdlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgb25FbnRlckd1YXJkID0gb25FbnRlci5ndWFyZDtcclxuXHRcdG9uRW50ZXJHdWFyZChuZXh0Um91dGUpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5zdWNjZXNzID8gdGhpcy5hcHBseVJvdXRlKHJlcy5yb3V0ZSkgOiB0aGlzLmhhbmRsZVJlZGlyZWN0KHJlcy5yZWRpcmVjdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFwcGx5Um91dGUocm91dGUpIHtcclxuXHRcdGNvbnN0IHsgQ29tcG9uZW50IH0gPSByb3V0ZTtcclxuXHRcdGNvbnN0IHsgYWN0aXZlQ29tcG9uZW50IH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5cdFx0YWN0aXZlQ29tcG9uZW50ID8gYWN0aXZlQ29tcG9uZW50LnVubW91bnQoKSA6IG51bGw7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTdGF0ZSh7XHJcblx0XHRcdGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gYWN0aXZlQ29tcG9uZW50LnVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsImltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXInO1xyXG5pbXBvcnQgTmV3UGl6emEgZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL3V0aWxzL2F1dGgnO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJycsXHJcblx0XHRyZWRpcmVjdFRvOiAnLycsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnLycsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBMb2dpbixcclxuXHRcdGhyZWY6ICcvbG9naW4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBSZWdpc3RyYXRpb24sXHJcblx0XHRocmVmOiAnL3JlZ2lzdHJhdGlvbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IFVzZXIsXHJcblx0XHRocmVmOiAnL3VzZXInLFxyXG5cdFx0b25FbnRlcjoge1xyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGhyZWY6ICcvbG9nb3V0JyxcclxuXHRcdG9uRW50ZXI6IHtcclxuXHRcdFx0bG9nb3V0OiB0cnVlLFxyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogTmV3UGl6emEsXHJcblx0XHRocmVmOiAnL2NyZWF0ZScsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vbG9naW4uZm9ybSc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxvZ2luRm9ybSA9IG5ldyBMb2dpbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCB0aGlzLmxvZ2luRm9ybS51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL25vdGlmaWNhdGlvbi9lcnJvci5tZXNzYWdlJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCB7IEFQUF9ST1VURVIgfSBmcm9tICcuLi8uLi9pbmRleCc7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VybmFtZTogbnVsbCxcclxuXHRcdFx0cGFzc3dvcmQ6IG51bGwsXHJcblx0XHRcdG1lc3NhZ2U6IG51bGwsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luJyk7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLmxvZ2luVXNlcihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdFx0XHRcdEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RhdHVzID0+IHtcclxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gc3RhdHVzLmFuc3dlci5lcnJvcjtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHRleHQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBtZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luU3RyaW5nID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgdmFsdWU9XHJcblx0XHRcdFx0JHt1c2VybmFtZSA/IHVzZXJuYW1lIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiB2YWx1ZT1cclxuXHRcdFx0XHQke3Bhc3N3b3JkID8gcGFzc3dvcmQgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBsb2dpbkZyYWdtZW50ID0gdG9IdG1sKGxvZ2luU3RyaW5nKTtcclxuXHJcblx0XHRpZiAobWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UudXBkYXRlKHsgdGV4dDogbWVzc2FnZSB9KTtcclxuXHRcdFx0bG9naW5GcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2J1dHRvbicpLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bG9naW5GcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRyZXR1cm4gbG9naW5GcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fY29udGFpbmVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHRleHQgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX190ZXh0Jyk7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cdFx0cmV0dXJuIGVycm9yO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBQaXp6YUxpc3QgZnJvbSAnLi4vbGlzdC9saXN0JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL3BpenphLmRhdGEnO1xyXG5pbXBvcnQgeyBXUyB9IGZyb20gJy4uLy4uL3V0aWxzL3dzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxpc3QgPSBuZXcgUGl6emFMaXN0KCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdCgpIHtcclxuXHRcdFdTLmVzdGFibGlzaCgpO1xyXG5cclxuXHRcdHRoaXMudW5zdWJzY3JpYmVBZGQgPSB0aGlzLnN1YnNjcmliZSh7XHJcblx0XHRcdGV2ZW50OiAnQ1JFQVRFX1BJWlpBJyxcclxuXHRcdFx0bWV0aG9kOiBDUkVBVEVfREFUQS5hZGRQaXp6YSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMudW5zdWJzY3JpYmVSZW1vdmUgPSB0aGlzLnN1YnNjcmliZSh7XHJcblx0XHRcdGV2ZW50OiAnQUNDRVBUX1BJWlpBJyxcclxuXHRcdFx0bWV0aG9kOiBDUkVBVEVfREFUQS5yZW1vdmVQaXp6YSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdENSRUFURV9EQVRBLmdldFVuYWNjZXB0ZWRQaXp6YXModHJ1ZSwgMTIsIDApLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlTGlzdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdWJzY3JpYmUocGFyYW0pIHtcclxuXHRcdGxldCB7IGV2ZW50LCBtZXRob2QgfSA9IHBhcmFtO1xyXG5cclxuXHRcdGNvbnN0IHVuc3Vic2NyaWJlID0gV1Muc3Vic2NyaWJlKGV2ZW50LCBkYXRhID0+IHtcclxuXHRcdFx0bWV0aG9kKGRhdGEpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHVuc3Vic2NyaWJlO1xyXG5cdH1cclxuXHJcblx0b25CZWZvcmVVbm1vdW50KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZUFkZCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZVJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGlzdCgpIHtcclxuXHRcdHRoaXMubGlzdC51cGRhdGUoe1xyXG5cdFx0XHRwaXp6YXM6IENSRUFURV9EQVRBLnBpenphcyxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG5cdFx0PG1haW4gY2xhc3M9XCJtYWluIHBpenphc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBpenphc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIy9jcmVhdGVcIiBjbGFzcz1cImJ1dHRvbiBhZGQtbGlua1wiPmFkZCBwaXp6YTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLnBpenphc19fY29udGFpbmVyJyk7XHJcblxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmxpc3QudXBkYXRlKCkpO1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGNvbnRhaW5lckZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC9hcHAuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRJTUUgfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcclxuXHJcbmNsYXNzIFBpenphTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBpenphKHBpenphcykge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cdFx0Y29uc3QgbGlzdCA9IHBpenphID0+IHtcclxuXHRcdFx0cmV0dXJuIGBcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwaXp6YVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBpenphX19pbWdcIiBzcmM9XCIke0RPTUFJTn0vJHtwaXp6YS5pbWdfdXJsfVwiIGFsdD1cIiR7cGl6emEubmFtZX1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBpenphX19uYW1lXCI+JHtwaXp6YS5uYW1lfTwvaDI+XHJcblx0XHRcdFx0PHRpbWUgY2xhc3M9XCJwaXp6YV9fdGltZVwiIGRhdGV0aW1lPVwiJHtUSU1FLmNvbnZlcnREYXRlKHBpenphLnRpbWVfcHJlcGFyZWQpfVwiPiR7VElNRS5jb252ZXJ0RGF0ZShcclxuXHRwaXp6YS50aW1lX3ByZXBhcmVkXHJcbil9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaXp6YV9fcXVldWUtbnVtYmVyXCI+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2V0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmV0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjA0OjAwXCI+NDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cGl6emEucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXHJcbiAgICAgICAgICAgIGA7XHJcblx0XHR9O1xyXG5cclxuXHRcdHBpenphcy5mb3JFYWNoKHBpenphID0+IHtcclxuXHRcdFx0Y29udGFpbmVyLmlubmVySFRNTCArPSBsaXN0KHBpenphKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGxpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfX2NvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzKSB7XHJcblx0XHRcdGNvbnN0IHsgcGl6emFzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdFx0aWYgKHBpenphcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmNyZWF0ZVBpenphKHBpenphcykpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGl6emFMaXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJpbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4vYXV0aC5odHRwJztcclxuaW1wb3J0IHsgV1NfVElDS0VULCBXU19QQVRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50LmVtaXR0ZXInO1xyXG5cclxuY2xhc3MgV3Mge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy53cyA9IG51bGw7XHJcblx0XHR0aGlzLl9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGlja2V0KCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChXU19USUNLRVQpLnRoZW4ocmVzID0+IHJlcyk7XHJcblx0fVxyXG5cclxuXHRzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2VtaXR0ZXIuc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG5cdH1cclxuXHJcblx0X29ubWVzc2FnZShkYXRhKSB7XHJcblx0XHRjb25zdCBldmVudCA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblx0XHRjb25zb2xlLmxvZygnbWVzc2FnZTogJywgZXZlbnQpO1xyXG5cdFx0dGhpcy5fZW1pdHRlci5lbWl0KGV2ZW50LmV2ZW50X25hbWUsIGV2ZW50LmRhdGEpO1xyXG5cdH1cclxuXHJcblx0X29uY2xvc2UoZSkge1xyXG5cdFx0aWYgKGUuY29kZSA9PT0gNDAwMSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTG9naW4gcGx6Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTG9zdCBjb25uZWN0aW9uIC4uLiByZWNvbm5lY3QnKTtcclxuXHRcdFx0c2V0VGltZW91dCh0aGlzLl9lc3RhYmxpc2gsIDIwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXN0YWJsaXNoKCkge1xyXG5cdFx0dGhpcy5nZXRUaWNrZXQoKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLndzID0gbmV3IFdlYlNvY2tldChgJHtXU19QQVRIfT9rZXk9JHtkYXRhLnRva2VufWApO1xyXG5cdFx0XHR0aGlzLndzLm9ub3BlbiA9IGNvbnNvbGUubG9nO1xyXG5cdFx0XHR0aGlzLndzLm9ubWVzc2FnZSA9IGUgPT4gdGhpcy5fb25tZXNzYWdlKGUuZGF0YSk7XHJcblx0XHRcdHRoaXMud3Mub25jbG9zZSA9IGUgPT4gdGhpcy5fb25jbG9zZShlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdTID0gbmV3IFdzKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy93cy5qcyIsImV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5ldmVudHMgPSB7fTtcclxuXHR9XHJcblxyXG5cdGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcblx0XHRjb25zdCBldmVudCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XHJcblx0XHRpZiAoZXZlbnQpIHtcclxuXHRcdFx0ZXZlbnQuZm9yRWFjaChmbiA9PiB7XHJcblx0XHRcdFx0Zm4uY2FsbChudWxsLCBkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcblx0XHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKCd0aGlzLmV2ZW50czogJywgdGhpcy5ldmVudHMpO1xyXG5cdFx0dGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudEZuID0+IGZuICE9PSBldmVudEZuKTtcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9ldmVudC5lbWl0dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbkZvcm0gZnJvbSAnLi9yZWdpc3RyYXRpb24uZm9ybSc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMucmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgdGhpcy5yZWdpc3RyYXRpb24udXBkYXRlKCksIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c3RvcmVzOiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbicpO1xyXG5cdFx0dGhpcy5nZXRTdG9yZXMoKTtcclxuXHR9XHJcblxyXG5cdGdldFN0b3JlcygpIHtcclxuXHRcdEFVVEhfU0VSVklDRS5zdG9yZUluZm8oKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMuc3RhdGUuc3RvcmVzID0gcmVzdWx0O1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBldi50YXJnZXQudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogZXYudGFyZ2V0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmRfcmVwZWF0OiBldi50YXJnZXQucGFzc3dvcmRfcmVwZWF0LnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0ZW1haWw6IGV2LnRhcmdldC5lbWFpbC52YWx1ZS50cmltKCksXHJcblx0XHRcdHN0b3JlX2lkOiBwYXJzZUludChldi50YXJnZXQuc3RvcmUub3B0aW9uc1tldi50YXJnZXQuc3RvcmUuc2VsZWN0ZWRJbmRleF0uZGF0YXNldC5pZCksXHJcblx0XHRcdHN0b3JlX3Bhc3N3b3JkOiBldi50YXJnZXQuc3RvcmVfcGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0fTtcclxuXHRcdEFVVEhfU0VSVklDRS5yZWdpc3RlclVzZXIoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JlcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblx0XHRjb25zdCByZWdpc3RyYXRpb24gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVnaXN0cmF0aW9uX190aXRsZVwiPnJlZ2lzdHJhdGlvbiBmb3JtPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVW5pcXVlLiBNaW4gbGVuZ3RoIDIgY2hhcnMsIG1heCAtIDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIj5SZS1lbnRlciBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRfcmVwZWF0XCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgbWF0Y2ggd2l0aCBwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIGVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlXCI+U3RvcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBoaWRkZW4gaWQ9XCJyZWdpc3RyYXRpb24tc3RvcmVcIiBuYW1lPVwic3RvcmVcIj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIj5TdG9yZSBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInN0b3JlX3Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgc3RvcmUgcGFzc3dvcmQuIE1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiByZWdpc3RyYXRpb25fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHJlZ2lzdHJhdGlvbik7XHJcblxyXG5cdFx0Y29uc3Qgc2VsZWN0ID0gZnJhZ21lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uX19zZWxlY3QnKTtcclxuXHJcblx0XHRpZiAoc3RvcmVzKSB7XHJcblx0XHRcdHNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdFx0c3RvcmVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcblx0XHRcdFx0b3B0aW9uLnRleHQgPSBlbGVtZW50Lm5hbWU7XHJcblx0XHRcdFx0b3B0aW9uLmRhdGFzZXQuaWQgPSBlbGVtZW50LmlkO1xyXG5cdFx0XHRcdHNlbGVjdC5hZGQob3B0aW9uKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmh0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX1VSTCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRJTUUgfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRpc1ZhbGlkOiBmYWxzZSxcclxuXHRcdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRcdGVtYWlsOiBudWxsLFxyXG5cdFx0XHRjcmVhdGVkOiBudWxsLFxyXG5cdFx0XHR2aXNpdGVkOiBudWxsLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3VzZXItY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdFx0dGhpcy5nZXRVc2VyKCk7XHJcblx0fVxyXG5cclxuXHRnZXRVc2VyKCkge1xyXG5cdFx0QVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFVTRVJfVVJMKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRcdHVzZXJuYW1lOiByZXMudXNlcm5hbWUsXHJcblx0XHRcdFx0ZW1haWw6IHJlcy5lbWFpbCxcclxuXHRcdFx0XHRjcmVhdGVkOiByZXMuY3JlYXRlZF9hdCxcclxuXHRcdFx0XHR2aXNpdGVkOiByZXMubGFzdF9sb2dpbixcclxuXHRcdFx0XHRpc1ZhbGlkOiB0cnVlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGNyZWF0ZWQsIHZpc2l0ZWQsIGlzVmFsaWQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG5cdFx0XHQ8bWFpbiBjbGFzcz0ndXNlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz0nY29udGFpbmVyIHVzZXJfX2NvbnRhaW5lcic+PC9kaXY+XHJcblx0XHRcdDwvbWFpbj5gO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRhaW5lckZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblx0XHRjb25zdCBjb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmIChpc1ZhbGlkKSB7XHJcblx0XHRcdGNvbnN0IHVzZXJTdHJpbmcgPSBgXHJcblx0XHRcdFx0PHVsIGNsYXNzPSd1c2VyX19pbmZvJz5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz0ndXNlcl9fbmFtZSc+VXNlcjogXHJcblx0XHRcdFx0XHRcdDxzcGFuPiR7dXNlcm5hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz0ndXNlcl9fbWFpbCc+RS1tYWlsOiBcclxuXHRcdFx0XHRcdFx0PHNwYW4+JHtlbWFpbH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPSd1c2VyX19jcmVhdGVkJz5DcmVhdGVkOlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke1RJTUUuY29udmVydERhdGUoY3JlYXRlZCl9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz0ndXNlcl9fdmlzaXRlZCc+TGFzdCBzZWVuOlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke1RJTUUuY29udmVydERhdGUodmlzaXRlZCl9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPmA7XHJcblx0XHRcdGNvbnN0IHVzZXJGcmFnbWVudCA9IHRvSHRtbCh1c2VyU3RyaW5nKTtcclxuXHRcdFx0Y29udGFpbmVyRWxlbWVudC5hcHBlbmQodXNlckZyYWdtZW50KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBjb250YWluZXJGcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IHsgQ1JFQVRFX0RBVEEgfSBmcm9tICcuLi8uLi91dGlscy9waXp6YS5kYXRhJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4sIENSRUFURV9QSVpaQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERSQVcgfSBmcm9tICcuL2RyYXcnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGguaHR0cCc7XHJcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi4vcHJpY2UvcHJpY2UnO1xyXG5cclxuY2xhc3MgTmV3UGl6emEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmNvbmRpdGlvbiA9IHtcclxuXHRcdFx0c2l6ZTogJzYwJyxcclxuXHRcdFx0b3B0aW9uczogW10sXHJcblx0XHRcdGluZ3JlZGllbnRzOiBbXSxcclxuXHRcdFx0dGFnczogW10sXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5wcmljZSA9IG5ldyBQcmljZSgpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7XHJcblx0XHRQcm9taXNlLmFsbChbQ1JFQVRFX0RBVEEuZ2V0SW5ncmVkaWVudHMoKSwgQ1JFQVRFX0RBVEEuZ2V0VGFncygpXSkudGhlbigoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX29wdGlvbnMnKTtcclxuXHRcdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fY2FudmFzJyk7XHJcblxyXG5cdFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDbGljayk7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cdFx0XHRjb25zdCBidXR0b25zU3RyaW5nID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9fYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIGNyZWF0ZV9fYnV0dG9uLWNhbmNlbCcgdHlwZT0nYnV0dG9uJz5jYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIGNyZWF0ZV9fYnV0dG9uLXNlbmQnIHR5cGU9J3N1Ym1pdCc+Y3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cdFx0XHRjb25zdCBidXR0b25zRnJhZ21lbnQgPSB0b0h0bWwoYnV0dG9uc1N0cmluZyk7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbnMgPSBidXR0b25zRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fYnV0dG9uJyk7XHJcblx0XHRcdGJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQoZm9ybSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kKHRoaXMucmVuZGVyRm9ybSgpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmQodGhpcy5yZW5kZXJJbmdyZWRpZW50cyhDUkVBVEVfREFUQS5pbmdyZWRpZW50cykpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZCh0aGlzLnJlbmRlclRhZ3MoQ1JFQVRFX0RBVEEudGFncykpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZCh0aGlzLnByaWNlLnVwZGF0ZSh7IGNvbmRpdGlvbjogdGhpcy5jb25kaXRpb24gfSkpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZChidXR0b25zRnJhZ21lbnQpO1xyXG5cclxuXHRcdFx0RFJBVy5vbkluaXQoe1xyXG5cdFx0XHRcdGhvc3Q6IGNhbnZhcyxcclxuXHRcdFx0XHRpbmdyZWRpZW50czogQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCB7IHNpemUsIGluZ3JlZGllbnRzLCB0YWdzIH0gPSB0aGlzLmNvbmRpdGlvbjtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5cdFx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX25hbWUtdmFsdWUnKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fZGVzY3JpcHRpb24nKTtcclxuXHJcblx0XHRjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZmQuYXBwZW5kKCduYW1lJywgbmFtZS52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24udmFsdWUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdzaXplJywgc2l6ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2luZ3JlZGllbnRzJywgSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHMpKTtcclxuXHRcdGZkLmFwcGVuZCgndGFncycsIEpTT04uc3RyaW5naWZ5KHRhZ3MpKTtcclxuXHJcblx0XHRjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG5cdFx0XHRmZC5hcHBlbmQoJ2ltYWdlJywgYmxvYiwgJ25ld19pbWFnZS5wbmcnKTtcclxuXHRcdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLnBvc3QoQ1JFQVRFX1BJWlpBLCBmZCkudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKGV2KSB7XHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuZmxhZyA9PT0gJ3NpemUnKSB7XHJcblx0XHRcdGNvbnN0IHNpemVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbZGF0YS1mbGFnPVwic2l6ZVwiXScpO1xyXG5cdFx0XHRzaXplcy5mb3JFYWNoKHNpemUgPT4ge1xyXG5cdFx0XHRcdGlmIChzaXplLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld1NpemUgPSBzaXplLnZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5jb25kaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmRpdGlvbiwge1xyXG5cdFx0XHRcdFx0XHRzaXplOiBuZXdTaXplLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLmNvbmRpdGlvbjtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdFx0dGhpcy5wcmljZS51cGRhdGUoeyBjb25kaXRpb246IHRoaXMuY29uZGl0aW9uIH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChldi50YXJnZXQuZGF0YXNldC5mbGFnID09PSAnaW5ncmVkaWVudCcpIHtcclxuXHRcdFx0Y29uc3QgbmV3T3B0aW9ucyA9IFtdO1xyXG5cdFx0XHRjb25zdCBuZXdJbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0XHRjb25zdCBpbmdyZWRpZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2RhdGEtZmxhZz1cImluZ3JlZGllbnRcIl0nKTtcclxuXHRcdFx0aW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcclxuXHRcdFx0XHRpZiAoaW5ncmVkaWVudC5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRuZXdPcHRpb25zLnB1c2goaW5ncmVkaWVudC52YWx1ZSk7XHJcblx0XHRcdFx0XHRuZXdJbmdyZWRpZW50cy5wdXNoKHBhcnNlSW50KGluZ3JlZGllbnQuZGF0YXNldC5pZCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmNvbmRpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZGl0aW9uLCB7XHJcblx0XHRcdFx0b3B0aW9uczogbmV3T3B0aW9ucyxcclxuXHRcdFx0XHRpbmdyZWRpZW50czogbmV3SW5ncmVkaWVudHMsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLmNvbmRpdGlvbjtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdFx0dGhpcy5wcmljZS51cGRhdGUoeyBjb25kaXRpb246IHRoaXMuY29uZGl0aW9uIH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChldi50YXJnZXQuZGF0YXNldC5mbGFnID09PSAndGFnJykge1xyXG5cdFx0XHRjb25zdCBuZXdUYWdzID0gW107XHJcblx0XHRcdGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLWZsYWc9XCJ0YWdcIl0nKTtcclxuXHRcdFx0dGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcblx0XHRcdFx0aWYgKHRhZy5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRuZXdUYWdzLnB1c2gocGFyc2VJbnQodGFnLmRhdGFzZXQuaWQpKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuY29uZGl0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25kaXRpb24sIHtcclxuXHRcdFx0XHRcdHRhZ3M6IG5ld1RhZ3MsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChldi50YXJnZXQuY2xhc3NOYW1lID09PSAnYnV0dG9uIGNyZWF0ZV9fYnV0dG9uLWNhbmNlbCcpIHtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnLyc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyRm9ybSgpIHtcclxuXHRcdGNvbnN0IGZvcm1TdHJpbmcgPSBgXHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX19uYW1lJz5QaXp6YSBOYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgcmVxdWlyZWQgbWluPSczJyBtYXg9JzI0JyBjbGFzcz0nY3JlYXRlX19uYW1lLXZhbHVlJz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4+RGVzY3JpcHRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz0nY3JlYXRlX19kZXNjcmlwdGlvbic+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fc2l6ZS10aXRsZSc+U2l6ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjMwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzMwJyBkYXRhLWZsYWc9J3NpemUnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLXNtYWxsXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NDU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nNDUnIGRhdGEtZmxhZz0nc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbWVkaXVtXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nNjAnIGRhdGEtZmxhZz0nc2l6ZScgY2hlY2tlZD5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1sYXJnZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD4gICAgXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtdGl0bGUnPkluZ3JlZGllbnRzPHNwYW4+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gdG9IdG1sKGZvcm1TdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZvcm07XHJcblx0fVxyXG5cclxuXHRyZW5kZXJJbmdyZWRpZW50cyhkYXRhKSB7XHJcblx0XHRjb25zdCBpbmdyZWRpZW50c1N0cmluZyA9IGAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcblx0XHRodG1sICs9IGBcclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaXRlbSc+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pbnB1dCcgdHlwZT0nY2hlY2tib3gnIHZhbHVlPScke2RhdGEubmFtZX0nIGRhdGEtZmxhZz0naW5ncmVkaWVudCcgZGF0YS1pZD0nJHtkYXRhLmlkfSc+XHJcblx0XHRcdDxpbWcgc3JjPScke0RPTUFJTn0vJHtkYXRhLmltYWdlX3VybH0nIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJyB0aXRsZT0nJHtkYXRhLmRlc2NyaXB0aW9ufSdcclxuXHRcdFx0ZGF0YS1uYW1lPSdpbmdyZWRpZW50Jz5cclxuICAgICAgICAgICAgPHNwYW4+JHtkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+YDtcclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH0sICcnKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcdDxzcGFuIGNsYXNzPSdjcmVhdGVfX3RhZ3MtdGl0bGUnPlRhZzxzcGFuPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChpbmdyZWRpZW50c1N0cmluZyk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJUYWdzKGRhdGEpIHtcclxuXHRcdGNvbnN0IHRhZ3NTdHJpbmcgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX190YWdzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcblx0XHRodG1sICs9IGBcclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fdGFncy1pdGVtJyBmb3I9JHtkYXRhLm5hbWV9PlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGlkPSR7ZGF0YS5uYW1lfSBkYXRhLWlkPSR7ZGF0YS5pZH0gZGF0YS1mbGFnPSd0YWcnPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhciBmYS1zcXVhcmUgY3JlYXRlX190YWdzLWljb24gY3JlYXRlX190YWdzLWljb24tLXVuY2hlY2tlZFwiPjwvaT5cclxuXHRcdFx0PGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stc3F1YXJlIGNyZWF0ZV9fdGFncy1pY29uIGNyZWF0ZV9fdGFncy1pY29uLS1jaGVja2VkXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIGA7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgdGFnc0ZyYWdtZW50ID0gdG9IdG1sKHRhZ3NTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIHRhZ3NGcmFnbWVudDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuICAgICAgICAgICAgPG1haW4gY2xhc3M9J2NyZWF0ZScgaWQ9J2NyZWF0ZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXIgY3JlYXRlX19jb250YWluZXInPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzPSdjcmVhdGVfX3RpdGxlJz5DcmVhdGUgUGl6emE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX2NhbnZhcyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX29wdGlvbnMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGNvbnRhaW5lckZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgY29udGFpbmVyRnJhZ21lbnQsIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1BpenphO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5jbGFzcyBEcmF3IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuY3J1c3RfcGl6emEgPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhL3N0YXRpYy9pbWFnZXMvcGl6emEucG5nJztcclxuXHRcdHRoaXMuX2xvYWRJbWFnZSA9IHRoaXMuX2xvYWRJbWFnZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KGRhdGEpIHtcclxuXHRcdHRoaXMuaG9zdCA9IGRhdGEuaG9zdDtcclxuXHRcdHRoaXMuc2l6ZSA9ICc2MCc7XHJcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0dGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0dGhpcy5jYW52YXNXaWR0aCA9IDMyMDtcclxuXHRcdHRoaXMuY2FudmFzSGVpZ2h0ID0gMzIwO1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IGRhdGEuaW5ncmVkaWVudHM7XHJcblx0XHR0aGlzLmltYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5zcHJpdGVzID0ge307XHJcblx0XHR0aGlzLmxhc3RPcHRpb25zID0gW107XHJcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG5cdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQ7XHJcblx0XHR0aGlzLl9sb2FkUmVzb3VyY2VzKCkudGhlbihyZXNvdXJjZXMgPT4ge1xyXG5cdFx0XHRyZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiAodGhpcy5pbWFnZXNbcmVzb3VyY2UubmFtZV0gPSByZXNvdXJjZS5pbWFnZSkpO1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKHRoaXMuY2FudmFzKTtcclxuXHRcdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X3N0YXJ0U2V0KCkge1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG5cdFx0Ly8gbGV0IHBpenphID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1sncGl6emEnXSwgMTYwLCAxNjAsIDMwMCwgMzAwKTtcclxuXHRcdGxldCBwaXp6YSA9IG5ldyBTcHJpdGUoXHJcblx0XHRcdHRoaXMuaW1hZ2VzWydwaXp6YSddLFxyXG5cdFx0XHQxNjAsXHJcblx0XHRcdDE2MCxcclxuXHRcdFx0MzAwICogYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gIC8gNjAsXHJcblx0XHRcdDMwMCAqIGAke3BhcnNlSW50KHRoaXMuc2l6ZSl9YCAvIDYwXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zcHJpdGVzWydwaXp6YSddID0gcGl6emE7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sLnB1c2gocGl6emEpO1xyXG5cdFx0dGhpcy5fZHJhdygpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSkge1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPT0gdGhpcy5idWZmZXIubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWxlbS5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA8IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xyXG5cdFx0XHRsZXQgcHJlQnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMubGFzdE9wdGlvbnMgPSBbXTtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHR0aGlzLmxhc3RPcHRpb25zLnB1c2goZWwpO1xyXG5cdFx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZWxlbS5pZCA9PT0gZWwpIHtcclxuXHRcdFx0XHRcdFx0cHJlQnVmZmVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBlbGVtLmlkLFxyXG5cdFx0XHRcdFx0XHRcdHNwcml0ZXM6IGVsZW0uc3ByaXRlcyxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGVsZW0uc3ByaXRlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQocHJlQnVmZmVyKTtcclxuXHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmxhc3RPcHRpb25zLmluY2x1ZGVzKGVsKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmxhc3RPcHRpb25zLnB1c2goZWwpO1xyXG5cdFx0XHRcdFx0dGhpcy5fZ2VuZXJhdGVTcHJpdGUoZWwsIDEwKTtcclxuXHRcdFx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbC5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9nZW5lcmF0ZVNwcml0ZShuYW1lLCBjb3VudCkge1xyXG5cdFx0Y29uc3Qgc3ByaXRlcyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xyXG5cdFx0XHRsZXQgaW5ncmVkaWVudCA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbYCR7bmFtZX1gXSwgUkFORE9NKDcwLCAyNTApLCBSQU5ET00oNzAsIDI1MCkpO1xyXG5cdFx0XHRzcHJpdGVzLnB1c2goaW5ncmVkaWVudCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmJ1ZmZlci5wdXNoKHtcclxuXHRcdFx0aWQ6IG5hbWUsXHJcblx0XHRcdHNwcml0ZXM6IHNwcml0ZXMsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9kcmF3KCkge1xyXG5cdFx0dGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzV2lkdGgsIHRoaXMuY2FudmFzSGVpZ2h0KTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmRyYXcodGhpcy5jdHgpKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkUmVzb3VyY2VzKCkge1xyXG5cdFx0bGV0IHByb21pc2VzID0gW107XHJcblx0XHRwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJbWFnZSgncGl6emEnLCB0aGlzLmNydXN0X3BpenphKSk7XHJcblx0XHRwcm9taXNlcyA9IHByb21pc2VzLmNvbmNhdChcclxuXHRcdFx0dGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XHJcblx0XHRcdFx0bGV0IGluZ3JfdXJsID0gYCR7RE9NQUlOfS8ke2luZ3JlZGllbnQuaW1hZ2VfdXJsfWA7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2xvYWRJbWFnZShpbmdyZWRpZW50Lm5hbWUsIGluZ3JfdXJsKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdH1cclxuXHJcblx0X2xvYWRJbWFnZShuYW1lLCB1cmwpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRcdGltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcblx0XHRcdGltYWdlLnNyYyA9IHVybDtcclxuXHRcdFx0aW1hZ2Uud2lkdGggPSAyMDtcclxuXHRcdFx0aW1hZ2UuaGVpZ2h0ID0gMjA7XHJcblx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoeyBuYW1lLCBpbWFnZSB9KTtcclxuXHRcdFx0aW1hZ2Uub25lcnJvciA9IGUgPT4gcmVqZWN0KGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRFJBVyA9IG5ldyBEcmF3KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9kcmF3LmpzIiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcblx0Y29uc3RydWN0b3IoaW1hZ2UsIGN4LCBjeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0dGhpcy54ID0gMDtcclxuXHRcdHRoaXMueSA9IDA7XHJcblx0XHR0aGlzLmltYWdlID0gaW1hZ2U7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGggfHwgdGhpcy5pbWFnZS53aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG5cdFx0dGhpcy5jeCA9IGN4IHx8IDA7XHJcblx0XHR0aGlzLmN5ID0gY3kgfHwgMDtcclxuXHR9XHJcblx0Z2V0IGN4KCkge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy54ICsgdGhpcy53aWR0aCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY3koKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnkgKyB0aGlzLmhlaWdodCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRzZXQgY3godmFsdWUpIHtcclxuXHRcdHRoaXMueCA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLndpZHRoICogMC41KTtcclxuXHR9XHJcblxyXG5cdHNldCBjeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy55ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMuaGVpZ2h0ICogMC41KTtcclxuXHR9XHJcblxyXG5cdGRyYXcoY3R4KSB7XHJcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9zcHJpdGUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL3BpenphLmRhdGEnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpY2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xyXG5cdH1cclxuXHJcblx0Y2FsY1ByaWNlKGNvbmRpdGlvbikge1xyXG5cdFx0Y29uc3QgZGF0YSA9IENSRUFURV9EQVRBLmluZ3JlZGllbnRzO1xyXG5cdFx0Y29uc3QgeyBzaXplLCBpbmdyZWRpZW50cyB9ID0gY29uZGl0aW9uO1xyXG5cdFx0bGV0IHByaWNlID0gJzAuMDAnO1xyXG5cclxuXHRcdGlmIChpbmdyZWRpZW50cy5sZW5ndGggIT09IDApIHtcclxuXHRcdFx0Y29uc3Qgc3VtID0gW107XHJcblx0XHRcdGluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XHJcblx0XHRcdFx0c3VtLnB1c2goZGF0YVtpbmdyZWRpZW50IC0gMV0ucHJpY2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cHJpY2UgPSBzdW1cclxuXHRcdFx0XHQucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcHJldiArIGN1cnI7XHJcblx0XHRcdFx0fSwgc2l6ZSAvIDUpXHJcblx0XHRcdFx0LnRvRml4ZWQoMik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHByaWNlO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBjb25kaXRpb24gfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgcHJpY2VTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgIDxzcGFuPlByaWNlOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3ByaWNlX19hbW91bnQnPiQgJHt0aGlzLmNhbGNQcmljZShjb25kaXRpb24pfTwvc3Bhbj5cclxuXHQgICAgYDtcclxuXHRcdGNvbnN0IHByaWNlRnJhZ21lbnQgPSB0b0h0bWwocHJpY2VTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIHByaWNlRnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEd1YXJkID0gcGFyYW0gPT4ge1xyXG5cdHJldHVybiBBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKClcclxuXHRcdD8gUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgcm91dGU6IHBhcmFtIH0pXHJcblx0XHQ6IFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IGZhbHNlLCByZWRpcmVjdDogJy9sb2dpbicgfSk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==