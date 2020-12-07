"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _commander = require('commander'); var _commander2 = _interopRequireDefault(_commander);
var _file = require('./file');
var _compiler = require('./compiler');
var _lexer = require('./lexer');
var _parser = require('./parser');
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
_commander2.default
  .version("0.1.0")
  .arguments("<arquivo>")
  .option("-l, --lex", "Mostra o resultado do lexer")
  .option("-s, --syntax", "Mostra o resultado da análise sintática")
  .option("-c, --semantic", "Mostra o resultado da análise semântica")
  //.option("-w <saida>, --write <saida>", "Grava o resultado no arquivo especificado")
  .description("Executa um arquivo .mi")
  .action((arquivo, options) => {
    console.log(arquivo);
    const code = _file.read.call(void 0, _path2.default.resolve(arquivo));
    const result = _compiler.compile.call(void 0, code);
    let output = "";
    if (_optionalChain([options, 'optionalAccess', _ => _.lex])) {
      output += `lex result\n\n${JSON.stringify(
        result.lex.map((k) => ({
          linha: k.line,
          codigo: k.type == "nomevariavel" ? _lexer.tokens.nomevariavel : _optionalChain([k, 'optionalAccess', _2 => _2.type]) in _lexer.tokens ? _lexer.tokens[k.type] : _lexer.tokens[k.value],
          lexema: k.value,
        }))
      )}\n\n`;
    }
    if (_optionalChain([options, 'optionalAccess', _3 => _3.syntax])) {
      try {
        _parser.parser.parse(code);
      } catch (e) {
        console.log(e);
      }
    }
    /* console.log(options.write);
        if(options.write){
            write(options.write, output);
        }*/
    console.log(output);
    console.log("Success");
  });

_commander2.default.parse(process.argv);
