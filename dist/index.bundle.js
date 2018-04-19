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

var _auth = __webpack_require__(6);

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
			_ws.WS.subscribe('CREATE_PIZZA', function (data) {
				_pizza.CREATE_DATA.addPizza(data);
				_this2.list.update({
					pizzas: _pizza.CREATE_DATA.pizzas
				});
			});
			_ws.WS.subscribe('ACCEPT_PIZZA', function (data) {
				_pizza.CREATE_DATA.removePizza(data);
				_this2.list.update({
					pizzas: _pizza.CREATE_DATA.pizzas
				});
			});

			_pizza.CREATE_DATA.getUnacceptedPizzas(true, 12, 0).then(function (res) {
				_this2.list.update({
					pizzas: _pizza.CREATE_DATA.pizzas
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

var _auth = __webpack_require__(6);

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
			return _auth.AUTH_HTTP_SERVICE.get(_constants.WS_TICKET).then(function (res) {
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

var _auth = __webpack_require__(6);

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

			_auth.AUTH_HTTP_SERVICE.get(_constants.USER_URL).then(function (result) {
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

var _pizza = __webpack_require__(9);

var _utils = __webpack_require__(1);

var _constants = __webpack_require__(2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzFlMzY1NWFmMDE1MDE2NTY0NzkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9waXp6YS5kYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2V2ZW50LmVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaG9zdCIsIm9uSW5pdCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJvbkJlZm9yZVVubW91bnQiLCJjaGlsZHJlbiIsInJlbmRlciIsImlubmVySFRNTCIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvSHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3RyaW5nIiwiY29udGVudCIsIlJBTkRPTSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRPTUFJTiIsIklOR1JFRElFTlRTX1VSTCIsIlRBR19VUkwiLCJVU0VSX1VSTCIsIkNSRUFURV9QSVpaQSIsIlBJWlpBX0xJU1QiLCJXU19USUNLRVQiLCJXU19QQVRIIiwiQXV0aFNlcnZpY2UiLCJfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2NsYWltcyIsIkpTT04iLCJwYXJzZSIsImxvZ2luVXJsIiwic3RvcmVVcmwiLCJjcmVhdGVVcmwiLCJ0b2tlbklzTm90RXhwaXJlZCIsImNsZWFyU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0b2tlbiIsImNsYWltcyIsImV4cCIsIkRhdGUiLCJub3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJvayIsImFuc3dlciIsInBhcnNlSnd0Q2xhaW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGF0dXMiLCJyZWplY3QiLCJqd3RUb2tlbiIsImJhc2U2NFVybCIsInNwbGl0IiwiYmFzZTY0IiwicmVwbGFjZSIsIndpbmRvdyIsImF0b2IiLCJzZXRJdGVtIiwiQVVUSF9TRVJWSUNFIiwiRm9vdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwiaXNBdXRob3JpemVkIiwibG9naW5CdXR0b24iLCJsb2dvdXRCdXR0b24iLCJ1c2VyQnV0dG9uIiwicmVnaXN0cmF0aW9uQnV0dG9uIiwiaGVhZGVyIiwiZnJhZ21lbnQiLCJBdXRoSHR0cFNlcnZpY2UiLCJ1cmwiLCJFcnJvciIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJBVVRIX0hUVFBfU0VSVklDRSIsIkFQUF9ST1VURVIiLCJxdWVyeVNlbGVjdG9yIiwicm91dGVzIiwiYXV0aEd1YXJkIiwicmVzdWx0Iiwic3VjY2VzcyIsInJlZGlyZWN0IiwiUGl6emFEYXRhU2VydmljZSIsImluZ3JlZGllbnRzIiwidGFncyIsInBpenphcyIsInBpenphIiwiZmluZEluZGV4IiwidXVpZCIsInAiLCJ1bnNoaWZ0IiwidXVpZHMiLCJmb3JFYWNoIiwiaW5kZXgiLCJzcGxpY2UiLCJyZXNldCIsImxpbWl0Iiwib2Zmc2V0IiwiZ2V0IiwicmVzdWx0cyIsImNvbmNhdCIsIkNSRUFURV9EQVRBIiwiUm91dGVyIiwiYWN0aXZlUm91dGUiLCJhY3RpdmVDb21wb25lbnQiLCJoYW5kbGVVcmxDaGFuZ2UiLCJiaW5kIiwiYXBwbHlSb3V0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRoIiwibmV4dFJvdXRlIiwiZmluZCIsImhyZWYiLCJyZWRpcmVjdFRvIiwiaGFuZGxlUmVkaXJlY3QiLCJsb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9nb3V0Iiwib25FbnRlciIsImhhbmRsZU9uRW50ZXIiLCJsb2NhdGlvbiIsImhhc2giLCJyb3V0ZSIsImNvbXBvbmVudEluc3RhbmNlIiwidXBkYXRlU3RhdGUiLCJ1cGRhdGUiLCJzbGljZSIsIkxvZ2luIiwibG9naW5Gb3JtIiwiZm9vdGVyIiwiTG9naW5Gb3JtIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJldiIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibG9naW5Vc2VyIiwidGV4dCIsImVycm9yIiwibG9naW5TdHJpbmciLCJsb2dpbkZyYWdtZW50IiwiZXJyb3JNZXNzYWdlIiwiYXBwZW5kQ2hpbGQiLCJFcnJvck1lc3NhZ2UiLCJBcHAiLCJsaXN0IiwiZXN0YWJsaXNoIiwic3Vic2NyaWJlIiwiYWRkUGl6emEiLCJyZW1vdmVQaXp6YSIsImdldFVuYWNjZXB0ZWRQaXp6YXMiLCJjb250YWluZXJTdHJpbmciLCJjb250YWluZXJGcmFnbWVudCIsImNvbnRhaW5lciIsIlBpenphTGlzdCIsImltZ191cmwiLCJ0aW1lX3ByZXBhcmVkIiwicHJpY2UiLCJsZW5ndGgiLCJpbm5lclRleHQiLCJjcmVhdGVQaXp6YSIsIldzIiwid3MiLCJfZW1pdHRlciIsImV2ZW50TmFtZSIsImNhbGxiYWNrIiwiZXZlbnQiLCJlbWl0IiwiZXZlbnRfbmFtZSIsImUiLCJjb2RlIiwic2V0VGltZW91dCIsIl9lc3RhYmxpc2giLCJnZXRUaWNrZXQiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJfb25tZXNzYWdlIiwib25jbG9zZSIsIl9vbmNsb3NlIiwiV1MiLCJFdmVudEVtaXR0ZXIiLCJldmVudHMiLCJmbiIsImNhbGwiLCJwdXNoIiwiZmlsdGVyIiwiZXZlbnRGbiIsIlJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJzdG9yZXMiLCJnZXRTdG9yZXMiLCJzdG9yZUluZm8iLCJwYXNzd29yZF9yZXBlYXQiLCJlbWFpbCIsInN0b3JlX2lkIiwicGFyc2VJbnQiLCJzdG9yZSIsInNlbGVjdGVkSW5kZXgiLCJkYXRhc2V0IiwiaWQiLCJzdG9yZV9wYXNzd29yZCIsInJlZ2lzdGVyVXNlciIsInNlbGVjdCIsImhpZGRlbiIsIm9wdGlvbiIsImVsZW1lbnQiLCJmb3JtIiwiVXNlciIsImNyZWF0ZWQiLCJ2aXNpdGVkIiwiZ2V0VXNlckluZm8iLCJjcmVhdGVkX2F0IiwibGFzdF9sb2dpbiIsInVzZXIiLCJOZXdQaXp6YSIsInNpemUiLCJoYW5kbGVDbGljayIsImhhbmRsZVJlc2l6ZSIsImNhbnZhcyIsImRlc2NyaXB0aW9uIiwiZmQiLCJGb3JtRGF0YSIsInRvQmxvYiIsImJsb2IiLCJwb3N0IiwiYWxsIiwiZ2V0SW5ncmVkaWVudHMiLCJnZXRUYWdzIiwiYnV0dG9uc1N0cmluZyIsImJ1dHRvbnMiLCJyZW5kZXJGb3JtIiwicmVuZGVySW5ncmVkaWVudHMiLCJyZW5kZXJUYWdzIiwiZmxhZyIsImluZ3JlZGllbnRzSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5ld09wdGlvbnMiLCJuZXdJbmdyZWRpZW50cyIsImluZ3JlZGllbnRJbnB1dCIsImNoZWNrZWQiLCJhdHRyIiwic2l6ZUZpZWxkcyIsInNpemVGaWVsZCIsIm5ld1NpemUiLCJmb3JtU3RyaW5nIiwiaW5ncmVkaWVudHNTdHJpbmciLCJyZWR1Y2UiLCJodG1sIiwiaW1hZ2VfdXJsIiwidGFnc1N0cmluZyIsIkRyYXciLCJjcnVzdF9waXp6YSIsIl9sb2FkSW1hZ2UiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbWFnZXMiLCJzcHJpdGVzIiwibGFzdE9wdGlvbnMiLCJidWZmZXIiLCJzcHJpdGVzUG9vbCIsIndpZHRoIiwiaGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsImltYWdlIiwiX3N0YXJ0U2V0IiwiX2RyYXciLCJmaWx0ZXJlZEVsZW0iLCJlbGVtIiwieCIsInkiLCJwcmVCdWZmZXIiLCJlbCIsImluY2x1ZGVzIiwiX2dlbmVyYXRlU3ByaXRlIiwiY291bnQiLCJpIiwiaW5ncmVkaWVudCIsImNsZWFyUmVjdCIsInNwcml0ZSIsImRyYXciLCJwcm9taXNlcyIsIm1hcCIsImluZ3JfdXJsIiwiSW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwic3JjIiwiY3Jvc3NPcmlnaW4iLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsImRyYXdJbWFnZSIsInJvdW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0RNQSxTO0FBQ0wsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDbEIsT0FBS0EsS0FBTCxHQUFhQSxTQUFTLEVBQXRCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLE9BQUtDLE1B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V3JLLFFBQVEsS0FBS2tJLEtBQUwsR0FBYSxHQUFoQyxDQUFUO0FBQ0E7OztzQkFOUTtBQUNSLFVBQU81USxLQUFLK1MsS0FBTCxDQUFXLEtBQUt4QixDQUFMLEdBQVMsS0FBS1YsTUFBTCxHQUFjLEdBQWxDLENBQVA7QUFDQSxHO29CQU1NbkksSyxFQUFPO0FBQ2IsUUFBSzZJLENBQUwsR0FBU3ZSLEtBQUsrUyxLQUFMLENBQVdySyxRQUFRLEtBQUttSSxNQUFMLEdBQWMsR0FBakMsQ0FBVDtBQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcxZTM2NTVhZjAxNTAxNjU2NDc5IiwiY2xhc3MgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xyXG5cdFx0dGhpcy5ob3N0ID0gbnVsbDtcclxuXHRcdHRoaXMub25Jbml0KCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KCkge31cclxuXHJcblx0dXBkYXRlKG5leHRQcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuXHRcdHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdHVubW91bnQoKSB7XHJcblx0XHR0aGlzLm9uQmVmb3JlVW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblx0b25CZWZvcmVVbm1vdW50KCkge31cclxuXHJcblx0b25CZWZvcmVVcGRhdGUobmV4dFByb3BzKSB7fVxyXG5cclxuXHRnZXQgbmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxuXHRfcmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xyXG5cclxuXHRcdHRoaXMuaG9zdC5pbm5lckhUTUwgPSAnJztcclxuXHRcdGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdHRoaXMuaG9zdC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcclxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZCguLi5jaGlsZHJlbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKGNoaWxkcmVuKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5ob3N0O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL2NvbXBvbmVudC5qcyIsImV4cG9ydCBjb25zdCB0b0h0bWwgPSBzdHJpbmcgPT4ge1xyXG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHJpbmc7XHJcblx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkFORE9NID0gKG1pbiwgbWF4KSA9PiB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy91dGlscy5qcyIsImV4cG9ydCBjb25zdCBET01BSU4gPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhJztcclxuZXhwb3J0IGNvbnN0IElOR1JFRElFTlRTX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL2luZ3JlZGllbnQvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBUQUdfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdGFnL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVVNFUl9VUkwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL215X2luZm9gO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BJWlpBID0gYCR7RE9NQUlOfS9hcGkvdjEvcGl6emEvY3JlYXRlYDtcclxuZXhwb3J0IGNvbnN0IFBJWlpBX0xJU1QgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFdTX1RJQ0tFVCA9IGAke0RPTUFJTn0vYXBpL3YxL3dzL3RpY2tldGA7XHJcbmV4cG9ydCBjb25zdCBXU19QQVRIID0gJ3dzczovL3BpenphLXRlbGUuZ2Evd3MnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvY29uc3RhbnRzLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGFpbXMnKSk7XHJcblx0XHR0aGlzLmxvZ2luVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9sb2dpbmA7XHJcblx0XHR0aGlzLnN0b3JlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvc3RvcmUvbGlzdGA7XHJcblx0XHR0aGlzLmNyZWF0ZVVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvY3JlYXRlYDtcclxuXHR9XHJcblxyXG5cdGdldCB0b2tlbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b2tlbjtcclxuXHR9XHJcblxyXG5cdHNldCB0b2tlbih0b2tlbikge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuXHR9XHJcblxyXG5cdGdldCBjbGFpbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2xhaW1zO1xyXG5cdH1cclxuXHJcblx0c2V0IGNsYWltcyhjbGFpbXMpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IGNsYWltcztcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGFpbXMnLCBKU09OLnN0cmluZ2lmeShjbGFpbXMpKTtcclxuXHR9XHJcblxyXG5cdGlzQXV0aG9yaXplZCgpIHtcclxuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHJldHVybiBmYWxzZTtcclxuXHRcdGlmICghdGhpcy50b2tlbklzTm90RXhwaXJlZCgpKSB7XHJcblx0XHRcdHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTdG9yYWdlKCkge1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gbnVsbDtcclxuXHRcdHRoaXMuX3Rva2VuID0gbnVsbDtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NsYWltcycpO1xyXG5cdH1cclxuXHJcblx0dG9rZW5Jc05vdEV4cGlyZWQoKSB7XHJcblx0XHRpZiAoIXRoaXMudG9rZW4pIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiB0aGlzLmNsYWltcy5leHAgKiAxMDAwID4gRGF0ZS5ub3coKTtcclxuXHR9XHJcblxyXG5cdHN0b3JlSW5mbygpIHtcclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLnN0b3JlVXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luVXNlcihkYXRhKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKCkuYXBwZW5kKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5sb2dpblVybCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzLm9rKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50b2tlbiA9IGFuc3dlci50b2tlbjtcclxuXHRcdFx0XHRcdHRoaXMuY2xhaW1zID0gdGhpcy5wYXJzZUp3dENsYWltcyhhbnN3ZXIudG9rZW4pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IFByb21pc2UucmVqZWN0KHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMuY3JlYXRlVXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdHBhcnNlSnd0Q2xhaW1zKGp3dFRva2VuKSB7XHJcblx0XHRpZiAoand0VG9rZW4pIHtcclxuXHRcdFx0bGV0IGJhc2U2NFVybCA9IGp3dFRva2VuLnNwbGl0KCcuJylbMV07XHJcblx0XHRcdGxldCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgnLScsICcrJykucmVwbGFjZSgnXycsICcvJyk7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfU0VSVklDRSA9IG5ldyBBdXRoU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhZGRyZXNzPktvdHRhbnMsIEtvdHRhbnMgU3J0LiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzU3Nzc4ODg3XCI+dGVsLiA1NzctNzg4LTg3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPlBpenphIE1hbmFnZXIgJmNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE4LTAxLTAxXCI+MjAxODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvL1RPRE86IG5lZWQgZGVsZXRlIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJsb2dpbl9fYnV0dG9uLWxpbmtcIj5zaWduIGluPC9hPlxyXG5cdFx0Y29uc3QgaXNBdXRob3JpemVkID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluXCI+c2lnbiBpbjwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgbG9nb3V0QnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dvdXRcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1vdXRcIj5zaWduIG91dDwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgdXNlckJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvdXNlclwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluZm9cIj51c2VyIGluZm88L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvcmVnaXN0cmF0aW9uXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tdXBcIj5zaWduIHVwPC9hPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY3VycmVudC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNjbG9ja1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMi0wMyAxMjowMTo0OFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCIjL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2dvXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJhdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyBsb2dvdXRCdXR0b24gOiBsb2dpbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAke2lzQXV0aG9yaXplZCA/IHVzZXJCdXR0b24gOiByZWdpc3RyYXRpb25CdXR0b259IFxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChoZWFkZXIpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmNsYXNzIEF1dGhIdHRwU2VydmljZSB7XHJcblx0Z2V0KHVybCkge1xyXG5cdFx0aWYgKCFBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm9uLWF1dGhvcml6ZWQgcmVxdWVzdCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZldGNoKHVybCwge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cG9zdCh1cmwsIGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGF0Y2goKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9IVFRQX1NFUlZJQ0UgPSBuZXcgQXV0aEh0dHBTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmh0dHAuanMiLCJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vZnJhbWV3b3JrL3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVIgPSBuZXcgUm91dGVyKHsgaG9zdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSwgcm91dGVzIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW5kZXguanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoR3VhcmQgPSAoKSA9PiB7XHJcblx0Y29uc3QgcmVzdWx0ID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpXHJcblx0XHQ/IFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUgfSlcclxuXHRcdDogUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogZmFsc2UsIHJlZGlyZWN0OiAnL2xvZ2luJyB9KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyIsImltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoLmh0dHAnO1xyXG5pbXBvcnQgeyBJTkdSRURJRU5UU19VUkwsIFRBR19VUkwsIFBJWlpBX0xJU1QgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YURhdGFTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW5ncmVkaWVudHMgPSBbXTtcclxuXHRcdHRoaXMudGFncyA9IFtdO1xyXG5cdFx0dGhpcy5waXp6YXMgPSBbXTtcclxuXHR9XHJcblxyXG5cdGFkZFBpenphKHBpenphKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHRoaXMucGl6emFzLmZpbmRJbmRleChwID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcGl6emEudXVpZCA9PT0gcC51dWlkO1xyXG5cdFx0XHR9KSAhPSAtMVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMucGl6emFzLnVuc2hpZnQocGl6emEpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVQaXp6YSh1dWlkcykge1xyXG5cdFx0dXVpZHMuZm9yRWFjaCh1dWlkID0+IHtcclxuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnBpenphcy5maW5kSW5kZXgocCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHV1aWQgPT09IHAudXVpZDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoaW5kZXggIT0gLTEpIHtcclxuXHRcdFx0XHRcdHRoaXMucGl6emFzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldFVuYWNjZXB0ZWRQaXp6YXMocmVzZXQsIGxpbWl0LCBvZmZzZXQpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoYCR7UElaWkFfTElTVH0/bGltaXQ9JHtsaW1pdCB8fCAxMDB9Jm9mZnNldD0ke29mZnNldCB8fCAwfWApLnRoZW4oXHJcblx0XHRcdHJlcyA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc2V0KSB7XHJcblx0XHRcdFx0XHR0aGlzLnBpenphcyA9IHJlcy5yZXN1bHRzO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnBpenphcyA9IHRoaXMucGl6emFzLmNvbmNhdChyZXMucmVzdWx0cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0SW5ncmVkaWVudHMoKSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KElOR1JFRElFTlRTX1VSTCkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5pbmdyZWRpZW50cyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0cmV0dXJuIGRhdGEucmVzdWx0cztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0VGFncygpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoVEFHX1VSTCkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0dGhpcy50YWdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RBVEEgPSBuZXcgUGl6emFEYXRhU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvcGl6emEuZGF0YS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4uL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5cclxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdGNvbnN0IHsgcm91dGVzLCBob3N0IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHJvdXRlcyxcclxuXHRcdFx0YWN0aXZlUm91dGU6IG51bGwsXHJcblx0XHRcdGFjdGl2ZUNvbXBvbmVudDogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gaG9zdDtcclxuXHRcdHRoaXMuaGFuZGxlVXJsQ2hhbmdlID0gdGhpcy5oYW5kbGVVcmxDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuYXBwbHlSb3V0ZSA9IHRoaXMuYXBwbHlSb3V0ZS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKSk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKTtcclxuXHR9XHJcblxyXG5cdGdldCBwYXRoKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlVXJsQ2hhbmdlKHVybCkge1xyXG5cdFx0Y29uc3QgeyByb3V0ZXMsIGFjdGl2ZVJvdXRlIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgbmV4dFJvdXRlID0gcm91dGVzLmZpbmQoKHsgaHJlZiB9KSA9PiBocmVmID09PSB1cmwpO1xyXG5cclxuXHRcdGlmIChuZXh0Um91dGUgJiYgbmV4dFJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xyXG5cdFx0XHRpZiAobmV4dFJvdXRlLnJlZGlyZWN0VG8pIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVSZWRpcmVjdChuZXh0Um91dGUucmVkaXJlY3RUbyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0Um91dGUubG9nb3V0KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlTG9nb3V0KG5leHRSb3V0ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0Um91dGUub25FbnRlcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdvbkVudGVyJyk7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVPbkVudGVyKG5leHRSb3V0ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYXBwbHlSb3V0ZShuZXh0Um91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aGFuZGxlTG9nb3V0KG5leHRSb3V0ZSkge1xyXG5cdFx0bmV4dFJvdXRlLmxvZ291dCgpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVkaXJlY3QodXJsKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcclxuXHR9XHJcblxyXG5cdGhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKSB7XHJcblx0XHRhdXRoR3VhcmQoKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHJlcy5zdWNjZXNzID8gbnVsbCA6IHRoaXMuaGFuZGxlUmVkaXJlY3QocmVzLnJlZGlyZWN0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXBwbHlSb3V0ZShyb3V0ZSkge1xyXG5cdFx0Y29uc3QgeyBDb21wb25lbnQgfSA9IHJvdXRlO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTdGF0ZSh7XHJcblx0XHRcdGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gYWN0aXZlQ29tcG9uZW50LnVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsImltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXInO1xyXG5pbXBvcnQgTmV3UGl6emEgZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL3V0aWxzL2F1dGgnO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJycsXHJcblx0XHRyZWRpcmVjdFRvOiAnLycsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IEFwcCxcclxuXHRcdGhyZWY6ICcvJyxcclxuXHRcdG9uRW50ZXI6IGF1dGhHdWFyZCxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogTG9naW4sXHJcblx0XHRocmVmOiAnL2xvZ2luJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogUmVnaXN0cmF0aW9uLFxyXG5cdFx0aHJlZjogJy9yZWdpc3RyYXRpb24nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBVc2VyLFxyXG5cdFx0aHJlZjogJy91c2VyJyxcclxuXHRcdG9uRW50ZXI6IGF1dGhHdWFyZCxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJy9sb2dvdXQnLFxyXG5cdFx0bG9nb3V0OiBBVVRIX1NFUlZJQ0UuY2xlYXJTdG9yYWdlLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBOZXdQaXp6YSxcclxuXHRcdGhyZWY6ICcvY3JlYXRlJyxcclxuXHRcdG9uRW50ZXI6IGF1dGhHdWFyZCxcclxuXHR9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcm91dGVzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2xvZ2luLmZvcm0nO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5sb2dpbkZvcm0gPSBuZXcgTG9naW5Gb3JtKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgdGhpcy5sb2dpbkZvcm0udXBkYXRlKCksIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZSc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgeyBBUFBfUk9VVEVSIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xyXG5cclxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRcdHBhc3N3b3JkOiBudWxsLFxyXG5cdFx0XHRtZXNzYWdlOiBudWxsLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2dpbicpO1xyXG5cdFx0dGhpcy5tZXNzYWdlID0gbmV3IEVycm9yTWVzc2FnZSgpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgaG9zdCA9IGV2LnRhcmdldDtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0fTtcclxuXHRcdEFVVEhfU0VSVklDRS5sb2dpblVzZXIoZGF0YSkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IG51bGwsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0XHRBUFBfUk9VVEVSLmhhbmRsZVJlZGlyZWN0KCcvJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXR1cyA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGV4dCA9IHN0YXR1cy5hbnN3ZXIuZXJyb3I7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdGUgPSB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRtZXNzYWdlOiB0ZXh0LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgbWVzc2FnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblx0XHRjb25zdCBsb2dpblN0cmluZyA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibG9naW5fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImxvZ2luX190aXRsZVwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpbi11c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJsb2dpbl9faW5wdXRcIiBpZD1cImxvZ2luLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHZhbHVlPVxyXG5cdFx0XHRcdCR7dXNlcm5hbWUgPyB1c2VybmFtZSA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJsb2dpbl9faW5wdXRcIiBpZD1cImxvZ2luLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgdmFsdWU9XHJcblx0XHRcdFx0JHtwYXNzd29yZCA/IHBhc3N3b3JkIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsb2dpbl9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5GcmFnbWVudCA9IHRvSHRtbChsb2dpblN0cmluZyk7XHJcblxyXG5cdFx0aWYgKG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5tZXNzYWdlLnVwZGF0ZSh7IHRleHQ6IG1lc3NhZ2UgfSk7XHJcblx0XHRcdGxvZ2luRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19idXR0b24nKS5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxvZ2luRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cdFx0cmV0dXJuIGxvZ2luRnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRXJyb3JNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZXJyb3JfX2NvbnRhaW5lcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fdGV4dCcpO1xyXG5cdFx0ZXJyb3IuaW5uZXJIVE1MID0gdGV4dDtcclxuXHRcdHJldHVybiBlcnJvcjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgUGl6emFMaXN0IGZyb20gJy4uL2xpc3QvbGlzdCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQ1JFQVRFX0RBVEEgfSBmcm9tICcuLi8uLi91dGlscy9waXp6YS5kYXRhJztcclxuaW1wb3J0IHsgV1MgfSBmcm9tICcuLi8uLi91dGlscy93cyc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdhcHAnKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5saXN0ID0gbmV3IFBpenphTGlzdCgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7XHJcblx0XHRXUy5lc3RhYmxpc2goKTtcclxuXHRcdFdTLnN1YnNjcmliZSgnQ1JFQVRFX1BJWlpBJywgZGF0YSA9PiB7XHJcblx0XHRcdENSRUFURV9EQVRBLmFkZFBpenphKGRhdGEpO1xyXG5cdFx0XHR0aGlzLmxpc3QudXBkYXRlKHtcclxuXHRcdFx0XHRwaXp6YXM6IENSRUFURV9EQVRBLnBpenphcyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdFdTLnN1YnNjcmliZSgnQUNDRVBUX1BJWlpBJywgZGF0YSA9PiB7XHJcblx0XHRcdENSRUFURV9EQVRBLnJlbW92ZVBpenphKGRhdGEpO1xyXG5cdFx0XHR0aGlzLmxpc3QudXBkYXRlKHtcclxuXHRcdFx0XHRwaXp6YXM6IENSRUFURV9EQVRBLnBpenphcyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRDUkVBVEVfREFUQS5nZXRVbmFjY2VwdGVkUGl6emFzKHRydWUsIDEyLCAwKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHRoaXMubGlzdC51cGRhdGUoe1xyXG5cdFx0XHRcdHBpenphczogQ1JFQVRFX0RBVEEucGl6emFzLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG5cdFx0PG1haW4gY2xhc3M9XCJtYWluIHBpenphc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBpenphc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIy9jcmVhdGVcIiBjbGFzcz1cImJ1dHRvbiBhZGQtbGlua1wiPmFkZCBwaXp6YTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLnBpenphc19fY29udGFpbmVyJyk7XHJcblxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmxpc3QudXBkYXRlKCkpO1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGNvbnRhaW5lckZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC9hcHAuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQaXp6YShwaXp6YXMpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuXHRcdGNvbnN0IGxpc3QgPSBwaXp6YSA9PiB7XHJcblx0XHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGl6emFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwaXp6YV9faW1nXCIgc3JjPVwiJHtET01BSU59LyR7cGl6emEuaW1nX3VybH1cIiBhbHQ9XCIke3BpenphLm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwaXp6YV9fbmFtZVwiPiR7cGl6emEubmFtZX08L2gyPlxyXG5cdFx0XHRcdDx0aW1lIGNsYXNzPVwicGl6emFfX3RpbWVcIiBkYXRldGltZT1cIlxyXG5cdFx0XHRcdCR7cGl6emEudGltZV9wcmVwYXJlZH1cIj4ke3BpenphLnRpbWVfcHJlcGFyZWR9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaXp6YV9fcXVldWUtbnVtYmVyXCI+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2V0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmV0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjA0OjAwXCI+NDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cGl6emEucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXHJcbiAgICAgICAgICAgIGA7XHJcblx0XHR9O1xyXG5cclxuXHRcdHBpenphcy5mb3JFYWNoKHBpenphID0+IHtcclxuXHRcdFx0Y29udGFpbmVyLmlubmVySFRNTCArPSBsaXN0KHBpenphKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGxpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfX2NvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzKSB7XHJcblx0XHRcdGNvbnN0IHsgcGl6emFzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdFx0aWYgKHBpenphcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmNyZWF0ZVBpenphKHBpenphcykpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGl6emFMaXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJpbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4vYXV0aC5odHRwJztcclxuaW1wb3J0IHsgV1NfVElDS0VULCBXU19QQVRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50LmVtaXR0ZXInO1xyXG5cclxuY2xhc3MgV3Mge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy53cyA9IG51bGw7XHJcblx0XHR0aGlzLl9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGlja2V0KCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChXU19USUNLRVQpLnRoZW4ocmVzID0+IHJlcyk7XHJcblx0fVxyXG5cclxuXHRzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG5cdFx0dGhpcy5fZW1pdHRlci5zdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjayk7XHJcblx0fVxyXG5cclxuXHRfb25tZXNzYWdlKGRhdGEpIHtcclxuXHRcdGNvbnN0IGV2ZW50ID0gSlNPTi5wYXJzZShkYXRhKTtcclxuXHRcdGNvbnNvbGUubG9nKCdtZXNzYWdlOiAnLCBldmVudCk7XHJcblx0XHR0aGlzLl9lbWl0dGVyLmVtaXQoZXZlbnQuZXZlbnRfbmFtZSwgZXZlbnQuZGF0YSk7XHJcblx0fVxyXG5cclxuXHRfb25jbG9zZShlKSB7XHJcblx0XHRpZiAoZS5jb2RlID09PSA0MDAxKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb2dpbiBwbHonKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb3N0IGNvbm5lY3Rpb24gLi4uIHJlY29ubmVjdCcpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuX2VzdGFibGlzaCwgMjAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRlc3RhYmxpc2goKSB7XHJcblx0XHR0aGlzLmdldFRpY2tldCgpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KGAke1dTX1BBVEh9P2tleT0ke2RhdGEudG9rZW59YCk7XHJcblx0XHRcdHRoaXMud3Mub25vcGVuID0gY29uc29sZS5sb2c7XHJcblx0XHRcdHRoaXMud3Mub25tZXNzYWdlID0gZSA9PiB0aGlzLl9vbm1lc3NhZ2UoZS5kYXRhKTtcclxuXHRcdFx0dGhpcy53cy5vbmNsb3NlID0gZSA9PiB0aGlzLl9vbmNsb3NlKGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV1MgPSBuZXcgV3MoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3dzLmpzIiwiZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmV2ZW50cyA9IHt9O1xyXG5cdH1cclxuXHJcblx0ZW1pdChldmVudE5hbWUsIGRhdGEpIHtcclxuXHRcdGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcclxuXHRcdGlmIChldmVudCkge1xyXG5cdFx0XHRldmVudC5mb3JFYWNoKGZuID0+IHtcclxuXHRcdFx0XHRmbi5jYWxsKG51bGwsIGRhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XHJcblx0XHRpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuXHRcdFx0dGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoZXZlbnRGbiA9PiBmbiAhPT0gZXZlbnRGbik7XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvZXZlbnQuZW1pdHRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4vcmVnaXN0cmF0aW9uLmZvcm0nO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIHRoaXMucmVnaXN0cmF0aW9uLnVwZGF0ZSgpLCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHN0b3JlczogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb24nKTtcclxuXHRcdHRoaXMuZ2V0U3RvcmVzKCk7XHJcblx0fVxyXG5cclxuXHRnZXRTdG9yZXMoKSB7XHJcblx0XHRBVVRIX1NFUlZJQ0Uuc3RvcmVJbmZvKCkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLnN0YXRlLnN0b3JlcyA9IHJlc3VsdDtcclxuXHRcdFx0dGhpcy51cGRhdGVTdGF0ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VybmFtZTogZXYudGFyZ2V0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmQ6IGV2LnRhcmdldC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkX3JlcGVhdDogZXYudGFyZ2V0LnBhc3N3b3JkX3JlcGVhdC52YWx1ZS50cmltKCksXHJcblx0XHRcdGVtYWlsOiBldi50YXJnZXQuZW1haWwudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRzdG9yZV9pZDogcGFyc2VJbnQoZXYudGFyZ2V0LnN0b3JlLm9wdGlvbnNbZXYudGFyZ2V0LnN0b3JlLnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQuaWQpLFxyXG5cdFx0XHRzdG9yZV9wYXNzd29yZDogZXYudGFyZ2V0LnN0b3JlX3Bhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdH07XHJcblx0XHRBVVRIX1NFUlZJQ0UucmVnaXN0ZXJVc2VyKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJyZWdpc3RyYXRpb25fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fdGl0bGVcIj5yZWdpc3RyYXRpb24gZm9ybTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVuaXF1ZS4gTWluIGxlbmd0aCAyIGNoYXJzLCBtYXggLSAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCI+UmUtZW50ZXIgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX3JlcGVhdFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIG1hdGNoIHdpdGggcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiPlN0b3JlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaGlkZGVuIGlkPVwicmVnaXN0cmF0aW9uLXN0b3JlXCIgbmFtZT1cInN0b3JlXCI+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCI+U3RvcmUgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJzdG9yZV9wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIHN0b3JlIHBhc3N3b3JkLiBNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gcmVnaXN0cmF0aW9uX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChyZWdpc3RyYXRpb24pO1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbl9fc2VsZWN0Jyk7XHJcblxyXG5cdFx0aWYgKHN0b3Jlcykge1xyXG5cdFx0XHRzZWxlY3QuaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cdFx0XHRcdG9wdGlvbi50ZXh0ID0gZWxlbWVudC5uYW1lO1xyXG5cdFx0XHRcdG9wdGlvbi5kYXRhc2V0LmlkID0gZWxlbWVudC5pZDtcclxuXHRcdFx0XHRzZWxlY3QuYWRkKG9wdGlvbik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5odHRwJztcclxuaW1wb3J0IHsgVVNFUl9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBudWxsLFxyXG5cdFx0XHRlbWFpbDogbnVsbCxcclxuXHRcdFx0Y3JlYXRlZDogbnVsbCxcclxuXHRcdFx0dmlzaXRlZDogbnVsbCxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCd1c2VyLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuZ2V0VXNlckluZm8oKTtcclxuXHR9XHJcblxyXG5cdGdldFVzZXJJbmZvKCkge1xyXG5cdFx0QVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFVTRVJfVVJMKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRcdHVzZXJuYW1lOiByZXN1bHQudXNlcm5hbWUsXHJcblx0XHRcdFx0ZW1haWw6IHJlc3VsdC5lbWFpbCxcclxuXHRcdFx0XHRjcmVhdGVkOiByZXN1bHQuY3JlYXRlZF9hdCxcclxuXHRcdFx0XHR2aXNpdGVkOiByZXN1bHQubGFzdF9sb2dpbixcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBjcmVhdGVkLCB2aXNpdGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgdXNlciA9IGBcclxuICAgICAgICA8bWFpbiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7dXNlcm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4ke2VtYWlsfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHtjcmVhdGVkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHt2aXNpdGVkfTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh1c2VyKTtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyL3VzZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL3BpenphLmRhdGEnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IERPTUFJTiwgQ1JFQVRFX1BJWlpBIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRFJBVyB9IGZyb20gJy4vZHJhdyc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5odHRwJztcclxuXHJcbmNsYXNzIE5ld1BpenphIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c2l6ZTogJzYwJyxcclxuXHRcdFx0b3B0aW9uczogW10sXHJcblx0XHRcdGluZ3JlZGllbnRzOiBbXSxcclxuXHRcdFx0dGFnczogW10sXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCB7IHNpemUsIGluZ3JlZGllbnRzLCB0YWdzIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcblx0XHRjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fbmFtZS12YWx1ZScpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19kZXNjcmlwdGlvbicpO1xyXG5cclxuXHRcdGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmZC5hcHBlbmQoJ25hbWUnLCBuYW1lLnZhbHVlKTtcclxuXHRcdGZkLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbi52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ3NpemUnLCBzaXplKTtcclxuXHRcdGZkLmFwcGVuZCgnaW5ncmVkaWVudHMnLCBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50cykpO1xyXG5cdFx0ZmQuYXBwZW5kKCd0YWdzJywgSlNPTi5zdHJpbmdpZnkodGFncykpO1xyXG5cclxuXHRcdGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcblx0XHRcdGZkLmFwcGVuZCgnaW1hZ2UnLCBibG9iLCAnbmV3X2ltYWdlLnBuZycpO1xyXG5cdFx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UucG9zdChDUkVBVEVfUElaWkEsIGZkKS50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KCkge1xyXG5cdFx0UHJvbWlzZS5hbGwoW0NSRUFURV9EQVRBLmdldEluZ3JlZGllbnRzKCksIENSRUFURV9EQVRBLmdldFRhZ3MoKV0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19vcHRpb25zJyk7XHJcblx0XHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuXHRcdFx0bGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX2NhbnZhcycpO1xyXG5cdFx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cdFx0XHRjb25zdCBidXR0b25zU3RyaW5nID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9fYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIGNyZWF0ZV9fYnV0dG9uLWNhbmNlbCcgdHlwZT0nYnV0dG9uJz5jYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIGNyZWF0ZV9fYnV0dG9uLXNlbmQnIHR5cGU9J3N1Ym1pdCc+Y3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cdFx0XHRjb25zdCBidXR0b25zID0gdG9IdG1sKGJ1dHRvbnNTdHJpbmcpO1xyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cdFx0XHRmb3JtLmFwcGVuZCh0aGlzLnJlbmRlckZvcm0oKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJJbmdyZWRpZW50cyhDUkVBVEVfREFUQS5pbmdyZWRpZW50cykpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyVGFncyhDUkVBVEVfREFUQS50YWdzKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XHJcblx0XHRcdERSQVcub25Jbml0KHtcclxuXHRcdFx0XHRob3N0OiBjYW52YXMsXHJcblx0XHRcdFx0aW5ncmVkaWVudHM6IENSRUFURV9EQVRBLmluZ3JlZGllbnRzLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQ2xpY2soZXYpIHtcclxuXHRcdGlmIChldi50YXJnZXQuZGF0YXNldC5mbGFnID09PSAnaW5ncmVkaWVudCcpIHtcclxuXHRcdFx0Y29uc3QgaW5ncmVkaWVudHNJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mbGFnXScpO1xyXG5cdFx0XHRjb25zdCBuZXdPcHRpb25zID0gW107XHJcblx0XHRcdGNvbnN0IG5ld0luZ3JlZGllbnRzID0gW107XHJcblx0XHRcdGluZ3JlZGllbnRzSW5wdXRzLmZvckVhY2goaW5ncmVkaWVudElucHV0ID0+IHtcclxuXHRcdFx0XHRpZiAoaW5ncmVkaWVudElucHV0LmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdG5ld09wdGlvbnMucHVzaChpbmdyZWRpZW50SW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdFx0bmV3SW5ncmVkaWVudHMucHVzaChwYXJzZUludChpbmdyZWRpZW50SW5wdXQuZGF0YXNldC5pZCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xyXG5cdFx0XHRcdG9wdGlvbnM6IG5ld09wdGlvbnMsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xyXG5cdFx0XHRcdGluZ3JlZGllbnRzOiBuZXdJbmdyZWRpZW50cyxcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG5cdFx0XHRjb25zdCB7IHNpemUsIG9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRcdERSQVcuaGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVSZXNpemUoZXYpIHtcclxuXHRcdGlmIChldi50YXJnZXQuZGF0YXNldC5hdHRyID09PSAnc2l6ZScpIHtcclxuXHRcdFx0Y29uc3Qgc2l6ZUZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dHJdJyk7XHJcblx0XHRcdHNpemVGaWVsZHMuZm9yRWFjaChzaXplRmllbGQgPT4ge1xyXG5cdFx0XHRcdGlmIChzaXplRmllbGQuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3U2l6ZSA9IHNpemVGaWVsZC52YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcblx0XHRcdFx0XHRcdHNpemU6IG5ld1NpemUsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRsZXQgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0XHREUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyRm9ybSgpIHtcclxuXHRcdGNvbnN0IGZvcm1TdHJpbmcgPSBgXHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX19uYW1lJz5QaXp6YSBOYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgcmVxdWlyZWQgbWluPSczJyBtYXg9JzI0JyBjbGFzcz0nY3JlYXRlX19uYW1lLXZhbHVlJz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4+RGVzY3JpcHRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz0nY3JlYXRlX19kZXNjcmlwdGlvbic+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fc2l6ZS10aXRsZSc+U2l6ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjMwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzMwJyBkYXRhLWF0dHI9J3NpemUnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLXNtYWxsXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NDU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nNDUnIGRhdGEtYXR0cj0nc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbWVkaXVtXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nNjAnIGRhdGEtYXR0cj0nc2l6ZScgY2hlY2tlZD5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1sYXJnZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD4gICAgXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLXRpdGxlJz5JbmdyZWRpZW50czxoMj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSB0b0h0bWwoZm9ybVN0cmluZyk7XHJcblx0XHRjb25zdCBzaXplRmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19zaXplJyk7XHJcblx0XHRzaXplRmllbGRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuXHRcdHJldHVybiBmb3JtO1xyXG5cdH1cclxuXHJcblx0cmVuZGVySW5ncmVkaWVudHMoZGF0YSkge1xyXG5cdFx0Y29uc3QgaW5ncmVkaWVudHNTdHJpbmcgPSBgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcblx0XHRodG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLWlucHV0JyB0eXBlPSdjaGVja2JveCcgdmFsdWU9JyR7XHJcblx0ZGF0YS5uYW1lXHJcbn0nIGRhdGEtZmxhZz0naW5ncmVkaWVudCcgZGF0YS1pZD0nJHtkYXRhLmlkfSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtET01BSU59LyR7XHJcblx0ZGF0YS5pbWFnZV91cmxcclxufScgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnIHRpdGxlPScke2RhdGEuZGVzY3JpcHRpb259JyBkYXRhLW5hbWU9J2luZ3JlZGllbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cdFx0cmV0dXJuIGh0bWw7XHJcblx0fSwgJycpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9J2NyZWF0ZV9fdGFnLXRpdGxlJz5UYWc8aDI+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGluZ3JlZGllbnRzU3RyaW5nKTtcclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcblxyXG5cdHJlbmRlclRhZ3MoZGF0YSkge1xyXG5cdFx0Y29uc3QgdGFnc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9fdGFncyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG5cdFx0aHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX190YWdzLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH0sICcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh0YWdzU3RyaW5nKTtcclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuICAgICAgICAgICAgPG1haW4gY2xhc3M9J2NyZWF0ZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXIgY3JlYXRlX19jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz0nY3JlYXRlX190aXRsZSc+Q3JlYXRlIFBpenphPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nY3JlYXRlX19jYW52YXMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nY3JlYXRlX19vcHRpb25zJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQaXp6YTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5qcyIsImltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuY2xhc3MgRHJhdyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmNydXN0X3BpenphID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYS9zdGF0aWMvaW1hZ2VzL3BpenphLnBuZyc7XHJcblx0XHR0aGlzLl9sb2FkSW1hZ2UgPSB0aGlzLl9sb2FkSW1hZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdChkYXRhKSB7XHJcblx0XHR0aGlzLmhvc3QgPSBkYXRhLmhvc3Q7XHJcblx0XHR0aGlzLnNpemUgPSAnNjAnO1xyXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHRcdHRoaXMuY2FudmFzV2lkdGggPSAzMjA7XHJcblx0XHR0aGlzLmNhbnZhc0hlaWdodCA9IDMyMDtcclxuXHRcdHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLmluZ3JlZGllbnRzO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuc3ByaXRlcyA9IHt9O1xyXG5cdFx0dGhpcy5sYXN0T3B0aW9ucyA9IFtdO1xyXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXNXaWR0aDtcclxuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0O1xyXG5cdFx0dGhpcy5fbG9hZFJlc291cmNlcygpLnRoZW4ocmVzb3VyY2VzID0+IHtcclxuXHRcdFx0cmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4gKHRoaXMuaW1hZ2VzW3Jlc291cmNlLm5hbWVdID0gcmVzb3VyY2UuaW1hZ2UpKTtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZCh0aGlzLmNhbnZhcyk7XHJcblx0XHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9zdGFydFNldCgpIHtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuXHRcdC8vIGxldCBwaXp6YSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbJ3BpenphJ10sIDE2MCwgMTYwLCAzMDAsIDMwMCk7XHJcblx0XHRsZXQgcGl6emEgPSBuZXcgU3ByaXRlKFxyXG5cdFx0XHR0aGlzLmltYWdlc1sncGl6emEnXSxcclxuXHRcdFx0MTYwLFxyXG5cdFx0XHQxNjAsXHJcblx0XHRcdDMwMCAqIGAke3BhcnNlSW50KHRoaXMuc2l6ZSl9YCAvIDYwLFxyXG5cdFx0XHQzMDAgKiBgJHtwYXJzZUludCh0aGlzLnNpemUpfWAgLyA2MFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuc3ByaXRlc1sncGl6emEnXSA9IHBpenphO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbC5wdXNoKHBpenphKTtcclxuXHRcdHRoaXMuX2RyYXcoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpIHtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoID09IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPCB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcclxuXHRcdFx0bGV0IHByZUJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLmxhc3RPcHRpb25zID0gW107XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0dGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuXHRcdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVsZW0uaWQgPT09IGVsKSB7XHJcblx0XHRcdFx0XHRcdHByZUJ1ZmZlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRpZDogZWxlbS5pZCxcclxuXHRcdFx0XHRcdFx0XHRzcHJpdGVzOiBlbGVtLnNwcml0ZXMsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbGVtLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHByZUJ1ZmZlcik7XHJcblx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5sYXN0T3B0aW9ucy5pbmNsdWRlcyhlbCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuXHRcdFx0XHRcdHRoaXMuX2dlbmVyYXRlU3ByaXRlKGVsLCAxMCk7XHJcblx0XHRcdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWwuc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZWxlbS5zcHJpdGVzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfZ2VuZXJhdGVTcHJpdGUobmFtZSwgY291bnQpIHtcclxuXHRcdGNvbnN0IHNwcml0ZXMgPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuXHRcdFx0bGV0IGluZ3JlZGllbnQgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzW2Ake25hbWV9YF0sIFJBTkRPTSg3MCwgMjUwKSwgUkFORE9NKDcwLCAyNTApKTtcclxuXHRcdFx0c3ByaXRlcy5wdXNoKGluZ3JlZGllbnQpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5idWZmZXIucHVzaCh7XHJcblx0XHRcdGlkOiBuYW1lLFxyXG5cdFx0XHRzcHJpdGVzOiBzcHJpdGVzLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfZHJhdygpIHtcclxuXHRcdHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS5kcmF3KHRoaXMuY3R4KSk7XHJcblx0fVxyXG5cclxuXHRfbG9hZFJlc291cmNlcygpIHtcclxuXHRcdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cdFx0cHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkSW1hZ2UoJ3BpenphJywgdGhpcy5jcnVzdF9waXp6YSkpO1xyXG5cdFx0cHJvbWlzZXMgPSBwcm9taXNlcy5jb25jYXQoXHJcblx0XHRcdHRoaXMuaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmdyX3VybCA9IGAke0RPTUFJTn0vJHtpbmdyZWRpZW50LmltYWdlX3VybH1gO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9sb2FkSW1hZ2UoaW5ncmVkaWVudC5uYW1lLCBpbmdyX3VybCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkSW1hZ2UobmFtZSwgdXJsKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHsgbmFtZSwgaW1hZ2UgfSk7XHJcblx0XHRcdGltYWdlLm9uZXJyb3IgPSBlID0+IHJlamVjdChlKTtcclxuXHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xyXG5cdFx0XHRpbWFnZS53aWR0aCA9IDIwO1xyXG5cdFx0XHRpbWFnZS5oZWlnaHQgPSAyMDtcclxuXHRcdFx0aW1hZ2UuY3Jvc3NPcmlnaW4gPSAnJztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERSQVcgPSBuZXcgRHJhdygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvZHJhdy5qcyIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG5cdGNvbnN0cnVjdG9yKGltYWdlLCBjeCwgY3ksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdHRoaXMueCA9IDA7XHJcblx0XHR0aGlzLnkgPSAwO1xyXG5cdFx0dGhpcy5pbWFnZSA9IGltYWdlO1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoIHx8IHRoaXMuaW1hZ2Uud2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmltYWdlLmhlaWdodDtcclxuXHRcdHRoaXMuY3ggPSBjeCB8fCAwO1xyXG5cdFx0dGhpcy5jeSA9IGN5IHx8IDA7XHJcblx0fVxyXG5cdGdldCBjeCgpIHtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCArIHRoaXMud2lkdGggKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0Z2V0IGN5KCkge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0c2V0IGN4KHZhbHVlKSB7XHJcblx0XHR0aGlzLnggPSBNYXRoLnJvdW5kKHZhbHVlIC0gdGhpcy53aWR0aCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRzZXQgY3kodmFsdWUpIHtcclxuXHRcdHRoaXMueSA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLmhlaWdodCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRkcmF3KGN0eCkge1xyXG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvc3ByaXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==