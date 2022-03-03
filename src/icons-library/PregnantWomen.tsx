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
                d="M33 4.00012V11.5187C40.3124 15.7132 43.6144 21.294 42.9062 28.2611C42.1979 35.2282 38.8959 40.4746 33 44.0001"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M13.7722 4.00012C11.6342 4.36948 10.0954 5.62198 9.15593 7.75763C7.74671 10.9611 5 21.9638 5 23.7259C5 25.4881 8.56767 30.2349 17.0518 37.4357C20.9831 40.7724 23.3065 40.6022 24.5648 38.3639C25.8231 36.1257 24.1585 34.6904 22.0496 33.0369C18.1867 30.0084 13.102 25.2151 13.102 23.1111C13.102 21.7084 14.4186 17.4337 17.0518 10.2871"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M8.20117 28.941C8.71547 33.9211 9.64845 38.9211 11.0001 43.941"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M33 19.9445C34.5469 20.9722 35.5469 22.3095 36 23.9566C36.4531 25.6036 36.5852 27.1056 36.3963 28.4626"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
