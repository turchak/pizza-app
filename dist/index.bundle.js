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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmUzN2FlYTlmMjE3MDhlOTJlYTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvY3JlYXRlLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaG9zdCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJvbkJlZm9yZVVubW91bnQiLCJjaGlsZHJlbiIsInJlbmRlciIsImlubmVySFRNTCIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvSHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3RyaW5nIiwiY29udGVudCIsIlJBTkRPTSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRPTUFJTiIsIklOR1JFRElFTlRTX1VSTCIsIlRBR19VUkwiLCJVU0VSX1VSTCIsIkNSRUFURV9QSVpaQSIsIlBJWlpBX0xJU1QiLCJBdXRoU2VydmljZSIsIl90b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfY2xhaW1zIiwiSlNPTiIsInBhcnNlIiwibG9naW5VcmwiLCJzdG9yZVVybCIsImNyZWF0ZVVybCIsInRva2VuSXNOb3RFeHBpcmVkIiwiY2xlYXJTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInRva2VuIiwiY2xhaW1zIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm9rIiwiYW5zd2VyIiwicGFyc2VKd3RDbGFpbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YXR1cyIsInJlamVjdCIsImp3dFRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsInNldEl0ZW0iLCJBVVRIX1NFUlZJQ0UiLCJGb290ZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJIZWFkZXIiLCJpc0F1dGhvcml6ZWQiLCJsb2dpbkJ1dHRvbiIsImxvZ291dEJ1dHRvbiIsInVzZXJCdXR0b24iLCJyZWdpc3RyYXRpb25CdXR0b24iLCJoZWFkZXIiLCJmcmFnbWVudCIsIkF1dGhIdHRwU2VydmljZSIsInVybCIsIkVycm9yIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsIkFVVEhfSFRUUF9TRVJWSUNFIiwiQVBQX1JPVVRFUiIsInF1ZXJ5U2VsZWN0b3IiLCJyb3V0ZXMiLCJhdXRoR3VhcmQiLCJyZXN1bHQiLCJzdWNjZXNzIiwicmVkaXJlY3QiLCJSb3V0ZXIiLCJhY3RpdmVSb3V0ZSIsImFjdGl2ZUNvbXBvbmVudCIsImhhbmRsZVVybENoYW5nZSIsImJpbmQiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1cGRhdGVTdGF0ZSIsInVwZGF0ZSIsInNsaWNlIiwiTG9naW4iLCJoYW5kbGVTdWJtaXQiLCJsb2dpbiIsImZvb3RlciIsImV2IiwicHJldmVudERlZmF1bHQiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibGlzdCIsImdldFBpenphTGlzdCIsImdldCIsInBpenphcyIsInJlc3VsdHMiLCJjb250YWluZXJTdHJpbmciLCJjb250YWluZXJGcmFnbWVudCIsImNvbnRhaW5lciIsIlBpenphTGlzdCIsInBpenphIiwiaW1nX3VybCIsInRpbWVfcHJlcGFyZWQiLCJwcmljZSIsImZvckVhY2giLCJsZW5ndGgiLCJpbm5lclRleHQiLCJjcmVhdGVQaXp6YSIsIlJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJzdG9yZXMiLCJnZXRTdG9yZXMiLCJzdG9yZUluZm8iLCJwYXNzd29yZF9yZXBlYXQiLCJlbWFpbCIsInN0b3JlX2lkIiwicGFyc2VJbnQiLCJzdG9yZSIsInNlbGVjdGVkSW5kZXgiLCJkYXRhc2V0IiwiaWQiLCJzdG9yZV9wYXNzd29yZCIsInJlZ2lzdGVyVXNlciIsInNlbGVjdCIsImhpZGRlbiIsIm9wdGlvbiIsImVsZW1lbnQiLCJmb3JtIiwiVXNlciIsImNyZWF0ZWQiLCJ2aXNpdGVkIiwiZ2V0VXNlckluZm8iLCJjcmVhdGVkX2F0IiwibGFzdF9sb2dpbiIsInVzZXIiLCJOZXdQaXp6YSIsInNpemUiLCJpbmdyZWRpZW50cyIsInRhZ3MiLCJoYW5kbGVDbGljayIsImhhbmRsZVJlc2l6ZSIsInJlbmRlckRhdGEiLCJjYW52YXMiLCJkZXNjcmlwdGlvbiIsImZkIiwiRm9ybURhdGEiLCJ0b0Jsb2IiLCJibG9iIiwicG9zdCIsImFsbCIsImdldEluZ3JlZGllbnRzIiwiZ2V0VGFncyIsImJ1dHRvbnNTdHJpbmciLCJidXR0b25zIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwicmVuZGVyVGFncyIsIm9uSW5pdCIsImZsYWciLCJpbmdyZWRpZW50c0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXdPcHRpb25zIiwibmV3SW5ncmVkaWVudHMiLCJpbmdyZWRpZW50SW5wdXQiLCJjaGVja2VkIiwicHVzaCIsImF0dHIiLCJzaXplRmllbGRzIiwic2l6ZUZpZWxkIiwibmV3U2l6ZSIsImZvcm1TdHJpbmciLCJpbmdyZWRpZW50c1N0cmluZyIsInJlZHVjZSIsImh0bWwiLCJpbWFnZV91cmwiLCJ0YWdzU3RyaW5nIiwiUGl6emFEYXRhU2VydmljZSIsIkNSRUFURV9EQVRBIiwiRHJhdyIsImNydXN0X3BpenphIiwiX2xvYWRJbWFnZSIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImltYWdlcyIsInNwcml0ZXMiLCJsYXN0T3B0aW9ucyIsImJ1ZmZlciIsInNwcml0ZXNQb29sIiwid2lkdGgiLCJoZWlnaHQiLCJfbG9hZFJlc291cmNlcyIsInJlc291cmNlcyIsInJlc291cmNlIiwiaW1hZ2UiLCJfc3RhcnRTZXQiLCJfZHJhdyIsImZpbHRlcmVkRWxlbSIsImVsZW0iLCJmaWx0ZXIiLCJ4IiwieSIsImNvbmNhdCIsInByZUJ1ZmZlciIsImVsIiwiaW5jbHVkZXMiLCJfZ2VuZXJhdGVTcHJpdGUiLCJjb3VudCIsImkiLCJpbmdyZWRpZW50IiwiY2xlYXJSZWN0Iiwic3ByaXRlIiwiZHJhdyIsInByb21pc2VzIiwibWFwIiwiaW5ncl91cmwiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJlIiwic3JjIiwiY3Jvc3NPcmlnaW4iLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsImRyYXdJbWFnZSIsInJvdW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFLQyxNQUFMLEdBQWNBLFVBQVUsS0FBS0ksS0FBTCxDQUFXSixNQUFuQztBQUNBLE9BQUtrQyxFQUFMLEdBQVVBLE1BQU0sQ0FBaEI7QUFDQSxPQUFLQyxFQUFMLEdBQVVBLE1BQU0sQ0FBaEI7QUFDQTs7Ozt1QkFpQkk3QyxHLEVBQUs7QUFDVEEsT0FBSThDLFNBQUosQ0FBYyxLQUFLaEMsS0FBbkIsRUFBMEIsS0FBS00sQ0FBL0IsRUFBa0MsS0FBS0MsQ0FBdkMsRUFBMEMsS0FBS1osS0FBL0MsRUFBc0QsS0FBS0MsTUFBM0Q7QUFDQTs7O3NCQWxCUTtBQUNSLFVBQU9sTyxLQUFLdVEsS0FBTCxDQUFXLEtBQUszQixDQUFMLEdBQVMsS0FBS1gsS0FBTCxHQUFhLEdBQWpDLENBQVA7QUFDQSxHO29CQU1NN0csSyxFQUFPO0FBQ2IsUUFBS3dILENBQUwsR0FBUzVPLEtBQUt1USxLQUFMLENBQVduSixRQUFRLEtBQUs2RyxLQUFMLEdBQWEsR0FBaEMsQ0FBVDtBQUNBOzs7c0JBTlE7QUFDUixVQUFPak8sS0FBS3VRLEtBQUwsQ0FBVyxLQUFLMUIsQ0FBTCxHQUFTLEtBQUtYLE1BQUwsR0FBYyxHQUFsQyxDQUFQO0FBQ0EsRztvQkFNTTlHLEssRUFBTztBQUNiLFFBQUt5SCxDQUFMLEdBQVM3TyxLQUFLdVEsS0FBTCxDQUFXbkosUUFBUSxLQUFLOEcsTUFBTCxHQUFjLEdBQWpDLENBQVQ7QUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTM3YWVhOWYyMTcwOGU5MmVhMCIsImNsYXNzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcclxuXHRcdHRoaXMuaG9zdCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG5leHRQcm9wcykge1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuXHRcdHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuXHR9XHJcblx0dW5tb3VudCgpIHtcclxuXHRcdHRoaXMub25CZWZvcmVVbm1vdW50KCk7XHJcblx0fVxyXG5cdG9uQmVmb3JlVW5tb3VudCgpIHt9XHJcblx0b25CZWZvcmVVcGRhdGUobmV4dFByb3BzKSB7fVxyXG5cdGdldCBuYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cdF9yZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0aWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQoY2hpbGRyZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmhvc3Q7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvY29tcG9uZW50LmpzIiwiZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cmluZztcclxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5ET00gPSAobWluLCBtYXgpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwiZXhwb3J0IGNvbnN0IERPTUFJTiA9ICdodHRwczovL3BpenphLXRlbGUuZ2EnO1xyXG5leHBvcnQgY29uc3QgSU5HUkVESUVOVFNfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvaW5ncmVkaWVudC9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFRBR19VUkwgPSBgJHtET01BSU59L2FwaS92MS90YWcvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBVU0VSX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvbXlfaW5mb2A7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUElaWkEgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9jcmVhdGVgO1xyXG5leHBvcnQgY29uc3QgUElaWkFfTElTVCA9IGAke0RPTUFJTn0vYXBpL3YxL3BpenphL2xpc3RgO1xyXG4gICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NvbnN0YW50cy5qcyIsImltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBBdXRoU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2xhaW1zJykpO1xyXG5cdFx0dGhpcy5sb2dpblVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvbG9naW5gO1xyXG5cdFx0dGhpcy5zdG9yZVVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3N0b3JlL2xpc3RgO1xyXG5cdFx0dGhpcy5jcmVhdGVVcmwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL2NyZWF0ZWA7XHJcblx0fVxyXG5cclxuXHRnZXQgdG9rZW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdG9rZW47XHJcblx0fVxyXG5cclxuXHRzZXQgdG9rZW4odG9rZW4pIHtcclxuXHRcdHRoaXMuX3Rva2VuID0gdG9rZW47XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcblx0fVxyXG5cclxuXHRnZXQgY2xhaW1zKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NsYWltcztcclxuXHR9XHJcblxyXG5cdHNldCBjbGFpbXMoY2xhaW1zKSB7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBjbGFpbXM7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2xhaW1zJywgSlNPTi5zdHJpbmdpZnkoY2xhaW1zKSk7XHJcblx0fVxyXG5cclxuXHRpc0F1dGhvcml6ZWQoKSB7XHJcblx0XHRpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSByZXR1cm4gZmFsc2U7XHJcblx0XHRpZiAoIXRoaXMudG9rZW5Jc05vdEV4cGlyZWQoKSkge1xyXG5cdFx0XHR0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RvcmFnZSgpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IG51bGw7XHJcblx0XHR0aGlzLl90b2tlbiA9IG51bGw7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjbGFpbXMnKTtcclxuXHR9XHJcblxyXG5cdHRva2VuSXNOb3RFeHBpcmVkKCkge1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuKSByZXR1cm4gZmFsc2U7XHJcblx0XHRyZXR1cm4gdGhpcy5jbGFpbXMuZXhwICogMTAwMCA+IERhdGUubm93KCk7XHJcblx0fVxyXG5cclxuXHRzdG9yZUluZm8oKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5zdG9yZVVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRsb2dpblVzZXIoZGF0YSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycygpLmFwcGVuZCgnQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKSxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMubG9naW5VcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcy5vaykge1xyXG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudG9rZW4gPSBhbnN3ZXIudG9rZW47XHJcblx0XHRcdFx0XHR0aGlzLmNsYWltcyA9IHRoaXMucGFyc2VKd3RDbGFpbXMoYW5zd2VyLnRva2VuKTtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBhbnN3ZXIsIHN0YXR1czogcmVzLnN0YXR1cyB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiBQcm9taXNlLnJlamVjdCh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZWdpc3RlclVzZXIoZGF0YSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLmNyZWF0ZVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRwYXJzZUp3dENsYWltcyhqd3RUb2tlbikge1xyXG5cdFx0aWYgKGp3dFRva2VuKSB7XHJcblx0XHRcdGxldCBiYXNlNjRVcmwgPSBqd3RUb2tlbi5zcGxpdCgnLicpWzFdO1xyXG5cdFx0XHRsZXQgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpO1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX1NFUlZJQ0UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGFkZHJlc3M+S290dGFucywgS290dGFucyBTcnQuIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNTc3Nzg4ODdcIj50ZWwuIDU3Ny03ODgtODc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+UGl6emEgTWFuYWdlciAmY29weTtcclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDEtMDFcIj4yMDE4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvL1RPRE86IG5lZWQgZGVsZXRlIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJsb2dpbl9fYnV0dG9uLWxpbmtcIj5zaWduIGluPC9hPlxyXG5cdFx0Y29uc3QgaXNBdXRob3JpemVkID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluXCI+c2lnbiBpbjwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgbG9nb3V0QnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dvdXRcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1vdXRcIj5zaWduIG91dDwvYT5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgdXNlckJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvdXNlclwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluZm9cIj51c2VyIGluZm88L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvcmVnaXN0cmF0aW9uXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tdXBcIj5zaWduIHVwPC9hPlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY3VycmVudC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNjbG9ja1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMi0wMyAxMjowMTo0OFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCIjL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2dvXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJhdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyBsb2dvdXRCdXR0b24gOiBsb2dpbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAke2lzQXV0aG9yaXplZCA/IHVzZXJCdXR0b24gOiByZWdpc3RyYXRpb25CdXR0b259IFxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChoZWFkZXIpO1xyXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmNsYXNzIEF1dGhIdHRwU2VydmljZSB7XHJcblx0Z2V0KHVybCkge1xyXG5cdFx0aWYgKCFBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm9uLWF1dGhvcml6ZWQgcmVxdWVzdCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZldGNoKHVybCwge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cG9zdCh1cmwsIGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSkudGhlbihcclxuXHRcdFx0cmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGF0Y2goKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9IVFRQX1NFUlZJQ0UgPSBuZXcgQXV0aEh0dHBTZXJ2aWNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vZnJhbWV3b3JrL3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVIgPSBuZXcgUm91dGVyKHsgaG9zdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSwgcm91dGVzIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW5kZXguanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoR3VhcmQgPSAoKSA9PiB7XHJcblx0Y29uc3QgcmVzdWx0ID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpXHJcblx0XHQ/IFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUgfSlcclxuXHRcdDogUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogZmFsc2UsIHJlZGlyZWN0OiAnL2xvZ2luJyB9KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgYXV0aEd1YXJkIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0Y29uc3QgeyByb3V0ZXMsIGhvc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0cm91dGVzLFxyXG5cdFx0XHRhY3RpdmVSb3V0ZTogbnVsbCxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBob3N0O1xyXG5cdFx0dGhpcy5oYW5kbGVVcmxDaGFuZ2UgPSB0aGlzLmhhbmRsZVVybENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5hcHBseVJvdXRlID0gdGhpcy5hcHBseVJvdXRlLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHBhdGgoKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVVcmxDaGFuZ2UodXJsKSB7XHJcblx0XHRjb25zdCB7IHJvdXRlcywgYWN0aXZlUm91dGUgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCBuZXh0Um91dGUgPSByb3V0ZXMuZmluZCgoeyBocmVmIH0pID0+IGhyZWYgPT09IHVybCk7XHJcblxyXG5cdFx0aWYgKG5leHRSb3V0ZSAmJiBuZXh0Um91dGUgIT09IGFjdGl2ZVJvdXRlKSB7XHJcblx0XHRcdGlmIChuZXh0Um91dGUucmVkaXJlY3RUbykge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhbmRsZVJlZGlyZWN0KG5leHRSb3V0ZS5yZWRpcmVjdFRvKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5sb2dvdXQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9nb3V0Jyk7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2dvdXQobmV4dFJvdXRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRSb3V0ZS5vbkVudGVyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ29uRW50ZXInKTtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hcHBseVJvdXRlKG5leHRSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVMb2dvdXQobmV4dFJvdXRlKSB7XHJcblx0XHRuZXh0Um91dGUubG9nb3V0KCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVSZWRpcmVjdCh1cmwpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlT25FbnRlcihuZXh0Um91dGUpIHtcclxuXHRcdGF1dGhHdWFyZCgpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0cmVzLnN1Y2Nlc3MgPyBudWxsIDogdGhpcy5oYW5kbGVSZWRpcmVjdChyZXMucmVkaXJlY3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhcHBseVJvdXRlKHJvdXRlKSB7XHJcblx0XHRjb25zdCB7IENvbXBvbmVudCB9ID0gcm91dGU7XHJcblx0XHRjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IG5ldyBDb21wb25lbnQoKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZVN0YXRlKHtcclxuXHRcdFx0YWN0aXZlUm91dGU6IHJvdXRlLFxyXG5cdFx0XHRhY3RpdmVDb21wb25lbnQ6IGNvbXBvbmVudEluc3RhbmNlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGFjdGl2ZUNvbXBvbmVudCB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdHJldHVybiBhY3RpdmVDb21wb25lbnQudXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwiaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlcic7XHJcbmltcG9ydCBOZXdQaXp6YSBmcm9tICcuL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZSc7XHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vdXRpbHMvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnJyxcclxuXHRcdHJlZGlyZWN0VG86ICcvJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJy8nLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBMb2dpbixcclxuXHRcdGhyZWY6ICcvbG9naW4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBSZWdpc3RyYXRpb24sXHJcblx0XHRocmVmOiAnL3JlZ2lzdHJhdGlvbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IFVzZXIsXHJcblx0XHRocmVmOiAnL3VzZXInLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBBcHAsXHJcblx0XHRocmVmOiAnL2xvZ291dCcsXHJcblx0XHRsb2dvdXQ6IEFVVEhfU0VSVklDRS5jbGVhclN0b3JhZ2UsXHJcblx0XHRvbkVudGVyOiBhdXRoR3VhcmQsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IE5ld1BpenphLFxyXG5cdFx0aHJlZjogJy9jcmVhdGUnLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vbG9naW4uZm9ybSc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxvZ2luID0gbmV3IExvZ2luRm9ybSgpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCB0aGlzLmxvZ2luLnVwZGF0ZSgpLCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcclxuaW1wb3J0IHsgQVBQX1JPVVRFUiB9IGZyb20gJy4uLy4uL2luZGV4JztcclxuXHJcbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBudWxsLFxyXG5cdFx0XHRwYXNzd29yZDogbnVsbCxcclxuXHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luJyk7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHR9O1xyXG5cdFx0QVVUSF9TRVJWSUNFLmxvZ2luVXNlcihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogbnVsbCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdFx0XHRcdEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RhdHVzID0+IHtcclxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gc3RhdHVzLmFuc3dlci5lcnJvcjtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHRleHQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBtZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiB2YWx1ZT0ke1xyXG5cdHVzZXJuYW1lID8gdXNlcm5hbWUgOiAnJ1xyXG59PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIHZhbHVlPSR7XHJcblx0cGFzc3dvcmQgPyBwYXNzd29yZCA6ICcnXHJcbn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChsb2dpbik7XHJcblxyXG5cdFx0aWYgKG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5tZXNzYWdlLnVwZGF0ZSh7IHRleHQ6IG1lc3NhZ2UgfSk7XHJcblx0XHRcdGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbl9fYnV0dG9uJykuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRXJyb3JNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZXJyb3JfX2NvbnRhaW5lcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fdGV4dCcpO1xyXG5cdFx0ZXJyb3IuaW5uZXJIVE1MID0gdGV4dDtcclxuXHRcdHJldHVybiBlcnJvcjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgUGl6emFMaXN0IGZyb20gJy4uL2xpc3QvbGlzdCc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC1odHRwJztcclxuaW1wb3J0IHsgUElaWkFfTElTVCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxpc3QgPSBuZXcgUGl6emFMaXN0KCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuZ2V0UGl6emFMaXN0KCk7XHJcblx0fVxyXG5cclxuXHRnZXRQaXp6YUxpc3QoKSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFBJWlpBX0xJU1QpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0dGhpcy5saXN0LnVwZGF0ZSh7XHJcblx0XHRcdFx0cGl6emFzOiByZXMucmVzdWx0cyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuXHRcdDxtYWluIGNsYXNzPVwibWFpbiBwaXp6YVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBpenphX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjL2NyZWF0ZVwiIGNsYXNzPVwiYnV0dG9uIHBpenphX19hZGRcIj5hZGQgcGl6emE8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuXHRcdGA7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyRnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lckZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waXp6YV9fY29udGFpbmVyJyk7XHJcblxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmxpc3QudXBkYXRlKCkpO1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGNvbnRhaW5lckZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC9hcHAuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQaXp6YShwaXp6YXMpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuXHRcdGNvbnN0IGxpc3QgPSBwaXp6YSA9PiB7XHJcblx0XHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGl6emFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwaXp6YV9faW1nXCIgc3JjPVwiJHtET01BSU59LyR7cGl6emEuaW1nX3VybH1cIiBhbHQ9XCIke3BpenphLm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwaXp6YV9fbmFtZVwiPiR7cGl6emEubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHRpbWUgY2xhc3M9XCJwaXp6YV9fdGltZVwiIGRhdGV0aW1lPVwiJHtwaXp6YS50aW1lX3ByZXBhcmVkfVwiPiR7XHJcblx0cGl6emEudGltZV9wcmVwYXJlZFxyXG59PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaXp6YV9fcXVldWUtbnVtYmVyXCI+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2V0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmV0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjA0OjAwXCI+NDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cGl6emEucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXHJcbiAgICAgICAgYDtcclxuXHRcdH07XHJcblxyXG5cdFx0cGl6emFzLmZvckVhY2gocGl6emEgPT4ge1xyXG5cdFx0XHRjb250YWluZXIuaW5uZXJIVE1MICs9IGxpc3QocGl6emEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0XHRgO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRhaW5lckZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBjb250YWluZXJGcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9fY29udGFpbmVyJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMpIHtcclxuXHRcdFx0Y29uc3QgeyBwaXp6YXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0XHRpZiAocGl6emFzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdGNvbnRhaW5lci5pbm5lclRleHQgPSAnTm8gcGl6emFzIDooJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKHRoaXMuY3JlYXRlUGl6emEocGl6emFzKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29udGFpbmVyO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaXp6YUxpc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4vcmVnaXN0cmF0aW9uLmZvcm0nO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIHRoaXMucmVnaXN0cmF0aW9uLnVwZGF0ZSgpLCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHN0b3JlczogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb24nKTtcclxuXHRcdHRoaXMuZ2V0U3RvcmVzKCk7XHJcblx0fVxyXG5cclxuXHRnZXRTdG9yZXMoKSB7XHJcblx0XHRBVVRIX1NFUlZJQ0Uuc3RvcmVJbmZvKCkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLnN0YXRlLnN0b3JlcyA9IHJlc3VsdDtcclxuXHRcdFx0dGhpcy51cGRhdGVTdGF0ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VybmFtZTogZXYudGFyZ2V0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmQ6IGV2LnRhcmdldC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkX3JlcGVhdDogZXYudGFyZ2V0LnBhc3N3b3JkX3JlcGVhdC52YWx1ZS50cmltKCksXHJcblx0XHRcdGVtYWlsOiBldi50YXJnZXQuZW1haWwudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRzdG9yZV9pZDogcGFyc2VJbnQoZXYudGFyZ2V0LnN0b3JlLm9wdGlvbnNbZXYudGFyZ2V0LnN0b3JlLnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQuaWQpLFxyXG5cdFx0XHRzdG9yZV9wYXNzd29yZDogZXYudGFyZ2V0LnN0b3JlX3Bhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdH07XHJcblx0XHRBVVRIX1NFUlZJQ0UucmVnaXN0ZXJVc2VyKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJyZWdpc3RyYXRpb25fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fdGl0bGVcIj5yZWdpc3RyYXRpb24gZm9ybTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVuaXF1ZS4gTWluIGxlbmd0aCAyIGNoYXJzLCBtYXggLSAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCI+UmUtZW50ZXIgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX3JlcGVhdFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIG1hdGNoIHdpdGggcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiPlN0b3JlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaGlkZGVuIGlkPVwicmVnaXN0cmF0aW9uLXN0b3JlXCIgbmFtZT1cInN0b3JlXCI+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCI+U3RvcmUgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJzdG9yZV9wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIHN0b3JlIHBhc3N3b3JkLiBNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gcmVnaXN0cmF0aW9uX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChyZWdpc3RyYXRpb24pO1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbl9fc2VsZWN0Jyk7XHJcblxyXG5cdFx0aWYgKHN0b3Jlcykge1xyXG5cdFx0XHRzZWxlY3QuaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cdFx0XHRcdG9wdGlvbi50ZXh0ID0gZWxlbWVudC5uYW1lO1xyXG5cdFx0XHRcdG9wdGlvbi5kYXRhc2V0LmlkID0gZWxlbWVudC5pZDtcclxuXHRcdFx0XHRzZWxlY3QuYWRkKG9wdGlvbik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC1odHRwJztcclxuaW1wb3J0IHsgVVNFUl9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBudWxsLFxyXG5cdFx0XHRlbWFpbDogbnVsbCxcclxuXHRcdFx0Y3JlYXRlZDogbnVsbCxcclxuXHRcdFx0dmlzaXRlZDogbnVsbCxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCd1c2VyLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuZ2V0VXNlckluZm8oKTtcclxuXHR9XHJcblxyXG5cdGdldFVzZXJJbmZvKCkge1xyXG5cdFx0QVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFVTRVJfVVJMKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRcdHVzZXJuYW1lOiByZXN1bHQudXNlcm5hbWUsXHJcblx0XHRcdFx0ZW1haWw6IHJlc3VsdC5lbWFpbCxcclxuXHRcdFx0XHRjcmVhdGVkOiByZXN1bHQuY3JlYXRlZF9hdCxcclxuXHRcdFx0XHR2aXNpdGVkOiByZXN1bHQubGFzdF9sb2dpbixcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBjcmVhdGVkLCB2aXNpdGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgdXNlciA9IGBcclxuICAgICAgICA8bWFpbiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7dXNlcm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4ke2VtYWlsfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHtjcmVhdGVkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHt2aXNpdGVkfTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh1c2VyKTtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyL3VzZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZS5kYXRhJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4sIENSRUFURV9QSVpaQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERSQVcgfSBmcm9tICcuL2RyYXcnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgtaHR0cCc7XHJcblxyXG5jbGFzcyBOZXdQaXp6YSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNpemU6ICc2MCcsXHJcblx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0XHRpbmdyZWRpZW50czogW10sXHJcblx0XHRcdHRhZ3M6IFtdLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5yZW5kZXJEYXRhKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCB7IHNpemUsIGluZ3JlZGllbnRzLCB0YWdzIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcblx0XHRjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fbmFtZS12YWx1ZScpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19kZXNjcmlwdGlvbicpO1xyXG5cclxuXHRcdGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmZC5hcHBlbmQoJ25hbWUnLCBuYW1lLnZhbHVlKTtcclxuXHRcdGZkLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbi52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ3NpemUnLCBzaXplKTtcclxuXHRcdGZkLmFwcGVuZCgnaW5ncmVkaWVudHMnLCBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50cykpO1xyXG5cdFx0ZmQuYXBwZW5kKCd0YWdzJywgSlNPTi5zdHJpbmdpZnkodGFncykpO1xyXG5cclxuXHRcdGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcblx0XHRcdGZkLmFwcGVuZCgnaW1hZ2UnLCBibG9iLCAnbmV3X2ltYWdlLnBuZycpO1xyXG5cdFx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UucG9zdChDUkVBVEVfUElaWkEsIGZkKS50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyRGF0YSgpIHtcclxuXHRcdFByb21pc2UuYWxsKFtDUkVBVEVfREFUQS5nZXRJbmdyZWRpZW50cygpLCBDUkVBVEVfREFUQS5nZXRUYWdzKCldKS50aGVuKCgpID0+IHtcclxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fb3B0aW9ucycpO1xyXG5cdFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDbGljayk7XHJcblx0XHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19jYW52YXMnKTtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHRcdFx0Y29uc3QgYnV0dG9uc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1jYW5jZWwnIHR5cGU9J2J1dHRvbic+Y2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1zZW5kJyB0eXBlPSdzdWJtaXQnPmNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHRcdFx0Y29uc3QgYnV0dG9ucyA9IHRvSHRtbChidXR0b25zU3RyaW5nKTtcclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmQodGhpcy5yZW5kZXJGb3JtKCkpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVySW5ncmVkaWVudHMoQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRhZ3MoQ1JFQVRFX0RBVEEudGFncykpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xyXG5cdFx0XHREUkFXLm9uSW5pdCh7XHJcblx0XHRcdFx0aG9zdDogY2FudmFzLFxyXG5cdFx0XHRcdGluZ3JlZGllbnRzOiBDUkVBVEVfREFUQS5pbmdyZWRpZW50cyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKGV2KSB7XHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuZmxhZyA9PT0gJ2luZ3JlZGllbnQnKSB7XHJcblx0XHRcdGNvbnN0IGluZ3JlZGllbnRzSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmxhZ10nKTtcclxuXHRcdFx0Y29uc3QgbmV3T3B0aW9ucyA9IFtdO1xyXG5cdFx0XHRjb25zdCBuZXdJbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0XHRpbmdyZWRpZW50c0lucHV0cy5mb3JFYWNoKGluZ3JlZGllbnRJbnB1dCA9PiB7XHJcblx0XHRcdFx0aWYgKGluZ3JlZGllbnRJbnB1dC5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRuZXdPcHRpb25zLnB1c2goaW5ncmVkaWVudElucHV0LnZhbHVlKTtcclxuXHRcdFx0XHRcdG5ld0luZ3JlZGllbnRzLnB1c2gocGFyc2VJbnQoaW5ncmVkaWVudElucHV0LmRhdGFzZXQuaWQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRvcHRpb25zOiBuZXdPcHRpb25zLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRpbmdyZWRpZW50czogbmV3SW5ncmVkaWVudHMsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuXHRcdFx0Y29uc3QgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0XHREUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVzaXplKGV2KSB7XHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuYXR0ciA9PT0gJ3NpemUnKSB7XHJcblx0XHRcdGNvbnN0IHNpemVGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRyXScpO1xyXG5cdFx0XHRzaXplRmllbGRzLmZvckVhY2goc2l6ZUZpZWxkID0+IHtcclxuXHRcdFx0XHRpZiAoc2l6ZUZpZWxkLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld1NpemUgPSBzaXplRmllbGQudmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xyXG5cdFx0XHRcdFx0XHRzaXplOiBuZXdTaXplLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0bGV0IHsgc2l6ZSwgb3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlckZvcm0oKSB7XHJcblx0XHRjb25zdCBmb3JtU3RyaW5nID0gYFxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fbmFtZSc+UGl6emEgTmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHJlcXVpcmVkIG1pbj0nMycgbWF4PScyNCcgY2xhc3M9J2NyZWF0ZV9fbmFtZS12YWx1ZSc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9J2NyZWF0ZV9fZGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZSc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX3NpemUtdGl0bGUnPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSczMCcgZGF0YS1hdHRyPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1zbWFsbFwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjQ1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzQ1JyBkYXRhLWF0dHI9J3NpemUnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLW1lZGl1bVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjYwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzYwJyBkYXRhLWF0dHI9J3NpemUnIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICAgIFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy10aXRsZSc+SW5ncmVkaWVudHM8aDI+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gdG9IdG1sKGZvcm1TdHJpbmcpO1xyXG5cdFx0Y29uc3Qgc2l6ZUZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fc2l6ZScpO1xyXG5cdFx0c2l6ZUZpZWxkcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcblx0XHRyZXR1cm4gZm9ybTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckluZ3JlZGllbnRzKGRhdGEpIHtcclxuXHRcdGNvbnN0IGluZ3JlZGllbnRzU3RyaW5nID0gYCAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG5cdFx0aHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pbnB1dCcgdHlwZT0nY2hlY2tib3gnIHZhbHVlPScke1xyXG5cdGRhdGEubmFtZVxyXG59JyBkYXRhLWZsYWc9J2luZ3JlZGllbnQnIGRhdGEtaWQ9JyR7ZGF0YS5pZH0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7RE9NQUlOfS8ke1xyXG5cdGRhdGEuaW1hZ2VfdXJsXHJcbn0nIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJyB0aXRsZT0nJHtkYXRhLmRlc2NyaXB0aW9ufScgZGF0YS1uYW1lPSdpbmdyZWRpZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH0sICcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPSdjcmVhdGVfX3RhZy10aXRsZSc+VGFnPGgyPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChpbmdyZWRpZW50c1N0cmluZyk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJUYWdzKGRhdGEpIHtcclxuXHRcdGNvbnN0IHRhZ3NTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX3RhZ3MnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuXHRcdGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fdGFncy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwodGFnc1N0cmluZyk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzPSdjcmVhdGUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29udGFpbmVyIGNyZWF0ZV9fY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9J2NyZWF0ZV9fdGl0bGUnPkNyZWF0ZSBQaXp6YTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fY2FudmFzJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fb3B0aW9ucyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBmcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UGl6emE7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJpbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4vYXV0aC1odHRwJztcclxuaW1wb3J0IHsgSU5HUkVESUVOVFNfVVJMLCBUQUdfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgUGl6emFEYXRhU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gW107XHJcblx0XHR0aGlzLnRhZ3MgPSBbXTtcclxuXHR9XHJcblxyXG5cdGdldEluZ3JlZGllbnRzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChJTkdSRURJRU5UU19VUkwpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldFRhZ3MoKSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFRBR19VUkwpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMudGFncyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0cmV0dXJuIGRhdGEucmVzdWx0cztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9EQVRBID0gbmV3IFBpenphRGF0YVNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NyZWF0ZS5kYXRhLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5jbGFzcyBEcmF3IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuY3J1c3RfcGl6emEgPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhL3N0YXRpYy9pbWFnZXMvcGl6emEucG5nJztcclxuXHRcdHRoaXMuX2xvYWRJbWFnZSA9IHRoaXMuX2xvYWRJbWFnZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KGRhdGEpIHtcclxuXHRcdHRoaXMuaG9zdCA9IGRhdGEuaG9zdDtcclxuXHRcdHRoaXMuc2l6ZSA9ICc2MCc7XHJcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0dGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0dGhpcy5jYW52YXNXaWR0aCA9IDMyMDtcclxuXHRcdHRoaXMuY2FudmFzSGVpZ2h0ID0gMzIwO1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IGRhdGEuaW5ncmVkaWVudHM7XHJcblx0XHR0aGlzLmltYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5zcHJpdGVzID0ge307XHJcblx0XHR0aGlzLmxhc3RPcHRpb25zID0gW107XHJcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG5cdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQ7XHJcblx0XHR0aGlzLl9sb2FkUmVzb3VyY2VzKCkudGhlbihyZXNvdXJjZXMgPT4ge1xyXG5cdFx0XHRyZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiAodGhpcy5pbWFnZXNbcmVzb3VyY2UubmFtZV0gPSByZXNvdXJjZS5pbWFnZSkpO1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKHRoaXMuY2FudmFzKTtcclxuXHRcdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X3N0YXJ0U2V0KCkge1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG5cdFx0Ly8gbGV0IHBpenphID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1sncGl6emEnXSwgMTYwLCAxNjAsIDMwMCwgMzAwKTtcclxuXHRcdGxldCBwaXp6YSA9IG5ldyBTcHJpdGUoXHJcblx0XHRcdHRoaXMuaW1hZ2VzWydwaXp6YSddLFxyXG5cdFx0XHQxNjAsXHJcblx0XHRcdDE2MCxcclxuXHRcdFx0MzAwICogYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gIC8gNjAsXHJcblx0XHRcdDMwMCAqIGAke3BhcnNlSW50KHRoaXMuc2l6ZSl9YCAvIDYwXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zcHJpdGVzWydwaXp6YSddID0gcGl6emE7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sLnB1c2gocGl6emEpO1xyXG5cdFx0dGhpcy5fZHJhdygpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSkge1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPT0gdGhpcy5idWZmZXIubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWxlbS5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA8IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xyXG5cdFx0XHRsZXQgcHJlQnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMubGFzdE9wdGlvbnMgPSBbXTtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHR0aGlzLmxhc3RPcHRpb25zLnB1c2goZWwpO1xyXG5cdFx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZWxlbS5pZCA9PT0gZWwpIHtcclxuXHRcdFx0XHRcdFx0cHJlQnVmZmVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBlbGVtLmlkLFxyXG5cdFx0XHRcdFx0XHRcdHNwcml0ZXM6IGVsZW0uc3ByaXRlcyxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGVsZW0uc3ByaXRlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQocHJlQnVmZmVyKTtcclxuXHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmxhc3RPcHRpb25zLmluY2x1ZGVzKGVsKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmxhc3RPcHRpb25zLnB1c2goZWwpO1xyXG5cdFx0XHRcdFx0dGhpcy5fZ2VuZXJhdGVTcHJpdGUoZWwsIDEwKTtcclxuXHRcdFx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbC5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9nZW5lcmF0ZVNwcml0ZShuYW1lLCBjb3VudCkge1xyXG5cdFx0Y29uc3Qgc3ByaXRlcyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xyXG5cdFx0XHRsZXQgaW5ncmVkaWVudCA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbYCR7bmFtZX1gXSwgUkFORE9NKDcwLCAyNTApLCBSQU5ET00oNzAsIDI1MCkpO1xyXG5cdFx0XHRzcHJpdGVzLnB1c2goaW5ncmVkaWVudCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmJ1ZmZlci5wdXNoKHtcclxuXHRcdFx0aWQ6IG5hbWUsXHJcblx0XHRcdHNwcml0ZXM6IHNwcml0ZXMsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9kcmF3KCkge1xyXG5cdFx0dGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzV2lkdGgsIHRoaXMuY2FudmFzSGVpZ2h0KTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmRyYXcodGhpcy5jdHgpKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkUmVzb3VyY2VzKCkge1xyXG5cdFx0bGV0IHByb21pc2VzID0gW107XHJcblx0XHRwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJbWFnZSgncGl6emEnLCB0aGlzLmNydXN0X3BpenphKSk7XHJcblx0XHRwcm9taXNlcyA9IHByb21pc2VzLmNvbmNhdChcclxuXHRcdFx0dGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XHJcblx0XHRcdFx0bGV0IGluZ3JfdXJsID0gYCR7RE9NQUlOfS8ke2luZ3JlZGllbnQuaW1hZ2VfdXJsfWA7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2xvYWRJbWFnZShpbmdyZWRpZW50Lm5hbWUsIGluZ3JfdXJsKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdH1cclxuXHJcblx0X2xvYWRJbWFnZShuYW1lLCB1cmwpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoeyBuYW1lLCBpbWFnZSB9KTtcclxuXHRcdFx0aW1hZ2Uub25lcnJvciA9IGUgPT4gcmVqZWN0KGUpO1xyXG5cdFx0XHRpbWFnZS5zcmMgPSB1cmw7XHJcblx0XHRcdGltYWdlLndpZHRoID0gMjA7XHJcblx0XHRcdGltYWdlLmhlaWdodCA9IDIwO1xyXG5cdFx0XHRpbWFnZS5jcm9zc09yaWdpbiA9ICcnO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRFJBVyA9IG5ldyBEcmF3KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9kcmF3LmpzIiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcblx0Y29uc3RydWN0b3IoaW1hZ2UsIGN4LCBjeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0dGhpcy54ID0gMDtcclxuXHRcdHRoaXMueSA9IDA7XHJcblx0XHR0aGlzLmltYWdlID0gaW1hZ2U7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGggfHwgdGhpcy5pbWFnZS53aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG5cdFx0dGhpcy5jeCA9IGN4IHx8IDA7XHJcblx0XHR0aGlzLmN5ID0gY3kgfHwgMDtcclxuXHR9XHJcblx0Z2V0IGN4KCkge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy54ICsgdGhpcy53aWR0aCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY3koKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnkgKyB0aGlzLmhlaWdodCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRzZXQgY3godmFsdWUpIHtcclxuXHRcdHRoaXMueCA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLndpZHRoICogMC41KTtcclxuXHR9XHJcblxyXG5cdHNldCBjeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy55ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMuaGVpZ2h0ICogMC41KTtcclxuXHR9XHJcblxyXG5cdGRyYXcoY3R4KSB7XHJcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9zcHJpdGUuanMiXSwic291cmNlUm9vdCI6IiJ9