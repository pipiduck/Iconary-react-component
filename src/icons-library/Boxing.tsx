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
                d="M38 36V42C38 43.1 37.11 44 36 44H17C15.9 44 15 43.11 15 42V36"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M11 15V10C11 6.68629 13.6863 4 17 4H28H38C41.3137 4 44 6.68629 44 10V30C44 33.3137 41.3198 36 38.006 36C30.9668 36 19.6598 36 15 36C8 36 4 28 4 23C4 18 4 15 4 15H11Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <line
                x1="11"
                y1="14"
                x2="11"
                y2="22"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
