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
                    <polygon
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                        points="6 20.3768116 24 14 42 20.3768116 36.6666667 34 11.3333333 34"
                    />
                    <polygon
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                        points="13 8 35 8 34.99759 17.8960866 24 14 13 17.8958424"
                    />
                    <path
                        d="M24,8 L24,4"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M24,24 L24,16"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <polyline
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                        points="10 40 13.5 44 17 40 20.5 44 24 40 27.5 44 31 40 34.5 44 38 40"
                    />
                </g>
            </g>
        </svg>
    )
);
