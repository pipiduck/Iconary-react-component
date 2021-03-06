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
                d="M40.0001 18C37.0001 18 32.0005 18 30.0003 23C28 28 30.5002 32.5 33.0002 35"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M18 10L40 10"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M20 4H38.0001C39.1047 4 40.0001 4.89543 40.0001 6V24.2876C40.0001 27.7198 38.3996 30.9554 35.664 33.0283C32.022 35.7881 27.0877 39.5088 25 41C21.5 43.5 15 46 10.0003 41C5.00055 36 6.25065 29.443 10.0005 26C13.7503 22.557 18 19.1519 18 19.1519V6C18 4.89543 18.8954 4 20 4Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
