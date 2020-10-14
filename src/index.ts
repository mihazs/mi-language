import program from "commander";
import { read, write } from "./file";
import { compile } from "./compiler";
import { tokens } from "./lexer";
import path from "path";
program
  .version("0.1.0")
  .arguments("<arquivo>")
  .option("-l, --lex", "Mostra o resultado do lexer")
  .option("-s, --syntax", "Mostra o resultado da análise sintática")
  .option("-c, --semantic", "Mostra o resultado da análise semântica")
  //.option("-w <saida>, --write <saida>", "Grava o resultado no arquivo especificado")
  .description("Executa um arquivo .mi")
  .action((arquivo, options) => {
    console.log(arquivo);
    const code = read(path.resolve(arquivo));
    const result = compile(code);
    let output = "";
    if (options.lex) {
      output += `lex result\n\n${JSON.stringify(
        result.lex.map((k) => ({
          linha: k.line,
          codigo: k.type == "nomevariavel" ? tokens?.nomevariavel : k?.type in tokens ? tokens[k.type] : tokens[k.value],
          lexema: k.value,
        }))
      )}\n\n`;
    }
    /* console.log(options.write);
        if(options.write){
            write(options.write, output);
        }*/
    console.log(output);
    console.log("Success");
  });

program.parse(process.argv);
