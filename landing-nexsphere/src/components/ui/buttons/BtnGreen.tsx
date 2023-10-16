import React from "react";

type BtnGreenProps = {
    label: string;
    type?: "button" | "reset" | "submit";
};

const BtnGreen: React.FC<BtnGreenProps> = ({ label, type = "button" }) => {
    return (
        <button
            type={type}
            className="focus:outline-none bg-cl-green-2 transition-all sm:hover:bg-cl-green-3 font-[500] text-white border-none px-6 py-3 text-[14px] leading-[24px] rounded-[4px]"
        >
            {label}
        </button>
    );
};

BtnGreen.defaultProps = {
    type: "button",
};
export default BtnGreen;
