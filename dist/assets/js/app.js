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

var _router = __webpack_require__(14);

var _router2 = _interopRequireDefault(_router);

var _routes = __webpack_require__(15);

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
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(10);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(12)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--0-2!../../../node_modules/sass-loader/lib/loader.js??ref--0-3!./app.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--0-2!../../../node_modules/sass-loader/lib/loader.js??ref--0-3!./app.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&subset=cyrillic);", ""]);

// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nimg {\n  width: 100%; }\n\nh1, h2 {\n  margin: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n.button {\n  display: block;\n  appearance: none;\n  user-select: none;\n  text-align: center;\n  white-space: nowrap;\n  text-decoration: none;\n  height: 3rem;\n  padding: 0 0.5rem;\n  border: 0.125rem solid transparent;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 2.625rem;\n  -webkit-font-smoothing: antialiased;\n  border-radius: 0.25rem;\n  letter-spacing: 0.09375rem;\n  transition: all 0.3s ease;\n  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);\n  cursor: pointer; }\n  .button:hover {\n    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2); }\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  height: 44px;\n  margin-bottom: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n  border: 1px solid #dbe2e8;\n  box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\n  border-radius: 2px;\n  color: #2e3d49; }\n  input[type=text]:active, input[type=password]:active {\n    outline: none;\n    border-color: #f7a75a; }\n  input[type=text]:focus, input[type=password]:focus {\n    outline: none;\n    border-color: #f7a75a; }\n  input[type=text]::placeholder, input[type=password]::placeholder {\n    opacity: .5; }\n\nhtml {\n  height: 100%;\n  overflow-y: scroll; }\n\nbody {\n  margin: 0;\n  color: #525c65;\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1.5rem;\n  height: 100%;\n  -webkit-font-smoothing: antialiased; }\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px; }\n\n#root {\n  height: 100%; }\n\n.login-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.registration-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.user-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.create-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.header {\n  width: 100%;\n  background: #cc3354; }\n\n.nav {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n  @media (min-width: 768px) {\n    .nav {\n      flex-wrap: nowrap;\n      padding: 15px 0; } }\n  .nav .current-time {\n    display: flex;\n    justify-content: space-between;\n    align-self: flex-start;\n    order: 3;\n    margin: 15px auto 15px 0;\n    color: #fff; }\n    @media (min-width: 768px) {\n      .nav .current-time {\n        justify-content: flex-start;\n        align-self: center;\n        order: 1;\n        width: 25%;\n        margin: 0; } }\n    @media (min-width: 1024px) {\n      .nav .current-time {\n        width: 30%; } }\n    @media (min-width: 1200px) {\n      .nav .current-time {\n        width: 25%; } }\n    .nav .current-time svg {\n      width: 25px;\n      height: 25px;\n      fill: #ffd31a; }\n    .nav .current-time time {\n      margin-left: 5px; }\n  .nav .logo {\n    order: 1;\n    width: 100%;\n    padding: 15px 0; }\n    @media (min-width: 768px) {\n      .nav .logo {\n        order: 2;\n        width: 50%;\n        padding: 0; } }\n    @media (min-width: 1024px) {\n      .nav .logo {\n        width: 40%; } }\n    @media (min-width: 1200px) {\n      .nav .logo {\n        width: 50%; } }\n    .nav .logo svg {\n      width: 100%;\n      fill: #ffd31a; }\n  .nav .auth {\n    display: flex;\n    justify-content: space-between;\n    order: 2;\n    width: 100%;\n    text-transform: uppercase; }\n    @media (min-width: 768px) {\n      .nav .auth {\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: flex-end;\n        width: 25%; } }\n    @media (min-width: 1024px) {\n      .nav .auth {\n        flex-direction: row;\n        align-items: center;\n        width: 30%; } }\n    @media (min-width: 1200px) {\n      .nav .auth {\n        width: 25%; } }\n    .nav .auth__button {\n      width: 140px;\n      color: #fff;\n      background: #f43745; }\n      .nav .auth__button:hover {\n        background: #e5354b; }\n      .nav .auth__button-link {\n        display: inline-block;\n        text-decoration: none;\n        color: #fff;\n        width: 100%;\n        height: 100%; }\n\n.login {\n  flex: 1 0 auto;\n  padding: 60px 0;\n  background: #ff8b17; }\n  .login__title {\n    margin-bottom: 15px;\n    text-transform: uppercase; }\n  .login__form {\n    max-width: 620px;\n    margin: 0 auto;\n    padding: 60px;\n    border: 1px solid #dbe2e8;\n    background: #fff;\n    box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12); }\n  .login__button {\n    min-width: 207px;\n    width: 100%;\n    margin-top: 20px;\n    color: #fff;\n    background: #f7a75a; }\n\n.error__text {\n  color: #909070; }\n\n.registration {\n  flex: 1 0 auto;\n  padding: 60px 0;\n  background: #ff8b17; }\n  .registration__title {\n    margin-bottom: 15px;\n    text-transform: uppercase; }\n  .registration__form {\n    max-width: 620px;\n    margin: 0 auto;\n    padding: 60px;\n    border: 1px solid #dbe2e8;\n    background: #fff;\n    box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12); }\n  .registration__input {\n    width: 100%;\n    height: 44px;\n    margin-bottom: 20px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border: 1px solid #dbe2e8;\n    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\n    border-radius: 2px;\n    color: #2e3d49; }\n    .registration__input:active {\n      outline: none;\n      border-color: #f7a75a; }\n    .registration__input:focus {\n      outline: none;\n      border-color: #f7a75a; }\n    .registration__input::placeholder {\n      opacity: .5; }\n  .registration__button {\n    min-width: 207px;\n    width: 100%;\n    margin-top: 20px;\n    color: #fff;\n    background: #f7a75a; }\n  .registration__select {\n    width: 100%;\n    height: 44px;\n    margin-bottom: 20px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border: 1px solid #dbe2e8;\n    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\n    border-radius: 2px;\n    color: #2e3d49; }\n\n.user {\n  flex: 1 0 auto;\n  padding: 60px 0;\n  background: #ff8b17; }\n\n.main {\n  padding-top: 10px;\n  background: #ff8b17; }\n  .main .add-link {\n    width: 140px;\n    margin: 10px auto;\n    background: #ffc822;\n    text-decoration: none;\n    color: #525c65; }\n    .main .add-link:hover {\n      background: #ffd31a; }\n  .main section {\n    display: flex;\n    flex-wrap: wrap; }\n    .main section .pizza {\n      display: flex;\n      flex-wrap: wrap;\n      margin: 20px;\n      padding: 15px;\n      background: #fffde5;\n      border-radius: 0.375rem;\n      box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);\n      transition: all 0.3s ease; }\n      @media (min-width: 768px) {\n        .main section .pizza {\n          width: calc(50% - 40px); } }\n      @media (min-width: 1200px) {\n        .main section .pizza {\n          width: calc(100% / 3 - 40px); } }\n      .main section .pizza__img {\n        align-self: center; }\n      .main section .pizza__name {\n        width: 100%;\n        margin: 15px 0;\n        font-size: 18px;\n        font-weight: 600;\n        white-space: nowrap;\n        text-align: center; }\n      .main section .pizza:hover {\n        box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2); }\n      .main section .pizza__time {\n        width: 50%; }\n      .main section .pizza__queue-number {\n        width: 50%;\n        text-align: right;\n        color: #e5354b; }\n      .main section .pizza__eta {\n        width: 50%; }\n        .main section .pizza__eta time {\n          color: #cc3354; }\n        .main section .pizza__eta span:first-child {\n          text-transform: uppercase; }\n      .main section .pizza__price {\n        width: 50%;\n        text-align: right; }\n\n.footer {\n  flex-shrink: 0;\n  background: #303030; }\n  .footer .container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 15px;\n    color: #fff; }\n    @media (min-width: 768px) {\n      .footer .container {\n        justify-content: space-between; } }\n    .footer .container address {\n      font-style: normal; }\n      .footer .container address a {\n        color: #fff; }\n\n.create {\n  flex: 1 0 auto;\n  padding: 60px 0;\n  background: #ff8b17; }\n  .create__container {\n    display: flex;\n    flex-wrap: wrap; }\n  .create__title {\n    font-size: 35px;\n    width: 100%;\n    text-align: center; }\n  .create__canvas {\n    width: 50%;\n    height: 100px; }\n  .create__name {\n    font-size: 20px; }\n  .create__options {\n    width: 50%; }\n  .create form {\n    display: flex;\n    flex-direction: column; }\n  .create__description {\n    width: 100%;\n    height: 60px;\n    padding: 15px;\n    border: 1px solid #dbe2e8;\n    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\n    border-radius: 2px; }\n  .create__ingredients {\n    display: flex;\n    flex-wrap: wrap;\n    width: 50%; }\n    .create__ingredients-item {\n      position: relative;\n      display: flex;\n      padding: 5px;\n      width: calc(100% / 7); }\n    .create__ingredients-input {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      opacity: 0;\n      pointer-events: none; }\n      .create__ingredients-input:checked ~ img {\n        box-shadow: 0 0 0 2px #ffffff; }\n    .create__ingredients img {\n      width: 100%; }\n  .create__tags {\n    display: flex;\n    flex-direction: column; }\n", "", {"version":3,"sources":["C:/home/kottans/task_12/src/assets/scss/src/assets/scss/common.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/variables.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/header.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/helpers/media-queries.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/login.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/registration.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/user.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/main.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/footer.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/create.scss"],"names":[],"mappings":"AAAA;EACI,uBAAsB,EACzB;;AAED;EACI,YAAW,EACd;;AAID;EACI,UAAS;EACZ,gBAAe;EACf,cAAa;EACb,yBAAwB,EACxB;;AAED;EACI,eAAc;EACd,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,oBAAmB;EACnB,sBAAqB;EACrB,aAAY;EACZ,kBAAiB;EACjB,mCAAkC;EAClC,qCAAoC;EACpC,0BAAyB;EACzB,iBAAgB;EAChB,qBAAoB;EACpB,sBAAqB;EACrB,oCAAmC;EACnC,uBAAsB;EACtB,2BAA0B;EAC1B,0BAAyB;EACzB,mDAA+C;EAC/C,gBAAe,EAKlB;EAzBD;IAuBQ,gDAA4C,EAC/C;;AAGL;EACI,YAAW;EACX,aAAY;EACZ,oBAAmB;EACnB,mBAAkB;EAClB,oBAAmB;EACnB,0BAAyB;EACzB,+CAA8C;EAC9C,mBAAkB;EAClB,eAAc,EAejB;EAxBD;IAYQ,cAAa;IACb,sBC9CkB,ED+CrB;EAdL;IAiBQ,cAAa;IACb,sBCnDkB,EDoDrB;EAnBL;IAsBQ,YAAW,EACd;;AAGL;EACI,aAAY;EACZ,mBAAiB,EACpB;;AAED;EACI,UAAS;EACT,eCzEiB;ED0EjB,gBAAe;EACf,qCAAoC;EACpC,oBAAmB;EACnB,aAAY;EACZ,oCAAmC,EACtC;;AAED;EACI,kBAAiB;EACjB,eAAc;EACd,gBAAe,EAClB;;AAED;EACI,aAAY,EACf;;AAED;EACI,cAAa;EACb,uBAAsB;EACtB,kBAAiB,EACpB;;AAED;EACI,cAAa;EACb,uBAAsB;EACtB,kBAAiB,EACpB;;AAED;EACI,cAAa;EACb,uBAAsB;EACtB,kBAAiB,EACpB;;AAED;EACI,cAAa;EACb,uBAAsB;EACtB,kBAAiB,EACpB;;AErHD;EACI,YAAW;EACX,oBDasB,ECZzB;;AAED;EACI,cAAa;EACb,wBAAuB;EACvB,gBAAe,EAmGlB;EC7EA;IDzBD;MAKQ,kBAAiB;MACjB,gBAAe,EAgGtB,EAAA;EAtGD;IAUQ,cAAa;IACb,+BAA8B;IAC9B,uBAAsB;IACtB,SAAQ;IACR,yBAAwB;IACxB,YDbU,ECqCb;ICdJ;MDzBD;QAiBY,4BAA2B;QAC3B,mBAAkB;QAClB,SAAQ;QACR,WAAU;QACV,UAAS,EAkBhB,EAAA;ICRJ;MD/BD;QAwBY,WAAU,EAejB,EAAA;ICFJ;MDrCD;QA2BY,WAAU,EAYjB,EAAA;IAvCL;MA+BY,YAAW;MACX,aAAY;MACZ,cDpCS,ECqCZ;IAlCT;MAqCY,iBAAgB,EACnB;EAtCT;IA0CQ,SAAQ;IACR,YAAW;IACX,gBAAe,EAiBlB;ICpCJ;MDzBD;QA8CY,SAAQ;QACR,WAAU;QACV,WAAU,EAajB,EAAA;IC9BJ;MD/BD;QAmDY,WAAU,EAUjB,EAAA;ICxBJ;MDrCD;QAsDY,WAAU,EAOjB,EAAA;IA7DL;MA0DY,YAAW;MACX,cD9DS,EC+DZ;EA5DT;IAgEQ,cAAa;IACb,+BAA8B;IAC9B,SAAQ;IACR,YAAW;IACX,0BAAyB,EAiC5B;IC5EJ;MDzBD;QAsEY,uBAAsB;QACtB,+BAA8B;QAC9B,sBAAqB;QACrB,WAAU,EA4BjB,EAAA;ICtEJ;MD/BD;QA4EY,oBAAmB;QACnB,oBAAmB;QACnB,WAAU,EAuBjB,EAAA;IChEJ;MDrCD;QAiFY,WAAU,EAoBjB,EAAA;IArGL;MAqFY,aAAY;MACZ,YDpFM;MCqFN,oBDhFc,EC6FjB;MApGT;QA0FgB,oBDlFU,ECmFb;MA3Fb;QA8FgB,sBAAqB;QACrB,sBAAqB;QACrB,YAAU;QACV,YAAW;QACX,aAAY,EACf;;AExGb;EACI,eAAc;EACd,gBAAe;EACf,oBHEiB,EGqBpB;EArBG;IACI,oBAAmB;IACnB,0BAAyB,EAC5B;EAED;IACI,iBAAgB;IAChB,eAAc;IACd,cAAa;IACb,0BAAyB;IACzB,iBAAgB;IAChB,oDAAmD,EACtD;EAED;IACI,iBAAgB;IAChB,YAAW;IACX,iBAAgB;IAChB,YAAW;IACX,oBHbkB,EGcrB;;AAQD;EACI,eAAc,EACjB;;ACnCL;EACI,eAAc;EACd,gBAAe;EACf,oBJEiB,EI2DpB;EA3DG;IACI,oBAAmB;IACnB,0BAAyB,EAC5B;EAED;IACI,iBAAgB;IAChB,eAAc;IACd,cAAa;IACb,0BAAyB;IACzB,iBAAgB;IAChB,oDAAmD,EACtD;EAED;IACI,YAAW;IACX,aAAY;IACZ,oBAAmB;IACnB,mBAAkB;IAClB,oBAAmB;IACnB,0BAAyB;IACzB,+CAA8C;IAC9C,mBAAkB;IAClB,eAAc,EAejB;IAxBD;MAYQ,cAAa;MACb,sBJrBc,EIsBjB;IAdL;MAiBQ,cAAa;MACb,sBJ1Bc,EI2BjB;IAnBL;MAsBQ,YAAW,EACd;EAGL;IACI,iBAAgB;IAChB,YAAW;IACX,iBAAgB;IAChB,YAAW;IACX,oBJvCkB,EIwCrB;EAED;IACI,YAAW;IACX,aAAY;IACZ,oBAAmB;IACnB,mBAAkB;IAClB,oBAAmB;IACnB,0BAAyB;IACzB,+CAA8C;IAC9C,mBAAkB;IAClB,eAAc,EACjB;;AC/DL;EACI,eAAc;EACd,gBAAe;EACf,oBLEiB,EKDpB;;ACJD;EACE,kBAAiB;EACjB,oBNGmB,EM2EpB;EAhFD;IAKI,aAAY;IACZ,kBAAiB;IACjB,oBNJiB;IMKjB,sBAAqB;IACrB,eNLiB,EMSlB;IAbH;MAWM,oBNTe,EMUhB;EAZL;IAgBI,cAAa;IACb,gBAAe,EA8DhB;IA/EH;MAoBM,cAAa;MACb,gBAAe;MACf,aAAY;MACZ,cAAa;MACb,oBNvBe;MMwBf,wBAAuB;MACvB,iDAA6C;MAC7C,0BAAyB,EAmD1B;MJhDJ;QI9BD;UA6BQ,wBAAuB,EAiD1B,EAAA;MJpCJ;QI1CD;UAgCQ,6BAA4B,EA8C/B,EAAA;MA9EL;QAoCQ,mBAAkB,EACnB;MArCP;QAwCQ,YAAW;QACX,eAAc;QACd,gBAAe;QACf,iBAAgB;QAChB,oBAAmB;QACnB,mBAAkB,EACnB;MA9CP;QAiDQ,gDAA4C,EAC7C;MAlDP;QAqDQ,WAAU,EACX;MAtDP;QAyDQ,WAAU;QACV,kBAAiB;QACjB,eN9CkB,EM+CnB;MA5DP;QA+DQ,WAAU,EASX;QAxEP;UAkEU,eNnDgB,EMoDjB;QAnET;UAsEU,0BAAyB,EAC1B;MAvET;QA2EQ,WAAU;QACV,kBAAiB,EAClB;;AC7EP;EACI,eAAc;EACd,oBPQsB,EOYzB;EAtBD;IAKQ,cAAa;IACb,gBAAe;IACf,oBAAmB;IACnB,cAAa;IACb,YPFU,EOcb;ILSJ;MK9BD;QAWY,+BAA8B,EAUrC,EAAA;IArBL;MAeY,mBAAkB,EAKrB;MApBT;QAkBgB,YPXE,EOYL;;ACnBb;EACI,eAAc;EACd,gBAAe;EAEf,oBRCiB,EQyEpB;EAxEG;IACI,cAAa;IACb,gBAAe,EAClB;EAED;IACI,gBAAe;IACf,YAAW;IACX,mBAAkB,EACrB;EAED;IACI,WAAU;IACV,cAAa,EAChB;EAED;IACI,gBAAe,EAClB;EAED;IACI,WAAU,EACb;EA5BL;IA+BQ,cAAa;IACb,uBAAsB,EACzB;EAED;IACI,YAAW;IACX,aAAY;IACZ,cAAa;IACb,0BAAyB;IACzB,+CAA8C;IAC9C,mBAAkB,EACrB;EAED;IACI,cAAa;IACb,gBAAe;IACf,WAAU,EAyBb;IAvBG;MACI,mBAAkB;MAClB,cAAa;MACb,aAAY;MACZ,sBAAqB,EACxB;IAED;MACI,mBAAkB;MAClB,SAAQ;MACR,UAAS;MACT,iCAAgC;MAChC,WAAU;MACV,qBAAoB,EAKvB;MAXD;QASQ,8BAA6B,EAChC;IAtBT;MA0BQ,YAAW,EACd;EAGL;IACI,cAAa;IACb,uBAAsB,EACzB","file":"app.scss","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\nh1, h2 {\r\n    margin: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n.button {\r\n    display: block;\r\n    appearance: none;\r\n    user-select: none;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    text-decoration: none;\r\n    height: 3rem;\r\n    padding: 0 0.5rem;\r\n    border: 0.125rem solid transparent;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    font-size: 0.8125rem;\r\n    line-height: 2.625rem;\r\n    -webkit-font-smoothing: antialiased;\r\n    border-radius: 0.25rem;\r\n    letter-spacing: 0.09375rem;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 8px 10px 20px 0 rgba(46,61,73,0.15);\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n        box-shadow: 2px 4px 8px 0 rgba(46,61,73,0.2);\r\n    }\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    height: 44px;\r\n    margin-bottom: 20px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    border: 1px solid #dbe2e8;\r\n    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\r\n    border-radius: 2px;\r\n    color: #2e3d49;\r\n\r\n    &:active {\r\n        outline: none;\r\n        border-color: $light-orange;\r\n    }\r\n\r\n    &:focus {\r\n        outline: none;\r\n        border-color: $light-orange;\r\n    }\r\n\r\n    &::placeholder {\r\n        opacity: .5;\r\n    }\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n    overflow-y:scroll;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    color: $grey;\r\n    font-size: 16px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    line-height: 1.5rem;\r\n    height: 100%;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 15px;\r\n}\r\n\r\n#root {\r\n    height: 100%;\r\n}\r\n\r\n.login-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\n.registration-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\n.user-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\n.create-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}","// colors\r\n$wheat:       #fffde5;\r\n$yellow:      #ffd31a;\r\n$yellow-plus: #ffc822;\r\n$grey:        #525c65;\r\n$orange:      #ff8b17;\r\n$black:       #000;\r\n$white:       #fff;\r\n\r\n//sub-colors\r\n$grey-dark:        #303030;\r\n$light-orange:     #f7a75a;\r\n$orange-red-light: #f43745;\r\n$orange-red:       #e5354b;\r\n$orange-pink-light:#d83550;\r\n$orange-pink:      #cc3354;",".header {\r\n    width: 100%;\r\n    background: $orange-pink;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    @include tablet-min {\r\n        flex-wrap: nowrap;\r\n        padding: 15px 0;\r\n    }\r\n\r\n    & .current-time {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-self: flex-start;\r\n        order: 3;\r\n        margin: 15px auto 15px 0;\r\n        color: $white;\r\n        @include tablet-min {\r\n            justify-content: flex-start;\r\n            align-self: center;\r\n            order: 1;\r\n            width: 25%;\r\n            margin: 0;\r\n        }\r\n        @include tablet-landscape-min {\r\n            width: 30%;\r\n        }\r\n        @include desktop-min {\r\n            width: 25%;\r\n        }\r\n\r\n        & svg {\r\n            width: 25px;\r\n            height: 25px;\r\n            fill: $yellow;\r\n        }\r\n\r\n        & time {\r\n            margin-left: 5px;\r\n        }\r\n    }\r\n\r\n    & .logo {\r\n        order: 1;\r\n        width: 100%;\r\n        padding: 15px 0;\r\n        @include tablet-min {\r\n            order: 2;\r\n            width: 50%;\r\n            padding: 0;\r\n        }\r\n        @include tablet-landscape-min {\r\n            width: 40%;\r\n        }\r\n        @include desktop-min {\r\n            width: 50%;\r\n        }\r\n\r\n        & svg {\r\n            width: 100%;\r\n            fill: $yellow;\r\n        }\r\n    }\r\n\r\n    & .auth {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        order: 2;\r\n        width: 100%;\r\n        text-transform: uppercase;\r\n        @include tablet-min {\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            align-items: flex-end;\r\n            width: 25%;\r\n        }\r\n        @include tablet-landscape-min {\r\n            flex-direction: row;\r\n            align-items: center;\r\n            width: 30%;\r\n        }\r\n        @include desktop-min {\r\n            width: 25%;\r\n        }\r\n\r\n        &__button {\r\n            width: 140px;\r\n            color: $white;\r\n            background: $orange-red-light;\r\n\r\n            &:hover {\r\n                background: $orange-red;\r\n            }\r\n            //TODO: fix this class\r\n            &-link {\r\n                display: inline-block;\r\n                text-decoration: none;\r\n                color:#fff;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        }\r\n    }\r\n}","// Settings\r\n$mobile-s-width:   320px;\r\n$mobile-m-width:   375px;\r\n$mobile-l-width:   425px;\r\n$tablet-p-width:   768px;\r\n$tablet-l-width:   1024px;\r\n$desktop-width:    1200px;\r\n$desktop-l-width:  1440px;\r\n$desktop-4k-width: 2560px;\r\n\r\n// Mixins\r\n@mixin mobile-small-min {\r\n\t@media (min-width: #{$mobile-s-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin mobile-medium-min {\r\n\t@media (min-width: #{$mobile-m-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin mobile-large-min {\r\n\t@media (min-width: #{$mobile-l-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin tablet-min {\r\n\t@media (min-width: #{$tablet-p-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin tablet-landscape-min {\r\n\t@media (min-width: #{$tablet-l-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin desktop-min {\r\n\t@media (min-width: #{$desktop-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin desktop-l-min {\r\n\t@media (min-width: #{$desktop-l-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin desktop-4k {\r\n\t@media (min-width: #{$desktop-4k-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin retina {\r\n  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){\r\n    @content;\r\n  }\r\n}\r\n",".login {\r\n    flex: 1 0 auto;\r\n    padding: 60px 0;\r\n    background: $orange;\r\n\r\n    &__title {\r\n        margin-bottom: 15px;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    &__form {\r\n        max-width: 620px;\r\n        margin: 0 auto;\r\n        padding: 60px;\r\n        border: 1px solid #dbe2e8;\r\n        background: #fff;\r\n        box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12);\r\n    }\r\n\r\n    &__button {\r\n        min-width: 207px;\r\n        width: 100%;\r\n        margin-top: 20px;\r\n        color: #fff;\r\n        background: $light-orange;\r\n    }\r\n}\r\n\r\n.error {\r\n    &__container {\r\n\r\n    }\r\n\r\n    &__text {\r\n        color: #909070;\r\n    }\r\n}",".registration {\r\n    flex: 1 0 auto;\r\n    padding: 60px 0;\r\n    background: $orange;\r\n\r\n    &__title {\r\n        margin-bottom: 15px;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    &__form {\r\n        max-width: 620px;\r\n        margin: 0 auto;\r\n        padding: 60px;\r\n        border: 1px solid #dbe2e8;\r\n        background: #fff;\r\n        box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12);\r\n    }\r\n\r\n    &__input {\r\n        width: 100%;\r\n        height: 44px;\r\n        margin-bottom: 20px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        border: 1px solid #dbe2e8;\r\n        box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\r\n        border-radius: 2px;\r\n        color: #2e3d49;\r\n\r\n        &:active {\r\n            outline: none;\r\n            border-color: $light-orange;\r\n        }\r\n\r\n        &:focus {\r\n            outline: none;\r\n            border-color: $light-orange;\r\n        }\r\n\r\n        &::placeholder {\r\n            opacity: .5;\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        min-width: 207px;\r\n        width: 100%;\r\n        margin-top: 20px;\r\n        color: #fff;\r\n        background: $light-orange;\r\n    }\r\n\r\n    &__select {\r\n        width: 100%;\r\n        height: 44px;\r\n        margin-bottom: 20px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        border: 1px solid #dbe2e8;\r\n        box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\r\n        border-radius: 2px;\r\n        color: #2e3d49;\r\n    }\r\n}",".user {\r\n    flex: 1 0 auto;\r\n    padding: 60px 0;\r\n    background: $orange;\r\n}",".main {\r\n  padding-top: 10px;\r\n  background: $orange;\r\n\r\n  & .add-link {\r\n    width: 140px;\r\n    margin: 10px auto;\r\n    background: $yellow-plus;\r\n    text-decoration: none;\r\n    color: $grey;\r\n    &:hover {\r\n      background: $yellow;\r\n    }\r\n  }\r\n\r\n  & section {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    & .pizza {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      margin: 20px;\r\n      padding: 15px;\r\n      background: $wheat;\r\n      border-radius: 0.375rem;\r\n      box-shadow: 5px 5px 25px 0 rgba(46,61,73,0.2);\r\n      transition: all 0.3s ease;\r\n      @include tablet-min {\r\n        width: calc(50% - 40px);\r\n      }\r\n      @include desktop-min {\r\n        width: calc(100% / 3 - 40px);\r\n      }\r\n\r\n      &__img {\r\n        align-self: center;\r\n      }\r\n\r\n      &__name {\r\n        width: 100%;\r\n        margin: 15px 0;\r\n        font-size: 18px;\r\n        font-weight: 600;\r\n        white-space: nowrap;\r\n        text-align: center;\r\n      }\r\n\r\n      &:hover {\r\n        box-shadow: 2px 4px 8px 0 rgba(46,61,73,0.2);\r\n      }\r\n\r\n      &__time {\r\n        width: 50%;\r\n      }\r\n\r\n      &__queue-number {\r\n        width: 50%;\r\n        text-align: right;\r\n        color: $orange-red;\r\n      }\r\n\r\n      &__eta {\r\n        width: 50%;\r\n\r\n        & time {\r\n          color: $orange-pink;\r\n        }\r\n\r\n        & span:first-child {\r\n          text-transform: uppercase;\r\n        }\r\n      }\r\n\r\n      &__price {\r\n        width: 50%;\r\n        text-align: right;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n",".footer {\r\n    flex-shrink: 0;\r\n    background: $grey-dark;\r\n\r\n    & .container {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        align-items: center;\r\n        padding: 15px;\r\n        color: $white;\r\n        @include tablet-min {\r\n            justify-content: space-between;\r\n        }\r\n\r\n        & address {\r\n            font-style: normal;\r\n\r\n            & a {\r\n                color: $white;\r\n            }\r\n        }\r\n    }\r\n}\r\n",".create {\r\n    flex: 1 0 auto;\r\n    padding: 60px 0;\r\n    \r\n    background: $orange;\r\n\r\n    &__container {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    &__title {\r\n        font-size: 35px;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n\r\n    &__canvas {\r\n        width: 50%;\r\n        height: 100px;\r\n    }\r\n\r\n    &__name {\r\n        font-size: 20px;\r\n    }\r\n\r\n    &__options {\r\n        width: 50%;\r\n    }\r\n\r\n    & form {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    &__description {\r\n        width: 100%;\r\n        height: 60px;\r\n        padding: 15px;\r\n        border: 1px solid #dbe2e8;\r\n        box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\r\n        border-radius: 2px;\r\n    }\r\n\r\n    &__ingredients {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        width: 50%;\r\n\r\n        &-item {\r\n            position: relative;\r\n            display: flex;\r\n            padding: 5px;\r\n            width: calc(100% / 7);\r\n        }\r\n\r\n        &-input {\r\n            position: absolute;\r\n            top: 50%;\r\n            left: 50%;\r\n            transform: translate(-50%, -50%);\r\n            opacity: 0;\r\n            pointer-events: none;\r\n\r\n            &:checked ~ img {\r\n                box-shadow: 0 0 0 2px #ffffff;\r\n            }\r\n        }\r\n\r\n        & img {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n    &__tags {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(13);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _login = __webpack_require__(16);

