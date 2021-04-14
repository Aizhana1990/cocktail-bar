import React from 'react';

const Spinner = () => {
    return (
        <div>
            <svg style={{margin: 'auto', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100"
                 preserveAspectRatio="xMidYMid">
                <circle cx="32" cy="50" fill="#0a0a0a" r="18">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.923076923076923s" keyTimes="0;0.5;1"
                             values="32;68;32" begin="-0.9615384615384615s">

                    </animate>
                </circle>
                <circle cx="68" cy="50" fill="#28292f" r="18">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.923076923076923s" keyTimes="0;0.5;1"
                             values="32;68;32" begin="0s">

                    </animate>
                </circle>
                <circle cx="32" cy="50" fill="#0a0a0a" r="18">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.923076923076923s" keyTimes="0;0.5;1"
                             values="32;68;32" begin="-0.9615384615384615s">

                    </animate>
                    <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1"
                             dur="1.923076923076923s" repeatCount="indefinite">

                    </animate>
                </circle>
            </svg>
        </div>
    );
};

export default Spinner;

