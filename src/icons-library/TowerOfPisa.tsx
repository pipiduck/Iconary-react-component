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
            <g
                clipPath={'url(#' + props.id + 'd0554db7' + ')'}
            >
                <path
                    d="M4 44H44"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M21.2493 7.47464L36.7041 11.6157L28 44L10.9999 44L21.2493 7.47464Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M19.3174 6.957L38.6359 12.1334"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M16.2114 18.5481L35.5299 23.7245"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M25.4823 20.9318L26.5176 17.0681"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <path
                    d="M13.106 30.1392L32.4245 35.3156"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M22.4823 31.9318L23.5176 28.0681"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <rect
                    x="25.1826"
                    y="4.38739"
                    width="10"
                    height="4"
                    rx="1"
                    transform="rotate(15 25.1826 4.38739)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M19.4823 42.9318L20.5176 39.0681"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + 'd0554db7'}
                >
                    <rect
                        width="48"
                        height="48"
                        fill={props.colors[2]}
                    />
                </clipPath>
            </defs>
        </svg>
    )
);