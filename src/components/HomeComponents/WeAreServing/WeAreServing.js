import React from "react";
import "./WeAreServing.css";
import ReactTypingEffect from "react-typing-effect";
import { useTranslation } from "react-i18next";
const WeAreServing = () => {
  const { t } = useTranslation("common");
  return (
    <div className="colrbck">
      <div className="container wrapper">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
            <span className="static-txt">{t('we_are_serving.serving_text')}</span>
            <ReactTypingEffect
              text={[t('we_are_serving.bangladesh_text'),t('we_are_serving.you_text') , t('we_are_serving.world_text')]}
              cursorRenderer={(cursor) => (
                <h1
                  style={{
                    backgroundColor: "#23A455",
                    color: "#fff",
                    lineHeight: "1.23",
                  }}
                >
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
                          {char.toUpperCase()}
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
