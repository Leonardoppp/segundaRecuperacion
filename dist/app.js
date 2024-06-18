"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _user = _interopRequireDefault(require("./routes/user"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.set("port", _config["default"].app.port);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/api/user", _user["default"]);
var _default = exports["default"] = app;