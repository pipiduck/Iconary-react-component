 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
        >
            <g
                stroke="none"
                strokeWidth={props.strokeWidth}
                fill="none"
                fillRule="evenodd"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            >
                <g
                    transform="translate(4.000000, 4.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <circle
                        cx="20"
                        cy="20"
                        r="20"
                    />
                    <path
                        d="M4.54545455,7.27272727 C8.78787879,10.9090909 10.9090909,15.1515152 10.9090909,20 C10.9090909,24.8484848 8.78787879,29.0909091 4.54545455,32.7272727"
                    />
                    <path
                        d="M35.4545455,32.7272727 C31.2121212,29.0909091 29.0909091,24.8484848 29.0909091,20 C29.0909091,15.1515152 31.2121212,10.9090909 35.4545455,7.27272727 L35.4545455,7.27272727"
                    />
                    <path
                        d="M0,20 L40,20"
                    />
                    <path
                        d="M20,0 L20,40"
                    />
                </g>
            </g>
        </svg>
    )
);
