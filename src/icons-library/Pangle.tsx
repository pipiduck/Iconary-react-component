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
                d="M38.4507 23.017L33.1941 20.0096C33.0804 19.9464 32.9414 20.0222 32.9414 20.1612V27.6418C32.9414 27.7808 33.0172 27.8945 33.1309 27.9703L38.3875 30.9777C38.5013 31.0409 38.6403 30.9651 38.6403 30.8261V23.3455C38.6403 23.2065 38.5644 23.0928 38.4507 23.017Z"
                fill={props.colors[0]}
            />
            <path
                d="M31.1109 18.8749L25.8543 15.8675C25.7406 15.8043 25.6016 15.8801 25.6016 16.0191V27.6569C25.6016 27.758 25.6774 27.8338 25.7785 27.8338H31.1362C31.2372 27.8338 31.3131 27.758 31.3131 27.6569V19.2034C31.3004 19.0644 31.2246 18.9381 31.1109 18.8749Z"
                fill={props.colors[0]}
            />
            <path
                d="M18.6785 30.9424L23.9351 27.935C24.0488 27.8718 24.1246 27.7454 24.1246 27.6064V15.1725C24.1246 15.0462 23.9857 14.9577 23.8719 15.0209L18.6153 18.0283C18.5016 18.0915 18.4258 18.2178 18.4258 18.3568V30.7907C18.4258 30.9297 18.5648 31.0055 18.6785 30.9424Z"
                fill={props.colors[0]}
            />
            <path
                d="M40.1055 24.2676V27.6794C40.1055 27.7805 40.1813 27.8563 40.2824 27.8563H46.2466C46.4235 27.8563 46.4867 27.6162 46.335 27.5404L40.3708 24.1286C40.2445 24.0528 40.1055 24.1413 40.1055 24.2676Z"
                fill={props.colors[0]}
            />
            <path
                d="M16.6927 19.1275L2.08539 27.5052C1.93376 27.5937 1.99694 27.8211 2.17384 27.8211H16.7811C16.8822 27.8211 16.9581 27.7453 16.9581 27.6442V19.2791C16.9454 19.1401 16.8064 19.0643 16.6927 19.1275Z"
                fill={props.colors[0]}
            />
        </svg>
    )
);
