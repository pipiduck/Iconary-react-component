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
                strokeLinejoin={props.strokeLinejoin}
            >
                <g
                    transform="translate(4.000000, 4.000000)"
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M34.5120527,5.53620381 C30.8466015,2.10248672 25.9188318,0 20.5,0 C9.17816263,0 1.98951966e-13,9.17816263 1.98951966e-13,20.5 C1.98951966e-13,31.8218374 9.17816263,41 20.5,41 C26.1148083,41 31.2023928,38.742687 34.9047551,35.0860595 L20,20 L34.5120527,5.53620381 Z"
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                    />
                    <circle
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        cx="36"
                        cy="20"
                        r="4"
                    />
                    <path
                        d="M13,9 L13,17"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M9,13 L17,13"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
