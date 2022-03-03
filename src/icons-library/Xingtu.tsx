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
                d="M15.5562 38.9999L8.17798 11.0172C8.14612 10.9012 8.16117 10.7773 8.21989 10.6723C8.27861 10.5673 8.37628 10.4896 8.4918 10.456C8.55409 10.4333 8.62119 10.427 8.68661 10.4379C8.75203 10.4487 8.81354 10.4763 8.86517 10.5179L42.4737 38.189C42.5587 38.267 42.6122 38.3735 42.624 38.4883C42.6358 38.6031 42.6052 38.7183 42.5378 38.812C42.5086 38.8694 42.464 38.9174 42.4089 38.9506C42.3539 38.9838 42.2906 39.0009 42.2263 38.9999H15.5562Z"
                fill={props.colors[0]}
            />
            <path
                d="M44.9793 9.58096C45.0112 9.46526 44.9965 9.34163 44.9382 9.23668C44.8799 9.13173 44.7828 9.05384 44.6677 9.01975C44.6047 8.99968 44.5378 8.99482 44.4725 9.00557C44.4072 9.01632 44.3453 9.04237 44.2921 9.0816L26.1753 21.5725L39.1702 32.2516L44.9793 9.58096Z"
                fill={props.colors[0]}
            />
            <path
                d="M2.18783 38.189C2.09543 38.2603 2.03199 38.3628 2.00925 38.4773C1.98652 38.5918 2.00601 38.7107 2.06413 38.812C2.10605 38.8717 2.16208 38.9201 2.22722 38.9528C2.29237 38.9856 2.36461 39.0018 2.43751 38.9998H13.0593L11.2474 31.9423L2.18783 38.189Z"
                fill={props.colors[0]}
            />
        </svg>
    )
);
