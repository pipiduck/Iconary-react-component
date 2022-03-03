 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
        >
            <g
                stroke="none"
                strokeWidth={props.strokeWidth}
                fill="none"
                fillRule="evenodd"
                strokeLinejoin={props.strokeLinejoin}
            >
                <path
                    d="M18,6 C18,9.3137085 20.6862915,12 24,12 C27.3137085,12 30,9.3137085 30,6 L35.4545455,6 L42,15.8181818 L36.2727273,20.7272727 L36.2727273,42 L11.7272727,42 L11.7272727,20.7272727 L6,15.8181818 L12.5454545,6 L18,6 Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    fill={props.colors[1]}
                    fillRule="nonzero"
                />
            </g>
        </svg>
    )
);