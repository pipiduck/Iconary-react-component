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
                d="M12 30C12 21.1634 19.1634 14 28 14V14C36.8366 14 44 21.1634 44 30V36H12V30Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M22.0002 36C21.0002 32.5 21.0002 14 28.0002 14C35.0002 14 34.5002 32 34.0002 36"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <rect
                x="4"
                y="36"
                width="30"
                height="6"
                rx="3"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="28"
                cy="10"
                r="4"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
        </svg>
    )
);
