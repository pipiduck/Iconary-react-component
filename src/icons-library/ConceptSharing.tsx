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
                d="M28.3669 36H24L15 31.0396L4.00879 35.0818L7.01068 41.0257L14.0833 38.0729C20.7 42.0243 24.7272 44 26.1651 44C27.603 44 33.5479 41.3334 44 36"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.9923 26.9878C28.9923 24.097 28.9923 22.5402 28.9923 22.3171C30.0923 21.861 31.535 21.193 32.364 20.364C33.9926 18.7353 35 16.4853 35 14C35 9.02944 30.9706 5 26 5C21.0294 5 17 9.02944 17 14C17 16.4853 18.0074 18.7353 19.636 20.364C20.465 21.193 21.9 21.861 23 22.3171C23.0056 22.6525 23.0056 24.2094 23 26.9878H28.9923Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M12 21L13 20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M40 21L39 20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M15 5L14 4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M37 5L38 4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M41 12H40"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M12 12H11"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
