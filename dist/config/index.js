"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _default = exports["default"] = {
  app: {
    port: process.env.PORT
  },
  mysql: {
    db: process.env.MYSQL_ADDON_DB,
    host: process.env.MYSQL_ADDON_HOST,
    password: process.env.MYSQL_ADDON_PASSWORD,
    user: process.env.MYSQL_ADDON_USER
  }
};