 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 49 50"
            fill="none"
        >
            <path
                d="M16.9963 8.68583C17.7228 8.68583 18.3922 9.07985 18.7449 9.71509L21.1913 14.1219C21.5116 14.6989 21.5267 15.3968 21.2315 15.9871L18.8747 20.7008C18.8747 20.7008 19.5577 24.2122 22.4161 27.0706C25.2746 29.929 28.7742 30.6002 28.7742 30.6002L33.4871 28.2438C34.0778 27.9484 34.7762 27.9637 35.3534 28.2846L39.7727 30.7416C40.4074 31.0945 40.8009 31.7635 40.8009 32.4896L40.8009 37.5631C40.8009 40.1468 38.401 42.0129 35.953 41.1868C30.925 39.4903 23.1203 36.2601 18.1735 31.3132C13.2267 26.3664 9.99643 18.5617 8.29989 13.5338C7.47387 11.0857 9.33996 8.68583 11.9236 8.68583L16.9963 8.68583Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M39.7351 9.28589L31.2498 17.7712"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31.2498 9.28596L39.735 17.7712"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);