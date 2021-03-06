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
                    <path
                        d="M20,38 C32,38 34,27.5323633 34,24 C34,20.837862 34,16.1711953 34,10 L6,10 C6,13.442296 6,18.1089627 6,24 C6,27.450596 8,38 20,38 Z"
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                    />
                    <path
                        d="M3.55271368e-15,4 L6,10"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M40,4 L34,10"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M0,23 L6,23"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M40,23 L34,23"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M3,40 L9,34"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M37,40 L31,34"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M20,38 L20,10"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M10.920475,35.0408965 C13.002464,36.7831828 15.9245088,38 20,38 L20,38 C24.1112534,38 27.0487287,36.7713317 29.1341392,35.0138386"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M28,8.33333333 C28,3.73096042 24.418278,0 20,0 C15.581722,0 12,3.73096042 12,8.33333333 L12,10 L28,10 L28,8.33333333 Z"
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                    />
                </g>
            </g>
        </svg>
    )
);
