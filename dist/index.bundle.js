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
		return _this;
	}

	_createClass(App, [{
		key: 'onInit',
		value: function onInit() {
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
				return '\n            <article class="pizza">\n                <img class="pizza__img" src="' + _constants.DOMAIN + '/' + pizza.img_url + '" alt="' + pizza.name + '">\n                <h2 class="pizza__name">' + pizza.name + '</h2>\n\t\t\t\t<time class="pizza__time" datetime="\n\t\t\t\t' + pizza.time_prepared + '">' + pizza.time_prepared + '</time>\n                <span class="pizza__queue-number">#1</span>\n                <div class="pizza__eta">\n                    <span>eta</span>\n                    <time datetime="04:00">4</time>\n                    <span>min</span>\n                </div>\n                <div class="pizza__price">\n                    <span>$</span>\n                    <span>' + pizza.price + '</span>\n                </div>\n            </article> \n        ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTlkNTc0YzczMmMwZmVjNjQyYzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvY3JlYXRlLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlL3Nwcml0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaG9zdCIsIm9uSW5pdCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJvbkJlZm9yZVVubW91bnQiLCJjaGlsZHJlbiIsInJlbmRlciIsImlubmVySFRNTCIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvSHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3RyaW5nIiwiY29udGVudCIsIlJBTkRPTSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRPTUFJTiIsIklOR1JFRElFTlRTX1VSTCIsIlRBR19VUkwiLCJVU0VSX1VSTCIsIkNSRUFURV9QSVpaQSIsIlBJWlpBX0xJU1QiLCJBdXRoU2VydmljZSIsIl90b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfY2xhaW1zIiwiSlNPTiIsInBhcnNlIiwibG9naW5VcmwiLCJzdG9yZVVybCIsImNyZWF0ZVVybCIsInRva2VuSXNOb3RFeHBpcmVkIiwiY2xlYXJTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInRva2VuIiwiY2xhaW1zIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm9rIiwiYW5zd2VyIiwicGFyc2VKd3RDbGFpbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YXR1cyIsInJlamVjdCIsImp3dFRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsInNldEl0ZW0iLCJBVVRIX1NFUlZJQ0UiLCJGb290ZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJIZWFkZXIiLCJpc0F1dGhvcml6ZWQiLCJsb2dpbkJ1dHRvbiIsImxvZ291dEJ1dHRvbiIsInVzZXJCdXR0b24iLCJyZWdpc3RyYXRpb25CdXR0b24iLCJoZWFkZXIiLCJmcmFnbWVudCIsIkF1dGhIdHRwU2VydmljZSIsInVybCIsIkVycm9yIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsIkFVVEhfSFRUUF9TRVJWSUNFIiwiQVBQX1JPVVRFUiIsInF1ZXJ5U2VsZWN0b3IiLCJyb3V0ZXMiLCJhdXRoR3VhcmQiLCJyZXN1bHQiLCJzdWNjZXNzIiwicmVkaXJlY3QiLCJSb3V0ZXIiLCJhY3RpdmVSb3V0ZSIsImFjdGl2ZUNvbXBvbmVudCIsImhhbmRsZVVybENoYW5nZSIsImJpbmQiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1cGRhdGVTdGF0ZSIsInVwZGF0ZSIsInNsaWNlIiwiTG9naW4iLCJsb2dpbkZvcm0iLCJmb290ZXIiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImV2IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJsb2dpblVzZXIiLCJ0ZXh0IiwiZXJyb3IiLCJsb2dpblN0cmluZyIsImxvZ2luRnJhZ21lbnQiLCJlcnJvck1lc3NhZ2UiLCJhcHBlbmRDaGlsZCIsIkVycm9yTWVzc2FnZSIsIkFwcCIsImxpc3QiLCJnZXQiLCJwaXp6YXMiLCJyZXN1bHRzIiwiY29udGFpbmVyU3RyaW5nIiwiY29udGFpbmVyRnJhZ21lbnQiLCJjb250YWluZXIiLCJQaXp6YUxpc3QiLCJwaXp6YSIsImltZ191cmwiLCJ0aW1lX3ByZXBhcmVkIiwicHJpY2UiLCJmb3JFYWNoIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJSZWdpc3RyYXRpb24iLCJyZWdpc3RyYXRpb24iLCJSZWdpc3RyYXRpb25Gb3JtIiwic3RvcmVzIiwiZ2V0U3RvcmVzIiwic3RvcmVJbmZvIiwicGFzc3dvcmRfcmVwZWF0IiwiZW1haWwiLCJzdG9yZV9pZCIsInBhcnNlSW50Iiwic3RvcmUiLCJzZWxlY3RlZEluZGV4IiwiZGF0YXNldCIsImlkIiwic3RvcmVfcGFzc3dvcmQiLCJyZWdpc3RlclVzZXIiLCJzZWxlY3QiLCJoaWRkZW4iLCJvcHRpb24iLCJlbGVtZW50IiwiZm9ybSIsIlVzZXIiLCJjcmVhdGVkIiwidmlzaXRlZCIsImdldFVzZXJJbmZvIiwiY3JlYXRlZF9hdCIsImxhc3RfbG9naW4iLCJ1c2VyIiwiTmV3UGl6emEiLCJzaXplIiwiaW5ncmVkaWVudHMiLCJ0YWdzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSZXNpemUiLCJjYW52YXMiLCJkZXNjcmlwdGlvbiIsImZkIiwiRm9ybURhdGEiLCJ0b0Jsb2IiLCJibG9iIiwicG9zdCIsImFsbCIsImdldEluZ3JlZGllbnRzIiwiZ2V0VGFncyIsImJ1dHRvbnNTdHJpbmciLCJidXR0b25zIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwicmVuZGVyVGFncyIsImZsYWciLCJpbmdyZWRpZW50c0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXdPcHRpb25zIiwibmV3SW5ncmVkaWVudHMiLCJpbmdyZWRpZW50SW5wdXQiLCJjaGVja2VkIiwicHVzaCIsImF0dHIiLCJzaXplRmllbGRzIiwic2l6ZUZpZWxkIiwibmV3U2l6ZSIsImZvcm1TdHJpbmciLCJpbmdyZWRpZW50c1N0cmluZyIsInJlZHVjZSIsImh0bWwiLCJpbWFnZV91cmwiLCJ0YWdzU3RyaW5nIiwiUGl6emFEYXRhU2VydmljZSIsIkNSRUFURV9EQVRBIiwiRHJhdyIsImNydXN0X3BpenphIiwiX2xvYWRJbWFnZSIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImltYWdlcyIsInNwcml0ZXMiLCJsYXN0T3B0aW9ucyIsImJ1ZmZlciIsInNwcml0ZXNQb29sIiwid2lkdGgiLCJoZWlnaHQiLCJfbG9hZFJlc291cmNlcyIsInJlc291cmNlcyIsInJlc291cmNlIiwiaW1hZ2UiLCJfc3RhcnRTZXQiLCJfZHJhdyIsImZpbHRlcmVkRWxlbSIsImVsZW0iLCJmaWx0ZXIiLCJ4IiwieSIsImNvbmNhdCIsInByZUJ1ZmZlciIsImVsIiwiaW5jbHVkZXMiLCJfZ2VuZXJhdGVTcHJpdGUiLCJjb3VudCIsImkiLCJpbmdyZWRpZW50IiwiY2xlYXJSZWN0Iiwic3ByaXRlIiwiZHJhdyIsInByb21pc2VzIiwibWFwIiwiaW5ncl91cmwiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJlIiwic3JjIiwiY3Jvc3NPcmlnaW4iLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsImRyYXdJbWFnZSIsInJvdW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LENBQWMsS0FBS2hDLEtBQW5CLEVBQTBCLEtBQUtNLENBQS9CLEVBQWtDLEtBQUtDLENBQXZDLEVBQTBDLEtBQUtaLEtBQS9DLEVBQXNELEtBQUtDLE1BQTNEO0FBQ0E7OztzQkFsQlE7QUFDUixVQUFPak8sS0FBS3NRLEtBQUwsQ0FBVyxLQUFLM0IsQ0FBTCxHQUFTLEtBQUtYLEtBQUwsR0FBYSxHQUFqQyxDQUFQO0FBQ0EsRztvQkFNTTVHLEssRUFBTztBQUNiLFFBQUt1SCxDQUFMLEdBQVMzTyxLQUFLc1EsS0FBTCxDQUFXbEosUUFBUSxLQUFLNEcsS0FBTCxHQUFhLEdBQWhDLENBQVQ7QUFDQTs7O3NCQU5RO0FBQ1IsVUFBT2hPLEtBQUtzUSxLQUFMLENBQVcsS0FBSzFCLENBQUwsR0FBUyxLQUFLWCxNQUFMLEdBQWMsR0FBbEMsQ0FBUDtBQUNBLEc7b0JBTU03RyxLLEVBQU87QUFDYixRQUFLd0gsQ0FBTCxHQUFTNU8sS0FBS3NRLEtBQUwsQ0FBV2xKLFFBQVEsS0FBSzZHLE1BQUwsR0FBYyxHQUFqQyxDQUFUO0FBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTlkNTc0YzczMmMwZmVjNjQyYzQiLCJjbGFzcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHMgfHwge307XHJcblx0XHR0aGlzLnN0YXRlID0ge307XHJcblx0XHR0aGlzLmhvc3QgPSBudWxsO1xyXG5cdFx0dGhpcy5vbkluaXQoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHRvbkluaXQoKSB7fVxyXG5cclxuXHR1cGRhdGUobmV4dFByb3BzKSB7XHJcblx0XHR0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0dW5tb3VudCgpIHtcclxuXHRcdHRoaXMub25CZWZvcmVVbm1vdW50KCk7XHJcblx0fVxyXG5cclxuXHRvbkJlZm9yZVVubW91bnQoKSB7fVxyXG5cclxuXHRvbkJlZm9yZVVwZGF0ZShuZXh0UHJvcHMpIHt9XHJcblxyXG5cdGdldCBuYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cdF9yZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0aWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0dGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaG9zdC5hcHBlbmQoY2hpbGRyZW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmhvc3Q7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvY29tcG9uZW50LmpzIiwiZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cmluZztcclxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5ET00gPSAobWluLCBtYXgpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwiZXhwb3J0IGNvbnN0IERPTUFJTiA9ICdodHRwczovL3BpenphLXRlbGUuZ2EnO1xyXG5leHBvcnQgY29uc3QgSU5HUkVESUVOVFNfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvaW5ncmVkaWVudC9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFRBR19VUkwgPSBgJHtET01BSU59L2FwaS92MS90YWcvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBVU0VSX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvbXlfaW5mb2A7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUElaWkEgPSBgJHtET01BSU59L2FwaS92MS9waXp6YS9jcmVhdGVgO1xyXG5leHBvcnQgY29uc3QgUElaWkFfTElTVCA9IGAke0RPTUFJTn0vYXBpL3YxL3BpenphL2xpc3RgO1xyXG4gICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NvbnN0YW50cy5qcyIsImltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBBdXRoU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cdFx0dGhpcy5fY2xhaW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2xhaW1zJykpO1xyXG5cdFx0dGhpcy5sb2dpblVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvbG9naW5gO1xyXG5cdFx0dGhpcy5zdG9yZVVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3N0b3JlL2xpc3RgO1xyXG5cdFx0dGhpcy5jcmVhdGVVcmwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL2NyZWF0ZWA7XHJcblx0fVxyXG5cclxuXHRnZXQgdG9rZW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdG9rZW47XHJcblx0fVxyXG5cclxuXHRzZXQgdG9rZW4odG9rZW4pIHtcclxuXHRcdHRoaXMuX3Rva2VuID0gdG9rZW47XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcblx0fVxyXG5cclxuXHRnZXQgY2xhaW1zKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NsYWltcztcclxuXHR9XHJcblxyXG5cdHNldCBjbGFpbXMoY2xhaW1zKSB7XHJcblx0XHR0aGlzLl9jbGFpbXMgPSBjbGFpbXM7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2xhaW1zJywgSlNPTi5zdHJpbmdpZnkoY2xhaW1zKSk7XHJcblx0fVxyXG5cclxuXHRpc0F1dGhvcml6ZWQoKSB7XHJcblx0XHRpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSByZXR1cm4gZmFsc2U7XHJcblx0XHRpZiAoIXRoaXMudG9rZW5Jc05vdEV4cGlyZWQoKSkge1xyXG5cdFx0XHR0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RvcmFnZSgpIHtcclxuXHRcdHRoaXMuX2NsYWltcyA9IG51bGw7XHJcblx0XHR0aGlzLl90b2tlbiA9IG51bGw7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjbGFpbXMnKTtcclxuXHR9XHJcblxyXG5cdHRva2VuSXNOb3RFeHBpcmVkKCkge1xyXG5cdFx0aWYgKCF0aGlzLnRva2VuKSByZXR1cm4gZmFsc2U7XHJcblx0XHRyZXR1cm4gdGhpcy5jbGFpbXMuZXhwICogMTAwMCA+IERhdGUubm93KCk7XHJcblx0fVxyXG5cclxuXHRzdG9yZUluZm8oKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5zdG9yZVVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRsb2dpblVzZXIoZGF0YSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycygpLmFwcGVuZCgnQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKSxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGZldGNoKHRoaXMubG9naW5VcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcy5vaykge1xyXG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudG9rZW4gPSBhbnN3ZXIudG9rZW47XHJcblx0XHRcdFx0XHR0aGlzLmNsYWltcyA9IHRoaXMucGFyc2VKd3RDbGFpbXMoYW5zd2VyLnRva2VuKTtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBhbnN3ZXIsIHN0YXR1czogcmVzLnN0YXR1cyB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiBQcm9taXNlLnJlamVjdCh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZWdpc3RlclVzZXIoZGF0YSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBmZXRjaCh0aGlzLmNyZWF0ZVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRwYXJzZUp3dENsYWltcyhqd3RUb2tlbikge1xyXG5cdFx0aWYgKGp3dFRva2VuKSB7XHJcblx0XHRcdGxldCBiYXNlNjRVcmwgPSBqd3RUb2tlbi5zcGxpdCgnLicpWzFdO1xyXG5cdFx0XHRsZXQgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpO1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX1NFUlZJQ0UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YWRkcmVzcz5Lb3R0YW5zLCBLb3R0YW5zIFNydC4gMSxcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis1Nzc3ODg4N1wiPnRlbC4gNTc3LTc4OC04NzwvYT5cclxuICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5QaXp6YSBNYW5hZ2VyICZjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMS0wMVwiPjIwMTg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Ly9UT0RPOiBuZWVkIGRlbGV0ZSA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwibG9naW5fX2J1dHRvbi1saW5rXCI+c2lnbiBpbjwvYT5cclxuXHRcdGNvbnN0IGlzQXV0aG9yaXplZCA9IEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKTtcclxuXHJcblx0XHRjb25zdCBsb2dpbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvbG9naW5cIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pblwiPnNpZ24gaW48L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IGxvZ291dEJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvbG9nb3V0XCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tb3V0XCI+c2lnbiBvdXQ8L2E+XHJcbiAgICAgICAgYDtcclxuXHRcdGNvbnN0IHVzZXJCdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3VzZXJcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pbmZvXCI+dXNlciBpbmZvPC9hPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCByZWdpc3RyYXRpb25CdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3JlZ2lzdHJhdGlvblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLXVwXCI+c2lnbiB1cDwvYT5cclxuICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImN1cnJlbnQtdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjY2xvY2tcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDItMDMgMTI6MDE6NDhcIj4xMjowMTo0ODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxvZ29cIiBocmVmPVwiIy9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjbG9nb1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNBdXRob3JpemVkID8gbG9nb3V0QnV0dG9uIDogbG9naW5CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc0F1dGhvcml6ZWQgPyB1c2VyQnV0dG9uIDogcmVnaXN0cmF0aW9uQnV0dG9ufSBcclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaGVhZGVyKTtcclxuXHRcdHJldHVybiBmcmFnbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5jbGFzcyBBdXRoSHR0cFNlcnZpY2Uge1xyXG5cdGdldCh1cmwpIHtcclxuXHRcdGlmICghQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vbi1hdXRob3JpemVkIHJlcXVlc3QnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtBVVRIX1NFUlZJQ0UudG9rZW59YCxcclxuXHRcdFx0XHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBvc3QodXJsLCBkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2godXJsLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBkYXRhLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FVVEhfU0VSVklDRS50b2tlbn1gLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLFxyXG5cdFx0XHRyZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBhdGNoKCkge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfSFRUUF9TRVJWSUNFID0gbmV3IEF1dGhIdHRwU2VydmljZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC1odHRwLmpzIiwiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL2ZyYW1ld29yay9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSID0gbmV3IFJvdXRlcih7IGhvc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JyksIHJvdXRlcyB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2luZGV4LmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEd1YXJkID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJlc3VsdCA9IEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKVxyXG5cdFx0PyBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiB0cnVlIH0pXHJcblx0XHQ6IFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IGZhbHNlLCByZWRpcmVjdDogJy9sb2dpbicgfSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguZ3VhcmQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4uL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5cclxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdGNvbnN0IHsgcm91dGVzLCBob3N0IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHJvdXRlcyxcclxuXHRcdFx0YWN0aXZlUm91dGU6IG51bGwsXHJcblx0XHRcdGFjdGl2ZUNvbXBvbmVudDogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5ob3N0ID0gaG9zdDtcclxuXHRcdHRoaXMuaGFuZGxlVXJsQ2hhbmdlID0gdGhpcy5oYW5kbGVVcmxDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuYXBwbHlSb3V0ZSA9IHRoaXMuYXBwbHlSb3V0ZS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKSk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKTtcclxuXHR9XHJcblxyXG5cdGdldCBwYXRoKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlVXJsQ2hhbmdlKHVybCkge1xyXG5cdFx0Y29uc3QgeyByb3V0ZXMsIGFjdGl2ZVJvdXRlIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgbmV4dFJvdXRlID0gcm91dGVzLmZpbmQoKHsgaHJlZiB9KSA9PiBocmVmID09PSB1cmwpO1xyXG5cclxuXHRcdGlmIChuZXh0Um91dGUgJiYgbmV4dFJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xyXG5cdFx0XHRpZiAobmV4dFJvdXRlLnJlZGlyZWN0VG8pIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVSZWRpcmVjdChuZXh0Um91dGUucmVkaXJlY3RUbyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0Um91dGUubG9nb3V0KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlTG9nb3V0KG5leHRSb3V0ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0Um91dGUub25FbnRlcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdvbkVudGVyJyk7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVPbkVudGVyKG5leHRSb3V0ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYXBwbHlSb3V0ZShuZXh0Um91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aGFuZGxlTG9nb3V0KG5leHRSb3V0ZSkge1xyXG5cdFx0bmV4dFJvdXRlLmxvZ291dCgpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVkaXJlY3QodXJsKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcclxuXHR9XHJcblxyXG5cdGhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKSB7XHJcblx0XHRhdXRoR3VhcmQoKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdHJlcy5zdWNjZXNzID8gbnVsbCA6IHRoaXMuaGFuZGxlUmVkaXJlY3QocmVzLnJlZGlyZWN0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXBwbHlSb3V0ZShyb3V0ZSkge1xyXG5cdFx0Y29uc3QgeyBDb21wb25lbnQgfSA9IHJvdXRlO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTdGF0ZSh7XHJcblx0XHRcdGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuXHRcdFx0YWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gYWN0aXZlQ29tcG9uZW50LnVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsImltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXInO1xyXG5pbXBvcnQgTmV3UGl6emEgZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL3V0aWxzL2F1dGgnO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJycsXHJcblx0XHRyZWRpcmVjdFRvOiAnLycsXHJcblx0fSxcclxuXHR7XHJcblx0XHRDb21wb25lbnQ6IEFwcCxcclxuXHRcdGhyZWY6ICcvJyxcclxuXHRcdG9uRW50ZXI6IGF1dGhHdWFyZCxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogTG9naW4sXHJcblx0XHRocmVmOiAnL2xvZ2luJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogUmVnaXN0cmF0aW9uLFxyXG5cdFx0aHJlZjogJy9yZWdpc3RyYXRpb24nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBVc2VyLFxyXG5cdFx0aHJlZjogJy91c2VyJyxcclxuXHRcdG9uRW50ZXI6IGF1dGhHdWFyZCxcclxuXHR9LFxyXG5cdHtcclxuXHRcdENvbXBvbmVudDogQXBwLFxyXG5cdFx0aHJlZjogJy9sb2dvdXQnLFxyXG5cdFx0bG9nb3V0OiBBVVRIX1NFUlZJQ0UuY2xlYXJTdG9yYWdlLFxyXG5cdFx0b25FbnRlcjogYXV0aEd1YXJkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Q29tcG9uZW50OiBOZXdQaXp6YSxcclxuXHRcdGhyZWY6ICcvY3JlYXRlJyxcclxuXHRcdG9uRW50ZXI6IGF1dGhHdWFyZCxcclxuXHR9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcm91dGVzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2xvZ2luLmZvcm0nO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5sb2dpbkZvcm0gPSBuZXcgTG9naW5Gb3JtKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLmhlYWRlci51cGRhdGUoKSwgdGhpcy5sb2dpbkZvcm0udXBkYXRlKCksIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9ub3RpZmljYXRpb24vZXJyb3IubWVzc2FnZSc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgeyBBUFBfUk9VVEVSIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xyXG5cclxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRcdHBhc3N3b3JkOiBudWxsLFxyXG5cdFx0XHRtZXNzYWdlOiBudWxsLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2dpbicpO1xyXG5cdFx0dGhpcy5tZXNzYWdlID0gbmV3IEVycm9yTWVzc2FnZSgpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgaG9zdCA9IGV2LnRhcmdldDtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG5cdFx0fTtcclxuXHRcdEFVVEhfU0VSVklDRS5sb2dpblVzZXIoZGF0YSkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IG51bGwsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0XHRBUFBfUk9VVEVSLmhhbmRsZVJlZGlyZWN0KCcvJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXR1cyA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGV4dCA9IHN0YXR1cy5hbnN3ZXIuZXJyb3I7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdGUgPSB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdFx0XHRtZXNzYWdlOiB0ZXh0LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgbWVzc2FnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblx0XHRjb25zdCBsb2dpblN0cmluZyA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibG9naW5fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImxvZ2luX190aXRsZVwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpbi11c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJsb2dpbl9faW5wdXRcIiBpZD1cImxvZ2luLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHZhbHVlPVxyXG5cdFx0XHRcdCR7dXNlcm5hbWUgPyB1c2VybmFtZSA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJsb2dpbl9faW5wdXRcIiBpZD1cImxvZ2luLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgdmFsdWU9XHJcblx0XHRcdFx0JHtwYXNzd29yZCA/IHBhc3N3b3JkIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsb2dpbl9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5GcmFnbWVudCA9IHRvSHRtbChsb2dpblN0cmluZyk7XHJcblxyXG5cdFx0aWYgKG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5tZXNzYWdlLnVwZGF0ZSh7IHRleHQ6IG1lc3NhZ2UgfSk7XHJcblx0XHRcdGxvZ2luRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19idXR0b24nKS5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxvZ2luRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cdFx0cmV0dXJuIGxvZ2luRnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRXJyb3JNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZXJyb3JfX2NvbnRhaW5lcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fdGV4dCcpO1xyXG5cdFx0ZXJyb3IuaW5uZXJIVE1MID0gdGV4dDtcclxuXHRcdHJldHVybiBlcnJvcjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2Vycm9yLm1lc3NhZ2UuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgUGl6emFMaXN0IGZyb20gJy4uL2xpc3QvbGlzdCc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC1odHRwJztcclxuaW1wb3J0IHsgUElaWkFfTElTVCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmxpc3QgPSBuZXcgUGl6emFMaXN0KCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdCgpIHtcclxuXHRcdHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoUElaWkFfTElTVCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHR0aGlzLmxpc3QudXBkYXRlKHtcclxuXHRcdFx0XHRwaXp6YXM6IHJlcy5yZXN1bHRzLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG5cdFx0PG1haW4gY2xhc3M9XCJtYWluIHBpenphc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBpenphc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIy9jcmVhdGVcIiBjbGFzcz1cImJ1dHRvbiBhZGQtbGlua1wiPmFkZCBwaXp6YTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG5cdFx0YDtcclxuXHJcblx0XHRjb25zdCBjb250YWluZXJGcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY29udGFpbmVyRnJhZ21lbnQucXVlcnlTZWxlY3RvcignLnBpenphc19fY29udGFpbmVyJyk7XHJcblxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZCh0aGlzLmxpc3QudXBkYXRlKCkpO1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGNvbnRhaW5lckZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC9hcHAuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQaXp6YShwaXp6YXMpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuXHRcdGNvbnN0IGxpc3QgPSBwaXp6YSA9PiB7XHJcblx0XHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGl6emFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwaXp6YV9faW1nXCIgc3JjPVwiJHtET01BSU59LyR7cGl6emEuaW1nX3VybH1cIiBhbHQ9XCIke3BpenphLm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwaXp6YV9fbmFtZVwiPiR7cGl6emEubmFtZX08L2gyPlxyXG5cdFx0XHRcdDx0aW1lIGNsYXNzPVwicGl6emFfX3RpbWVcIiBkYXRldGltZT1cIlxyXG5cdFx0XHRcdCR7cGl6emEudGltZV9wcmVwYXJlZH1cIj4ke3BpenphLnRpbWVfcHJlcGFyZWR9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaXp6YV9fcXVldWUtbnVtYmVyXCI+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2V0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmV0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjA0OjAwXCI+NDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cGl6emEucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXHJcbiAgICAgICAgYDtcclxuXHRcdH07XHJcblxyXG5cdFx0cGl6emFzLmZvckVhY2gocGl6emEgPT4ge1xyXG5cdFx0XHRjb250YWluZXIuaW5uZXJIVE1MICs9IGxpc3QocGl6emEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0XHRgO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRhaW5lckZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBjb250YWluZXJGcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9fY29udGFpbmVyJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMpIHtcclxuXHRcdFx0Y29uc3QgeyBwaXp6YXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0XHRpZiAocGl6emFzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdGNvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKHRoaXMuY3JlYXRlUGl6emEocGl6emFzKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29udGFpbmVyO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaXp6YUxpc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4vcmVnaXN0cmF0aW9uLmZvcm0nO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbi1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChldikge1xyXG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIHRoaXMucmVnaXN0cmF0aW9uLnVwZGF0ZSgpLCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHN0b3JlczogbnVsbCxcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RyYXRpb24nKTtcclxuXHRcdHRoaXMuZ2V0U3RvcmVzKCk7XHJcblx0fVxyXG5cclxuXHRnZXRTdG9yZXMoKSB7XHJcblx0XHRBVVRIX1NFUlZJQ0Uuc3RvcmVJbmZvKCkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLnN0YXRlLnN0b3JlcyA9IHJlc3VsdDtcclxuXHRcdFx0dGhpcy51cGRhdGVTdGF0ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZXYpIHtcclxuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VybmFtZTogZXYudGFyZ2V0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuXHRcdFx0cGFzc3dvcmQ6IGV2LnRhcmdldC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcblx0XHRcdHBhc3N3b3JkX3JlcGVhdDogZXYudGFyZ2V0LnBhc3N3b3JkX3JlcGVhdC52YWx1ZS50cmltKCksXHJcblx0XHRcdGVtYWlsOiBldi50YXJnZXQuZW1haWwudmFsdWUudHJpbSgpLFxyXG5cdFx0XHRzdG9yZV9pZDogcGFyc2VJbnQoZXYudGFyZ2V0LnN0b3JlLm9wdGlvbnNbZXYudGFyZ2V0LnN0b3JlLnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQuaWQpLFxyXG5cdFx0XHRzdG9yZV9wYXNzd29yZDogZXYudGFyZ2V0LnN0b3JlX3Bhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuXHRcdH07XHJcblx0XHRBVVRIX1NFUlZJQ0UucmVnaXN0ZXJVc2VyKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJyZWdpc3RyYXRpb25fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fdGl0bGVcIj5yZWdpc3RyYXRpb24gZm9ybTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVuaXF1ZS4gTWluIGxlbmd0aCAyIGNoYXJzLCBtYXggLSAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCI+UmUtZW50ZXIgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX3JlcGVhdFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIG1hdGNoIHdpdGggcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiPlN0b3JlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaGlkZGVuIGlkPVwicmVnaXN0cmF0aW9uLXN0b3JlXCIgbmFtZT1cInN0b3JlXCI+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCI+U3RvcmUgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJzdG9yZV9wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIHN0b3JlIHBhc3N3b3JkLiBNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gcmVnaXN0cmF0aW9uX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChyZWdpc3RyYXRpb24pO1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbl9fc2VsZWN0Jyk7XHJcblxyXG5cdFx0aWYgKHN0b3Jlcykge1xyXG5cdFx0XHRzZWxlY3QuaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cdFx0XHRcdG9wdGlvbi50ZXh0ID0gZWxlbWVudC5uYW1lO1xyXG5cdFx0XHRcdG9wdGlvbi5kYXRhc2V0LmlkID0gZWxlbWVudC5pZDtcclxuXHRcdFx0XHRzZWxlY3QuYWRkKG9wdGlvbik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC1odHRwJztcclxuaW1wb3J0IHsgVVNFUl9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBudWxsLFxyXG5cdFx0XHRlbWFpbDogbnVsbCxcclxuXHRcdFx0Y3JlYXRlZDogbnVsbCxcclxuXHRcdFx0dmlzaXRlZDogbnVsbCxcclxuXHRcdH07XHJcblx0XHR0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCd1c2VyLWNvbnRhaW5lcicpO1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuXHRcdHRoaXMuZ2V0VXNlckluZm8oKTtcclxuXHR9XHJcblxyXG5cdGdldFVzZXJJbmZvKCkge1xyXG5cdFx0QVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFVTRVJfVVJMKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRcdHVzZXJuYW1lOiByZXN1bHQudXNlcm5hbWUsXHJcblx0XHRcdFx0ZW1haWw6IHJlc3VsdC5lbWFpbCxcclxuXHRcdFx0XHRjcmVhdGVkOiByZXN1bHQuY3JlYXRlZF9hdCxcclxuXHRcdFx0XHR2aXNpdGVkOiByZXN1bHQubGFzdF9sb2dpbixcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBjcmVhdGVkLCB2aXNpdGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgdXNlciA9IGBcclxuICAgICAgICA8bWFpbiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7dXNlcm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4ke2VtYWlsfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHtjcmVhdGVkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHt2aXNpdGVkfTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh1c2VyKTtcclxuXHRcdHJldHVybiBbdGhpcy5oZWFkZXIudXBkYXRlKCksIGZyYWdtZW50LCB0aGlzLmZvb3Rlci51cGRhdGUoKV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyL3VzZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZS5kYXRhJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4sIENSRUFURV9QSVpaQSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERSQVcgfSBmcm9tICcuL2RyYXcnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgtaHR0cCc7XHJcblxyXG5jbGFzcyBOZXdQaXp6YSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNpemU6ICc2MCcsXHJcblx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0XHRpbmdyZWRpZW50czogW10sXHJcblx0XHRcdHRhZ3M6IFtdLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jb250YWluZXInKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcblx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGV2KSB7XHJcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgeyBzaXplLCBpbmdyZWRpZW50cywgdGFncyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5cdFx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX25hbWUtdmFsdWUnKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fZGVzY3JpcHRpb24nKTtcclxuXHJcblx0XHRjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZmQuYXBwZW5kKCduYW1lJywgbmFtZS52YWx1ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24udmFsdWUpO1xyXG5cdFx0ZmQuYXBwZW5kKCdzaXplJywgc2l6ZSk7XHJcblx0XHRmZC5hcHBlbmQoJ2luZ3JlZGllbnRzJywgSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHMpKTtcclxuXHRcdGZkLmFwcGVuZCgndGFncycsIEpTT04uc3RyaW5naWZ5KHRhZ3MpKTtcclxuXHJcblx0XHRjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG5cdFx0XHRmZC5hcHBlbmQoJ2ltYWdlJywgYmxvYiwgJ25ld19pbWFnZS5wbmcnKTtcclxuXHRcdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLnBvc3QoQ1JFQVRFX1BJWlpBLCBmZCkudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uSW5pdCgpIHtcclxuXHRcdFByb21pc2UuYWxsKFtDUkVBVEVfREFUQS5nZXRJbmdyZWRpZW50cygpLCBDUkVBVEVfREFUQS5nZXRUYWdzKCldKS50aGVuKCgpID0+IHtcclxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fb3B0aW9ucycpO1xyXG5cdFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDbGljayk7XHJcblx0XHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19jYW52YXMnKTtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHRcdFx0Y29uc3QgYnV0dG9uc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1jYW5jZWwnIHR5cGU9J2J1dHRvbic+Y2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1zZW5kJyB0eXBlPSdzdWJtaXQnPmNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHRcdFx0Y29uc3QgYnV0dG9ucyA9IHRvSHRtbChidXR0b25zU3RyaW5nKTtcclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmQodGhpcy5yZW5kZXJGb3JtKCkpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVySW5ncmVkaWVudHMoQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMpKTtcclxuXHRcdFx0Zm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRhZ3MoQ1JFQVRFX0RBVEEudGFncykpO1xyXG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xyXG5cdFx0XHREUkFXLm9uSW5pdCh7XHJcblx0XHRcdFx0aG9zdDogY2FudmFzLFxyXG5cdFx0XHRcdGluZ3JlZGllbnRzOiBDUkVBVEVfREFUQS5pbmdyZWRpZW50cyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKGV2KSB7XHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuZmxhZyA9PT0gJ2luZ3JlZGllbnQnKSB7XHJcblx0XHRcdGNvbnN0IGluZ3JlZGllbnRzSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmxhZ10nKTtcclxuXHRcdFx0Y29uc3QgbmV3T3B0aW9ucyA9IFtdO1xyXG5cdFx0XHRjb25zdCBuZXdJbmdyZWRpZW50cyA9IFtdO1xyXG5cdFx0XHRpbmdyZWRpZW50c0lucHV0cy5mb3JFYWNoKGluZ3JlZGllbnRJbnB1dCA9PiB7XHJcblx0XHRcdFx0aWYgKGluZ3JlZGllbnRJbnB1dC5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRuZXdPcHRpb25zLnB1c2goaW5ncmVkaWVudElucHV0LnZhbHVlKTtcclxuXHRcdFx0XHRcdG5ld0luZ3JlZGllbnRzLnB1c2gocGFyc2VJbnQoaW5ncmVkaWVudElucHV0LmRhdGFzZXQuaWQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRvcHRpb25zOiBuZXdPcHRpb25zLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuXHRcdFx0XHRpbmdyZWRpZW50czogbmV3SW5ncmVkaWVudHMsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuXHRcdFx0Y29uc3QgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0XHREUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVzaXplKGV2KSB7XHJcblx0XHRpZiAoZXYudGFyZ2V0LmRhdGFzZXQuYXR0ciA9PT0gJ3NpemUnKSB7XHJcblx0XHRcdGNvbnN0IHNpemVGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRyXScpO1xyXG5cdFx0XHRzaXplRmllbGRzLmZvckVhY2goc2l6ZUZpZWxkID0+IHtcclxuXHRcdFx0XHRpZiAoc2l6ZUZpZWxkLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld1NpemUgPSBzaXplRmllbGQudmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xyXG5cdFx0XHRcdFx0XHRzaXplOiBuZXdTaXplLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0bGV0IHsgc2l6ZSwgb3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdFx0RFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlckZvcm0oKSB7XHJcblx0XHRjb25zdCBmb3JtU3RyaW5nID0gYFxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fbmFtZSc+UGl6emEgTmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHJlcXVpcmVkIG1pbj0nMycgbWF4PScyNCcgY2xhc3M9J2NyZWF0ZV9fbmFtZS12YWx1ZSc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9J2NyZWF0ZV9fZGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZSc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX3NpemUtdGl0bGUnPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSczMCcgZGF0YS1hdHRyPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1zbWFsbFwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjQ1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzQ1JyBkYXRhLWF0dHI9J3NpemUnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLW1lZGl1bVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjYwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzYwJyBkYXRhLWF0dHI9J3NpemUnIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICAgIFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy10aXRsZSc+SW5ncmVkaWVudHM8aDI+XHJcbiAgICAgICAgYDtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gdG9IdG1sKGZvcm1TdHJpbmcpO1xyXG5cdFx0Y29uc3Qgc2l6ZUZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fc2l6ZScpO1xyXG5cdFx0c2l6ZUZpZWxkcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcblx0XHRyZXR1cm4gZm9ybTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckluZ3JlZGllbnRzKGRhdGEpIHtcclxuXHRcdGNvbnN0IGluZ3JlZGllbnRzU3RyaW5nID0gYCAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG5cdFx0aHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pbnB1dCcgdHlwZT0nY2hlY2tib3gnIHZhbHVlPScke1xyXG5cdGRhdGEubmFtZVxyXG59JyBkYXRhLWZsYWc9J2luZ3JlZGllbnQnIGRhdGEtaWQ9JyR7ZGF0YS5pZH0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7RE9NQUlOfS8ke1xyXG5cdGRhdGEuaW1hZ2VfdXJsXHJcbn0nIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJyB0aXRsZT0nJHtkYXRhLmRlc2NyaXB0aW9ufScgZGF0YS1uYW1lPSdpbmdyZWRpZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH0sICcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPSdjcmVhdGVfX3RhZy10aXRsZSc+VGFnPGgyPlxyXG4gICAgICAgIGA7XHJcblx0XHRjb25zdCBmcmFnbWVudCA9IHRvSHRtbChpbmdyZWRpZW50c1N0cmluZyk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJUYWdzKGRhdGEpIHtcclxuXHRcdGNvbnN0IHRhZ3NTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX3RhZ3MnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuXHRcdGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fdGFncy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LCAnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwodGFnc1N0cmluZyk7XHJcblx0XHRyZXR1cm4gZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzPSdjcmVhdGUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29udGFpbmVyIGNyZWF0ZV9fY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9J2NyZWF0ZV9fdGl0bGUnPkNyZWF0ZSBQaXp6YTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fY2FudmFzJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fb3B0aW9ucyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuaGVhZGVyLnVwZGF0ZSgpLCBmcmFnbWVudCwgdGhpcy5mb290ZXIudXBkYXRlKCldO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UGl6emE7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuanMiLCJpbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4vYXV0aC1odHRwJztcclxuaW1wb3J0IHsgSU5HUkVESUVOVFNfVVJMLCBUQUdfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgUGl6emFEYXRhU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gW107XHJcblx0XHR0aGlzLnRhZ3MgPSBbXTtcclxuXHR9XHJcblxyXG5cdGdldEluZ3JlZGllbnRzKCkge1xyXG5cdFx0cmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChJTkdSRURJRU5UU19VUkwpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdHJldHVybiBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldFRhZ3MoKSB7XHJcblx0XHRyZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFRBR19VUkwpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMudGFncyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0cmV0dXJuIGRhdGEucmVzdWx0cztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9EQVRBID0gbmV3IFBpenphRGF0YVNlcnZpY2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NyZWF0ZS5kYXRhLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5jbGFzcyBEcmF3IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuY3J1c3RfcGl6emEgPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhL3N0YXRpYy9pbWFnZXMvcGl6emEucG5nJztcclxuXHRcdHRoaXMuX2xvYWRJbWFnZSA9IHRoaXMuX2xvYWRJbWFnZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0b25Jbml0KGRhdGEpIHtcclxuXHRcdHRoaXMuaG9zdCA9IGRhdGEuaG9zdDtcclxuXHRcdHRoaXMuc2l6ZSA9ICc2MCc7XHJcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0dGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0dGhpcy5jYW52YXNXaWR0aCA9IDMyMDtcclxuXHRcdHRoaXMuY2FudmFzSGVpZ2h0ID0gMzIwO1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IGRhdGEuaW5ncmVkaWVudHM7XHJcblx0XHR0aGlzLmltYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5zcHJpdGVzID0ge307XHJcblx0XHR0aGlzLmxhc3RPcHRpb25zID0gW107XHJcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG5cdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQ7XHJcblx0XHR0aGlzLl9sb2FkUmVzb3VyY2VzKCkudGhlbihyZXNvdXJjZXMgPT4ge1xyXG5cdFx0XHRyZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiAodGhpcy5pbWFnZXNbcmVzb3VyY2UubmFtZV0gPSByZXNvdXJjZS5pbWFnZSkpO1xyXG5cdFx0XHR0aGlzLmhvc3QuYXBwZW5kKHRoaXMuY2FudmFzKTtcclxuXHRcdFx0dGhpcy5fc3RhcnRTZXQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X3N0YXJ0U2V0KCkge1xyXG5cdFx0dGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG5cdFx0Ly8gbGV0IHBpenphID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1sncGl6emEnXSwgMTYwLCAxNjAsIDMwMCwgMzAwKTtcclxuXHRcdGxldCBwaXp6YSA9IG5ldyBTcHJpdGUoXHJcblx0XHRcdHRoaXMuaW1hZ2VzWydwaXp6YSddLFxyXG5cdFx0XHQxNjAsXHJcblx0XHRcdDE2MCxcclxuXHRcdFx0MzAwICogYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gIC8gNjAsXHJcblx0XHRcdDMwMCAqIGAke3BhcnNlSW50KHRoaXMuc2l6ZSl9YCAvIDYwXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zcHJpdGVzWydwaXp6YSddID0gcGl6emE7XHJcblx0XHR0aGlzLnNwcml0ZXNQb29sLnB1c2gocGl6emEpO1xyXG5cdFx0dGhpcy5fZHJhdygpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQ2xpY2sob3B0aW9ucywgc2l6ZSkge1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHRpZiAob3B0aW9ucy5sZW5ndGggPT0gdGhpcy5idWZmZXIubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZmlsdGVyZWRFbGVtID0gZWxlbS5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gMzApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNDUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDYwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zLmxlbmd0aCA8IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xyXG5cdFx0XHRsZXQgcHJlQnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMubGFzdE9wdGlvbnMgPSBbXTtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHR0aGlzLmxhc3RPcHRpb25zLnB1c2goZWwpO1xyXG5cdFx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZWxlbS5pZCA9PT0gZWwpIHtcclxuXHRcdFx0XHRcdFx0cHJlQnVmZmVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBlbGVtLmlkLFxyXG5cdFx0XHRcdFx0XHRcdHNwcml0ZXM6IGVsZW0uc3ByaXRlcyxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGVsZW0uc3ByaXRlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQocHJlQnVmZmVyKTtcclxuXHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRcdHRoaXMuX3N0YXJ0U2V0KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmxhc3RPcHRpb25zLmluY2x1ZGVzKGVsKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fZHJhdygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmxhc3RPcHRpb25zLnB1c2goZWwpO1xyXG5cdFx0XHRcdFx0dGhpcy5fZ2VuZXJhdGVTcHJpdGUoZWwsIDEwKTtcclxuXHRcdFx0XHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWx0ZXJlZEVsZW0gPSBlbC5zcHJpdGVzLmZpbHRlcihlbGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDMwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAmJiBlbGVtLnkgPiAxMTAgJiYgZWxlbS55IDwgMTgwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICYmIGVsZW0ueSA+IDkwICYmIGVsZW0ueSA8IDIwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAmJiBlbGVtLnkgPiA0MCAmJiBlbGVtLnkgPCAyNTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLl9kcmF3KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9nZW5lcmF0ZVNwcml0ZShuYW1lLCBjb3VudCkge1xyXG5cdFx0Y29uc3Qgc3ByaXRlcyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xyXG5cdFx0XHRsZXQgaW5ncmVkaWVudCA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbYCR7bmFtZX1gXSwgUkFORE9NKDcwLCAyNTApLCBSQU5ET00oNzAsIDI1MCkpO1xyXG5cdFx0XHRzcHJpdGVzLnB1c2goaW5ncmVkaWVudCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmJ1ZmZlci5wdXNoKHtcclxuXHRcdFx0aWQ6IG5hbWUsXHJcblx0XHRcdHNwcml0ZXM6IHNwcml0ZXMsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9kcmF3KCkge1xyXG5cdFx0dGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzV2lkdGgsIHRoaXMuY2FudmFzSGVpZ2h0KTtcclxuXHRcdHRoaXMuc3ByaXRlc1Bvb2wuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmRyYXcodGhpcy5jdHgpKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkUmVzb3VyY2VzKCkge1xyXG5cdFx0bGV0IHByb21pc2VzID0gW107XHJcblx0XHRwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJbWFnZSgncGl6emEnLCB0aGlzLmNydXN0X3BpenphKSk7XHJcblx0XHRwcm9taXNlcyA9IHByb21pc2VzLmNvbmNhdChcclxuXHRcdFx0dGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XHJcblx0XHRcdFx0bGV0IGluZ3JfdXJsID0gYCR7RE9NQUlOfS8ke2luZ3JlZGllbnQuaW1hZ2VfdXJsfWA7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2xvYWRJbWFnZShpbmdyZWRpZW50Lm5hbWUsIGluZ3JfdXJsKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdH1cclxuXHJcblx0X2xvYWRJbWFnZShuYW1lLCB1cmwpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoeyBuYW1lLCBpbWFnZSB9KTtcclxuXHRcdFx0aW1hZ2Uub25lcnJvciA9IGUgPT4gcmVqZWN0KGUpO1xyXG5cdFx0XHRpbWFnZS5zcmMgPSB1cmw7XHJcblx0XHRcdGltYWdlLndpZHRoID0gMjA7XHJcblx0XHRcdGltYWdlLmhlaWdodCA9IDIwO1xyXG5cdFx0XHRpbWFnZS5jcm9zc09yaWdpbiA9ICcnO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRFJBVyA9IG5ldyBEcmF3KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9kcmF3LmpzIiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcblx0Y29uc3RydWN0b3IoaW1hZ2UsIGN4LCBjeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0dGhpcy54ID0gMDtcclxuXHRcdHRoaXMueSA9IDA7XHJcblx0XHR0aGlzLmltYWdlID0gaW1hZ2U7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGggfHwgdGhpcy5pbWFnZS53aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG5cdFx0dGhpcy5jeCA9IGN4IHx8IDA7XHJcblx0XHR0aGlzLmN5ID0gY3kgfHwgMDtcclxuXHR9XHJcblx0Z2V0IGN4KCkge1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy54ICsgdGhpcy53aWR0aCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY3koKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnkgKyB0aGlzLmhlaWdodCAqIDAuNSk7XHJcblx0fVxyXG5cclxuXHRzZXQgY3godmFsdWUpIHtcclxuXHRcdHRoaXMueCA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLndpZHRoICogMC41KTtcclxuXHR9XHJcblxyXG5cdHNldCBjeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy55ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMuaGVpZ2h0ICogMC41KTtcclxuXHR9XHJcblxyXG5cdGRyYXcoY3R4KSB7XHJcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS9zcHJpdGUuanMiXSwic291cmNlUm9vdCI6IiJ9