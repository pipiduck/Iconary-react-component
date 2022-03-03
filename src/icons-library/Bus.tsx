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
                d="M6.01245 34.005V8.03619C6.01245 6.93162 6.90788 6.03619 8.01245 6.03619H40.0001C41.1046 6.03619 42.0001 6.93162 42.0001 8.03619V34.005C42.0001 35.6619 40.6569 37.005 39.0001 37.005H37.0049V38C37.0049 40.2091 35.2141 42 33.0049 42H33.0045C30.7954 42 29.0045 40.2091 29.0045 38V37.005H19.008V38.0016C19.008 40.2099 17.2178 42 15.0096 42C12.8014 42 11.0113 40.2099 11.0113 38.0016V37.005H9.01245C7.3556 37.005 6.01245 35.6619 6.01245 34.005Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M42 23H6"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M34 13H14V23H34V13Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M14 30H16"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M32 30H34"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
