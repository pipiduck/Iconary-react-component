 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 59 49"
            fill="none"
        >
            <path
                d="M42.9999 19.9757L42.0174 23.9333L33.3115 30.2403L33.3616 41.9576L39.9999 42.0002L39.6273 33.5147C46.5487 29.1859 50.0095 26.0144 50.0095 24.0002C50.0095 21.986 50.0095 16.6722 50.0095 6.05876"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M17 20.051L18.0331 24.0002L26.4005 30.4159L26.7595 42.1279L20 42.0002L20.2029 33.9087C13.4093 30.0009 10.0126 27.0251 10.0126 24.9812C10.0126 22.9374 10.0126 17.2867 10.0126 6.02919"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
