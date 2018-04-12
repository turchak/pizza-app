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
            // console.log(ev)
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

            if (options.length < this.buffer.length) {
                console.log('here');
                var preBuffer = [];
                this.lastOptions = [];
                options.forEach(function (el) {
                    console.log(el);
                    _this2.lastOptions.push(el);
                    _this2.buffer.forEach(function (elem) {

                        if (elem.id === el) {
                            preBuffer.push({
                                id: elem.id,
                                sprites: elem.sprites
                            });
                            _this2.spritesPool = _this2.spritesPool.concat(elem.sprites);
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
                        return;
                    } else {
                        _this2.lastOptions.push(el);
                        _this2._generateSprite(el, 10);
                        _this2.buffer.forEach(function (elem) {
                            _this2.spritesPool = _this2.spritesPool.concat(elem.sprites);
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
                var ingredient = new _sprite.Sprite(this.images['' + name], (0, _utils.RANDOM)(80, 240), (0, _utils.RANDOM)(80, 240));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY1NzA1M2FlNjVkNjAyMTkwNTIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGgtaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLWJhdmFyaWFuLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtY2hpY2tlbi13aXRoLXBpbmVhcHBsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLWZydWl0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtbWFyZ2hlcml0YS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXR1cmtleS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2NyZWF0ZS5kYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc3ByaXRlLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJob3N0IiwibmV4dFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsIm5leHRQcm9wcyIsIm9uQmVmb3JlVW5tb3VudCIsImNoaWxkcmVuIiwicmVuZGVyIiwiaW5uZXJIVE1MIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXV0aFNlcnZpY2UiLCJfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2NsYWltcyIsIkpTT04iLCJwYXJzZSIsImxvZ2luVXJsIiwic3RvcmVVcmwiLCJjcmVhdGVVcmwiLCJ0b2tlbklzTm90RXhwaXJlZCIsImNsZWFyU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0b2tlbiIsImNsYWltcyIsImV4cCIsIkRhdGUiLCJub3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJvayIsImFuc3dlciIsInBhcnNlSnd0Q2xhaW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGF0dXMiLCJyZWplY3QiLCJqd3RUb2tlbiIsImJhc2U2NFVybCIsInNwbGl0IiwiYmFzZTY0IiwicmVwbGFjZSIsIndpbmRvdyIsImF0b2IiLCJzZXRJdGVtIiwiQVVUSF9TRVJWSUNFIiwidG9IdG1sIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHJpbmciLCJjb250ZW50IiwiUkFORE9NIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRE9NQUlOIiwiSU5HUkVESUVOVFNfVVJMIiwiVEFHX1VSTCIsIlVTRVJfVVJMIiwiRm9vdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwiaXNBdXRob3JpemVkIiwibG9naW5CdXR0b24iLCJsb2dvdXRCdXR0b24iLCJ1c2VyQnV0dG9uIiwicmVnaXN0cmF0aW9uQnV0dG9uIiwiaGVhZGVyIiwiZnJhZ21lbnQiLCJBUFBfUk9VVEVSIiwicXVlcnlTZWxlY3RvciIsInJvdXRlcyIsImF1dGhHdWFyZCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJyZWRpcmVjdCIsIkF1dGhIdHRwU2VydmljZSIsInVybCIsIkVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiQVVUSF9IVFRQX1NFUlZJQ0UiLCJSb3V0ZXIiLCJhY3RpdmVSb3V0ZSIsImFjdGl2ZUNvbXBvbmVudCIsImhhbmRsZVVybENoYW5nZSIsImJpbmQiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1cGRhdGVTdGF0ZSIsInVwZGF0ZSIsInNsaWNlIiwiTG9naW4iLCJoYW5kbGVTdWJtaXQiLCJsb2dpbiIsImZvb3RlciIsImV2IiwicHJldmVudERlZmF1bHQiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibWFpbiIsInBpenphcyIsInRpdGxlIiwiYmF2YXJpYW4iLCJjaGlja2VuV2l0aE11c2hyb29tcyIsImNoaWNrZW5XaXRoUGluZWFwcGxlIiwiZnJ1aXQiLCJtYXJnaGVyaXRhIiwidHVya2V5IiwicGVwcGVyb25pIiwicHJvc2NpdXR0byIsInp1Y2NoaW5pIiwiTWFpbiIsImNvbnRhaW5lciIsImxpc3QiLCJmb3JFYWNoIiwiZWwiLCJhIiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJpbWciLCJwcmVtaXVtQ2hlZXNlIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uRm9ybSIsInN0b3JlcyIsImdldFN0b3JlcyIsInN0b3JlSW5mbyIsInBhc3N3b3JkX3JlcGVhdCIsImVtYWlsIiwic3RvcmVfaWQiLCJwYXJzZUludCIsInN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJpZCIsInN0b3JlX3Bhc3N3b3JkIiwicmVnaXN0ZXJVc2VyIiwic2VsZWN0IiwiaGlkZGVuIiwib3B0aW9uIiwiZWxlbWVudCIsImZvcm0iLCJVc2VyIiwiY3JlYXRlZCIsInZpc2l0ZWQiLCJnZXRVc2VySW5mbyIsImdldCIsImNyZWF0ZWRfYXQiLCJsYXN0X2xvZ2luIiwidXNlciIsIk5ld1BpenphIiwicmVuZGVyRGF0YSIsImhhbmRsZUNsaWNrIiwiYWxsIiwiZ2V0SW5ncmVkaWVudHMiLCJnZXRUYWdzIiwiY2FudmFzIiwicmVuZGVyRm9ybSIsInJlbmRlckluZ3JlZGllbnRzIiwiaW5ncmVkaWVudHMiLCJyZW5kZXJUYWdzIiwidGFncyIsIm9uSW5pdCIsImZsYWciLCJpbmdyZWRpZW50c0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmdyZWRpZW50SW5wdXQiLCJjaGVja2VkIiwicHVzaCIsImZvcm1TdHJpbmciLCJpbmdyZWRpZW50c1N0cmluZyIsInJlZHVjZSIsImh0bWwiLCJpbWFnZV91cmwiLCJkZXNjcmlwdGlvbiIsInRhZ3NTdHJpbmciLCJjb250YWluZXJTdHJpbmciLCJQaXp6YURhdGFTZXJ2aWNlIiwicmVzdWx0cyIsIkNSRUFURV9EQVRBIiwiRHJhdyIsImNydXN0X3BpenphIiwiX2xvYWRJbWFnZSIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImltYWdlcyIsInNwcml0ZXMiLCJsYXN0T3B0aW9ucyIsImJ1ZmZlciIsInNwcml0ZXNQb29sIiwid2lkdGgiLCJoZWlnaHQiLCJfbG9hZFJlc291cmNlcyIsInJlc291cmNlcyIsInJlc291cmNlIiwiaW1hZ2UiLCJfc3RhcnRTZXQiLCJwaXp6YSIsIl9kcmF3IiwibGVuZ3RoIiwicHJlQnVmZmVyIiwiZWxlbSIsImNvbmNhdCIsImluY2x1ZGVzIiwiX2dlbmVyYXRlU3ByaXRlIiwiY291bnQiLCJpIiwiaW5ncmVkaWVudCIsImNsZWFyUmVjdCIsInNwcml0ZSIsImRyYXciLCJwcm9taXNlcyIsIm1hcCIsImluZ3JfdXJsIiwiSW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsInNyYyIsIkRSQVciLCJTcHJpdGUiLCJjeCIsImN5IiwieCIsInkiLCJkcmF3SW1hZ2UiLCJyb3VuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdETUEsUztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsYUFBS0EsS0FBTCxHQUFhQSxTQUFTLEVBQXRCO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNIOzs7O29DQUVXQyxTLEVBQVc7QUFDbkIsaUJBQUtGLEtBQUwsR0FBYUcsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS0osS0FBdkIsRUFBOEJFLFNBQTlCLENBQWI7QUFDQSxtQkFBTyxLQUFLRyxPQUFMLEVBQVA7QUFDSDs7OytCQUVNQyxTLEVBQVc7QUFDZCxpQkFBS1AsS0FBTCxHQUFhTyxTQUFiO0FBQ0EsbUJBQU8sS0FBS0QsT0FBTCxFQUFQO0FBQ0g7OztrQ0FDUztBQUNOLGlCQUFLRSxlQUFMO0FBQ0g7OzswQ0FDaUIsQ0FBRTs7O3VDQUNMRCxTLEVBQVcs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QUFVLEtBQUtJLEtBQUwsQ0FBV0osTUFBbkM7QUFDQSxhQUFLOEIsRUFBTCxHQUFVQSxNQUFNLENBQWhCO0FBQ0EsYUFBS0MsRUFBTCxHQUFVQSxNQUFNLENBQWhCO0FBQ0g7Ozs7NkJBaUJJekMsRyxFQUFLO0FBQ05BLGdCQUFJNEMsU0FBSixDQUFjLEtBQUs5QixLQUFuQixFQUEwQixLQUFLNEIsQ0FBL0IsRUFBa0MsS0FBS0MsQ0FBdkMsRUFBMEMsS0FBS2xDLEtBQS9DLEVBQXNELEtBQUtDLE1BQTNEO0FBQ0g7Ozs0QkFsQlE7QUFDTCxtQkFBTzVLLEtBQUsrTSxLQUFMLENBQVcsS0FBS0gsQ0FBTCxHQUFTLEtBQUtqQyxLQUFMLEdBQWEsR0FBakMsQ0FBUDtBQUNILFM7MEJBTU12RyxLLEVBQU87QUFDVixpQkFBS3dJLENBQUwsR0FBUzVNLEtBQUsrTSxLQUFMLENBQVczSSxRQUFRLEtBQUt1RyxLQUFMLEdBQWEsR0FBaEMsQ0FBVDtBQUNIOzs7NEJBTlE7QUFDTCxtQkFBTzNLLEtBQUsrTSxLQUFMLENBQVcsS0FBS0YsQ0FBTCxHQUFTLEtBQUtqQyxNQUFMLEdBQWMsR0FBbEMsQ0FBUDtBQUNILFM7MEJBTU14RyxLLEVBQU87QUFDVixpQkFBS3lJLENBQUwsR0FBUzdNLEtBQUsrTSxLQUFMLENBQVczSSxRQUFRLEtBQUt3RyxNQUFMLEdBQWMsR0FBakMsQ0FBVDtBQUNIIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmNTcwNTNhZTY1ZDYwMjE5MDUyIiwiY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLmhvc3QgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICB1bm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMub25CZWZvcmVVbm1vdW50KCk7IFxyXG4gICAgfVxyXG4gICAgb25CZWZvcmVVbm1vdW50KCkge31cclxuICAgIG9uQmVmb3JlVXBkYXRlKG5leHRQcm9wcykge31cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gY2hpbGRyZW47XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKGNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJpbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnOyBcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIHRoaXMuX2NsYWltcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NsYWltcycpKTtcclxuICAgICAgICB0aGlzLmxvZ2luVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9sb2dpbmA7IFxyXG4gICAgICAgIHRoaXMuc3RvcmVVcmwgPSBgJHtET01BSU59L2FwaS92MS9zdG9yZS9saXN0YDsgXHJcbiAgICAgICAgdGhpcy5jcmVhdGVVcmwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL2NyZWF0ZWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRva2VuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHRva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNsYWltcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xhaW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjbGFpbXMoY2xhaW1zKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhaW1zID0gY2xhaW1zO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGFpbXMnLCBKU09OLnN0cmluZ2lmeShjbGFpbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0F1dGhvcml6ZWQoKSB7XHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy50b2tlbklzTm90RXhwaXJlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgICAgIHRoaXMuX2NsYWltcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSBudWxsO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjbGFpbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2tlbklzTm90RXhwaXJlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudG9rZW4pIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGFpbXMuZXhwKjEwMDAgPiBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5zdG9yZVVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luVXNlcihkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9ICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoKS5hcHBlbmQoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5sb2dpblVybCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSBhbnN3ZXIudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhaW1zID0gdGhpcy5wYXJzZUp3dENsYWltcyhhbnN3ZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oYW5zd2VyID0+IFByb21pc2UucmVqZWN0KHsgYW5zd2VyLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5jcmVhdGVVcmwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUp3dENsYWltcyhqd3RUb2tlbikge1xyXG4gICAgICAgIGlmIChqd3RUb2tlbikge1xyXG4gICAgICAgICAgICBsZXQgYmFzZTY0VXJsID0gand0VG9rZW4uc3BsaXQoJy4nKVsxXVxyXG4gICAgICAgICAgICBsZXQgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpXHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX1NFUlZJQ0UgPSBuZXcgQXV0aFNlcnZpY2UoKTsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmpzIiwiZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHJpbmc7XHJcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5ET00gPSAobWluLG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy91dGlscy5qcyIsImV4cG9ydCBjb25zdCBET01BSU4gPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhJztcclxuZXhwb3J0IGNvbnN0IElOR1JFRElFTlRTX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL2luZ3JlZGllbnQvbGlzdGA7XHJcbmV4cG9ydCBjb25zdCBUQUdfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdGFnL2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVVNFUl9VUkwgPSBgJHtET01BSU59L2FwaS92MS91c2VyL215X2luZm9gO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvY29uc3RhbnRzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YWRkcmVzcz5Lb3R0YW5zLCBLb3R0YW5zIFNydC4gMSxcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis1Nzc3ODg4N1wiPnRlbC4gNTc3LTc4OC04NzwvYT5cclxuICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5QaXp6YSBNYW5hZ2VyICZjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMS0wMVwiPjIwMTg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL1RPRE86IG5lZWQgZGVsZXRlIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJsb2dpbl9fYnV0dG9uLWxpbmtcIj5zaWduIGluPC9hPlxyXG4gICAgICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IEFVVEhfU0VSVklDRS5pc0F1dGhvcml6ZWQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9naW5CdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL2xvZ2luXCIgY2xhc3M9XCJidXR0b24gYXV0aF9fYnV0dG9uIGF1dGhfX2J1dHRvbi0taW5cIj5zaWduIGluPC9hPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgbG9nb3V0QnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9sb2dvdXRcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1vdXRcIj5zaWduIG91dDwvYT5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IHVzZXJCdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3VzZXJcIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pbmZvXCI+dXNlciBpbmZvPC9hPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uQnV0dG9uID0gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIy9yZWdpc3RyYXRpb25cIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS11cFwiPnNpZ24gdXA8L2E+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY3VycmVudC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNjbG9ja1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOC0wMi0wMyAxMjowMTo0OFwiPjEyOjAxOjQ4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCIjL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2dvXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJhdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHsgaXNBdXRob3JpemVkID8gbG9nb3V0QnV0dG9uIDogbG9naW5CdXR0b24gfVxyXG4gICAgICAgICAgICAgICAgICAgICR7IGlzQXV0aG9yaXplZCA/IHVzZXJCdXR0b24gOiByZWdpc3RyYXRpb25CdXR0b24gfSBcclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKGhlYWRlcik7XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL2ZyYW1ld29yay9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSID0gbmV3IFJvdXRlcih7IGhvc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JyksIHJvdXRlcyB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2luZGV4LmpzIiwiaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEd1YXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpID8gXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSB9KSA6XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgc3VjY2VzczogZmFsc2UsIHJlZGlyZWN0OiAnL2xvZ2luJ30pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyIsImltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5jbGFzcyBBdXRoSHR0cFNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBnZXQodXJsKSB7XHJcbiAgICAgICAgaWYgKCFBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vbi1hdXRob3JpemVkIHJlcXVlc3RcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtBVVRIX1NFUlZJQ0UudG9rZW59YCxcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UuanNvbigpKSwgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwYXRjaCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX0hUVFBfU0VSVklDRSA9IG5ldyBBdXRoSHR0cFNlcnZpY2UoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC1odHRwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuLi91dGlscy9hdXRoLmd1YXJkJztcclxuXHJcbmNsYXNzIFJvdXRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyByb3V0ZXMsIGhvc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJvdXRlcyxcclxuICAgICAgICAgICAgYWN0aXZlUm91dGU6IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNvbXBvbmVudDogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UgPSB0aGlzLmhhbmRsZVVybENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlSb3V0ZSA9IHRoaXMuYXBwbHlSb3V0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXJsQ2hhbmdlKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHsgcm91dGVzLCBhY3RpdmVSb3V0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXh0Um91dGUgPSByb3V0ZXMuZmluZCgoeyBocmVmIH0pID0+IGhyZWYgPT09IHVybCk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0Um91dGUgJiYgbmV4dFJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCEhbmV4dFJvdXRlLnJlZGlyZWN0VG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlZGlyZWN0KG5leHRSb3V0ZS5yZWRpcmVjdFRvKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoISFuZXh0Um91dGUubG9nb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0JylcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9nb3V0KG5leHRSb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghIW5leHRSb3V0ZS5vbkVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25FbnRlcicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5Um91dGUobmV4dFJvdXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxvZ291dChuZXh0Um91dGUpIHtcclxuICAgICAgICBuZXh0Um91dGUubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVkaXJlY3QodXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT25FbnRlcihuZXh0Um91dGUpIHtcclxuICAgICAgICBhdXRoR3VhcmQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5zdWNjZXNzID8gbnVsbCA6IHRoaXMuaGFuZGxlUmVkaXJlY3QocmVzLnJlZGlyZWN0KTsgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseVJvdXRlKHJvdXRlKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgfSA9IHJvdXRlO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEluc3RhbmNlID0gbmV3IENvbXBvbmVudCgpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuICAgICAgICAgICAgYWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvbXBvbmVudC51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwiaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyJztcclxuaW1wb3J0IE5ld1BpenphIGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGUnXHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vdXRpbHMvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBBcHAsXHJcbiAgICAgICAgaHJlZjogJycsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogJy8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgIGhyZWY6ICcvJyxcclxuICAgICAgICBvbkVudGVyOiBhdXRoR3VhcmRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBMb2dpbixcclxuICAgICAgICBocmVmOiAnL2xvZ2luJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBDb21wb25lbnQ6IFJlZ2lzdHJhdGlvbixcclxuICAgICAgICBocmVmOiAnL3JlZ2lzdHJhdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBVc2VyLFxyXG4gICAgICAgIGhyZWY6ICcvdXNlcicsXHJcbiAgICAgICAgb25FbnRlcjogYXV0aEd1YXJkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgIGhyZWY6ICcvbG9nb3V0JyxcclxuICAgICAgICBsb2dvdXQ6IEFVVEhfU0VSVklDRS5jbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgb25FbnRlcjogYXV0aEd1YXJkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogTmV3UGl6emEsXHJcbiAgICAgICAgaHJlZjogJy9jcmVhdGUnLFxyXG4gICAgICAgIG9uRW50ZXI6IGF1dGhHdWFyZFxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbi5mb3JtJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4tY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSBuZXcgTG9naW5Gb3JtKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMubG9naW4udXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9lcnJvci5tZXNzYWdlJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCB7IEFQUF9ST1VURVIgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4nKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBBVVRIX1NFUlZJQ0UubG9naW5Vc2VyKGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBzdGF0dXMuYW5zd2VyLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbG9naW4gPSAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiB2YWx1ZT0keyAhIXVzZXJuYW1lID8gdXNlcm5hbWUgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIHZhbHVlPSR7ICEhcGFzc3dvcmQgPyBwYXNzd29yZCA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwobG9naW4pO1xyXG5cclxuICAgICAgICBpZiAoISFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMubWVzc2FnZS51cGRhdGUoeyB0ZXh0OiBtZXNzYWdlIH0pO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2J1dHRvbicpLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yX19jb250YWluZXInKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX190ZXh0Jyk7XHJcblxyXG4gICAgICAgIGVycm9yLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvck1lc3NhZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXJyb3IubWVzc2FnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG5ldyBNYWluKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLm1haW4udXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGltZyB9IGZyb20gJy4uL3V0aWxzL2ltYWdlJztcclxuXHJcbi8vVE9ETzogaGFyZGNvcmVcclxuY29uc3QgcGl6emFzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQmF2YXJpYW4nLFxyXG4gICAgICAgIHVybDogaW1nLmJhdmFyaWFuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2hpY2tlbiB3aXRoIG11c2hyb29tcycsXHJcbiAgICAgICAgdXJsOiBpbWcuY2hpY2tlbldpdGhNdXNocm9vbXNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDaGlja2VuIHdpdGggcGluZWFwcGxlJyxcclxuICAgICAgICB1cmw6IGltZy5jaGlja2VuV2l0aFBpbmVhcHBsZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ZydWl0JyxcclxuICAgICAgICB1cmw6IGltZy5mcnVpdFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ01hcmdoZXJpdGEnLFxyXG4gICAgICAgIHVybDogaW1nLm1hcmdoZXJpdGFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUdXJrZXknLFxyXG4gICAgICAgIHVybDogaW1nLnR1cmtleVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1BlcHBlcm9uaScsXHJcbiAgICAgICAgdXJsOiBpbWcucGVwcGVyb25pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvc2NpdXR0bycsXHJcbiAgICAgICAgdXJsOiBpbWcucHJvc2NpdXR0b1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1p1Y2NoaW5pJyxcclxuICAgICAgICB1cmw6IGltZy56dWNjaGluaVxyXG4gICAgfSxcclxuXVxyXG5cclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBpenphKHBpenphcykge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gKHRpdGxlLCB1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwaXp6YVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBpenphX19pbWdcIiBzcmM9XCIke3VybH1cIiBhbHQ9XCJwaXp6YS1waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGl6emFfX25hbWVcIj4ke3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cInBpenphX190aW1lXCIgZGF0ZXRpbWU9XCIyMDE4LTAxLTMxVDE5OjAwXCI+MTI6MDE6NDg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBpenphX19xdWV1ZS1udW1iZXJcIj4jMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMDQ6MDBcIj40PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPiBcclxuICAgICAgICBgO1xyXG4gICAgICAgIH07ICAgIFxyXG5cclxuICAgICAgICBwaXp6YXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gbGlzdChlbC50aXRsZSwgZWwudXJsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYS5ocmVmID0gJyMvY3JlYXRlJztcclxuICAgICAgICBhLmNsYXNzTmFtZSA9ICdidXR0b24gYWRkLWxpbmsnO1xyXG4gICAgICAgIGEuaW5uZXJUZXh0ID0gJ2FkZCBuZXcgcGl6emEnO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGEsIHRoaXMuY3JlYXRlUGl6emEocGl6emFzKSk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsImltcG9ydCBQaXp6YUJhdmFyaWFuIGZyb20gJy4uLy4uL21lZGlhL3BpenphLWJhdmFyaWFuLnBuZyc7XHJcbmltcG9ydCBQaXp6YUNoaWNrZW5XaXRoTXVzaHJvb21zIGZyb20gJy4uLy4uL21lZGlhL3BpenphLWNoaWNrZW4td2l0aC1waW5lYXBwbGUucG5nJztcclxuaW1wb3J0IFBpenphQ2hpY2tlbldpdGhQaW5lYXBwbGUgZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtY2hpY2tlbi13aXRoLXBpbmVhcHBsZS5wbmcnO1xyXG5pbXBvcnQgUGl6emFGcnVpdCBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS1mcnVpdC5wbmcnO1xyXG5pbXBvcnQgUGl6emFNYXJnaGVyaXRhIGZyb20gJy4uLy4uL21lZGlhL3BpenphLW1hcmdoZXJpdGEucG5nJztcclxuaW1wb3J0IFBpenphUGVwcGVyb25pIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmcnO1xyXG5pbXBvcnQgUGl6emFQcmVtaXVtQ2hlZXNlIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZyc7XHJcbmltcG9ydCBQaXp6YVByb3NjaXV0dG8gZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmcnO1xyXG5pbXBvcnQgUGl6emFUdXJrZXkgZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtdHVya2V5LnBuZyc7XHJcbmltcG9ydCBQaXp6YVp1Y2NoaW5pIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW1nID0ge1xyXG4gICAgYmF2YXJpYW46IFBpenphQmF2YXJpYW4sXHJcbiAgICBjaGlja2VuV2l0aE11c2hyb29tczogUGl6emFDaGlja2VuV2l0aE11c2hyb29tcyxcclxuICAgIGNoaWNrZW5XaXRoUGluZWFwcGxlOiBQaXp6YUNoaWNrZW5XaXRoUGluZWFwcGxlLFxyXG4gICAgZnJ1aXQ6IFBpenphRnJ1aXQsXHJcbiAgICBtYXJnaGVyaXRhOiBQaXp6YU1hcmdoZXJpdGEsXHJcbiAgICBwZXBwZXJvbmk6IFBpenphUGVwcGVyb25pLFxyXG4gICAgcHJlbWl1bUNoZWVzZTogUGl6emFQcmVtaXVtQ2hlZXNlLFxyXG4gICAgcHJvc2NpdXR0bzogUGl6emFQcm9zY2l1dHRvLFxyXG4gICAgdHVya2V5OiBQaXp6YVR1cmtleSxcclxuICAgIHp1Y2NoaW5pOiBQaXp6YVp1Y2NoaW5pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9pbWFnZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIuL2Fzc2V0cy9tZWRpYS9waXp6YS1iYXZhcmlhbi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1iYXZhcmlhbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuL2Fzc2V0cy9tZWRpYS9waXp6YS1jaGlja2VuLXdpdGgtcGluZWFwcGxlLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL3BpenphLWNoaWNrZW4td2l0aC1waW5lYXBwbGUucG5nXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtZnJ1aXQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtZnJ1aXQucG5nXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtbWFyZ2hlcml0YS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1tYXJnaGVyaXRhLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1wZXBwZXJvbmkucG5nXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtcHJlbWl1bS1jaGVlc2UucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtcHJlbWl1bS1jaGVlc2UucG5nXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1wcm9zY2l1dHRvLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXR1cmtleS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS10dXJrZXkucG5nXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtenVjY2hpbmkucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtenVjY2hpbmkucG5nXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0nO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci51cGRhdGUoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdG9yZXM6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yZXMoKSB7XHJcbiAgICAgICAgQVVUSF9TRVJWSUNFLnN0b3JlSW5mbygpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0b3JlcyA9IHJlc3VsdDsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChldikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGV2LnRhcmdldC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBldi50YXJnZXQucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZF9yZXBlYXQ6IGV2LnRhcmdldC5wYXNzd29yZF9yZXBlYXQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICBlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgc3RvcmVfaWQ6IHBhcnNlSW50KGV2LnRhcmdldC5zdG9yZS5vcHRpb25zW2V2LnRhcmdldC5zdG9yZS5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmlkKSxcclxuICAgICAgICAgICAgc3RvcmVfcGFzc3dvcmQ6IGV2LnRhcmdldC5zdG9yZV9wYXNzd29yZC52YWx1ZS50cmltKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFVVEhfU0VSVklDRS5yZWdpc3RlclVzZXIoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RvcmVzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9ICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVnaXN0cmF0aW9uX190aXRsZVwiPnJlZ2lzdHJhdGlvbiBmb3JtPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVW5pcXVlLiBNaW4gbGVuZ3RoIDIgY2hhcnMsIG1heCAtIDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIj5SZS1lbnRlciBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRfcmVwZWF0XCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgbWF0Y2ggd2l0aCBwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIGVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlXCI+U3RvcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBoaWRkZW4gaWQ9XCJyZWdpc3RyYXRpb24tc3RvcmVcIiBuYW1lPVwic3RvcmVcIj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIj5TdG9yZSBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInN0b3JlX3Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgc3RvcmUgcGFzc3dvcmQuIE1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiByZWdpc3RyYXRpb25fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbChyZWdpc3RyYXRpb24pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uX19zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgaWYgKCEhc3RvcmVzKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZWxlbWVudC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQuaWQgPSBlbGVtZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoLWh0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX1VSTCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgY3JlYXRlZDogbnVsbCxcclxuICAgICAgICAgICAgdmlzaXRlZDogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3VzZXItY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIEFVVEhfSFRUUF9TRVJWSUNFLmdldChVU0VSX1VSTCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiByZXN1bHQudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcmVzdWx0LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZDogcmVzdWx0LmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkOiByZXN1bHQubGFzdF9sb2dpblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGNyZWF0ZWQsIHZpc2l0ZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGBcclxuICAgICAgICA8bWFpbiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IHVzZXJuYW1lIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IGVtYWlsIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IGNyZWF0ZWQgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHsgdmlzaXRlZCB9PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh1c2VyKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci51cGRhdGUoKSxcclxuICAgICAgICAgICAgZnJhZ21lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZS5kYXRhJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEUkFXIH0gZnJvbSAnLi9kcmF3JztcclxuXHJcbmNsYXNzIE5ld1BpenphIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFByb21pc2UuYWxsKFtDUkVBVEVfREFUQS5nZXRJbmdyZWRpZW50cygpLCBDUkVBVEVfREFUQS5nZXRUYWdzKCldKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19vcHRpb25zJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDbGljayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKHRoaXMucmVuZGVyRm9ybSgpKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJJbmdyZWRpZW50cyhDUkVBVEVfREFUQS5pbmdyZWRpZW50cykpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRhZ3MoQ1JFQVRFX0RBVEEudGFncykpO1xyXG4gICAgICAgICAgICAgICAgRFJBVy5vbkluaXQoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBjYW52YXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnRzOiBDUkVBVEVfREFUQS5pbmdyZWRpZW50cyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGV2KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXYpXHJcbiAgICAgICAgaWYgKGV2LnRhcmdldC5kYXRhc2V0LmZsYWcgPT09ICdpbmdyZWRpZW50Jykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmdyZWRpZW50c0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZsYWddJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTsgXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzSW5wdXRzLmZvckVhY2goaW5ncmVkaWVudElucHV0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGluZ3JlZGllbnRJbnB1dC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGluZ3JlZGllbnRJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBEUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRm9ybSgpIHtcclxuICAgICAgICBjb25zdCBmb3JtU3RyaW5nID0gYFxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fbmFtZSc+UGl6emEgTmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHJlcXVpcmVkIG1pbj0nMycgbWF4PScyNCc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9J2NyZWF0ZV9fZGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZSc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX3NpemUtdGl0bGUnPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzMwJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1zbWFsbFwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjQ1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdzaXplJyB2YWx1ZT0nMzAnIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbWVkaXVtXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZS1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSczMCc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICAgIFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy10aXRsZSc+SW5ncmVkaWVudHM8aDI+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IHRvSHRtbChmb3JtU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbmdyZWRpZW50cyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudHNTdHJpbmcgPSBgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy1pbnB1dCcgdHlwZT0nY2hlY2tib3gnIHZhbHVlPScke2RhdGEubmFtZX0nIGRhdGEtZmxhZz0naW5ncmVkaWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtET01BSU59LyR7ZGF0YS5pbWFnZV91cmx9JyBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cycgdGl0bGU9JyR7ZGF0YS5kZXNjcmlwdGlvbn0nIGRhdGEtbmFtZT0naW5ncmVkaWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICAgICAgICB9LCcnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPSdjcmVhdGVfX3RhZy10aXRsZSc+VGFnPGgyPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaW5ncmVkaWVudHNTdHJpbmcpO1xyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYWdzKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YWdzU3RyaW5nID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY3JlYXRlX190YWdzJz4ke2RhdGEucmVkdWNlKChodG1sLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX190YWdzLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgICAgICAgIH0sJycpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh0YWdzU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0cmluZyA9IGBcclxuICAgICAgICAgICAgPG1haW4gY2xhc3M9J2NyZWF0ZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXIgY3JlYXRlX19jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz0nY3JlYXRlX190aXRsZSc+Q3JlYXRlIFBpenphPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nY3JlYXRlX19jYW52YXMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nY3JlYXRlX19vcHRpb25zJz48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoY29udGFpbmVyU3RyaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIGZyYWdtZW50LFxyXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci51cGRhdGUoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1BpenphO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWF0ZS5qcyIsImltcG9ydCB7IEFVVEhfSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi9hdXRoLWh0dHAnO1xyXG5pbXBvcnQgeyBJTkdSRURJRU5UU19VUkwsIFRBR19VUkwgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBQaXp6YURhdGFTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmdyZWRpZW50cygpIHtcclxuICAgICAgICByZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UuZ2V0KElOR1JFRElFTlRTX1VSTCkudGhlbihcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWdzKCkge1xyXG4gICAgICAgIHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoVEFHX1VSTCkudGhlbihcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RBVEEgPSBuZXcgUGl6emFEYXRhU2VydmljZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jcmVhdGUuZGF0YS5qcyIsImltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuY2xhc3MgRHJhdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNydXN0X3BpenphID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYS9zdGF0aWMvaW1hZ2VzL3BpenphLnBuZyc7XHJcbiAgICAgICAgdGhpcy5fbG9hZEltYWdlID0gdGhpcy5fbG9hZEltYWdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Jbml0KGRhdGEpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBkYXRhLmhvc3Q7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IDMyMDtcclxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IDMyMDtcclxuICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gZGF0YS5pbmdyZWRpZW50cztcclxuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMubGFzdE9wdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fbG9hZFJlc291cmNlcygpLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXNvdXJjZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc291cmNlcy5mb3JFYWNoKHJlc291cmNlID0+IHRoaXMuaW1hZ2VzW3Jlc291cmNlLm5hbWVdID0gcmVzb3VyY2UuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmFwcGVuZCh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFNldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfc3RhcnRTZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzUG9vbCA9IFtdO1xyXG4gICAgICAgIGxldCBwaXp6YSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbJ3BpenphJ10sIDE2MCwgMTYwLCAzMDAsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzWydwaXp6YSddID0gcGl6emE7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzUG9vbC5wdXNoKHBpenphKTtcclxuICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0U2V0KCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA8ICh0aGlzLmJ1ZmZlci5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJylcclxuICAgICAgICAgICAgbGV0IHByZUJ1ZmZlciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RPcHRpb25zID0gW107XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbClcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdE9wdGlvbnMucHVzaChlbClcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaWQgPT09IGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZUJ1ZmZlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlczogZWxlbS5zcHJpdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXNQb29sID0gdGhpcy5zcHJpdGVzUG9vbC5jb25jYXQoZWxlbS5zcHJpdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHByZUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2V0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0T3B0aW9ucy5pbmNsdWRlcyhlbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZVNwcml0ZShlbCwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgIFxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBfZ2VuZXJhdGVTcHJpdGUobmFtZSwgY291bnQpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmdyZWRpZW50ID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1tgJHtuYW1lfWBdLCBSQU5ET00oODAsIDI0MCksIFJBTkRPTSg4MCwgMjQwKSk7XHJcbiAgICAgICAgICAgIHNwcml0ZXMucHVzaChpbmdyZWRpZW50KTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnVmZmVyLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogbmFtZSxcclxuICAgICAgICAgICAgc3ByaXRlczogc3ByaXRlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmRyYXcodGhpcy5jdHgpKTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZFJlc291cmNlcygpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJbWFnZSgncGl6emEnLCB0aGlzLmNydXN0X3BpenphKSk7XHJcbiAgICAgICAgcHJvbWlzZXMgPSBwcm9taXNlcy5jb25jYXQodGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmdyX3VybCA9IGAke0RPTUFJTn0vJHtpbmdyZWRpZW50LmltYWdlX3VybH1gO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEltYWdlKGluZ3JlZGllbnQubmFtZSwgaW5ncl91cmwpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkSW1hZ2UobmFtZSwgdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh7bmFtZSwgaW1hZ2V9KTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERSQVcgPSBuZXcgRHJhdygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RyYXcuanMiLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlLCBjeCwgY3ksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmltYWdlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY3ggPSBjeCB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3kgPSBjeSB8fCAwO1xyXG4gICAgfVxyXG4gICAgZ2V0IGN4KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueCArIHRoaXMud2lkdGggKiAwLjUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN5KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueSArIHRoaXMuaGVpZ2h0ICogMC41KVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBjeCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLndpZHRoICogMC41KVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBjeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodmFsdWUgLSB0aGlzLmhlaWdodCAqIDAuNSlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9zcHJpdGUuanMiXSwic291cmNlUm9vdCI6IiJ9