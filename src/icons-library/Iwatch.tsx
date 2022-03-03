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
                d="M36 12.0001H10V36.0001H36V12.0001Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M27 24.0001C27 21.791 25.2091 20.0001 23 20.0001C20.7909 20.0001 19 21.791 19 24.0001C19 26.2093 20.7909 28.0001 23 28.0001C25.2091 28.0001 27 26.2093 27 24.0001Z"
                fill={props.colors[3]}
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M15 12.0001C15 11.9272 15.0083 11.8544 15.0246 11.7832L16.6321 4.78319C16.7372 4.32565 17.1565 4.00012 17.6409 4.00012H28.3837C28.8681 4.00012 29.2874 4.32565 29.3925 4.78319L31 11.7832"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M15 36.0001C15 36.0731 15.0083 36.1458 15.0246 36.2171L16.6321 43.2171C16.7372 43.6746 17.1565 44.0001 17.6409 44.0001H28.3837C28.8681 44.0001 29.2874 43.6746 29.3925 43.2171L31 36.2171"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M39 16.0001V20.0001"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
