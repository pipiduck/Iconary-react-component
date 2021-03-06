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
            >
                <g>
                    <circle
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                        cx="24"
                        cy="24"
                        r="20"
                    />
                    <polyline
                        stroke={props.colors[2]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                        points="11 28.1320956 16.6844708 28.1320956 21.2233858 13 24.8952638 35 29.4483373 24.6175277 32.9127137 28.1320956 37 28.1320956"
                    />
                </g>
            </g>
        </svg>
    )
);
