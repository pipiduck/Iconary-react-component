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
                d="M14.3408 21.4118L24 24L33.6593 26.5882L43.3186 29.1763C45.6566 20.4505 41.8475 11.5257 34.5458 7C32.9195 5.99199 31.1199 5.2022 29.1764 4.68144C26.9382 4.08171 24.6868 3.88643 22.5 4.05083C14.2626 4.67006 6.94062 10.3925 4.68152 18.8236L14.3408 21.4118Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M29.1764 4.6814C29.1764 4.6814 23.5356 8.34634 20.3097 12.6583C17.0837 16.9703 16.2726 21.9294 16.2726 21.9294"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M29.1764 4.6814C29.1764 4.6814 32.229 10.6757 32.8667 16.023C33.5045 21.3702 31.7274 26.0705 31.7274 26.0705"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M4.68152 18.8236L14.3408 21.4118L24 24L33.6593 26.5882L43.3186 29.1764"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M4 44H44"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 24L18.5 43.9999"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M22.5 4.05083C24.6868 3.88643 26.9382 4.08171 29.1764 4.68144C31.1199 5.2022 32.9195 5.99199 34.5458 7"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
