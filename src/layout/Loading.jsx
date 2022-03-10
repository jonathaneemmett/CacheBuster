import React from 'react';

function Loading() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center", height: "100vh"}}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;