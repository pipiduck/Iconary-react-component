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
                d="M4 20L24 6L44 20V42H4V20Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M12.6863 26.6863C14.172 25.2006 15.9358 24.022 17.8771 23.2179C19.8183 22.4139 21.8988 22 24 22C26.1011 22 28.1817 22.4139 30.1229 23.2179C32.0641 24.022 33.828 25.2006 35.3137 26.6863"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M18.3431 32.3431C19.086 31.6003 19.9679 31.011 20.9385 30.609C21.9091 30.2069 22.9494 30 24 30C25.0506 30 26.0909 30.2069 27.0615 30.609C28.0321 31.011 28.914 31.6003 29.6569 32.3431"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
