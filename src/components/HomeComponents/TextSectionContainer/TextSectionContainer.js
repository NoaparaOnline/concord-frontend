import React from "react";
import "./TextSectionContainer.css";
import { useTranslation } from "react-i18next";
const TextSectionContainer = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container container_inside">
      <div className="row">
        <div className="col-11 p-4 text_shadow text-center ">
          <p className="text_typography">
            {t("text_section_container.desc_text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextSectionContainer;
