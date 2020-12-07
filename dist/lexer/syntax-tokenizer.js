"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _index = require('./index'); var _index2 = _interopRequireDefault(_index);

var _tokens = require('./tokens');











class Tokenizer {constructor() { Tokenizer.prototype.__init.call(this);Tokenizer.prototype.__init2.call(this);Tokenizer.prototype.__init3.call(this); }
   __init() {this.tokens = []}
   __init2() {this.str = ""}

   initString(str) {
    this.tokens = Array.from(_index2.default.reset(str));
    this.str = str;
  }
   throwUnexpectedToken(symbol, line, column) {
    const lineSource = this.str.split("\n")[line - 1];
    const spaceSize = lineSource.match(/^\s/m);
    const realColumn = column + (spaceSize ? spaceSize.length : 0);
    let lineData = "";

    if (lineSource) {
      const pad = " ".repeat(realColumn - 1);
      lineData = "\n\n" + lineSource + "\n" + pad + "^\n";
    }

    throw new SyntaxError(`${lineData}Unexpected token: "${symbol}" ` + `at ${line}:${realColumn}.`);
  }
   __init3() {this.hasMoreTokens = () => this.tokens.length != 0}
   getNextToken() {
    const token = this.tokens.shift() ;
    if (!token) {
      return { type: "$" };
    }
    const tokenInfo = {
      type: `T${
        token.type == "nomevariavel" ? _tokens.tokens.nomevariavel : _optionalChain([token, 'optionalAccess', _ => _.type]) in _tokens.tokens ? _tokens.tokens[token.type] : _tokens.tokens[token.value]
      }`,
      value: token.value,
      startColumn: token.col,
      endColumn: token.col + token.text.length,
      startLine: token.line,
      endLine: token.line,
      startOffset: token.offset,
      endOffset: token.offset + token.text.length,
    };
    // console.log("tokenInfo: ", tokenInfo);
    return tokenInfo;
  }
}

const tokenizer = new Tokenizer();

exports. default = tokenizer;
