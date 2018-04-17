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
	}

	_createClass(Component, [{
		key: 'updateState',
		value: function updateState(nextState) {
			this.state = Object.assign({}, this.state, nextState);
			return this._render();
		}
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
exports.authGuard = undefined;

var _auth = __webpack_require__(2);

var authGuard = exports.authGuard = function authGuard() {
	var result = _auth.AUTH_SERVICE.isAuthorized() ? Promise.resolve({ success: true }) : Promise.resolve({ success: false, redirect: '/login' });
	return result;
};

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

var _registration = __webpack_require__(18);

var _registration2 = _interopRequireDefault(_registration);

var _user = __webpack_require__(20);

var _user2 = _interopRequireDefault(_user);

var _create = __webpack_require__(21);

var _create2 = _interopRequireDefault(_create);

var _auth = __webpack_require__(8);

var _auth2 = __webpack_require__(2);

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
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.host.addEventListener('submit', _this.handleSubmit);

		_this.header = new _header2.default();
		_this.login = new _login2.default();
		_this.footer = new _footer2.default();
		return _this;
	}

	_createClass(Login, [{
		key: 'handleSubmit',
		value: function handleSubmit(ev) {
			ev.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			return [this.header.update(), this.login.update(), this.footer.update()];
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


			var login = '\n        <div class="container">\n            <form class="login__form">\n                <h2 class="login__title">Login</h2>\n                <label for="login-username">Username</label>\n                <input class="login__input" id="login-username" type="text" name="username" placeholder="Your name" value=' + (username ? username : '') + '>\n                <label for="login-password">Password</label>\n                <input class="login__input" id="login-password" type="password" name="password" placeholder="Your password" value=' + (password ? password : '') + '>\n                <button class="button login__button" type="submit">sign in</button>\n            </form>\n        </div>\n        ';

			var fragment = (0, _utils.toHtml)(login);

			if (message) {
				var errorMessage = this.message.update({ text: message });
				fragment.querySelector('.login__button').appendChild(errorMessage);
			}

			fragment.querySelector('.login__form').addEventListener('submit', this.handleSubmit);
			return fragment;
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

var _main = __webpack_require__(16);

var _main2 = _interopRequireDefault(_main);

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
		_this.main = new _main2.default();
		_this.footer = new _footer2.default();
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return [this.header.update(), this.main.update(), this.footer.update()];
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

var _list = __webpack_require__(17);

var _list2 = _interopRequireDefault(_list);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
	_inherits(Main, _Component);

	function Main(props) {
		_classCallCheck(this, Main);

		var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

		_this.pizzaList = new _list2.default();
		_this.host = document.createElement('main');
		_this.host.classList.add('main');
		return _this;
	}

	_createClass(Main, [{
		key: 'render',
		value: function render() {
			var container = document.createElement('div');
			container.className = 'container dashboard__container';

			var addPizzaString = '\n\t\t<a href=\'#/create\' class=\'button pizza__add\'>add pizza</a>\n\t\t';
			var addPizza = (0, _utils.toHtml)(addPizzaString);
			container.append(addPizza, this.pizzaList.update());
			return [container];
		}
	}]);

	return Main;
}(_component2.default);

exports.default = Main;

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

var _authHttp = __webpack_require__(6);

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
		_this.pizzas = [];
		return _this;
	}

	_createClass(PizzaList, [{
		key: 'getPizzaList',
		value: function getPizzaList(container) {
			var _this2 = this;

			_authHttp.AUTH_HTTP_SERVICE.get(_constants.PIZZA_LIST).then(function (res) {
				var result = res.results;
				result.forEach(function (el) {
					_this2.pizzas.push(el);
				});
				var pizzaList = _this2.createPizza(_this2.pizzas);
				container.appendChild(pizzaList);
				return container;
			});
		}
	}, {
		key: 'createPizza',
		value: function createPizza(pizzas) {
			var container = document.createElement('section');
			var list = function list(pizza) {
				return '\n            <article class="pizza">\n                <img class="pizza__img" src="' + _constants.DOMAIN + '/' + pizza.img_url + '" alt="' + pizza.name + '">\n                <h2 class="pizza__name">' + pizza.name + '</h2>\n                <time class="pizza__time" datetime="' + pizza.time_prepared + '">' + pizza.time_prepared + '</time>\n                <span class="pizza__queue-number">#1</span>\n                <div class="pizza__eta">\n                    <span>eta</span>\n                    <time datetime="04:00">4</time>\n                    <span>min</span>\n                </div>\n                <div class="pizza__price">\n                    <span>$</span>\n                    <span>' + pizza.price + '</span>\n                </div>\n            </article> \n        ';
			};

			pizzas.forEach(function (pizza) {
				container.innerHTML += list(pizza);
			});

			return container;
		}
	}, {
		key: 'render',
		value: function render() {
			var containerString = '\n        <div class=\'list-container\'>\n            \n        </div>\n        ';

			var fragment = (0, _utils.toHtml)(containerString);
			var container = fragment.querySelector('.list-container');

			this.getPizzaList(container);

			return fragment;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _footer = __webpack_require__(4);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _registration = __webpack_require__(19);

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
/* 19 */
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
/* 20 */
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

var _create = __webpack_require__(22);

var _utils = __webpack_require__(1);

var _constants = __webpack_require__(3);

var _draw = __webpack_require__(23);

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
		_this.renderData();
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
		key: 'renderData',
		value: function renderData() {
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CREATE_DATA = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authHttp = __webpack_require__(6);

var _constants = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PizzaDataService = function () {
	function PizzaDataService() {
		_classCallCheck(this, PizzaDataService);

		this.ingredients = [];
		this.tags = [];
	}

	_createClass(PizzaDataService, [{
		key: 'getIngredients',
		value: function getIngredients() {
			var _this = this;

			return _authHttp.AUTH_HTTP_SERVICE.get(_constants.INGREDIENTS_URL).then(function (data) {
				_this.ingredients = data.results;
				return data.results;
			});
		}
	}, {
		key: 'getTags',
		value: function getTags() {
			var _this2 = this;

			return _authHttp.AUTH_HTTP_SERVICE.get(_constants.TAG_URL).then(function (data) {
				_this2.tags = data.results;
				return data.results;
			});
		}
	}]);

	return PizzaDataService;
}();

var CREATE_DATA = exports.CREATE_DATA = new PizzaDataService();

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjlmZTM0YmYzNDkzNWRjMmMzMjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jcmVhdGUuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvc3ByaXRlLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJob3N0IiwibmV4dFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsIm5leHRQcm9wcyIsIm9uQmVmb3JlVW5tb3VudCIsImNoaWxkcmVuIiwicmVuZGVyIiwiaW5uZXJIVE1MIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidG9IdG1sIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHJpbmciLCJjb250ZW50IiwiUkFORE9NIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiQXV0aFNlcnZpY2UiLCJfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2NsYWltcyIsIkpTT04iLCJwYXJzZSIsImxvZ2luVXJsIiwic3RvcmVVcmwiLCJjcmVhdGVVcmwiLCJ0b2tlbklzTm90RXhwaXJlZCIsImNsZWFyU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0b2tlbiIsImNsYWltcyIsImV4cCIsIkRhdGUiLCJub3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJvayIsImFuc3dlciIsInBhcnNlSnd0Q2xhaW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGF0dXMiLCJyZWplY3QiLCJqd3RUb2tlbiIsImJhc2U2NFVybCIsInNwbGl0IiwiYmFzZTY0IiwicmVwbGFjZSIsIndpbmRvdyIsImF0b2IiLCJzZXRJdGVtIiwiQVVUSF9TRVJWSUNFIiwiRE9NQUlOIiwiSU5HUkVESUVOVFNfVVJMIiwiVEFHX1VSTCIsIlVTRVJfVVJMIiwiQ1JFQVRFX1BJWlpBIiwiUElaWkFfTElTVCIsIkZvb3RlciIsImNsYXNzTGlzdCIsImFkZCIsIkhlYWRlciIsImlzQXV0aG9yaXplZCIsImxvZ2luQnV0dG9uIiwibG9nb3V0QnV0dG9uIiwidXNlckJ1dHRvbiIsInJlZ2lzdHJhdGlvbkJ1dHRvbiIsImhlYWRlciIsImZyYWdtZW50IiwiQXV0aEh0dHBTZXJ2aWNlIiwidXJsIiwiRXJyb3IiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiQVVUSF9IVFRQX1NFUlZJQ0UiLCJBUFBfUk9VVEVSIiwicXVlcnlTZWxlY3RvciIsInJvdXRlcyIsImF1dGhHdWFyZCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJyZWRpcmVjdCIsIlJvdXRlciIsImFjdGl2ZVJvdXRlIiwiYWN0aXZlQ29tcG9uZW50IiwiaGFuZGxlVXJsQ2hhbmdlIiwiYmluZCIsImFwcGx5Um91dGUiLCJhZGRFdmVudExpc3RlbmVyIiwicGF0aCIsIm5leHRSb3V0ZSIsImZpbmQiLCJocmVmIiwicmVkaXJlY3RUbyIsImhhbmRsZVJlZGlyZWN0IiwibG9nb3V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvZ291dCIsIm9uRW50ZXIiLCJoYW5kbGVPbkVudGVyIiwibG9jYXRpb24iLCJoYXNoIiwicm91dGUiLCJjb21wb25lbnRJbnN0YW5jZSIsInVwZGF0ZVN0YXRlIiwidXBkYXRlIiwic2xpY2UiLCJMb2dpbiIsImhhbmRsZVN1Ym1pdCIsImxvZ2luIiwiZm9vdGVyIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsIkxvZ2luRm9ybSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibG9naW5Vc2VyIiwidGV4dCIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiYXBwZW5kQ2hpbGQiLCJFcnJvck1lc3NhZ2UiLCJBcHAiLCJtYWluIiwiTWFpbiIsInBpenphTGlzdCIsImNvbnRhaW5lciIsImNsYXNzTmFtZSIsImFkZFBpenphU3RyaW5nIiwiYWRkUGl6emEiLCJQaXp6YUxpc3QiLCJwaXp6YXMiLCJnZXQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsInB1c2giLCJlbCIsImNyZWF0ZVBpenphIiwibGlzdCIsInBpenphIiwiaW1nX3VybCIsInRpbWVfcHJlcGFyZWQiLCJwcmljZSIsImNvbnRhaW5lclN0cmluZyIsImdldFBpenphTGlzdCIsIlJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJzdG9yZXMiLCJnZXRTdG9yZXMiLCJzdG9yZUluZm8iLCJwYXNzd29yZF9yZXBlYXQiLCJlbWFpbCIsInN0b3JlX2lkIiwicGFyc2VJbnQiLCJzdG9yZSIsInNlbGVjdGVkSW5kZXgiLCJkYXRhc2V0IiwiaWQiLCJzdG9yZV9wYXNzd29yZCIsInJlZ2lzdGVyVXNlciIsInNlbGVjdCIsImhpZGRlbiIsIm9wdGlvbiIsImVsZW1lbnQiLCJmb3JtIiwiVXNlciIsImNyZWF0ZWQiLCJ2aXNpdGVkIiwiZ2V0VXNlckluZm8iLCJjcmVhdGVkX2F0IiwibGFzdF9sb2dpbiIsInVzZXIiLCJOZXdQaXp6YSIsInNpemUiLCJpbmdyZWRpZW50cyIsInRhZ3MiLCJoYW5kbGVDbGljayIsImhhbmRsZVJlc2l6ZSIsInJlbmRlckRhdGEiLCJjYW52YXMiLCJkZXNjcmlwdGlvbiIsImZkIiwiRm9ybURhdGEiLCJ0b0Jsb2IiLCJibG9iIiwicG9zdCIsImFsbCIsImdldEluZ3JlZGllbnRzIiwiZ2V0VGFncyIsImJ1dHRvbnNTdHJpbmciLCJidXR0b25zIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwicmVuZGVyVGFncyIsIm9uSW5pdCIsImZsYWciLCJpbmdyZWRpZW50c0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXdPcHRpb25zIiwibmV3SW5ncmVkaWVudHMiLCJpbmdyZWRpZW50SW5wdXQiLCJjaGVja2VkIiwiYXR0ciIsInNpemVGaWVsZHMiLCJzaXplRmllbGQiLCJuZXdTaXplIiwiZm9ybVN0cmluZyIsImluZ3JlZGllbnRzU3RyaW5nIiwicmVkdWNlIiwiaHRtbCIsImltYWdlX3VybCIsInRhZ3NTdHJpbmciLCJQaXp6YURhdGFTZXJ2aWNlIiwiQ1JFQVRFX0RBVEEiLCJEcmF3IiwiY3J1c3RfcGl6emEiLCJfbG9hZEltYWdlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaW1hZ2VzIiwic3ByaXRlcyIsImxhc3RPcHRpb25zIiwiYnVmZmVyIiwic3ByaXRlc1Bvb2wiLCJ3aWR0aCIsImhlaWdodCIsIl9sb2FkUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwicmVzb3VyY2UiLCJpbWFnZSIsIl9zdGFydFNldCIsIl9kcmF3IiwibGVuZ3RoIiwiZmlsdGVyZWRFbGVtIiwiZWxlbSIsImZpbHRlciIsIngiLCJ5IiwiY29uY2F0IiwicHJlQnVmZmVyIiwiaW5jbHVkZXMiLCJfZ2VuZXJhdGVTcHJpdGUiLCJjb3VudCIsImkiLCJpbmdyZWRpZW50IiwiY2xlYXJSZWN0Iiwic3ByaXRlIiwiZHJhdyIsInByb21pc2VzIiwibWFwIiwiaW5ncl91cmwiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJlIiwic3JjIiwiY3Jvc3NPcmlnaW4iLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsImRyYXdJbWFnZSIsInJv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QyxDQUFQO0FBQ0EsRztvQkFNTWxILEssRUFBTztBQUNiLFFBQUs4SCxDQUFMLEdBQVNsUCxLQUFLMlEsS0FBTCxDQUFXdkosUUFBUSxLQUFLa0gsTUFBTCxHQUFjLEdBQWpDLENBQVQ7QUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyOWZlMzRiZjM0OTM1ZGMyYzMyOCIsImNsYXNzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcclxuXHRcdHRoaXMuaG9zdCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG5leHRQcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuXHRcdHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuXHR9XHJcblx0dW5tb3VudCgpIHtcclxuXHRcdHRoaXMub25CZWZvcmVVbm1vdW50KCk7XHJcblx0fVxyXG5cdG9uQmVmb3JlVW5tb3VudCgpIHt9XHJcblx0b25CZWZvcmVVcGRhdGUobmV4dFByb3BzKSB7fVxyXG5cdGdldCBuYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cdF9yZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0aWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQoY2hpbGRyZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmhvc3Q7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvY29tcG9uZW50LmpzIiwiZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cmluZztcclxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5ET00gPSAobWluLCBtYXgpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGFpbXMnKSk7XHJcblx0XHR0aGlzLmxvZ2luVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9sb2dpbmA7XHJcblx0XHR0aGlzLnN0b3JlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvc3RvcmUvbGlzdGA7XHJcblx0XHR0aGlzLmNyZWF0ZVVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvY3JlYXRlYDtcclxuXHR9XHJcblxyXG5cdGdldCB0b2tlbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b2tlbjtcclxuXHR9XHJcblxyXG5cdHNldCB0b2tlbih0b2tlbikge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuXHR9XHJcblxyXG5cdGdldCBjbGFpbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2xhaW1zO1xyXG5cdH1cclxuXHJcblx0c2V0IGNsYWltcyhjbGFpbXMpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IGNsYWltcztcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGFpbXMnLCBKU09OLnN0cmluZ2lmeShjbGFpbXMpKTtcclxuXHR9XHJcblxyXG5cdGlzQXV0aG9yaXplZCgpIHtcclxuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHJldHVybiBmYWxzZTtcclxuXHRcdGlmICghdGhpcy50b2tlbklzTm90RXhwaXJlZCgpKSB7XHJcblx0XHRcdHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTdG9yYWdlKCkge1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gbnVsbDtcclxuXHRcdHRoaXMuX3Rva2VuID0gbnVsbDtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NsYWltcycpO1xyXG5cdH1cclxuXHJcblx0dG9rZW5Jc05vdEV4cGlyZWQoKSB7XHJcblx0XHRpZiAoIXRoaXMudG9rZW4pIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiB0aGlzLmNsYWltcy5leHAgKiAxMDAwID4gRGF0ZS5ub3coKTtcclxuXHR9XHJcblxyXG5cdHN0b3JlSW5mbygpIHtcclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLnN0b3JlVXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luVXNlcihkYXRhKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKCkuYXBwZW5kKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5sb2dpblVybCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzLm9rKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50b2tlbiA9IGFuc3dlci50b2tlbjtcclxuXHRcdFx0XHRcdHRoaXMuY2xhaW1zID0gdGhpcy5wYXJzZUp3dENsYWltcyhhbnN3ZXIudG9rZW4pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IFByb21pc2UucmVqZWN0KHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMuY3JlYXRlVXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdHBhcnNlSnd0Q2xhaW1zKGp3dFRva2VuKSB7XHJcblx0XHRpZiAoand0VG9rZW4pIHtcclxuXHRcdFx0bGV0IGJhc2U2NFVybCA9IGp3dFRva2VuLnNwbGl0KCcuJylbMV07XHJcblx0XHRcdGxldCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgnLScsICcrJykucmVwbGFjZSgnXycsICcvJyk7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfU0VSVklDRSA9IG5ldyBBdXRoU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5qcyIsImV4cG9ydCBjb25zdCBET01BSU4gPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhJztcclxuZXhwb3J0IGNvbnN0IElOR1JFRElFTlRTX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL2luZ3JlZGllbnQvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBUQUdfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdGFnL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVVNFUl9VUkwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL215X2luZm9gO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BJWlpBID0gYCR7RE9NQUlOfS9hcGkvdjEvcGl6emEvY3JlYXRlYDtcclxuZXhwb3J0IGNvbnN0IFBJWlpBX0xJU1QgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9saXN0YDtcclxuICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGFkZHJlc3M+S290dGFucywgS290dGFucyBTcnQuIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNTc3Nzg4ODdcIj50ZWwuIDU3Ny03ODgtODc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+UGl6emEgTWFuYWdlciAmY29weTtcclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDEtMDFcIj4yMDE4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvL1RPRE86IG5lZWQgZGVsZXRlIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJsb2dpbl9fYnV0dG9uLWxpbmtcIj5zaWduIGluPC9hPlxyXG5cdFx0Y29uc3QgaXNBdXRob3JpemVkID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluXCI+c2lnbiBpbjwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgbG9nb3V0QnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dvdXRcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1vdXRcIj5zaWduIG91dDwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgdXNlckJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvdXNlclwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluZm9cIj51c2VyIGluZm88L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvcmVnaXN0cmF0aW9uXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tdXBcIj5zaWduIHVwPC9hPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY3VycmVudC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNjbG9ja1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMi0wMyAxMjowMTo0OFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCIjL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2dvXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJhdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyBsb2dvdXRCdXR0b24gOiBsb2dpbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAke2lzQXV0aG9yaXplZCA/IHVzZXJCdXR0b24gOiByZWdpc3RyYXRpb25CdXR0b259IFxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChoZWFkZXIpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmNsYXNzIEF1dGhIdHRwU2VydmljZSB7XHJcblx0Z2V0KHVybCkge1xyXG5cdFx0aWYgKCFBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm9uLWF1dGhvcml6ZWQgcmVxdWVzdCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZldGNoKHVybCwge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cG9zdCh1cmwsIGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGF0Y2goKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9IVFRQX1NFUlZJQ0UgPSBuZXcgQXV0aEh0dHBTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vZnJhbWV3b3JrL3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVIgPSBuZXcgUm91dGVyKHsgaG9zdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSwgcm91dGVzIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW5kZXguanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoR3VhcmQgPSAoKSA9PiB7XHJcblx0Y29uc3QgcmVzdWx0ID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpXHJcblx0XHQ/IFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUgfSlcclxuXHRcdDogUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogZmFsc2UsIHJlZGlyZWN0OiAnL2xvZ2luJyB9KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgYXV0aEd1YXJkIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0Y29uc3QgeyByb3V0ZXMsIGhvc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0cm91dGVzLFxyXG5cdFx0XHRhY3RpdmVSb3V0ZTogbnVsbCxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBob3N0O1xyXG5cdFx0dGhpcy5oYW5kbGVVcmxDaGFuZ2UgPSB0aGlzLmhhbmRsZVVybENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5hcHBseVJvdXRlID0gdGhpcy5hcHBseVJvdXRlLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHBhdGgoKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVVcmxDaGFuZ2UodXJsKSB7XHJcblx0XHRjb25zdCB7IHJvdXRlcywgYWN0aXZlUm91dGUgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCBuZXh0Um91dGUgPSByb3V0ZXMuZmluZCgoeyBocmVmIH0pID0+IGhyZWYgPT09IHVybCk7XHJcblxyXG5cdFx0aWYgKG5leHRSb3V0ZSAmJiBuZXh0Um91dGUgIT09IGFjdGl2ZVJvdXRlKSB7XHJcblx0XHRcdGlmIChuZXh0Um91dGUucmVkaXJlY3RUbykge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhbmRsZVJlZGlyZWN0KG5leHRSb3V0ZS5yZWRpcmVjdFRvKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5sb2dvdXQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9nb3V0Jyk7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2dvdXQobmV4dFJvdXRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5vbkVudGVyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ29uRW50ZXInKTtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hcHBseVJvdXRlKG5leHRSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVMb2dvdXQobmV4dFJvdXRlKSB7XHJcblx0XHRuZXh0Um91dGUubG9nb3V0KCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVSZWRpcmVjdCh1cmwpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlT25FbnRlcihuZXh0Um91dGUpIHtcclxuXHRcdGF1dGhHdWFyZCgpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0cmVzLnN1Y2Nlc3MgPyBudWxsIDogdGhpcy5oYW5kbGVSZWRpcmVjdChyZXMucmVkaXJlY3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhcHBseVJvdXRlKHJvdXRlKSB7XHJcblx0XHRjb25zdCB7IENvbXBvbmVudCB9ID0gcm91dGU7XHJcblx0XHRjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IG5ldyBDb21wb25lbnQoKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZVN0YXRlKHtcclxuXHRcdFx0YWN0aXZlUm91dGU6IHJvdXRlLFxyXG5cdFx0XHRhY3RpdmVDb21wb25lbnQ6IGNvbXBvbmVudEluc3RhbmNlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGFjdGl2ZUNvbXBvbmVudCB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdHJldHVybiBhY3RpdmVDb21wb25lbnQudXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwiaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlcic7XHJcbmltcG9ydCBOZXdQaXp6YSBmcm9tICcuL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZSc7XHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vdXRpbHMvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnJyxcclxuXHRcdHJlZGlyZWN0VG86ICcvJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJy8nLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBMb2dpbixcclxuXHRcdGhyZWY6ICcvbG9naW4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBSZWdpc3RyYXRpb24sXHJcblx0XHRocmVmOiAnL3JlZ2lzdHJhdGlvbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IFVzZXIsXHJcblx0XHRocmVmOiAnL3VzZXInLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnL2xvZ291dCcsXHJcblx0XHRsb2dvdXQ6IEFVVEhfU0VSVklDRS5jbGVhclN0b3JhZ2UsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IE5ld1BpenphLFxyXG5cdFx0aHJlZjogJy9jcmVhdGUnLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vbG9naW4uZm9ybSc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxvZ2luID0gbmV3IExvZ2luRm9ybSgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCB0aGlzLmxvZ2luLnVwZGF0ZSgpLCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcclxuaW1wb3J0IHsgQVBQX1JPVVRFUiB9IGZyb20gJy4uLy4uL2luZGV4JztcclxuXHJcbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBudWxsLFxyXG5cdFx0XHRwYXNzd29yZDogbnVsbCxcclxuXHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luJyk7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLmxvZ2luVXNlcihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdFx0XHRcdEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RhdHVzID0+IHtcclxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gc3RhdHVzLmFuc3dlci5lcnJvcjtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHRleHQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBtZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiB2YWx1ZT0ke1xyXG5cdHVzZXJuYW1lID8gdXNlcm5hbWUgOiAnJ1xyXG59PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIHZhbHVlPSR7XHJcblx0cGFzc3dvcmQgPyBwYXNzd29yZCA6ICcnXHJcbn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChsb2dpbik7XHJcblxyXG5cdFx0aWYgKG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5tZXNzYWdlLnVwZGF0ZSh7IHRleHQ6IG1lc3NhZ2UgfSk7XHJcblx0XHRcdGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbl9fYnV0dG9uJykuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRXJyb3JNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZXJyb3JfX2NvbnRhaW5lcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fdGV4dCcpO1xyXG5cdFx0ZXJyb3IuaW5uZXJIVE1MID0gdGV4dDtcclxuXHRcdHJldHVybiBlcnJvcjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4nO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnYXBwJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMubWFpbiA9IG5ldyBNYWluKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIHRoaXMubWFpbi51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IFBpenphTGlzdCBmcm9tICcuLi9kYXNoYm9hcmQvbGlzdCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnBpenphTGlzdCA9IG5ldyBQaXp6YUxpc3QoKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyIGRhc2hib2FyZF9fY29udGFpbmVyJztcclxuXHJcblx0XHRjb25zdCBhZGRQaXp6YVN0cmluZyA9IGBcclxuXHRcdDxhIGhyZWY9JyMvY3JlYXRlJyBjbGFzcz0nYnV0dG9uIHBpenphX19hZGQnPmFkZCBwaXp6YTwvYT5cclxuXHRcdGA7XHJcblx0XHRjb25zdCBhZGRQaXp6YSA9IHRvSHRtbChhZGRQaXp6YVN0cmluZyk7XHJcblx0XHRjb250YWluZXIuYXBwZW5kKGFkZFBpenphLCB0aGlzLnBpenphTGlzdC51cGRhdGUoKSk7XHJcblx0XHRyZXR1cm4gW2NvbnRhaW5lcl07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvbWFpbi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLWh0dHAnO1xyXG5pbXBvcnQgeyBQSVpaQV9MSVNULCBET01BSU4gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgUGl6emFMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xyXG5cdFx0dGhpcy5waXp6YXMgPSBbXTtcclxuXHR9XHJcblxyXG5cdGdldFBpenphTGlzdChjb250YWluZXIpIHtcclxuXHRcdEFVVEhfSFRUUF9TRVJWSUNFLmdldChQSVpaQV9MSVNUKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHJlcy5yZXN1bHRzO1xyXG5cdFx0XHRyZXN1bHQuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0dGhpcy5waXp6YXMucHVzaChlbCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBwaXp6YUxpc3QgPSB0aGlzLmNyZWF0ZVBpenphKHRoaXMucGl6emFzKTtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphTGlzdCk7XHJcblx0XHRcdHJldHVybiBjb250YWluZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBpenphKHBpenphcykge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cdFx0Y29uc3QgbGlzdCA9IHBpenphID0+IHtcclxuXHRcdFx0cmV0dXJuIGBcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwaXp6YVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBpenphX19pbWdcIiBzcmM9XCIke0RPTUFJTn0vJHtwaXp6YS5pbWdfdXJsfVwiIGFsdD1cIiR7cGl6emEubmFtZX1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBpenphX19uYW1lXCI+JHtwaXp6YS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cInBpenphX190aW1lXCIgZGF0ZXRpbWU9XCIke3BpenphLnRpbWVfcHJlcGFyZWR9XCI+JHtcclxuXHRwaXp6YS50aW1lX3ByZXBhcmVkXHJcbn08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBpenphX19xdWV1ZS1udW1iZXJcIj4jMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMDQ6MDBcIj40PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtwaXp6YS5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPiBcclxuICAgICAgICBgO1xyXG5cdFx0fTtcclxuXHJcblx0XHRwaXp6YXMuZm9yRWFjaChwaXp6YSA9PiB7XHJcblx0XHRcdGNvbnRhaW5lci5pbm5lckhUTUwgKz0gbGlzdChwaXp6YSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gY29udGFpbmVyO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xpc3QtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XHJcblxyXG5cdFx0dGhpcy5nZXRQaXp6YUxpc3QoY29udGFpbmVyKTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBpenphTGlzdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xpc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tICcuL3JlZ2lzdHJhdGlvbi5mb3JtJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb24tY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5yZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uRm9ybSgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCB0aGlzLnJlZ2lzdHJhdGlvbi51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzdG9yZXM6IG51bGwsXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uJyk7XHJcblx0XHR0aGlzLmdldFN0b3JlcygpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3RvcmVzKCkge1xyXG5cdFx0QVVUSF9TRVJWSUNFLnN0b3JlSW5mbygpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0dGhpcy5zdGF0ZS5zdG9yZXMgPSByZXN1bHQ7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGV2LnRhcmdldC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkOiBldi50YXJnZXQucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZF9yZXBlYXQ6IGV2LnRhcmdldC5wYXNzd29yZF9yZXBlYXQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0c3RvcmVfaWQ6IHBhcnNlSW50KGV2LnRhcmdldC5zdG9yZS5vcHRpb25zW2V2LnRhcmdldC5zdG9yZS5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmlkKSxcclxuXHRcdFx0c3RvcmVfcGFzc3dvcmQ6IGV2LnRhcmdldC5zdG9yZV9wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLnJlZ2lzdGVyVXNlcihkYXRhKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicmVnaXN0cmF0aW9uX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJyZWdpc3RyYXRpb25fX3RpdGxlXCI+cmVnaXN0cmF0aW9uIGZvcm08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi11c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVbmlxdWUuIE1pbiBsZW5ndGggMiBjaGFycywgbWF4IC0gMjRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1yZS1wYXNzd29yZFwiPlJlLWVudGVyIHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZF9yZXBlYXRcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBtYXRjaCB3aXRoIHBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLWVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmVcIj5TdG9yZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGhpZGRlbiBpZD1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiIG5hbWU9XCJzdG9yZVwiPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiPlN0b3JlIHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwic3RvcmVfcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBzdG9yZSBwYXNzd29yZC4gTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIHJlZ2lzdHJhdGlvbl9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPnNpZ24gdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwocmVnaXN0cmF0aW9uKTtcclxuXHJcblx0XHRjb25zdCBzZWxlY3QgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb25fX3NlbGVjdCcpO1xyXG5cclxuXHRcdGlmIChzdG9yZXMpIHtcclxuXHRcdFx0c2VsZWN0LmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRzdG9yZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHRcdFx0XHRvcHRpb24udGV4dCA9IGVsZW1lbnQubmFtZTtcclxuXHRcdFx0XHRvcHRpb24uZGF0YXNldC5pZCA9IGVsZW1lbnQuaWQ7XHJcblx0XHRcdFx0c2VsZWN0LmFkZChvcHRpb24pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBmb3JtID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5mb3JtLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IFVTRVJfVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VybmFtZTogbnVsbCxcclxuXHRcdFx0ZW1haWw6IG51bGwsXHJcblx0XHRcdGNyZWF0ZWQ6IG51bGwsXHJcblx0XHRcdHZpc2l0ZWQ6IG51bGwsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgndXNlci1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0XHR0aGlzLmdldFVzZXJJbmZvKCk7XHJcblx0fVxyXG5cclxuXHRnZXRVc2VySW5mbygpIHtcclxuXHRcdEFVVEhfSFRUUF9TRVJWSUNFLmdldChVU0VSX1VSTCkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHtcclxuXHRcdFx0XHR1c2VybmFtZTogcmVzdWx0LnVzZXJuYW1lLFxyXG5cdFx0XHRcdGVtYWlsOiByZXN1bHQuZW1haWwsXHJcblx0XHRcdFx0Y3JlYXRlZDogcmVzdWx0LmNyZWF0ZWRfYXQsXHJcblx0XHRcdFx0dmlzaXRlZDogcmVzdWx0Lmxhc3RfbG9naW4sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgY3JlYXRlZCwgdmlzaXRlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IHVzZXIgPSBgXHJcbiAgICAgICAgPG1haW4gY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT4ke3VzZXJuYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHtlbWFpbH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7Y3JlYXRlZH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7dmlzaXRlZH08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwodXNlcik7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBmcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IHsgQ1JFQVRFX0RBVEEgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGUuZGF0YSc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgRE9NQUlOLCBDUkVBVEVfUElaWkEgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEUkFXIH0gZnJvbSAnLi9kcmF3JztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLWh0dHAnO1xyXG5cclxuY2xhc3MgTmV3UGl6emEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaXplOiAnNjAnLFxyXG5cdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdFx0aW5ncmVkaWVudHM6IFtdLFxyXG5cdFx0XHR0YWdzOiBbXSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMucmVuZGVyRGF0YSgpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgeyBzaXplLCBpbmdyZWRpZW50cywgdGFncyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5cdFx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX25hbWUtdmFsdWUnKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fZGVzY3JpcHRpb24nKTtcclxuXHJcblx0XHRjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZmQuYXBwZW5kKCduYW1lJywgbmFtZS52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24udmFsdWUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdzaXplJywgc2l6ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2luZ3JlZGllbnRzJywgSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHMpKTtcclxuXHRcdGZkLmFwcGVuZCgndGFncycsIEpTT04uc3RyaW5naWZ5KHRhZ3MpKTtcclxuXHJcblx0XHRjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG5cdFx0XHRmZC5hcHBlbmQoJ2ltYWdlJywgYmxvYiwgJ25ld19pbWFnZS5wbmcnKTtcclxuXHRcdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLnBvc3QoQ1JFQVRFX1BJWlpBLCBmZCkudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckRhdGEoKSB7XHJcblx0XHRQcm9taXNlLmFsbChbQ1JFQVRFX0RBVEEuZ2V0SW5ncmVkaWVudHMoKSwgQ1JFQVRFX0RBVEEuZ2V0VGFncygpXSkudGhlbigoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX29wdGlvbnMnKTtcclxuXHRcdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG5cdFx0XHRsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fY2FudmFzJyk7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbnNTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX19idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gY3JlYXRlX19idXR0b24tY2FuY2VsJyB0eXBlPSdidXR0b24nPmNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gY3JlYXRlX19idXR0b24tc2VuZCcgdHlwZT0nc3VibWl0Jz5jcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbnMgPSB0b0h0bWwoYnV0dG9uc1N0cmluZyk7XHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kKHRoaXMucmVuZGVyRm9ybSgpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckluZ3JlZGllbnRzKENSRUFURV9EQVRBLmluZ3JlZGllbnRzKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUYWdzKENSRUFURV9EQVRBLnRhZ3MpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuXHRcdFx0RFJBVy5vbkluaXQoe1xyXG5cdFx0XHRcdGhvc3Q6IGNhbnZhcyxcclxuXHRcdFx0XHRpbmdyZWRpZW50czogQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVDbGljayhldikge1xyXG5cdFx0aWYgKGV2LnRhcmdldC5kYXRhc2V0LmZsYWcgPT09ICdpbmdyZWRpZW50Jykge1xyXG5cdFx0XHRjb25zdCBpbmdyZWRpZW50c0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZsYWddJyk7XHJcblx0XHRcdGNvbnN0IG5ld09wdGlvbnMgPSBbXTtcclxuXHRcdFx0Y29uc3QgbmV3SW5ncmVkaWVudHMgPSBbXTtcclxuXHRcdFx0aW5ncmVkaWVudHNJbnB1dHMuZm9yRWFjaChpbmdyZWRpZW50SW5wdXQgPT4ge1xyXG5cdFx0XHRcdGlmIChpbmdyZWRpZW50SW5wdXQuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0bmV3T3B0aW9ucy5wdXNoKGluZ3JlZGllbnRJbnB1dC52YWx1ZSk7XHJcblx0XHRcdFx0XHRuZXdJbmdyZWRpZW50cy5wdXNoKHBhcnNlSW50KGluZ3JlZGllbnRJbnB1dC5kYXRhc2V0LmlkKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcblx0XHRcdFx0b3B0aW9uczogbmV3T3B0aW9ucyxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcblx0XHRcdFx0aW5ncmVkaWVudHM6IG5ld0luZ3JlZGllbnRzLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcblx0XHRcdGNvbnN0IHsgc2l6ZSwgb3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVJlc2l6ZShldikge1xyXG5cdFx0aWYgKGV2LnRhcmdldC5kYXRhc2V0LmF0dHIgPT09ICdzaXplJykge1xyXG5cdFx0XHRjb25zdCBzaXplRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXR0cl0nKTtcclxuXHRcdFx0c2l6ZUZpZWxkcy5mb3JFYWNoKHNpemVGaWVsZCA9PiB7XHJcblx0XHRcdFx0aWYgKHNpemVGaWVsZC5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRjb25zdCBuZXdTaXplID0gc2l6ZUZpZWxkLnZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRcdFx0c2l6ZTogbmV3U2l6ZSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGxldCB7IHNpemUsIG9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRcdERSQVcuaGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXJGb3JtKCkge1xyXG5cdFx0Y29uc3QgZm9ybVN0cmluZyA9IGBcclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX25hbWUnPlBpenphIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyByZXF1aXJlZCBtaW49JzMnIG1heD0nMjQnIGNsYXNzPSdjcmVhdGVfX25hbWUtdmFsdWUnPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5EZXNjcmlwdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPSdjcmVhdGVfX2Rlc2NyaXB0aW9uJz48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX19zaXplLXRpdGxlJz5TaXplPC9zcGFuPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MzA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nMzAnIGRhdGEtYXR0cj0nc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tc21hbGxcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj40NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSc0NScgZGF0YS1hdHRyPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1tZWRpdW1cIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj42MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSc2MCcgZGF0YS1hdHRyPSdzaXplJyBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLWxhcmdlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPiAgICBcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtdGl0bGUnPkluZ3JlZGllbnRzPGgyPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IHRvSHRtbChmb3JtU3RyaW5nKTtcclxuXHRcdGNvbnN0IHNpemVGaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX3NpemUnKTtcclxuXHRcdHNpemVGaWVsZHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG5cdFx0cmV0dXJuIGZvcm07XHJcblx0fVxyXG5cclxuXHRyZW5kZXJJbmdyZWRpZW50cyhkYXRhKSB7XHJcblx0XHRjb25zdCBpbmdyZWRpZW50c1N0cmluZyA9IGAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuXHRcdGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaW5wdXQnIHR5cGU9J2NoZWNrYm94JyB2YWx1ZT0nJHtcclxuXHRkYXRhLm5hbWVcclxufScgZGF0YS1mbGFnPSdpbmdyZWRpZW50JyBkYXRhLWlkPScke2RhdGEuaWR9Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke0RPTUFJTn0vJHtcclxuXHRkYXRhLmltYWdlX3VybFxyXG59JyBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cycgdGl0bGU9JyR7ZGF0YS5kZXNjcmlwdGlvbn0nIGRhdGEtbmFtZT0naW5ncmVkaWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX190YWctdGl0bGUnPlRhZzxoMj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaW5ncmVkaWVudHNTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyVGFncyhkYXRhKSB7XHJcblx0XHRjb25zdCB0YWdzU3RyaW5nID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX190YWdzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcblx0XHRodG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3RhZ3MtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cdFx0cmV0dXJuIGh0bWw7XHJcblx0fSwgJycpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHRhZ3NTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzcz0nY3JlYXRlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lciBjcmVhdGVfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPSdjcmVhdGVfX3RpdGxlJz5DcmVhdGUgUGl6emE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX2NhbnZhcyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX29wdGlvbnMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgZnJhZ21lbnQsIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1BpenphO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmpzIiwiaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IElOR1JFRElFTlRTX1VSTCwgVEFHX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFBpenphRGF0YVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0dGhpcy50YWdzID0gW107XHJcblx0fVxyXG5cclxuXHRnZXRJbmdyZWRpZW50cygpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoSU5HUkVESUVOVFNfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWdzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChUQUdfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnRhZ3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfREFUQSA9IG5ldyBQaXp6YURhdGFTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jcmVhdGUuZGF0YS5qcyIsImltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuY2xhc3MgRHJhdyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmNydXN0X3BpenphID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYS9zdGF0aWMvaW1hZ2VzL3BpenphLnBuZyc7XHJcblx0XHR0aGlzLl9sb2FkSW1hZ2UgPSB0aGlzLl9sb2FkSW1hZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdChkYXRhKSB7XHJcblx0XHR0aGlzLmhvc3QgPSBkYXRhLmhvc3Q7XHJcblx0XHR0aGlzLnNpemUgPSAnNjAnO1xyXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHRcdHRoaXMuY2FudmFzV2lkdGggPSAzMjA7XHJcblx0XHR0aGlzLmNhbnZhc0hlaWdodCA9IDMyMDtcclxuXHRcdHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLmluZ3JlZGllbnRzO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuc3ByaXRlcyA9IHt9O1xyXG5cdFx0dGhpcy5sYXN0T3B0aW9ucyA9IFtdO1xyXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXNXaWR0aDtcclxuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0O1xyXG5cdFx0dGhpcy5fbG9hZFJlc291cmNlcygpLnRoZW4ocmVzb3VyY2VzID0+IHtcclxuXHRcdFx0cmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4gKHRoaXMuaW1hZ2VzW3Jlc291cmNlLm5hbWVdID0gcmVzb3VyY2UuaW1hZ2UpKTtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZCh0aGlzLmNhbnZhcyk7XHJcblx0XHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9zdGFydFNldCgpIHtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuXHRcdC8vIGxldCBwaXp6YSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbJ3BpenphJ10sIDE2MCwgMTYwLCAzMDAsIDMwMCk7XHJcblx0XHRsZXQgcGl6emEgPSBuZXcgU3ByaXRlKFxyXG5cdFx0XHR0aGlzLmltYWdlc1sncGl6emEnXSxcclxuXHRcdFx0MTYwLFxyXG5cdFx0XHQxNjAsXHJcblx0XHRcdDMwMCAqIGAke3BhcnNlSW50KHRoaXMuc2l6ZSl9YCAvIDYwLFxyXG5cdFx0XHQzMDAgKiBgJHtwYXJzZUludCh0aGlzLnNpemUpfWAgLyA2MFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuc3ByaXRlc1sncGl6emEnXSA9IHBpenphO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbC5wdXNoKHBpenphKTtcclxuXHRcdHRoaXMuX2RyYXcoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpIHtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoID09IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPCB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcclxuXHRcdFx0bGV0IHByZUJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLmxhc3RPcHRpb25zID0gW107XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0dGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuXHRcdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVsZW0uaWQgPT09IGVsKSB7XHJcblx0XHRcdFx0XHRcdHByZUJ1ZmZlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRpZDogZWxlbS5pZCxcclxuXHRcdFx0XHRcdFx0XHRzcHJpdGVzOiBlbGVtLnNwcml0ZXMsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbGVtLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHByZUJ1ZmZlcik7XHJcblx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5sYXN0T3B0aW9ucy5pbmNsdWRlcyhlbCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuXHRcdFx0XHRcdHRoaXMuX2dlbmVyYXRlU3ByaXRlKGVsLCAxMCk7XHJcblx0XHRcdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWwuc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZWxlbS5zcHJpdGVzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfZ2VuZXJhdGVTcHJpdGUobmFtZSwgY291bnQpIHtcclxuXHRcdGNvbnN0IHNwcml0ZXMgPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuXHRcdFx0bGV0IGluZ3JlZGllbnQgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzW2Ake25hbWV9YF0sIFJBTkRPTSg3MCwgMjUwKSwgUkFORE9NKDcwLCAyNTApKTtcclxuXHRcdFx0c3ByaXRlcy5wdXNoKGluZ3JlZGllbnQpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5idWZmZXIucHVzaCh7XHJcblx0XHRcdGlkOiBuYW1lLFxyXG5cdFx0XHRzcHJpdGVzOiBzcHJpdGVzLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfZHJhdygpIHtcclxuXHRcdHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS5kcmF3KHRoaXMuY3R4KSk7XHJcblx0fVxyXG5cclxuXHRfbG9hZFJlc291cmNlcygpIHtcclxuXHRcdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cdFx0cHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkSW1hZ2UoJ3BpenphJywgdGhpcy5jcnVzdF9waXp6YSkpO1xyXG5cdFx0cHJvbWlzZXMgPSBwcm9taXNlcy5jb25jYXQoXHJcblx0XHRcdHRoaXMuaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmdyX3VybCA9IGAke0RPTUFJTn0vJHtpbmdyZWRpZW50LmltYWdlX3VybH1gO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9sb2FkSW1hZ2UoaW5ncmVkaWVudC5uYW1lLCBpbmdyX3VybCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkSW1hZ2UobmFtZSwgdXJsKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHsgbmFtZSwgaW1hZ2UgfSk7XHJcblx0XHRcdGltYWdlLm9uZXJyb3IgPSBlID0+IHJlamVjdChlKTtcclxuXHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xyXG5cdFx0XHRpbWFnZS53aWR0aCA9IDIwO1xyXG5cdFx0XHRpbWFnZS5oZWlnaHQgPSAyMDtcclxuXHRcdFx0aW1hZ2UuY3Jvc3NPcmlnaW4gPSAnJztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERSQVcgPSBuZXcgRHJhdygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvZHJhdy5qcyIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG5cdGNvbnN0cnVjdG9yKGltYWdlLCBjeCwgY3ksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdHRoaXMueCA9IDA7XHJcblx0XHR0aGlzLnkgPSAwO1xyXG5cdFx0dGhpcy5pbWFnZSA9IGltYWdlO1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoIHx8IHRoaXMuaW1hZ2Uud2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmltYWdlLmhlaWdodDtcclxuXHRcdHRoaXMuY3ggPSBjeCB8fCAwO1xyXG5cdFx0dGhpcy5jeSA9IGN5IHx8IDA7XHJcblx0fVxyXG5cdGdldCBjeCgpIHtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCArIHRoaXMud2lkdGggKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0Z2V0IGN5KCkge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0c2V0IGN4KHZhbHVlKSB7XHJcblx0XHR0aGlzLnggPSBNYXRoLnJvdW5kKHZhbHVlIC0gdGhpcy53aWR0aCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRzZXQgY3kodmFsdWUpIHtcclxuXHRcdHRoaXMueSA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLmhlaWdodCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRkcmF3KGN0eCkge1xyXG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvc3ByaXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==