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
                d="M19 7V19H7C5.89543 19 5 19.8954 5 21V41C5 42.1046 5.89543 43 7 43H27C28.1046 43 29 42.1046 29 41V29H41C42.1046 29 43 28.1046 43 27V7C43 5.89543 42.1046 5 41 5H21C19.8954 5 19 5.89543 19 7Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
