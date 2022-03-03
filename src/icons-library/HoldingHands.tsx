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
                d="M4.46088 12.8405L22.2354 9.06243C22.7542 8.95215 23.2956 9.05249 23.7405 9.34139L31.8394 14.6009C32.2842 14.8898 32.8256 14.9901 33.3445 14.8798L37.4249 14.0125C38.5053 13.7829 39.5674 14.4726 39.797 15.553L40.4207 18.4874C40.6504 19.5679 39.9607 20.6299 38.8803 20.8596L31.8654 22.3506C31.3466 22.4609 30.8052 22.3605 30.3603 22.0717L22.2614 16.8122C21.8165 16.5233 21.2751 16.4229 20.7563 16.5332L17.654 17.1926"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M43.5393 33.1596L25.7648 36.9377C25.246 37.048 24.7046 36.9476 24.2597 36.6587L16.1608 31.3992C15.7159 31.1103 15.1745 31.01 14.6557 31.1203L10.5753 31.9876C9.49486 32.2173 8.43282 31.5276 8.20317 30.4471L7.57943 27.5127C7.34978 26.4323 8.03947 25.3702 9.11991 25.1406L16.1348 23.6495C16.6536 23.5392 17.195 23.6396 17.6399 23.9285L25.7388 29.188C26.1836 29.4769 26.725 29.5772 27.2439 29.4669L30.3462 28.8075"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
