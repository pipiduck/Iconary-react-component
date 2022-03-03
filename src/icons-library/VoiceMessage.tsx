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
            >
                <g
                    transform="translate(4.000000, 4.000000)"
                >
                    <circle
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                        cx="20"
                        cy="20"
                        r="20"
                    />
                    <g
                        transform="translate(11.000000, 10.000000)"
                    >
                        <circle
                            fill={props.colors[2]}
                            cx="2"
                            cy="9.89949494"
                            r="2"
                        />
                        <path
                            d="M6.94974747,14.8492424 C8.21649831,13.5824916 9,11.8324916 9,9.89949494 C9,7.96649831 8.21649831,6.21649831 6.94974747,4.94974747"
                            stroke={props.colors[2]}
                            strokeWidth={props.strokeWidth}
                            strokeLinecap={props.strokeLinecap}
                            strokeLinejoin={props.strokeLinejoin}
                        />
                        <path
                            d="M11.8994949,19.7989899 C14.4329966,17.2654882 16,13.7654882 16,9.89949494 C16,6.03350169 14.4329966,2.53350169 11.8994949,5.68434189e-14"
                            stroke={props.colors[2]}
                            strokeWidth={props.strokeWidth}
                            strokeLinecap={props.strokeLinecap}
                            strokeLinejoin={props.strokeLinejoin}
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
);