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
                    <path
                        d="M30,33 C30,26.5555556 30,16.8888889 30,4 L18,4 C18,16.8748616 18,26.5310079 18,32.9684387"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M30,14 L25,14"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M30,20 L25,20"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M18,33 C18,34.0441131 18,35.6102827 18,37.6985088 C18,41.1787263 20.6862915,44 24,44 C27.3137085,44 30,41.1787263 30,37.6985088 C30,35.638632 30,34.0937244 30,33.063786 L18,33 Z"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                    />
                </g>
            </g>
        </svg>
    )
);
