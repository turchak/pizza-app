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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 2 */
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
            //TODO: need delete <a href="#/login" class="login__button-link">sing in</a>
            return '\n        <div class="container">\n            <nav class="nav">\n                <aside class="current-time">\n                    <svg width="50" height="50">\n                      <use xlink:href="#clock"></use>\n                    </svg>\n                    <time datetime="2018-02-03 12:01:48">12:01:48</time>\n                </aside>\n                <a class="logo" href="#/">\n                    <svg width="100" height="100">\n                      <use xlink:href="#logo"></use>\n                    </svg>\n                </a>\n                <aside class="auth">\n                    <button class="auth__button auth__button--in">\n                        <a href="#/login" class="auth__button-link">sing in</a>\n                    </button>\n                    <button class="auth__button auth__button--up">\n                        <a href="#/registration" class="auth__button-link">sing up</a>\n                    </button>\n                </aside>\n            </nav>\n        </div>\n        ';
        }
    }]);

    return Header;
}(_component2.default);

exports.default = Header;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toHtml = function toHtml(string) {
    var template = document.createElement('template');
    template.innerHTML = string;
    return template.content;
};

exports.default = toHtml;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
    function AuthService() {
        _classCallCheck(this, AuthService);

        this._token = null;
        this._claims = null;
        this.loginUrl = 'https://pizza-tele.ga/api/v1/user/login';
        this.storeUrl = 'https://pizza-tele.ga/api/v1/store/list';
        this.createUrl = 'https://pizza-tele.ga/api/v1/user/create';
    }

    // get token() {

    // }

    // set token() {

    // }

    _createClass(AuthService, [{
        key: 'isAuthorized',
        value: function isAuthorized() {}
    }, {
        key: 'tokenIsNotExpired',
        value: function tokenIsNotExpired() {}
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
            var options = {
                method: 'POST',
                body: JSON.stringify(data)
            };

            return fetch(this.loginUrl, options).then(function (res) {
                return res.json();
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
    }]);

    return AuthService;
}();

var AUTH_SERVICE = exports.AUTH_SERVICE = new AuthService();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _router = __webpack_require__(11);

var _router2 = _interopRequireDefault(_router);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _router2.default({ host: document.querySelector('#root'), routes: _routes2.default });

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&subset=cyrillic);", ""]);

// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nimg {\n  width: 100%; }\n\nh2 {\n  margin: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\nbutton {\n  display: block;\n  appearance: none;\n  user-select: none;\n  text-align: center;\n  white-space: nowrap;\n  text-decoration: none;\n  height: 3rem;\n  padding: 0 0.5rem;\n  border: 0.125rem solid transparent;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 2.625rem;\n  -webkit-font-smoothing: antialiased;\n  border-radius: 0.25rem;\n  letter-spacing: 0.09375rem;\n  transition: all 0.3s ease;\n  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);\n  cursor: pointer; }\n  button:hover {\n    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2); }\n\nhtml {\n  height: 100%; }\n\nbody {\n  margin: 0;\n  color: #525c65;\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1.5rem;\n  height: 100%;\n  -webkit-font-smoothing: antialiased; }\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px; }\n\n#root {\n  height: 100%; }\n\n.login-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.registration-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.header {\n  width: 100%;\n  background: #cc3354; }\n\n.nav {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n  @media (min-width: 768px) {\n    .nav {\n      flex-wrap: nowrap;\n      padding: 15px 0; } }\n  .nav .current-time {\n    display: flex;\n    justify-content: space-between;\n    align-self: flex-start;\n    order: 3;\n    margin: 15px auto 15px 0;\n    color: #fff; }\n    @media (min-width: 768px) {\n      .nav .current-time {\n        justify-content: flex-start;\n        align-self: center;\n        order: 1;\n        width: 25%;\n        margin: 0; } }\n    @media (min-width: 1024px) {\n      .nav .current-time {\n        width: 30%; } }\n    @media (min-width: 1200px) {\n      .nav .current-time {\n        width: 25%; } }\n    .nav .current-time svg {\n      width: 25px;\n      height: 25px;\n      fill: #ffd31a; }\n    .nav .current-time time {\n      margin-left: 5px; }\n  .nav .logo {\n    order: 1;\n    width: 100%;\n    padding: 15px 0; }\n    @media (min-width: 768px) {\n      .nav .logo {\n        order: 2;\n        width: 50%;\n        padding: 0; } }\n    @media (min-width: 1024px) {\n      .nav .logo {\n        width: 40%; } }\n    @media (min-width: 1200px) {\n      .nav .logo {\n        width: 50%; } }\n    .nav .logo svg {\n      width: 100%;\n      fill: #ffd31a; }\n  .nav .auth {\n    display: flex;\n    justify-content: space-between;\n    order: 2;\n    width: 100%;\n    text-transform: uppercase; }\n    @media (min-width: 768px) {\n      .nav .auth {\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: flex-end;\n        width: 25%; } }\n    @media (min-width: 1024px) {\n      .nav .auth {\n        flex-direction: row;\n        align-items: center;\n        width: 30%; } }\n    @media (min-width: 1200px) {\n      .nav .auth {\n        width: 25%; } }\n    .nav .auth__button {\n      width: 140px;\n      color: #fff;\n      background: #f43745; }\n      .nav .auth__button:hover {\n        background: #e5354b; }\n      .nav .auth__button-link {\n        display: inline-block;\n        text-decoration: none;\n        color: #fff;\n        width: 100%;\n        height: 100%; }\n\n.login {\n  flex: 1 0 auto;\n  padding: 60px 0;\n  background: #ff8b17; }\n  .login__title {\n    margin-bottom: 15px;\n    text-transform: uppercase; }\n  .login__form {\n    max-width: 620px;\n    margin: 0 auto;\n    padding: 60px;\n    border: 1px solid #dbe2e8;\n    background: #fff;\n    box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12); }\n  .login__input {\n    width: 100%;\n    height: 44px;\n    margin-bottom: 20px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border: 1px solid #dbe2e8;\n    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\n    border-radius: 2px;\n    color: #2e3d49; }\n    .login__input:active {\n      outline: none;\n      border-color: #f7a75a; }\n    .login__input:focus {\n      outline: none;\n      border-color: #f7a75a; }\n    .login__input::placeholder {\n      opacity: .5; }\n  .login__button {\n    min-width: 207px;\n    width: 100%;\n    margin-top: 20px;\n    color: #fff;\n    background: #f7a75a; }\n\n.registration {\n  flex: 1 0 auto;\n  padding: 60px 0;\n  background: #ff8b17; }\n  .registration__title {\n    margin-bottom: 15px;\n    text-transform: uppercase; }\n  .registration__form {\n    max-width: 620px;\n    margin: 0 auto;\n    padding: 60px;\n    border: 1px solid #dbe2e8;\n    background: #fff;\n    box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12); }\n  .registration__input {\n    width: 100%;\n    height: 44px;\n    margin-bottom: 20px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border: 1px solid #dbe2e8;\n    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\n    border-radius: 2px;\n    color: #2e3d49; }\n    .registration__input:active {\n      outline: none;\n      border-color: #f7a75a; }\n    .registration__input:focus {\n      outline: none;\n      border-color: #f7a75a; }\n    .registration__input::placeholder {\n      opacity: .5; }\n  .registration__button {\n    min-width: 207px;\n    width: 100%;\n    margin-top: 20px;\n    color: #fff;\n    background: #f7a75a; }\n  .registration__select {\n    width: 100%;\n    height: 44px;\n    margin-bottom: 20px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border: 1px solid #dbe2e8;\n    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\n    border-radius: 2px;\n    color: #2e3d49; }\n\n.main {\n  padding-top: 10px;\n  background: #ff8b17; }\n  .main .add-button {\n    margin: 10px auto;\n    background: #ffc822; }\n    .main .add-button:hover {\n      background: #ffd31a; }\n  .main section {\n    display: flex;\n    flex-wrap: wrap; }\n    .main section .pizza {\n      display: flex;\n      flex-wrap: wrap;\n      margin: 20px;\n      padding: 15px;\n      background: #fffde5;\n      border-radius: 0.375rem;\n      box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);\n      transition: all 0.3s ease; }\n      @media (min-width: 768px) {\n        .main section .pizza {\n          width: calc(50% - 40px); } }\n      @media (min-width: 1200px) {\n        .main section .pizza {\n          width: calc(100% / 3 - 40px); } }\n      .main section .pizza__img {\n        align-self: center; }\n      .main section .pizza__name {\n        width: 100%;\n        margin: 15px 0;\n        font-size: 18px;\n        font-weight: 600;\n        white-space: nowrap;\n        text-align: center; }\n      .main section .pizza:hover {\n        box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2); }\n      .main section .pizza__time {\n        width: 50%; }\n      .main section .pizza__queue-number {\n        width: 50%;\n        text-align: right;\n        color: #e5354b; }\n      .main section .pizza__eta {\n        width: 50%; }\n        .main section .pizza__eta time {\n          color: #cc3354; }\n        .main section .pizza__eta span:first-child {\n          text-transform: uppercase; }\n      .main section .pizza__price {\n        width: 50%;\n        text-align: right; }\n\n.footer {\n  flex-shrink: 0;\n  background: #303030; }\n  .footer .container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 15px;\n    color: #fff; }\n    @media (min-width: 768px) {\n      .footer .container {\n        justify-content: space-between; } }\n    .footer .container address {\n      font-style: normal; }\n      .footer .container address a {\n        color: #fff; }\n", "", {"version":3,"sources":["C:/home/kottans/task_12/src/assets/scss/src/assets/scss/common.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/variables.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/header.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/helpers/media-queries.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/login.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/registration.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/main.scss","C:/home/kottans/task_12/src/assets/scss/src/assets/scss/blocks/footer.scss"],"names":[],"mappings":"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","file":"app.scss","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    appearance: none;\r\n    user-select: none;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    text-decoration: none;\r\n    height: 3rem;\r\n    padding: 0 0.5rem;\r\n    border: 0.125rem solid transparent;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    font-size: 0.8125rem;\r\n    line-height: 2.625rem;\r\n    -webkit-font-smoothing: antialiased;\r\n    border-radius: 0.25rem;\r\n    letter-spacing: 0.09375rem;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 8px 10px 20px 0 rgba(46,61,73,0.15);\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n        box-shadow: 2px 4px 8px 0 rgba(46,61,73,0.2);\r\n    }\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    color: $grey;\r\n    font-size: 16px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    line-height: 1.5rem;\r\n    height: 100%;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 15px;\r\n}\r\n\r\n#root {\r\n    height: 100%;\r\n}\r\n\r\n.login-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\n.registration-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}","// colors\r\n$wheat:       #fffde5;\r\n$yellow:      #ffd31a;\r\n$yellow-plus: #ffc822;\r\n$grey:        #525c65;\r\n$orange:      #ff8b17;\r\n$black:       #000;\r\n$white:       #fff;\r\n\r\n//sub-colors\r\n$grey-dark:        #303030;\r\n$light-orange:     #f7a75a;\r\n$orange-red-light: #f43745;\r\n$orange-red:       #e5354b;\r\n$orange-pink-light:#d83550;\r\n$orange-pink:      #cc3354;",".header {\r\n    width: 100%;\r\n    background: $orange-pink;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    @include tablet-min {\r\n        flex-wrap: nowrap;\r\n        padding: 15px 0;\r\n    }\r\n\r\n    & .current-time {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-self: flex-start;\r\n        order: 3;\r\n        margin: 15px auto 15px 0;\r\n        color: $white;\r\n        @include tablet-min {\r\n            justify-content: flex-start;\r\n            align-self: center;\r\n            order: 1;\r\n            width: 25%;\r\n            margin: 0;\r\n        }\r\n        @include tablet-landscape-min {\r\n            width: 30%;\r\n        }\r\n        @include desktop-min {\r\n            width: 25%;\r\n        }\r\n\r\n        & svg {\r\n            width: 25px;\r\n            height: 25px;\r\n            fill: $yellow;\r\n        }\r\n\r\n        & time {\r\n            margin-left: 5px;\r\n        }\r\n    }\r\n\r\n    & .logo {\r\n        order: 1;\r\n        width: 100%;\r\n        padding: 15px 0;\r\n        @include tablet-min {\r\n            order: 2;\r\n            width: 50%;\r\n            padding: 0;\r\n        }\r\n        @include tablet-landscape-min {\r\n            width: 40%;\r\n        }\r\n        @include desktop-min {\r\n            width: 50%;\r\n        }\r\n\r\n        & svg {\r\n            width: 100%;\r\n            fill: $yellow;\r\n        }\r\n    }\r\n\r\n    & .auth {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        order: 2;\r\n        width: 100%;\r\n        text-transform: uppercase;\r\n        @include tablet-min {\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            align-items: flex-end;\r\n            width: 25%;\r\n        }\r\n        @include tablet-landscape-min {\r\n            flex-direction: row;\r\n            align-items: center;\r\n            width: 30%;\r\n        }\r\n        @include desktop-min {\r\n            width: 25%;\r\n        }\r\n\r\n        &__button {\r\n            width: 140px;\r\n            color: $white;\r\n            background: $orange-red-light;\r\n\r\n            &:hover {\r\n                background: $orange-red;\r\n            }\r\n            //TODO: fix this class\r\n            &-link {\r\n                display: inline-block;\r\n                text-decoration: none;\r\n                color:#fff;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        }\r\n    }\r\n}","// Settings\r\n$mobile-s-width:   320px;\r\n$mobile-m-width:   375px;\r\n$mobile-l-width:   425px;\r\n$tablet-p-width:   768px;\r\n$tablet-l-width:   1024px;\r\n$desktop-width:    1200px;\r\n$desktop-l-width:  1440px;\r\n$desktop-4k-width: 2560px;\r\n\r\n// Mixins\r\n@mixin mobile-small-min {\r\n\t@media (min-width: #{$mobile-s-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin mobile-medium-min {\r\n\t@media (min-width: #{$mobile-m-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin mobile-large-min {\r\n\t@media (min-width: #{$mobile-l-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin tablet-min {\r\n\t@media (min-width: #{$tablet-p-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin tablet-landscape-min {\r\n\t@media (min-width: #{$tablet-l-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin desktop-min {\r\n\t@media (min-width: #{$desktop-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin desktop-l-min {\r\n\t@media (min-width: #{$desktop-l-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin desktop-4k {\r\n\t@media (min-width: #{$desktop-4k-width}){\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin retina {\r\n  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){\r\n    @content;\r\n  }\r\n}\r\n",".login {\r\n    flex: 1 0 auto;\r\n    padding: 60px 0;\r\n    background: $orange;\r\n\r\n    &__title {\r\n        margin-bottom: 15px;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    &__form {\r\n        max-width: 620px;\r\n        margin: 0 auto;\r\n        padding: 60px;\r\n        border: 1px solid #dbe2e8;\r\n        background: #fff;\r\n        box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12);\r\n    }\r\n\r\n    &__input {\r\n        width: 100%;\r\n        height: 44px;\r\n        margin-bottom: 20px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        border: 1px solid #dbe2e8;\r\n        box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\r\n        border-radius: 2px;\r\n        color: #2e3d49;\r\n\r\n        &:active {\r\n            outline: none;\r\n            border-color: $light-orange;\r\n        }\r\n\r\n        &:focus {\r\n            outline: none;\r\n            border-color: $light-orange;\r\n        }\r\n\r\n        &::placeholder {\r\n            opacity: .5;\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        min-width: 207px;\r\n        width: 100%;\r\n        margin-top: 20px;\r\n        color: #fff;\r\n        background: $light-orange;\r\n    }\r\n}",".registration {\r\n    flex: 1 0 auto;\r\n    padding: 60px 0;\r\n    background: $orange;\r\n\r\n    &__title {\r\n        margin-bottom: 15px;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    &__form {\r\n        max-width: 620px;\r\n        margin: 0 auto;\r\n        padding: 60px;\r\n        border: 1px solid #dbe2e8;\r\n        background: #fff;\r\n        box-shadow: 2px 2px 3px 0 rgba(117, 124, 129, 0.12);\r\n    }\r\n\r\n    &__input {\r\n        width: 100%;\r\n        height: 44px;\r\n        margin-bottom: 20px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        border: 1px solid #dbe2e8;\r\n        box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\r\n        border-radius: 2px;\r\n        color: #2e3d49;\r\n\r\n        &:active {\r\n            outline: none;\r\n            border-color: $light-orange;\r\n        }\r\n\r\n        &:focus {\r\n            outline: none;\r\n            border-color: $light-orange;\r\n        }\r\n\r\n        &::placeholder {\r\n            opacity: .5;\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        min-width: 207px;\r\n        width: 100%;\r\n        margin-top: 20px;\r\n        color: #fff;\r\n        background: $light-orange;\r\n    }\r\n\r\n    &__select {\r\n        width: 100%;\r\n        height: 44px;\r\n        margin-bottom: 20px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        border: 1px solid #dbe2e8;\r\n        box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);\r\n        border-radius: 2px;\r\n        color: #2e3d49;\r\n    }\r\n}",".main {\r\n  padding-top: 10px;\r\n  background: $orange;\r\n\r\n  & .add-button {\r\n    margin: 10px auto;\r\n    background: $yellow-plus;\r\n\r\n    &:hover {\r\n      background: $yellow;\r\n    }\r\n  }\r\n\r\n  & section {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    & .pizza {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      margin: 20px;\r\n      padding: 15px;\r\n      background: $wheat;\r\n      border-radius: 0.375rem;\r\n      box-shadow: 5px 5px 25px 0 rgba(46,61,73,0.2);\r\n      transition: all 0.3s ease;\r\n      @include tablet-min {\r\n        width: calc(50% - 40px);\r\n      }\r\n      @include desktop-min {\r\n        width: calc(100% / 3 - 40px);\r\n      }\r\n\r\n      &__img {\r\n        align-self: center;\r\n      }\r\n\r\n      &__name {\r\n        width: 100%;\r\n        margin: 15px 0;\r\n        font-size: 18px;\r\n        font-weight: 600;\r\n        white-space: nowrap;\r\n        text-align: center;\r\n      }\r\n\r\n      &:hover {\r\n        box-shadow: 2px 4px 8px 0 rgba(46,61,73,0.2);\r\n      }\r\n\r\n      &__time {\r\n        width: 50%;\r\n      }\r\n\r\n      &__queue-number {\r\n        width: 50%;\r\n        text-align: right;\r\n        color: $orange-red;\r\n      }\r\n\r\n      &__eta {\r\n        width: 50%;\r\n\r\n        & time {\r\n          color: $orange-pink;\r\n        }\r\n\r\n        & span:first-child {\r\n          text-transform: uppercase;\r\n        }\r\n      }\r\n\r\n      &__price {\r\n        width: 50%;\r\n        text-align: right;\r\n      }\r\n    }\r\n  }\r\n}",".footer {\r\n    flex-shrink: 0;\r\n    background: $grey-dark;\r\n\r\n    & .container {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        align-items: center;\r\n        padding: 15px;\r\n        color: $white;\r\n        @include tablet-min {\r\n            justify-content: space-between;\r\n        }\r\n\r\n        & address {\r\n            font-style: normal;\r\n\r\n            & a {\r\n                color: $white;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),
/* 8 */
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
/* 9 */
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

