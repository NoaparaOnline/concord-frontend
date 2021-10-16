import React from "react";
import "./WeAreServing.css";
import ReactTypingEffect from "react-typing-effect";

const WeAreServing = () => {
  return (
    <div className="colrbck">
      <div className="container wrapper">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
            <span className="static-txt"> We Are Serving</span>
            <ReactTypingEffect
              text={["BANGLADESH", "YOU", "WORLD"]}
              cursorRenderer={(cursor) => (
                <h1 style={{ backgroundColor: "#23A455", color: "#fff" ,lineHeight:'1.23'}}>
                  
                  {cursor}
                </h1>
              )}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          style={{
                            backgroundColor: "#23A455",
                            color: "#fff",
                            fontWeight: 700,
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreServing;
