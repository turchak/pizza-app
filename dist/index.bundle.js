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

__webpack_require__(9);

var _router = __webpack_require__(10);

var _router2 = _interopRequireDefault(_router);

var _routes = __webpack_require__(11);

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
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _login = __webpack_require__(12);

var _login2 = _interopRequireDefault(_login);

var _app = __webpack_require__(15);

var _app2 = _interopRequireDefault(_app);

var _registration = __webpack_require__(19);

var _registration2 = _interopRequireDefault(_registration);

var _user = __webpack_require__(21);

var _user2 = _interopRequireDefault(_user);

var _create = __webpack_require__(22);

var _create2 = _interopRequireDefault(_create);

var _auth = __webpack_require__(25);

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
/* 12 */
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

var _login = __webpack_require__(13);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(1);

var _error = __webpack_require__(14);

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
/* 14 */
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
/* 15 */
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

var _list = __webpack_require__(16);

var _list2 = _interopRequireDefault(_list);

var _utils = __webpack_require__(1);

var _pizza = __webpack_require__(8);

var _ws = __webpack_require__(17);

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
				return _this2.updateList();
			});
			_ws.WS.subscribe('ACCEPT_PIZZA', function (data) {
				_pizza.CREATE_DATA.removePizza(data);
				return _this2.updateList();
			});

			_pizza.CREATE_DATA.getUnacceptedPizzas(true, 12, 0).then(function (res) {
				return _this2.updateList();
			});
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth = __webpack_require__(6);

var _constants = __webpack_require__(3);

var _event = __webpack_require__(18);

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
/* 18 */
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
/* 19 */
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

var _registration = __webpack_require__(20);

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
/* 20 */
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
/* 21 */
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

var _pizza = __webpack_require__(8);

var _utils = __webpack_require__(1);

var _constants = __webpack_require__(3);

var _draw = __webpack_require__(23);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DRAW = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(3);

