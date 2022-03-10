import React, {useEffect, useState} from 'react';
import packageJson from "../../../package.json";

// Gets the Meta version from the meta.json file.
const getMetaVersion = async () => {
    let meta = await fetch(process.env.REACT_APP_REACT_ROOT_URL + '/meta.json');
    let data = await meta.json();
    if(data){
        return data.version;
    }
    return undefined;
}

// Checks that versions match or do not match.
const semverGreaterThan = (versionA, versionB) => {
    const versionsA = versionA.split(/\./g);

    const versionsB = versionB.split(/\./g);
    while (versionsA.length || versionsB.length) {
        const a = Number(versionsA.shift());
        const b = Number(versionsB.shift());

        // eslint-disable-next-line no-continue
        if (a === b) continue;
        // eslint-disable-next-line no-restricted-globals
        return a > b || isNaN(b);
    }
    return false;
};

// Forces emptied cache and reload if values do not match.
const refreshCacheAndReload = () => {
    console.log('Clearing cache and had reloading...');
    if(caches){
        caches.keys()
            .then((names) => {
                for (let name of names) caches.delete(name);
            });
    }

    window.location.reload();
}

function useCacheBuster() {
    const isProduction = process.env.NODE_ENV === 'production';
    const [metaVersion, setMetaVersion] = useState(null);
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // If the MetaVersion is set
        if(!metaVersion){
            // Does an async func to get meta from meta.json, then set the metaVersion, then checks against package.json version value.. sets isValid true or leaves false...
            (async () => {
                try{
                    let meta = await getMetaVersion();
                    setMetaVersion(meta);
                    if(semverGreaterThan(meta, packageJson.version)){
                        refreshCacheAndReload();
                    }

                    setIsValid(true);
                } catch (e) {
                    setError({message: "Either meta or the package.json version is not set.  These values are required for this useHook to run."})
                }
            })();
        }
    }, [metaVersion, isValid]);


    // Returns isValid, error, metaVersion values to the CacheBuster Component
    return { isValid, error, metaVersion };
}

export default useCacheBuster;