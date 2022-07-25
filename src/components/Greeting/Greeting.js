import { useState } from "react";
import Output from "../Output/Output";

const Greeting = () => {

    const [changedText, setChangedText] = useState(false)

  return (
    <>
      <h1>Hello World!</h1>
      <h2>The World of Magic!</h2>
      
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}

      <button onClick={() => setChangedText(true)}>Magic!</button>
    </>
  );
};

export default Greeting;
