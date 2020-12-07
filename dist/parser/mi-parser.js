"use strict";Object.defineProperty(exports, "__esModule", {value: true});let yytext;
let yyleng;
let __;

const EOF = "$";

const ps = [
  [-1],
  [["32", "12", "6", "1", "31", "30", "29"]],
  [["4", "35", "3", "34", "2", "33"]],
  [[]],
  [["2", "33", "36"]],
  [[]],
  [["37"]],
  [["38"]],
  [["39"]],
  [["40"]],
  [["4", "35", "3", "34", "5"]],
  [[]],
  [["2", "33"]],
  [["6", "32", "43", "8", "42", "41", "12", "6", "1", "31", "9", "33", "7"]],
  [[]],
  [["37"]],
  [["29"]],
  [["40"]],
  [["38"]],
  [["39"]],
  [["44"]],
  [["45"]],
  [["33"]],
  [["46"]],
  [["47"]],
  [[]],
  [["43", "10", "42"]],
  [[]],
  [["11", "3"]],
  [["11", "3", "35"]],
  [[]],
  [["49", "13", "35", "14", "48"]],
  [["13", "35", "14"]],
  [[]],
  [["24", "50", "33"]],
  [["15", "33", "51"]],
  [["18", "32", "13", "35", "14", "31", "43", "19", "33", "42", "52"]],
  [["32", "13", "35", "14", "31", "43", "19", "33", "42", "53"]],
  [["32", "13", "35", "14", "31", "43", "21", "35", "19", "33", "35", "20", "50", "33", "42", "54"]],
  [["43", "19", "33", "42", "53", "32", "13", "35", "14", "31", "55"]],
  [["33", "57", "56"]],
  [["22", "60", "59", "58"]],
  [[]],
  [["43", "16", "17", "42"]],
  [[]],
  [["16", "17", "36"]],
  [[]],
  [["44"]],
  [["47"]],
  [["45"]],
  [["46"]],
  [["33"]],
  [["32", "13", "35", "14", "31", "61"]],
  [[]],
  [["20", "62"]],
  [["20", "63"]],
  [["20", "64"]],
  [["20", "65"]],
  [["20", "66"]],
  [["20", "67"]],
  [["44"]],
  [["45"]],
  [["47"]],
  [["46"]],
  [["33"]],
  [["44", "68"]],
  [["44", "69"]],
  [["22", "60", "59"]],
  [["22", "23", "33", "59"]],
  [[]],
  [["23", "33", "36"]],
  [[]],
  [["15", "33", "51"]],
  [["25", "26"]],
  [["25", "26", "70"]],
  [["25", "26", "71"]],
  [[]],
  [["27", "28"]],
  [["27", "28", "72"]],
  [["27", "28", "73"]],
  [[]],
  [["44"]],
  [["74", "45"]],
  [["33"]],
  [["47"]],
  [["46"]],
  [["43", "24", "42"]],
];
const tks = {
  T2: "29",
  T11: "30",
  T39: "31",
  T38: "32",
  T7: "33",
  T41: "34",
  T40: "35",
  T43: "36",
  T13: "37",
  T19: "38",
  T3: "39",
  T26: "40",
  T4: "41",
  T46: "42",
  T45: "43",
  T5: "44",
  T6: "45",
  T8: "46",
  T10: "47",
  T15: "48",
  T20: "49",
  T32: "50",
  T27: "51",
  T16: "52",
  T1: "53",
  T18: "54",
  T23: "55",
  T25: "56",
  T28: "57",
  T24: "58",
  T34: "59",
  T12: "60",
  T21: "61",
  T31: "62",
  T48: "63",
  T30: "64",
  T29: "65",
  T35: "66",
  T33: "67",
  T36: "68",
  T49: "69",
  T37: "70",
  T50: "71",
  T44: "72",
  T42: "73",
  "": "74",
  $: "75",
};
const tbl = {
  "0": { "29": "1" },
  "1": { "29": "3", "33": "2", "37": "3", "38": "3", "39": "3", "40": "3", "48": "3" },
  "2": { "34": "5", "36": "4" },
  "3": { "37": "6", "38": "7", "39": "8", "40": "9" },
  "4": { "29": "11", "33": "10", "37": "11", "38": "11", "39": "11", "40": "11", "48": "11" },
  "5": { "33": "12" },
  "6": { "29": "13", "37": "13", "38": "13", "39": "13", "40": "13", "48": "14" },
  "7": { "29": "16", "37": "15", "38": "18", "39": "19", "40": "17" },
  "8": { "33": "22", "43": "25", "44": "20", "45": "21", "46": "23", "47": "24" },
  "9": { "31": "27", "42": "26" },
  "10": { "37": "28", "38": "28", "39": "28", "40": "28" },
  "11": { "35": "29", "43": "30" },
  "12": { "48": "31" },
  "13": {
    "32": "33",
    "33": "32",
    "35": "32",
    "49": "33",
    "51": "32",
    "52": "32",
    "53": "32",
    "54": "32",
    "55": "32",
    "56": "32",
    "58": "32",
  },
  "14": { "33": "34", "35": "42", "51": "35", "52": "36", "53": "37", "54": "38", "55": "39", "56": "40", "58": "41" },
  "15": { "35": "44", "42": "43", "43": "44" },
  "16": { "36": "45", "43": "46" },
  "17": { "33": "51", "44": "47", "45": "49", "46": "50", "47": "48" },
  "18": { "35": "53", "61": "52" },
  "19": { "62": "54", "63": "55", "64": "56", "65": "57", "66": "58", "67": "59" },
  "20": { "33": "64", "44": "60", "45": "61", "46": "63", "47": "62" },
  "21": { "68": "65", "69": "66" },
  "22": { "35": "69", "59": "67/68" },
  "23": { "35": "71", "36": "70", "59": "71" },
  "24": { "33": "73", "42": "73", "44": "73", "45": "73", "46": "73", "47": "73", "51": "72" },
  "25": { "35": "76", "43": "76", "70": "74", "71": "75" },
  "26": { "33": "77", "42": "77", "44": "77", "45": "77", "46": "77", "47": "77" },
  "27": { "35": "80", "43": "80", "70": "80", "71": "80", "72": "78", "73": "79" },
  "28": { "33": "83", "42": "86", "44": "81", "45": "82", "46": "85", "47": "84" },
};

