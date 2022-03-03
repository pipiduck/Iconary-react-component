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
            <rect
                x="5"
                y="28"
                width="38"
                height="14"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="5"
                y="6"
                width="38"
                height="14"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="11"
                y="11"
                width="4"
                height="4"
                rx="2"
                fill={props.colors[2]}
            />
            <rect
                x="11"
                y="33"
                width="4"
                height="4"
                rx="2"
                fill={props.colors[2]}
            />
            <rect
                x="19"
                y="11"
                width="4"
                height="4"
                rx="2"
                fill={props.colors[2]}
            />
            <rect
                x="19"
                y="33"
                width="4"
                height="4"
                rx="2"
                fill={props.colors[2]}
            />
            <path
                d="M31 13H35"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31 35H35"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
