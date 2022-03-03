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
                d="M22.1421 15.8579L10.8284 27.1716C9.26633 28.7337 9.26633 31.2663 10.8284 32.8284L20.7279 42.7279C22.29 44.29 24.8227 44.29 26.3848 42.7279L36.2843 32.8284C37.8464 31.2663 37.8464 28.7337 36.2843 27.1716L24.9706 15.8579C24.1895 15.0768 22.9232 15.0768 22.1421 15.8579Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M23 14.9098C23 14.9098 29.0584 8.14918 30.4107 6.74024C31.763 5.3313 35.5675 3.90041 37.8213 6.24865C40.0752 8.59689 38.6412 12.3183 37.2889 13.7273C35.9366 15.1362 30.6208 21 30.6208 21"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M23 14.9098C23 14.9098 16.9416 8.14918 15.5893 6.74024C14.237 5.3313 10.4325 3.90041 8.17867 6.24865C5.92485 8.59689 7.35876 12.3183 8.71106 13.7273C10.0634 15.1362 15.3792 21 15.3792 21"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
