"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);

 function read(path) {
  return _fs2.default.readFileSync(path, "utf8");
} exports.read = read;
 function write(path, content) {
  console.log(path);
  _fs2.default.writeFileSync(path, content, "utf-8");
} exports.write = write;
