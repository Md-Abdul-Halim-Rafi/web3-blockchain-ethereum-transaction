import { IconProps } from "./interface";

export const InfoIcon = (props: IconProps) => {

    const { size = 20, stroke = "#FFFFFF" } = props;

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-info-circle" 
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
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
            <polyline points="11 12 12 12 12 16 13 16"></polyline>
        </svg>
    );
}