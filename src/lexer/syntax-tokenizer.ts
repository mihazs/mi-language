import lexer from "./index";
import { Token } from "moo";
import { tokens } from "./tokens";

interface SyntaxToken {
  type?: string;
  value?: string;
  startOffset?: number;
  endOffset?: number;
  startLine?: number;
  endLine?: number;
  startColumn?: number;
  endColumn?: number;
}
class Tokenizer {
  private tokens: Array<Token> = [];
  private str: string = "";

  public initString(str: string) {
    this.tokens = Array.from(lexer.reset(str));
    this.str = str;
  }
  public throwUnexpectedToken(symbol: string, line: number, column: number) {
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
  public hasMoreTokens = () => this.tokens.length != 0;
  public getNextToken(): SyntaxToken {
    const token = this.tokens.shift() as Token;
    if (!token) {
      return { type: "$" };
    }
    const tokenInfo = {
      type: `T${
        token.type == "nomevariavel" ? tokens.nomevariavel : token?.type in tokens ? tokens[token.type] : tokens[token.value]
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

export default tokenizer;
