import { second, anotherOne } from "./second";
import { first } from "./first";

export default function third() {
  console.log(second(), first(), anotherOne());
}

third();
