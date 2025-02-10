import { sayHello } from "./say-hello.js";
import { sayGoodbye } from "../say-goodbye.ts";
import { v4 } from "uuid";
import * as person from "../person.json";
import textFile from "../hello.txt?raw";

console.info("Hello World");

sayHello("Randi");
sayGoodbye("Hebat");

console.info(v4());

console.log(person);
console.log(person.name);
console.log(person.web);
console.log(person.instagram);
console.info(textFile);
