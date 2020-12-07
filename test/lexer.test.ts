import lexer from "../src/lexer";
import { read } from "../src/file";
import path from "path";
import { tokens } from "../src/lexer/tokens";
describe("Análise Léxica", () => {
  it("declaração de programa", function () {
    lexer.reset(`void main() {
    }`);
    expect(lexer.next()).toMatchObject({ type: "type", value: "void" });
    expect(lexer.next()).toMatchObject({ type: "main", value: "main" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "(" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: ")" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "{" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "}" });
  });
  it("programa com corpo", function () {
    lexer.reset(`void main() {
        x,y,z: integer;
    }`);
    expect(lexer.next()).toMatchObject({ type: "type", value: "void" });
    expect(lexer.next()).toMatchObject({ type: "main", value: "main" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "(" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: ")" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "{" });
    expect(lexer.next()).toMatchObject({ type: "nomevariavel", value: "x" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "," });
    expect(lexer.next()).toMatchObject({ type: "nomevariavel", value: "y" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "," });
    expect(lexer.next()).toMatchObject({ type: "nomevariavel", value: "z" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: ":" });
    expect(lexer.next()).toMatchObject({ type: "type", value: "integer" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: ";" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "}" });
  });
  it("declaração de variáveis na mesma linha", function () {
    lexer.reset(`x,y,z: string;`);
    expect(lexer.next()).toMatchObject({ type: "nomevariavel", value: "x" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "," });
    expect(lexer.next()).toMatchObject({ type: "nomevariavel", value: "y" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: "," });
    expect(lexer.next()).toMatchObject({ type: "nomevariavel", value: "z" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: ":" });
    expect(lexer.next()).toMatchObject({ type: "type", value: "string" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: ";" });
  });
  it("declaração de variáveis simples", function () {
    lexer.reset(`x: string;`);
    expect(lexer.next()).toMatchObject({ type: "nomevariavel", value: "x" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: ":" });
    expect(lexer.next()).toMatchObject({ type: "type", value: "string" });
    expect(lexer.next()).toMatchObject({ type: "symbol", value: ";" });
  });
  it("deve analisar o exemplo 0 sem erros", () => {
    const code = read(path.resolve("examples/ex0.mi"));
    lexer.reset(code);
    const arr = Array.from(lexer);
  });
  it("deve analisar o exemplo 1 sem erros", () => {
    const code = read(path.resolve("examples/ex1.mi"));
    lexer.reset(code);
    const arr = Array.from(lexer);
  });
  it("deve analisar o exemplo 2 sem erros", () => {
    const code = read(path.resolve("examples/ex2.mi"));
    lexer.reset(code);
    const arr = Array.from(lexer);
  });
  it("deve remover o elemento do array como uma fila", () => {
    const code = read(path.resolve("examples/ex0.mi"));
    lexer.reset(code);
    const arr = Array.from(lexer);
    lexer.reset(code);
    expect(arr.shift()).toStrictEqual(lexer.next());
  });
  it("deve retornar o número de início e fim das localizações", () => {
    const code = read(path.resolve("examples/ex0.mi"));
    lexer.reset(code);
    const arr = Array.from(lexer);
  });
});
