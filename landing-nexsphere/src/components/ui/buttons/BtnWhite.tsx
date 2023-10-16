import React from "react"; 

type BtnWhiteProps = {
    label:string, 
    type?: "button" | "reset" |"submit"; 
}

const BtnWhite : React.FC<BtnWhiteProps> = ({label, type = 'button'}) =>{
    return (
        <button type={type} 
        className="focus:outline-none bg-transparent transition-all sm:hover:text-cl-green-1 font-[500] border px-6 py-3 text-[14px] leading-[24px] rounded-[4px]">
        {label}
        </button>
    );
};

BtnWhite.defaultProps ={
    type:"button",
}
export default BtnWhite;