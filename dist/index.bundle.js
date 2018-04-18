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
var DOMAIN = exports.DOMAIN = 'https://pizza-tele.ga';
var INGREDIENTS_URL = exports.INGREDIENTS_URL = DOMAIN + '/api/v1/ingredient/list';
var TAG_URL = exports.TAG_URL = DOMAIN + '/api/v1/tag/list';
var USER_URL = exports.USER_URL = DOMAIN + '/api/v1/user/my_info';
var CREATE_PIZZA = exports.CREATE_PIZZA = DOMAIN + '/api/v1/pizza/create';
var PIZZA_LIST = exports.PIZZA_LIST = DOMAIN + '/api/v1/pizza/list';

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

var _auth = __webpack_require__(3);

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

var _registration = __webpack_require__(17);

var _registration2 = _interopRequireDefault(_registration);

var _user = __webpack_require__(19);

var _user2 = _interopRequireDefault(_user);

var _create = __webpack_require__(20);

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

var _authHttp = __webpack_require__(6);

var _constants = __webpack_require__(2);

var _utils = __webpack_require__(1);

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
		_this.getPizzaList();
		return _this;
	}

	_createClass(App, [{
		key: 'getPizzaList',
		value: function getPizzaList() {
			var _this2 = this;

			return _authHttp.AUTH_HTTP_SERVICE.get(_constants.PIZZA_LIST).then(function (res) {
				_this2.list.update({
					pizzas: res.results
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var containerString = '\n\t\t<main class="main pizza">\n            <div class="container pizza__container">\n                <a href="#/create" class="button pizza__add">add pizza</a>\n            </div>\n        </main>\n\t\t';

			var containerFragment = (0, _utils.toHtml)(containerString);
			var container = containerFragment.querySelector('.pizza__container');

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
			var containerString = '\n\t\t<div class="container list__container">\n        </div>\n\t\t';

			var containerFragment = (0, _utils.toHtml)(containerString);
			var container = containerFragment.querySelector('.list__container');

			if (this.props) {
				var pizzas = this.props.pizzas;


				if (pizzas.length === 0) {
					container.innerText = 'No pizzas :(';
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _footer = __webpack_require__(4);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _registration = __webpack_require__(18);

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
/* 18 */
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
/* 19 */
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

var _create = __webpack_require__(21);

var _utils = __webpack_require__(1);

var _constants = __webpack_require__(2);

var _draw = __webpack_require__(22);

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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DRAW = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _sprite = __webpack_require__(23);

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
/* 23 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY5YTVkNDE2YjEwYjFhNmQ1ZGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvY3JlYXRlLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaG9zdCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJvbkJlZm9yZVVubW91bnQiLCJjaGlsZHJlbiIsInJlbmRlciIsImlubmVySFRNTCIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvSHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3RyaW5nIiwiY29udGVudCIsIlJBTkRPTSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRPTUFJTiIsIklOR1JFRElFTlRTX1VSTCIsIlRBR19VUkwiLCJVU0VSX1VSTCIsIkNSRUFURV9QSVpaQSIsIlBJWlpBX0xJU1QiLCJBdXRoU2VydmljZSIsIl90b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfY2xhaW1zIiwiSlNPTiIsInBhcnNlIiwibG9naW5VcmwiLCJzdG9yZVVybCIsImNyZWF0ZVVybCIsInRva2VuSXNOb3RFeHBpcmVkIiwiY2xlYXJTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInRva2VuIiwiY2xhaW1zIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm9rIiwiYW5zd2VyIiwicGFyc2VKd3RDbGFpbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YXR1cyIsInJlamVjdCIsImp3dFRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsInNldEl0ZW0iLCJBVVRIX1NFUlZJQ0UiLCJGb290ZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJIZWFkZXIiLCJpc0F1dGhvcml6ZWQiLCJsb2dpbkJ1dHRvbiIsImxvZ291dEJ1dHRvbiIsInVzZXJCdXR0b24iLCJyZWdpc3RyYXRpb25CdXR0b24iLCJoZWFkZXIiLCJmcmFnbWVudCIsIkF1dGhIdHRwU2VydmljZSIsInVybCIsIkVycm9yIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsIkFVVEhfSFRUUF9TRVJWSUNFIiwiQVBQX1JPVVRFUiIsInF1ZXJ5U2VsZWN0b3IiLCJyb3V0ZXMiLCJhdXRoR3VhcmQiLCJyZXN1bHQiLCJzdWNjZXNzIiwicmVkaXJlY3QiLCJSb3V0ZXIiLCJhY3RpdmVSb3V0ZSIsImFjdGl2ZUNvbXBvbmVudCIsImhhbmRsZVVybENoYW5nZSIsImJpbmQiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1cGRhdGVTdGF0ZSIsInVwZGF0ZSIsInNsaWNlIiwiTG9naW4iLCJsb2dpbkZvcm0iLCJmb290ZXIiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImV2IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJsb2dpblVzZXIiLCJ0ZXh0IiwiZXJyb3IiLCJsb2dpblN0cmluZyIsImxvZ2luRnJhZ21lbnQiLCJlcnJvck1lc3NhZ2UiLCJhcHBlbmRDaGlsZCIsIkVycm9yTWVzc2FnZSIsIkFwcCIsImxpc3QiLCJnZXRQaXp6YUxpc3QiLCJnZXQiLCJwaXp6YXMiLCJyZXN1bHRzIiwiY29udGFpbmVyU3RyaW5nIiwiY29udGFpbmVyRnJhZ21lbnQiLCJjb250YWluZXIiLCJQaXp6YUxpc3QiLCJwaXp6YSIsImltZ191cmwiLCJ0aW1lX3ByZXBhcmVkIiwicHJpY2UiLCJmb3JFYWNoIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJSZWdpc3RyYXRpb24iLCJyZWdpc3RyYXRpb24iLCJSZWdpc3RyYXRpb25Gb3JtIiwic3RvcmVzIiwiZ2V0U3RvcmVzIiwic3RvcmVJbmZvIiwicGFzc3dvcmRfcmVwZWF0IiwiZW1haWwiLCJzdG9yZV9pZCIsInBhcnNlSW50Iiwic3RvcmUiLCJzZWxlY3RlZEluZGV4IiwiZGF0YXNldCIsImlkIiwic3RvcmVfcGFzc3dvcmQiLCJyZWdpc3RlclVzZXIiLCJzZWxlY3QiLCJoaWRkZW4iLCJvcHRpb24iLCJlbGVtZW50IiwiZm9ybSIsIlVzZXIiLCJjcmVhdGVkIiwidmlzaXRlZCIsImdldFVzZXJJbmZvIiwiY3JlYXRlZF9hdCIsImxhc3RfbG9naW4iLCJ1c2VyIiwiTmV3UGl6emEiLCJzaXplIiwiaW5ncmVkaWVudHMiLCJ0YWdzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSZXNpemUiLCJyZW5kZXJEYXRhIiwiY2FudmFzIiwiZGVzY3JpcHRpb24iLCJmZCIsIkZvcm1EYXRhIiwidG9CbG9iIiwiYmxvYiIsInBvc3QiLCJhbGwiLCJnZXRJbmdyZWRpZW50cyIsImdldFRhZ3MiLCJidXR0b25zU3RyaW5nIiwiYnV0dG9ucyIsInJlbmRlckZvcm0iLCJyZW5kZXJJbmdyZWRpZW50cyIsInJlbmRlclRhZ3MiLCJvbkluaXQiLCJmbGFnIiwiaW5ncmVkaWVudHNJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmV3T3B0aW9ucyIsIm5ld0luZ3JlZGllbnRzIiwiaW5ncmVkaWVudElucHV0IiwiY2hlY2tlZCIsInB1c2giLCJhdHRyIiwic2l6ZUZpZWxkcyIsInNpemVGaWVsZCIsIm5ld1NpemUiLCJmb3JtU3RyaW5nIiwiaW5ncmVkaWVudHNTdHJpbmciLCJyZWR1Y2UiLCJodG1sIiwiaW1hZ2VfdXJsIiwidGFnc1N0cmluZyIsIlBpenphRGF0YVNlcnZpY2UiLCJDUkVBVEVfREFUQSIsIkRyYXciLCJjcnVzdF9waXp6YSIsIl9sb2FkSW1hZ2UiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbWFnZXMiLCJzcHJpdGVzIiwibGFzdE9wdGlvbnMiLCJidWZmZXIiLCJzcHJpdGVzUG9vbCIsIndpZHRoIiwiaGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsImltYWdlIiwiX3N0YXJ0U2V0IiwiX2RyYXciLCJmaWx0ZXJlZEVsZW0iLCJlbGVtIiwiZmlsdGVyIiwieCIsInkiLCJjb25jYXQiLCJwcmVCdWZmZXIiLCJlbCIsImluY2x1ZGVzIiwiX2dlbmVyYXRlU3ByaXRlIiwiY291bnQiLCJpIiwiaW5ncmVkaWVudCIsImNsZWFyUmVjdCIsInNwcml0ZSIsImRyYXciLCJwcm9taXNlcyIsIm1hcCIsImluZ3JfdXJsIiwiSW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsInNyYyIsImNyb3NzT3JpZ2luIiwiRFJBVyIsIlNwcml0ZSIsImN4IiwiY3kiLCJkcmF3SW1hZ2UiLCJyb3VuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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dUJBaUJJN0MsRyxFQUFLO0FBQ1RBLE9BQUk4QyxTQUFKLENBQWMsS0FBS2hDLEtBQW5CLEVBQTBCLEtBQUtNLENBQS9CLEVBQWtDLEtBQUtDLENBQXZDLEVBQTBDLEtBQUtaLEtBQS9DLEVBQXNELEtBQUtDLE1BQTNEO0FBQ0E7OztzQkFsQlE7QUFDUixVQUFPcE8sS0FBS3lRLEtBQUwsQ0FBVyxLQUFLM0IsQ0FBTCxHQUFTLEtBQUtYLEtBQUwsR0FBYSxHQUFqQyxDQUFQO0FBQ0EsRztvQkFNTS9HLEssRUFBTztBQUNiLFFBQUswSCxDQUFMLEdBQVM5TyxLQUFLeVEsS0FBTCxDQUFXckosUUFBUSxLQUFLK0csS0FBTCxHQUFhLEdBQWhDLENBQVQ7QUFDQTs7O3NCQU5RO0FBQ1IsVUFBT25PLEtBQUt5USxLQUFMLENBQVcsS0FBSzFCLENBQUwsR0FBUyxLQUFLWCxNQUFMLEdBQWMsR0FBbEMsQ0FBUDtBQUNBLEc7b0JBTU1oSCxLLEVBQU87QUFDYixRQUFLMkgsQ0FBTCxHQUFTL08sS0FBS3lRLEtBQUwsQ0FBV3JKLFFBQVEsS0FBS2dILE1BQUwsR0FBYyxHQUFqQyxDQUFUO0FBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWY5YTVkNDE2YjEwYjFhNmQ1ZGQiLCJjbGFzcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHMgfHwge307XHJcblx0XHR0aGlzLnN0YXRlID0ge307XHJcblx0XHR0aGlzLmhvc3QgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RhdGUobmV4dFN0YXRlKSB7XHJcblx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcclxuXHRcdHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShuZXh0UHJvcHMpIHtcclxuXHRcdHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcblx0fVxyXG5cdHVubW91bnQoKSB7XHJcblx0XHR0aGlzLm9uQmVmb3JlVW5tb3VudCgpO1xyXG5cdH1cclxuXHRvbkJlZm9yZVVubW91bnQoKSB7fVxyXG5cdG9uQmVmb3JlVXBkYXRlKG5leHRQcm9wcykge31cclxuXHRnZXQgbmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxuXHRfcmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xyXG5cclxuXHRcdHRoaXMuaG9zdC5pbm5lckhUTUwgPSAnJztcclxuXHRcdGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdHRoaXMuaG9zdC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcclxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZCguLi5jaGlsZHJlbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKGNoaWxkcmVuKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5ob3N0O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL2NvbXBvbmVudC5qcyIsImV4cG9ydCBjb25zdCB0b0h0bWwgPSBzdHJpbmcgPT4ge1xyXG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHJpbmc7XHJcblx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkFORE9NID0gKG1pbiwgbWF4KSA9PiB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy91dGlscy5qcyIsImV4cG9ydCBjb25zdCBET01BSU4gPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhJztcclxuZXhwb3J0IGNvbnN0IElOR1JFRElFTlRTX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL2luZ3JlZGllbnQvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBUQUdfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdGFnL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVVNFUl9VUkwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL215X2luZm9gO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BJWlpBID0gYCR7RE9NQUlOfS9hcGkvdjEvcGl6emEvY3JlYXRlYDtcclxuZXhwb3J0IGNvbnN0IFBJWlpBX0xJU1QgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9saXN0YDtcclxuICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHRcdHRoaXMuX2NsYWltcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NsYWltcycpKTtcclxuXHRcdHRoaXMubG9naW5VcmwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL2xvZ2luYDtcclxuXHRcdHRoaXMuc3RvcmVVcmwgPSBgJHtET01BSU59L2FwaS92MS9zdG9yZS9saXN0YDtcclxuXHRcdHRoaXMuY3JlYXRlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9jcmVhdGVgO1xyXG5cdH1cclxuXHJcblx0Z2V0IHRva2VuKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Rva2VuO1xyXG5cdH1cclxuXHJcblx0c2V0IHRva2VuKHRva2VuKSB7XHJcblx0XHR0aGlzLl90b2tlbiA9IHRva2VuO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNsYWltcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jbGFpbXM7XHJcblx0fVxyXG5cclxuXHRzZXQgY2xhaW1zKGNsYWltcykge1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gY2xhaW1zO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsYWltcycsIEpTT04uc3RyaW5naWZ5KGNsYWltcykpO1xyXG5cdH1cclxuXHJcblx0aXNBdXRob3JpemVkKCkge1xyXG5cdFx0aWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuSXNOb3RFeHBpcmVkKCkpIHtcclxuXHRcdFx0dGhpcy5jbGVhclN0b3JhZ2UoKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRjbGVhclN0b3JhZ2UoKSB7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBudWxsO1xyXG5cdFx0dGhpcy5fdG9rZW4gPSBudWxsO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2xhaW1zJyk7XHJcblx0fVxyXG5cclxuXHR0b2tlbklzTm90RXhwaXJlZCgpIHtcclxuXHRcdGlmICghdGhpcy50b2tlbikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xhaW1zLmV4cCAqIDEwMDAgPiBEYXRlLm5vdygpO1xyXG5cdH1cclxuXHJcblx0c3RvcmVJbmZvKCkge1xyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMuc3RvcmVVcmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0bG9naW5Vc2VyKGRhdGEpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuXHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoKS5hcHBlbmQoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyksXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLmxvZ2luVXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGlmIChyZXMub2spIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRva2VuID0gYW5zd2VyLnRva2VuO1xyXG5cdFx0XHRcdFx0dGhpcy5jbGFpbXMgPSB0aGlzLnBhcnNlSnd0Q2xhaW1zKGFuc3dlci50b2tlbik7XHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4gUHJvbWlzZS5yZWplY3QoeyBhbnN3ZXIsIHN0YXR1czogcmVzLnN0YXR1cyB9KSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVnaXN0ZXJVc2VyKGRhdGEpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5jcmVhdGVVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0cGFyc2VKd3RDbGFpbXMoand0VG9rZW4pIHtcclxuXHRcdGlmIChqd3RUb2tlbikge1xyXG5cdFx0XHRsZXQgYmFzZTY0VXJsID0gand0VG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuXHRcdFx0bGV0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKTtcclxuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge307XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9TRVJWSUNFID0gbmV3IEF1dGhTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGFkZHJlc3M+S290dGFucywgS290dGFucyBTcnQuIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNTc3Nzg4ODdcIj50ZWwuIDU3Ny03ODgtODc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+UGl6emEgTWFuYWdlciAmY29weTtcclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDEtMDFcIj4yMDE4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdC8vVE9ETzogbmVlZCBkZWxldGUgPGEgaHJlZj1cIiMvbG9naW5cIiBjbGFzcz1cImxvZ2luX19idXR0b24tbGlua1wiPnNpZ24gaW48L2E+XHJcblx0XHRjb25zdCBpc0F1dGhvcml6ZWQgPSBBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKCk7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5CdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0taW5cIj5zaWduIGluPC9hPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBsb2dvdXRCdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL2xvZ291dFwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLW91dFwiPnNpZ24gb3V0PC9hPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCB1c2VyQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy91c2VyXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0taW5mb1wiPnVzZXIgaW5mbzwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9yZWdpc3RyYXRpb25cIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS11cFwiPnNpZ24gdXA8L2E+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJjdXJyZW50LXRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2Nsb2NrXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE4LTAyLTAzIDEyOjAxOjQ4XCI+MTI6MDE6NDg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsb2dvXCIgaHJlZj1cIiMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2xvZ29cIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImF1dGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2lzQXV0aG9yaXplZCA/IGxvZ291dEJ1dHRvbiA6IGxvZ2luQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNBdXRob3JpemVkID8gdXNlckJ1dHRvbiA6IHJlZ2lzdHJhdGlvbkJ1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGhlYWRlcik7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGgnO1xyXG5cclxuY2xhc3MgQXV0aEh0dHBTZXJ2aWNlIHtcclxuXHRnZXQodXJsKSB7XHJcblx0XHRpZiAoIUFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdOb24tYXV0aG9yaXplZCByZXF1ZXN0Jyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmV0Y2godXJsLCB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcblx0XHRcdFx0J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fSksXHJcblx0XHR9KS50aGVuKFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UuanNvbigpKSxcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2Uuc3RhdHVzQ29kZSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwb3N0KHVybCwgZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoKHVybCwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogZGF0YSxcclxuXHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtBVVRIX1NFUlZJQ0UudG9rZW59YCxcclxuXHRcdFx0fSksXHJcblx0XHR9KS50aGVuKFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UuanNvbigpKSxcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2Uuc3RhdHVzQ29kZSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwYXRjaCgpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX0hUVFBfU0VSVklDRSA9IG5ldyBBdXRoSHR0cFNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGgtaHR0cC5qcyIsImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9mcmFtZXdvcmsvcm91dGVyJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUiA9IG5ldyBSb3V0ZXIoeyBob3N0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLCByb3V0ZXMgfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbmRleC5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhHdWFyZCA9ICgpID0+IHtcclxuXHRjb25zdCByZXN1bHQgPSBBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKClcclxuXHRcdD8gUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSB9KVxyXG5cdFx0OiBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiBmYWxzZSwgcmVkaXJlY3Q6ICcvbG9naW4nIH0pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuLi91dGlscy9hdXRoLmd1YXJkJztcclxuXHJcbmNsYXNzIFJvdXRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHRjb25zdCB7IHJvdXRlcywgaG9zdCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRyb3V0ZXMsXHJcblx0XHRcdGFjdGl2ZVJvdXRlOiBudWxsLFxyXG5cdFx0XHRhY3RpdmVDb21wb25lbnQ6IG51bGwsXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGhvc3Q7XHJcblx0XHR0aGlzLmhhbmRsZVVybENoYW5nZSA9IHRoaXMuaGFuZGxlVXJsQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmFwcGx5Um91dGUgPSB0aGlzLmFwcGx5Um91dGUuYmluZCh0aGlzKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHRoaXMuaGFuZGxlVXJsQ2hhbmdlKHRoaXMucGF0aCkpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlVXJsQ2hhbmdlKHRoaXMucGF0aCk7XHJcblx0fVxyXG5cclxuXHRnZXQgcGF0aCgpIHtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVVybENoYW5nZSh1cmwpIHtcclxuXHRcdGNvbnN0IHsgcm91dGVzLCBhY3RpdmVSb3V0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IG5leHRSb3V0ZSA9IHJvdXRlcy5maW5kKCh7IGhyZWYgfSkgPT4gaHJlZiA9PT0gdXJsKTtcclxuXHJcblx0XHRpZiAobmV4dFJvdXRlICYmIG5leHRSb3V0ZSAhPT0gYWN0aXZlUm91dGUpIHtcclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5yZWRpcmVjdFRvKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlUmVkaXJlY3QobmV4dFJvdXRlLnJlZGlyZWN0VG8pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFJvdXRlLmxvZ291dCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZUxvZ291dChuZXh0Um91dGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFJvdXRlLm9uRW50ZXIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnb25FbnRlcicpO1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlT25FbnRlcihuZXh0Um91dGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmFwcGx5Um91dGUobmV4dFJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZUxvZ291dChuZXh0Um91dGUpIHtcclxuXHRcdG5leHRSb3V0ZS5sb2dvdXQoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVJlZGlyZWN0KHVybCkge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVPbkVudGVyKG5leHRSb3V0ZSkge1xyXG5cdFx0YXV0aEd1YXJkKCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRyZXMuc3VjY2VzcyA/IG51bGwgOiB0aGlzLmhhbmRsZVJlZGlyZWN0KHJlcy5yZWRpcmVjdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFwcGx5Um91dGUocm91dGUpIHtcclxuXHRcdGNvbnN0IHsgQ29tcG9uZW50IH0gPSByb3V0ZTtcclxuXHRcdGNvbnN0IGNvbXBvbmVudEluc3RhbmNlID0gbmV3IENvbXBvbmVudCgpO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRhY3RpdmVSb3V0ZTogcm91dGUsXHJcblx0XHRcdGFjdGl2ZUNvbXBvbmVudDogY29tcG9uZW50SW5zdGFuY2UsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgYWN0aXZlQ29tcG9uZW50IH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0cmV0dXJuIGFjdGl2ZUNvbXBvbmVudC51cGRhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ZyYW1ld29yay9yb3V0ZXIuanMiLCJpbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyJztcclxuaW1wb3J0IE5ld1BpenphIGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlJztcclxuaW1wb3J0IHsgYXV0aEd1YXJkIH0gZnJvbSAnLi91dGlscy9hdXRoLmd1YXJkJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi91dGlscy9hdXRoJztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IEFwcCxcclxuXHRcdGhyZWY6ICcnLFxyXG5cdFx0cmVkaXJlY3RUbzogJy8nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnLycsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IExvZ2luLFxyXG5cdFx0aHJlZjogJy9sb2dpbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IFJlZ2lzdHJhdGlvbixcclxuXHRcdGhyZWY6ICcvcmVnaXN0cmF0aW9uJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogVXNlcixcclxuXHRcdGhyZWY6ICcvdXNlcicsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IEFwcCxcclxuXHRcdGhyZWY6ICcvbG9nb3V0JyxcclxuXHRcdGxvZ291dDogQVVUSF9TRVJWSUNFLmNsZWFyU3RvcmFnZSxcclxuXHRcdG9uRW50ZXI6IGF1dGhHdWFyZCxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogTmV3UGl6emEsXHJcblx0XHRocmVmOiAnL2NyZWF0ZScsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3JvdXRlcy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9sb2dpbi5mb3JtJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4tY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMubG9naW5Gb3JtID0gbmV3IExvZ2luRm9ybSgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIHRoaXMubG9naW5Gb3JtLnVwZGF0ZSgpLCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcclxuaW1wb3J0IHsgQVBQX1JPVVRFUiB9IGZyb20gJy4uLy4uL2luZGV4JztcclxuXHJcbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBudWxsLFxyXG5cdFx0XHRwYXNzd29yZDogbnVsbCxcclxuXHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4nKTtcclxuXHRcdHRoaXMubWVzc2FnZSA9IG5ldyBFcnJvck1lc3NhZ2UoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGhvc3QgPSBldi50YXJnZXQ7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdH07XHJcblx0XHRBVVRIX1NFUlZJQ0UubG9naW5Vc2VyKGRhdGEpLnRoZW4oXHJcblx0XHRcdHJlcyA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdGUgPSB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBudWxsLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblx0XHRcdFx0QVBQX1JPVVRFUi5oYW5kbGVSZWRpcmVjdCgnLycpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdGF0dXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRleHQgPSBzdGF0dXMuYW5zd2VyLmVycm9yO1xyXG5cdFx0XHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogdGV4dCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5TdHJpbmcgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImxvZ2luX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJsb2dpbl9fdGl0bGVcIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG9naW4tdXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiB2YWx1ZT1cclxuXHRcdFx0XHQke3VzZXJuYW1lID8gdXNlcm5hbWUgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG9naW4tcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIHZhbHVlPVxyXG5cdFx0XHRcdCR7cGFzc3dvcmQgPyBwYXNzd29yZCA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbG9naW5fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luRnJhZ21lbnQgPSB0b0h0bWwobG9naW5TdHJpbmcpO1xyXG5cclxuXHRcdGlmIChtZXNzYWdlKSB7XHJcblx0XHRcdGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMubWVzc2FnZS51cGRhdGUoeyB0ZXh0OiBtZXNzYWdlIH0pO1xyXG5cdFx0XHRsb2dpbkZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbl9fYnV0dG9uJykuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRsb2dpbkZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbl9fZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHRcdHJldHVybiBsb2dpbkZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5mb3JtLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuXHJcbmNsYXNzIEVycm9yTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yX19jb250YWluZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5wcm9wcztcclxuXHRcdGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ZXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3JfX3RleHQnKTtcclxuXHRcdGVycm9yLmlubmVySFRNTCA9IHRleHQ7XHJcblx0XHRyZXR1cm4gZXJyb3I7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvck1lc3NhZ2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9lcnJvci5tZXNzYWdlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IFBpenphTGlzdCBmcm9tICcuLi9saXN0L2xpc3QnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IFBJWlpBX0xJU1QgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdhcHAnKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5saXN0ID0gbmV3IFBpenphTGlzdCgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0XHR0aGlzLmdldFBpenphTGlzdCgpO1xyXG5cdH1cclxuXHJcblx0Z2V0UGl6emFMaXN0KCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChQSVpaQV9MSVNUKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHRoaXMubGlzdC51cGRhdGUoe1xyXG5cdFx0XHRcdHBpenphczogcmVzLnJlc3VsdHMsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcblx0XHQ8bWFpbiBjbGFzcz1cIm1haW4gcGl6emFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwaXp6YV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIy9jcmVhdGVcIiBjbGFzcz1cImJ1dHRvbiBwaXp6YV9fYWRkXCI+YWRkIHBpenphPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcblx0XHRgO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRhaW5lckZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBjb250YWluZXJGcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcucGl6emFfX2NvbnRhaW5lcicpO1xyXG5cclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGhpcy5saXN0LnVwZGF0ZSgpKTtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBjb250YWluZXJGcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgUGl6emFMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGl6emEocGl6emFzKSB7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblx0XHRjb25zdCBsaXN0ID0gcGl6emEgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYFxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBpenphXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicGl6emFfX2ltZ1wiIHNyYz1cIiR7RE9NQUlOfS8ke3BpenphLmltZ191cmx9XCIgYWx0PVwiJHtwaXp6YS5uYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGl6emFfX25hbWVcIj4ke3BpenphLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzPVwicGl6emFfX3RpbWVcIiBkYXRldGltZT1cIiR7cGl6emEudGltZV9wcmVwYXJlZH1cIj4ke1xyXG5cdHBpenphLnRpbWVfcHJlcGFyZWRcclxufTwvdGltZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGl6emFfX3F1ZXVlLW51bWJlclwiPiMxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ldGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIwNDowMFwiPjQ8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+bWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3BpenphLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+IFxyXG4gICAgICAgIGA7XHJcblx0XHR9O1xyXG5cclxuXHRcdHBpenphcy5mb3JFYWNoKHBpenphID0+IHtcclxuXHRcdFx0Y29udGFpbmVyLmlubmVySFRNTCArPSBsaXN0KHBpenphKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGxpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfX2NvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzKSB7XHJcblx0XHRcdGNvbnN0IHsgcGl6emFzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdFx0aWYgKHBpenphcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRjb250YWluZXIuaW5uZXJUZXh0ID0gJ05vIHBpenphcyA6KCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmNyZWF0ZVBpenphKHBpenphcykpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGl6emFMaXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tICcuL3JlZ2lzdHJhdGlvbi5mb3JtJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb24tY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5yZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uRm9ybSgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCB0aGlzLnJlZ2lzdHJhdGlvbi51cGRhdGUoKSwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzdG9yZXM6IG51bGwsXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uJyk7XHJcblx0XHR0aGlzLmdldFN0b3JlcygpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3RvcmVzKCkge1xyXG5cdFx0QVVUSF9TRVJWSUNFLnN0b3JlSW5mbygpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0dGhpcy5zdGF0ZS5zdG9yZXMgPSByZXN1bHQ7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGV2LnRhcmdldC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkOiBldi50YXJnZXQucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZF9yZXBlYXQ6IGV2LnRhcmdldC5wYXNzd29yZF9yZXBlYXQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0c3RvcmVfaWQ6IHBhcnNlSW50KGV2LnRhcmdldC5zdG9yZS5vcHRpb25zW2V2LnRhcmdldC5zdG9yZS5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmlkKSxcclxuXHRcdFx0c3RvcmVfcGFzc3dvcmQ6IGV2LnRhcmdldC5zdG9yZV9wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLnJlZ2lzdGVyVXNlcihkYXRhKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicmVnaXN0cmF0aW9uX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJyZWdpc3RyYXRpb25fX3RpdGxlXCI+cmVnaXN0cmF0aW9uIGZvcm08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi11c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVbmlxdWUuIE1pbiBsZW5ndGggMiBjaGFycywgbWF4IC0gMjRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1yZS1wYXNzd29yZFwiPlJlLWVudGVyIHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZF9yZXBlYXRcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBtYXRjaCB3aXRoIHBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLWVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmVcIj5TdG9yZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGhpZGRlbiBpZD1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiIG5hbWU9XCJzdG9yZVwiPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiPlN0b3JlIHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwic3RvcmVfcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBzdG9yZSBwYXNzd29yZC4gTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIHJlZ2lzdHJhdGlvbl9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPnNpZ24gdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwocmVnaXN0cmF0aW9uKTtcclxuXHJcblx0XHRjb25zdCBzZWxlY3QgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb25fX3NlbGVjdCcpO1xyXG5cclxuXHRcdGlmIChzdG9yZXMpIHtcclxuXHRcdFx0c2VsZWN0LmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRzdG9yZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHRcdFx0XHRvcHRpb24udGV4dCA9IGVsZW1lbnQubmFtZTtcclxuXHRcdFx0XHRvcHRpb24uZGF0YXNldC5pZCA9IGVsZW1lbnQuaWQ7XHJcblx0XHRcdFx0c2VsZWN0LmFkZChvcHRpb24pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBmb3JtID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5mb3JtLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IFVTRVJfVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VybmFtZTogbnVsbCxcclxuXHRcdFx0ZW1haWw6IG51bGwsXHJcblx0XHRcdGNyZWF0ZWQ6IG51bGwsXHJcblx0XHRcdHZpc2l0ZWQ6IG51bGwsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgndXNlci1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0XHR0aGlzLmdldFVzZXJJbmZvKCk7XHJcblx0fVxyXG5cclxuXHRnZXRVc2VySW5mbygpIHtcclxuXHRcdEFVVEhfSFRUUF9TRVJWSUNFLmdldChVU0VSX1VSTCkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHtcclxuXHRcdFx0XHR1c2VybmFtZTogcmVzdWx0LnVzZXJuYW1lLFxyXG5cdFx0XHRcdGVtYWlsOiByZXN1bHQuZW1haWwsXHJcblx0XHRcdFx0Y3JlYXRlZDogcmVzdWx0LmNyZWF0ZWRfYXQsXHJcblx0XHRcdFx0dmlzaXRlZDogcmVzdWx0Lmxhc3RfbG9naW4sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgY3JlYXRlZCwgdmlzaXRlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IHVzZXIgPSBgXHJcbiAgICAgICAgPG1haW4gY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT4ke3VzZXJuYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHtlbWFpbH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7Y3JlYXRlZH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7dmlzaXRlZH08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwodXNlcik7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBmcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci91c2VyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IHsgQ1JFQVRFX0RBVEEgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGUuZGF0YSc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgRE9NQUlOLCBDUkVBVEVfUElaWkEgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEUkFXIH0gZnJvbSAnLi9kcmF3JztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLWh0dHAnO1xyXG5cclxuY2xhc3MgTmV3UGl6emEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaXplOiAnNjAnLFxyXG5cdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdFx0aW5ncmVkaWVudHM6IFtdLFxyXG5cdFx0XHR0YWdzOiBbXSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY29udGFpbmVyJyk7XHJcblx0XHR0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMucmVuZGVyRGF0YSgpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgeyBzaXplLCBpbmdyZWRpZW50cywgdGFncyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5cdFx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX25hbWUtdmFsdWUnKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fZGVzY3JpcHRpb24nKTtcclxuXHJcblx0XHRjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZmQuYXBwZW5kKCduYW1lJywgbmFtZS52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24udmFsdWUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdzaXplJywgc2l6ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2luZ3JlZGllbnRzJywgSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHMpKTtcclxuXHRcdGZkLmFwcGVuZCgndGFncycsIEpTT04uc3RyaW5naWZ5KHRhZ3MpKTtcclxuXHJcblx0XHRjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG5cdFx0XHRmZC5hcHBlbmQoJ2ltYWdlJywgYmxvYiwgJ25ld19pbWFnZS5wbmcnKTtcclxuXHRcdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLnBvc3QoQ1JFQVRFX1BJWlpBLCBmZCkudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckRhdGEoKSB7XHJcblx0XHRQcm9taXNlLmFsbChbQ1JFQVRFX0RBVEEuZ2V0SW5ncmVkaWVudHMoKSwgQ1JFQVRFX0RBVEEuZ2V0VGFncygpXSkudGhlbigoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX29wdGlvbnMnKTtcclxuXHRcdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG5cdFx0XHRsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fY2FudmFzJyk7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbnNTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX19idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gY3JlYXRlX19idXR0b24tY2FuY2VsJyB0eXBlPSdidXR0b24nPmNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gY3JlYXRlX19idXR0b24tc2VuZCcgdHlwZT0nc3VibWl0Jz5jcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbnMgPSB0b0h0bWwoYnV0dG9uc1N0cmluZyk7XHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kKHRoaXMucmVuZGVyRm9ybSgpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckluZ3JlZGllbnRzKENSRUFURV9EQVRBLmluZ3JlZGllbnRzKSk7XHJcblx0XHRcdGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUYWdzKENSRUFURV9EQVRBLnRhZ3MpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuXHRcdFx0RFJBVy5vbkluaXQoe1xyXG5cdFx0XHRcdGhvc3Q6IGNhbnZhcyxcclxuXHRcdFx0XHRpbmdyZWRpZW50czogQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVDbGljayhldikge1xyXG5cdFx0aWYgKGV2LnRhcmdldC5kYXRhc2V0LmZsYWcgPT09ICdpbmdyZWRpZW50Jykge1xyXG5cdFx0XHRjb25zdCBpbmdyZWRpZW50c0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZsYWddJyk7XHJcblx0XHRcdGNvbnN0IG5ld09wdGlvbnMgPSBbXTtcclxuXHRcdFx0Y29uc3QgbmV3SW5ncmVkaWVudHMgPSBbXTtcclxuXHRcdFx0aW5ncmVkaWVudHNJbnB1dHMuZm9yRWFjaChpbmdyZWRpZW50SW5wdXQgPT4ge1xyXG5cdFx0XHRcdGlmIChpbmdyZWRpZW50SW5wdXQuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0bmV3T3B0aW9ucy5wdXNoKGluZ3JlZGllbnRJbnB1dC52YWx1ZSk7XHJcblx0XHRcdFx0XHRuZXdJbmdyZWRpZW50cy5wdXNoKHBhcnNlSW50KGluZ3JlZGllbnRJbnB1dC5kYXRhc2V0LmlkKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcblx0XHRcdFx0b3B0aW9uczogbmV3T3B0aW9ucyxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcblx0XHRcdFx0aW5ncmVkaWVudHM6IG5ld0luZ3JlZGllbnRzLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcblx0XHRcdGNvbnN0IHsgc2l6ZSwgb3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVJlc2l6ZShldikge1xyXG5cdFx0aWYgKGV2LnRhcmdldC5kYXRhc2V0LmF0dHIgPT09ICdzaXplJykge1xyXG5cdFx0XHRjb25zdCBzaXplRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXR0cl0nKTtcclxuXHRcdFx0c2l6ZUZpZWxkcy5mb3JFYWNoKHNpemVGaWVsZCA9PiB7XHJcblx0XHRcdFx0aWYgKHNpemVGaWVsZC5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRjb25zdCBuZXdTaXplID0gc2l6ZUZpZWxkLnZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRcdFx0c2l6ZTogbmV3U2l6ZSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGxldCB7IHNpemUsIG9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRcdERSQVcuaGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXJGb3JtKCkge1xyXG5cdFx0Y29uc3QgZm9ybVN0cmluZyA9IGBcclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX25hbWUnPlBpenphIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyByZXF1aXJlZCBtaW49JzMnIG1heD0nMjQnIGNsYXNzPSdjcmVhdGVfX25hbWUtdmFsdWUnPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5EZXNjcmlwdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPSdjcmVhdGVfX2Rlc2NyaXB0aW9uJz48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX19zaXplLXRpdGxlJz5TaXplPC9zcGFuPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MzA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24tdmFsdWUnIHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nMzAnIGRhdGEtYXR0cj0nc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tc21hbGxcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj40NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSc0NScgZGF0YS1hdHRyPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1tZWRpdW1cIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj42MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSc2MCcgZGF0YS1hdHRyPSdzaXplJyBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLWxhcmdlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPiAgICBcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtdGl0bGUnPkluZ3JlZGllbnRzPGgyPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IHRvSHRtbChmb3JtU3RyaW5nKTtcclxuXHRcdGNvbnN0IHNpemVGaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX3NpemUnKTtcclxuXHRcdHNpemVGaWVsZHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG5cdFx0cmV0dXJuIGZvcm07XHJcblx0fVxyXG5cclxuXHRyZW5kZXJJbmdyZWRpZW50cyhkYXRhKSB7XHJcblx0XHRjb25zdCBpbmdyZWRpZW50c1N0cmluZyA9IGAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuXHRcdGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaW5wdXQnIHR5cGU9J2NoZWNrYm94JyB2YWx1ZT0nJHtcclxuXHRkYXRhLm5hbWVcclxufScgZGF0YS1mbGFnPSdpbmdyZWRpZW50JyBkYXRhLWlkPScke2RhdGEuaWR9Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke0RPTUFJTn0vJHtcclxuXHRkYXRhLmltYWdlX3VybFxyXG59JyBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cycgdGl0bGU9JyR7ZGF0YS5kZXNjcmlwdGlvbn0nIGRhdGEtbmFtZT0naW5ncmVkaWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX190YWctdGl0bGUnPlRhZzxoMj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaW5ncmVkaWVudHNTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyVGFncyhkYXRhKSB7XHJcblx0XHRjb25zdCB0YWdzU3RyaW5nID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX190YWdzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcblx0XHRodG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3RhZ3MtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cdFx0cmV0dXJuIGh0bWw7XHJcblx0fSwgJycpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHRhZ3NTdHJpbmcpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzcz0nY3JlYXRlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lciBjcmVhdGVfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPSdjcmVhdGVfX3RpdGxlJz5DcmVhdGUgUGl6emE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX2NhbnZhcyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX29wdGlvbnMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgZnJhZ21lbnQsIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1BpenphO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmpzIiwiaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IElOR1JFRElFTlRTX1VSTCwgVEFHX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFBpenphRGF0YVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0dGhpcy50YWdzID0gW107XHJcblx0fVxyXG5cclxuXHRnZXRJbmdyZWRpZW50cygpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoSU5HUkVESUVOVFNfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWdzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChUQUdfVVJMKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnRhZ3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfREFUQSA9IG5ldyBQaXp6YURhdGFTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jcmVhdGUuZGF0YS5qcyIsImltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuY2xhc3MgRHJhdyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmNydXN0X3BpenphID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYS9zdGF0aWMvaW1hZ2VzL3BpenphLnBuZyc7XHJcblx0XHR0aGlzLl9sb2FkSW1hZ2UgPSB0aGlzLl9sb2FkSW1hZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdChkYXRhKSB7XHJcblx0XHR0aGlzLmhvc3QgPSBkYXRhLmhvc3Q7XHJcblx0XHR0aGlzLnNpemUgPSAnNjAnO1xyXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHRcdHRoaXMuY2FudmFzV2lkdGggPSAzMjA7XHJcblx0XHR0aGlzLmNhbnZhc0hlaWdodCA9IDMyMDtcclxuXHRcdHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLmluZ3JlZGllbnRzO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuc3ByaXRlcyA9IHt9O1xyXG5cdFx0dGhpcy5sYXN0T3B0aW9ucyA9IFtdO1xyXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXNXaWR0aDtcclxuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0O1xyXG5cdFx0dGhpcy5fbG9hZFJlc291cmNlcygpLnRoZW4ocmVzb3VyY2VzID0+IHtcclxuXHRcdFx0cmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4gKHRoaXMuaW1hZ2VzW3Jlc291cmNlLm5hbWVdID0gcmVzb3VyY2UuaW1hZ2UpKTtcclxuXHRcdFx0dGhpcy5ob3N0LmFwcGVuZCh0aGlzLmNhbnZhcyk7XHJcblx0XHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9zdGFydFNldCgpIHtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuXHRcdC8vIGxldCBwaXp6YSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbJ3BpenphJ10sIDE2MCwgMTYwLCAzMDAsIDMwMCk7XHJcblx0XHRsZXQgcGl6emEgPSBuZXcgU3ByaXRlKFxyXG5cdFx0XHR0aGlzLmltYWdlc1sncGl6emEnXSxcclxuXHRcdFx0MTYwLFxyXG5cdFx0XHQxNjAsXHJcblx0XHRcdDMwMCAqIGAke3BhcnNlSW50KHRoaXMuc2l6ZSl9YCAvIDYwLFxyXG5cdFx0XHQzMDAgKiBgJHtwYXJzZUludCh0aGlzLnNpemUpfWAgLyA2MFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuc3ByaXRlc1sncGl6emEnXSA9IHBpenphO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbC5wdXNoKHBpenphKTtcclxuXHRcdHRoaXMuX2RyYXcoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpIHtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoID09IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPCB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcclxuXHRcdFx0bGV0IHByZUJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLmxhc3RPcHRpb25zID0gW107XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0dGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuXHRcdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVsZW0uaWQgPT09IGVsKSB7XHJcblx0XHRcdFx0XHRcdHByZUJ1ZmZlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRpZDogZWxlbS5pZCxcclxuXHRcdFx0XHRcdFx0XHRzcHJpdGVzOiBlbGVtLnNwcml0ZXMsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbGVtLnNwcml0ZXMuZmlsdGVyKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAxODAgJiYgZWxlbS54ID4gMTEwICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyMDAgJiYgZWxlbS54ID4gOTAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjU1ICYmIGVsZW0ueCA+IDQwICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZmlsdGVyZWRFbGVtKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHByZUJ1ZmZlcik7XHJcblx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0XHR0aGlzLl9zdGFydFNldCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5sYXN0T3B0aW9ucy5pbmNsdWRlcyhlbCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2RyYXcoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuXHRcdFx0XHRcdHRoaXMuX2dlbmVyYXRlU3ByaXRlKGVsLCAxMCk7XHJcblx0XHRcdFx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWwuc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZWxlbS5zcHJpdGVzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfZ2VuZXJhdGVTcHJpdGUobmFtZSwgY291bnQpIHtcclxuXHRcdGNvbnN0IHNwcml0ZXMgPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuXHRcdFx0bGV0IGluZ3JlZGllbnQgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzW2Ake25hbWV9YF0sIFJBTkRPTSg3MCwgMjUwKSwgUkFORE9NKDcwLCAyNTApKTtcclxuXHRcdFx0c3ByaXRlcy5wdXNoKGluZ3JlZGllbnQpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5idWZmZXIucHVzaCh7XHJcblx0XHRcdGlkOiBuYW1lLFxyXG5cdFx0XHRzcHJpdGVzOiBzcHJpdGVzLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfZHJhdygpIHtcclxuXHRcdHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS5kcmF3KHRoaXMuY3R4KSk7XHJcblx0fVxyXG5cclxuXHRfbG9hZFJlc291cmNlcygpIHtcclxuXHRcdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cdFx0cHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkSW1hZ2UoJ3BpenphJywgdGhpcy5jcnVzdF9waXp6YSkpO1xyXG5cdFx0cHJvbWlzZXMgPSBwcm9taXNlcy5jb25jYXQoXHJcblx0XHRcdHRoaXMuaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmdyX3VybCA9IGAke0RPTUFJTn0vJHtpbmdyZWRpZW50LmltYWdlX3VybH1gO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9sb2FkSW1hZ2UoaW5ncmVkaWVudC5uYW1lLCBpbmdyX3VybCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkSW1hZ2UobmFtZSwgdXJsKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHsgbmFtZSwgaW1hZ2UgfSk7XHJcblx0XHRcdGltYWdlLm9uZXJyb3IgPSBlID0+IHJlamVjdChlKTtcclxuXHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xyXG5cdFx0XHRpbWFnZS53aWR0aCA9IDIwO1xyXG5cdFx0XHRpbWFnZS5oZWlnaHQgPSAyMDtcclxuXHRcdFx0aW1hZ2UuY3Jvc3NPcmlnaW4gPSAnJztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERSQVcgPSBuZXcgRHJhdygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvZHJhdy5qcyIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG5cdGNvbnN0cnVjdG9yKGltYWdlLCBjeCwgY3ksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdHRoaXMueCA9IDA7XHJcblx0XHR0aGlzLnkgPSAwO1xyXG5cdFx0dGhpcy5pbWFnZSA9IGltYWdlO1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoIHx8IHRoaXMuaW1hZ2Uud2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmltYWdlLmhlaWdodDtcclxuXHRcdHRoaXMuY3ggPSBjeCB8fCAwO1xyXG5cdFx0dGhpcy5jeSA9IGN5IHx8IDA7XHJcblx0fVxyXG5cdGdldCBjeCgpIHtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCArIHRoaXMud2lkdGggKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0Z2V0IGN5KCkge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAwLjUpO1xyXG5cdH1cclxuXHJcblx0c2V0IGN4KHZhbHVlKSB7XHJcblx0XHR0aGlzLnggPSBNYXRoLnJvdW5kKHZhbHVlIC0gdGhpcy53aWR0aCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRzZXQgY3kodmFsdWUpIHtcclxuXHRcdHRoaXMueSA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLmhlaWdodCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRkcmF3KGN0eCkge1xyXG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUvc3ByaXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==