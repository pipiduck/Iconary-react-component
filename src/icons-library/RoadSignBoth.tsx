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
            <g>
                <g>
                    <path
                        d="M10 8V16H38L42 12L38 8L10 8Z"
                        fill={props.colors[1]}
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M38 23V31H10L6 27L10 23L38 23Z"
                        fill={props.colors[1]}
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M24 31V44"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M24 16V23"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M24 4V8"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M19 44H29"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                </g>
            </g>
        </svg>
    )
);
