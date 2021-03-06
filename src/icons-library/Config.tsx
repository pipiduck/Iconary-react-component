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
                    fillRule="nonzero"
                    strokeWidth={props.strokeWidth}
                >
                    <polygon
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        points="20 1.74860126e-15 14 6 6 6 6 14 1.74860126e-15 20 6 26 6 34 14 34 20 40 26 34 34 34 34 26 40 20 34 14 34 6 26 6"
                    />
                    <circle
                        stroke={props.colors[2]}
                        fill={props.colors[3]}
                        cx="20"
                        cy="20"
                        r="6"
                    />
                </g>
            </g>
        </svg>
    )
);
