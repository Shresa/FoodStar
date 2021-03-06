import React from "react";
import classnames from "classnames";

const InfoButtons = (props) => {
  return (
    <>
      <button
        className={classnames(
          "flex items-center gap-3 border border-foodstar-400 px-4 py-2 rounded-lg",
          {
            " bg-foodstar-400 text-white": props.isActive,
          }
        )}
      >
        {props.children}
      </button>
    </>
  );
};

export default InfoButtons;