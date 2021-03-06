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
                <g
                    transform="translate(4.000000, 4.000000)"
                    strokeWidth={props.strokeWidth}
                >
                    <rect
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        x="0"
                        y="14"
                        width="40"
                        height="24"
                        rx="12"
                    />
                    <path
                        d="M12,22 L12,30"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M8,26 L16,26"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <polyline
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                        points="20 12 20 5.71428571 28 5.71428571 28 2.84272605e-13"
                    />
                    <circle
                        stroke={props.colors[2]}
                        fill={props.colors[3]}
                        fillRule="nonzero"
                        cx="28"
                        cy="26"
                        r="4"
                    />
                </g>
            </g>
        </svg>
    )
);
