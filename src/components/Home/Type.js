import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "< Software Developer />",
          "< React Enthusiast />",
          "< StackOverflow Contributor />"
        ],
        cursor:'|',
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