var _sprite = __webpack_require__(24);

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
/* 24 */
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
/* 25 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjk0YmYxNmQyMGY5ZjA2ZDJhM2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9waXp6YS5kYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2V2ZW50LmVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaG9zdCIsIm9uSW5pdCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJvbkJlZm9yZVVubW91bnQiLCJjaGlsZHJlbiIsInJlbmRlciIsImlubmVySFRNTCIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvSHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3RyaW5nIiwiY29udGVudCIsIlJBTkRPTSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkF1dGhTZXJ2aWNlIiwiX3Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9jbGFpbXMiLCJKU09OIiwicGFyc2UiLCJsb2dpblVybCIsInN0b3JlVXJsIiwiY3JlYXRlVXJsIiwidG9rZW4iLCJ0b2tlbklzTm90RXhwaXJlZCIsImNsZWFyU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjbGFpbXMiLCJleHAiLCJEYXRlIiwibm93IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJvcHRpb25zIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJIZWFkZXJzIiwib2siLCJhbnN3ZXIiLCJwYXJzZUp3dENsYWltcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhdHVzIiwicmVqZWN0Iiwiand0VG9rZW4iLCJiYXNlNjRVcmwiLCJzcGxpdCIsImJhc2U2NCIsInJlcGxhY2UiLCJ3aW5kb3ciLCJhdG9iIiwic2V0SXRlbSIsIkFVVEhfU0VSVklDRSIsIkRPTUFJTiIsIklOR1JFRElFTlRTX1VSTCIsIlRBR19VUkwiLCJVU0VSX1VSTCIsIkNSRUFURV9QSVpaQSIsIlBJWlpBX0xJU1QiLCJXU19USUNLRVQiLCJXU19QQVRIIiwiRm9vdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwiaXNBdXRob3JpemVkIiwibG9naW5CdXR0b24iLCJsb2dvdXRCdXR0b24iLCJ1c2VyQnV0dG9uIiwicmVnaXN0cmF0aW9uQnV0dG9uIiwiaGVhZGVyIiwiZnJhZ21lbnQiLCJBdXRoSHR0cFNlcnZpY2UiLCJ1cmwiLCJFcnJvciIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJBVVRIX0hUVFBfU0VSVklDRSIsIkFQUF9ST1VURVIiLCJxdWVyeVNlbGVjdG9yIiwicm91dGVzIiwiUGl6emFEYXRhU2VydmljZSIsImluZ3JlZGllbnRzIiwidGFncyIsInBpenphcyIsInBpenphIiwiZmluZEluZGV4IiwidXVpZCIsInAiLCJ1bnNoaWZ0IiwidXVpZHMiLCJmb3JFYWNoIiwiaW5kZXgiLCJzcGxpY2UiLCJyZXNldCIsImxpbWl0Iiwib2Zmc2V0IiwiZ2V0IiwicmVzdWx0cyIsImNvbmNhdCIsIkNSRUFURV9EQVRBIiwiUm91dGVyIiwiYWN0aXZlUm91dGUiLCJhY3RpdmVDb21wb25lbnQiLCJoYW5kbGVVcmxDaGFuZ2UiLCJiaW5kIiwiYXBwbHlSb3V0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRoIiwibmV4dFJvdXRlIiwiZmluZCIsImhyZWYiLCJyZWRpcmVjdFRvIiwiaGFuZGxlUmVkaXJlY3QiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsImxvZ291dCIsIm9uRW50ZXJHdWFyZCIsImd1YXJkIiwic3VjY2VzcyIsInJvdXRlIiwicmVkaXJlY3QiLCJjb21wb25lbnRJbnN0YW5jZSIsInVwZGF0ZVN0YXRlIiwidXBkYXRlIiwic2xpY2UiLCJMb2dpbiIsImxvZ2luRm9ybSIsImZvb3RlciIsIkxvZ2luRm9ybSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImxvZ2luU3RyaW5nIiwibG9naW5GcmFnbWVudCIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibGlzdCIsImVzdGFibGlzaCIsInN1YnNjcmliZSIsImFkZFBpenphIiwidXBkYXRlTGlzdCIsInJlbW92ZVBpenphIiwiZ2V0VW5hY2NlcHRlZFBpenphcyIsImNvbnRhaW5lclN0cmluZyIsImNvbnRhaW5lckZyYWdtZW50IiwiY29udGFpbmVyIiwiUGl6emFMaXN0IiwiaW1nX3VybCIsInRpbWVfcHJlcGFyZWQiLCJwcmljZSIsImxlbmd0aCIsImlubmVyVGV4dCIsImNyZWF0ZVBpenphIiwiV3MiLCJ3cyIsIl9lbWl0dGVyIiwiZXZlbnROYW1lIiwiY2FsbGJhY2siLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwiZXZlbnRfbmFtZSIsImUiLCJjb2RlIiwic2V0VGltZW91dCIsIl9lc3RhYmxpc2giLCJnZXRUaWNrZXQiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJfb25tZXNzYWdlIiwib25jbG9zZSIsIl9vbmNsb3NlIiwiV1MiLCJFdmVudEVtaXR0ZXIiLCJldmVudHMiLCJmbiIsImNhbGwiLCJwdXNoIiwiZmlsdGVyIiwiZXZlbnRGbiIsIlJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJzdG9yZXMiLCJnZXRTdG9yZXMiLCJzdG9yZUluZm8iLCJyZXN1bHQiLCJwYXNzd29yZF9yZXBlYXQiLCJlbWFpbCIsInN0b3JlX2lkIiwicGFyc2VJbnQiLCJzdG9yZSIsInNlbGVjdGVkSW5kZXgiLCJkYXRhc2V0IiwiaWQiLCJzdG9yZV9wYXNzd29yZCIsInJlZ2lzdGVyVXNlciIsInNlbGVjdCIsImhpZGRlbiIsIm9wdGlvbiIsImVsZW1lbnQiLCJmb3JtIiwiVXNlciIsImNyZWF0ZWQiLCJ2aXNpdGVkIiwiZ2V0VXNlckluZm8iLCJjcmVhdGVkX2F0IiwibGFzdF9sb2dpbiIsInVzZXIiLCJOZXdQaXp6YSIsInNpemUiLCJoYW5kbGVDbGljayIsImhhbmRsZVJlc2l6ZSIsImNhbnZhcyIsImRlc2NyaXB0aW9uIiwiZmQiLCJGb3JtRGF0YSIsInRvQmxvYiIsImJsb2IiLCJwb3N0IiwiYWxsIiwiZ2V0SW5ncmVkaWVudHMiLCJnZXRUYWdzIiwiYnV0dG9uc1N0cmluZyIsImJ1dHRvbnMiLCJyZW5kZXJGb3JtIiwicmVuZGVySW5ncmVkaWVudHMiLCJyZW5kZXJUYWdzIiwiZmxhZyIsImluZ3JlZGllbnRzSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5ld09wdGlvbnMiLCJuZXdJbmdyZWRpZW50cyIsImluZ3JlZGllbnRJbnB1dCIsImNoZWNrZWQiLCJhdHRyIiwic2l6ZUZpZWxkcyIsInNpemVGaWVsZCIsIm5ld1NpemUiLCJmb3JtU3RyaW5nIiwiaW5ncmVkaWVudHNTdHJpbmciLCJyZWR1Y2UiLCJodG1sIiwiaW1hZ2VfdXJsIiwidGFnc1N0cmluZyIsIkRyYXciLCJjcnVzdF9waXp6YSIsIl9sb2FkSW1hZ2UiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbWFnZXMiLCJzcHJpdGVzIiwibGFzdE9wdGlvbnMiLCJidWZmZXIiLCJzcHJpdGVzUG9vbCIsIndpZHRoIiwiaGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsImltYWdlIiwiX3N0YXJ0U2V0IiwiX2RyYXciLCJmaWx0ZXJlZEVsZW0iLCJlbGVtIiwieCIsInkiLCJwcmVCdWZmZXIiLCJlbCIsImluY2x1ZGVzIiwiX2dlbmVyYXRlU3ByaXRlIiwiY291bnQiLCJpIiwiaW5ncmVkaWVudCIsImNsZWFyUmVjdCIsInNwcml0ZSIsImRyYXciLCJwcm9taXNlcyIsIm1hcCIsImluZ3JfdXJsIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsImRyYXdJbWFnZSIsInJvdW5kIiwiYXV0aEd1YXJkIiwicGFyYW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3RE1BLFM7QUFDTCxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNsQixPQUFLQSxLQUFMLEdBQWFBLFNBQVMsRUFBdEI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtD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QUtnVCxLQUFMLENBQVd6SyxRQUFRLEtBQUt1SSxNQUFMLEdBQWMsR0FBakMsQ0FBVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkY7O0FBRU8sSUFBTW1DLGdDQUFZLFNBQVpBLFNBQVksUUFBUztBQUNqQyxRQUFPLG1CQUFhclAsWUFBYixLQUNKekIsUUFBUUMsT0FBUixDQUFnQixFQUFFaUYsU0FBUyxJQUFYLEVBQWlCQyxPQUFPNEwsS0FBeEIsRUFBaEIsQ0FESSxHQUVKL1EsUUFBUUMsT0FBUixDQUFnQixFQUFFaUYsU0FBUyxLQUFYLEVBQWtCRSxVQUFVLFFBQTVCLEVBQWhCLENBRkg7QUFHQSxDQUpNLEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjk0YmYxNmQyMGY5ZjA2ZDJhM2UiLCJjbGFzcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHMgfHwge307XHJcblx0XHR0aGlzLnN0YXRlID0ge307XHJcblx0XHR0aGlzLmhvc3QgPSBudWxsO1xyXG5cdFx0dGhpcy5vbkluaXQoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7fVxyXG5cclxuXHR1cGRhdGUobmV4dFByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0dW5tb3VudCgpIHtcclxuXHRcdHRoaXMub25CZWZvcmVVbm1vdW50KCk7XHJcblx0fVxyXG5cclxuXHRvbkJlZm9yZVVubW91bnQoKSB7fVxyXG5cclxuXHRvbkJlZm9yZVVwZGF0ZShuZXh0UHJvcHMpIHt9XHJcblxyXG5cdGdldCBuYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cdF9yZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0aWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQoY2hpbGRyZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmhvc3Q7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvY29tcG9uZW50LmpzIiwiZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cmluZztcclxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5ET00gPSAobWluLCBtYXgpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGFpbXMnKSk7XHJcblx0XHR0aGlzLmxvZ2luVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9sb2dpbmA7XHJcblx0XHR0aGlzLnN0b3JlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvc3RvcmUvbGlzdGA7XHJcblx0XHR0aGlzLmNyZWF0ZVVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvY3JlYXRlYDtcclxuXHR9XHJcblxyXG5cdGdldCB0b2tlbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b2tlbjtcclxuXHR9XHJcblxyXG5cdHNldCB0b2tlbih0b2tlbikge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuXHR9XHJcblxyXG5cdGdldCBjbGFpbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2xhaW1zO1xyXG5cdH1cclxuXHJcblx0c2V0IGNsYWltcyhjbGFpbXMpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IGNsYWltcztcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGFpbXMnLCBKU09OLnN0cmluZ2lmeShjbGFpbXMpKTtcclxuXHR9XHJcblxyXG5cdGlzQXV0aG9yaXplZCgpIHtcclxuXHRcdGlmICghdGhpcy50b2tlbikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuSXNOb3RFeHBpcmVkKCkpIHtcclxuXHRcdFx0dGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRjbGVhclN0b3JhZ2UoKSB7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBudWxsO1xyXG5cdFx0dGhpcy5fdG9rZW4gPSBudWxsO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2xhaW1zJyk7XHJcblx0fVxyXG5cclxuXHR0b2tlbklzTm90RXhwaXJlZCgpIHtcclxuXHRcdGlmICghdGhpcy50b2tlbikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xhaW1zLmV4cCAqIDEwMDAgPiBEYXRlLm5vdygpO1xyXG5cdH1cclxuXHJcblx0c3RvcmVJbmZvKCkge1xyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMuc3RvcmVVcmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0bG9naW5Vc2VyKGRhdGEpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuXHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoKS5hcHBlbmQoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyksXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLmxvZ2luVXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGlmIChyZXMub2spIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRva2VuID0gYW5zd2VyLnRva2VuO1xyXG5cdFx0XHRcdFx0dGhpcy5jbGFpbXMgPSB0aGlzLnBhcnNlSnd0Q2xhaW1zKGFuc3dlci50b2tlbik7XHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4gUHJvbWlzZS5yZWplY3QoeyBhbnN3ZXIsIHN0YXR1czogcmVzLnN0YXR1cyB9KSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVnaXN0ZXJVc2VyKGRhdGEpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5jcmVhdGVVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0cGFyc2VKd3RDbGFpbXMoand0VG9rZW4pIHtcclxuXHRcdGlmIChqd3RUb2tlbikge1xyXG5cdFx0XHRsZXQgYmFzZTY0VXJsID0gand0VG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuXHRcdFx0bGV0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKTtcclxuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge307XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9TRVJWSUNFID0gbmV3IEF1dGhTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwiZXhwb3J0IGNvbnN0IERPTUFJTiA9ICdodHRwczovL3BpenphLXRlbGUuZ2EnO1xyXG5leHBvcnQgY29uc3QgSU5HUkVESUVOVFNfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvaW5ncmVkaWVudC9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFRBR19VUkwgPSBgJHtET01BSU59L2FwaS92MS90YWcvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBVU0VSX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvbXlfaW5mb2A7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUElaWkEgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9jcmVhdGVgO1xyXG5leHBvcnQgY29uc3QgUElaWkFfTElTVCA9IGAke0RPTUFJTn0vYXBpL3YxL3BpenphL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgV1NfVElDS0VUID0gYCR7RE9NQUlOfS9hcGkvdjEvd3MvdGlja2V0YDtcclxuZXhwb3J0IGNvbnN0IFdTX1BBVEggPSAnd3NzOi8vcGl6emEtdGVsZS5nYS93cyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YWRkcmVzcz5Lb3R0YW5zLCBLb3R0YW5zIFNydC4gMSxcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis1Nzc3ODg4N1wiPnRlbC4gNTc3LTc4OC04NzwvYT5cclxuICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5QaXp6YSBNYW5hZ2VyICZjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMS0wMVwiPjIwMTg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Ly9UT0RPOiBuZWVkIGRlbGV0ZSA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwibG9naW5fX2J1dHRvbi1saW5rXCI+c2lnbiBpbjwvYT5cclxuXHRcdGNvbnN0IGlzQXV0aG9yaXplZCA9IEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKTtcclxuXHJcblx0XHRjb25zdCBsb2dpbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvbG9naW5cIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pblwiPnNpZ24gaW48L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGxvZ291dEJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvbG9nb3V0XCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tb3V0XCI+c2lnbiBvdXQ8L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHVzZXJCdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3VzZXJcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pbmZvXCI+dXNlciBpbmZvPC9hPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCByZWdpc3RyYXRpb25CdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3JlZ2lzdHJhdGlvblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLXVwXCI+c2lnbiB1cDwvYT5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImN1cnJlbnQtdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjY2xvY2tcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDItMDMgMTI6MDE6NDhcIj4xMjowMTo0ODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxvZ29cIiBocmVmPVwiIy9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjbG9nb1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNBdXRob3JpemVkID8gbG9nb3V0QnV0dG9uIDogbG9naW5CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyB1c2VyQnV0dG9uIDogcmVnaXN0cmF0aW9uQnV0dG9ufSBcclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaGVhZGVyKTtcclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5jbGFzcyBBdXRoSHR0cFNlcnZpY2Uge1xyXG5cdGdldCh1cmwpIHtcclxuXHRcdGlmICghQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vbi1hdXRob3JpemVkIHJlcXVlc3QnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtBVVRIX1NFUlZJQ0UudG9rZW59YCxcclxuXHRcdFx0XHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBvc3QodXJsLCBkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2godXJsLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBkYXRhLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBhdGNoKCkge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfSFRUUF9TRVJWSUNFID0gbmV3IEF1dGhIdHRwU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5odHRwLmpzIiwiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL2ZyYW1ld29yay9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSID0gbmV3IFJvdXRlcih7IGhvc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JyksIHJvdXRlcyB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2luZGV4LmpzIiwiaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGguaHR0cCc7XHJcbmltcG9ydCB7IElOR1JFRElFTlRTX1VSTCwgVEFHX1VSTCwgUElaWkFfTElTVCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFBpenphRGF0YVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0dGhpcy50YWdzID0gW107XHJcblx0XHR0aGlzLnBpenphcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0YWRkUGl6emEocGl6emEpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5waXp6YXMuZmluZEluZGV4KHAgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBwaXp6YS51dWlkID09PSBwLnV1aWQ7XHJcblx0XHRcdH0pICE9IC0xXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5waXp6YXMudW5zaGlmdChwaXp6YSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVBpenphKHV1aWRzKSB7XHJcblx0XHR1dWlkcy5mb3JFYWNoKHV1aWQgPT4ge1xyXG5cdFx0XHRjb25zdCBpbmRleCA9IHRoaXMucGl6emFzLmZpbmRJbmRleChwID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdXVpZCA9PT0gcC51dWlkO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChpbmRleCAhPSAtMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5waXp6YXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0VW5hY2NlcHRlZFBpenphcyhyZXNldCwgbGltaXQsIG9mZnNldCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChgJHtQSVpaQV9MSVNUfT9saW1pdD0ke2xpbWl0IHx8IDEwMH0mb2Zmc2V0PSR7b2Zmc2V0IHx8IDB9YCkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRpZiAocmVzZXQpIHtcclxuXHRcdFx0XHRcdHRoaXMucGl6emFzID0gcmVzLnJlc3VsdHM7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMucGl6emFzID0gdGhpcy5waXp6YXMuY29uY2F0KHJlcy5yZXN1bHRzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRJbmdyZWRpZW50cygpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoSU5HUkVESUVOVFNfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWdzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChUQUdfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnRhZ3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfREFUQSA9IG5ldyBQaXp6YURhdGFTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9waXp6YS5kYXRhLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIFJvdXRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdGNvbnN0IHsgcm91dGVzLCBob3N0IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0dGhpcy5ob3N0ID0gaG9zdDtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRyb3V0ZXMsXHJcblx0XHRcdGFjdGl2ZVJvdXRlOiBudWxsLFxyXG5cdFx0XHRhY3RpdmVDb21wb25lbnQ6IG51bGwsXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlVXJsQ2hhbmdlID0gdGhpcy5oYW5kbGVVcmxDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuYXBwbHlSb3V0ZSA9IHRoaXMuYXBwbHlSb3V0ZS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKSk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKTtcclxuXHR9XHJcblxyXG5cdGdldCBwYXRoKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlVXJsQ2hhbmdlKHVybCkge1xyXG5cdFx0Y29uc3QgeyByb3V0ZXMsIGFjdGl2ZVJvdXRlIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgbmV4dFJvdXRlID0gcm91dGVzLmZpbmQoKHsgaHJlZiB9KSA9PiBocmVmID09PSB1cmwpO1xyXG5cdFx0aWYgKG5leHRSb3V0ZSAmJiBuZXh0Um91dGUgIT09IGFjdGl2ZVJvdXRlKSB7XHJcblx0XHRcdGlmIChuZXh0Um91dGUucmVkaXJlY3RUbykge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhbmRsZVJlZGlyZWN0KG5leHRSb3V0ZS5yZWRpcmVjdFRvKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5vbkVudGVyKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlT25FbnRlcihuZXh0Um91dGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmFwcGx5Um91dGUobmV4dFJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZVJlZGlyZWN0KHVybCkge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVPbkVudGVyKG5leHRSb3V0ZSkge1xyXG5cdFx0Y29uc3QgeyBvbkVudGVyIH0gPSBuZXh0Um91dGU7XHJcblxyXG5cdFx0aWYgKG9uRW50ZXIubG9nb3V0KSB7XHJcblx0XHRcdEFVVEhfU0VSVklDRS5jbGVhclN0b3JhZ2UoKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBvbkVudGVyR3VhcmQgPSBvbkVudGVyLmd1YXJkO1xyXG5cdFx0b25FbnRlckd1YXJkKG5leHRSb3V0ZSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLnN1Y2Nlc3MgPyB0aGlzLmFwcGx5Um91dGUocmVzLnJvdXRlKSA6IHRoaXMuaGFuZGxlUmVkaXJlY3QocmVzLnJlZGlyZWN0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXBwbHlSb3V0ZShyb3V0ZSkge1xyXG5cdFx0Y29uc3QgeyBDb21wb25lbnQgfSA9IHJvdXRlO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTdGF0ZSh7XHJcblx0XHRcdGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gYWN0aXZlQ29tcG9uZW50LnVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsImltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXInO1xyXG5pbXBvcnQgTmV3UGl6emEgZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL3V0aWxzL2F1dGgnO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJycsXHJcblx0XHRyZWRpcmVjdFRvOiAnLycsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnLycsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBMb2dpbixcclxuXHRcdGhyZWY6ICcvbG9naW4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBSZWdpc3RyYXRpb24sXHJcblx0XHRocmVmOiAnL3JlZ2lzdHJhdGlvbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IFVzZXIsXHJcblx0XHRocmVmOiAnL3VzZXInLFxyXG5cdFx0b25FbnRlcjoge1xyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGhyZWY6ICcvbG9nb3V0JyxcclxuXHRcdG9uRW50ZXI6IHtcclxuXHRcdFx0bG9nb3V0OiB0cnVlLFxyXG5cdFx0XHRndWFyZDogYXV0aEd1YXJkLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogTmV3UGl6emEsXHJcblx0XHRocmVmOiAnL2NyZWF0ZScsXHJcblx0XHRvbkVudGVyOiB7XHJcblx0XHRcdGd1YXJkOiBhdXRoR3VhcmQsXHJcblx0XHR9LFxyXG5cdH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vbG9naW4uZm9ybSc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxvZ2luRm9ybSA9IG5ldyBMb2dpbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCB0aGlzLmxvZ2luRm9ybS51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL25vdGlmaWNhdGlvbi9lcnJvci5tZXNzYWdlJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCB7IEFQUF9ST1VURVIgfSBmcm9tICcuLi8uLi9pbmRleCc7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VybmFtZTogbnVsbCxcclxuXHRcdFx0cGFzc3dvcmQ6IG51bGwsXHJcblx0XHRcdG1lc3NhZ2U6IG51bGwsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luJyk7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLmxvZ2luVXNlcihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdFx0XHRcdEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RhdHVzID0+IHtcclxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gc3RhdHVzLmFuc3dlci5lcnJvcjtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHRleHQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBtZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luU3RyaW5nID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgdmFsdWU9XHJcblx0XHRcdFx0JHt1c2VybmFtZSA/IHVzZXJuYW1lIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiB2YWx1ZT1cclxuXHRcdFx0XHQke3Bhc3N3b3JkID8gcGFzc3dvcmQgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBsb2dpbkZyYWdtZW50ID0gdG9IdG1sKGxvZ2luU3RyaW5nKTtcclxuXHJcblx0XHRpZiAobWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UudXBkYXRlKHsgdGV4dDogbWVzc2FnZSB9KTtcclxuXHRcdFx0bG9naW5GcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2J1dHRvbicpLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bG9naW5GcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRyZXR1cm4gbG9naW5GcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fY29udGFpbmVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHRleHQgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX190ZXh0Jyk7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cdFx0cmV0dXJuIGVycm9yO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBQaXp6YUxpc3QgZnJvbSAnLi4vbGlzdC9saXN0JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL3BpenphLmRhdGEnO1xyXG5pbXBvcnQgeyBXUyB9IGZyb20gJy4uLy4uL3V0aWxzL3dzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxpc3QgPSBuZXcgUGl6emFMaXN0KCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdCgpIHtcclxuXHRcdFdTLmVzdGFibGlzaCgpO1xyXG5cdFx0V1Muc3Vic2NyaWJlKCdDUkVBVEVfUElaWkEnLCBkYXRhID0+IHtcclxuXHRcdFx0Q1JFQVRFX0RBVEEuYWRkUGl6emEoZGF0YSk7XHJcblx0XHRcdHJldHVybiB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHRcdH0pO1xyXG5cdFx0V1Muc3Vic2NyaWJlKCdBQ0NFUFRfUElaWkEnLCBkYXRhID0+IHtcclxuXHRcdFx0Q1JFQVRFX0RBVEEucmVtb3ZlUGl6emEoZGF0YSk7XHJcblx0XHRcdHJldHVybiB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdENSRUFURV9EQVRBLmdldFVuYWNjZXB0ZWRQaXp6YXModHJ1ZSwgMTIsIDApLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlTGlzdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaXN0KCkge1xyXG5cdFx0dGhpcy5saXN0LnVwZGF0ZSh7XHJcblx0XHRcdHBpenphczogQ1JFQVRFX0RBVEEucGl6emFzLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcblx0XHQ8bWFpbiBjbGFzcz1cIm1haW4gcGl6emFzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGl6emFzX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjL2NyZWF0ZVwiIGNsYXNzPVwiYnV0dG9uIGFkZC1saW5rXCI+YWRkIHBpenphPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcblx0XHRgO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRhaW5lckZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBjb250YWluZXJGcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcucGl6emFzX19jb250YWluZXInKTtcclxuXHJcblx0XHRjb250YWluZXIuYXBwZW5kKHRoaXMubGlzdC51cGRhdGUoKSk7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgY29udGFpbmVyRnJhZ21lbnQsIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFBpenphTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBpenphKHBpenphcykge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cdFx0Y29uc3QgbGlzdCA9IHBpenphID0+IHtcclxuXHRcdFx0cmV0dXJuIGBcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwaXp6YVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBpenphX19pbWdcIiBzcmM9XCIke0RPTUFJTn0vJHtwaXp6YS5pbWdfdXJsfVwiIGFsdD1cIiR7cGl6emEubmFtZX1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBpenphX19uYW1lXCI+JHtwaXp6YS5uYW1lfTwvaDI+XHJcblx0XHRcdFx0PHRpbWUgY2xhc3M9XCJwaXp6YV9fdGltZVwiIGRhdGV0aW1lPVwiXHJcblx0XHRcdFx0JHtwaXp6YS50aW1lX3ByZXBhcmVkfVwiPiR7cGl6emEudGltZV9wcmVwYXJlZH08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBpenphX19xdWV1ZS1udW1iZXJcIj4jMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMDQ6MDBcIj40PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtwaXp6YS5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPiBcclxuICAgICAgICAgICAgYDtcclxuXHRcdH07XHJcblxyXG5cdFx0cGl6emFzLmZvckVhY2gocGl6emEgPT4ge1xyXG5cdFx0XHRjb250YWluZXIuaW5uZXJIVE1MICs9IGxpc3QocGl6emEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0XHRgO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRhaW5lckZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBjb250YWluZXJGcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9fY29udGFpbmVyJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMpIHtcclxuXHRcdFx0Y29uc3QgeyBwaXp6YXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0XHRpZiAocGl6emFzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdGNvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKHRoaXMuY3JlYXRlUGl6emEocGl6emFzKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29udGFpbmVyO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaXp6YUxpc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsImltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoLmh0dHAnO1xyXG5pbXBvcnQgeyBXU19USUNLRVQsIFdTX1BBVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vZXZlbnQuZW1pdHRlcic7XHJcblxyXG5jbGFzcyBXcyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLndzID0gbnVsbDtcclxuXHRcdHRoaXMuX2VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0fVxyXG5cclxuXHRnZXRUaWNrZXQoKSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFdTX1RJQ0tFVCkudGhlbihyZXMgPT4gcmVzKTtcclxuXHR9XHJcblxyXG5cdHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XHJcblx0XHR0aGlzLl9lbWl0dGVyLnN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKTtcclxuXHR9XHJcblxyXG5cdF9vbm1lc3NhZ2UoZGF0YSkge1xyXG5cdFx0Y29uc3QgZXZlbnQgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cdFx0Y29uc29sZS5sb2coJ21lc3NhZ2U6ICcsIGV2ZW50KTtcclxuXHRcdHRoaXMuX2VtaXR0ZXIuZW1pdChldmVudC5ldmVudF9uYW1lLCBldmVudC5kYXRhKTtcclxuXHR9XHJcblxyXG5cdF9vbmNsb3NlKGUpIHtcclxuXHRcdGlmIChlLmNvZGUgPT09IDQwMDEpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0xvZ2luIHBseicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0xvc3QgY29ubmVjdGlvbiAuLi4gcmVjb25uZWN0Jyk7XHJcblx0XHRcdHNldFRpbWVvdXQodGhpcy5fZXN0YWJsaXNoLCAyMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGVzdGFibGlzaCgpIHtcclxuXHRcdHRoaXMuZ2V0VGlja2V0KCkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0dGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoYCR7V1NfUEFUSH0/a2V5PSR7ZGF0YS50b2tlbn1gKTtcclxuXHRcdFx0dGhpcy53cy5vbm9wZW4gPSBjb25zb2xlLmxvZztcclxuXHRcdFx0dGhpcy53cy5vbm1lc3NhZ2UgPSBlID0+IHRoaXMuX29ubWVzc2FnZShlLmRhdGEpO1xyXG5cdFx0XHR0aGlzLndzLm9uY2xvc2UgPSBlID0+IHRoaXMuX29uY2xvc2UoZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXUyA9IG5ldyBXcygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvd3MuanMiLCJleHBvcnQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZXZlbnRzID0ge307XHJcblx0fVxyXG5cclxuXHRlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xyXG5cdFx0Y29uc3QgZXZlbnQgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xyXG5cdFx0aWYgKGV2ZW50KSB7XHJcblx0XHRcdGV2ZW50LmZvckVhY2goZm4gPT4ge1xyXG5cdFx0XHRcdGZuLmNhbGwobnVsbCwgZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcclxuXHRcdGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG5cdFx0XHR0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldmVudEZuID0+IGZuICE9PSBldmVudEZuKTtcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9ldmVudC5lbWl0dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbkZvcm0gZnJvbSAnLi9yZWdpc3RyYXRpb24uZm9ybSc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMucmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgdGhpcy5yZWdpc3RyYXRpb24udXBkYXRlKCksIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c3RvcmVzOiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbicpO1xyXG5cdFx0dGhpcy5nZXRTdG9yZXMoKTtcclxuXHR9XHJcblxyXG5cdGdldFN0b3JlcygpIHtcclxuXHRcdEFVVEhfU0VSVklDRS5zdG9yZUluZm8oKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMuc3RhdGUuc3RvcmVzID0gcmVzdWx0O1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBldi50YXJnZXQudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogZXYudGFyZ2V0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmRfcmVwZWF0OiBldi50YXJnZXQucGFzc3dvcmRfcmVwZWF0LnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0ZW1haWw6IGV2LnRhcmdldC5lbWFpbC52YWx1ZS50cmltKCksXHJcblx0XHRcdHN0b3JlX2lkOiBwYXJzZUludChldi50YXJnZXQuc3RvcmUub3B0aW9uc1tldi50YXJnZXQuc3RvcmUuc2VsZWN0ZWRJbmRleF0uZGF0YXNldC5pZCksXHJcblx0XHRcdHN0b3JlX3Bhc3N3b3JkOiBldi50YXJnZXQuc3RvcmVfcGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0fTtcclxuXHRcdEFVVEhfU0VSVklDRS5yZWdpc3RlclVzZXIoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JlcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblx0XHRjb25zdCByZWdpc3RyYXRpb24gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVnaXN0cmF0aW9uX190aXRsZVwiPnJlZ2lzdHJhdGlvbiBmb3JtPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVW5pcXVlLiBNaW4gbGVuZ3RoIDIgY2hhcnMsIG1heCAtIDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIj5SZS1lbnRlciBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRfcmVwZWF0XCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgbWF0Y2ggd2l0aCBwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIGVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlXCI+U3RvcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBoaWRkZW4gaWQ9XCJyZWdpc3RyYXRpb24tc3RvcmVcIiBuYW1lPVwic3RvcmVcIj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIj5TdG9yZSBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInN0b3JlX3Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgc3RvcmUgcGFzc3dvcmQuIE1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiByZWdpc3RyYXRpb25fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHJlZ2lzdHJhdGlvbik7XHJcblxyXG5cdFx0Y29uc3Qgc2VsZWN0ID0gZnJhZ21lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uX19zZWxlY3QnKTtcclxuXHJcblx0XHRpZiAoc3RvcmVzKSB7XHJcblx0XHRcdHNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdFx0c3RvcmVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcblx0XHRcdFx0b3B0aW9uLnRleHQgPSBlbGVtZW50Lm5hbWU7XHJcblx0XHRcdFx0b3B0aW9uLmRhdGFzZXQuaWQgPSBlbGVtZW50LmlkO1xyXG5cdFx0XHRcdHNlbGVjdC5hZGQob3B0aW9uKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmh0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX1VSTCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRcdGVtYWlsOiBudWxsLFxyXG5cdFx0XHRjcmVhdGVkOiBudWxsLFxyXG5cdFx0XHR2aXNpdGVkOiBudWxsLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3VzZXItY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdFx0dGhpcy5nZXRVc2VySW5mbygpO1xyXG5cdH1cclxuXHJcblx0Z2V0VXNlckluZm8oKSB7XHJcblx0XHRBVVRIX0hUVFBfU0VSVklDRS5nZXQoVVNFUl9VUkwpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0dGhpcy51cGRhdGVTdGF0ZSh7XHJcblx0XHRcdFx0dXNlcm5hbWU6IHJlc3VsdC51c2VybmFtZSxcclxuXHRcdFx0XHRlbWFpbDogcmVzdWx0LmVtYWlsLFxyXG5cdFx0XHRcdGNyZWF0ZWQ6IHJlc3VsdC5jcmVhdGVkX2F0LFxyXG5cdFx0XHRcdHZpc2l0ZWQ6IHJlc3VsdC5sYXN0X2xvZ2luLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGNyZWF0ZWQsIHZpc2l0ZWQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCB1c2VyID0gYFxyXG4gICAgICAgIDxtYWluIGNsYXNzPVwidXNlclwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHt1c2VybmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7ZW1haWx9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4ke2NyZWF0ZWR9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4ke3Zpc2l0ZWR9PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHVzZXIpO1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgZnJhZ21lbnQsIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXIvdXNlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCB7IENSRUFURV9EQVRBIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGl6emEuZGF0YSc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgRE9NQUlOLCBDUkVBVEVfUElaWkEgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEUkFXIH0gZnJvbSAnLi9kcmF3JztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmh0dHAnO1xyXG5cclxuY2xhc3MgTmV3UGl6emEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaXplOiAnNjAnLFxyXG5cdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdFx0aW5ncmVkaWVudHM6IFtdLFxyXG5cdFx0XHR0YWdzOiBbXSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHsgc2l6ZSwgaW5ncmVkaWVudHMsIHRhZ3MgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuXHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19uYW1lLXZhbHVlJyk7XHJcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG5cdFx0Y29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGZkLmFwcGVuZCgnbmFtZScsIG5hbWUudmFsdWUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uLnZhbHVlKTtcclxuXHRcdGZkLmFwcGVuZCgnc2l6ZScsIHNpemUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdpbmdyZWRpZW50cycsIEpTT04uc3RyaW5naWZ5KGluZ3JlZGllbnRzKSk7XHJcblx0XHRmZC5hcHBlbmQoJ3RhZ3MnLCBKU09OLnN0cmluZ2lmeSh0YWdzKSk7XHJcblxyXG5cdFx0Y2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuXHRcdFx0ZmQuYXBwZW5kKCdpbWFnZScsIGJsb2IsICduZXdfaW1hZ2UucG5nJyk7XHJcblx0XHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5wb3N0KENSRUFURV9QSVpaQSwgZmQpLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7XHJcblx0XHRQcm9taXNlLmFsbChbQ1JFQVRFX0RBVEEuZ2V0SW5ncmVkaWVudHMoKSwgQ1JFQVRFX0RBVEEuZ2V0VGFncygpXSkudGhlbigoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX29wdGlvbnMnKTtcclxuXHRcdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG5cdFx0XHRsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fY2FudmFzJyk7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbnNTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX19idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gY3JlYXRlX19idXR0b24tY2FuY2VsJyB0eXBlPSdidXR0b24nPmNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gY3JlYXRlX19idXR0b24tc2VuZCcgdHlwZT0nc3VibWl0Jz5jcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbnMgPSB0b0h0bWwoYnV0dG9uc1N0cmluZyk7XHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kKHRoaXMucmVuZGVyRm9ybSgpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckluZ3JlZGllbnRzKENSRUFURV9EQVRBLmluZ3JlZGllbnRzKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUYWdzKENSRUFURV9EQVRBLnRhZ3MpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuXHRcdFx0RFJBVy5vbkluaXQoe1xyXG5cdFx0XHRcdGhvc3Q6IGNhbnZhcyxcclxuXHRcdFx0XHRpbmdyZWRpZW50czogQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVDbGljayhldikge1xyXG5cdFx0aWYgKGV2LnRhcmdldC5kYXRhc2V0LmZsYWcgPT09ICdpbmdyZWRpZW50Jykge1xyXG5cdFx0XHRjb25zdCBpbmdyZWRpZW50c0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZsYWddJyk7XHJcblx0XHRcdGNvbnN0IG5ld09wdGlvbnMgPSBbXTtcclxuXHRcdFx0Y29uc3QgbmV3SW5ncmVkaWVudHMgPSBbXTtcclxuXHRcdFx0aW5ncmVkaWVudHNJbnB1dHMuZm9yRWFjaChpbmdyZWRpZW50SW5wdXQgPT4ge1xyXG5cdFx0XHRcdGlmIChpbmdyZWRpZW50SW5wdXQuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0bmV3T3B0aW9ucy5wdXNoKGluZ3JlZGllbnRJbnB1dC52YWx1ZSk7XHJcblx0XHRcdFx0XHRuZXdJbmdyZWRpZW50cy5wdXNoKHBhcnNlSW50KGluZ3JlZGllbnRJbnB1dC5kYXRhc2V0LmlkKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcblx0XHRcdFx0b3B0aW9uczogbmV3T3B0aW9ucyxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcblx0XHRcdFx0aW5ncmVkaWVudHM6IG5ld0luZ3JlZGllbnRzLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcblx0XHRcdGNvbnN0IHsgc2l6ZSwgb3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVJlc2l6ZShldikge1xyXG5cdFx0aWYgKGV2LnRhcmdldC5kYXRhc2V0LmF0dHIgPT09ICdzaXplJykge1xyXG5cdFx0XHRjb25zdCBzaXplRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXR0cl0nKTtcclxuXHRcdFx0c2l6ZUZpZWxkcy5mb3JFYWNoKHNpemVGaWVsZCA9PiB7XHJcblx0XHRcdFx0aWYgKHNpemVGaWVsZC5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRjb25zdCBuZXdTaXplID0gc2l6ZUZpZWxkLnZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRcdFx0c2l6ZTogbmV3U2l6ZSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGxldCB7IHNpemUsIG9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRcdERSQVcuaGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXJGb3JtKCkge1xyXG5cdFx0Y29uc3QgZm9ybVN0cmluZyA9IGBcclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX25hbWUnPlBpenphIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyByZXF1aXJlZCBtaW49JzMnIG1heD0nMjQnIGNsYXNzPSdjcmVhdGVfX25hbWUtdmFsdWUnPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5EZXNjcmlwdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPSdjcmVhdGVfX2Rlc2NyaXB0aW9uJz48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX19zaXplLXRpdGxlJz5TaXplPC9zcGFuPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MzA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nMzAnIGRhdGEtYXR0cj0nc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tc21hbGxcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj40NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSc0NScgZGF0YS1hdHRyPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1tZWRpdW1cIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj42MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSc2MCcgZGF0YS1hdHRyPSdzaXplJyBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLWxhcmdlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPiAgICBcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtdGl0bGUnPkluZ3JlZGllbnRzPGgyPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IHRvSHRtbChmb3JtU3RyaW5nKTtcclxuXHRcdGNvbnN0IHNpemVGaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX3NpemUnKTtcclxuXHRcdHNpemVGaWVsZHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG5cdFx0cmV0dXJuIGZvcm07XHJcblx0fVxyXG5cclxuXHRyZW5kZXJJbmdyZWRpZW50cyhkYXRhKSB7XHJcblx0XHRjb25zdCBpbmdyZWRpZW50c1N0cmluZyA9IGAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuXHRcdGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaW5wdXQnIHR5cGU9J2NoZWNrYm94JyB2YWx1ZT0nJHtcclxuXHRkYXRhLm5hbWVcclxufScgZGF0YS1mbGFnPSdpbmdyZWRpZW50JyBkYXRhLWlkPScke2RhdGEuaWR9Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke0RPTUFJTn0vJHtcclxuXHRkYXRhLmltYWdlX3VybFxyXG59JyBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cycgdGl0bGU9JyR7ZGF0YS5kZXNjcmlwdGlvbn0nIGRhdGEtbmFtZT0naW5ncmVkaWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX190YWctdGl0bGUnPlRhZzxoMj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaW5ncmVkaWVudHNTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyVGFncyhkYXRhKSB7XHJcblx0XHRjb25zdCB0YWdzU3RyaW5nID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX190YWdzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcblx0XHRodG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3RhZ3MtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cdFx0cmV0dXJuIGh0bWw7XHJcblx0fSwgJycpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHRhZ3NTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzcz0nY3JlYXRlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lciBjcmVhdGVfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPSdjcmVhdGVfX3RpdGxlJz5DcmVhdGUgUGl6emE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX2NhbnZhcyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX29wdGlvbnMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgZnJhZ21lbnQsIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1BpenphO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5jbGFzcyBEcmF3IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuY3J1c3RfcGl6emEgPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhL3N0YXRpYy9pbWFnZXMvcGl6emEucG5nJztcclxuXHRcdHRoaXMuX2xvYWRJbWFnZSA9IHRoaXMuX2xvYWRJbWFnZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KGRhdGEpIHtcclxuXHRcdHRoaXMuaG9zdCA9IGRhdGEuaG9zdDtcclxuXHRcdHRoaXMuc2l6ZSA9ICc2MCc7XHJcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0dGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0dGhpcy5jYW52YXNXaWR0aCA9IDMyMDtcclxuXHRcdHRoaXMuY2FudmFzSGVpZ2h0ID0gMzIwO1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IGRhdGEuaW5ncmVkaWVudHM7XHJcblx0XHR0aGlzLmltYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5zcHJpdGVzID0ge307XHJcblx0XHR0aGlzLmxhc3RPcHRpb25zID0gW107XHJcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG5cdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQ7XHJcblx0XHR0aGlzLl9sb2FkUmVzb3VyY2VzKCkudGhlbihyZXNvdXJjZXMgPT4ge1xyXG5cdFx0XHRyZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiAodGhpcy5pbWFnZXNbcmVzb3VyY2UubmFtZV0gPSByZXNvdXJjZS5pbWFnZSkpO1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKHRoaXMuY2FudmFzKTtcclxuXHRcdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X3N0YXJ0U2V0KCkge1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG5cdFx0Ly8gbGV0IHBpenphID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1sncGl6emEnXSwgMTYwLCAxNjAsIDMwMCwgMzAwKTtcclxuXHRcdGxldCBwaXp6YSA9IG5ldyBTcHJpdGUoXHJcblx0XHRcdHRoaXMuaW1hZ2VzWydwaXp6YSddLFxyXG5cdFx0XHQxNjAsXHJcblx0XHRcdDE2MCxcclxuXHRcdFx0MzAwICogYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gIC8gNjAsXHJcblx0XHRcdDMwMCAqIGAke3BhcnNlSW50KHRoaXMuc2l6ZSl9YCAvIDYwXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zcHJpdGVzWydwaXp6YSddID0gcGl6emE7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sLnB1c2gocGl6emEpO1xyXG5cdFx0dGhpcy5fZHJhdygpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSkge1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPT0gdGhpcy5idWZmZXIubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWxlbS5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA8IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xyXG5cdFx0XHRsZXQgcHJlQnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMubGFzdE9wdGlvbnMgPSBbXTtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHR0aGlzLmxhc3RPcHRpb25zLnB1c2goZWwpO1xyXG5cdFx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZWxlbS5pZCA9PT0gZWwpIHtcclxuXHRcdFx0XHRcdFx0cHJlQnVmZmVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBlbGVtLmlkLFxyXG5cdFx0XHRcdFx0XHRcdHNwcml0ZXM6IGVsZW0uc3ByaXRlcyxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGVsZW0uc3ByaXRlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQocHJlQnVmZmVyKTtcclxuXHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmxhc3RPcHRpb25zLmluY2x1ZGVzKGVsKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmxhc3RPcHRpb25zLnB1c2goZWwpO1xyXG5cdFx0XHRcdFx0dGhpcy5fZ2VuZXJhdGVTcHJpdGUoZWwsIDEwKTtcclxuXHRcdFx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbC5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9nZW5lcmF0ZVNwcml0ZShuYW1lLCBjb3VudCkge1xyXG5cdFx0Y29uc3Qgc3ByaXRlcyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xyXG5cdFx0XHRsZXQgaW5ncmVkaWVudCA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbYCR7bmFtZX1gXSwgUkFORE9NKDcwLCAyNTApLCBSQU5ET00oNzAsIDI1MCkpO1xyXG5cdFx0XHRzcHJpdGVzLnB1c2goaW5ncmVkaWVudCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmJ1ZmZlci5wdXNoKHtcclxuXHRcdFx0aWQ6IG5hbWUsXHJcblx0XHRcdHNwcml0ZXM6IHNwcml0ZXMsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9kcmF3KCkge1xyXG5cdFx0dGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzV2lkdGgsIHRoaXMuY2FudmFzSGVpZ2h0KTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmRyYXcodGhpcy5jdHgpKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkUmVzb3VyY2VzKCkge1xyXG5cdFx0bGV0IHByb21pc2VzID0gW107XHJcblx0XHRwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJbWFnZSgncGl6emEnLCB0aGlzLmNydXN0X3BpenphKSk7XHJcblx0XHRwcm9taXNlcyA9IHByb21pc2VzLmNvbmNhdChcclxuXHRcdFx0dGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XHJcblx0XHRcdFx0bGV0IGluZ3JfdXJsID0gYCR7RE9NQUlOfS8ke2luZ3JlZGllbnQuaW1hZ2VfdXJsfWA7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2xvYWRJbWFnZShpbmdyZWRpZW50Lm5hbWUsIGluZ3JfdXJsKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdH1cclxuXHJcblx0X2xvYWRJbWFnZShuYW1lLCB1cmwpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRcdGltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcblx0XHRcdGltYWdlLnNyYyA9IHVybDtcclxuXHRcdFx0aW1hZ2Uud2lkdGggPSAyMDtcclxuXHRcdFx0aW1hZ2UuaGVpZ2h0ID0gMjA7XHJcblx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoeyBuYW1lLCBpbWFnZSB9KTtcclxuXHRcdFx0aW1hZ2Uub25lcnJvciA9IGUgPT4gcmVqZWN0KGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRFJBVyA9IG5ldyBEcmF3KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9kcmF3LmpzIiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcblx0Y29uc3RydWN0b3IoaW1hZ2UsIGN4LCBjeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0dGhpcy54ID0gMDtcclxuXHRcdHRoaXMueSA9IDA7XHJcblx0XHR0aGlzLmltYWdlID0gaW1hZ2U7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGggfHwgdGhpcy5pbWFnZS53aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG5cdFx0dGhpcy5jeCA9IGN4IHx8IDA7XHJcblx0XHR0aGlzLmN5ID0gY3kgfHwgMDtcclxuXHR9XHJcblx0Z2V0IGN4KCkge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy54ICsgdGhpcy53aWR0aCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY3koKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnkgKyB0aGlzLmhlaWdodCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRzZXQgY3godmFsdWUpIHtcclxuXHRcdHRoaXMueCA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLndpZHRoICogMC41KTtcclxuXHR9XHJcblxyXG5cdHNldCBjeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy55ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMuaGVpZ2h0ICogMC41KTtcclxuXHR9XHJcblxyXG5cdGRyYXcoY3R4KSB7XHJcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9zcHJpdGUuanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoR3VhcmQgPSBwYXJhbSA9PiB7XHJcblx0cmV0dXJuIEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKVxyXG5cdFx0PyBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCByb3V0ZTogcGFyYW0gfSlcclxuXHRcdDogUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogZmFsc2UsIHJlZGlyZWN0OiAnL2xvZ2luJyB9KTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguZ3VhcmQuanMiXSwic291cmNlUm9vdCI6IiJ9