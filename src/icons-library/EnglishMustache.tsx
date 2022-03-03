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
                d="M10.0642 24.0585C13.3515 22.9849 13.5293 18.9658 17.8609 18.1171C21.3261 17.4381 23.4076 19.8255 23.9251 22.361C24.3583 24.4829 23.0588 30 16.1283 30C7.46523 30 4.57754 24.4829 4 22.361C4.8663 23.2098 7.46523 24.9073 10.0642 24.0585Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M37.9358 24.0585C34.6485 22.9849 34.4707 18.9658 30.1391 18.1171C26.6739 17.4381 24.5924 19.8255 24.0749 22.361C23.6417 24.4829 24.9412 30 31.8717 30C40.5348 30 43.4225 24.4829 44 22.361C43.1337 23.2098 40.5348 24.9073 37.9358 24.0585Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
