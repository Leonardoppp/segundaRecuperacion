"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var pool = _promise["default"].createPool({
  host: _config["default"].mysql.host,
  user: _config["default"].mysql.user,
  password: _config["default"].mysql.password,
  database: _config["default"].mysql.db
});
var _default = exports["default"] = pool;