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
                    fill={props.colors[1]}
                    fillRule="nonzero"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M0,20 L0,8 L9,8 L9,6 C9,2.6862915 11.6862915,0 15,0 C18.3137085,0 21,2.6862915 21,6 L21,8 L30,8 L30,20 L34,20 C37.3137085,20 40,22.6862915 40,26 C40,29.3137085 37.3137085,32 34,32 L30,32 L30,40 L0,40 L0,32 L4,32 C7.3137085,32 10,29.3137085 10,26 C10,22.6862915 7.3137085,20 4,20 L0,20 Z"
                    />
                </g>
            </g>
        </svg>
    )
);
