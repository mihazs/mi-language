"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _createNamedExportFrom(obj, localName, importedName) { Object.defineProperty(exports, localName, {enumerable: true, get: () => obj[importedName]}); } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _moo = require('moo'); var _moo2 = _interopRequireDefault(_moo);
var _rules = require('./rules'); var _rules2 = _interopRequireDefault(_rules);

const lexer = _moo2.default.compile(_rules2.default);
lexer.next = ((next) => () => {
  let tok;
  do {
    tok = _optionalChain([next, 'optionalAccess', _ => _.call, 'call', _2 => _2(lexer)]);
  } while (["space", "comment", "newline"].some((e) => e === _optionalChain([tok, 'optionalAccess', _3 => _3.type])));
  return tok;
})(lexer.next);

var _tokens = require('./tokens'); _createNamedExportFrom(_tokens, 'tokens', 'tokens');

exports. default = lexer;
