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
                clipPath={'url(#' + props.id + '7b0eb0d2' + ')'}
            >
                <path
                    d="M29.2336 6.97919C32.9477 5.4122 40.5099 4.51028 43.0279 12.8715C45.5458 21.2327 34.7205 27.4827 35.0016 20.9696C35.2827 14.4564 42.9968 19.8176 42.8317 24.5317C42.6666 29.2458 37.7695 29.7638 37.7695 29.7638"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <rect
                    x="4.24121"
                    y="15.7776"
                    width="26"
                    height="12"
                    rx="2"
                    transform="rotate(-30 4.24121 15.7776)"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M21.5 19.6699L29 32.6603"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <rect
                    x="26.4014"
                    y="34.1603"
                    width="6"
                    height="10"
                    rx="3"
                    transform="rotate(-30 26.4014 34.1603)"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M11.4014 8.1795L16.5975 5.1795"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M21.9014 26.366L27.0975 23.366"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + '7b0eb0d2'}
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
