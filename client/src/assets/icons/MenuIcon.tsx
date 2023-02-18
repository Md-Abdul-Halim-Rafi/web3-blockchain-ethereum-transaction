import { IconProps } from "./interface";

export const MenuIcon = (props: IconProps) => {

    const { size = 40, stroke = "#FFFFFF" } = props;

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-menu-2" 
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
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
    );
}