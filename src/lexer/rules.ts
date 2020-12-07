import moo from "moo";
import { fromPairs } from "lodash";

const reserved = ["if", "do", "else", "while", "int", "for", "main", "fim", "inicio", "cout", "cin", "return"];

export default {
  comment: { match: /\/\*[\s\S]+\*\//, lineBreaks: true },
  literal: /\~(?:.{0,32})\~/,
  numerofloat: /[0-9]+\.[0-9]+/,
  numerointeiro: /[0-9]+/,
  nomedastring: /\"(?:.{0,32})\"/,
  nomedochar: /\'(?:.{0,1})\'/,
  operator: ["+", "*", "/", "-", ">", ">=", "!=", "<", "<<", "=", "==", "--", "++"],
  symbol: ["]", "[", "(", ")", ":", ".", ";", "..", "$", ",", "{", "}"],
  //keyword: ["int"],
  nomevariavel: {
    match: /[a-zA-Z_][a-zA-Z0-9_]{0,13}/,
    type: moo.keywords({
      type: ["integer", "char", "string", "float", "double", "void"],
      keyword: ["callfuncao"],
      operator: ["or", "and"],
      ...fromPairs(reserved.map((e) => [e, e])),
    }),
  },
  space: { match: /[\s\t]+/, lineBreaks: true },
};
