import { IconProps } from "./interface";

export const EthereumIcon = (props: IconProps) => {

    const { size = 24, stroke = "#FFFFFF" } = props;

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size}
            height={size}
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke={stroke} 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 12l6 -9l6 9l-6 9z"></path>
            <path d="M6 12l6 -3l6 3l-6 2z"></path>
        </svg>
    );
}