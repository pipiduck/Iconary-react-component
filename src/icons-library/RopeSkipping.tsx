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
                d="M10 32C10 32 10 14.866 10 11C10 7.13401 13.134 4 17 4C20.866 4 24 7.13401 24 11C24 11 24 33.134 24 37C24 40.866 27.134 44 31 44C34.866 44 38 40.866 38 37V16"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M41 4V16H35V4H41Z"
                fill={props.colors[1]}
            />
            <path
                d="M32 16H35M44 16H41M41 16V4H35V16M41 16H35"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M7 44V32H13V44H7Z"
                fill={props.colors[1]}
            />
            <path
                d="M16 32H13M4 32H7M7 32V44H13V32M7 32H13"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
