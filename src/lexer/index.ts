import moo from "moo";
import rules from "./rules";

const lexer = moo.compile(rules);
lexer.next = ((next) => () => {
  let tok: moo.Token | undefined;
  do {
    tok = next?.call(lexer);
  } while (["space", "comment", "newline"].some((e) => e === tok?.type));
  return tok;
})(lexer.next);

export { tokens } from "./tokens";

export default lexer;
