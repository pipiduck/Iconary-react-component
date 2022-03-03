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
                d="M18.9047 18.1681L10.3249 16.3444C9.76728 16.2259 9.41131 15.6777 9.52984 15.1201L11.4614 6.03277C11.5799 5.47513 12.1281 5.11916 12.6857 5.23769L41.967 11.4616C42.5247 11.5802 42.8807 12.1283 42.7621 12.6859L40.8306 21.7733C40.712 22.3309 40.1639 22.6869 39.6062 22.5683L31.0999 20.7602C30.7126 20.6779 30.4829 20.8061 30.4109 21.1449C29.5288 25.2951 28.2055 31.5205 26.4412 39.8211C26.3227 40.3787 25.7745 40.7347 25.2169 40.6162L16.1296 38.6846C15.5719 38.5661 15.2159 38.0179 15.3345 37.4603C17.0993 29.1575 18.4229 22.9303 19.3053 18.7789C19.3766 18.4436 19.2431 18.24 18.9047 18.1681Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
