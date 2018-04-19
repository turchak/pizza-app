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
var DOMAIN = exports.DOMAIN = 'https://pizza-tele.ga';
var INGREDIENTS_URL = exports.INGREDIENTS_URL = DOMAIN + '/api/v1/ingredient/list';
var TAG_URL = exports.TAG_URL = DOMAIN + '/api/v1/tag/list';
var USER_URL = exports.USER_URL = DOMAIN + '/api/v1/user/my_info';
var CREATE_PIZZA = exports.CREATE_PIZZA = DOMAIN + '/api/v1/pizza/create';
var PIZZA_LIST = exports.PIZZA_LIST = DOMAIN + '/api/v1/pizza/list';
var WS_TICKET = exports.WS_TICKET = DOMAIN + '/api/v1/ws/ticket';
var WS_PATH = exports.WS_PATH = 'wss://pizza-tele.ga/ws';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AUTH_SERVICE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

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
			if (!localStorage.getItem('token')) return false;
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

var _auth = __webpack_require__(3);

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

var _auth = __webpack_require__(3);

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
exports.authGuard = undefined;

var _auth = __webpack_require__(3);

var authGuard = exports.authGuard = function authGuard() {
	var result = _auth.AUTH_SERVICE.isAuthorized() ? Promise.resolve({ success: true }) : Promise.resolve({ success: false, redirect: '/login' });
	return result;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CREATE_DATA = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authHttp = __webpack_require__(6);

var _constants = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PizzaDataService = function () {
	function PizzaDataService() {
		_classCallCheck(this, PizzaDataService);

		this.ingredients = [];
		this.tags = [];
		this.pizzas = [];
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
		key: 'getUnacceptedPizzas',
		value: function getUnacceptedPizzas(reset, limit, offset) {
			var _this = this;

			return _authHttp.AUTH_HTTP_SERVICE.get(_constants.PIZZA_LIST + '?limit=' + (limit || 100) + '&offset=' + (offset || 0)).then(function (res) {
				if (reset) {
					_this.pizzas = res.results;
				} else {
					_this.pizzas = _this.pizzas.concat(res.results);
				}
			});
		}
	}, {
		key: 'getIngredients',
		value: function getIngredients() {
			var _this2 = this;

			return _authHttp.AUTH_HTTP_SERVICE.get(_constants.INGREDIENTS_URL).then(function (data) {
				_this2.ingredients = data.results;
				return data.results;
			});
		}
	}, {
		key: 'getTags',
		value: function getTags() {
			var _this3 = this;

			return _authHttp.AUTH_HTTP_SERVICE.get(_constants.TAG_URL).then(function (data) {
				_this3.tags = data.results;
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

var _auth = __webpack_require__(8);

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


		_this.state = {
			routes: routes,
			activeRoute: null,
			activeComponent: null
		};

		_this.host = host;
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

				if (nextRoute.logout) {
					console.log('logout');
					this.handleLogout(nextRoute);
				}

				if (nextRoute.onEnter) {
					console.log('onEnter');
					this.handleOnEnter(nextRoute);
				}

				this.applyRoute(nextRoute);
			}
		}
	}, {
		key: 'handleLogout',
		value: function handleLogout(nextRoute) {
			nextRoute.logout();
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

			(0, _auth.authGuard)().then(function (res) {
				res.success ? null : _this2.handleRedirect(res.redirect);
			});
		}
	}, {
		key: 'applyRoute',
		value: function applyRoute(route) {
			var Component = route.Component;

			var componentInstance = new Component();

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

var _auth = __webpack_require__(8);

var _auth2 = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
	Component: _app2.default,
	href: '',
	redirectTo: '/'
}, {
	Component: _app2.default,
	href: '/',
	onEnter: _auth.authGuard
}, {
	Component: _login2.default,
	href: '/login'
}, {
	Component: _registration2.default,
	href: '/registration'
}, {
	Component: _user2.default,
	href: '/user',
	onEnter: _auth.authGuard
}, {
	Component: _app2.default,
	href: '/logout',
	logout: _auth2.AUTH_SERVICE.clearStorage,
	onEnter: _auth.authGuard
}, {
	Component: _create2.default,
	href: '/create',
	onEnter: _auth.authGuard
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

var _auth = __webpack_require__(3);

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

var _create = __webpack_require__(9);

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

			_create.CREATE_DATA.getUnacceptedPizzas(true, 12, 0).then(function (res) {
				_ws.WS.establish();
				_ws.WS.subscribe('CREATE_PIZZA', function (data) {
					_create.CREATE_DATA.addPizza(data);
					_this2.list.update({
						pizzas: _create.CREATE_DATA.pizzas
					});
				});
				_this2.list.update({
					pizzas: _create.CREATE_DATA.pizzas
				});
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

var _constants = __webpack_require__(2);

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
				return '\n            <article class="pizza">\n                <img class="pizza__img" src="' + _constants.DOMAIN + '/' + pizza.img_url + '" alt="' + pizza.name + '">\n                <h2 class="pizza__name">' + pizza.name + '</h2>\n\t\t\t\t<time class="pizza__time" datetime="\n\t\t\t\t' + pizza.time_prepared + '">' + pizza.time_prepared + '</time>\n                <span class="pizza__queue-number">#1</span>\n                <div class="pizza__eta">\n                    <span>eta</span>\n                    <time datetime="04:00">4</time>\n                    <span>min</span>\n                </div>\n                <div class="pizza__price">\n                    <span>$</span>\n                    <span>' + pizza.price + '</span>\n                </div>\n            </article> \n            ';
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

var _authHttp = __webpack_require__(6);

var _constants = __webpack_require__(2);

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
			return _authHttp.AUTH_HTTP_SERVICE.get(_constants.WS_TICKET).then(function (res) {
				return res;
			});
		}
	}, {
		key: 'subscribe',
		value: function subscribe(eventName, callback) {
			this._emitter.subscribe(eventName, callback);
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

var _auth = __webpack_require__(3);

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

var _authHttp = __webpack_require__(6);

var _constants = __webpack_require__(2);

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
			username: null,
			email: null,
			created: null,
			visited: null
		};
		_this.host = document.createElement('div');
		_this.host.classList.add('user-container');
		_this.header = new _header2.default();
		_this.footer = new _footer2.default();
		_this.getUserInfo();
		return _this;
	}

	_createClass(User, [{
		key: 'getUserInfo',
		value: function getUserInfo() {
			var _this2 = this;

			_authHttp.AUTH_HTTP_SERVICE.get(_constants.USER_URL).then(function (result) {
				_this2.updateState({
					username: result.username,
					email: result.email,
					created: result.created_at,
					visited: result.last_login
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
			    visited = _state.visited;

			var user = '\n        <main class="user">\n            <ul>\n                <li>' + username + '</li>\n                <li>' + email + '</li>\n                <li>' + created + '</li>\n                <li>' + visited + '</li>\n            </ul>\n        </main>\n        ';
			var fragment = (0, _utils.toHtml)(user);
			return [this.header.update(), fragment, this.footer.update()];
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

var _create = __webpack_require__(9);

var _utils = __webpack_require__(1);

var _constants = __webpack_require__(2);

var _draw = __webpack_require__(24);

var _authHttp = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPizza = function (_Component) {
	_inherits(NewPizza, _Component);

	function NewPizza(props) {
		_classCallCheck(this, NewPizza);

		var _this = _possibleConstructorReturn(this, (NewPizza.__proto__ || Object.getPrototypeOf(NewPizza)).call(this, props));

		_this.state = {
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
		_this.handleResize = _this.handleResize.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(NewPizza, [{
		key: 'handleSubmit',
		value: function handleSubmit(ev) {
			ev.preventDefault();
			var _state = this.state,
			    size = _state.size,
			    ingredients = _state.ingredients,
			    tags = _state.tags;

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
				return _authHttp.AUTH_HTTP_SERVICE.post(_constants.CREATE_PIZZA, fd).then(function (result) {
					return console.log(result);
				});
			});
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			Promise.all([_create.CREATE_DATA.getIngredients(), _create.CREATE_DATA.getTags()]).then(function () {
				var container = document.querySelector('.create__options');
				container.addEventListener('change', _this2.handleClick);
				var canvas = document.querySelector('.create__canvas');
				var form = document.createElement('form');
				var buttonsString = '\n                    <div class=\'create__button\'>\n                        <button class=\'button create__button-cancel\' type=\'button\'>cancel</button>\n                        <button class=\'button create__button-send\' type=\'submit\'>create</button>\n                    </div>\n                ';
				var buttons = (0, _utils.toHtml)(buttonsString);
				form.addEventListener('submit', _this2.handleSubmit);
				container.appendChild(form);
				form.append(_this2.renderForm());
				form.appendChild(_this2.renderIngredients(_create.CREATE_DATA.ingredients));
				form.appendChild(_this2.renderTags(_create.CREATE_DATA.tags));
				form.appendChild(buttons);
				_draw.DRAW.onInit({
					host: canvas,
					ingredients: _create.CREATE_DATA.ingredients
				});
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick(ev) {
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

				this.state = Object.assign({}, this.state, {
					options: newOptions
				});
				this.state = Object.assign({}, this.state, {
					ingredients: newIngredients
				});
				// console.log(this.state);
				var _state2 = this.state,
				    size = _state2.size,
				    options = _state2.options;

				_draw.DRAW.handleClick(options, size);
			}
			return false;
		}
	}, {
		key: 'handleResize',
		value: function handleResize(ev) {
			var _this3 = this;

			if (ev.target.dataset.attr === 'size') {
				var sizeFields = document.querySelectorAll('[data-attr]');
				sizeFields.forEach(function (sizeField) {
					if (sizeField.checked) {
						var newSize = sizeField.value;
						_this3.state = Object.assign({}, _this3.state, {
							size: newSize
						});
					}
				});
				var _state3 = this.state,
				    size = _state3.size,
				    options = _state3.options;

				_draw.DRAW.handleClick(options, size);
			}
		}
	}, {
		key: 'renderForm',
		value: function renderForm() {
			var formString = '\n        <label>\n            <span class=\'create__name\'>Pizza Name</span>\n            <input type=\'text\' name=\'name\' required min=\'3\' max=\'24\' class=\'create__name-value\'>\n        </label>\n        <label>\n            <span>Description</span>\n            <textarea class=\'create__description\'></textarea>\n        </label>\n        <label class=\'create__size\'>\n            <span class=\'create__size-title\'>Size</span>\n            <label class=\'create__size-option\'>\n                <span>30</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'30\' data-attr=\'size\'>\n                <i class="fas fa-circle create__size-option--small"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>45</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'45\' data-attr=\'size\'>\n                <i class="fas fa-circle create__size-option--medium"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>60</span>\n                <input class=\'create__size-option-value\' type=\'radio\' name=\'size\' value=\'60\' data-attr=\'size\' checked>\n                <i class="fas fa-circle create__size-option--large"></i>\n            </label>    \n        </label>\n            <h2 class=\'create__ingredients-title\'>Ingredients<h2>\n        ';

			var form = (0, _utils.toHtml)(formString);
			var sizeFields = form.querySelector('.create__size');
			sizeFields.addEventListener('change', this.handleResize);
			return form;
		}
	}, {
		key: 'renderIngredients',
		value: function renderIngredients(data) {
			var ingredientsString = '   \n                <div class=\'create__ingredients\'>' + data.reduce(function (html, data) {
				html += '\n                        <label class=\'create__ingredients-item\'>\n                            <input class=\'create__ingredients-input\' type=\'checkbox\' value=\'' + data.name + '\' data-flag=\'ingredient\' data-id=\'' + data.id + '\'>\n                            <img src=\'' + _constants.DOMAIN + '/' + data.image_url + '\' class=\'create__ingredients\' title=\'' + data.description + '\' data-name=\'ingredient\'>\n                            <span>' + data.name + '</span>\n                        </label>\n                        ';
				return html;
			}, '') + '\n                </div>\n                <h2 class=\'create__tag-title\'>Tag<h2>\n        ';
			var fragment = (0, _utils.toHtml)(ingredientsString);
			return fragment;
		}
	}, {
		key: 'renderTags',
		value: function renderTags(data) {
			var tagsString = '\n                <div class=\'create__tags\'>' + data.reduce(function (html, data) {
				html += '\n                        <label class=\'create__tags-item\'>\n                            <input type=\'checkbox\'>\n                            <span>' + data.name + '</span>\n                        </label>\n                        ';
				return html;
			}, '') + '\n                </div>\n        ';
			var fragment = (0, _utils.toHtml)(tagsString);
			return fragment;
		}
	}, {
		key: 'render',
		value: function render() {
			var containerString = '\n            <main class=\'create\'>\n                <div class=\'container create__container\'>\n                    <h1 class=\'create__title\'>Create Pizza</h1>\n                    <section class=\'create__canvas\'></section>\n                    <section class=\'create__options\'></section>\n                </div>\n            </main>\n        ';
			var fragment = (0, _utils.toHtml)(containerString);

			return [this.header.update(), fragment, this.footer.update()];
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

var _constants = __webpack_require__(2);

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
				image.onload = function () {
					return resolve({ name: name, image: image });
				};
				image.onerror = function (e) {
					return reject(e);
				};
				image.src = url;
				image.width = 20;
				image.height = 20;
				image.crossOrigin = '';
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA1ZTEwMmI1MjNkMmE3MzIyNjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jcmVhdGUuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3dzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9ldmVudC5lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9kcmF3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9zcHJpdGUuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsImhvc3QiLCJvbkluaXQiLCJuZXh0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJfcmVuZGVyIiwibmV4dFByb3BzIiwib25CZWZvcmVVbm1vdW50IiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJpbm5lckhUTUwiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0b0h0bWwiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0cmluZyIsImNvbnRlbnQiLCJSQU5ET00iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJET01BSU4iLCJJTkdSRURJRU5UU19VUkwiLCJUQUdfVVJMIiwiVVNFUl9VUkwiLCJDUkVBVEVfUElaWkEiLCJQSVpaQV9MSVNUIiwiV1NfVElDS0VUIiwiV1NfUEFUSCIsIkF1dGhTZXJ2aWNlIiwiX3Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9jbGFpbXMiLCJKU09OIiwicGFyc2UiLCJsb2dpblVybCIsInN0b3JlVXJsIiwiY3JlYXRlVXJsIiwidG9rZW5Jc05vdEV4cGlyZWQiLCJjbGVhclN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidG9rZW4iLCJjbGFpbXMiLCJleHAiLCJEYXRlIiwibm93IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJvcHRpb25zIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJIZWFkZXJzIiwib2siLCJhbnN3ZXIiLCJwYXJzZUp3dENsYWltcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhdHVzIiwicmVqZWN0Iiwiand0VG9rZW4iLCJiYXNlNjRVcmwiLCJzcGxpdCIsImJhc2U2NCIsInJlcGxhY2UiLCJ3aW5kb3ciLCJhdG9iIiwic2V0SXRlbSIsIkFVVEhfU0VSVklDRSIsIkZvb3RlciIsImNsYXNzTGlzdCIsImFkZCIsIkhlYWRlciIsImlzQXV0aG9yaXplZCIsImxvZ2luQnV0dG9uIiwibG9nb3V0QnV0dG9uIiwidXNlckJ1dHRvbiIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsImhlYWRlciIsImZyYWdtZW50IiwiQXV0aEh0dHBTZXJ2aWNlIiwidXJsIiwiRXJyb3IiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiQVVUSF9IVFRQX1NFUlZJQ0UiLCJBUFBfUk9VVEVSIiwicXVlcnlTZWxlY3RvciIsInJvdXRlcyIsImF1dGhHdWFyZCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJyZWRpcmVjdCIsIlBpenphRGF0YVNlcnZpY2UiLCJpbmdyZWRpZW50cyIsInRhZ3MiLCJwaXp6YXMiLCJwaXp6YSIsImZpbmRJbmRleCIsInV1aWQiLCJwIiwidW5zaGlmdCIsInJlc2V0IiwibGltaXQiLCJvZmZzZXQiLCJnZXQiLCJyZXN1bHRzIiwiY29uY2F0IiwiQ1JFQVRFX0RBVEEiLCJSb3V0ZXIiLCJhY3RpdmVSb3V0ZSIsImFjdGl2ZUNvbXBvbmVudCIsImhhbmRsZVVybENoYW5nZSIsImJpbmQiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1cGRhdGVTdGF0ZSIsInVwZGF0ZSIsInNsaWNlIiwiTG9naW4iLCJsb2dpbkZvcm0iLCJmb290ZXIiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImV2IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJsb2dpblVzZXIiLCJ0ZXh0IiwiZXJyb3IiLCJsb2dpblN0cmluZyIsImxvZ2luRnJhZ21lbnQiLCJlcnJvck1lc3NhZ2UiLCJhcHBlbmRDaGlsZCIsIkVycm9yTWVzc2FnZSIsIkFwcCIsImxpc3QiLCJnZXRVbmFjY2VwdGVkUGl6emFzIiwiZXN0YWJsaXNoIiwic3Vic2NyaWJlIiwiYWRkUGl6emEiLCJjb250YWluZXJTdHJpbmciLCJjb250YWluZXJGcmFnbWVudCIsImNvbnRhaW5lciIsIlBpenphTGlzdCIsImltZ191cmwiLCJ0aW1lX3ByZXBhcmVkIiwicHJpY2UiLCJmb3JFYWNoIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJXcyIsIndzIiwiX2VtaXR0ZXIiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImV2ZW50IiwiZW1pdCIsImV2ZW50X25hbWUiLCJlIiwiY29kZSIsInNldFRpbWVvdXQiLCJfZXN0YWJsaXNoIiwiZ2V0VGlja2V0IiwiV2ViU29ja2V0Iiwib25vcGVuIiwib25tZXNzYWdlIiwiX29ubWVzc2FnZSIsIm9uY2xvc2UiLCJfb25jbG9zZSIsIldTIiwiRXZlbnRFbWl0dGVyIiwiZXZlbnRzIiwiZm4iLCJjYWxsIiwicHVzaCIsImZpbHRlciIsImV2ZW50Rm4iLCJSZWdpc3RyYXRpb24iLCJyZWdpc3RyYXRpb24iLCJSZWdpc3RyYXRpb25Gb3JtIiwic3RvcmVzIiwiZ2V0U3RvcmVzIiwic3RvcmVJbmZvIiwicGFzc3dvcmRfcmVwZWF0IiwiZW1haWwiLCJzdG9yZV9pZCIsInBhcnNlSW50Iiwic3RvcmUiLCJzZWxlY3RlZEluZGV4IiwiZGF0YXNldCIsImlkIiwic3RvcmVfcGFzc3dvcmQiLCJyZWdpc3RlclVzZXIiLCJzZWxlY3QiLCJoaWRkZW4iLCJvcHRpb24iLCJlbGVtZW50IiwiZm9ybSIsIlVzZXIiLCJjcmVhdGVkIiwidmlzaXRlZCIsImdldFVzZXJJbmZvIiwiY3JlYXRlZF9hdCIsImxhc3RfbG9naW4iLCJ1c2VyIiwiTmV3UGl6emEiLCJzaXplIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSZXNpemUiLCJjYW52YXMiLCJkZXNjcmlwdGlvbiIsImZkIiwiRm9ybURhdGEiLCJ0b0Jsb2IiLCJibG9iIiwicG9zdCIsImFsbCIsImdldEluZ3JlZGllbnRzIiwiZ2V0VGFncyIsImJ1dHRvbnNTdHJpbmciLCJidXR0b25zIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwicmVuZGVyVGFncyIsImZsYWciLCJpbmdyZWRpZW50c0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXdPcHRpb25zIiwibmV3SW5ncmVkaWVudHMiLCJpbmdyZWRpZW50SW5wdXQiLCJjaGVja2VkIiwiYXR0ciIsInNpemVGaWVsZHMiLCJzaXplRmllbGQiLCJuZXdTaXplIiwiZm9ybVN0cmluZyIsImluZ3JlZGllbnRzU3RyaW5nIiwicmVkdWNlIiwiaHRtbCIsImltYWdlX3VybCIsInRhZ3NTdHJpbmciLCJEcmF3IiwiY3J1c3RfcGl6emEiLCJfbG9hZEltYWdlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaW1hZ2VzIiwic3ByaXRlcyIsImxhc3RPcHRpb25zIiwiYnVmZmVyIiwic3ByaXRlc1Bvb2wiLCJ3aWR0aCIsImhlaWdodCIsIl9sb2FkUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwicmVzb3VyY2UiLCJpbWFnZSIsIl9zdGFydFNldCIsIl9kcmF3IiwiZmlsdGVyZWRFbGVtIiwiZWxlbSIsIngiLCJ5IiwicHJlQnVmZmVyIiwiZWwiLCJpbmNsdWRlcyIsIl9nZW5lcmF0ZVNwcml0ZSIsImNvdW50IiwiaSIsImluZ3JlZGllbnQiLCJjbGVhclJlY3QiLCJzcHJpdGUiLCJkcmF3IiwicHJvbWlzZXMiLCJtYXAiLCJpbmdyX3VybCIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsImNyb3NzT3JpZ2luIiwiRFJBVyIsIlNwcml0ZSIsImN4IiwiY3kiLCJkcmF3SW1hZ2UiLCJyb3VuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdETUEsUztBQUNMLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2xCLE9BQUtBLEtBQUwsR0FBYUEsU0FBUyxFQUF0QjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxPQUFLQyxNQUFMO0FBQ0E7Ozs7OEJBRVdDLFMsRUFBVztBQUN0QixRQUFLSCxL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QUFXTCxLQUFqQztBQUNBLE9BQUtDLE1BQUwsR0FBY0EsVUFBVSxLQUFLSSxLQUFMLENBQVdKLE1BQW5DO0FBQ0EsT0FBSytCLEVBQUwsR0FBVUEsTUFBTSxDQUFoQjtBQUNBLE9BQUtDLEVBQUwsR0FBVUEsTUFBTSxDQUFoQjtBQUNBOzs7O3VCQWlCSTFDLEcsRUFBSztBQUNUQSxPQUFJMkMsU0FBSixDQUFjLEtBQUs3QixLQUFuQixFQUEwQixLQUFLSyxDQUEvQixFQUFrQyxLQUFLQyxDQUF2QyxFQUEwQyxLQUFLWCxLQUEvQyxFQUFzRCxLQUFLQyxNQUEzRDtBQUNBOzs7c0JBbEJRO0FBQ1IsVUFBT3pRLEtBQUsyUyxLQUFMLENBQVcsS0FBS3pCLENBQUwsR0FBUyxLQUFLVixLQUFMLEdBQWEsR0FBakMsQ0FBUDtBQUNBLEc7b0JBTU1sSSxLLEVBQU87QUFDYixRQUFLNEksQ0FBTCxHQUFTbFIsS0FBSzJTLEtBQUwsQ0FBV3JLLFFBQVEsS0FBS2tJLEtBQUwsR0FBYSxHQUFoQyxDQUFUO0FBQ0E7OztzQkFOUTtBQUNSLFVBQU94USxLQUFLMlMsS0FBTCxDQUFXLEtBQUt4QixDQUFMLEdBQVMsS0FBS1YsTUFBTCxHQUFjLEdBQWxDLENBQVA7QUFDQSxHO29CQU1NbkksSyxFQUFPO0FBQ2IsUUFBSzZJLENBQUwsR0FBU25SLEtBQUsyUyxLQUFMLENBQVdySyxRQUFRLEtBQUttSSxNQUFMLEdBQWMsR0FBakMsQ0FBVDtBQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwNWUxMDJiNTIzZDJhNzMyMjY2IiwiY2xhc3MgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xyXG5cdFx0dGhpcy5ob3N0ID0gbnVsbDtcclxuXHRcdHRoaXMub25Jbml0KCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KCkge31cclxuXHJcblx0dXBkYXRlKG5leHRQcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuXHRcdHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdHVubW91bnQoKSB7XHJcblx0XHR0aGlzLm9uQmVmb3JlVW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblx0b25CZWZvcmVVbm1vdW50KCkge31cclxuXHJcblx0b25CZWZvcmVVcGRhdGUobmV4dFByb3BzKSB7fVxyXG5cclxuXHRnZXQgbmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxuXHRfcmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xyXG5cclxuXHRcdHRoaXMuaG9zdC5pbm5lckhUTUwgPSAnJztcclxuXHRcdGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdHRoaXMuaG9zdC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcclxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZCguLi5jaGlsZHJlbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKGNoaWxkcmVuKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5ob3N0O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL2NvbXBvbmVudC5qcyIsImV4cG9ydCBjb25zdCB0b0h0bWwgPSBzdHJpbmcgPT4ge1xyXG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHJpbmc7XHJcblx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkFORE9NID0gKG1pbiwgbWF4KSA9PiB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy91dGlscy5qcyIsImV4cG9ydCBjb25zdCBET01BSU4gPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhJztcclxuZXhwb3J0IGNvbnN0IElOR1JFRElFTlRTX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL2luZ3JlZGllbnQvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBUQUdfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdGFnL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVVNFUl9VUkwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL215X2luZm9gO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BJWlpBID0gYCR7RE9NQUlOfS9hcGkvdjEvcGl6emEvY3JlYXRlYDtcclxuZXhwb3J0IGNvbnN0IFBJWlpBX0xJU1QgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFdTX1RJQ0tFVCA9IGAke0RPTUFJTn0vYXBpL3YxL3dzL3RpY2tldGA7XHJcbmV4cG9ydCBjb25zdCBXU19QQVRIID0gJ3dzczovL3BpenphLXRlbGUuZ2Evd3MnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvY29uc3RhbnRzLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGFpbXMnKSk7XHJcblx0XHR0aGlzLmxvZ2luVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9sb2dpbmA7XHJcblx0XHR0aGlzLnN0b3JlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvc3RvcmUvbGlzdGA7XHJcblx0XHR0aGlzLmNyZWF0ZVVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvY3JlYXRlYDtcclxuXHR9XHJcblxyXG5cdGdldCB0b2tlbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b2tlbjtcclxuXHR9XHJcblxyXG5cdHNldCB0b2tlbih0b2tlbikge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuXHR9XHJcblxyXG5cdGdldCBjbGFpbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2xhaW1zO1xyXG5cdH1cclxuXHJcblx0c2V0IGNsYWltcyhjbGFpbXMpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IGNsYWltcztcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGFpbXMnLCBKU09OLnN0cmluZ2lmeShjbGFpbXMpKTtcclxuXHR9XHJcblxyXG5cdGlzQXV0aG9yaXplZCgpIHtcclxuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHJldHVybiBmYWxzZTtcclxuXHRcdGlmICghdGhpcy50b2tlbklzTm90RXhwaXJlZCgpKSB7XHJcblx0XHRcdHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTdG9yYWdlKCkge1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gbnVsbDtcclxuXHRcdHRoaXMuX3Rva2VuID0gbnVsbDtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NsYWltcycpO1xyXG5cdH1cclxuXHJcblx0dG9rZW5Jc05vdEV4cGlyZWQoKSB7XHJcblx0XHRpZiAoIXRoaXMudG9rZW4pIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiB0aGlzLmNsYWltcy5leHAgKiAxMDAwID4gRGF0ZS5ub3coKTtcclxuXHR9XHJcblxyXG5cdHN0b3JlSW5mbygpIHtcclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLnN0b3JlVXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luVXNlcihkYXRhKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKCkuYXBwZW5kKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5sb2dpblVybCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzLm9rKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50b2tlbiA9IGFuc3dlci50b2tlbjtcclxuXHRcdFx0XHRcdHRoaXMuY2xhaW1zID0gdGhpcy5wYXJzZUp3dENsYWltcyhhbnN3ZXIudG9rZW4pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IFByb21pc2UucmVqZWN0KHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMuY3JlYXRlVXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdHBhcnNlSnd0Q2xhaW1zKGp3dFRva2VuKSB7XHJcblx0XHRpZiAoand0VG9rZW4pIHtcclxuXHRcdFx0bGV0IGJhc2U2NFVybCA9IGp3dFRva2VuLnNwbGl0KCcuJylbMV07XHJcblx0XHRcdGxldCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgnLScsICcrJykucmVwbGFjZSgnXycsICcvJyk7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfU0VSVklDRSA9IG5ldyBBdXRoU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhZGRyZXNzPktvdHRhbnMsIEtvdHRhbnMgU3J0LiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzU3Nzc4ODg3XCI+dGVsLiA1NzctNzg4LTg3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPlBpenphIE1hbmFnZXIgJmNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE4LTAxLTAxXCI+MjAxODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvL1RPRE86IG5lZWQgZGVsZXRlIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJsb2dpbl9fYnV0dG9uLWxpbmtcIj5zaWduIGluPC9hPlxyXG5cdFx0Y29uc3QgaXNBdXRob3JpemVkID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluXCI+c2lnbiBpbjwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgbG9nb3V0QnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dvdXRcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1vdXRcIj5zaWduIG91dDwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgdXNlckJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvdXNlclwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluZm9cIj51c2VyIGluZm88L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvcmVnaXN0cmF0aW9uXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tdXBcIj5zaWduIHVwPC9hPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY3VycmVudC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNjbG9ja1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMi0wMyAxMjowMTo0OFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCIjL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2dvXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJhdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyBsb2dvdXRCdXR0b24gOiBsb2dpbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAke2lzQXV0aG9yaXplZCA/IHVzZXJCdXR0b24gOiByZWdpc3RyYXRpb25CdXR0b259IFxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChoZWFkZXIpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmNsYXNzIEF1dGhIdHRwU2VydmljZSB7XHJcblx0Z2V0KHVybCkge1xyXG5cdFx0aWYgKCFBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm9uLWF1dGhvcml6ZWQgcmVxdWVzdCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZldGNoKHVybCwge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cG9zdCh1cmwsIGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGF0Y2goKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9IVFRQX1NFUlZJQ0UgPSBuZXcgQXV0aEh0dHBTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vZnJhbWV3b3JrL3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVIgPSBuZXcgUm91dGVyKHsgaG9zdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSwgcm91dGVzIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW5kZXguanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoR3VhcmQgPSAoKSA9PiB7XHJcblx0Y29uc3QgcmVzdWx0ID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpXHJcblx0XHQ/IFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUgfSlcclxuXHRcdDogUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogZmFsc2UsIHJlZGlyZWN0OiAnL2xvZ2luJyB9KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyIsImltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoLWh0dHAnO1xyXG5pbXBvcnQgeyBJTkdSRURJRU5UU19VUkwsIFRBR19VUkwsIFBJWlpBX0xJU1QgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YURhdGFTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW5ncmVkaWVudHMgPSBbXTtcclxuXHRcdHRoaXMudGFncyA9IFtdO1xyXG5cdFx0dGhpcy5waXp6YXMgPSBbXTtcclxuXHR9XHJcblxyXG5cdGFkZFBpenphKHBpenphKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHRoaXMucGl6emFzLmZpbmRJbmRleChwID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcGl6emEudXVpZCA9PT0gcC51dWlkO1xyXG5cdFx0XHR9KSAhPSAtMVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMucGl6emFzLnVuc2hpZnQocGl6emEpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXRVbmFjY2VwdGVkUGl6emFzKHJlc2V0LCBsaW1pdCwgb2Zmc2V0KSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KGAke1BJWlpBX0xJU1R9P2xpbWl0PSR7bGltaXQgfHwgMTAwfSZvZmZzZXQ9JHtvZmZzZXQgfHwgMH1gKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXNldCkge1xyXG5cdFx0XHRcdFx0dGhpcy5waXp6YXMgPSByZXMucmVzdWx0cztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5waXp6YXMgPSB0aGlzLnBpenphcy5jb25jYXQocmVzLnJlc3VsdHMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEluZ3JlZGllbnRzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChJTkdSRURJRU5UU19VUkwpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldFRhZ3MoKSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFRBR19VUkwpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMudGFncyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0cmV0dXJuIGRhdGEucmVzdWx0cztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9EQVRBID0gbmV3IFBpenphRGF0YVNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NyZWF0ZS5kYXRhLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgYXV0aEd1YXJkIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0Y29uc3QgeyByb3V0ZXMsIGhvc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0cm91dGVzLFxyXG5cdFx0XHRhY3RpdmVSb3V0ZTogbnVsbCxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBob3N0O1xyXG5cdFx0dGhpcy5oYW5kbGVVcmxDaGFuZ2UgPSB0aGlzLmhhbmRsZVVybENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5hcHBseVJvdXRlID0gdGhpcy5hcHBseVJvdXRlLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHBhdGgoKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVVcmxDaGFuZ2UodXJsKSB7XHJcblx0XHRjb25zdCB7IHJvdXRlcywgYWN0aXZlUm91dGUgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCBuZXh0Um91dGUgPSByb3V0ZXMuZmluZCgoeyBocmVmIH0pID0+IGhyZWYgPT09IHVybCk7XHJcblxyXG5cdFx0aWYgKG5leHRSb3V0ZSAmJiBuZXh0Um91dGUgIT09IGFjdGl2ZVJvdXRlKSB7XHJcblx0XHRcdGlmIChuZXh0Um91dGUucmVkaXJlY3RUbykge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhbmRsZVJlZGlyZWN0KG5leHRSb3V0ZS5yZWRpcmVjdFRvKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5sb2dvdXQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9nb3V0Jyk7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2dvdXQobmV4dFJvdXRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5vbkVudGVyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ29uRW50ZXInKTtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hcHBseVJvdXRlKG5leHRSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVMb2dvdXQobmV4dFJvdXRlKSB7XHJcblx0XHRuZXh0Um91dGUubG9nb3V0KCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVSZWRpcmVjdCh1cmwpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlT25FbnRlcihuZXh0Um91dGUpIHtcclxuXHRcdGF1dGhHdWFyZCgpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0cmVzLnN1Y2Nlc3MgPyBudWxsIDogdGhpcy5oYW5kbGVSZWRpcmVjdChyZXMucmVkaXJlY3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhcHBseVJvdXRlKHJvdXRlKSB7XHJcblx0XHRjb25zdCB7IENvbXBvbmVudCB9ID0gcm91dGU7XHJcblx0XHRjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IG5ldyBDb21wb25lbnQoKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZVN0YXRlKHtcclxuXHRcdFx0YWN0aXZlUm91dGU6IHJvdXRlLFxyXG5cdFx0XHRhY3RpdmVDb21wb25lbnQ6IGNvbXBvbmVudEluc3RhbmNlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGFjdGl2ZUNvbXBvbmVudCB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdHJldHVybiBhY3RpdmVDb21wb25lbnQudXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwiaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlcic7XHJcbmltcG9ydCBOZXdQaXp6YSBmcm9tICcuL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZSc7XHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vdXRpbHMvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnJyxcclxuXHRcdHJlZGlyZWN0VG86ICcvJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJy8nLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBMb2dpbixcclxuXHRcdGhyZWY6ICcvbG9naW4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBSZWdpc3RyYXRpb24sXHJcblx0XHRocmVmOiAnL3JlZ2lzdHJhdGlvbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IFVzZXIsXHJcblx0XHRocmVmOiAnL3VzZXInLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnL2xvZ291dCcsXHJcblx0XHRsb2dvdXQ6IEFVVEhfU0VSVklDRS5jbGVhclN0b3JhZ2UsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IE5ld1BpenphLFxyXG5cdFx0aHJlZjogJy9jcmVhdGUnLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vbG9naW4uZm9ybSc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxvZ2luRm9ybSA9IG5ldyBMb2dpbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCB0aGlzLmxvZ2luRm9ybS51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL25vdGlmaWNhdGlvbi9lcnJvci5tZXNzYWdlJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCB7IEFQUF9ST1VURVIgfSBmcm9tICcuLi8uLi9pbmRleCc7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VybmFtZTogbnVsbCxcclxuXHRcdFx0cGFzc3dvcmQ6IG51bGwsXHJcblx0XHRcdG1lc3NhZ2U6IG51bGwsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luJyk7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLmxvZ2luVXNlcihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdFx0XHRcdEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RhdHVzID0+IHtcclxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gc3RhdHVzLmFuc3dlci5lcnJvcjtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHRleHQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBtZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luU3RyaW5nID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgdmFsdWU9XHJcblx0XHRcdFx0JHt1c2VybmFtZSA/IHVzZXJuYW1lIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiB2YWx1ZT1cclxuXHRcdFx0XHQke3Bhc3N3b3JkID8gcGFzc3dvcmQgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBsb2dpbkZyYWdtZW50ID0gdG9IdG1sKGxvZ2luU3RyaW5nKTtcclxuXHJcblx0XHRpZiAobWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UudXBkYXRlKHsgdGV4dDogbWVzc2FnZSB9KTtcclxuXHRcdFx0bG9naW5GcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2J1dHRvbicpLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bG9naW5GcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRyZXR1cm4gbG9naW5GcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fY29udGFpbmVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHRleHQgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX190ZXh0Jyk7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cdFx0cmV0dXJuIGVycm9yO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBQaXp6YUxpc3QgZnJvbSAnLi4vbGlzdC9saXN0JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZS5kYXRhJztcclxuaW1wb3J0IHsgV1MgfSBmcm9tICcuLi8uLi91dGlscy93cyc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdhcHAnKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5saXN0ID0gbmV3IFBpenphTGlzdCgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7XHJcblx0XHRDUkVBVEVfREFUQS5nZXRVbmFjY2VwdGVkUGl6emFzKHRydWUsIDEyLCAwKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFdTLmVzdGFibGlzaCgpO1xyXG5cdFx0XHRXUy5zdWJzY3JpYmUoJ0NSRUFURV9QSVpaQScsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdENSRUFURV9EQVRBLmFkZFBpenphKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMubGlzdC51cGRhdGUoe1xyXG5cdFx0XHRcdFx0cGl6emFzOiBDUkVBVEVfREFUQS5waXp6YXMsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmxpc3QudXBkYXRlKHtcclxuXHRcdFx0XHRwaXp6YXM6IENSRUFURV9EQVRBLnBpenphcyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuXHRcdDxtYWluIGNsYXNzPVwibWFpbiBwaXp6YXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwaXp6YXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMvY3JlYXRlXCIgY2xhc3M9XCJidXR0b24gYWRkLWxpbmtcIj5hZGQgcGl6emE8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuXHRcdGA7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyRnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lckZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waXp6YXNfX2NvbnRhaW5lcicpO1xyXG5cclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGhpcy5saXN0LnVwZGF0ZSgpKTtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBjb250YWluZXJGcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgUGl6emFMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGl6emEocGl6emFzKSB7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblx0XHRjb25zdCBsaXN0ID0gcGl6emEgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYFxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBpenphXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicGl6emFfX2ltZ1wiIHNyYz1cIiR7RE9NQUlOfS8ke3BpenphLmltZ191cmx9XCIgYWx0PVwiJHtwaXp6YS5uYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGl6emFfX25hbWVcIj4ke3BpenphLm5hbWV9PC9oMj5cclxuXHRcdFx0XHQ8dGltZSBjbGFzcz1cInBpenphX190aW1lXCIgZGF0ZXRpbWU9XCJcclxuXHRcdFx0XHQke3BpenphLnRpbWVfcHJlcGFyZWR9XCI+JHtwaXp6YS50aW1lX3ByZXBhcmVkfTwvdGltZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGl6emFfX3F1ZXVlLW51bWJlclwiPiMxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ldGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIwNDowMFwiPjQ8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+bWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3BpenphLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+IFxyXG4gICAgICAgICAgICBgO1xyXG5cdFx0fTtcclxuXHJcblx0XHRwaXp6YXMuZm9yRWFjaChwaXp6YSA9PiB7XHJcblx0XHRcdGNvbnRhaW5lci5pbm5lckhUTUwgKz0gbGlzdChwaXp6YSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gY29udGFpbmVyO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBsaXN0X19jb250YWluZXJcIj5cclxuICAgICAgICA8L2Rpdj5cclxuXHRcdGA7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyRnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lckZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19jb250YWluZXInKTtcclxuXHJcblx0XHRpZiAodGhpcy5wcm9wcykge1xyXG5cdFx0XHRjb25zdCB7IHBpenphcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRcdGlmIChwaXp6YXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0Y29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQodGhpcy5jcmVhdGVQaXp6YShwaXp6YXMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBpenphTGlzdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwiaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IFdTX1RJQ0tFVCwgV1NfUEFUSCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi9ldmVudC5lbWl0dGVyJztcclxuXHJcbmNsYXNzIFdzIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMud3MgPSBudWxsO1xyXG5cdFx0dGhpcy5fZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldFRpY2tldCgpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoV1NfVElDS0VUKS50aGVuKHJlcyA9PiByZXMpO1xyXG5cdH1cclxuXHJcblx0c3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcclxuXHRcdHRoaXMuX2VtaXR0ZXIuc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG5cdH1cclxuXHJcblx0X29ubWVzc2FnZShkYXRhKSB7XHJcblx0XHRjb25zdCBldmVudCA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblx0XHR0aGlzLl9lbWl0dGVyLmVtaXQoZXZlbnQuZXZlbnRfbmFtZSwgZXZlbnQuZGF0YSk7XHJcblx0fVxyXG5cclxuXHRfb25jbG9zZShlKSB7XHJcblx0XHRpZiAoZS5jb2RlID09PSA0MDAxKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb2dpbiBwbHonKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb3N0IGNvbm5lY3Rpb24gLi4uIHJlY29ubmVjdCcpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuX2VzdGFibGlzaCwgMjAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRlc3RhYmxpc2goKSB7XHJcblx0XHR0aGlzLmdldFRpY2tldCgpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KGAke1dTX1BBVEh9P2tleT0ke2RhdGEudG9rZW59YCk7XHJcblx0XHRcdHRoaXMud3Mub25vcGVuID0gY29uc29sZS5sb2c7XHJcblx0XHRcdHRoaXMud3Mub25tZXNzYWdlID0gZSA9PiB0aGlzLl9vbm1lc3NhZ2UoZS5kYXRhKTtcclxuXHRcdFx0dGhpcy53cy5vbmNsb3NlID0gZSA9PiB0aGlzLl9vbmNsb3NlKGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV1MgPSBuZXcgV3MoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3dzLmpzIiwiZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmV2ZW50cyA9IHt9O1xyXG5cdH1cclxuXHJcblx0ZW1pdChldmVudE5hbWUsIGRhdGEpIHtcclxuXHRcdGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcclxuXHRcdGlmIChldmVudCkge1xyXG5cdFx0XHRldmVudC5mb3JFYWNoKGZuID0+IHtcclxuXHRcdFx0XHRmbi5jYWxsKG51bGwsIGRhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XHJcblx0XHRpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuXHRcdFx0dGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnRGbiA9PiBmbiAhPT0gZXZlbnRGbik7XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvZXZlbnQuZW1pdHRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4vcmVnaXN0cmF0aW9uLmZvcm0nO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIHRoaXMucmVnaXN0cmF0aW9uLnVwZGF0ZSgpLCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHN0b3JlczogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb24nKTtcclxuXHRcdHRoaXMuZ2V0U3RvcmVzKCk7XHJcblx0fVxyXG5cclxuXHRnZXRTdG9yZXMoKSB7XHJcblx0XHRBVVRIX1NFUlZJQ0Uuc3RvcmVJbmZvKCkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLnN0YXRlLnN0b3JlcyA9IHJlc3VsdDtcclxuXHRcdFx0dGhpcy51cGRhdGVTdGF0ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VybmFtZTogZXYudGFyZ2V0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmQ6IGV2LnRhcmdldC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkX3JlcGVhdDogZXYudGFyZ2V0LnBhc3N3b3JkX3JlcGVhdC52YWx1ZS50cmltKCksXHJcblx0XHRcdGVtYWlsOiBldi50YXJnZXQuZW1haWwudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRzdG9yZV9pZDogcGFyc2VJbnQoZXYudGFyZ2V0LnN0b3JlLm9wdGlvbnNbZXYudGFyZ2V0LnN0b3JlLnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQuaWQpLFxyXG5cdFx0XHRzdG9yZV9wYXNzd29yZDogZXYudGFyZ2V0LnN0b3JlX3Bhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdH07XHJcblx0XHRBVVRIX1NFUlZJQ0UucmVnaXN0ZXJVc2VyKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJyZWdpc3RyYXRpb25fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fdGl0bGVcIj5yZWdpc3RyYXRpb24gZm9ybTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVuaXF1ZS4gTWluIGxlbmd0aCAyIGNoYXJzLCBtYXggLSAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCI+UmUtZW50ZXIgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX3JlcGVhdFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIG1hdGNoIHdpdGggcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiPlN0b3JlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaGlkZGVuIGlkPVwicmVnaXN0cmF0aW9uLXN0b3JlXCIgbmFtZT1cInN0b3JlXCI+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCI+U3RvcmUgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJzdG9yZV9wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIHN0b3JlIHBhc3N3b3JkLiBNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gcmVnaXN0cmF0aW9uX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChyZWdpc3RyYXRpb24pO1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbl9fc2VsZWN0Jyk7XHJcblxyXG5cdFx0aWYgKHN0b3Jlcykge1xyXG5cdFx0XHRzZWxlY3QuaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cdFx0XHRcdG9wdGlvbi50ZXh0ID0gZWxlbWVudC5uYW1lO1xyXG5cdFx0XHRcdG9wdGlvbi5kYXRhc2V0LmlkID0gZWxlbWVudC5pZDtcclxuXHRcdFx0XHRzZWxlY3QuYWRkKG9wdGlvbik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC1odHRwJztcclxuaW1wb3J0IHsgVVNFUl9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBudWxsLFxyXG5cdFx0XHRlbWFpbDogbnVsbCxcclxuXHRcdFx0Y3JlYXRlZDogbnVsbCxcclxuXHRcdFx0dmlzaXRlZDogbnVsbCxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCd1c2VyLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuZ2V0VXNlckluZm8oKTtcclxuXHR9XHJcblxyXG5cdGdldFVzZXJJbmZvKCkge1xyXG5cdFx0QVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFVTRVJfVVJMKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRcdHVzZXJuYW1lOiByZXN1bHQudXNlcm5hbWUsXHJcblx0XHRcdFx0ZW1haWw6IHJlc3VsdC5lbWFpbCxcclxuXHRcdFx0XHRjcmVhdGVkOiByZXN1bHQuY3JlYXRlZF9hdCxcclxuXHRcdFx0XHR2aXNpdGVkOiByZXN1bHQubGFzdF9sb2dpbixcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBjcmVhdGVkLCB2aXNpdGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgdXNlciA9IGBcclxuICAgICAgICA8bWFpbiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7dXNlcm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4ke2VtYWlsfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHtjcmVhdGVkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHt2aXNpdGVkfTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh1c2VyKTtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyL3VzZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZS5kYXRhJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4sIENSRUFURV9QSVpaQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERSQVcgfSBmcm9tICcuL2RyYXcnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgtaHR0cCc7XHJcblxyXG5jbGFzcyBOZXdQaXp6YSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNpemU6ICc2MCcsXHJcblx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0XHRpbmdyZWRpZW50czogW10sXHJcblx0XHRcdHRhZ3M6IFtdLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgeyBzaXplLCBpbmdyZWRpZW50cywgdGFncyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5cdFx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX25hbWUtdmFsdWUnKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fZGVzY3JpcHRpb24nKTtcclxuXHJcblx0XHRjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZmQuYXBwZW5kKCduYW1lJywgbmFtZS52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24udmFsdWUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdzaXplJywgc2l6ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2luZ3JlZGllbnRzJywgSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHMpKTtcclxuXHRcdGZkLmFwcGVuZCgndGFncycsIEpTT04uc3RyaW5naWZ5KHRhZ3MpKTtcclxuXHJcblx0XHRjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG5cdFx0XHRmZC5hcHBlbmQoJ2ltYWdlJywgYmxvYiwgJ25ld19pbWFnZS5wbmcnKTtcclxuXHRcdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLnBvc3QoQ1JFQVRFX1BJWlpBLCBmZCkudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdCgpIHtcclxuXHRcdFByb21pc2UuYWxsKFtDUkVBVEVfREFUQS5nZXRJbmdyZWRpZW50cygpLCBDUkVBVEVfREFUQS5nZXRUYWdzKCldKS50aGVuKCgpID0+IHtcclxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fb3B0aW9ucycpO1xyXG5cdFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDbGljayk7XHJcblx0XHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19jYW52YXMnKTtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHRcdFx0Y29uc3QgYnV0dG9uc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1jYW5jZWwnIHR5cGU9J2J1dHRvbic+Y2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1zZW5kJyB0eXBlPSdzdWJtaXQnPmNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHRcdFx0Y29uc3QgYnV0dG9ucyA9IHRvSHRtbChidXR0b25zU3RyaW5nKTtcclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmQodGhpcy5yZW5kZXJGb3JtKCkpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVySW5ncmVkaWVudHMoQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRhZ3MoQ1JFQVRFX0RBVEEudGFncykpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xyXG5cdFx0XHREUkFXLm9uSW5pdCh7XHJcblx0XHRcdFx0aG9zdDogY2FudmFzLFxyXG5cdFx0XHRcdGluZ3JlZGllbnRzOiBDUkVBVEVfREFUQS5pbmdyZWRpZW50cyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKGV2KSB7XHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuZmxhZyA9PT0gJ2luZ3JlZGllbnQnKSB7XHJcblx0XHRcdGNvbnN0IGluZ3JlZGllbnRzSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmxhZ10nKTtcclxuXHRcdFx0Y29uc3QgbmV3T3B0aW9ucyA9IFtdO1xyXG5cdFx0XHRjb25zdCBuZXdJbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0XHRpbmdyZWRpZW50c0lucHV0cy5mb3JFYWNoKGluZ3JlZGllbnRJbnB1dCA9PiB7XHJcblx0XHRcdFx0aWYgKGluZ3JlZGllbnRJbnB1dC5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRuZXdPcHRpb25zLnB1c2goaW5ncmVkaWVudElucHV0LnZhbHVlKTtcclxuXHRcdFx0XHRcdG5ld0luZ3JlZGllbnRzLnB1c2gocGFyc2VJbnQoaW5ncmVkaWVudElucHV0LmRhdGFzZXQuaWQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRvcHRpb25zOiBuZXdPcHRpb25zLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRpbmdyZWRpZW50czogbmV3SW5ncmVkaWVudHMsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuXHRcdFx0Y29uc3QgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0XHREUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVzaXplKGV2KSB7XHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuYXR0ciA9PT0gJ3NpemUnKSB7XHJcblx0XHRcdGNvbnN0IHNpemVGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRyXScpO1xyXG5cdFx0XHRzaXplRmllbGRzLmZvckVhY2goc2l6ZUZpZWxkID0+IHtcclxuXHRcdFx0XHRpZiAoc2l6ZUZpZWxkLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld1NpemUgPSBzaXplRmllbGQudmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xyXG5cdFx0XHRcdFx0XHRzaXplOiBuZXdTaXplLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0bGV0IHsgc2l6ZSwgb3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlckZvcm0oKSB7XHJcblx0XHRjb25zdCBmb3JtU3RyaW5nID0gYFxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fbmFtZSc+UGl6emEgTmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHJlcXVpcmVkIG1pbj0nMycgbWF4PScyNCcgY2xhc3M9J2NyZWF0ZV9fbmFtZS12YWx1ZSc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9J2NyZWF0ZV9fZGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZSc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX3NpemUtdGl0bGUnPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSczMCcgZGF0YS1hdHRyPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1zbWFsbFwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjQ1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzQ1JyBkYXRhLWF0dHI9J3NpemUnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLW1lZGl1bVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjYwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzYwJyBkYXRhLWF0dHI9J3NpemUnIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICAgIFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy10aXRsZSc+SW5ncmVkaWVudHM8aDI+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gdG9IdG1sKGZvcm1TdHJpbmcpO1xyXG5cdFx0Y29uc3Qgc2l6ZUZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fc2l6ZScpO1xyXG5cdFx0c2l6ZUZpZWxkcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcblx0XHRyZXR1cm4gZm9ybTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckluZ3JlZGllbnRzKGRhdGEpIHtcclxuXHRcdGNvbnN0IGluZ3JlZGllbnRzU3RyaW5nID0gYCAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG5cdFx0aHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pbnB1dCcgdHlwZT0nY2hlY2tib3gnIHZhbHVlPScke1xyXG5cdGRhdGEubmFtZVxyXG59JyBkYXRhLWZsYWc9J2luZ3JlZGllbnQnIGRhdGEtaWQ9JyR7ZGF0YS5pZH0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7RE9NQUlOfS8ke1xyXG5cdGRhdGEuaW1hZ2VfdXJsXHJcbn0nIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJyB0aXRsZT0nJHtkYXRhLmRlc2NyaXB0aW9ufScgZGF0YS1uYW1lPSdpbmdyZWRpZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH0sICcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPSdjcmVhdGVfX3RhZy10aXRsZSc+VGFnPGgyPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChpbmdyZWRpZW50c1N0cmluZyk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJUYWdzKGRhdGEpIHtcclxuXHRcdGNvbnN0IHRhZ3NTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX3RhZ3MnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuXHRcdGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fdGFncy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwodGFnc1N0cmluZyk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzPSdjcmVhdGUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29udGFpbmVyIGNyZWF0ZV9fY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9J2NyZWF0ZV9fdGl0bGUnPkNyZWF0ZSBQaXp6YTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fY2FudmFzJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fb3B0aW9ucyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBmcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UGl6emE7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNsYXNzIERyYXcge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5jcnVzdF9waXp6YSA9ICdodHRwczovL3BpenphLXRlbGUuZ2Evc3RhdGljL2ltYWdlcy9waXp6YS5wbmcnO1xyXG5cdFx0dGhpcy5fbG9hZEltYWdlID0gdGhpcy5fbG9hZEltYWdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoZGF0YSkge1xyXG5cdFx0dGhpcy5ob3N0ID0gZGF0YS5ob3N0O1xyXG5cdFx0dGhpcy5zaXplID0gJzYwJztcclxuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHR0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblx0XHR0aGlzLmNhbnZhc1dpZHRoID0gMzIwO1xyXG5cdFx0dGhpcy5jYW52YXNIZWlnaHQgPSAzMjA7XHJcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5pbmdyZWRpZW50cztcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLnNwcml0ZXMgPSB7fTtcclxuXHRcdHRoaXMubGFzdE9wdGlvbnMgPSBbXTtcclxuXHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sID0gW107XHJcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzV2lkdGg7XHJcblx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhc0hlaWdodDtcclxuXHRcdHRoaXMuX2xvYWRSZXNvdXJjZXMoKS50aGVuKHJlc291cmNlcyA9PiB7XHJcblx0XHRcdHJlc291cmNlcy5mb3JFYWNoKHJlc291cmNlID0+ICh0aGlzLmltYWdlc1tyZXNvdXJjZS5uYW1lXSA9IHJlc291cmNlLmltYWdlKSk7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQodGhpcy5jYW52YXMpO1xyXG5cdFx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfc3RhcnRTZXQoKSB7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sID0gW107XHJcblx0XHQvLyBsZXQgcGl6emEgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzWydwaXp6YSddLCAxNjAsIDE2MCwgMzAwLCAzMDApO1xyXG5cdFx0bGV0IHBpenphID0gbmV3IFNwcml0ZShcclxuXHRcdFx0dGhpcy5pbWFnZXNbJ3BpenphJ10sXHJcblx0XHRcdDE2MCxcclxuXHRcdFx0MTYwLFxyXG5cdFx0XHQzMDAgKiBgJHtwYXJzZUludCh0aGlzLnNpemUpfWAgLyA2MCxcclxuXHRcdFx0MzAwICogYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gIC8gNjBcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNwcml0ZXNbJ3BpenphJ10gPSBwaXp6YTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wucHVzaChwaXp6YSk7XHJcblx0XHR0aGlzLl9kcmF3KCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVDbGljayhvcHRpb25zLCBzaXplKSB7XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA9PSB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbGVtID0+IHtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbGVtLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoIDwgdGhpcy5idWZmZXIubGVuZ3RoKSB7XHJcblx0XHRcdGxldCBwcmVCdWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5sYXN0T3B0aW9ucyA9IFtdO1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdHRoaXMubGFzdE9wdGlvbnMucHVzaChlbCk7XHJcblx0XHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbGVtID0+IHtcclxuXHRcdFx0XHRcdGlmIChlbGVtLmlkID09PSBlbCkge1xyXG5cdFx0XHRcdFx0XHRwcmVCdWZmZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IGVsZW0uaWQsXHJcblx0XHRcdFx0XHRcdFx0c3ByaXRlczogZWxlbS5zcHJpdGVzLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWxlbS5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZWxlbS5zcHJpdGVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmNvbmNhdChwcmVCdWZmZXIpO1xyXG5cdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdE9wdGlvbnMuaW5jbHVkZXMoZWwpKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubGFzdE9wdGlvbnMucHVzaChlbCk7XHJcblx0XHRcdFx0XHR0aGlzLl9nZW5lcmF0ZVNwcml0ZShlbCwgMTApO1xyXG5cdFx0XHRcdFx0dGhpcy5idWZmZXIuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGVsZW0uc3ByaXRlcyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X2dlbmVyYXRlU3ByaXRlKG5hbWUsIGNvdW50KSB7XHJcblx0XHRjb25zdCBzcHJpdGVzID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcblx0XHRcdGxldCBpbmdyZWRpZW50ID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1tgJHtuYW1lfWBdLCBSQU5ET00oNzAsIDI1MCksIFJBTkRPTSg3MCwgMjUwKSk7XHJcblx0XHRcdHNwcml0ZXMucHVzaChpbmdyZWRpZW50KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYnVmZmVyLnB1c2goe1xyXG5cdFx0XHRpZDogbmFtZSxcclxuXHRcdFx0c3ByaXRlczogc3ByaXRlcyxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X2RyYXcoKSB7XHJcblx0XHR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbC5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuZHJhdyh0aGlzLmN0eCkpO1xyXG5cdH1cclxuXHJcblx0X2xvYWRSZXNvdXJjZXMoKSB7XHJcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHRcdHByb21pc2VzLnB1c2godGhpcy5fbG9hZEltYWdlKCdwaXp6YScsIHRoaXMuY3J1c3RfcGl6emEpKTtcclxuXHRcdHByb21pc2VzID0gcHJvbWlzZXMuY29uY2F0KFxyXG5cdFx0XHR0aGlzLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IHtcclxuXHRcdFx0XHRsZXQgaW5ncl91cmwgPSBgJHtET01BSU59LyR7aW5ncmVkaWVudC5pbWFnZV91cmx9YDtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbG9hZEltYWdlKGluZ3JlZGllbnQubmFtZSwgaW5ncl91cmwpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0fVxyXG5cclxuXHRfbG9hZEltYWdlKG5hbWUsIHVybCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh7IG5hbWUsIGltYWdlIH0pO1xyXG5cdFx0XHRpbWFnZS5vbmVycm9yID0gZSA9PiByZWplY3QoZSk7XHJcblx0XHRcdGltYWdlLnNyYyA9IHVybDtcclxuXHRcdFx0aW1hZ2Uud2lkdGggPSAyMDtcclxuXHRcdFx0aW1hZ2UuaGVpZ2h0ID0gMjA7XHJcblx0XHRcdGltYWdlLmNyb3NzT3JpZ2luID0gJyc7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEUkFXID0gbmV3IERyYXcoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuXHRjb25zdHJ1Y3RvcihpbWFnZSwgY3gsIGN5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHR0aGlzLnggPSAwO1xyXG5cdFx0dGhpcy55ID0gMDtcclxuXHRcdHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmltYWdlLndpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5pbWFnZS5oZWlnaHQ7XHJcblx0XHR0aGlzLmN4ID0gY3ggfHwgMDtcclxuXHRcdHRoaXMuY3kgPSBjeSB8fCAwO1xyXG5cdH1cclxuXHRnZXQgY3goKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnggKyB0aGlzLndpZHRoICogMC41KTtcclxuXHR9XHJcblxyXG5cdGdldCBjeSgpIHtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRoaXMueSArIHRoaXMuaGVpZ2h0ICogMC41KTtcclxuXHR9XHJcblxyXG5cdHNldCBjeCh2YWx1ZSkge1xyXG5cdFx0dGhpcy54ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMud2lkdGggKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0c2V0IGN5KHZhbHVlKSB7XHJcblx0XHR0aGlzLnkgPSBNYXRoLnJvdW5kKHZhbHVlIC0gdGhpcy5oZWlnaHQgKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhjdHgpIHtcclxuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=