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
var CREATE_PIZZA = exports.CREATE_PIZZA = DOMAIN + '/api/v1/pizza/create';

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
        value: function post(url, data) {
            return fetch(url, {
                method: 'POST',
                body: data,
                headers: new Headers({
                    'Authorization': 'Bearer ' + _auth.AUTH_SERVICE.token
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

var _auth = __webpack_require__(1);

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

var _auth = __webpack_require__(8);

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
            console.log(ev);
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
            fd.append('size', 45);
            fd.append('ingredients', JSON.stringify(ingredients));
            fd.append('tags', JSON.stringify(tags));

            canvas.toBlob(function (blob) {
                fd.append('image', blob, "new_image.png");
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = fd.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var pair = _step.value;

                        console.log(pair[0] + ': ' + pair[1]);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

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

                console.log(options);
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
            console.log(data);
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
/* 31 */
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
                image.crossOrigin = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjMwZTVhOTdjNjFiNTE5YTAxM2YiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZyYW1ld29yay9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvYXV0aC1odHRwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvYXV0aC5ndWFyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnJhbWV3b3JrL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXJyb3IubWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLWJhdmFyaWFuLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtY2hpY2tlbi13aXRoLXBpbmVhcHBsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLWZydWl0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtbWFyZ2hlcml0YS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXR1cmtleS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2NyZWF0ZS5kYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc3ByaXRlLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJob3N0IiwibmV4dFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsIm5leHRQcm9wcyIsIm9uQmVmb3JlVW5tb3VudCIsImNoaWxkcmVuIiwicmVuZGVyIiwiaW5uZXJIVE1MIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXV0aFNlcnZpY2UiLCJfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2NsYWltcyIsIkpTT04iLCJwYXJzZSIsImxvZ2luVXJsIiwic3RvcmVVcmwiLCJjcmVhdGVVcmwiLCJ0b2tlbklzTm90RXhwaXJlZCIsImNsZWFyU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0b2tlbiIsImNsYWltcyIsImV4cCIsIkRhdGUiLCJub3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJvayIsImFuc3dlciIsInBhcnNlSnd0Q2xhaW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGF0dXMiLCJyZWplY3QiLCJqd3RUb2tlbiIsImJhc2U2NFVybCIsInNwbGl0IiwiYmFzZTY0IiwicmVwbGFjZSIsIndpbmRvdyIsImF0b2IiLCJzZXRJdGVtIiwiQVVUSF9TRVJWSUNFIiwidG9IdG1sIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHJpbmciLCJjb250ZW50IiwiUkFORE9NIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRE9NQUlOIiwiSU5HUkVESUVOVFNfVVJMIiwiVEFHX1VSTCIsIlVTRVJfVVJMIiwiQ1JFQVRFX1BJWlpBIiwiRm9vdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwiaXNBdXRob3JpemVkIiwibG9naW5CdXR0b24iLCJsb2dvdXRCdXR0b24iLCJ1c2VyQnV0dG9uIiwicmVnaXN0cmF0aW9uQnV0dG9uIiwiaGVhZGVyIiwiZnJhZ21lbnQiLCJBdXRoSHR0cFNlcnZpY2UiLCJ1cmwiLCJFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsIkFVVEhfSFRUUF9TRVJWSUNFIiwiQVBQX1JPVVRFUiIsInF1ZXJ5U2VsZWN0b3IiLCJyb3V0ZXMiLCJhdXRoR3VhcmQiLCJyZXN1bHQiLCJzdWNjZXNzIiwicmVkaXJlY3QiLCJSb3V0ZXIiLCJhY3RpdmVSb3V0ZSIsImFjdGl2ZUNvbXBvbmVudCIsImhhbmRsZVVybENoYW5nZSIsImJpbmQiLCJhcHBseVJvdXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJuZXh0Um91dGUiLCJmaW5kIiwiaHJlZiIsInJlZGlyZWN0VG8iLCJoYW5kbGVSZWRpcmVjdCIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJvbkVudGVyIiwiaGFuZGxlT25FbnRlciIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1cGRhdGVTdGF0ZSIsInVwZGF0ZSIsInNsaWNlIiwiTG9naW4iLCJoYW5kbGVTdWJtaXQiLCJsb2dpbiIsImZvb3RlciIsImV2IiwicHJldmVudERlZmF1bHQiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxvZ2luVXNlciIsInRleHQiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImFwcGVuZENoaWxkIiwiRXJyb3JNZXNzYWdlIiwiQXBwIiwibWFpbiIsInBpenphcyIsInRpdGxlIiwiYmF2YXJpYW4iLCJjaGlja2VuV2l0aE11c2hyb29tcyIsImNoaWNrZW5XaXRoUGluZWFwcGxlIiwiZnJ1aXQiLCJtYXJnaGVyaXRhIiwidHVya2V5IiwicGVwcGVyb25pIiwicHJvc2NpdXR0byIsInp1Y2NoaW5pIiwiTWFpbiIsImNvbnRhaW5lciIsImxpc3QiLCJmb3JFYWNoIiwiZWwiLCJhIiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiY3JlYXRlUGl6emEiLCJpbWciLCJwcmVtaXVtQ2hlZXNlIiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uRm9ybSIsInN0b3JlcyIsImdldFN0b3JlcyIsInN0b3JlSW5mbyIsInBhc3N3b3JkX3JlcGVhdCIsImVtYWlsIiwic3RvcmVfaWQiLCJwYXJzZUludCIsInN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJpZCIsInN0b3JlX3Bhc3N3b3JkIiwicmVnaXN0ZXJVc2VyIiwic2VsZWN0IiwiaGlkZGVuIiwib3B0aW9uIiwiZWxlbWVudCIsImZvcm0iLCJVc2VyIiwiY3JlYXRlZCIsInZpc2l0ZWQiLCJnZXRVc2VySW5mbyIsImdldCIsImNyZWF0ZWRfYXQiLCJsYXN0X2xvZ2luIiwidXNlciIsIk5ld1BpenphIiwic2l6ZSIsImluZ3JlZGllbnRzIiwidGFncyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUmVzaXplIiwicmVuZGVyRGF0YSIsImNhbnZhcyIsImRlc2NyaXB0aW9uIiwiZmQiLCJGb3JtRGF0YSIsInRvQmxvYiIsImJsb2IiLCJlbnRyaWVzIiwicGFpciIsInBvc3QiLCJhbGwiLCJnZXRJbmdyZWRpZW50cyIsImdldFRhZ3MiLCJidXR0b25zU3RyaW5nIiwiYnV0dG9ucyIsInJlbmRlckZvcm0iLCJyZW5kZXJJbmdyZWRpZW50cyIsInJlbmRlclRhZ3MiLCJvbkluaXQiLCJmbGFnIiwiaW5ncmVkaWVudHNJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmV3T3B0aW9ucyIsIm5ld0luZ3JlZGllbnRzIiwiaW5ncmVkaWVudElucHV0IiwiY2hlY2tlZCIsInB1c2giLCJhdHRyIiwic2l6ZUZpZWxkcyIsInNpemVGaWVsZCIsIm5ld1NpemUiLCJmb3JtU3RyaW5nIiwiaW5ncmVkaWVudHNTdHJpbmciLCJyZWR1Y2UiLCJodG1sIiwiaW1hZ2VfdXJsIiwidGFnc1N0cmluZyIsImNvbnRhaW5lclN0cmluZyIsIlBpenphRGF0YVNlcnZpY2UiLCJyZXN1bHRzIiwiQ1JFQVRFX0RBVEEiLCJEcmF3IiwiY3J1c3RfcGl6emEiLCJfbG9hZEltYWdlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaW1hZ2VzIiwic3ByaXRlcyIsImxhc3RPcHRpb25zIiwiYnVmZmVyIiwic3ByaXRlc1Bvb2wiLCJ3aWR0aCIsImhlaWdodCIsIl9sb2FkUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwicmVzb3VyY2UiLCJpbWFnZSIsIl9zdGFydFNldCIsInBpenphIiwiX2RyYXciLCJsZW5ndGgiLCJmaWx0ZXJlZEVsZW0iLCJlbGVtIiwiZmlsdGVyIiwieCIsInkiLCJjb25jYXQiLCJwcmVCdWZmZXIiLCJpbmNsdWRlcyIsIl9nZW5lcmF0ZVNwcml0ZSIsImNvdW50IiwiaSIsImluZ3JlZGllbnQiLCJjbGVhclJlY3QiLCJzcHJpdGUiLCJkcmF3IiwicHJvbWlzZXMiLCJtYXAiLCJpbmdyX3VybCIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImUiLCJzcmMiLCJjcm9zc09yaWdpbiIsIkRSQVciLCJTcHJpdGUiLCJjeCIsImN5IiwiZHJhd0ltYWdlIiwicm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3RE1BLFM7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmLGFBQUtBLEtBQUwsR0FBYUEsU0FBUyxFQUF0QjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDSDs7OztvQ0FFV0MsUyxFQUFXO0FBQ25CLGlCQUFLRixLQUFMLEdB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ZCxLQUEvQyxFQUFzRCxLQUFLQyxNQUEzRDtBQUNIOzs7NEJBbEJRO0FBQ0wsbUJBQU85TCxLQUFLb08sS0FBTCxDQUFXLEtBQUsxQixDQUFMLEdBQVMsS0FBS2IsS0FBTCxHQUFhLEdBQWpDLENBQVA7QUFDSCxTOzBCQU1NeEgsSyxFQUFPO0FBQ1YsaUJBQUtxSSxDQUFMLEdBQVMxTSxLQUFLb08sS0FBTCxDQUFXL0osUUFBUSxLQUFLd0gsS0FBTCxHQUFhLEdBQWhDLENBQVQ7QUFDSDs7OzRCQU5RO0FBQ0wsbUJBQU83TCxLQUFLb08sS0FBTCxDQUFXLEtBQUt6QixDQUFMLEdBQVMsS0FBS2IsTUFBTCxHQUFjLEdBQWxDLENBQVA7QUFDSCxTOzBCQU1NekgsSyxFQUFPO0FBQ1YsaUJBQUtzSSxDQUFMLEdBQVMzTSxLQUFLb08sS0FBTCxDQUFXL0osUUFBUSxLQUFLeUgsTUFBTCxHQUFjLEdBQWpDLENBQVQ7QUFDSCIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMzBlNWE5N2M2MWI1MTlhMDEzZiIsImNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgdW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLm9uQmVmb3JlVW5tb3VudCgpOyBcclxuICAgIH1cclxuICAgIG9uQmVmb3JlVW5tb3VudCgpIHt9XHJcbiAgICBvbkJlZm9yZVVwZGF0ZShuZXh0UHJvcHMpIHt9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmFwcGVuZCguLi5jaGlsZHJlbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmFwcGVuZChjaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvY29tcG9uZW50LmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJzsgXHJcblxyXG5jbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICB0aGlzLl9jbGFpbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGFpbXMnKSk7XHJcbiAgICAgICAgdGhpcy5sb2dpblVybCA9IGAke0RPTUFJTn0vYXBpL3YxL3VzZXIvbG9naW5gOyBcclxuICAgICAgICB0aGlzLnN0b3JlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvc3RvcmUvbGlzdGA7IFxyXG4gICAgICAgIHRoaXMuY3JlYXRlVXJsID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9jcmVhdGVgO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCB0b2tlbih0b2tlbikge1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbGFpbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYWltcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY2xhaW1zKGNsYWltcykge1xyXG4gICAgICAgIHRoaXMuX2NsYWltcyA9IGNsYWltcztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2xhaW1zJywgSlNPTi5zdHJpbmdpZnkoY2xhaW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBdXRob3JpemVkKCkge1xyXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMudG9rZW5Jc05vdEV4cGlyZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgICAgICB0aGlzLl9jbGFpbXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gbnVsbDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2xhaW1zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW5Jc05vdEV4cGlyZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRva2VuKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhaW1zLmV4cCoxMDAwID4gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yZUluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuc3RvcmVVcmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblVzZXIoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCkuYXBwZW5kKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMubG9naW5VcmwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbihhbnN3ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gYW5zd2VyLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYWltcyA9IHRoaXMucGFyc2VKd3RDbGFpbXMoYW5zd2VyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGFuc3dlciA9PiBQcm9taXNlLnJlamVjdCh7IGFuc3dlciwgc3RhdHVzOiByZXMuc3RhdHVzIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWdpc3RlclVzZXIoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuY3JlYXRlVXJsLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VKd3RDbGFpbXMoand0VG9rZW4pIHtcclxuICAgICAgICBpZiAoand0VG9rZW4pIHtcclxuICAgICAgICAgICAgbGV0IGJhc2U2NFVybCA9IGp3dFRva2VuLnNwbGl0KCcuJylbMV1cclxuICAgICAgICAgICAgbGV0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKVxyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9TRVJWSUNFID0gbmV3IEF1dGhTZXJ2aWNlKCk7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvYXV0aC5qcyIsImV4cG9ydCBjb25zdCB0b0h0bWwgPSBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyaW5nO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkFORE9NID0gKG1pbixtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXRpbHMvdXRpbHMuanMiLCJleHBvcnQgY29uc3QgRE9NQUlOID0gJ2h0dHBzOi8vcGl6emEtdGVsZS5nYSc7XHJcbmV4cG9ydCBjb25zdCBJTkdSRURJRU5UU19VUkwgPSBgJHtET01BSU59L2FwaS92MS9pbmdyZWRpZW50L2xpc3RgO1xyXG5leHBvcnQgY29uc3QgVEFHX1VSTCA9IGAke0RPTUFJTn0vYXBpL3YxL3RhZy9saXN0YDtcclxuZXhwb3J0IGNvbnN0IFVTRVJfVVJMID0gYCR7RE9NQUlOfS9hcGkvdjEvdXNlci9teV9pbmZvYDtcclxuZXhwb3J0IGNvbnN0IENSRUFURV9QSVpaQSA9IGAke0RPTUFJTn0vYXBpL3YxL3BpenphL2NyZWF0ZWA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9jb25zdGFudHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhZGRyZXNzPktvdHRhbnMsIEtvdHRhbnMgU3J0LiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzU3Nzc4ODg3XCI+dGVsLiA1NzctNzg4LTg3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPlBpenphIE1hbmFnZXIgJmNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE4LTAxLTAxXCI+MjAxODwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vVE9ETzogbmVlZCBkZWxldGUgPGEgaHJlZj1cIiMvbG9naW5cIiBjbGFzcz1cImxvZ2luX19idXR0b24tbGlua1wiPnNpZ24gaW48L2E+XHJcbiAgICAgICAgY29uc3QgaXNBdXRob3JpemVkID0gQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCgpO1xyXG5cclxuICAgICAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvbG9naW5cIiBjbGFzcz1cImJ1dHRvbiBhdXRoX19idXR0b24gYXV0aF9fYnV0dG9uLS1pblwiPnNpZ24gaW48L2E+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBsb2dvdXRCdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL2xvZ291dFwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLW91dFwiPnNpZ24gb3V0PC9hPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgdXNlckJ1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvdXNlclwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLWluZm9cIj51c2VyIGluZm88L2E+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCByZWdpc3RyYXRpb25CdXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL3JlZ2lzdHJhdGlvblwiIGNsYXNzPVwiYnV0dG9uIGF1dGhfX2J1dHRvbiBhdXRoX19idXR0b24tLXVwXCI+c2lnbiB1cDwvYT5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJjdXJyZW50LXRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2Nsb2NrXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE4LTAyLTAzIDEyOjAxOjQ4XCI+MTI6MDE6NDg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsb2dvXCIgaHJlZj1cIiMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2xvZ29cIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImF1dGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAkeyBpc0F1dGhvcml6ZWQgPyBsb2dvdXRCdXR0b24gOiBsb2dpbkJ1dHRvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsgaXNBdXRob3JpemVkID8gdXNlckJ1dHRvbiA6IHJlZ2lzdHJhdGlvbkJ1dHRvbiB9IFxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwoaGVhZGVyKTtcclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGgnO1xyXG5cclxuY2xhc3MgQXV0aEh0dHBTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgZ2V0KHVybCkge1xyXG4gICAgICAgIGlmICghQVVUSF9TRVJWSUNFLmlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb24tYXV0aG9yaXplZCByZXF1ZXN0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7QVVUSF9TRVJWSUNFLnRva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmpzb24oKSksIFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXNDb2RlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtBVVRIX1NFUlZJQ0UudG9rZW59YFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5qc29uKCkpLCBcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2Uuc3RhdHVzQ29kZSlcclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfSFRUUF9TRVJWSUNFID0gbmV3IEF1dGhIdHRwU2VydmljZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLWh0dHAuanMiLCJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vZnJhbWV3b3JrL3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVIgPSBuZXcgUm91dGVyKHsgaG9zdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSwgcm91dGVzIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW5kZXguanMiLCJpbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoR3VhcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBBVVRIX1NFUlZJQ0UuaXNBdXRob3JpemVkKCkgPyBcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiB0cnVlIH0pIDpcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiBmYWxzZSwgcmVkaXJlY3Q6ICcvbG9naW4nfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9hdXRoLmd1YXJkLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuLi91dGlscy9hdXRoLmd1YXJkJztcclxuXHJcbmNsYXNzIFJvdXRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyByb3V0ZXMsIGhvc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJvdXRlcyxcclxuICAgICAgICAgICAgYWN0aXZlUm91dGU6IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNvbXBvbmVudDogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UgPSB0aGlzLmhhbmRsZVVybENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlSb3V0ZSA9IHRoaXMuYXBwbHlSb3V0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UodGhpcy5wYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXJsQ2hhbmdlKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHsgcm91dGVzLCBhY3RpdmVSb3V0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXh0Um91dGUgPSByb3V0ZXMuZmluZCgoeyBocmVmIH0pID0+IGhyZWYgPT09IHVybCk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0Um91dGUgJiYgbmV4dFJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCEhbmV4dFJvdXRlLnJlZGlyZWN0VG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlZGlyZWN0KG5leHRSb3V0ZS5yZWRpcmVjdFRvKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoISFuZXh0Um91dGUubG9nb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0JylcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9nb3V0KG5leHRSb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghIW5leHRSb3V0ZS5vbkVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25FbnRlcicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU9uRW50ZXIobmV4dFJvdXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5Um91dGUobmV4dFJvdXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxvZ291dChuZXh0Um91dGUpIHtcclxuICAgICAgICBuZXh0Um91dGUubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVkaXJlY3QodXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT25FbnRlcihuZXh0Um91dGUpIHtcclxuICAgICAgICBhdXRoR3VhcmQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5zdWNjZXNzID8gbnVsbCA6IHRoaXMuaGFuZGxlUmVkaXJlY3QocmVzLnJlZGlyZWN0KTsgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseVJvdXRlKHJvdXRlKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgfSA9IHJvdXRlO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEluc3RhbmNlID0gbmV3IENvbXBvbmVudCgpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuICAgICAgICAgICAgYWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvbXBvbmVudC51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mcmFtZXdvcmsvcm91dGVyLmpzIiwiaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyJztcclxuaW1wb3J0IE5ld1BpenphIGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGUnXHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4vdXRpbHMvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBBcHAsXHJcbiAgICAgICAgaHJlZjogJycsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogJy8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgIGhyZWY6ICcvJyxcclxuICAgICAgICBvbkVudGVyOiBhdXRoR3VhcmRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBMb2dpbixcclxuICAgICAgICBocmVmOiAnL2xvZ2luJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBDb21wb25lbnQ6IFJlZ2lzdHJhdGlvbixcclxuICAgICAgICBocmVmOiAnL3JlZ2lzdHJhdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgQ29tcG9uZW50OiBVc2VyLFxyXG4gICAgICAgIGhyZWY6ICcvdXNlcicsXHJcbiAgICAgICAgb25FbnRlcjogYXV0aEd1YXJkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgIGhyZWY6ICcvbG9nb3V0JyxcclxuICAgICAgICBsb2dvdXQ6IEFVVEhfU0VSVklDRS5jbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgb25FbnRlcjogYXV0aEd1YXJkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIENvbXBvbmVudDogTmV3UGl6emEsXHJcbiAgICAgICAgaHJlZjogJy9jcmVhdGUnLFxyXG4gICAgICAgIG9uRW50ZXI6IGF1dGhHdWFyZFxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbi5mb3JtJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4tY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSBuZXcgTG9naW5Gb3JtKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMubG9naW4udXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9lcnJvci5tZXNzYWdlJztcclxuaW1wb3J0IHsgQVVUSF9TRVJWSUNFIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCB7IEFQUF9ST1VURVIgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9naW4nKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgRXJyb3JNZXNzYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBob3N0ID0gZXYudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBob3N0LnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGhvc3QucGFzc3dvcmQudmFsdWUudHJpbSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBBVVRIX1NFUlZJQ0UubG9naW5Vc2VyKGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGhvc3QudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaG9zdC5wYXNzd29yZC52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFQUF9ST1VURVIuaGFuZGxlUmVkaXJlY3QoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBzdGF0dXMuYW5zd2VyLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogaG9zdC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBob3N0LnBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbG9naW4gPSAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJsb2dpbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi11c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiB2YWx1ZT0keyAhIXVzZXJuYW1lID8gdXNlcm5hbWUgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5fX2lucHV0XCIgaWQ9XCJsb2dpbi1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIHZhbHVlPSR7ICEhcGFzc3dvcmQgPyBwYXNzd29yZCA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxvZ2luX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0b0h0bWwobG9naW4pO1xyXG5cclxuICAgICAgICBpZiAoISFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMubWVzc2FnZS51cGRhdGUoeyB0ZXh0OiBtZXNzYWdlIH0pO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2J1dHRvbicpLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4uZm9ybS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yX19jb250YWluZXInKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX190ZXh0Jyk7XHJcblxyXG4gICAgICAgIGVycm9yLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvck1lc3NhZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXJyb3IubWVzc2FnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG5ldyBNYWluKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLm1haW4udXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGltZyB9IGZyb20gJy4uL3V0aWxzL2ltYWdlJztcclxuXHJcbi8vVE9ETzogaGFyZGNvcmVcclxuY29uc3QgcGl6emFzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQmF2YXJpYW4nLFxyXG4gICAgICAgIHVybDogaW1nLmJhdmFyaWFuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2hpY2tlbiB3aXRoIG11c2hyb29tcycsXHJcbiAgICAgICAgdXJsOiBpbWcuY2hpY2tlbldpdGhNdXNocm9vbXNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDaGlja2VuIHdpdGggcGluZWFwcGxlJyxcclxuICAgICAgICB1cmw6IGltZy5jaGlja2VuV2l0aFBpbmVhcHBsZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ZydWl0JyxcclxuICAgICAgICB1cmw6IGltZy5mcnVpdFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ01hcmdoZXJpdGEnLFxyXG4gICAgICAgIHVybDogaW1nLm1hcmdoZXJpdGFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUdXJrZXknLFxyXG4gICAgICAgIHVybDogaW1nLnR1cmtleVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1BlcHBlcm9uaScsXHJcbiAgICAgICAgdXJsOiBpbWcucGVwcGVyb25pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvc2NpdXR0bycsXHJcbiAgICAgICAgdXJsOiBpbWcucHJvc2NpdXR0b1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1p1Y2NoaW5pJyxcclxuICAgICAgICB1cmw6IGltZy56dWNjaGluaVxyXG4gICAgfSxcclxuXVxyXG5cclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBpenphKHBpenphcykge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gKHRpdGxlLCB1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwaXp6YVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBpenphX19pbWdcIiBzcmM9XCIke3VybH1cIiBhbHQ9XCJwaXp6YS1waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGl6emFfX25hbWVcIj4ke3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cInBpenphX190aW1lXCIgZGF0ZXRpbWU9XCIyMDE4LTAxLTMxVDE5OjAwXCI+MTI6MDE6NDg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBpenphX19xdWV1ZS1udW1iZXJcIj4jMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMDQ6MDBcIj40PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPiBcclxuICAgICAgICBgO1xyXG4gICAgICAgIH07ICAgIFxyXG5cclxuICAgICAgICBwaXp6YXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gbGlzdChlbC50aXRsZSwgZWwudXJsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYS5ocmVmID0gJyMvY3JlYXRlJztcclxuICAgICAgICBhLmNsYXNzTmFtZSA9ICdidXR0b24gYWRkLWxpbmsnO1xyXG4gICAgICAgIGEuaW5uZXJUZXh0ID0gJ2FkZCBuZXcgcGl6emEnO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGEsIHRoaXMuY3JlYXRlUGl6emEocGl6emFzKSk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsImltcG9ydCBQaXp6YUJhdmFyaWFuIGZyb20gJy4uLy4uL21lZGlhL3BpenphLWJhdmFyaWFuLnBuZyc7XHJcbmltcG9ydCBQaXp6YUNoaWNrZW5XaXRoTXVzaHJvb21zIGZyb20gJy4uLy4uL21lZGlhL3BpenphLWNoaWNrZW4td2l0aC1waW5lYXBwbGUucG5nJztcclxuaW1wb3J0IFBpenphQ2hpY2tlbldpdGhQaW5lYXBwbGUgZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtY2hpY2tlbi13aXRoLXBpbmVhcHBsZS5wbmcnO1xyXG5pbXBvcnQgUGl6emFGcnVpdCBmcm9tICcuLi8uLi9tZWRpYS9waXp6YS1mcnVpdC5wbmcnO1xyXG5pbXBvcnQgUGl6emFNYXJnaGVyaXRhIGZyb20gJy4uLy4uL21lZGlhL3BpenphLW1hcmdoZXJpdGEucG5nJztcclxuaW1wb3J0IFBpenphUGVwcGVyb25pIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmcnO1xyXG5pbXBvcnQgUGl6emFQcmVtaXVtQ2hlZXNlIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXByZW1pdW0tY2hlZXNlLnBuZyc7XHJcbmltcG9ydCBQaXp6YVByb3NjaXV0dG8gZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmcnO1xyXG5pbXBvcnQgUGl6emFUdXJrZXkgZnJvbSAnLi4vLi4vbWVkaWEvcGl6emEtdHVya2V5LnBuZyc7XHJcbmltcG9ydCBQaXp6YVp1Y2NoaW5pIGZyb20gJy4uLy4uL21lZGlhL3BpenphLXp1Y2NoaW5pLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW1nID0ge1xyXG4gICAgYmF2YXJpYW46IFBpenphQmF2YXJpYW4sXHJcbiAgICBjaGlja2VuV2l0aE11c2hyb29tczogUGl6emFDaGlja2VuV2l0aE11c2hyb29tcyxcclxuICAgIGNoaWNrZW5XaXRoUGluZWFwcGxlOiBQaXp6YUNoaWNrZW5XaXRoUGluZWFwcGxlLFxyXG4gICAgZnJ1aXQ6IFBpenphRnJ1aXQsXHJcbiAgICBtYXJnaGVyaXRhOiBQaXp6YU1hcmdoZXJpdGEsXHJcbiAgICBwZXBwZXJvbmk6IFBpenphUGVwcGVyb25pLFxyXG4gICAgcHJlbWl1bUNoZWVzZTogUGl6emFQcmVtaXVtQ2hlZXNlLFxyXG4gICAgcHJvc2NpdXR0bzogUGl6emFQcm9zY2l1dHRvLFxyXG4gICAgdHVya2V5OiBQaXp6YVR1cmtleSxcclxuICAgIHp1Y2NoaW5pOiBQaXp6YVp1Y2NoaW5pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91dGlscy9pbWFnZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIuL2Fzc2V0cy9tZWRpYS9waXp6YS1iYXZhcmlhbi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1iYXZhcmlhbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuL2Fzc2V0cy9tZWRpYS9waXp6YS1jaGlja2VuLXdpdGgtcGluZWFwcGxlLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL3BpenphLWNoaWNrZW4td2l0aC1waW5lYXBwbGUucG5nXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtZnJ1aXQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtZnJ1aXQucG5nXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtbWFyZ2hlcml0YS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1tYXJnaGVyaXRhLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXBlcHBlcm9uaS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1wZXBwZXJvbmkucG5nXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtcHJlbWl1bS1jaGVlc2UucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtcHJlbWl1bS1jaGVlc2UucG5nXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtcHJvc2NpdXR0by5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS1wcm9zY2l1dHRvLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4vYXNzZXRzL21lZGlhL3BpenphLXR1cmtleS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9waXp6YS10dXJrZXkucG5nXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9hc3NldHMvbWVkaWEvcGl6emEtenVjY2hpbmkucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvcGl6emEtenVjY2hpbmkucG5nXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0nO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlKCksXHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uLnVwZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci51cGRhdGUoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0b0h0bWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFVVEhfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdG9yZXM6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yZXMoKSB7XHJcbiAgICAgICAgQVVUSF9TRVJWSUNFLnN0b3JlSW5mbygpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0b3JlcyA9IHJlc3VsdDsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChldikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGV2LnRhcmdldC51c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBldi50YXJnZXQucGFzc3dvcmQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZF9yZXBlYXQ6IGV2LnRhcmdldC5wYXNzd29yZF9yZXBlYXQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICBlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgc3RvcmVfaWQ6IHBhcnNlSW50KGV2LnRhcmdldC5zdG9yZS5vcHRpb25zW2V2LnRhcmdldC5zdG9yZS5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmlkKSxcclxuICAgICAgICAgICAgc3RvcmVfcGFzc3dvcmQ6IGV2LnRhcmdldC5zdG9yZV9wYXNzd29yZC52YWx1ZS50cmltKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFVVEhfU0VSVklDRS5yZWdpc3RlclVzZXIoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RvcmVzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9ICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVnaXN0cmF0aW9uX190aXRsZVwiPnJlZ2lzdHJhdGlvbiBmb3JtPC9oMj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tdXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVW5pcXVlLiBNaW4gbGVuZ3RoIDIgY2hhcnMsIG1heCAtIDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbnB1dFwiIGlkPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJNaW4gbGVuZ3RoIDggY2hhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIj5SZS1lbnRlciBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgaWQ9XCJyZWdpc3RyYXRpb24tcmUtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRfcmVwZWF0XCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgbWF0Y2ggd2l0aCBwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbl9faW5wdXRcIiBpZD1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2hvdWxkIGJlIHZhbGlkIGVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlXCI+U3RvcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBoaWRkZW4gaWQ9XCJyZWdpc3RyYXRpb24tc3RvcmVcIiBuYW1lPVwic3RvcmVcIj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZWdpc3RyYXRpb24tc3RvcmUtcGFzc3dvcmRcIj5TdG9yZSBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2lucHV0XCIgZm9yPVwicmVnaXN0cmF0aW9uLXN0b3JlLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInN0b3JlX3Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTaG91bGQgYmUgdmFsaWQgc3RvcmUgcGFzc3dvcmQuIE1pbiBsZW5ndGggOCBjaGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiByZWdpc3RyYXRpb25fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbChyZWdpc3RyYXRpb24pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uX19zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgaWYgKCEhc3RvcmVzKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZWxlbWVudC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQuaWQgPSBlbGVtZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLmZvcm0uanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHRvSHRtbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuLi91dGlscy9hdXRoLWh0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX1VSTCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgY3JlYXRlZDogbnVsbCxcclxuICAgICAgICAgICAgdmlzaXRlZDogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3VzZXItY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIEFVVEhfSFRUUF9TRVJWSUNFLmdldChVU0VSX1VSTCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiByZXN1bHQudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcmVzdWx0LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZDogcmVzdWx0LmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkOiByZXN1bHQubGFzdF9sb2dpblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGNyZWF0ZWQsIHZpc2l0ZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGBcclxuICAgICAgICA8bWFpbiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IHVzZXJuYW1lIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IGVtYWlsIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiR7IGNyZWF0ZWQgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+JHsgdmlzaXRlZCB9PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbCh1c2VyKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci51cGRhdGUoKSxcclxuICAgICAgICAgICAgZnJhZ21lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9mcmFtZXdvcmsvY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5pbXBvcnQgeyBDUkVBVEVfREFUQSB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZS5kYXRhJztcclxuaW1wb3J0IHsgdG9IdG1sIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBET01BSU4sIENSRUFURV9QSVpaQSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERSQVcgfSBmcm9tICcuL2RyYXcnO1xyXG5pbXBvcnQgeyBBVVRIX0hUVFBfU0VSVklDRSB9IGZyb20gJy4uL3V0aWxzL2F1dGgtaHR0cCc7XHJcblxyXG5jbGFzcyBOZXdQaXp6YSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaXplOiAnNjAnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbXSxcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFtdLFxyXG4gICAgICAgICAgICB0YWdzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgICAgICAgY29uc3QgeyBzaXplLCBpbmdyZWRpZW50cywgdGFncyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fbmFtZS12YWx1ZScpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZV9fZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmZC5hcHBlbmQoJ25hbWUnLCBuYW1lLnZhbHVlKTtcclxuICAgICAgICAgICAgZmQuYXBwZW5kKCdkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgZmQuYXBwZW5kKCdzaXplJywgNDUpO1xyXG4gICAgICAgICAgICBmZC5hcHBlbmQoJ2luZ3JlZGllbnRzJywgSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHMpKTtcclxuICAgICAgICAgICAgZmQuYXBwZW5kKCd0YWdzJywgSlNPTi5zdHJpbmdpZnkodGFncykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcbiAgICAgICAgICAgIGZkLmFwcGVuZCgnaW1hZ2UnLCBibG9iLCBcIm5ld19pbWFnZS5wbmdcIilcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFpciBvZiBmZC5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhaXJbMF0gKyAnOiAnICsgcGFpclsxXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQVVUSF9IVFRQX1NFUlZJQ0UucG9zdChDUkVBVEVfUElaWkEsIGZkKS50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlckRhdGEoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW0NSRUFURV9EQVRBLmdldEluZ3JlZGllbnRzKCksIENSRUFURV9EQVRBLmdldFRhZ3MoKV0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVfX29wdGlvbnMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuICAgICAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19jYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uc1N0cmluZyA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1jYW5jZWwnIHR5cGU9J2J1dHRvbic+Y2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBjcmVhdGVfX2J1dHRvbi1zZW5kJyB0eXBlPSdzdWJtaXQnPmNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0b0h0bWwoYnV0dG9uc1N0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKHRoaXMucmVuZGVyRm9ybSgpKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJJbmdyZWRpZW50cyhDUkVBVEVfREFUQS5pbmdyZWRpZW50cykpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRhZ3MoQ1JFQVRFX0RBVEEudGFncykpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuICAgICAgICAgICAgICAgIERSQVcub25Jbml0KFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogY2FudmFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50czogQ1JFQVRFX0RBVEEuaW5ncmVkaWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgIH0pOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhldikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChldi50YXJnZXQuZGF0YXNldC5mbGFnID09PSAnaW5ncmVkaWVudCcpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5ncmVkaWVudHNJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mbGFnXScpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb25zID0gW107IFxyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmdyZWRpZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBpbmdyZWRpZW50c0lucHV0cy5mb3JFYWNoKGluZ3JlZGllbnRJbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpbmdyZWRpZW50SW5wdXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbnMucHVzaChpbmdyZWRpZW50SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZ3JlZGllbnRzLnB1c2gocGFyc2VJbnQoaW5ncmVkaWVudElucHV0LmRhdGFzZXQuaWQpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBuZXdPcHRpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgaW5ncmVkaWVudHM6IG5ld0luZ3JlZGllbnRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgY29uc3QgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBEUkFXLmhhbmRsZUNsaWNrKG9wdGlvbnMsIHNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVzaXplKGV2KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGV2LnRhcmdldC5kYXRhc2V0LmF0dHIgPT09ICdzaXplJykge1xyXG4gICAgICAgICAgIGNvbnN0IHNpemVGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRyXScpO1xyXG4gICAgICAgICAgIHNpemVGaWVsZHMuZm9yRWFjaChzaXplRmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICBpZiAoc2l6ZUZpZWxkLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NpemUgPSBzaXplRmllbGQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogbmV3U2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgICAgICBsZXQgeyBzaXplLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICAgICAgICAgRFJBVy5oYW5kbGVDbGljayhvcHRpb25zLCBzaXplKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRm9ybSgpIHtcclxuICAgICAgICBjb25zdCBmb3JtU3RyaW5nID0gYFxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NyZWF0ZV9fbmFtZSc+UGl6emEgTmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHJlcXVpcmVkIG1pbj0nMycgbWF4PScyNCcgY2xhc3M9J2NyZWF0ZV9fbmFtZS12YWx1ZSc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9J2NyZWF0ZV9fZGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2NyZWF0ZV9fc2l6ZSc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjcmVhdGVfX3NpemUtdGl0bGUnPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nY3JlYXRlX19zaXplLW9wdGlvbi12YWx1ZScgdHlwZT0ncmFkaW8nIG5hbWU9J3NpemUnIHZhbHVlPSczMCcgZGF0YS1hdHRyPSdzaXplJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZSBjcmVhdGVfX3NpemUtb3B0aW9uLS1zbWFsbFwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjQ1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzQ1JyBkYXRhLWF0dHI9J3NpemUnPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlIGNyZWF0ZV9fc2l6ZS1vcHRpb24tLW1lZGl1bVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjYwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX3NpemUtb3B0aW9uLXZhbHVlJyB0eXBlPSdyYWRpbycgbmFtZT0nc2l6ZScgdmFsdWU9JzYwJyBkYXRhLWF0dHI9J3NpemUnIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUgY3JlYXRlX19zaXplLW9wdGlvbi0tbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICAgIFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz0nY3JlYXRlX19pbmdyZWRpZW50cy10aXRsZSc+SW5ncmVkaWVudHM8aDI+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IHRvSHRtbChmb3JtU3RyaW5nKTtcclxuICAgICAgICBjb25zdCBzaXplRmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlX19zaXplJyk7XHJcbiAgICAgICAgc2l6ZUZpZWxkcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVJlc2l6ZSlcclxuICAgICAgICByZXR1cm4gZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbmdyZWRpZW50cyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCBpbmdyZWRpZW50c1N0cmluZyA9IGAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NyZWF0ZV9faW5ncmVkaWVudHMnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzLWlucHV0JyB0eXBlPSdjaGVja2JveCcgdmFsdWU9JyR7ZGF0YS5uYW1lfScgZGF0YS1mbGFnPSdpbmdyZWRpZW50JyBkYXRhLWlkPScke2RhdGEuaWR9Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke0RPTUFJTn0vJHtkYXRhLmltYWdlX3VybH0nIGNsYXNzPSdjcmVhdGVfX2luZ3JlZGllbnRzJyB0aXRsZT0nJHtkYXRhLmRlc2NyaXB0aW9ufScgZGF0YS1uYW1lPSdpbmdyZWRpZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgICAgICAgIH0sJycpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9J2NyZWF0ZV9fdGFnLXRpdGxlJz5UYWc8aDI+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbChpbmdyZWRpZW50c1N0cmluZyk7XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhZ3MoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRhZ3NTdHJpbmcgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjcmVhdGVfX3RhZ3MnPiR7ZGF0YS5yZWR1Y2UoKGh0bWwsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjcmVhdGVfX3RhZ3MtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgICAgICAgICAgfSwnJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdG9IdG1sKHRhZ3NTdHJpbmcpO1xyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyU3RyaW5nID0gYFxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzcz0nY3JlYXRlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lciBjcmVhdGVfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPSdjcmVhdGVfX3RpdGxlJz5DcmVhdGUgUGl6emE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX2NhbnZhcyc+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdjcmVhdGVfX29wdGlvbnMnPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRvSHRtbChjb250YWluZXJTdHJpbmcpO1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci51cGRhdGUoKSxcclxuICAgICAgICAgICAgZnJhZ21lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnVwZGF0ZSgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UGl6emE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY3JlYXRlLmpzIiwiaW1wb3J0IHsgQVVUSF9IVFRQX1NFUlZJQ0UgfSBmcm9tICcuL2F1dGgtaHR0cCc7XHJcbmltcG9ydCB7IElOR1JFRElFTlRTX1VSTCwgVEFHX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIFBpenphRGF0YVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMudGFncyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZ3JlZGllbnRzKCkge1xyXG4gICAgICAgIHJldHVybiBBVVRIX0hUVFBfU0VSVklDRS5nZXQoSU5HUkVESUVOVFNfVVJMKS50aGVuKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFVVEhfSFRUUF9TRVJWSUNFLmdldChUQUdfVVJMKS50aGVuKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFncyA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfREFUQSA9IG5ldyBQaXp6YURhdGFTZXJ2aWNlKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3V0aWxzL2NyZWF0ZS5kYXRhLmpzIiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5jbGFzcyBEcmF3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3J1c3RfcGl6emEgPSAnaHR0cHM6Ly9waXp6YS10ZWxlLmdhL3N0YXRpYy9pbWFnZXMvcGl6emEucG5nJztcclxuICAgICAgICB0aGlzLl9sb2FkSW1hZ2UgPSB0aGlzLl9sb2FkSW1hZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluaXQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRhdGEuaG9zdDtcclxuICAgICAgICB0aGlzLnNpemUgPSAnNjAnO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSAzMjA7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAzMjA7XHJcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IGRhdGEuaW5ncmVkaWVudHM7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnNwcml0ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLmxhc3RPcHRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbXTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNQb29sID0gW107XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX2xvYWRSZXNvdXJjZXMoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzb3VyY2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiB0aGlzLmltYWdlc1tyZXNvdXJjZS5uYW1lXSA9IHJlc291cmNlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5hcHBlbmQodGhpcy5jYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRTZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3N0YXJ0U2V0KCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wgPSBbXTtcclxuICAgICAgICAvLyBsZXQgcGl6emEgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2VzWydwaXp6YSddLCAxNjAsIDE2MCwgMzAwLCAzMDApO1xyXG4gICAgICAgIGxldCBwaXp6YSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZXNbJ3BpenphJ10sIDE2MCwgMTYwLCAzMDAqYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gLzYwLCAzMDAqYCR7cGFyc2VJbnQodGhpcy5zaXplKX1gLzYwKTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNbJ3BpenphJ10gPSBwaXp6YTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNQb29sLnB1c2gocGl6emEpO1xyXG4gICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhvcHRpb25zLCBzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLl9zdGFydFNldCgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PSB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXIuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZSA9PSAzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS54IDwgMTgwICYmIGVsZW0ueCA+IDExMCAgJiYgZWxlbS55ID4gMTEwICYmIGVsZW0ueSA8IDE4MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZSA9PSA0NSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS54IDwgMjAwICYmIGVsZW0ueCA+IDkwICAmJiBlbGVtLnkgPiA5MCAmJiBlbGVtLnkgPCAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpemUgPT0gNjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ueCA8IDI1NSAmJiBlbGVtLnggPiA0MCAgJiYgZWxlbS55ID4gNDAgJiYgZWxlbS55IDwgMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoIDwgdGhpcy5idWZmZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmVCdWZmZXIgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0T3B0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0T3B0aW9ucy5wdXNoKGVsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5pZCA9PT0gZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlQnVmZmVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzOiBlbGVtLnNwcml0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRWxlbSA9IGVsZW0uc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaXplID09IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChmaWx0ZXJlZEVsZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGVsZW0uc3ByaXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmNvbmNhdChwcmVCdWZmZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFNldCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdE9wdGlvbnMuaW5jbHVkZXMoZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhdygpOyAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE9wdGlvbnMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2VuZXJhdGVTcHJpdGUoZWwsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRFbGVtID0gZWwuc3ByaXRlcy5maWx0ZXIoZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaXplID09IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ueCA8IDE4MCAmJiBlbGVtLnggPiAxMTAgICYmIGVsZW0ueSA+IDExMCAmJiBlbGVtLnkgPCAxODA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaXplID09IDQ1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ueCA8IDIwMCAmJiBlbGVtLnggPiA5MCAgJiYgZWxlbS55ID4gOTAgJiYgZWxlbS55IDwgMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZSA9PSA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnggPCAyNTUgJiYgZWxlbS54ID4gNDAgICYmIGVsZW0ueSA+IDQwICYmIGVsZW0ueSA8IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzUG9vbCA9IHRoaXMuc3ByaXRlc1Bvb2wuY29uY2F0KGZpbHRlcmVkRWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByaXRlc1Bvb2wgPSB0aGlzLnNwcml0ZXNQb29sLmNvbmNhdChlbGVtLnNwcml0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgIFxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBfZ2VuZXJhdGVTcHJpdGUobmFtZSwgY291bnQpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmdyZWRpZW50ID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlc1tgJHtuYW1lfWBdLCBSQU5ET00oNzAsIDI1MCksIFJBTkRPTSg3MCwgMjUwKSk7XHJcbiAgICAgICAgICAgIHNwcml0ZXMucHVzaChpbmdyZWRpZW50KTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnVmZmVyLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogbmFtZSxcclxuICAgICAgICAgICAgc3ByaXRlczogc3ByaXRlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1Bvb2wuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmRyYXcodGhpcy5jdHgpKTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZFJlc291cmNlcygpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJbWFnZSgncGl6emEnLCB0aGlzLmNydXN0X3BpenphKSk7XHJcbiAgICAgICAgcHJvbWlzZXMgPSBwcm9taXNlcy5jb25jYXQodGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmdyX3VybCA9IGAke0RPTUFJTn0vJHtpbmdyZWRpZW50LmltYWdlX3VybH1gO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEltYWdlKGluZ3JlZGllbnQubmFtZSwgaW5ncl91cmwpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkSW1hZ2UobmFtZSwgdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh7bmFtZSwgaW1hZ2V9KTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgaW1hZ2Uud2lkdGggPSAyMDtcclxuICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gMjA7XHJcbiAgICAgICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRFJBVyA9IG5ldyBEcmF3KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZHJhdy5qcyIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2UsIGN4LCBjeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IHRoaXMuaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5pbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jeCA9IGN4IHx8IDA7XHJcbiAgICAgICAgdGhpcy5jeSA9IGN5IHx8IDA7XHJcbiAgICB9XHJcbiAgICBnZXQgY3goKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy54ICsgdGhpcy53aWR0aCAqIDAuNSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3koKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAwLjUpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGN4KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMud2lkdGggKiAwLjUpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGN5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh2YWx1ZSAtIHRoaXMuaGVpZ2h0ICogMC41KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Nwcml0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=