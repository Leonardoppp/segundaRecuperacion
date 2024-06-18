"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = require("../controllers/user");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/ruta", _user.buscar);
router.get("/rutaid", _user.buscarUno);
router.post("/ruta", _user.add);
router.put("/ruta", _user.update);
router["delete"]("/ruta", _user.drop);
var _default = exports["default"] = router;