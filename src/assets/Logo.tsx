import React from "react";

const Logo = (props: object) => {
    return (
        <svg width="35" height="39" viewBox="0 0 35 43" fill="none" {...props}>
            <path d="M0 2H35" stroke="white" strokeWidth="4" />
            <path d="M0 40.5518H35" stroke="white" strokeWidth="4" />
            <path
                d="M21.4375 2L7 20.8276L21.4375 41"
                stroke="white"
                strokeWidth="4"
            />
        </svg>
    );
};

export default Logo;
