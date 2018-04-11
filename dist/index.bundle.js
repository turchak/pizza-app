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
                html += '\n                        <label class=\'create__ingredients-item\'>\n                            <input class=\'create__ingredients-input\' type=\'checkbox\' value=\'' + data.name + '\' data-flag=\'ingredient\'>\n                            <img src=\'' + _constants.DOMAIN + '/' + data.image_url + '\' class=\'create__ingredients\' title=\'' + data.description + '\' data-name=\'ingredient\'>\n                        </label>\n                        ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjRhYjdkMGExZjc2MmQ2OTViNmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGgtaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLWJhdmFyaWFuLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtY2hpY2tlbi13aXRoLXBpbmVhcHBsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLWZydWl0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtbWFyZ2hlcml0YS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXR1cmtleS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2NyZWF0ZS5kYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc3ByaXRlLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJob3N0IiwibmV4dFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsIm5leHRQcm9wcyIsIm9uQmVmb3JlVW5tb3VudCIsImNoaWxkcmVuIiwicmVuZGVyIiwiaW5uZXJIVE1MIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXV0aFNlcnZpY2UiLCJfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2NsYWltcyIsIkpTT04iLCJwYXJzZSIsImxvZ2luVXJsIiwic3RvcmVVcmwiLCJjcmVhdGVVcmwiLCJ0b2tlbklzTm90RXhwaXJlZCIsImNsZWFyU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0b2tlbiIsImNsYWltcyIsImV4cCIsIkRhdGUiLCJub3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJvayIsImFuc3dlciIsInBhcnNlSnd0Q2xhaW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGF0dXMiLCJyZWplY3QiLCJqd3RUb2tlbiIsImJhc2U2NFVybCIsInNwbGl0IiwiYmFzZTY0IiwicmVwbGFjZSIsIndpbmRvdyIsImF0b2IiLCJzZXRJdGVtIiwiQVVUSF9TRVJWSUNFIiwidG9IdG1sIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHJpbmciLCJjb250ZW50IiwiUkFORE9NIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRE9NQUlOIiwiSU5HUkVESUVOVFNfVVJMIiwiVEFHX1VSTCIsIlVTRVJfVVJMIiwiRm9vdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwiaXNBdXRob3JpemVkIiwibG9naW5CdXR0b24iLCJsb2dvdXRCdXR0b24iLCJ1c2VyQnV0dG9uIiwicmVnaXN0cmF0aW9uQnV0dG9uIiwiaGVhZGVyIiwiZnJhZ21lbnQiLCJBUFBfUk9VVEVSIiwicXVlcnlTZWxlY3RvciIsInJvdXRlcyIsImF1dGhHdWFyZCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJyZWRpcmVjdCIsIkF1dGhIdHRwU2VydmljZSIsInVybCIsIkVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiQVVUSF9IVFRQX1NFUlZJQ0UiLCJSb3V0ZXIiLCJhY3RpdmVSb3V0ZSIsImFjdGl2ZUNvbXBvbmVudCIsImhhbmRsZVVybENoYW5nZSIsImJpbmQiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1cGRhdGVTdGF0ZSIsInVwZGF0ZSIsInNsaWNlIiwiTG9naW4iLCJoYW5kbGVTdWJtaXQiLCJsb2dpbiIsImZvb3RlciIsImV2IiwicHJldmVudERlZmF1bHQiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibWFpbiIsInBpenphcyIsInRpdGxlIiwiYmF2YXJpYW4iLCJjaGlja2VuV2l0aE11c2hyb29tcyIsImNoaWNrZW5XaXRoUGluZWFwcGxlIiwiZnJ1aXQiLCJtYXJnaGVyaXRhIiwidHVya2V5IiwicGVwcGVyb25pIiwicHJvc2NpdXR0byIsInp1Y2NoaW5pIiwiTWFpbiIsImNvbnRhaW5lciIsImxpc3QiLCJmb3JFYWNoIiwiZWwiLCJhIiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJpbWciLCJwcmVtaXVtQ2hlZXNlIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uRm9ybSIsInN0b3JlcyIsImdldFN0b3JlcyIsInN0b3JlSW5mbyIsInBhc3N3b3JkX3JlcGVhdCIsImVtYWlsIiwic3RvcmVfaWQiLCJwYXJzZUludCIsInN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJpZCIsInN0b3JlX3Bhc3N3b3JkIiwicmVnaXN0ZXJVc2VyIiwic2VsZWN0IiwiaGlkZGVuIiwib3B0aW9uIiwiZWxlbWVudCIsImZvcm0iLCJVc2VyIiwiY3JlYXRlZCIsInZpc2l0ZWQiLCJnZXRVc2VySW5mbyIsImdldCIsImNyZWF0ZWRfYXQiLCJsYXN0X2xvZ2luIiwidXNlciIsIk5ld1BpenphIiwicmVuZGVyRGF0YSIsImhhbmRsZUNsaWNrIiwiYWxsIiwiZ2V0SW5ncmVkaWVudHMiLCJnZXRUYWdzIiwiY2FudmFzIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwiaW5ncmVkaWVudHMiLCJyZW5kZXJUYWdzIiwidGFncyIsIm9uSW5pdCIsImZsYWciLCJpbmdyZWRpZW50c0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmdyZWRpZW50SW5wdXQiLCJjaGVja2VkIiwicHVzaCIsImZvcm1TdHJpbmciLCJpbmdyZWRpZW50c1N0cmluZyIsInJlZHVjZSIsImh0bWwiLCJpbWFnZV91cmwiLCJkZXNjcmlwdGlvbiIsInRhZ3NTdHJpbmciLCJjb250YWluZXJTdHJpbmciLCJQaXp6YURhdGFTZXJ2aWNlIiwicmVzdWx0cyIsIkNSRUFURV9EQVRBIiwiRHJhdyIsImNydXN0X3BpenphIiwiX2xvYWRJbWFnZSIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImltYWdlcyIsInNwcml0ZXMiLCJzcHJpdGVzUG9vbCIsIndpZHRoIiwiaGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsImltYWdlIiwiX3N0YXJ0U2V0IiwicGl6emEiLCJfZHJhdyIsImxlbmd0aCIsIl9wcmludCIsImNvdW50IiwiaSIsImluZ3JlZGllbnQiLCJjbGVhclJlY3QiLCJzcHJpdGUiLCJkcmF3IiwicHJvbWlzZXMiLCJjb25jYXQiLCJtYXAiLCJpbmdyX3VybCIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImUiLCJzcmMiLCJEUkFXIiwiU3ByaXRlIiwiY3giLCJjeSIsIngiLCJ5IiwiZHJhd0ltYWdlIiwicm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3RE1BLFM7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmLGFBQUtBLEtBQUwsR0FBYUEsU0FBUyxFQUF0QjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDSDs7OztvQ0FFV0MsUyxFQUFXO0FBQ25CLGlCQUFLRixLQUFMLEdBQWFHLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtKLEtBQXZCLEVBQThCRSxTQUE5QixDQUFiO0FBQ0EsbUJBQU8sS0FBS0csT0FBTCxFQUFQO0FBQ0g7OzsrQkFFTUMsUyxFQUFXO0FBQ2QsaUJBQUtQLEtBQUwsR0FBYU8sU0FBYjtBQUNBLG1CQUFPLEtBQUtELE9BQUwsRUFBUDtBQUNIOzs7a0NBQ1M7QUFDTixpQkFBS0UsZUFBTDtBQUNIOzs7MENBQ2lCLENBQUU7Ozt1Q0FDTEQsUyxFQUFXLENBQUU7OztrQ0FLbEI7QUFDTixnQkFBTUUsV0FBVyxLQUFLQyxNQUFMLEVBQWpCOztBQUVBLGlCQUFLUixJ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S0FBS3lCLENBQS9CLEVBQWtDLEtBQUtDLENBQXZDLEVBQTBDLEtBQUsvQixLQUEvQyxFQUFzRCxLQUFLQyxNQUEzRDtBQUNIOzs7NEJBbEJRO0FBQ0wsbUJBQU8xSyxLQUFLME0sS0FBTCxDQUFXLEtBQUtILENBQUwsR0FBUyxLQUFLOUIsS0FBTCxHQUFhLEdBQWpDLENBQVA7QUFDSCxTOzBCQU1NckcsSyxFQUFPO0FBQ1YsaUJBQUttSSxDQUFMLEdBQVN2TSxLQUFLME0sS0FBTCxDQUFXdEksUUFBUSxLQUFLcUcsS0FBTCxHQUFhLEdBQWhDLENBQVQ7QUFDSDs7OzRCQU5RO0FBQ0wsbUJBQU96SyxLQUFLME0sS0FBTCxDQUFXLEtBQUtGLENBQUwsR0FBUyxLQUFLOUIsTUFBTCxHQUFjLEdBQWxDLENBQVA7QUFDSCxTOzBCQU1NdEcsSyxFQUFPO0FBQ1YsaUJBQUtvSSxDQUFMLEdBQVN4TSxLQUFLME0sS0FBTCxDQUFXdEksUUFBUSxLQUFLc0csTUFBTCxHQUFjLEdBQWpDLENBQVQ7QUFDSCIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NGFiN2QwYTFmNzYyZDY5NWI2ZiIsImNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgdW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLm9uQmVmb3JlVW5tb3VudCgpOyBcclxuICAgIH1cclxuICAgIG9uQmVmb3JlVW5tb3VudCgpIHt9XHJcbiAgICBvbkJlZm9yZVVwZGF0ZShuZXh0UHJvcHMpIHt9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmFwcGVuZCguLi5jaGlsZHJlbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmFwcGVuZChjaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvY29tcG9uZW50LmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJzsgXHJcblxyXG5jbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICB0aGlzLl9jbGFpbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGFpbXMnKSk7XHJcbiAgICAgICAgdGhpcy5sb2dpblVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvbG9naW5gOyBcclxuICAgICAgICB0aGlzLnN0b3JlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvc3RvcmUvbGlzdGA7IFxyXG4gICAgICAgIHRoaXMuY3JlYXRlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9jcmVhdGVgO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2tlbih0b2tlbikge1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbGFpbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYWltcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY2xhaW1zKGNsYWltcykge1xyXG4gICAgICAgIHRoaXMuX2NsYWltcyA9IGNsYWltcztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2xhaW1zJywgSlNPTi5zdHJpbmdpZnkoY2xhaW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBdXRob3JpemVkKCkge1xyXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMudG9rZW5Jc05vdEV4cGlyZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgICAgICB0aGlzLl9jbGFpbXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gbnVsbDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2xhaW1zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW5Jc05vdEV4cGlyZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRva2VuKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhaW1zLmV4cCoxMDAwID4gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yZUluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuc3RvcmVVcmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblVzZXIoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCkuYXBwZW5kKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMubG9naW5VcmwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gYW5zd2VyLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYWltcyA9IHRoaXMucGFyc2VKd3RDbGFpbXMoYW5zd2VyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiBQcm9taXNlLnJlamVjdCh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWdpc3RlclVzZXIoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuY3JlYXRlVXJsLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VKd3RDbGFpbXMoand0VG9rZW4pIHtcclxuICAgICAgICBpZiAoand0VG9rZW4pIHtcclxuICAgICAgICAgICAgbGV0IGJhc2U2NFVybCA9IGp3dFRva2VuLnNwbGl0KCcuJylbMV1cclxuICAgICAgICAgICAgbGV0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKVxyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9TRVJWSUNFID0gbmV3IEF1dGhTZXJ2aWNlKCk7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5qcyIsImV4cG9ydCBjb25zdCB0b0h0bWwgPSBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyaW5nO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkFORE9NID0gKG1pbixtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvdXRpbHMuanMiLCJleHBvcnQgY29uc3QgRE9NQUlOID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYSc7XHJcbmV4cG9ydCBjb25zdCBJTkdSRURJRU5UU19VUkwgPSBgJHtET01BSU59L2FwaS92MS9pbmdyZWRpZW50L2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVEFHX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL3RhZy9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFVTRVJfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9teV9pbmZvYDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NvbnN0YW50cy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGFkZHJlc3M+S290dGFucywgS290dGFucyBTcnQuIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNTc3Nzg4ODdcIj50ZWwuIDU3Ny03ODgtODc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+UGl6emEgTWFuYWdlciAmY29weTtcclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDEtMDFcIj4yMDE4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9UT0RPOiBuZWVkIGRlbGV0ZSA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwibG9naW5fX2J1dHRvbi1saW5rXCI+c2lnbiBpbjwvYT5cclxuICAgICAgICBjb25zdCBpc0F1dGhvcml6ZWQgPSBBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dpblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluXCI+c2lnbiBpbjwvYT5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IGxvZ291dEJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvbG9nb3V0XCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tb3V0XCI+c2lnbiBvdXQ8L2E+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCB1c2VyQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy91c2VyXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0taW5mb1wiPnVzZXIgaW5mbzwvYT5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvcmVnaXN0cmF0aW9uXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0tdXBcIj5zaWduIHVwPC9hPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImN1cnJlbnQtdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjY2xvY2tcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTgtMDItMDMgMTI6MDE6NDhcIj4xMjowMTo0ODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxvZ29cIiBocmVmPVwiIy9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjbG9nb1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7IGlzQXV0aG9yaXplZCA/IGxvZ291dEJ1dHRvbiA6IGxvZ2luQnV0dG9uIH1cclxuICAgICAgICAgICAgICAgICAgICAkeyBpc0F1dGhvcml6ZWQgPyB1c2VyQnV0dG9uIDogcmVnaXN0cmF0aW9uQnV0dG9uIH0gXHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbChoZWFkZXIpO1xyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9mcmFtZXdvcmsvcm91dGVyJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUiA9IG5ldyBSb3V0ZXIoeyBob3N0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLCByb3V0ZXMgfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbmRleC5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhHdWFyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKSA/IFxyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUgfSkgOlxyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh7IHN1Y2Nlc3M6IGZhbHNlLCByZWRpcmVjdDogJy9sb2dpbid9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGguZ3VhcmQuanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGgnO1xyXG5cclxuY2xhc3MgQXV0aEh0dHBTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgZ2V0KHVybCkge1xyXG4gICAgICAgIGlmICghQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb24tYXV0aG9yaXplZCByZXF1ZXN0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksIFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2goKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9IVFRQX1NFUlZJQ0UgPSBuZXcgQXV0aEh0dHBTZXJ2aWNlKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2F1dGgtaHR0cC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgYXV0aEd1YXJkIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgcm91dGVzLCBob3N0IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByb3V0ZXMsXHJcbiAgICAgICAgICAgIGFjdGl2ZVJvdXRlOiBudWxsLFxyXG4gICAgICAgICAgICBhY3RpdmVDb21wb25lbnQ6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlID0gdGhpcy5oYW5kbGVVcmxDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFwcGx5Um91dGUgPSB0aGlzLmFwcGx5Um91dGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiBcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKHRoaXMucGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVybENoYW5nZSh1cmwpIHtcclxuICAgICAgICBjb25zdCB7IHJvdXRlcywgYWN0aXZlUm91dGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbmV4dFJvdXRlID0gcm91dGVzLmZpbmQoKHsgaHJlZiB9KSA9PiBocmVmID09PSB1cmwpO1xyXG5cclxuICAgICAgICBpZiAobmV4dFJvdXRlICYmIG5leHRSb3V0ZSAhPT0gYWN0aXZlUm91dGUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghIW5leHRSb3V0ZS5yZWRpcmVjdFRvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZWRpcmVjdChuZXh0Um91dGUucmVkaXJlY3RUbyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCEhbmV4dFJvdXRlLmxvZ291dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ291dCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxvZ291dChuZXh0Um91dGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoISFuZXh0Um91dGUub25FbnRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uRW50ZXInKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVPbkVudGVyKG5leHRSb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5hcHBseVJvdXRlKG5leHRSb3V0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMb2dvdXQobmV4dFJvdXRlKSB7XHJcbiAgICAgICAgbmV4dFJvdXRlLmxvZ291dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlZGlyZWN0KHVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKSB7XHJcbiAgICAgICAgYXV0aEd1YXJkKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXMuc3VjY2VzcyA/IG51bGwgOiB0aGlzLmhhbmRsZVJlZGlyZWN0KHJlcy5yZWRpcmVjdCk7ICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlSb3V0ZShyb3V0ZSkge1xyXG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSByb3V0ZTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IG5ldyBDb21wb25lbnQoKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmVSb3V0ZTogcm91dGUsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNvbXBvbmVudDogY29tcG9uZW50SW5zdGFuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlQ29tcG9uZW50IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVDb21wb25lbnQudXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsImltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlcic7XHJcbmltcG9ydCBOZXdQaXp6YSBmcm9tICcuL2NvbXBvbmVudHMvY3JlYXRlJ1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuL3V0aWxzL2F1dGguZ3VhcmQnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL3V0aWxzL2F1dGgnO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgIGhyZWY6ICcnLFxyXG4gICAgICAgIHJlZGlyZWN0VG86ICcvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBDb21wb25lbnQ6IEFwcCxcclxuICAgICAgICBocmVmOiAnLycsXHJcbiAgICAgICAgb25FbnRlcjogYXV0aEd1YXJkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogTG9naW4sXHJcbiAgICAgICAgaHJlZjogJy9sb2dpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBSZWdpc3RyYXRpb24sXHJcbiAgICAgICAgaHJlZjogJy9yZWdpc3RyYXRpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogVXNlcixcclxuICAgICAgICBocmVmOiAnL3VzZXInLFxyXG4gICAgICAgIG9uRW50ZXI6IGF1dGhHdWFyZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBDb21wb25lbnQ6IEFwcCxcclxuICAgICAgICBocmVmOiAnL2xvZ291dCcsXHJcbiAgICAgICAgbG9nb3V0OiBBVVRIX1NFUlZJQ0UuY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIG9uRW50ZXI6IGF1dGhHdWFyZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBDb21wb25lbnQ6IE5ld1BpenphLFxyXG4gICAgICAgIGhyZWY6ICcvY3JlYXRlJyxcclxuICAgICAgICBvbkVudGVyOiBhdXRoR3VhcmRcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcm91dGVzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4uZm9ybSc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLmxvZ2luID0gbmV3IExvZ2luRm9ybSgpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChldikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmxvZ2luLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci51cGRhdGUoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vZXJyb3IubWVzc2FnZSc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgeyBBUFBfUk9VVEVSIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5cclxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvZ2luJyk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbmV3IEVycm9yTWVzc2FnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChldikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaG9zdCA9IGV2LnRhcmdldDtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQVVUSF9TRVJWSUNFLmxvZ2luVXNlcihkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBBUFBfUk9VVEVSLmhhbmRsZVJlZGlyZWN0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gc3RhdHVzLmFuc3dlci5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRleHRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBtZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxvZ2luID0gIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibG9naW5fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImxvZ2luX190aXRsZVwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpbi11c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgdmFsdWU9JHsgISF1c2VybmFtZSA/IHVzZXJuYW1lIDogJycgfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImxvZ2luX19pbnB1dFwiIGlkPVwibG9naW4tcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiB2YWx1ZT0keyAhIXBhc3N3b3JkID8gcGFzc3dvcmQgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsb2dpbl9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGxvZ2luKTtcclxuXHJcbiAgICAgICAgaWYgKCEhbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UudXBkYXRlKHsgdGV4dDogbWVzc2FnZSB9KTtcclxuICAgICAgICAgICAgZnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19idXR0b24nKS5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpOyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnJhZ21lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRXJyb3JNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fY29udGFpbmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcl9fdGV4dCcpO1xyXG5cclxuICAgICAgICBlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vycm9yLm1lc3NhZ2UuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbic7XHJcblxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdhcHAnKTtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLm1haW4gPSBuZXcgTWFpbigpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci51cGRhdGUoKSxcclxuICAgICAgICAgICAgdGhpcy5tYWluLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci51cGRhdGUoKSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpbWcgfSBmcm9tICcuLi91dGlscy9pbWFnZSc7XHJcblxyXG4vL1RPRE86IGhhcmRjb3JlXHJcbmNvbnN0IHBpenphcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0JhdmFyaWFuJyxcclxuICAgICAgICB1cmw6IGltZy5iYXZhcmlhblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NoaWNrZW4gd2l0aCBtdXNocm9vbXMnLFxyXG4gICAgICAgIHVybDogaW1nLmNoaWNrZW5XaXRoTXVzaHJvb21zXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2hpY2tlbiB3aXRoIHBpbmVhcHBsZScsXHJcbiAgICAgICAgdXJsOiBpbWcuY2hpY2tlbldpdGhQaW5lYXBwbGVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGcnVpdCcsXHJcbiAgICAgICAgdXJsOiBpbWcuZnJ1aXRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdNYXJnaGVyaXRhJyxcclxuICAgICAgICB1cmw6IGltZy5tYXJnaGVyaXRhXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnVHVya2V5JyxcclxuICAgICAgICB1cmw6IGltZy50dXJrZXlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQZXBwZXJvbmknLFxyXG4gICAgICAgIHVybDogaW1nLnBlcHBlcm9uaVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1Byb3NjaXV0dG8nLFxyXG4gICAgICAgIHVybDogaW1nLnByb3NjaXV0dG9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdadWNjaGluaScsXHJcbiAgICAgICAgdXJsOiBpbWcuenVjY2hpbmlcclxuICAgIH0sXHJcbl1cclxuXHJcblxyXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQaXp6YShwaXp6YXMpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9ICh0aXRsZSwgdXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGl6emFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwaXp6YV9faW1nXCIgc3JjPVwiJHt1cmx9XCIgYWx0PVwicGl6emEtcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBpenphX19uYW1lXCI+JHt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHRpbWUgY2xhc3M9XCJwaXp6YV9fdGltZVwiIGRhdGV0aW1lPVwiMjAxOC0wMS0zMVQxOTowMFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaXp6YV9fcXVldWUtbnVtYmVyXCI+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2V0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmV0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjA0OjAwXCI+NDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjEwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXHJcbiAgICAgICAgYDtcclxuICAgICAgICB9OyAgICBcclxuXHJcbiAgICAgICAgcGl6emFzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGxpc3QoZWwudGl0bGUsIGVsLnVybCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGEuaHJlZiA9ICcjL2NyZWF0ZSc7XHJcbiAgICAgICAgYS5jbGFzc05hbWUgPSAnYnV0dG9uIGFkZC1saW5rJztcclxuICAgICAgICBhLmlubmVyVGV4dCA9ICdhZGQgbmV3IHBpenphJztcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChhLCB0aGlzLmNyZWF0ZVBpenphKHBpenphcykpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcixcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL21haW4uanMiLCJpbXBvcnQgUGl6emFCYXZhcmlhbiBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS1iYXZhcmlhbi5wbmcnO1xyXG5pbXBvcnQgUGl6emFDaGlja2VuV2l0aE11c2hyb29tcyBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS1jaGlja2VuLXdpdGgtcGluZWFwcGxlLnBuZyc7XHJcbmltcG9ydCBQaXp6YUNoaWNrZW5XaXRoUGluZWFwcGxlIGZyb20gJy4uLy4uL21lZGlhL3BpenphLWNoaWNrZW4td2l0aC1waW5lYXBwbGUucG5nJztcclxuaW1wb3J0IFBpenphRnJ1aXQgZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtZnJ1aXQucG5nJztcclxuaW1wb3J0IFBpenphTWFyZ2hlcml0YSBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS1tYXJnaGVyaXRhLnBuZyc7XHJcbmltcG9ydCBQaXp6YVBlcHBlcm9uaSBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS1wZXBwZXJvbmkucG5nJztcclxuaW1wb3J0IFBpenphUHJlbWl1bUNoZWVzZSBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS1wcmVtaXVtLWNoZWVzZS5wbmcnO1xyXG5pbXBvcnQgUGl6emFQcm9zY2l1dHRvIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXByb3NjaXV0dG8ucG5nJztcclxuaW1wb3J0IFBpenphVHVya2V5IGZyb20gJy4uLy4uL21lZGlhL3BpenphLXR1cmtleS5wbmcnO1xyXG5pbXBvcnQgUGl6emFadWNjaGluaSBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS16dWNjaGluaS5wbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGltZyA9IHtcclxuICAgIGJhdmFyaWFuOiBQaXp6YUJhdmFyaWFuLFxyXG4gICAgY2hpY2tlbldpdGhNdXNocm9vbXM6IFBpenphQ2hpY2tlbldpdGhNdXNocm9vbXMsXHJcbiAgICBjaGlja2VuV2l0aFBpbmVhcHBsZTogUGl6emFDaGlja2VuV2l0aFBpbmVhcHBsZSxcclxuICAgIGZydWl0OiBQaXp6YUZydWl0LFxyXG4gICAgbWFyZ2hlcml0YTogUGl6emFNYXJnaGVyaXRhLFxyXG4gICAgcGVwcGVyb25pOiBQaXp6YVBlcHBlcm9uaSxcclxuICAgIHByZW1pdW1DaGVlc2U6IFBpenphUHJlbWl1bUNoZWVzZSxcclxuICAgIHByb3NjaXV0dG86IFBpenphUHJvc2NpdXR0byxcclxuICAgIHR1cmtleTogUGl6emFUdXJrZXksXHJcbiAgICB6dWNjaGluaTogUGl6emFadWNjaGluaVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvaW1hZ2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtYmF2YXJpYW4ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtYmF2YXJpYW4ucG5nXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtY2hpY2tlbi13aXRoLXBpbmVhcHBsZS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1jaGlja2VuLXdpdGgtcGluZWFwcGxlLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLWZydWl0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL3BpenphLWZydWl0LnBuZ1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLW1hcmdoZXJpdGEucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtbWFyZ2hlcml0YS5wbmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuL2Fzc2V0cy9tZWRpYS9waXp6YS1wZXBwZXJvbmkucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtcGVwcGVyb25pLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXByb3NjaXV0dG8ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuL2Fzc2V0cy9tZWRpYS9waXp6YS10dXJrZXkucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtdHVya2V5LnBuZ1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi5mb3JtJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbi1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uRm9ybSgpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChldikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbi51cGRhdGUoKSxcclxuICAgICAgICAgICAgdGhpcy5mb290ZXIudXBkYXRlKClcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RvcmVzOiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3RvcmVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcmVzKCkge1xyXG4gICAgICAgIEFVVEhfU0VSVklDRS5zdG9yZUluZm8oKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdG9yZXMgPSByZXN1bHQ7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZXYpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBldi50YXJnZXQudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogZXYudGFyZ2V0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgcGFzc3dvcmRfcmVwZWF0OiBldi50YXJnZXQucGFzc3dvcmRfcmVwZWF0LnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgZW1haWw6IGV2LnRhcmdldC5lbWFpbC52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgIHN0b3JlX2lkOiBwYXJzZUludChldi50YXJnZXQuc3RvcmUub3B0aW9uc1tldi50YXJnZXQuc3RvcmUuc2VsZWN0ZWRJbmRleF0uZGF0YXNldC5pZCksXHJcbiAgICAgICAgICAgIHN0b3JlX3Bhc3N3b3JkOiBldi50YXJnZXQuc3RvcmVfcGFzc3dvcmQudmFsdWUudHJpbSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBBVVRIX1NFUlZJQ0UucmVnaXN0ZXJVc2VyKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHN0b3JlcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZWdpc3RyYXRpb24gPSAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJyZWdpc3RyYXRpb25fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fdGl0bGVcIj5yZWdpc3RyYXRpb24gZm9ybTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVuaXF1ZS4gTWluIGxlbmd0aCAyIGNoYXJzLCBtYXggLSAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTWluIGxlbmd0aCA4IGNoYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCI+UmUtZW50ZXIgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXJlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX3JlcGVhdFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIG1hdGNoIHdpdGggcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlNob3VsZCBiZSB2YWxpZCBlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZVwiPlN0b3JlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaGlkZGVuIGlkPVwicmVnaXN0cmF0aW9uLXN0b3JlXCIgbmFtZT1cInN0b3JlXCI+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCI+U3RvcmUgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGZvcj1cInJlZ2lzdHJhdGlvbi1zdG9yZS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJzdG9yZV9wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIHN0b3JlIHBhc3N3b3JkLiBNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gcmVnaXN0cmF0aW9uX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwocmVnaXN0cmF0aW9uKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZnJhZ21lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdHJhdGlvbl9fc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIGlmICghIXN0b3Jlcykge1xyXG4gICAgICAgICAgICBzZWxlY3QuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IGVsZW1lbnQubmFtZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5kYXRhc2V0LmlkID0gZWxlbWVudC5pZDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5hZGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi5mb3JtLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC1odHRwJztcclxuaW1wb3J0IHsgVVNFUl9VUkwgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogbnVsbCxcclxuICAgICAgICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgICAgICAgIGNyZWF0ZWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCd1c2VyLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICBBVVRIX0hUVFBfU0VSVklDRS5nZXQoVVNFUl9VUkwpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogcmVzdWx0LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHJlc3VsdC5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IHJlc3VsdC5jcmVhdGVkX2F0LFxyXG4gICAgICAgICAgICAgICAgdmlzaXRlZDogcmVzdWx0Lmxhc3RfbG9naW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBjcmVhdGVkLCB2aXNpdGVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBgXHJcbiAgICAgICAgPG1haW4gY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT4keyB1c2VybmFtZSB9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4keyBlbWFpbCB9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4keyBjcmVhdGVkIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IHZpc2l0ZWQgfTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwodXNlcik7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIGZyYWdtZW50LFxyXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci51cGRhdGUoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuaW1wb3J0IHsgQ1JFQVRFX0RBVEEgfSBmcm9tICcuLi91dGlscy9jcmVhdGUuZGF0YSc7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRFJBVyB9IGZyb20gJy4vZHJhdyc7XHJcblxyXG5jbGFzcyBOZXdQaXp6YSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICBcclxuICAgICAgICBQcm9taXNlLmFsbChbQ1JFQVRFX0RBVEEuZ2V0SW5ncmVkaWVudHMoKSwgQ1JFQVRFX0RBVEEuZ2V0VGFncygpXSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fb3B0aW9ucycpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCh0aGlzLnJlbmRlckZvcm0oKSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVySW5ncmVkaWVudHMoQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMpKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUYWdzKENSRUFURV9EQVRBLnRhZ3MpKTtcclxuICAgICAgICAgICAgICAgIERSQVcub25Jbml0KFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogY2FudmFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50czogQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgIH0pOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhldikge1xyXG4gICAgICAgIGlmIChldi50YXJnZXQuZGF0YXNldC5mbGFnID09PSAnaW5ncmVkaWVudCcpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5ncmVkaWVudHNJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mbGFnXScpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gW107IFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50c0lucHV0cy5mb3JFYWNoKGluZ3JlZGllbnRJbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpbmdyZWRpZW50SW5wdXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChpbmdyZWRpZW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgRFJBVy5oYW5kbGVDbGljayhvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZvcm0oKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybVN0cmluZyA9IGBcclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX25hbWUnPlBpenphIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyByZXF1aXJlZCBtaW49JzMnIG1heD0nMjQnPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5EZXNjcmlwdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPSdjcmVhdGVfX2Rlc2NyaXB0aW9uJz48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nY3JlYXRlX19zaXplLXRpdGxlJz5TaXplPC9zcGFuPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MzA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSczMCc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tc21hbGxcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj40NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzMwJyBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLW1lZGl1bVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjYwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nMzAnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLWxhcmdlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPiAgICBcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtdGl0bGUnPkluZ3JlZGllbnRzPGgyPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0b0h0bWwoZm9ybVN0cmluZyk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW5ncmVkaWVudHMoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRzU3RyaW5nID0gYCAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMtaW5wdXQnIHR5cGU9J2NoZWNrYm94JyB2YWx1ZT0nJHtkYXRhLm5hbWV9JyBkYXRhLWZsYWc9J2luZ3JlZGllbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7RE9NQUlOfS8ke2RhdGEuaW1hZ2VfdXJsfScgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnIHRpdGxlPScke2RhdGEuZGVzY3JpcHRpb259JyBkYXRhLW5hbWU9J2luZ3JlZGllbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSwnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX190YWctdGl0bGUnPlRhZzxoMj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGluZ3JlZGllbnRzU3RyaW5nKTtcclxuICAgICAgICBjb25zdCBpbmdyZWRpZW50c0lucHV0cyA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX2luZ3JlZGllbnRzJyk7XHJcbiAgICAgICAgaW5ncmVkaWVudHNJbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFncyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdGFnc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9fdGFncyc+JHtkYXRhLnJlZHVjZSgoaHRtbCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fdGFncy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICAgICAgICB9LCcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwodGFnc1N0cmluZyk7XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXJTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzPSdjcmVhdGUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29udGFpbmVyIGNyZWF0ZV9fY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9J2NyZWF0ZV9fdGl0bGUnPkNyZWF0ZSBQaXp6YTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fY2FudmFzJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2NyZWF0ZV9fb3B0aW9ucyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGNvbnRhaW5lclN0cmluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICBmcmFnbWVudCxcclxuICAgICAgICAgICAgdGhpcy5mb290ZXIudXBkYXRlKClcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQaXp6YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUuanMiLCJpbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4vYXV0aC1odHRwJztcclxuaW1wb3J0IHsgSU5HUkVESUVOVFNfVVJMLCBUQUdfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgUGl6emFEYXRhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gW107XHJcbiAgICAgICAgdGhpcy50YWdzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5ncmVkaWVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChJTkdSRURJRU5UU19VUkwpLnRoZW4oXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFncygpIHtcclxuICAgICAgICByZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KFRBR19VUkwpLnRoZW4oXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9EQVRBID0gbmV3IFBpenphRGF0YVNlcnZpY2UoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvY3JlYXRlLmRhdGEuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNsYXNzIERyYXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jcnVzdF9waXp6YSA9ICdodHRwczovL3BpenphLXRlbGUuZ2Evc3RhdGljL2ltYWdlcy9waXp6YS5wbmcnO1xyXG4gICAgICAgIHRoaXMuX2xvYWRJbWFnZSA9IHRoaXMuX2xvYWRJbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZGF0YS5ob3N0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSAzMjA7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAzMjA7XHJcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IGRhdGEuaW5ncmVkaWVudHM7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnNwcml0ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNQb29sID0gW107XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX2xvYWRSZXNvdXJjZXMoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzb3VyY2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiB0aGlzLmltYWdlc1tyZXNvdXJjZS5uYW1lXSA9IHJlc291cmNlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5hcHBlbmQodGhpcy5jYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRTZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3N0YXJ0U2V0KCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuICAgICAgICBsZXQgcGl6emEgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzWydwaXp6YSddLCAxNjAsIDE2MCwgMzAwLCAzMDApO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1sncGl6emEnXSA9IHBpenphO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wucHVzaChwaXp6YSk7XHJcbiAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9zdGFydFNldCgpO1xyXG4gICAgICAgIGlmKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByaW50KGVsLCAxNSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBfcHJpbnQobmFtZSwgY291bnQpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZ3JlZGllbnQgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzW2Ake25hbWV9YF0sIFJBTkRPTSg4MCwgMjQwKSwgUkFORE9NKDgwLCAyNDApKTtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVzUG9vbC5wdXNoKGluZ3JlZGllbnQpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmRyYXcodGhpcy5jdHgpKTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZFJlc291cmNlcygpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJbWFnZSgncGl6emEnLCB0aGlzLmNydXN0X3BpenphKSk7XHJcbiAgICAgICAgcHJvbWlzZXMgPSBwcm9taXNlcy5jb25jYXQodGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmdyX3VybCA9IGAke0RPTUFJTn0vJHtpbmdyZWRpZW50LmltYWdlX3VybH1gO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEltYWdlKGluZ3JlZGllbnQubmFtZSwgaW5ncl91cmwpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkSW1hZ2UobmFtZSwgdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh7bmFtZSwgaW1hZ2V9KTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERSQVcgPSBuZXcgRHJhdygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RyYXcuanMiLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlLCBjeCwgY3ksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmltYWdlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY3ggPSBjeCB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3kgPSBjeSB8fCAwO1xyXG4gICAgfVxyXG4gICAgZ2V0IGN4KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCArIHRoaXMud2lkdGggKiAwLjUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN5KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueSArIHRoaXMuaGVpZ2h0ICogMC41KVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBjeCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLndpZHRoICogMC41KVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBjeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLmhlaWdodCAqIDAuNSlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9zcHJpdGUuanMiXSwic291cmNlUm9vdCI6IiJ9