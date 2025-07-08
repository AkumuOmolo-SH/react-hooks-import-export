import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife, cats as bigCats} from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

console.log(bigCats);


console.log(RMFunctions.trees);

wildlife();

function ColoradoStateParks() {
  howManyParks(); 

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;