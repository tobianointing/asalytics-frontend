import React from "react";

type Props = {};

function Sun({}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-sun"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <desc>Download more icon variants from https://tabler-icons.io/i/sun</desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
        </svg>
    );
}

const SunIcon = React.memo(Sun);
export default SunIcon;