const s = [];

let tokenizer;
/**
 * Generic tokenizer used by the parser in the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 * See `--custom-tokinzer` to skip this generation, and use a custom one.
 */

const lexRules = [];
const lexRulesByConditions = { INITIAL: [] };

const EOF_TOKEN = {
  type: EOF,
  value: "",
};

tokenizer = {
  initString(string) {
    this._string = string;
    this._cursor = 0;

    this._states = ["INITIAL"];
    this._tokensQueue = [];

    this._currentLine = 1;
    this._currentColumn = 0;
    this._currentLineBeginOffset = 0;

    /**
     * Matched token location data.
     */
    this._tokenStartOffset = 0;
    this._tokenEndOffset = 0;
    this._tokenStartLine = 1;
    this._tokenEndLine = 1;
    this._tokenStartColumn = 0;
    this._tokenEndColumn = 0;

    return this;
  },

  /**
   * Returns tokenizer states.
   */
  getStates() {
    return this._states;
  },

  getCurrentState() {
    return this._states[this._states.length - 1];
  },

  pushState(state) {
    this._states.push(state);
  },

  begin(state) {
    this.pushState(state);
  },

  popState() {
    if (this._states.length > 1) {
      return this._states.pop();
    }
    return this._states[0];
  },

  getNextToken() {
    // Something was queued, return it.
    if (this._tokensQueue.length > 0) {
      return this.onToken(this._toToken(this._tokensQueue.shift()));
    }

    if (!this.hasMoreTokens()) {
      return this.onToken(EOF_TOKEN);
    }

    let string = this._string.slice(this._cursor);
    let lexRulesForState = lexRulesByConditions[this.getCurrentState()];

    for (let i = 0; i < lexRulesForState.length; i++) {
      let lexRuleIndex = lexRulesForState[i];
      let lexRule = lexRules[lexRuleIndex];

      let matched = this._match(string, lexRule[0]);

      // Manual handling of EOF token (the end of string). Return it
      // as `EOF` symbol.
      if (string === "" && matched === "") {
        this._cursor++;
      }

      if (matched !== null) {
        yytext = matched;
        yyleng = yytext.length;
        let token = lexRule[1].call(this);

        if (!token) {
          return this.getNextToken();
        }

        // If multiple tokens are returned, save them to return
        // on next `getNextToken` call.

        if (Array.isArray(token)) {
          const tokensToQueue = token.slice(1);
          token = token[0];
          if (tokensToQueue.length > 0) {
            this._tokensQueue.unshift(...tokensToQueue);
          }
        }

        return this.onToken(this._toToken(token, yytext));
      }
    }

    if (this.isEOF()) {
      this._cursor++;
      return EOF_TOKEN;
    }

    this.throwUnexpectedToken(string[0], this._currentLine, this._currentColumn);
  },

  /**
   * Throws default "Unexpected token" exception, showing the actual
   * line from the source, pointing with the ^ marker to the bad token.
   * In addition, shows `line:column` location.
   */
  throwUnexpectedToken(symbol, line, column) {
    const lineSource = this._string.split("\n")[line - 1];
    let lineData = "";

    if (lineSource) {
      const pad = " ".repeat(column);
      lineData = "\n\n" + lineSource + "\n" + pad + "^\n";
    }

    throw new SyntaxError(`${lineData}Unexpected token: "${symbol}" ` + `at ${line}:${column}.`);
  },

  getCursor() {
    return this._cursor;
  },

  getCurrentLine() {
    return this._currentLine;
  },

  getCurrentColumn() {
    return this._currentColumn;
  },

  _captureLocation(matched) {
    const nlRe = /\n/g;

    // Absolute offsets.
    this._tokenStartOffset = this._cursor;

    // Line-based locations, start.
    this._tokenStartLine = this._currentLine;
    this._tokenStartColumn = this._tokenStartOffset - this._currentLineBeginOffset;

    // Extract `\n` in the matched token.
    let nlMatch;
    while ((nlMatch = nlRe.exec(matched)) !== null) {
      this._currentLine++;
      this._currentLineBeginOffset = this._tokenStartOffset + nlMatch.index + 1;
    }

    this._tokenEndOffset = this._cursor + matched.length;

    // Line-based locations, end.
    this._tokenEndLine = this._currentLine;
    this._tokenEndColumn = this._currentColumn = this._tokenEndOffset - this._currentLineBeginOffset;
  },

  _toToken(tokenType, yytext = "") {
    return {
      // Basic data.
      type: tokenType,
      value: yytext,

      // Location data.
      startOffset: this._tokenStartOffset,
      endOffset: this._tokenEndOffset,
      startLine: this._tokenStartLine,
      endLine: this._tokenEndLine,
      startColumn: this._tokenStartColumn,
      endColumn: this._tokenEndColumn,
    };
  },

  isEOF() {
    return this._cursor === this._string.length;
  },

  hasMoreTokens() {
    return this._cursor <= this._string.length;
  },

  _match(string, regexp) {
    let matched = string.match(regexp);
    if (matched) {
      // Handle `\n` in the matched token to track line numbers.
      this._captureLocation(matched[0]);
      this._cursor += matched[0].length;
      return matched[0];
    }
    return null;
  },

  /**
   * Allows analyzing, and transforming token. Default implementation
   * just passes the token through.
   */
  onToken(token) {
    return token;
  },
};

