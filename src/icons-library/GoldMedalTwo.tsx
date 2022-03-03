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
                d="M36 32C36 28.446 34.455 25.2529 32 23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32Z"
                fill={props.colors[1]}
            />
            <path
                d="M16 4H32V20V23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556V20V4Z"
                fill={props.colors[1]}
            />
            <path
                d="M16 4H32M16 4H8V14L16 20M16 4V20M32 4H40V14L32 20M32 4V20M16 23.0556C18.123 21.1554 20.9266 20 24 20C27.0734 20 29.877 21.1554 32 23.0556M16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32C36 28.446 34.455 25.2529 32 23.0556M16 23.0556V20M32 23.0556V20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M32 4H40V14L32 20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M16 4H8V14L16 20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M36 32C36 28.446 34.455 25.2529 32 23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M16 4H32V20V23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556V20V4Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 37V27L22 28M24 37H26M24 37H22"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
