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
                d="M20.7301 27.1255C22.7185 25.833 25.2815 25.833 27.2699 27.1255L42.8202 37.2331C43.556 37.7114 44 38.5295 44 39.4071C44 40.8391 42.8391 42 41.4071 42H6.59288C5.16087 42 4 40.8391 4 39.4071C4 38.5295 4.44395 37.7114 5.17979 37.2331L20.7301 27.1255Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 25C24 25 30 16.3137 30 13C30 9.68629 27.3137 7 24 7C20.6863 7 18 9.68629 18 13"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
