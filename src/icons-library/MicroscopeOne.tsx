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
                d="M29.0026 18.3735L30.1075 17.2686L30.6378 16.7383C32.7857 14.5904 32.7857 11.108 30.6378 8.96014V8.96014C28.4899 6.81225 25.0075 6.81225 22.8596 8.96014L9.17208 22.6477C9.11629 22.7035 9.11629 22.7939 9.17208 22.8497L16.1421 29.8198C16.5327 30.2103 17.1658 30.2103 17.5563 29.8198L21.2687 26.1075L22.3735 25.0026"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M28.1629 6.48526L29.9307 4.71749C31.2975 3.35066 33.5136 3.35066 34.8804 4.71749C36.2473 6.08433 36.2473 8.30041 34.8804 9.66724L33.1127 11.435L28.1629 6.48526Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M10.4853 24.1629L6.24262 28.4056L11.1924 33.3553L15.435 29.1127L10.4853 24.1629Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="26.0416"
                cy="22.0416"
                r="4.5"
                transform="rotate(45 26.0416 22.0416)"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M6 20L18.7279 32.7279"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M10 44H42"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31 22C35 22 39 26 39 32C39 38.4 33.8333 41.8333 31 44"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
