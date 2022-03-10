# Jon's CacheBuster 

## Available Scripts

    yarn start or npm start


### Setup

Copy the CacheBuster folder to your application src/component folder.

### .env
Make sure to set up the .env file.  Either add to your own, or use the one provided renaming and removing the .example.  

This value is required:

    REACT_APP_REACT_ROOT_URL=YOUR_URL_HERE

I will add checks for prod and dev later. 

### Generate meta.json file

This is to set the version in package.json or you can do it manually.. entirely on you.

    npm version patch — for releases with only bug fixes
    npm version minor — for releases with new features w/ or w/o bug fixes
    npm version major — for major releases or breaking features

I'd create the ./public/meta.json first, then..

    cd into src/CacheBuster and run node generateBuildVersion

I will add logic to crate the meta.json file in later releases.

### Description

The cache busters on the internet were outdated and clunky.  This one uses functional components and 
hooks to get the job done with some added functionality.
