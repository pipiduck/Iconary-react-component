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
                clipPath={'url(#' + props.id + '101dc9c6' + ')'}
            >
                <path
                    d="M44.7818 24.1702L31.918 7.09938L14.1348 20.5L27.5 37L30.8556 34.6644L44.7818 24.1702Z"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M13.2056 40.0721L44.5653 40.072"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + '101dc9c6'}
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
