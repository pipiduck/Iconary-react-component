 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                d="M13 26H15C17.76 26 20 23.76 20 21C20 18.24 17.76 16 15 16H11C8.24 16 6 18.24 6 21V30C6 33.3137 8.68629 36 12 36H36C39.3137 36 42 33.3137 42 30V26C42 23.7909 40.2091 22 38 22H24"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M34 44H14C12.89 44 12 43.1 12 42V36H36V42C36 43.1 35.1 44 34 44Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M6 20C5 20 4 18 4 16V12C4 7.58 7.58 4 12 4H36C40.42 4 44 7.58 44 12V16C44 19.31 41.31 22 38 22H19.9"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
