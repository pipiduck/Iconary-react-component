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
            <path
                d="M41 26C41 35.9411 35 44 24 44C13 44 7 35.9411 7 26C7 22.3198 8.10446 18.8975 10 16.0466C13.2248 11.1965 17.7391 13 24 13C30.2609 13 34.7752 11.1965 38 16.0466C39.8955 18.8975 41 22.3198 41 26Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M26 13L29 9H26L24 7L22 9H19L22 13"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="18"
                cy="20"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="15"
                cy="27"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="21"
                cy="25"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="18"
                cy="32"
                r="2"
                fill={props.colors[2]}
            />
        </svg>
    )
);
