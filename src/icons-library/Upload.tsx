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
                id={props.id + '43e5ed28'}
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
                mask={'url(#' + props.id + '43e5ed28' + ')'}
            >
                <path
                    d="M6 24.0083V42H42V24"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M33 15L24 6L15 15"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M23.9917 32V6"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
            </g>
        </svg>
    )
);
