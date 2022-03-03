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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0002 45C27.2208 45 32.7275 40.8 32.7275 24C32.7275 7.2 27.2208 3 24.0002 3C20.7797 3 15.2729 7.48302 15.2729 24C15.2729 40.517 20.7797 45 24.0002 45Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.105 35C6.7153 37.8123 13.2477 40.421 28.3638 31.621C43.4798 22.821 44.5055 15.8123 42.8952 13C41.2849 10.1877 34.4979 7.72722 19.6365 16.379C4.77506 25.0307 3.49474 32.1877 5.105 35Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.10489 13C3.49463 15.8123 4.52029 22.821 19.6364 31.621C34.7525 40.421 41.2848 37.8123 42.8951 35C44.5054 32.1877 43.2251 25.0307 28.3636 16.379C13.5022 7.72722 6.7152 10.1877 5.10489 13Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
