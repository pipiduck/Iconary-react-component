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
            <mask
                id={props.id + 'd0306dd9'}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="48"
                height="48" style={{maskType: 'alpha'}}
            >
                <rect
                    width="48"
                    height="48"
                    fill={props.colors[2]}
                />
            </mask>
            <g
                mask={'url(#' + props.id + 'd0306dd9' + ')'}
            >
                <rect
                    x="38"
                    y="30"
                    width="28"
                    height="12"
                    transform="rotate(180 38 30)"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M42 40H6"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M42 8L6 8"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
            </g>
        </svg>
    )
);
