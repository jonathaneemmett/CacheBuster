import React, { useState } from 'react';

// Tools
import CacheBuster from "./CacheBuster/CacheBuster";

// Components
import Loading from "./layout/Loading";

function App() {
    const [metaVersion, setMetaVersion] = useState(null);

    const handleMetaVersion = (meta) => {
        setMetaVersion(meta)
    }

    return (
        <CacheBuster handleMeta={handleMetaVersion} isLoading={<Loading />}>
            <div className="App">
                <header className="App-header">
                    <h1>Cache Busting</h1>
                    <p>
                        Bundle version - <code>v{metaVersion}</code>
                    </p>
                </header>
            </div>
        </CacheBuster>
    );
}

export default App;
