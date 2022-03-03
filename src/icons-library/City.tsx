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
                d="M4 42H44"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="8"
                y="26"
                width="8"
                height="16"
                rx="2"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M12 34H13"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="16"
                y="4"
                width="24"
                height="38"
                rx="2"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="22"
                y="10"
                width="4"
                height="4"
                fill={props.colors[2]}
            />
            <rect
                x="30"
                y="10"
                width="4"
                height="4"
                fill={props.colors[2]}
            />
            <rect
                x="22"
                y="17"
                width="4"
                height="4"
                fill={props.colors[2]}
            />
            <rect
                x="30"
                y="17"
                width="4"
                height="4"
                fill={props.colors[2]}
            />
            <rect
                x="30"
                y="24"
                width="4"
                height="4"
                fill={props.colors[2]}
            />
            <rect
                x="30"
                y="31"
                width="4"
                height="4"
                fill={props.colors[2]}
            />
        </svg>
    )
);