var _login2 = _interopRequireDefault(_login);

var _app = __webpack_require__(19);

var _app2 = _interopRequireDefault(_app);

var _registration = __webpack_require__(21);

var _registration2 = _interopRequireDefault(_registration);

var _user = __webpack_require__(23);

var _user2 = _interopRequireDefault(_user);

var _create = __webpack_require__(24);

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
/* 16 */
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

var _login = __webpack_require__(17);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(2);

var _error = __webpack_require__(18);

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
/* 18 */
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

var _main = __webpack_require__(20);

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
/* 20 */
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

//TODO: hardcore
var pizzas = [{
    title: 'Bavarian',
    url: 'bavarian'
}, {
    title: 'Chicken with mushrooms',
    url: 'chicken-with-mushrooms'
}, {
    title: 'Chicken with pineapple',
    url: 'chicken-with-pineapple'
}, {
    title: 'Fruit',
    url: 'fruit'
}, {
    title: 'Margherita',
    url: 'margherita'
}, {
    title: 'Turkey',
    url: 'turkey'
}, {
    title: 'Pepperoni',
    url: 'pepperoni'
}, {
    title: 'Prosciutto',
    url: 'prosciutto'
}, {
    title: 'Zucchini',
    url: 'zucchini'
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
                return '\n            <article class="pizza">\n                <img class="pizza__img" src="./assets/img/pizza-' + url + '.png" alt="pizza-photo">\n                <h2 class="pizza__name">' + title + '</h2>\n                <time class="pizza__time" datetime="2018-01-31T19:00">12:01:48</time>\n                <span class="pizza__queue-number">#1</span>\n                <div class="pizza__eta">\n                    <span>eta</span>\n                    <time datetime="04:00">4</time>\n                    <span>min</span>\n                </div>\n                <div class="pizza__price">\n                    <span>$</span>\n                    <span>10</span>\n                </div>\n            </article> \n        ';
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
/* 21 */
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

var _registration = __webpack_require__(22);

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
/* 22 */
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
/* 23 */
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
/* 24 */
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

var _create = __webpack_require__(25);

var _utils = __webpack_require__(2);

var _constants = __webpack_require__(3);

var _draw = __webpack_require__(26);

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
            var formString = '\n        <label>\n            <span class=\'create__name\'>Pizza Name</span>\n            <input type=\'text\' name=\'name\' required min=\'3\' max=\'24\'>\n        </label>\n        <label>\n            <span>Description</span>\n            <textarea class=\'create__description\'></textarea>\n        </label>\n        <label>\n            <span>Size<span>\n        <label>\n            <span>30</span>\n            <input type=\'radio\' name=\'size\' value=\'30\'>\n        </label>\n        <label>\n            <span>45</span>\n            <input type=\'radio\' name=\'size\' value=\'30\'>\n        </label>\n        <label>\n            <span>60</span>\n            <input type=\'radio\' name=\'size\' value=\'30\'>\n        </label>    \n        </label>\n            <h2 class=\'create__ingredients-title\'>Ingredients<h2>\n        ';

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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DRAW = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(3);

var _sprite = __webpack_require__(27);

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
/* 27 */
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
//# sourceMappingURL=app.js.map