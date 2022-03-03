 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 52 51"
            fill="none"
        >
            <path
                d="M44.7796 21.6066C45.0324 19.9108 44.9495 18.1747 44.5309 16.5054C43.978 14.3002 42.8392 12.2118 41.1147 10.4873C39.3902 8.76281 37.3018 7.62409 35.0967 7.07115C33.4274 6.65257 31.6912 6.56967 29.9954 6.82245"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M37.1897 20.8035C37.4605 18.9869 36.8967 17.0699 35.4983 15.6715C34.0998 14.2731 32.1829 13.7092 30.3663 13.98"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M17.3757 9.79423C18.1022 9.79423 18.7716 10.1883 19.1243 10.8235L21.5707 15.2303C21.891 15.8073 21.9061 16.5052 21.6109 17.0955L19.2541 21.8091C19.2541 21.8091 19.9371 25.3206 22.7955 28.179C25.654 31.0374 29.1536 31.7086 29.1536 31.7086L33.8665 29.3522C34.4572 29.0568 35.1556 29.0721 35.7328 29.393L40.1521 31.85C40.7868 32.2028 41.1803 32.8719 41.1803 33.598L41.1803 38.6715C41.1803 41.2552 38.7804 43.1213 36.3323 42.2952C31.3044 40.5987 23.4997 37.3685 18.5529 32.4216C13.606 27.4748 10.3758 19.6701 8.67929 14.6422C7.85326 12.1941 9.71935 9.79423 12.303 9.79423L17.3757 9.79423Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
