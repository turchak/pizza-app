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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 2 */
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

var _utils = __webpack_require__(2);

var _auth = __webpack_require__(1);

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
exports.APP_ROUTER = undefined;

__webpack_require__(9);

var _router = __webpack_require__(10);

var _router2 = _interopRequireDefault(_router);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ROUTER = exports.APP_ROUTER = new _router2.default({ host: document.querySelector('#root'), routes: _routes2.default });

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authGuard = undefined;

var _auth = __webpack_require__(1);

var authGuard = exports.authGuard = function authGuard() {
    var result = _auth.AUTH_SERVICE.isAuthorized() ? Promise.resolve({ success: true }) : Promise.resolve({ success: false, redirect: '/login' });
    return result;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AUTH_HTTP_SERVICE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthHttpService = function () {
    function AuthHttpService() {
        _classCallCheck(this, AuthHttpService);
    }

    _createClass(AuthHttpService, [{
        key: 'get',
        value: function get(url) {
            if (!_auth.AUTH_SERVICE.isAuthorized) {
                throw new Error("Non-authorized request");
            }
            return fetch(url, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer ' + _auth.AUTH_SERVICE.token,
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
        value: function post() {}
    }, {
        key: 'patch',
        value: function patch() {}
    }]);

    return AuthHttpService;
}();

var AUTH_HTTP_SERVICE = exports.AUTH_HTTP_SERVICE = new AuthHttpService();

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

var _auth = __webpack_require__(7);

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

                if (!!nextRoute.redirectTo) {
                    return this.handleRedirect(nextRoute.redirectTo);
                }

                if (!!nextRoute.logout) {
                    console.log('logout');
                    this.handleLogout(nextRoute);
                }

                if (!!nextRoute.onEnter) {
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

var _registration = __webpack_require__(27);

var _registration2 = _interopRequireDefault(_registration);

var _user = __webpack_require__(29);

var _user2 = _interopRequireDefault(_user);

var _create = __webpack_require__(30);

var _create2 = _interopRequireDefault(_create);

var _auth = __webpack_require__(7);

var _auth2 = __webpack_require__(1);

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

var _utils = __webpack_require__(2);

var _error = __webpack_require__(14);

var _error2 = _interopRequireDefault(_error);

var _auth = __webpack_require__(1);

var _index = __webpack_require__(6);

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


            var login = '\n        <div class="container">\n            <form class="login__form">\n                <h2 class="login__title">Login</h2>\n                <label for="login-username">Username</label>\n                <input class="login__input" id="login-username" type="text" name="username" placeholder="Your name" value=' + (!!username ? username : '') + '>\n                <label for="login-password">Password</label>\n                <input class="login__input" id="login-password" type="password" name="password" placeholder="Your password" value=' + (!!password ? password : '') + '>\n                <button class="button login__button" type="submit">sign in</button>\n            </form>\n        </div>\n        ';

            var fragment = (0, _utils.toHtml)(login);

            if (!!message) {
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

var _image = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//TODO: hardcore
var pizzas = [{
    title: 'Bavarian',
    url: _image.img.bavarian
}, {
    title: 'Chicken with mushrooms',
    url: _image.img.chickenWithMushrooms
}, {
    title: 'Chicken with pineapple',
    url: _image.img.chickenWithPineapple
}, {
    title: 'Fruit',
    url: _image.img.fruit
}, {
    title: 'Margherita',
    url: _image.img.margherita
}, {
    title: 'Turkey',
    url: _image.img.turkey
}, {
    title: 'Pepperoni',
    url: _image.img.pepperoni
}, {
    title: 'Prosciutto',
    url: _image.img.prosciutto
}, {
    title: 'Zucchini',
    url: _image.img.zucchini
}];

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.host = document.createElement('main');
        _this.host.classList.add('main');
        return _this;
    }

    _createClass(Main, [{
        key: 'createPizza',
        value: function createPizza(pizzas) {
            var container = document.createElement('section');
            var list = function list(title, url) {
                return '\n            <article class="pizza">\n                <img class="pizza__img" src="' + url + '" alt="pizza-photo">\n                <h2 class="pizza__name">' + title + '</h2>\n                <time class="pizza__time" datetime="2018-01-31T19:00">12:01:48</time>\n                <span class="pizza__queue-number">#1</span>\n                <div class="pizza__eta">\n                    <span>eta</span>\n                    <time datetime="04:00">4</time>\n                    <span>min</span>\n                </div>\n                <div class="pizza__price">\n                    <span>$</span>\n                    <span>10</span>\n                </div>\n            </article> \n        ';
            };

            pizzas.forEach(function (el) {
                container.innerHTML += list(el.title, el.url);
            });

            return container;
        }
    }, {
        key: 'render',
        value: function render() {
            var container = document.createElement('div');
            container.classList.add('container');
            var a = document.createElement('a');
            a.href = '#/create';
            a.className = 'button add-link';
            a.innerText = 'add new pizza';

            container.append(a, this.createPizza(pizzas));
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
exports.img = undefined;

var _pizzaBavarian = __webpack_require__(18);

var _pizzaBavarian2 = _interopRequireDefault(_pizzaBavarian);

var _pizzaChickenWithPineapple = __webpack_require__(19);

var _pizzaChickenWithPineapple2 = _interopRequireDefault(_pizzaChickenWithPineapple);

var _pizzaFruit = __webpack_require__(20);

var _pizzaFruit2 = _interopRequireDefault(_pizzaFruit);

var _pizzaMargherita = __webpack_require__(21);

var _pizzaMargherita2 = _interopRequireDefault(_pizzaMargherita);

var _pizzaPepperoni = __webpack_require__(22);

var _pizzaPepperoni2 = _interopRequireDefault(_pizzaPepperoni);

var _pizzaPremiumCheese = __webpack_require__(23);

var _pizzaPremiumCheese2 = _interopRequireDefault(_pizzaPremiumCheese);

var _pizzaProsciutto = __webpack_require__(24);

var _pizzaProsciutto2 = _interopRequireDefault(_pizzaProsciutto);

var _pizzaTurkey = __webpack_require__(25);

var _pizzaTurkey2 = _interopRequireDefault(_pizzaTurkey);

var _pizzaZucchini = __webpack_require__(26);

var _pizzaZucchini2 = _interopRequireDefault(_pizzaZucchini);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var img = exports.img = {
    bavarian: _pizzaBavarian2.default,
    chickenWithMushrooms: _pizzaChickenWithPineapple2.default,
    chickenWithPineapple: _pizzaChickenWithPineapple2.default,
    fruit: _pizzaFruit2.default,
    margherita: _pizzaMargherita2.default,
    pepperoni: _pizzaPepperoni2.default,
    premiumCheese: _pizzaPremiumCheese2.default,
    prosciutto: _pizzaProsciutto2.default,
    turkey: _pizzaTurkey2.default,
    zucchini: _pizzaZucchini2.default
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-bavarian.png";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-chicken-with-pineapple.png";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-fruit.png";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-margherita.png";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-pepperoni.png";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-premium-cheese.png";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-prosciutto.png";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-turkey.png";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "./assets/media/pizza-zucchini.png";

/***/ }),
/* 27 */
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

var _registration = __webpack_require__(28);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(2);

var _auth = __webpack_require__(1);

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

            if (!!stores) {
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
/* 29 */
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

var _utils = __webpack_require__(2);

var _authHttp = __webpack_require__(8);

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
/* 30 */
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

var _create = __webpack_require__(31);

var _utils = __webpack_require__(2);

var _constants = __webpack_require__(3);

var _draw = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPizza = function (_Component) {
    _inherits(NewPizza, _Component);

    function NewPizza(props) {
        _classCallCheck(this, NewPizza);

        var _this = _possibleConstructorReturn(this, (NewPizza.__proto__ || Object.getPrototypeOf(NewPizza)).call(this, props));

        _this.host = document.createElement('div');
        _this.host.classList.add('create-container');
        _this.header = new _header2.default();
        _this.footer = new _footer2.default();
        _this.renderData();
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(NewPizza, [{
        key: 'renderData',
        value: function renderData() {
            var _this2 = this;

            Promise.all([_create.CREATE_DATA.getIngredients(), _create.CREATE_DATA.getTags()]).then(function () {
                var container = document.querySelector('.create__options');
                container.addEventListener('change', _this2.handleClick);
                var canvas = document.querySelector('.create__canvas');
                var form = document.createElement('form');
                container.appendChild(form);
                form.append(_this2.renderForm());
                form.appendChild(_this2.renderIngredients(_create.CREATE_DATA.ingredients));
                form.appendChild(_this2.renderTags(_create.CREATE_DATA.tags));
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
                var options = [];
                ingredientsInputs.forEach(function (ingredientInput) {
                    if (ingredientInput.checked) {
                        options.push(ingredientInput.value);
                    }
                });
                _draw.DRAW.handleClick(options);
            }
            return false;
        }
    }, {
        key: 'renderForm',
        value: function renderForm() {
            var formString = '\n        <label>\n            <span class=\'create__name\'>Pizza Name</span>\n            <input type=\'text\' name=\'name\' required min=\'3\' max=\'24\'>\n        </label>\n        <label>\n            <span>Description</span>\n            <textarea class=\'create__description\'></textarea>\n        </label>\n        <label class=\'create__size\'>\n            <span class=\'create__size-title\'>Size</span>\n            <label class=\'create__size-option\'>\n                <span>30</span>\n                <input type=\'radio\' name=\'size\' value=\'30\'>\n                <i class="fas fa-circle create__size-option--small"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>45</span>\n                <input type=\'radio\' name=\'size\' value=\'30\' checked>\n                <i class="fas fa-circle create__size-option--medium"></i>\n            </label>\n            <label class=\'create__size-option\'>\n                <span>60</span>\n                <input type=\'radio\' name=\'size\' value=\'30\'>\n                <i class="fas fa-circle create__size-option--large"></i>\n            </label>    \n        </label>\n            <h2 class=\'create__ingredients-title\'>Ingredients<h2>\n        ';

            var form = (0, _utils.toHtml)(formString);
            return form;
        }
    }, {
        key: 'renderIngredients',
        value: function renderIngredients(data) {
            var ingredientsString = '   \n                <div class=\'create__ingredients\'>' + data.reduce(function (html, data) {
                html += '\n                        <label class=\'create__ingredients-item\'>\n                            <input class=\'create__ingredients-input\' type=\'checkbox\' value=\'' + data.name + '\' data-flag=\'ingredient\'>\n                            <img src=\'' + _constants.DOMAIN + '/' + data.image_url + '\' class=\'create__ingredients\' title=\'' + data.description + '\' data-name=\'ingredient\'>\n                            <span>' + data.name + '</span>\n                        </label>\n                        ';
                return html;
            }, '') + '\n                </div>\n                <h2 class=\'create__tag-title\'>Tag<h2>\n        ';
            var fragment = (0, _utils.toHtml)(ingredientsString);
            var ingredientsInputs = fragment.querySelector('.create__ingredients');
            ingredientsInputs.addEventListener('click', this.handleClick);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CREATE_DATA = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authHttp = __webpack_require__(8);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DRAW = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(3);

var _sprite = __webpack_require__(33);

var _utils = __webpack_require__(2);

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
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvasWidth = 320;
            this.canvasHeight = 320;
            this.ingredients = data.ingredients;
            this.images = {};
            this.sprites = {};
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
            var pizza = new _sprite.Sprite(this.images['pizza'], 160, 160, 300, 300);
            this.sprites['pizza'] = pizza;
            this.spritesPool.push(pizza);
            this._draw();
        }
    }, {
        key: 'handleClick',
        value: function handleClick(options) {
            var _this2 = this;

            this._startSet();
            if (options.length === 0) {
                this._startSet();
            } else {
                options.forEach(function (el) {
                    _this2._print(el, 15);
                });
            }
        }
    }, {
        key: '_print',
        value: function _print(name, count) {
            for (var i = 1; i <= count; i++) {
                var ingredient = new _sprite.Sprite(this.images['' + name], (0, _utils.RANDOM)(80, 240), (0, _utils.RANDOM)(80, 240));
                this.spritesPool.push(ingredient);
            }
            this._draw();
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
            });
        }
    }]);

    return Draw;
}();

var DRAW = exports.DRAW = new Draw();

/***/ }),
/* 33 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjJhMGU4YjRiOWE1YzYxZTczNTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGgtaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLWJhdmFyaWFuLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtY2hpY2tlbi13aXRoLXBpbmVhcHBsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLWZydWl0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtbWFyZ2hlcml0YS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXR1cmtleS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2NyZWF0ZS5kYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc3ByaXRlLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJob3N0IiwibmV4dFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsIm5leHRQcm9wcyIsIm9uQmVmb3JlVW5tb3VudCIsImNoaWxkcmVuIiwicmVuZGVyIiwiaW5uZXJIVE1MIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXV0aFNlcnZpY2UiLCJfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2NsYWltcyIsIkpTT04iLCJwYXJzZSIsImxvZ2luVXJsIiwic3RvcmVVcmwiLCJjcmVhdGVVcmwiLCJ0b2tlbklzTm90RXhwaXJlZCIsImNsZWFyU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0b2tlbiIsImNsYWltcyIsImV4cCIsIkRhdGUiLCJub3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJvayIsImFuc3dlciIsInBhcnNlSnd0Q2xhaW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGF0dXMiLCJyZWplY3QiLCJqd3RUb2tlbiIsImJhc2U2NFVybCIsInNwbGl0IiwiYmFzZTY0IiwicmVwbGFjZSIsIndpbmRvdyIsImF0b2IiLCJzZXRJdGVtIiwiQVVUSF9TRVJWSUNFIiwidG9IdG1sIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHJpbmciLCJjb250ZW50IiwiUkFORE9NIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRE9NQUlOIiwiSU5HUkVESUVOVFNfVVJMIiwiVEFHX1VSTCIsIlVTRVJfVVJMIiwiRm9vdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwiaXNBdXRob3JpemVkIiwibG9naW5CdXR0b24iLCJsb2dvdXRCdXR0b24iLCJ1c2VyQnV0dG9uIiwicmVnaXN0cmF0aW9uQnV0dG9uIiwiaGVhZGVyIiwiZnJhZ21lbnQiLCJBUFBfUk9VVEVSIiwicXVlcnlTZWxlY3RvciIsInJvdXRlcyIsImF1dGhHdWFyZCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJyZWRpcmVjdCIsIkF1dGhIdHRwU2VydmljZSIsInVybCIsIkVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiQVVUSF9IVFRQX1NFUlZJQ0UiLCJSb3V0ZXIiLCJhY3RpdmVSb3V0ZSIsImFjdGl2ZUNvbXBvbmVudCIsImhhbmRsZVVybENoYW5nZSIsImJpbmQiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1cGRhdGVTdGF0ZSIsInVwZGF0ZSIsInNsaWNlIiwiTG9naW4iLCJoYW5kbGVTdWJtaXQiLCJsb2dpbiIsImZvb3RlciIsImV2IiwicHJldmVudERlZmF1bHQiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibWFpbiIsInBpenphcyIsInRpdGxlIiwiYmF2YXJpYW4iLCJjaGlja2VuV2l0aE11c2hyb29tcyIsImNoaWNrZW5XaXRoUGluZWFwcGxlIiwiZnJ1aXQiLCJtYXJnaGVyaXRhIiwidHVya2V5IiwicGVwcGVyb25pIiwicHJvc2NpdXR0byIsInp1Y2NoaW5pIiwiTWFpbiIsImNvbnRhaW5lciIsImxpc3QiLCJmb3JFYWNoIiwiZWwiLCJhIiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJpbWciLCJwcmVtaXVtQ2hlZXNlIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uRm9ybSIsInN0b3JlcyIsImdldFN0b3JlcyIsInN0b3JlSW5mbyIsInBhc3N3b3JkX3JlcGVhdCIsImVtYWlsIiwic3RvcmVfaWQiLCJwYXJzZUludCIsInN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJpZCIsInN0b3JlX3Bhc3N3b3JkIiwicmVnaXN0ZXJVc2VyIiwic2VsZWN0IiwiaGlkZGVuIiwib3B0aW9uIiwiZWxlbWVudCIsImZvcm0iLCJVc2VyIiwiY3JlYXRlZCIsInZpc2l0ZWQiLCJnZXRVc2VySW5mbyIsImdldCIsImNyZWF0ZWRfYXQiLCJsYXN0X2xvZ2luIiwidXNlciIsIk5ld1BpenphIiwicmVuZGVyRGF0YSIsImhhbmRsZUNsaWNrIiwiYWxsIiwiZ2V0SW5ncmVkaWVudHMiLCJnZXRUYWdzIiwiY2FudmFzIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwiaW5ncmVkaWVudHMiLCJyZW5kZXJUYWdzIiwidGFncyIsIm9uSW5pdCIsImZsYWciLCJpbmdyZWRpZW50c0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmdyZWRpZW50SW5wdXQiLCJjaGVja2VkIiwicHVzaCIsImZvcm1TdHJpbmciLCJpbmdyZWRpZW50c1N0cmluZyIsInJlZHVjZSIsImh0bWwiLCJpbWFnZV91cmwiLCJkZXNjcmlwdGlvbiIsInRhZ3NTdHJpbmciLCJjb250YWluZXJTdHJpbmciLCJQaXp6YURhdGFTZXJ2aWNlIiwicmVzdWx0cyIsIkNSRUFURV9EQVRBIiwiRHJhdyIsImNydXN0X3BpenphIiwiX2xvYWRJbWFnZSIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImltYWdlcyIsInNwcml0ZXMiLCJzcHJpdGVzUG9vbCIsIndpZHRoIiwiaGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsImltYWdlIiwiX3N0YXJ0U2V0IiwicGl6emEiLCJfZHJhdyIsImxlbmd0aCIsIl9wcmludCIsImNvdW50IiwiaSIsImluZ3JlZGllbnQiLCJjbGVhclJlY3QiLCJzcHJpdGUiLCJkcmF3IiwicHJvbWlzZXMiLCJjb25jYXQiLCJtYXAiLCJpbmdyX3VybCIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImUiLCJzcmMiLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsIngiLCJ5IiwiZHJhd0ltYWdlIiwicm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3RE1BLFM7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmLGFBQUtBLEtBQUwsR0FBYUEsU0FBUyxFQUF0QjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDSDs7OztvQ0FFV0MsUyxFQUFXO0FBQ25CLGlCQUFLRixLQUFMLEdBQWFHLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtKLEtBQXZCLEVBQThCRSxTQUE5QixDQUFiO0FBQ0EsbUJBQU8sS0FBS0csT0FBTCxFQUFQO0FBQ0g7OzsrQkFFTUMsUyxFQUFXO0FBQ2QsaUJBQUtQLEtBQUwsR0FBYU8sU0FBYjtBQUNBLG1CQUFPLEtBQUtELE9BQUwsRUFBUDtBQUNIOzs7a0NBQ1M7QUFDTixpQkFBS0UsZUFBTDtBQUNIOzs7MENBQ2lCLENBQUU7Ozt1Q0FDTEQsUyxFQUFXLENBQUU7OztrQ0FLbEI7QUFDTixnQkFBTUUsV0FBVyxLQUFLQyxNQUFMLEVBQWpCOztBQUVBLGlCQUFLUixJ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QUFjLEtBQUszQixLQUFuQixFQUEwQixLQUFLeUIsQ0FBL0IsRUFBa0MsS0FBS0MsQ0FBdkMsRUFBMEMsS0FBSy9CLEtBQS9DLEVBQXNELEtBQUtDLE1BQTNEO0FBQ0g7Ozs0QkFsQlE7QUFDTCxtQkFBTzFLLEtBQUswTSxLQUFMLENBQVcsS0FBS0gsQ0FBTCxHQUFTLEtBQUs5QixLQUFMLEdBQWEsR0FBakMsQ0FBUDtBQUNILFM7MEJBTU1yRyxLLEVBQU87QUFDVixpQkFBS21JLENBQUwsR0FBU3ZNLEtBQUswTSxLQUFMLENBQVd0SSxRQUFRLEtBQUtxRyxLQUFMLEdBQWEsR0FBaEMsQ0FBVDtBQUNIOzs7NEJBTlE7QUFDTCxtQkFBT3pLLEtBQUswTSxLQUFMLENBQVcsS0FBS0YsQ0FBTCxHQUFTLEtBQUs5QixNQUFMLEdBQWMsR0FBbEMsQ0FBUDtBQUNILFM7MEJBTU10RyxLLEVBQU87QUFDVixpQkFBS29JLENBQUwsR0FBU3hNLEtBQUswTSxLQUFMLENBQVd0SSxRQUFRLEtBQUtzRyxNQUFMLEdBQWMsR0FBakMsQ0FBVDtBQUNIIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIyYTBlOGI0YjlhNWM2MWU3MzUwIiwiY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLmhvc3QgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICB1bm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMub25CZWZvcmVVbm1vdW50KCk7IFxyXG4gICAgfVxyXG4gICAgb25CZWZvcmVVbm1vdW50KCkge31cclxuICAgIG9uQmVmb3JlVXBkYXRlKG5leHRQcm9wcykge31cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gY2hpbGRyZW47XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKGNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnOyBcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIHRoaXMuX2NsYWltcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NsYWltcycpKTtcclxuICAgICAgICB0aGlzLmxvZ2luVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9sb2dpbmA7IFxyXG4gICAgICAgIHRoaXMuc3RvcmVVcmwgPSBgJHtET01BSU59L2FwaS92MS9zdG9yZS9saXN0YDsgXHJcbiAgICAgICAgdGhpcy5jcmVhdGVVcmwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL2NyZWF0ZWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRva2VuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNsYWltcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xhaW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjbGFpbXMoY2xhaW1zKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhaW1zID0gY2xhaW1zO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGFpbXMnLCBKU09OLnN0cmluZ2lmeShjbGFpbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0F1dGhvcml6ZWQoKSB7XHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy50b2tlbklzTm90RXhwaXJlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgICAgIHRoaXMuX2NsYWltcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSBudWxsO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjbGFpbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2tlbklzTm90RXhwaXJlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudG9rZW4pIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGFpbXMuZXhwKjEwMDAgPiBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5zdG9yZVVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luVXNlcihkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9ICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoKS5hcHBlbmQoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5sb2dpblVybCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSBhbnN3ZXIudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhaW1zID0gdGhpcy5wYXJzZUp3dENsYWltcyhhbnN3ZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IFByb21pc2UucmVqZWN0KHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5jcmVhdGVVcmwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUp3dENsYWltcyhqd3RUb2tlbikge1xyXG4gICAgICAgIGlmIChqd3RUb2tlbikge1xyXG4gICAgICAgICAgICBsZXQgYmFzZTY0VXJsID0gand0VG9rZW4uc3BsaXQoJy4nKVsxXVxyXG4gICAgICAgICAgICBsZXQgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpXHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX1NFUlZJQ0UgPSBuZXcgQXV0aFNlcnZpY2UoKTsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwiZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHJpbmc7XHJcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5ET00gPSAobWluLG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy91dGlscy5qcyIsImV4cG9ydCBjb25zdCBET01BSU4gPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhJztcclxuZXhwb3J0IGNvbnN0IElOR1JFRElFTlRTX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL2luZ3JlZGllbnQvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBUQUdfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdGFnL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVVNFUl9VUkwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL215X2luZm9gO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvY29uc3RhbnRzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YWRkcmVzcz5Lb3R0YW5zLCBLb3R0YW5zIFNydC4gMSxcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis1Nzc3ODg4N1wiPnRlbC4gNTc3LTc4OC04NzwvYT5cclxuICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5QaXp6YSBNYW5hZ2VyICZjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMS0wMVwiPjIwMTg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL1RPRE86IG5lZWQgZGVsZXRlIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJsb2dpbl9fYnV0dG9uLWxpbmtcIj5zaWduIGluPC9hPlxyXG4gICAgICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9naW5CdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0taW5cIj5zaWduIGluPC9hPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgbG9nb3V0QnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dvdXRcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1vdXRcIj5zaWduIG91dDwvYT5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IHVzZXJCdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3VzZXJcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pbmZvXCI+dXNlciBpbmZvPC9hPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9yZWdpc3RyYXRpb25cIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS11cFwiPnNpZ24gdXA8L2E+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY3VycmVudC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNjbG9ja1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMi0wMyAxMjowMTo0OFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCIjL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2dvXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJhdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHsgaXNBdXRob3JpemVkID8gbG9nb3V0QnV0dG9uIDogbG9naW5CdXR0b24gfVxyXG4gICAgICAgICAgICAgICAgICAgICR7IGlzQXV0aG9yaXplZCA/IHVzZXJCdXR0b24gOiByZWdpc3RyYXRpb25CdXR0b24gfSBcclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGhlYWRlcik7XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL2ZyYW1ld29yay9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSID0gbmV3IFJvdXRlcih7IGhvc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JyksIHJvdXRlcyB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2luZGV4LmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEd1YXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpID8gXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSB9KSA6XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogZmFsc2UsIHJlZGlyZWN0OiAnL2xvZ2luJ30pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5jbGFzcyBBdXRoSHR0cFNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBnZXQodXJsKSB7XHJcbiAgICAgICAgaWYgKCFBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vbi1hdXRob3JpemVkIHJlcXVlc3RcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtBVVRIX1NFUlZJQ0UudG9rZW59YCxcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UuanNvbigpKSwgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwYXRjaCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX0hUVFBfU0VSVklDRSA9IG5ldyBBdXRoSHR0cFNlcnZpY2UoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC1odHRwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuLi91dGlscy9hdXRoLmd1YXJkJztcclxuXHJcbmNsYXNzIFJvdXRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyByb3V0ZXMsIGhvc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJvdXRlcyxcclxuICAgICAgICAgICAgYWN0aXZlUm91dGU6IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNvbXBvbmVudDogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UgPSB0aGlzLmhhbmRsZVVybENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlSb3V0ZSA9IHRoaXMuYXBwbHlSb3V0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXJsQ2hhbmdlKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHsgcm91dGVzLCBhY3RpdmVSb3V0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXh0Um91dGUgPSByb3V0ZXMuZmluZCgoeyBocmVmIH0pID0+IGhyZWYgPT09IHVybCk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0Um91dGUgJiYgbmV4dFJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCEhbmV4dFJvdXRlLnJlZGlyZWN0VG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlZGlyZWN0KG5leHRSb3V0ZS5yZWRpcmVjdFRvKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoISFuZXh0Um91dGUubG9nb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0JylcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9nb3V0KG5leHRSb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghIW5leHRSb3V0ZS5vbkVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25FbnRlcicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5Um91dGUobmV4dFJvdXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxvZ291dChuZXh0Um91dGUpIHtcclxuICAgICAgICBuZXh0Um91dGUubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVkaXJlY3QodXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT25FbnRlcihuZXh0Um91dGUpIHtcclxuICAgICAgICBhdXRoR3VhcmQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5zdWNjZXNzID8gbnVsbCA6IHRoaXMuaGFuZGxlUmVkaXJlY3QocmVzLnJlZGlyZWN0KTsgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseVJvdXRlKHJvdXRlKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgfSA9IHJvdXRlO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEluc3RhbmNlID0gbmV3IENvbXBvbmVudCgpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuICAgICAgICAgICAgYWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvbXBvbmVudC51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwiaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyJztcclxuaW1wb3J0IE5ld1BpenphIGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGUnXHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vdXRpbHMvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBBcHAsXHJcbiAgICAgICAgaHJlZjogJycsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogJy8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgIGhyZWY6ICcvJyxcclxuICAgICAgICBvbkVudGVyOiBhdXRoR3VhcmRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBMb2dpbixcclxuICAgICAgICBocmVmOiAnL2xvZ2luJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBDb21wb25lbnQ6IFJlZ2lzdHJhdGlvbixcclxuICAgICAgICBocmVmOiAnL3JlZ2lzdHJhdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBVc2VyLFxyXG4gICAgICAgIGhyZWY6ICcvdXNlcicsXHJcbiAgICAgICAgb25FbnRlcjogYXV0aEd1YXJkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgIGhyZWY6ICcvbG9nb3V0JyxcclxuICAgICAgICBsb2dvdXQ6IEFVVEhfU0VSVklDRS5jbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgb25FbnRlcjogYXV0aEd1YXJkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogTmV3UGl6emEsXHJcbiAgICAgICAgaHJlZjogJy9jcmVhdGUnLFxyXG4gICAgICAgIG9uRW50ZXI6IGF1dGhHdWFyZFxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbi5mb3JtJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4tY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSBuZXcgTG9naW5Gb3JtKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMubG9naW4udXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9lcnJvci5tZXNzYWdlJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCB7IEFQUF9ST1VURVIgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4nKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBBVVRIX1NFUlZJQ0UubG9naW5Vc2VyKGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBzdGF0dXMuYW5zd2VyLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbG9naW4gPSAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiB2YWx1ZT0keyAhIXVzZXJuYW1lID8gdXNlcm5hbWUgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIHZhbHVlPSR7ICEhcGFzc3dvcmQgPyBwYXNzd29yZCA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwobG9naW4pO1xyXG5cclxuICAgICAgICBpZiAoISFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMubWVzc2FnZS51cGRhdGUoeyB0ZXh0OiBtZXNzYWdlIH0pO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2J1dHRvbicpLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yX19jb250YWluZXInKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX190ZXh0Jyk7XHJcblxyXG4gICAgICAgIGVycm9yLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvck1lc3NhZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXJyb3IubWVzc2FnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG5ldyBNYWluKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLm1haW4udXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGltZyB9IGZyb20gJy4uL3V0aWxzL2ltYWdlJztcclxuXHJcbi8vVE9ETzogaGFyZGNvcmVcclxuY29uc3QgcGl6emFzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQmF2YXJpYW4nLFxyXG4gICAgICAgIHVybDogaW1nLmJhdmFyaWFuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2hpY2tlbiB3aXRoIG11c2hyb29tcycsXHJcbiAgICAgICAgdXJsOiBpbWcuY2hpY2tlbldpdGhNdXNocm9vbXNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDaGlja2VuIHdpdGggcGluZWFwcGxlJyxcclxuICAgICAgICB1cmw6IGltZy5jaGlja2VuV2l0aFBpbmVhcHBsZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ZydWl0JyxcclxuICAgICAgICB1cmw6IGltZy5mcnVpdFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ01hcmdoZXJpdGEnLFxyXG4gICAgICAgIHVybDogaW1nLm1hcmdoZXJpdGFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUdXJrZXknLFxyXG4gICAgICAgIHVybDogaW1nLnR1cmtleVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1BlcHBlcm9uaScsXHJcbiAgICAgICAgdXJsOiBpbWcucGVwcGVyb25pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvc2NpdXR0bycsXHJcbiAgICAgICAgdXJsOiBpbWcucHJvc2NpdXR0b1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1p1Y2NoaW5pJyxcclxuICAgICAgICB1cmw6IGltZy56dWNjaGluaVxyXG4gICAgfSxcclxuXVxyXG5cclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBpenphKHBpenphcykge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gKHRpdGxlLCB1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwaXp6YVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBpenphX19pbWdcIiBzcmM9XCIke3VybH1cIiBhbHQ9XCJwaXp6YS1waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGl6emFfX25hbWVcIj4ke3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cInBpenphX190aW1lXCIgZGF0ZXRpbWU9XCIyMDE4LTAxLTMxVDE5OjAwXCI+MTI6MDE6NDg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBpenphX19xdWV1ZS1udW1iZXJcIj4jMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMDQ6MDBcIj40PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPiBcclxuICAgICAgICBgO1xyXG4gICAgICAgIH07ICAgIFxyXG5cclxuICAgICAgICBwaXp6YXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gbGlzdChlbC50aXRsZSwgZWwudXJsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYS5ocmVmID0gJyMvY3JlYXRlJztcclxuICAgICAgICBhLmNsYXNzTmFtZSA9ICdidXR0b24gYWRkLWxpbmsnO1xyXG4gICAgICAgIGEuaW5uZXJUZXh0ID0gJ2FkZCBuZXcgcGl6emEnO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGEsIHRoaXMuY3JlYXRlUGl6emEocGl6emFzKSk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsImltcG9ydCBQaXp6YUJhdmFyaWFuIGZyb20gJy4uLy4uL21lZGlhL3BpenphLWJhdmFyaWFuLnBuZyc7XHJcbmltcG9ydCBQaXp6YUNoaWNrZW5XaXRoTXVzaHJvb21zIGZyb20gJy4uLy4uL21lZGlhL3BpenphLWNoaWNrZW4td2l0aC1waW5lYXBwbGUucG5nJztcclxuaW1wb3J0IFBpenphQ2hpY2tlbldpdGhQaW5lYXBwbGUgZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtY2hpY2tlbi13aXRoLXBpbmVhcHBsZS5wbmcnO1xyXG5pbXBvcnQgUGl6emFGcnVpdCBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS1mcnVpdC5wbmcnO1xyXG5pbXBvcnQgUGl6emFNYXJnaGVyaXRhIGZyb20gJy4uLy4uL21lZGlhL3BpenphLW1hcmdoZXJpdGEucG5nJztcclxuaW1wb3J0IFBpenphUGVwcGVyb25pIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmcnO1xyXG5pbXBvcnQgUGl6emFQcmVtaXVtQ2hlZXNlIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZyc7XHJcbmltcG9ydCBQaXp6YVByb3NjaXV0dG8gZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmcnO1xyXG5pbXBvcnQgUGl6emFUdXJrZXkgZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtdHVya2V5LnBuZyc7XHJcbmltcG9ydCBQaXp6YVp1Y2NoaW5pIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW1nID0ge1xyXG4gICAgYmF2YXJpYW46IFBpenphQmF2YXJpYW4sXHJcbiAgICBjaGlja2VuV2l0aE11c2hyb29tczogUGl6emFDaGlja2VuV2l0aE11c2hyb29tcyxcclxuICAgIGNoaWNrZW5XaXRoUGluZWFwcGxlOiBQaXp6YUNoaWNrZW5XaXRoUGluZWFwcGxlLFxyXG4gICAgZnJ1aXQ6IFBpenphRnJ1aXQsXHJcbiAgICBtYXJnaGVyaXRhOiBQaXp6YU1hcmdoZXJpdGEsXHJcbiAgICBwZXBwZXJvbmk6IFBpenphUGVwcGVyb25pLFxyXG4gICAgcHJlbWl1bUNoZWVzZTogUGl6emFQcmVtaXVtQ2hlZXNlLFxyXG4gICAgcHJvc2NpdXR0bzogUGl6emFQcm9zY2l1dHRvLFxyXG4gICAgdHVya2V5OiBQaXp6YVR1cmtleSxcclxuICAgIHp1Y2NoaW5pOiBQaXp6YVp1Y2NoaW5pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9pbWFnZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIuL2Fzc2V0cy9tZWRpYS9waXp6YS1iYXZhcmlhbi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1iYXZhcmlhbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuL2Fzc2V0cy9tZWRpYS9waXp6YS1jaGlja2VuLXdpdGgtcGluZWFwcGxlLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL3BpenphLWNoaWNrZW4td2l0aC1waW5lYXBwbGUucG5nXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtZnJ1aXQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtZnJ1aXQucG5nXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtbWFyZ2hlcml0YS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1tYXJnaGVyaXRhLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1wZXBwZXJvbmkucG5nXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtcHJlbWl1bS1jaGVlc2UucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtcHJlbWl1bS1jaGVlc2UucG5nXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1wcm9zY2l1dHRvLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXR1cmtleS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS10dXJrZXkucG5nXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtenVjY2hpbmkucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtenVjY2hpbmkucG5nXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0nO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci51cGRhdGUoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdG9yZXM6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yZXMoKSB7XHJcbiAgICAgICAgQVVUSF9TRVJWSUNFLnN0b3JlSW5mbygpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0b3JlcyA9IHJlc3VsdDsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChldikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGV2LnRhcmdldC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBldi50YXJnZXQucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZF9yZXBlYXQ6IGV2LnRhcmdldC5wYXNzd29yZF9yZXBlYXQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICBlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgc3RvcmVfaWQ6IHBhcnNlSW50KGV2LnRhcmdldC5zdG9yZS5vcHRpb25zW2V2LnRhcmdldC5zdG9yZS5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmlkKSxcclxuICAgICAgICAgICAgc3RvcmVfcGFzc3dvcmQ6IGV2LnRhcmdldC5zdG9yZV9wYXNzd29yZC52YWx1ZS50cmltKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFVVEhfU0VSVklDRS5yZWdpc3RlclVzZXIoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RvcmVzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9ICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVnaXN0cmF0aW9uX190aXRsZVwiPnJlZ2lzdHJhdGlvbiBmb3JtPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVW5pcXVlLiBNaW4gbGVuZ3RoIDIgY2hhcnMsIG1heCAtIDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIj5SZS1lbnRlciBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRfcmVwZWF0XCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgbWF0Y2ggd2l0aCBwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIGVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlXCI+U3RvcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBoaWRkZW4gaWQ9XCJyZWdpc3RyYXRpb24tc3RvcmVcIiBuYW1lPVwic3RvcmVcIj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIj5TdG9yZSBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInN0b3JlX3Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgc3RvcmUgcGFzc3dvcmQuIE1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiByZWdpc3RyYXRpb25fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbChyZWdpc3RyYXRpb24pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uX19zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgaWYgKCEhc3RvcmVzKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZWxlbWVudC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQuaWQgPSBlbGVtZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoLWh0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX1VSTCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgY3JlYXRlZDogbnVsbCxcclxuICAgICAgICAgICAgdmlzaXRlZDogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3VzZXItY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIEFVVEhfSFRUUF9TRVJWSUNFLmdldChVU0VSX1VSTCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiByZXN1bHQudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcmVzdWx0LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZDogcmVzdWx0LmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkOiByZXN1bHQubGFzdF9sb2dpblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGNyZWF0ZWQsIHZpc2l0ZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGBcclxuICAgICAgICA8bWFpbiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IHVzZXJuYW1lIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IGVtYWlsIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IGNyZWF0ZWQgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHsgdmlzaXRlZCB9PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh1c2VyKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci51cGRhdGUoKSxcclxuICAgICAgICAgICAgZnJhZ21lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZS5kYXRhJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEUkFXIH0gZnJvbSAnLi9kcmF3JztcclxuXHJcbmNsYXNzIE5ld1BpenphIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFByb21pc2UuYWxsKFtDUkVBVEVfREFUQS5nZXRJbmdyZWRpZW50cygpLCBDUkVBVEVfREFUQS5nZXRUYWdzKCldKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19vcHRpb25zJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDbGljayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKHRoaXMucmVuZGVyRm9ybSgpKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJJbmdyZWRpZW50cyhDUkVBVEVfREFUQS5pbmdyZWRpZW50cykpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRhZ3MoQ1JFQVRFX0RBVEEudGFncykpO1xyXG4gICAgICAgICAgICAgICAgRFJBVy5vbkluaXQoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBjYW52YXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnRzOiBDUkVBVEVfREFUQS5pbmdyZWRpZW50cyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGV2KSB7XHJcbiAgICAgICAgaWYgKGV2LnRhcmdldC5kYXRhc2V0LmZsYWcgPT09ICdpbmdyZWRpZW50Jykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmdyZWRpZW50c0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZsYWddJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTsgXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzSW5wdXRzLmZvckVhY2goaW5ncmVkaWVudElucHV0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGluZ3JlZGllbnRJbnB1dC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGluZ3JlZGllbnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBEUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRm9ybSgpIHtcclxuICAgICAgICBjb25zdCBmb3JtU3RyaW5nID0gYFxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fbmFtZSc+UGl6emEgTmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHJlcXVpcmVkIG1pbj0nMycgbWF4PScyNCc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9J2NyZWF0ZV9fZGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZSc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX3NpemUtdGl0bGUnPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzMwJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1zbWFsbFwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjQ1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nMzAnIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbWVkaXVtXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSczMCc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICAgIFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy10aXRsZSc+SW5ncmVkaWVudHM8aDI+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IHRvSHRtbChmb3JtU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbmdyZWRpZW50cyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudHNTdHJpbmcgPSBgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pbnB1dCcgdHlwZT0nY2hlY2tib3gnIHZhbHVlPScke2RhdGEubmFtZX0nIGRhdGEtZmxhZz0naW5ncmVkaWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtET01BSU59LyR7ZGF0YS5pbWFnZV91cmx9JyBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cycgdGl0bGU9JyR7ZGF0YS5kZXNjcmlwdGlvbn0nIGRhdGEtbmFtZT0naW5ncmVkaWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICAgICAgICB9LCcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPSdjcmVhdGVfX3RhZy10aXRsZSc+VGFnPGgyPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaW5ncmVkaWVudHNTdHJpbmcpO1xyXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRzSW5wdXRzID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9faW5ncmVkaWVudHMnKTtcclxuICAgICAgICBpbmdyZWRpZW50c0lucHV0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYWdzKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YWdzU3RyaW5nID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX190YWdzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX190YWdzLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgICAgICAgIH0sJycpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh0YWdzU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuICAgICAgICAgICAgPG1haW4gY2xhc3M9J2NyZWF0ZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXIgY3JlYXRlX19jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz0nY3JlYXRlX190aXRsZSc+Q3JlYXRlIFBpenphPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nY3JlYXRlX19jYW52YXMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nY3JlYXRlX19vcHRpb25zJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIGZyYWdtZW50LFxyXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci51cGRhdGUoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1BpenphO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS5qcyIsImltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoLWh0dHAnO1xyXG5pbXBvcnQgeyBJTkdSRURJRU5UU19VUkwsIFRBR19VUkwgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YURhdGFTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmdyZWRpZW50cygpIHtcclxuICAgICAgICByZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KElOR1JFRElFTlRTX1VSTCkudGhlbihcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWdzKCkge1xyXG4gICAgICAgIHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoVEFHX1VSTCkudGhlbihcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RBVEEgPSBuZXcgUGl6emFEYXRhU2VydmljZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jcmVhdGUuZGF0YS5qcyIsImltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuY2xhc3MgRHJhdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNydXN0X3BpenphID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYS9zdGF0aWMvaW1hZ2VzL3BpenphLnBuZyc7XHJcbiAgICAgICAgdGhpcy5fbG9hZEltYWdlID0gdGhpcy5fbG9hZEltYWdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Jbml0KGRhdGEpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBkYXRhLmhvc3Q7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IDMyMDtcclxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IDMyMDtcclxuICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5pbmdyZWRpZW50cztcclxuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fbG9hZFJlc291cmNlcygpLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXNvdXJjZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc291cmNlcy5mb3JFYWNoKHJlc291cmNlID0+IHRoaXMuaW1hZ2VzW3Jlc291cmNlLm5hbWVdID0gcmVzb3VyY2UuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmFwcGVuZCh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFNldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfc3RhcnRTZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG4gICAgICAgIGxldCBwaXp6YSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbJ3BpenphJ10sIDE2MCwgMTYwLCAzMDAsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzWydwaXp6YSddID0gcGl6emE7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzUG9vbC5wdXNoKHBpenphKTtcclxuICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0U2V0KCk7XHJcbiAgICAgICAgaWYob3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRTZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJpbnQoZWwsIDE1KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIF9wcmludChuYW1lLCBjb3VudCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaW5ncmVkaWVudCA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbYCR7bmFtZX1gXSwgUkFORE9NKDgwLCAyNDApLCBSQU5ET00oODAsIDI0MCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXNQb29sLnB1c2goaW5ncmVkaWVudCk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzUG9vbC5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuZHJhdyh0aGlzLmN0eCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkUmVzb3VyY2VzKCkge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZEltYWdlKCdwaXp6YScsIHRoaXMuY3J1c3RfcGl6emEpKTtcclxuICAgICAgICBwcm9taXNlcyA9IHByb21pc2VzLmNvbmNhdCh0aGlzLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZ3JfdXJsID0gYCR7RE9NQUlOfS8ke2luZ3JlZGllbnQuaW1hZ2VfdXJsfWA7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkSW1hZ2UoaW5ncmVkaWVudC5uYW1lLCBpbmdyX3VybCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2xvYWRJbWFnZShuYW1lLCB1cmwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHtuYW1lLCBpbWFnZX0pO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHJlamVjdChlKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRFJBVyA9IG5ldyBEcmF3KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZHJhdy5qcyIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2UsIGN4LCBjeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IHRoaXMuaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5pbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jeCA9IGN4IHx8IDA7XHJcbiAgICAgICAgdGhpcy5jeSA9IGN5IHx8IDA7XHJcbiAgICB9XHJcbiAgICBnZXQgY3goKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy54ICsgdGhpcy53aWR0aCAqIDAuNSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3koKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAwLjUpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGN4KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMud2lkdGggKiAwLjUpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGN5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMuaGVpZ2h0ICogMC41KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Nwcml0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=