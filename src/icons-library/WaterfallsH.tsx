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
                    transform="translate(6.000000, 6.000000)"
                    fill={props.colors[1]}
                    fillRule="nonzero"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <rect
                        x="0"
                        y="0"
                        width="14"
                        height="11"
                    />
                    <rect
                        x="22"
                        y="25"
                        width="14"
                        height="11"
                    />
                    <rect
                        x="22"
                        y="0"
                        width="14"
                        height="17"
                    />
                    <rect
                        x="0"
                        y="19"
                        width="14"
                        height="17"
                    />
                </g>
            </g>
        </svg>
    )
);
