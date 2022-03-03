 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 51 51"
            fill="none"
        >
            <path
                d="M17.3756 9.7941C18.1022 9.7941 18.7716 10.1881 19.1242 10.8234L21.5706 15.2302C21.891 15.8072 21.906 16.5051 21.6109 17.0954L19.254 21.809C19.254 21.809 19.937 25.3204 22.7955 28.1789C25.6539 31.0373 29.1535 31.7085 29.1535 31.7085L33.8665 29.3521C34.4572 29.0567 35.1555 29.072 35.7327 29.3929L40.1521 31.8499C40.7867 32.2027 41.1802 32.8718 41.1802 33.5979L41.1802 38.6714C41.1802 41.2551 38.7803 43.1211 36.3323 42.2951C31.3043 40.5986 23.4997 37.3684 18.5528 32.4215C13.606 27.4747 10.3758 19.67 8.67922 14.6421C7.8532 12.194 9.71929 9.7941 12.3029 9.7941L17.3756 9.7941Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M42 15H30V5H42V8L47 6V14L42 12V15Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
