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
		_this.getPizzaList();
		return _this;
	}

	_createClass(PizzaList, [{
		key: 'getPizzaList',
		value: function getPizzaList() {
			var _this2 = this;

			_authHttp.AUTH_HTTP_SERVICE.get(_constants.PIZZA_LIST).then(function (res) {
				var data = res.results;
				var pizzaList = _this2.createPizza(data);
				var container = document.querySelector('.list-container');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjJlZWY1ODkzMTVjYjJhMDU4NDYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvYXV0aC1odHRwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvY3JlYXRlLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zcHJpdGUuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsImhvc3QiLCJuZXh0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJfcmVuZGVyIiwibmV4dFByb3BzIiwib25CZWZvcmVVbm1vdW50IiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJpbm5lckhUTUwiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0b0h0bWwiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0cmluZyIsImNvbnRlbnQiLCJSQU5ET00iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJBdXRoU2VydmljZSIsIl90b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfY2xhaW1zIiwiSlNPTiIsInBhcnNlIiwibG9naW5VcmwiLCJzdG9yZVVybCIsImNyZWF0ZVVybCIsInRva2VuSXNOb3RFeHBpcmVkIiwiY2xlYXJTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInRva2VuIiwiY2xhaW1zIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm9rIiwiYW5zd2VyIiwicGFyc2VKd3RDbGFpbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YXR1cyIsInJlamVjdCIsImp3dFRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsInNldEl0ZW0iLCJBVVRIX1NFUlZJQ0UiLCJET01BSU4iLCJJTkdSRURJRU5UU19VUkwiLCJUQUdfVVJMIiwiVVNFUl9VUkwiLCJDUkVBVEVfUElaWkEiLCJQSVpaQV9MSVNUIiwiRm9vdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwiaXNBdXRob3JpemVkIiwibG9naW5CdXR0b24iLCJsb2dvdXRCdXR0b24iLCJ1c2VyQnV0dG9uIiwicmVnaXN0cmF0aW9uQnV0dG9uIiwiaGVhZGVyIiwiZnJhZ21lbnQiLCJBdXRoSHR0cFNlcnZpY2UiLCJ1cmwiLCJFcnJvciIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJBVVRIX0hUVFBfU0VSVklDRSIsIkFQUF9ST1VURVIiLCJxdWVyeVNlbGVjdG9yIiwicm91dGVzIiwiYXV0aEd1YXJkIiwicmVzdWx0Iiwic3VjY2VzcyIsInJlZGlyZWN0IiwiUm91dGVyIiwiYWN0aXZlUm91dGUiLCJhY3RpdmVDb21wb25lbnQiLCJoYW5kbGVVcmxDaGFuZ2UiLCJiaW5kIiwiYXBwbHlSb3V0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRoIiwibmV4dFJvdXRlIiwiZmluZCIsImhyZWYiLCJyZWRpcmVjdFRvIiwiaGFuZGxlUmVkaXJlY3QiLCJsb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9nb3V0Iiwib25FbnRlciIsImhhbmRsZU9uRW50ZXIiLCJsb2NhdGlvbiIsImhhc2giLCJyb3V0ZSIsImNvbXBvbmVudEluc3RhbmNlIiwidXBkYXRlU3RhdGUiLCJ1cGRhdGUiLCJzbGljZSIsIkxvZ2luIiwiaGFuZGxlU3VibWl0IiwibG9naW4iLCJmb290ZXIiLCJldiIsInByZXZlbnREZWZhdWx0IiwiTG9naW5Gb3JtIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJsb2dpblVzZXIiLCJ0ZXh0IiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJhcHBlbmRDaGlsZCIsIkVycm9yTWVzc2FnZSIsIkFwcCIsIm1haW4iLCJNYWluIiwicGl6emFMaXN0IiwiY29udGFpbmVyIiwiY2xhc3NOYW1lIiwiYWRkUGl6emFTdHJpbmciLCJhZGRQaXp6YSIsIlBpenphTGlzdCIsInBpenphcyIsImdldFBpenphTGlzdCIsImdldCIsInJlc3VsdHMiLCJjcmVhdGVQaXp6YSIsImxpc3QiLCJwaXp6YSIsImltZ191cmwiLCJ0aW1lX3ByZXBhcmVkIiwicHJpY2UiLCJmb3JFYWNoIiwiY29udGFpbmVyU3RyaW5nIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uRm9ybSIsInN0b3JlcyIsImdldFN0b3JlcyIsInN0b3JlSW5mbyIsInBhc3N3b3JkX3JlcGVhdCIsImVtYWlsIiwic3RvcmVfaWQiLCJwYXJzZUludCIsInN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJpZCIsInN0b3JlX3Bhc3N3b3JkIiwicmVnaXN0ZXJVc2VyIiwic2VsZWN0IiwiaGlkZGVuIiwib3B0aW9uIiwiZWxlbWVudCIsImZvcm0iLCJVc2VyIiwiY3JlYXRlZCIsInZpc2l0ZWQiLCJnZXRVc2VySW5mbyIsImNyZWF0ZWRfYXQiLCJsYXN0X2xvZ2luIiwidXNlciIsIk5ld1BpenphIiwic2l6ZSIsImluZ3JlZGllbnRzIiwidGFncyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUmVzaXplIiwicmVuZGVyRGF0YSIsImNhbnZhcyIsImRlc2NyaXB0aW9uIiwiZmQiLCJGb3JtRGF0YSIsInRvQmxvYiIsImJsb2IiLCJwb3N0IiwiYWxsIiwiZ2V0SW5ncmVkaWVudHMiLCJnZXRUYWdzIiwiYnV0dG9uc1N0cmluZyIsImJ1dHRvbnMiLCJyZW5kZXJGb3JtIiwicmVuZGVySW5ncmVkaWVudHMiLCJyZW5kZXJUYWdzIiwib25Jbml0IiwiZmxhZyIsImluZ3JlZGllbnRzSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5ld09wdGlvbnMiLCJuZXdJbmdyZWRpZW50cyIsImluZ3JlZGllbnRJbnB1dCIsImNoZWNrZWQiLCJwdXNoIiwiYXR0ciIsInNpemVGaWVsZHMiLCJzaXplRmllbGQiLCJuZXdTaXplIiwiZm9ybVN0cmluZyIsImluZ3JlZGllbnRzU3RyaW5nIiwicmVkdWNlIiwiaHRtbCIsImltYWdlX3VybCIsInRhZ3NTdHJpbmciLCJQaXp6YURhdGFTZXJ2aWNlIiwiQ1JFQVRFX0RBVEEiLCJEcmF3IiwiY3J1c3RfcGl6emEiLCJfbG9hZEltYWdlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaW1hZ2VzIiwic3ByaXRlcyIsImxhc3RPcHRpb25zIiwiYnVmZmVyIiwic3ByaXRlc1Bvb2wiLCJ3aWR0aCIsImhlaWdodCIsIl9sb2FkUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwicmVzb3VyY2UiLCJpbWFnZSIsIl9zdGFydFNldCIsIl9kcmF3IiwibGVuZ3RoIiwiZmlsdGVyZWRFbGVtIiwiZWxlbSIsImZpbHRlciIsIngiLCJ5IiwiY29uY2F0IiwicHJlQnVmZmVyIiwiZWwiLCJpbmNsdWRlcyIsIl9nZW5lcmF0ZVNwcml0ZSIsImNvdW50IiwiaSIsImluZ3JlZGllbnQiLCJjbGVhclJlY3QiLCJzcHJpdGUiLCJkcmF3IiwicHJvbWlzZXMiLCJtYXAiLCJpbmdyX3VybCIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImUiLCJzcmMiLCJjcm9zc09yaWdpbiIsIkRSQVciLCJTcHJpdGUiLCJjeCIsImN5IiwiZHJhd0ltYWdlIiwicm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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LEtBQTNCLEVBQWtDQyxNQUFsQyxFQUEwQztBQUFBOztBQUN6QyxPQUFLVyxDQUFMLEdBQVMsQ0FBVDtBQUNBLE9BQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0EsT0FBS1IsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0wsS0FBTCxHQUFhQSxTQUFTLEtBQUtLLEtBQUwsQ0FBV0wsS0FBakM7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLFVBQVUsS0FBS0ksS0FBTCxDQUFXSixNQUFuQztBQUNBLE9BQUttQyxFQUFMLEdBQVVBLE1BQU0sQ0FBaEI7QUFDQSxPQUFLQyxFQUFMLEdBQVVBLE1BQU0sQ0FBaEI7QUFDQTs7Ozt1QkFpQkk5QyxHLEVBQUs7QUFDVEEsT0FBSStDLFNBQUosQ0FBYyxLQUFLakMsS0FBbkIsRUFBMEIsS0FBS08sQ0FBL0IsRUFBa0MsS0FBS0MsQ0FBdkMsRUFBMEMsS0FBS2IsS0FBL0MsRUFBc0QsS0FBS0MsTUFBM0Q7QUFDQTs7O3NCQWxCUTtBQUNSLFVBQU9yTyxLQUFLMlEsS0FBTCxDQUFXLEtBQUszQixDQUFMLEdBQVMsS0FBS1osS0FBTCxHQUFhLEdBQWpDLENBQVA7QUFDQSxHO29CQU1NaEgsSyxFQUFPO0FBQ2IsUUFBSzRILENBQUwsR0FBU2hQLEtBQUsyUSxLQUFMLENBQVd2SixRQUFRLEtBQUtnSCxLQUFMLEdBQWEsR0FBaEMsQ0FBVDtBQUNBOzs7c0JBTlE7QUFDUixVQUFPcE8sS0FBSzJRLEtBQUwsQ0FBVyxLQUFLMUIsQ0FBTCxHQUFTLEtBQUtaLE1BQUwsR0FBYyxHQUFsQyxDQUFQO0FBQ0EsRztvQkFNTWpILEssRUFBTztBQUNiLFFBQUs2SCxDQUFMLEdBQVNqUCxLQUFLMlEsS0FBTCxDQUFXdkosUUFBUSxLQUFLaUgsTUFBTCxHQUFjLEdBQWpDLENBQVQ7QUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmMmVlZjU4OTMxNWNiMmEwNTg0NiIsImNsYXNzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcclxuXHRcdHRoaXMuaG9zdCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG5leHRQcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuXHRcdHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuXHR9XHJcblx0dW5tb3VudCgpIHtcclxuXHRcdHRoaXMub25CZWZvcmVVbm1vdW50KCk7XHJcblx0fVxyXG5cdG9uQmVmb3JlVW5tb3VudCgpIHt9XHJcblx0b25CZWZvcmVVcGRhdGUobmV4dFByb3BzKSB7fVxyXG5cdGdldCBuYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cdF9yZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0aWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQoY2hpbGRyZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmhvc3Q7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvY29tcG9uZW50LmpzIiwiZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cmluZztcclxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5ET00gPSAobWluLCBtYXgpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGFpbXMnKSk7XHJcblx0XHR0aGlzLmxvZ2luVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9sb2dpbmA7XHJcblx0XHR0aGlzLnN0b3JlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvc3RvcmUvbGlzdGA7XHJcblx0XHR0aGlzLmNyZWF0ZVVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvY3JlYXRlYDtcclxuXHR9XHJcblxyXG5cdGdldCB0b2tlbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b2tlbjtcclxuXHR9XHJcblxyXG5cdHNldCB0b2tlbih0b2tlbikge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuXHR9XHJcblxyXG5cdGdldCBjbGFpbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2xhaW1zO1xyXG5cdH1cclxuXHJcblx0c2V0IGNsYWltcyhjbGFpbXMpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IGNsYWltcztcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGFpbXMnLCBKU09OLnN0cmluZ2lmeShjbGFpbXMpKTtcclxuXHR9XHJcblxyXG5cdGlzQXV0aG9yaXplZCgpIHtcclxuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHJldHVybiBmYWxzZTtcclxuXHRcdGlmICghdGhpcy50b2tlbklzTm90RXhwaXJlZCgpKSB7XHJcblx0XHRcdHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTdG9yYWdlKCkge1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gbnVsbDtcclxuXHRcdHRoaXMuX3Rva2VuID0gbnVsbDtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NsYWltcycpO1xyXG5cdH1cclxuXHJcblx0dG9rZW5Jc05vdEV4cGlyZWQoKSB7XHJcblx0XHRpZiAoIXRoaXMudG9rZW4pIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiB0aGlzLmNsYWltcy5leHAgKiAxMDAwID4gRGF0ZS5ub3coKTtcclxuXHR9XHJcblxyXG5cdHN0b3JlSW5mbygpIHtcclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLnN0b3JlVXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luVXNlcihkYXRhKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKCkuYXBwZW5kKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5sb2dpblVybCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzLm9rKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50b2tlbiA9IGFuc3dlci50b2tlbjtcclxuXHRcdFx0XHRcdHRoaXMuY2xhaW1zID0gdGhpcy5wYXJzZUp3dENsYWltcyhhbnN3ZXIudG9rZW4pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IFByb21pc2UucmVqZWN0KHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMuY3JlYXRlVXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdHBhcnNlSnd0Q2xhaW1zKGp3dFRva2VuKSB7XHJcblx0XHRpZiAoand0VG9rZW4pIHtcclxuXHRcdFx0bGV0IGJhc2U2NFVybCA9IGp3dFRva2VuLnNwbGl0KCcuJylbMV07XHJcblx0XHRcdGxldCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgnLScsICcrJykucmVwbGFjZSgnXycsICcvJyk7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfU0VSVklDRSA9IG5ldyBBdXRoU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5qcyIsImV4cG9ydCBjb25zdCBET01BSU4gPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhJztcclxuZXhwb3J0IGNvbnN0IElOR1JFRElFTlRTX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL2luZ3JlZGllbnQvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBUQUdfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdGFnL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVVNFUl9VUkwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL215X2luZm9gO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BJWlpBID0gYCR7RE9NQUlOfS9hcGkvdjEvcGl6emEvY3JlYXRlYDtcclxuZXhwb3J0IGNvbnN0IFBJWlpBX0xJU1QgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9saXN0YDtcclxuICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGFkZHJlc3M+S290dGFucywgS290dGFucyBTcnQuIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNTc3Nzg4ODdcIj50ZWwuIDU3Ny03ODgtODc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+UGl6emEgTWFuYWdlciAmY29weTtcclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDEtMDFcIj4yMDE4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdC8vVE9ETzogbmVlZCBkZWxldGUgPGEgaHJlZj1cIiMvbG9naW5cIiBjbGFzcz1cImxvZ2luX19idXR0b24tbGlua1wiPnNpZ24gaW48L2E+XHJcblx0XHRjb25zdCBpc0F1dGhvcml6ZWQgPSBBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKCk7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5CdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0taW5cIj5zaWduIGluPC9hPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBsb2dvdXRCdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL2xvZ291dFwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLW91dFwiPnNpZ24gb3V0PC9hPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCB1c2VyQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy91c2VyXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0taW5mb1wiPnVzZXIgaW5mbzwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9yZWdpc3RyYXRpb25cIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS11cFwiPnNpZ24gdXA8L2E+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJjdXJyZW50LXRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2Nsb2NrXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE4LTAyLTAzIDEyOjAxOjQ4XCI+MTI6MDE6NDg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsb2dvXCIgaHJlZj1cIiMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2xvZ29cIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImF1dGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2lzQXV0aG9yaXplZCA/IGxvZ291dEJ1dHRvbiA6IGxvZ2luQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNBdXRob3JpemVkID8gdXNlckJ1dHRvbiA6IHJlZ2lzdHJhdGlvbkJ1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGhlYWRlcik7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5jbGFzcyBBdXRoSHR0cFNlcnZpY2Uge1xyXG5cdGdldCh1cmwpIHtcclxuXHRcdGlmICghQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vbi1hdXRob3JpemVkIHJlcXVlc3QnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtBVVRIX1NFUlZJQ0UudG9rZW59YCxcclxuXHRcdFx0XHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBvc3QodXJsLCBkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2godXJsLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBkYXRhLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBhdGNoKCkge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfSFRUUF9TRVJWSUNFID0gbmV3IEF1dGhIdHRwU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC1odHRwLmpzIiwiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL2ZyYW1ld29yay9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSID0gbmV3IFJvdXRlcih7IGhvc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JyksIHJvdXRlcyB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2luZGV4LmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEd1YXJkID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJlc3VsdCA9IEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKVxyXG5cdFx0PyBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiB0cnVlIH0pXHJcblx0XHQ6IFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IGZhbHNlLCByZWRpcmVjdDogJy9sb2dpbicgfSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguZ3VhcmQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4uL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5cclxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdGNvbnN0IHsgcm91dGVzLCBob3N0IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHJvdXRlcyxcclxuXHRcdFx0YWN0aXZlUm91dGU6IG51bGwsXHJcblx0XHRcdGFjdGl2ZUNvbXBvbmVudDogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gaG9zdDtcclxuXHRcdHRoaXMuaGFuZGxlVXJsQ2hhbmdlID0gdGhpcy5oYW5kbGVVcmxDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuYXBwbHlSb3V0ZSA9IHRoaXMuYXBwbHlSb3V0ZS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKSk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKTtcclxuXHR9XHJcblxyXG5cdGdldCBwYXRoKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlVXJsQ2hhbmdlKHVybCkge1xyXG5cdFx0Y29uc3QgeyByb3V0ZXMsIGFjdGl2ZVJvdXRlIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgbmV4dFJvdXRlID0gcm91dGVzLmZpbmQoKHsgaHJlZiB9KSA9PiBocmVmID09PSB1cmwpO1xyXG5cclxuXHRcdGlmIChuZXh0Um91dGUgJiYgbmV4dFJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xyXG5cdFx0XHRpZiAobmV4dFJvdXRlLnJlZGlyZWN0VG8pIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVSZWRpcmVjdChuZXh0Um91dGUucmVkaXJlY3RUbyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0Um91dGUubG9nb3V0KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlTG9nb3V0KG5leHRSb3V0ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0Um91dGUub25FbnRlcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdvbkVudGVyJyk7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVPbkVudGVyKG5leHRSb3V0ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYXBwbHlSb3V0ZShuZXh0Um91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aGFuZGxlTG9nb3V0KG5leHRSb3V0ZSkge1xyXG5cdFx0bmV4dFJvdXRlLmxvZ291dCgpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVkaXJlY3QodXJsKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcclxuXHR9XHJcblxyXG5cdGhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKSB7XHJcblx0XHRhdXRoR3VhcmQoKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHJlcy5zdWNjZXNzID8gbnVsbCA6IHRoaXMuaGFuZGxlUmVkaXJlY3QocmVzLnJlZGlyZWN0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXBwbHlSb3V0ZShyb3V0ZSkge1xyXG5cdFx0Y29uc3QgeyBDb21wb25lbnQgfSA9IHJvdXRlO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTdGF0ZSh7XHJcblx0XHRcdGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gYWN0aXZlQ29tcG9uZW50LnVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsImltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlcic7XHJcbmltcG9ydCBOZXdQaXp6YSBmcm9tICcuL2NvbXBvbmVudHMvY3JlYXRlJztcclxuaW1wb3J0IHsgYXV0aEd1YXJkIH0gZnJvbSAnLi91dGlscy9hdXRoLmd1YXJkJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi91dGlscy9hdXRoJztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IEFwcCxcclxuXHRcdGhyZWY6ICcnLFxyXG5cdFx0cmVkaXJlY3RUbzogJy8nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnLycsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IExvZ2luLFxyXG5cdFx0aHJlZjogJy9sb2dpbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IFJlZ2lzdHJhdGlvbixcclxuXHRcdGhyZWY6ICcvcmVnaXN0cmF0aW9uJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogVXNlcixcclxuXHRcdGhyZWY6ICcvdXNlcicsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IEFwcCxcclxuXHRcdGhyZWY6ICcvbG9nb3V0JyxcclxuXHRcdGxvZ291dDogQVVUSF9TRVJWSUNFLmNsZWFyU3RvcmFnZSxcclxuXHRcdG9uRW50ZXI6IGF1dGhHdWFyZCxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogTmV3UGl6emEsXHJcblx0XHRocmVmOiAnL2NyZWF0ZScsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3JvdXRlcy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luLmZvcm0nO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4tY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5sb2dpbiA9IG5ldyBMb2dpbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgdGhpcy5sb2dpbi51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vZXJyb3IubWVzc2FnZSc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgeyBBUFBfUk9VVEVSIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5cclxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRcdHBhc3N3b3JkOiBudWxsLFxyXG5cdFx0XHRtZXNzYWdlOiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4nKTtcclxuXHRcdHRoaXMubWVzc2FnZSA9IG5ldyBFcnJvck1lc3NhZ2UoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGhvc3QgPSBldi50YXJnZXQ7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdH07XHJcblx0XHRBVVRIX1NFUlZJQ0UubG9naW5Vc2VyKGRhdGEpLnRoZW4oXHJcblx0XHRcdHJlcyA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdGUgPSB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBudWxsLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblx0XHRcdFx0QVBQX1JPVVRFUi5oYW5kbGVSZWRpcmVjdCgnLycpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdGF0dXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRleHQgPSBzdGF0dXMuYW5zd2VyLmVycm9yO1xyXG5cdFx0XHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogdGV4dCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgbG9naW4gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImxvZ2luX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJsb2dpbl9fdGl0bGVcIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG9naW4tdXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsb2dpbl9faW5wdXRcIiBpZD1cImxvZ2luLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHZhbHVlPSR7XHJcblx0dXNlcm5hbWUgPyB1c2VybmFtZSA6ICcnXHJcbn0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG9naW4tcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsb2dpbl9faW5wdXRcIiBpZD1cImxvZ2luLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgdmFsdWU9JHtcclxuXHRwYXNzd29yZCA/IHBhc3N3b3JkIDogJydcclxufT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbG9naW5fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGxvZ2luKTtcclxuXHJcblx0XHRpZiAobWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UudXBkYXRlKHsgdGV4dDogbWVzc2FnZSB9KTtcclxuXHRcdFx0ZnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19idXR0b24nKS5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbl9fZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fY29udGFpbmVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHRleHQgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX190ZXh0Jyk7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cdFx0cmV0dXJuIGVycm9yO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9lcnJvci5tZXNzYWdlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL21haW4nO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnYXBwJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMubWFpbiA9IG5ldyBNYWluKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIHRoaXMubWFpbi51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgUGl6emFMaXN0IGZyb20gJy4vbGlzdCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnBpenphTGlzdCA9IG5ldyBQaXp6YUxpc3QoKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyIGRhc2hib2FyZF9fY29udGFpbmVyJztcclxuXHJcblx0XHRjb25zdCBhZGRQaXp6YVN0cmluZyA9IGBcclxuXHRcdDxhIGhyZWY9JyMvY3JlYXRlJyBjbGFzcz0nYnV0dG9uIHBpenphX19hZGQnPmFkZCBwaXp6YTwvYT5cclxuXHRcdGA7XHJcblx0XHRjb25zdCBhZGRQaXp6YSA9IHRvSHRtbChhZGRQaXp6YVN0cmluZyk7XHJcblx0XHRjb250YWluZXIuYXBwZW5kKGFkZFBpenphLCB0aGlzLnBpenphTGlzdC51cGRhdGUoKSk7XHJcblx0XHRyZXR1cm4gW2NvbnRhaW5lcl07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9tYWluLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IFBJWlpBX0xJU1QsIERPTUFJTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcblx0XHR0aGlzLnBpenphcyA9IFtdO1xyXG5cdFx0dGhpcy5nZXRQaXp6YUxpc3QoKTtcclxuXHR9XHJcblxyXG5cdGdldFBpenphTGlzdCgpIHtcclxuXHRcdEFVVEhfSFRUUF9TRVJWSUNFLmdldChQSVpaQV9MSVNUKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSByZXMucmVzdWx0cztcclxuXHRcdFx0Y29uc3QgcGl6emFMaXN0ID0gdGhpcy5jcmVhdGVQaXp6YShkYXRhKTtcclxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaXp6YUxpc3QpO1xyXG5cdFx0XHRyZXR1cm4gY29udGFpbmVyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQaXp6YShwaXp6YXMpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuXHRcdGNvbnN0IGxpc3QgPSBwaXp6YSA9PiB7XHJcblx0XHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGl6emFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwaXp6YV9faW1nXCIgc3JjPVwiJHtET01BSU59LyR7cGl6emEuaW1nX3VybH1cIiBhbHQ9XCIke3BpenphLm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwaXp6YV9fbmFtZVwiPiR7cGl6emEubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHRpbWUgY2xhc3M9XCJwaXp6YV9fdGltZVwiIGRhdGV0aW1lPVwiJHtwaXp6YS50aW1lX3ByZXBhcmVkfVwiPiR7XHJcblx0cGl6emEudGltZV9wcmVwYXJlZFxyXG59PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaXp6YV9fcXVldWUtbnVtYmVyXCI+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2V0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmV0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjA0OjAwXCI+NDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cGl6emEucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXHJcbiAgICAgICAgYDtcclxuXHRcdH07XHJcblxyXG5cdFx0cGl6emFzLmZvckVhY2gocGl6emEgPT4ge1xyXG5cdFx0XHRjb250YWluZXIuaW5uZXJIVE1MICs9IGxpc3QocGl6emEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdsaXN0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBpenphTGlzdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbGlzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24uZm9ybSc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMucmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbkZvcm0oKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgdGhpcy5yZWdpc3RyYXRpb24udXBkYXRlKCksIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzdG9yZXM6IG51bGwsXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uJyk7XHJcblx0XHR0aGlzLmdldFN0b3JlcygpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3RvcmVzKCkge1xyXG5cdFx0QVVUSF9TRVJWSUNFLnN0b3JlSW5mbygpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0dGhpcy5zdGF0ZS5zdG9yZXMgPSByZXN1bHQ7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGV2LnRhcmdldC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkOiBldi50YXJnZXQucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZF9yZXBlYXQ6IGV2LnRhcmdldC5wYXNzd29yZF9yZXBlYXQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0c3RvcmVfaWQ6IHBhcnNlSW50KGV2LnRhcmdldC5zdG9yZS5vcHRpb25zW2V2LnRhcmdldC5zdG9yZS5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmlkKSxcclxuXHRcdFx0c3RvcmVfcGFzc3dvcmQ6IGV2LnRhcmdldC5zdG9yZV9wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLnJlZ2lzdGVyVXNlcihkYXRhKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicmVnaXN0cmF0aW9uX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJyZWdpc3RyYXRpb25fX3RpdGxlXCI+cmVnaXN0cmF0aW9uIGZvcm08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi11c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVbmlxdWUuIE1pbiBsZW5ndGggMiBjaGFycywgbWF4IC0gMjRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1yZS1wYXNzd29yZFwiPlJlLWVudGVyIHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZF9yZXBlYXRcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBtYXRjaCB3aXRoIHBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLWVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmVcIj5TdG9yZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGhpZGRlbiBpZD1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiIG5hbWU9XCJzdG9yZVwiPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiPlN0b3JlIHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwic3RvcmVfcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBzdG9yZSBwYXNzd29yZC4gTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIHJlZ2lzdHJhdGlvbl9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPnNpZ24gdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwocmVnaXN0cmF0aW9uKTtcclxuXHJcblx0XHRjb25zdCBzZWxlY3QgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb25fX3NlbGVjdCcpO1xyXG5cclxuXHRcdGlmIChzdG9yZXMpIHtcclxuXHRcdFx0c2VsZWN0LmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRzdG9yZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHRcdFx0XHRvcHRpb24udGV4dCA9IGVsZW1lbnQubmFtZTtcclxuXHRcdFx0XHRvcHRpb24uZGF0YXNldC5pZCA9IGVsZW1lbnQuaWQ7XHJcblx0XHRcdFx0c2VsZWN0LmFkZChvcHRpb24pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBmb3JtID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoLWh0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX1VSTCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRcdGVtYWlsOiBudWxsLFxyXG5cdFx0XHRjcmVhdGVkOiBudWxsLFxyXG5cdFx0XHR2aXNpdGVkOiBudWxsLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3VzZXItY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdFx0dGhpcy5nZXRVc2VySW5mbygpO1xyXG5cdH1cclxuXHJcblx0Z2V0VXNlckluZm8oKSB7XHJcblx0XHRBVVRIX0hUVFBfU0VSVklDRS5nZXQoVVNFUl9VUkwpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0dGhpcy51cGRhdGVTdGF0ZSh7XHJcblx0XHRcdFx0dXNlcm5hbWU6IHJlc3VsdC51c2VybmFtZSxcclxuXHRcdFx0XHRlbWFpbDogcmVzdWx0LmVtYWlsLFxyXG5cdFx0XHRcdGNyZWF0ZWQ6IHJlc3VsdC5jcmVhdGVkX2F0LFxyXG5cdFx0XHRcdHZpc2l0ZWQ6IHJlc3VsdC5sYXN0X2xvZ2luLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGNyZWF0ZWQsIHZpc2l0ZWQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCB1c2VyID0gYFxyXG4gICAgICAgIDxtYWluIGNsYXNzPVwidXNlclwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHt1c2VybmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7ZW1haWx9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4ke2NyZWF0ZWR9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4ke3Zpc2l0ZWR9PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHVzZXIpO1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgZnJhZ21lbnQsIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XHJcbmltcG9ydCB7IENSRUFURV9EQVRBIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlLmRhdGEnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IERPTUFJTiwgQ1JFQVRFX1BJWlpBIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRFJBVyB9IGZyb20gJy4vZHJhdyc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC1odHRwJztcclxuXHJcbmNsYXNzIE5ld1BpenphIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c2l6ZTogJzYwJyxcclxuXHRcdFx0b3B0aW9uczogW10sXHJcblx0XHRcdGluZ3JlZGllbnRzOiBbXSxcclxuXHRcdFx0dGFnczogW10sXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnJlbmRlckRhdGEoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHsgc2l6ZSwgaW5ncmVkaWVudHMsIHRhZ3MgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuXHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19uYW1lLXZhbHVlJyk7XHJcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG5cdFx0Y29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGZkLmFwcGVuZCgnbmFtZScsIG5hbWUudmFsdWUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uLnZhbHVlKTtcclxuXHRcdGZkLmFwcGVuZCgnc2l6ZScsIHNpemUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdpbmdyZWRpZW50cycsIEpTT04uc3RyaW5naWZ5KGluZ3JlZGllbnRzKSk7XHJcblx0XHRmZC5hcHBlbmQoJ3RhZ3MnLCBKU09OLnN0cmluZ2lmeSh0YWdzKSk7XHJcblxyXG5cdFx0Y2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuXHRcdFx0ZmQuYXBwZW5kKCdpbWFnZScsIGJsb2IsICduZXdfaW1hZ2UucG5nJyk7XHJcblx0XHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5wb3N0KENSRUFURV9QSVpaQSwgZmQpLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJEYXRhKCkge1xyXG5cdFx0UHJvbWlzZS5hbGwoW0NSRUFURV9EQVRBLmdldEluZ3JlZGllbnRzKCksIENSRUFURV9EQVRBLmdldFRhZ3MoKV0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19vcHRpb25zJyk7XHJcblx0XHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuXHRcdFx0bGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX2NhbnZhcycpO1xyXG5cdFx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cdFx0XHRjb25zdCBidXR0b25zU3RyaW5nID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9fYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIGNyZWF0ZV9fYnV0dG9uLWNhbmNlbCcgdHlwZT0nYnV0dG9uJz5jYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIGNyZWF0ZV9fYnV0dG9uLXNlbmQnIHR5cGU9J3N1Ym1pdCc+Y3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cdFx0XHRjb25zdCBidXR0b25zID0gdG9IdG1sKGJ1dHRvbnNTdHJpbmcpO1xyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cdFx0XHRmb3JtLmFwcGVuZCh0aGlzLnJlbmRlckZvcm0oKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJJbmdyZWRpZW50cyhDUkVBVEVfREFUQS5pbmdyZWRpZW50cykpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyVGFncyhDUkVBVEVfREFUQS50YWdzKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XHJcblx0XHRcdERSQVcub25Jbml0KHtcclxuXHRcdFx0XHRob3N0OiBjYW52YXMsXHJcblx0XHRcdFx0aW5ncmVkaWVudHM6IENSRUFURV9EQVRBLmluZ3JlZGllbnRzLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQ2xpY2soZXYpIHtcclxuXHRcdGlmIChldi50YXJnZXQuZGF0YXNldC5mbGFnID09PSAnaW5ncmVkaWVudCcpIHtcclxuXHRcdFx0Y29uc3QgaW5ncmVkaWVudHNJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mbGFnXScpO1xyXG5cdFx0XHRjb25zdCBuZXdPcHRpb25zID0gW107XHJcblx0XHRcdGNvbnN0IG5ld0luZ3JlZGllbnRzID0gW107XHJcblx0XHRcdGluZ3JlZGllbnRzSW5wdXRzLmZvckVhY2goaW5ncmVkaWVudElucHV0ID0+IHtcclxuXHRcdFx0XHRpZiAoaW5ncmVkaWVudElucHV0LmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdG5ld09wdGlvbnMucHVzaChpbmdyZWRpZW50SW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdFx0bmV3SW5ncmVkaWVudHMucHVzaChwYXJzZUludChpbmdyZWRpZW50SW5wdXQuZGF0YXNldC5pZCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xyXG5cdFx0XHRcdG9wdGlvbnM6IG5ld09wdGlvbnMsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xyXG5cdFx0XHRcdGluZ3JlZGllbnRzOiBuZXdJbmdyZWRpZW50cyxcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG5cdFx0XHRjb25zdCB7IHNpemUsIG9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRcdERSQVcuaGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVSZXNpemUoZXYpIHtcclxuXHRcdGlmIChldi50YXJnZXQuZGF0YXNldC5hdHRyID09PSAnc2l6ZScpIHtcclxuXHRcdFx0Y29uc3Qgc2l6ZUZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dHJdJyk7XHJcblx0XHRcdHNpemVGaWVsZHMuZm9yRWFjaChzaXplRmllbGQgPT4ge1xyXG5cdFx0XHRcdGlmIChzaXplRmllbGQuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3U2l6ZSA9IHNpemVGaWVsZC52YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcblx0XHRcdFx0XHRcdHNpemU6IG5ld1NpemUsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRsZXQgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0XHREUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyRm9ybSgpIHtcclxuXHRcdGNvbnN0IGZvcm1TdHJpbmcgPSBgXHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX19uYW1lJz5QaXp6YSBOYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgcmVxdWlyZWQgbWluPSczJyBtYXg9JzI0JyBjbGFzcz0nY3JlYXRlX19uYW1lLXZhbHVlJz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4+RGVzY3JpcHRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz0nY3JlYXRlX19kZXNjcmlwdGlvbic+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fc2l6ZS10aXRsZSc+U2l6ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjMwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzMwJyBkYXRhLWF0dHI9J3NpemUnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLXNtYWxsXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NDU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nNDUnIGRhdGEtYXR0cj0nc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbWVkaXVtXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nNjAnIGRhdGEtYXR0cj0nc2l6ZScgY2hlY2tlZD5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1sYXJnZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD4gICAgXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLXRpdGxlJz5JbmdyZWRpZW50czxoMj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSB0b0h0bWwoZm9ybVN0cmluZyk7XHJcblx0XHRjb25zdCBzaXplRmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19zaXplJyk7XHJcblx0XHRzaXplRmllbGRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuXHRcdHJldHVybiBmb3JtO1xyXG5cdH1cclxuXHJcblx0cmVuZGVySW5ncmVkaWVudHMoZGF0YSkge1xyXG5cdFx0Y29uc3QgaW5ncmVkaWVudHNTdHJpbmcgPSBgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcblx0XHRodG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLWlucHV0JyB0eXBlPSdjaGVja2JveCcgdmFsdWU9JyR7XHJcblx0ZGF0YS5uYW1lXHJcbn0nIGRhdGEtZmxhZz0naW5ncmVkaWVudCcgZGF0YS1pZD0nJHtkYXRhLmlkfSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtET01BSU59LyR7XHJcblx0ZGF0YS5pbWFnZV91cmxcclxufScgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnIHRpdGxlPScke2RhdGEuZGVzY3JpcHRpb259JyBkYXRhLW5hbWU9J2luZ3JlZGllbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cdFx0cmV0dXJuIGh0bWw7XHJcblx0fSwgJycpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9J2NyZWF0ZV9fdGFnLXRpdGxlJz5UYWc8aDI+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGluZ3JlZGllbnRzU3RyaW5nKTtcclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcblxyXG5cdHJlbmRlclRhZ3MoZGF0YSkge1xyXG5cdFx0Y29uc3QgdGFnc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9fdGFncyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG5cdFx0aHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX190YWdzLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH0sICcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh0YWdzU3RyaW5nKTtcclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuICAgICAgICAgICAgPG1haW4gY2xhc3M9J2NyZWF0ZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXIgY3JlYXRlX19jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz0nY3JlYXRlX190aXRsZSc+Q3JlYXRlIFBpenphPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nY3JlYXRlX19jYW52YXMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nY3JlYXRlX19vcHRpb25zJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQaXp6YTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlLmpzIiwiaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IElOR1JFRElFTlRTX1VSTCwgVEFHX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFBpenphRGF0YVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0dGhpcy50YWdzID0gW107XHJcblx0fVxyXG5cclxuXHRnZXRJbmdyZWRpZW50cygpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoSU5HUkVESUVOVFNfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWdzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChUQUdfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnRhZ3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfREFUQSA9IG5ldyBQaXp6YURhdGFTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jcmVhdGUuZGF0YS5qcyIsImltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuY2xhc3MgRHJhdyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmNydXN0X3BpenphID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYS9zdGF0aWMvaW1hZ2VzL3BpenphLnBuZyc7XHJcblx0XHR0aGlzLl9sb2FkSW1hZ2UgPSB0aGlzLl9sb2FkSW1hZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdChkYXRhKSB7XHJcblx0XHR0aGlzLmhvc3QgPSBkYXRhLmhvc3Q7XHJcblx0XHR0aGlzLnNpemUgPSAnNjAnO1xyXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHRcdHRoaXMuY2FudmFzV2lkdGggPSAzMjA7XHJcblx0XHR0aGlzLmNhbnZhc0hlaWdodCA9IDMyMDtcclxuXHRcdHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLmluZ3JlZGllbnRzO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuc3ByaXRlcyA9IHt9O1xyXG5cdFx0dGhpcy5sYXN0T3B0aW9ucyA9IFtdO1xyXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXNXaWR0aDtcclxuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0O1xyXG5cdFx0dGhpcy5fbG9hZFJlc291cmNlcygpLnRoZW4ocmVzb3VyY2VzID0+IHtcclxuXHRcdFx0cmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4gKHRoaXMuaW1hZ2VzW3Jlc291cmNlLm5hbWVdID0gcmVzb3VyY2UuaW1hZ2UpKTtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZCh0aGlzLmNhbnZhcyk7XHJcblx0XHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9zdGFydFNldCgpIHtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuXHRcdC8vIGxldCBwaXp6YSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbJ3BpenphJ10sIDE2MCwgMTYwLCAzMDAsIDMwMCk7XHJcblx0XHRsZXQgcGl6emEgPSBuZXcgU3ByaXRlKFxyXG5cdFx0XHR0aGlzLmltYWdlc1sncGl6emEnXSxcclxuXHRcdFx0MTYwLFxyXG5cdFx0XHQxNjAsXHJcblx0XHRcdDMwMCAqIGAke3BhcnNlSW50KHRoaXMuc2l6ZSl9YCAvIDYwLFxyXG5cdFx0XHQzMDAgKiBgJHtwYXJzZUludCh0aGlzLnNpemUpfWAgLyA2MFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuc3ByaXRlc1sncGl6emEnXSA9IHBpenphO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbC5wdXNoKHBpenphKTtcclxuXHRcdHRoaXMuX2RyYXcoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpIHtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoID09IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPCB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcclxuXHRcdFx0bGV0IHByZUJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLmxhc3RPcHRpb25zID0gW107XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0dGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuXHRcdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVsZW0uaWQgPT09IGVsKSB7XHJcblx0XHRcdFx0XHRcdHByZUJ1ZmZlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRpZDogZWxlbS5pZCxcclxuXHRcdFx0XHRcdFx0XHRzcHJpdGVzOiBlbGVtLnNwcml0ZXMsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbGVtLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHByZUJ1ZmZlcik7XHJcblx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5sYXN0T3B0aW9ucy5pbmNsdWRlcyhlbCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuXHRcdFx0XHRcdHRoaXMuX2dlbmVyYXRlU3ByaXRlKGVsLCAxMCk7XHJcblx0XHRcdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWwuc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZWxlbS5zcHJpdGVzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfZ2VuZXJhdGVTcHJpdGUobmFtZSwgY291bnQpIHtcclxuXHRcdGNvbnN0IHNwcml0ZXMgPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuXHRcdFx0bGV0IGluZ3JlZGllbnQgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzW2Ake25hbWV9YF0sIFJBTkRPTSg3MCwgMjUwKSwgUkFORE9NKDcwLCAyNTApKTtcclxuXHRcdFx0c3ByaXRlcy5wdXNoKGluZ3JlZGllbnQpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5idWZmZXIucHVzaCh7XHJcblx0XHRcdGlkOiBuYW1lLFxyXG5cdFx0XHRzcHJpdGVzOiBzcHJpdGVzLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfZHJhdygpIHtcclxuXHRcdHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS5kcmF3KHRoaXMuY3R4KSk7XHJcblx0fVxyXG5cclxuXHRfbG9hZFJlc291cmNlcygpIHtcclxuXHRcdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cdFx0cHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkSW1hZ2UoJ3BpenphJywgdGhpcy5jcnVzdF9waXp6YSkpO1xyXG5cdFx0cHJvbWlzZXMgPSBwcm9taXNlcy5jb25jYXQoXHJcblx0XHRcdHRoaXMuaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmdyX3VybCA9IGAke0RPTUFJTn0vJHtpbmdyZWRpZW50LmltYWdlX3VybH1gO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9sb2FkSW1hZ2UoaW5ncmVkaWVudC5uYW1lLCBpbmdyX3VybCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkSW1hZ2UobmFtZSwgdXJsKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHsgbmFtZSwgaW1hZ2UgfSk7XHJcblx0XHRcdGltYWdlLm9uZXJyb3IgPSBlID0+IHJlamVjdChlKTtcclxuXHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xyXG5cdFx0XHRpbWFnZS53aWR0aCA9IDIwO1xyXG5cdFx0XHRpbWFnZS5oZWlnaHQgPSAyMDtcclxuXHRcdFx0aW1hZ2UuY3Jvc3NPcmlnaW4gPSAnJztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERSQVcgPSBuZXcgRHJhdygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9kcmF3LmpzIiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcblx0Y29uc3RydWN0b3IoaW1hZ2UsIGN4LCBjeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0dGhpcy54ID0gMDtcclxuXHRcdHRoaXMueSA9IDA7XHJcblx0XHR0aGlzLmltYWdlID0gaW1hZ2U7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGggfHwgdGhpcy5pbWFnZS53aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG5cdFx0dGhpcy5jeCA9IGN4IHx8IDA7XHJcblx0XHR0aGlzLmN5ID0gY3kgfHwgMDtcclxuXHR9XHJcblx0Z2V0IGN4KCkge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy54ICsgdGhpcy53aWR0aCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY3koKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnkgKyB0aGlzLmhlaWdodCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRzZXQgY3godmFsdWUpIHtcclxuXHRcdHRoaXMueCA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLndpZHRoICogMC41KTtcclxuXHR9XHJcblxyXG5cdHNldCBjeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy55ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMuaGVpZ2h0ICogMC41KTtcclxuXHR9XHJcblxyXG5cdGRyYXcoY3R4KSB7XHJcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Nwcml0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=