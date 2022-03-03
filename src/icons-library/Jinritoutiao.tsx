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
                d="M36.883 44H11.1127C7.19199 44 4 40.808 4 36.883V11.1127C4 7.19199 7.19199 4 11.1127 4H36.883C40.8037 4 43.9957 7.19199 43.9957 11.1127V36.883C44 40.808 40.808 44 36.883 44ZM11.1127 4.30258C7.35819 4.30258 4.30258 7.35819 4.30258 11.1127V36.883C4.30258 40.6418 7.35819 43.6974 11.117 43.6974H36.8873C40.6461 43.6974 43.7017 40.6418 43.7017 36.883V11.1127C43.7017 7.35393 40.6461 4.29832 36.8873 4.29832H11.1127V4.30258Z"
                fill={props.colors[0]}
            />
            <path
                d="M44 34.7949L4 36.8874V13.2053L44 11.1128V34.7949Z"
                fill={props.colors[0]}
            />
            <path
                d="M19.1709 15.9199L16.7119 16.0478C16.6479 20.9402 16.5798 23.6932 15.6976 25.6664C14.8026 27.6651 12.8934 29.3229 9.08775 32.6214C8.93007 32.7578 8.76812 32.8984 8.59766 33.0433L12.4715 32.8387C18.783 27.273 19.0345 26.0627 19.1709 15.9199Z"
                fill={props.colors[2]}
            />
            <path
                d="M14.9017 19.8874V17.4668L9.42969 16.9724V19.3888L14.9017 19.8874Z"
                fill={props.colors[2]}
            />
            <path
                d="M9.42969 21.0637V23.4843L14.9017 23.983V21.5623L9.42969 21.0637Z"
                fill={props.colors[2]}
            />
            <path
                d="M23.4462 27.3794L8.00195 28.1849V26.0199L23.4462 25.2102V27.3794Z"
                fill={props.colors[2]}
            />
            <path
                d="M39.9817 26.5144L24.5332 27.3241V25.1549L39.9817 24.3452V26.5144Z"
                fill={props.colors[2]}
            />
            <path
                d="M39.1251 17.5862L27.8828 18.1743V16.0051L39.1251 15.417V17.5862Z"
                fill={props.colors[2]}
            />
            <path
                d="M21.0602 28.5898L18.0898 28.7433L20.4764 32.4253L23.4468 32.2719L21.0602 28.5898Z"
                fill={props.colors[2]}
            />
            <path
                d="M37.6126 27.7244L34.6465 27.8778L37.033 31.5599L39.9991 31.4064L37.6126 27.7244Z"
                fill={props.colors[2]}
            />
            <path
                d="M29.8979 28.125L26.9275 28.2827L24.541 32.2119L27.5114 32.0585L29.8979 28.125Z"
                fill={props.colors[2]}
            />
            <path
                d="M33.5011 31.7433L30.9824 31.8754V23.5822L33.5011 23.4543V31.7433Z"
                fill={props.colors[2]}
            />
            <path
                d="M36.8579 15.5363V17.0577C35.426 18.2851 32.5324 20.369 24.5332 22.1291V24.4432C34.2498 22.355 37.5654 19.4144 39.1209 17.9399V15.417L36.8579 15.5363Z"
                fill={props.colors[2]}
            />
            <path
                d="M27.3622 17.3944C27.2557 17.3219 27.1534 17.2495 27.0554 17.1855L24.9629 18.5535C24.9629 18.5535 25.8962 19.2311 25.9985 19.2993C27.7074 20.4756 30.8312 22.6234 39.981 23.6377V21.3236C31.6707 20.3605 28.8964 18.447 27.3622 17.3944Z"
                fill={props.colors[2]}
            />
            <path
                d="M24.9629 18.5535L27.0809 19.8277L29.6251 15.9155L27.2983 14.9524L24.9629 18.5535Z"
                fill={props.colors[2]}
            />
        </svg>
    )
);