const yyparse = {
  parse(string) {
    yyparse.onParseBegin(string);

    if (!tokenizer) {
      throw new Error(`Tokenizer instance wasn't specified.`);
    }

    tokenizer.initString(string);

    s.length = 0;
    s.push(EOF, "0");

    let t = tokenizer.getNextToken();
    let to = null;
    let tt = null;

    do {
      to = s.pop();
      tt = tks[t.type];

      if (to === tt) {
        t = tokenizer.getNextToken();
        continue;
      }

      der(to, t, tt);
    } while (tokenizer.hasMoreTokens() || s.length > 1);

    while (s.length !== 1) {
      der(s.pop(), t, tt);
    }

    if (s[0] !== EOF || t.type !== EOF) {
      parseError(`stack is not empty: ${s}, ${t.value}`);
    }

    return true;
  },

  setTokenizer(customTokenizer) {
    tokenizer = customTokenizer;
    return yyparse;
  },

  getTokenizer() {
    return tokenizer;
  },

  onParseBegin(string) {},
  onParseEnd(parsed) {},
};

function der(to, t, tt) {
  const npn = tbl[to] ? tbl[to][tt] : undefined;
  if (!npn) {
    unexpectedToken(t);
  }
  s.push(...ps[npn][0]);
}

function unexpectedToken(token) {
  if (token.type === EOF) {
    unexpectedEndOfInput();
  }

  tokenizer.throwUnexpectedToken(token.value, token.startLine, token.startColumn);
}

function unexpectedEndOfInput() {
  parseError(`Unexpected end of input.`);
}

function parseError(message) {
  throw new SyntaxError(message);
}

exports. default = yyparse;
