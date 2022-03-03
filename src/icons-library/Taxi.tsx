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
                <g>
                    <g
                        transform="translate(4.000000, 11.000000)"
                    >
                        <path
                            d="M0,24 L0,16.7096591 C0,14.4362682 1.28486268,12.3581322 3.31860205,11.3421546 L4.00052612,11.0014917 L6.31046481,3.09193569 C6.73255871,1.28116768 8.34671607,0 10.2060289,0 L29.8943096,0 C31.7675242,0 33.3898545,1.29998174 33.7981404,3.12815989 L36.0031455,11.0014917 L36.6833687,11.3416171 C38.716025,12.3579864 40,14.4355394 40,16.7081367 L40,24 C40,25.6568542 38.6568542,27 37,27 L35.0031455,27 L35.0031455,28 C35.0031455,30.209139 33.2122845,32 31.0031455,32 C28.790861,32 27,30.209139 27,28 L27,27 L13,27 L13,28.0002631 C13,30.2092568 11.2092568,32 9.00026306,32 C6.79126935,32 5.00052612,30.2092568 5.00052612,28.0002631 L5.00052612,27 L3,27 C1.34314575,27 0,25.6568542 0,24 Z"
                            stroke={props.colors[0]}
                            strokeWidth={props.strokeWidth}
                            fill={props.colors[1]}
                            fillRule="nonzero"
                            strokeLinejoin={props.strokeLinejoin}
                        />
                        <circle
                            fill={props.colors[2]}
                            cx="9.5"
                            cy="19.5"
                            r="2.5"
                        />
                        <circle
                            fill={props.colors[2]}
                            cx="30.5"
                            cy="19.5"
                            r="2.5"
                        />
                    </g>
                    <path
                        d="M18,11 L30,11 L29.0088185,6.04409272 C28.8868085,5.43404265 28.3998325,5 27.8373941,5 L20.1626059,5 C19.6001675,5 19.1131915,5.43404265 18.9911815,6.04409272 L18,11 Z"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M15,23 L33,23"
                        stroke={props.colors[2]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                </g>
            </g>
        </svg>
    )
);
