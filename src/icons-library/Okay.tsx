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
                d="M15.1138 24.9465C12.7115 27.692 12.2869 31.033 12.4644 33.3564C12.5487 34.4609 13.6689 35.0697 14.6977 34.6591C15.4421 34.362 16.2574 33.9913 16.8445 33.5999C18.5752 32.4461 17.9983 31.2923 18.5752 29.5617C19.1521 27.831 21.6924 26.4231 24 27C26.3076 27.5769 27.2286 29.5617 27.2286 31.2923C27.2286 33.023 26.5 35 24.3442 35.9075C21.9663 36.9085 20.8828 35.9075 17.9983 35.3306C16.4951 35.03 14.992 36.3449 14.1267 37.2983C13.6367 37.838 13.5842 38.6236 14.0092 39.2158C14.2979 39.6181 14.6703 40.0793 15.1138 40.5227C16.2676 41.6765 20.8828 45.1379 25.498 44.561C30.1131 43.9841 34.1514 40.5227 35.8821 36.4844C37.6128 32.4461 36.459 27.831 33.5745 24.3696C30.69 20.9082 25.498 20.3313 24.3442 20.3313C23.1904 20.3313 19.1521 20.3313 15.1138 24.9465Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31.5623 22.6389L12.6433 8.17133C12.2451 7.86687 11.6761 7.90031 11.3792 8.30412C10.6663 9.27382 9.9929 10.8113 11.0755 12.2547C12.46 14.1008 17.8059 18.7929 20.3057 20.9082"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M35 26L23.1409 4.19836C22.9015 3.7583 22.3686 3.55685 21.9329 3.80414C20.8862 4.39833 19.6435 5.52714 20.0427 7.28699C20.5532 9.53741 22.5812 13.5486 24 16.5"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M36 28L35.0503 7.69221C35.0269 7.19215 34.6358 6.77854 34.1362 6.81046C32.935 6.88721 31.3232 7.35913 30.913 9.11686C30.3885 11.3641 30.0139 14.7253 30 18"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
