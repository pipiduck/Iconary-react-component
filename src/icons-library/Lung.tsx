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
                d="M18.2442 22.2631C17.9517 17.3076 16.7773 14.7417 14.7208 14.5654C11.4002 14.2807 6.31025 19.7086 4.80125 27.3367C3.29225 34.9649 4.03742 40.4289 6.01197 40.7978C7.98652 41.1668 10.8556 39.0174 12.2168 39.0174C13.578 39.0174 18.2958 40.058 18.2958 38.1732C18.2958 37.2446 18.2958 34.9908 18.2958 30.0703"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M29.6236 22.3708C29.9054 17.3448 31.0819 14.743 33.1532 14.5654C36.4739 14.2807 41.5638 19.7086 43.0728 27.3367C44.5818 34.9649 43.8366 40.4289 41.8621 40.7978C39.8875 41.1668 37.0184 39.0174 35.6573 39.0174C34.2961 39.0174 29.5782 40.058 29.5782 38.1732C29.5782 37.2467 29.5782 34.9703 29.5782 30.0703"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M20.5557 5.00003V19.9106C20.5121 22.2021 18.6 23.3479 14.8193 23.3479"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M27.292 5.00003V19.9106C27.3355 22.2021 29.2476 23.3479 33.0283 23.3479"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M15 30.0704C18.9553 30.0704 21.9553 29.1311 24 27.2525C26.0594 29.1311 29.069 30.0704 33.0286 30.0704"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
