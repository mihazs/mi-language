import psr from "./mi-parser";
import { syntaxTokenizer } from "../lexer";
export const parser = psr.setTokenizer(syntaxTokenizer);
