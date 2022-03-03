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
                d="M26 21C23.9999 20.5 21.2465 19.3622 17.1704 22.0923C14.1394 24.1226 12.8646 27.2399 12.4346 29.53C12.2303 30.6187 13.1547 31.4967 14.2547 31.3663C15.0506 31.272 15.9341 31.125 16.6025 30.8989C18.5728 30.2323 18.3142 28.9686 19.3194 27.4461C20.3245 25.9237 22.8521 25.4065 24.9318 26.561C27.0114 27.7155 27.678 29.6858 27.23 31.3576C26.7821 33.0293 25.7769 34.5517 23.2493 35.0689C20.7218 35.5862 19.9059 34.173 17.269 32.8692C15.8949 32.1898 14.1027 33.0709 13.0201 33.7678C12.4071 34.1623 12.1531 34.9075 12.4103 35.5896C12.585 36.0528 12.8254 36.5947 13.139 37.1379C13.9548 38.551 17.5169 43.0889 22.1241 43.7262C26.7314 44.3634 31.5279 42.0652 34.2449 38.6124C36.9618 35.1597 37.0418 30.4031 35.1515 26.3131"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M35.0455 26.4198L32 14L22.7074 4.70718C22.3168 4.31662 21.6876 4.32317 21.3727 4.77696C20.62 5.86182 19.6212 7.9309 21.0003 9.99999C21.4875 10.731 25.001 15 25.001 15C25.001 15 27.0972 27.5742 27.4729 29.5671"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
