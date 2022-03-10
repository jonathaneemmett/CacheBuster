import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useCacheBuster from "./hooks/useCacheBuster";

function CacheBuster(props) {
    const {handleMeta, isLoading,  children} = props;

    // Checks if versions are valid
    const {isValid, metaVersion, error} = useCacheBuster();

    useEffect(() => {
        if(metaVersion){
            handleMeta(metaVersion);
        }
    }, [metaVersion])

    if(!isValid && error === null){
        return isLoading;
    }

    if(error){
        return <p>{error.message}</p>
    }

    return (
        <>
            {children}
        </>
    );
}

CacheBuster.defaultProps = {
    isLoading: <h1>Loading.....</h1>
}

CacheBuster.propTypes = {
    handleMeta: PropTypes.func,
    isLoading: PropTypes.object,
    children: PropTypes.object
}

export default CacheBuster;