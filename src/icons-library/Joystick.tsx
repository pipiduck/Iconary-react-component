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
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <rect
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        x="0"
                        y="29"
                        width="40"
                        height="10"
                    />
                    <rect
                        strokeLinecap={props.strokeLinecap}
                        x="22"
                        y="22"
                        width="12"
                        height="7"
                    />
                    <circle
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        cx="14"
                        cy="5"
                        r="5"
                    />
                    <path
                        d="M12,10 L5,29"
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
