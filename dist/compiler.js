"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _lexer = require('./lexer'); var _lexer2 = _interopRequireDefault(_lexer);

 function compile(code) {
  _lexer2.default.reset(code);
  return { lex: Array.from(_lexer2.default) };
} exports.compile = compile;
