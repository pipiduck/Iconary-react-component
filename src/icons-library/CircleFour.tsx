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
                d="M24 10C25.6569 10 27 8.65685 27 7C27 5.34315 25.6569 4 24 4C22.3431 4 21 5.34315 21 7C21 8.65685 22.3431 10 24 10Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 44C25.6569 44 27 42.6569 27 41C27 39.3431 25.6569 38 24 38C22.3431 38 21 39.3431 21 41C21 42.6569 22.3431 44 24 44Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 27C8.65685 27 10 25.6569 10 24C10 22.3431 8.65685 21 7 21C5.34315 21 4 22.3431 4 24C4 25.6569 5.34315 27 7 27Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41 27C42.6569 27 44 25.6569 44 24C44 22.3431 42.6569 21 41 21C39.3431 21 38 22.3431 38 24C38 25.6569 39.3431 27 41 27Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24.1969 15.7437C27.2874 15.7437 30.0141 14.186 31.6346 11.8129C33.5162 12.9387 35.1205 14.4803 36.3205 16.3108C33.7298 17.8909 32.0002 20.7435 32.0002 24C32.0002 27.3428 33.8226 30.2599 36.528 31.812C35.4049 33.6293 33.8903 35.1792 32.102 36.344C30.5754 33.5471 27.6077 31.6498 24.1969 31.6498C20.7969 31.6498 17.8373 33.5351 16.3064 36.3174C14.4779 35.1177 12.9379 33.5145 11.813 31.6344C14.1861 30.0139 15.7438 27.2872 15.7438 24.1968C15.7438 21.1165 14.1964 18.3976 11.8365 16.7752C13.0547 14.7536 14.7538 13.0546 16.7753 11.8364C18.3977 14.1963 21.1166 15.7437 24.1969 15.7437Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
