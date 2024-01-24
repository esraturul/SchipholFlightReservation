import React from "react";

export const ButtonYellowComp = ({ label, extraStyle,onClick }) => {
  return (
    <div className={`${extraStyle}`}>
        <div className="py-2 px-5 bg-orange-400 text-sm">
          <button type="button" onClick={onClick}>
      {label}
    </button>
        </div>
      
    </div>
  );
};
