"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _miparser = require('./mi-parser'); var _miparser2 = _interopRequireDefault(_miparser);
var _lexer = require('../lexer');
 const parser = _miparser2.default.setTokenizer(_lexer.syntaxTokenizer); exports.parser = parser;
