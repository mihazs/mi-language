import parser from "../src/parser/mi-parser";
import { read } from "../src/file";
import path from "path";
import tokenizer from "../src/lexer/syntax-tokenizer";

describe("Parser", () => {
  it("should parse example 2", () => {
    const code = read(path.resolve("examples/ex2.mi"));
    const psr = parser.setTokenizer(tokenizer);
    const r = psr.parse(code);
    expect(r).toBeTruthy();
  });
  it("should parse example 3", () => {
    const code = read(path.resolve("examples/ex3.mi"));
    const psr = parser.setTokenizer(tokenizer);
    const r = psr.parse(code);
    expect(r).toBeTruthy();
  });

  it("should parse example 1", () => {
    const code = read(path.resolve("examples/ex3.mi"));
    const psr = parser.setTokenizer(tokenizer);
    const r = psr.parse(code);
    expect(r).toBeTruthy();
  });
  it("should not parse error example", () => {
    const code = read(path.resolve("examples/error.mi"));
    const psr = parser.setTokenizer(tokenizer);
    //psr.parse(code);
    expect(() => psr.parse(code)).toThrowError(SyntaxError);
  });
});
