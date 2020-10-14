"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _moo = require('moo'); var _moo2 = _interopRequireDefault(_moo);
var _lodash = require('lodash');

const reserved = ["if", "do", "else", "while", "int", "for", "main", "fim", "inicio", "cout", "cin", "return"];

exports. default = {
  comment: { match: /\/\*[\s\S]+\*\//, lineBreaks: true },
  literal: /\~(?:.{0,31})\~/,
  numerofloat: /[0-9]+\.[0-9]+/,
  numerointeiro: /[0-9]+/,
  nomedastring: /\"(?:.{0,31})\"/,
  nomedochar: /\'(?:.{0,1})\'/,
  operator: ["+", "*", "/", "-", ">", ">=", "!=", "<", "=", "==", "--", "++"],
  symbol: ["]", "[", "(", ")", ":", ".", ";", "..", "$", ",", "{", "}"],
  //keyword: ["int"],
  nomevariavel: {
    match: /[a-zA-Z_][a-zA-Z0-9_]{0,13}/,
    type: _moo2.default.keywords({
      type: ["integer", "char", "string", "float", "double", "void"],
      keyword: ["callfuncao"],
      operator: ["or", "and"],
      ..._lodash.fromPairs.call(void 0, reserved.map((e) => [e, e])),
    }),
  },
  space: { match: /\s+/, lineBreaks: true },
};
