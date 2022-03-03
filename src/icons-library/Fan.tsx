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
                d="M14.0139 27.7553L4.02783 24.5106C5.39825 20.2929 8.06873 16.6173 11.6565 14.0106C15.2443 11.404 19.5653 10 24 10C28.4348 10 32.7557 11.404 36.3435 14.0106C39.9313 16.6173 42.6018 20.2929 43.9722 24.5106L33.9861 27.7553M14.0139 27.7553C14.6991 25.6465 16.0344 23.8087 17.8283 22.5053M14.0139 27.7553L24 31M17.8283 22.5053C19.6222 21.202 21.7826 20.5 24 20.5M17.8283 22.5053L24 31M24 20.5C26.2174 20.5 28.3779 21.202 30.1718 22.5053M24 20.5V31M30.1718 22.5053C31.9657 23.8087 33.3009 25.6465 33.9861 27.7553M30.1718 22.5053L24 31M33.9861 27.7553L24 31M24 31V36"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