var	fixUrls = __webpack_require__(10);

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
/* 10 */
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
/* 11 */
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
            currentRoute: null,
            currentComponent: null
        };

        _this.host = host;

        console.log(props);
        _this.handleUrlChange = _this.handleUrlChange.bind(_this);

        window.addEventListener('hashchange', function () {
            return _this.handleUrlChange(_this.path);
        });

        _this.handleUrlChange(_this.path);
        return _this;
    }

    _createClass(Router, [{
        key: 'handleUrlChange',
        value: function handleUrlChange(path) {
            var _this2 = this;

            var _state = this.state,
                routes = _state.routes,
                currentRoute = _state.currentRoute;


            var nextRoute = routes.find(function (_ref) {
                var href = _ref.href;
                return href === _this2.path;
            });

            if (nextRoute && nextRoute !== currentRoute) {

                if (!!nextRoute.redirectTo) {
                    return this.handleRedirect(nextRoute.redirectTo);
                }

                if (nextRoute.onEnter) {
                    this.handleOnEnter(nextRoute);
                }

                this.updateState({
                    activeComponent: new nextRoute.component(),
                    currentRoute: nextRoute
                });
            }
        }
    }, {
        key: 'handleRedirect',
        value: function handleRedirect(url) {
            window.location.hash = url;
        }
    }, {
        key: 'handleOnEnter',
        value: function handleOnEnter(_ref2) {
            var onEnter = _ref2.onEnter;

            onEnter();
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _login = __webpack_require__(13);

var _login2 = _interopRequireDefault(_login);

var _app = __webpack_require__(15);

var _app2 = _interopRequireDefault(_app);

var _registration = __webpack_require__(17);

var _registration2 = _interopRequireDefault(_registration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    component: _app2.default,
    href: '',
    redirectTo: '/'
}, {
    component: _app2.default,
    href: '/'
}, {
    component: _login2.default,
    href: '/login'
}, {
    component: _registration2.default,
    href: '/registration'
}];

exports.default = routes;

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

var _footer = __webpack_require__(1);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(2);

var _header2 = _interopRequireDefault(_header);

var _login = __webpack_require__(14);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _auth = __webpack_require__(4);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);

        _this.host = document.createElement('main');
        _this.host.classList.add('login');
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'handleSubmit',
        value: function handleSubmit(ev) {
            ev.preventDefault();
            var host = ev.target;
            var data = {
                username: host.username.value.trim(),
                password: host.password.value.trim()
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var login = '\n        <div class="container">\n            <form class="login__form">\n                <h2 class="login__title">Login</h2>\n                <label for="login-username">Username</label>\n                <input class="login__input" id="login-username" type="text" name="username" placeholder="username">\n                <label for="login-password">Password</label>\n                <input class="login__input" id="login-password" type="password" name="password" placeholder="password">\n                <button class="login__button" type="submit">sing in</button>\n            </form>\n        </div>\n        ';
            var fragment = (0, _utils2.default)(login);

            fragment.querySelector('.login__form').addEventListener('submit', this.handleSubmit);
            return fragment;
        }
    }]);

    return LoginForm;
}(_component2.default);

