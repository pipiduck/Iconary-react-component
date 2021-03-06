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
                <polyline
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    points="42 18 42 44 6 44 6 18 6 18"
                />
                <rect
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    fill={props.colors[1]}
                    fillRule="nonzero"
                    x="6"
                    y="4"
                    width="36"
                    height="14"
                />
                <path
                    d="M16,27 L16,35"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <path
                    d="M12,31 L20,31"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <circle
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    fill={props.colors[1]}
                    fillRule="nonzero"
                    cx="32"
                    cy="31"
                    r="4"
                />
            </g>
        </svg>
    )
);
