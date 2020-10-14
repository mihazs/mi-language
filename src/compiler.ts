import lexer from "./lexer";

export function compile(code: string) {
  lexer.reset(code);
  return { lex: Array.from(lexer) };
}