exports.default = LoginForm;

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

var _footer = __webpack_require__(1);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(2);

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

            var button = document.createElement('button');
            button.classList.add('add-button');
            button.innerText = 'add new pizza';

            container.append(button, this.createPizza(pizzas));
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

var _footer = __webpack_require__(1);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(2);

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

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _auth = __webpack_require__(4);

var _auth2 = _interopRequireDefault(_auth);

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

            _auth2.default.storeInfo().then(function (result) {
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
            _auth2.default.registerUser(data).then(function (result) {
                console.log(result);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var stores = this.state.stores;


            var registration = '\n        <div class="container">\n            <form class="registration__form">\n                <h2 class="registration__title">registration form</h2>\n                <label for="registration-username">Username</label>\n                <input class="registration__input" id="registration-username" type="text" name="username" placeholder="Unique. Min length 2 chars, max - 24">\n                <label for="registration-password">Password</label>\n                <input class="registration__input" id="registration-password" type="password" name="password" placeholder="Min length 8 chars">\n                <label for="registration-re-password">Re-enter password</label>\n                <input class="registration__input" id="registration-re-password" type="password" name="password_repeat" placeholder="Should match with password">\n                <label for="registration-email">Email</label>\n                <input class="registration__input" id="registration-email" type="email" name="email" placeholder="Should be valid email">\n                <label for="registration-store">Store</label>\n                <select hidden id="registration-store" name="store"></select>\n                <label for="registration-store-password">Store password</label>\n                <input class="registration__input" for="registration-store-password" type="password" name="store_password" placeholder="Should be valid store password. Min length 8 chars">\n                <button class="registration__button" type="submit">sing up</button>\n            </form>\n        </div>\n        ';

            var fragment = (0, _utils2.default)(registration);

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

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map