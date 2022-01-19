# Feature Flagger Node SDK
## _Simple Node SDK To Interact With the Feature-Flagger-API_

Feature Flagger Node SDK is a small SMALL SDK (if you could call it an SDK) that provides one function to check if a certain feature is enabled.

## Features

- Dynamically set the url to your feature flagging server
- easily check if a feature is enabled or not

## Installation and Usage

```sh
npm i feature-flagger-node-sdk
```

```node
const featureFlagger = require(`feature-flagger-node-sdk`)

featureFlagger.setFeatureFlaggerUrl("http://localhost:8080")

async function useNewFeature() {
    let shouldWeUseOurNewSuperAwesomeFeature = await featureFlagger.isEnabled("new-awesome-feature")

    if (shouldWeUseOurNewSuperAwesomeFeature) {
        console.log("using new feature")
    } else {
        console.log("using boring old feature")
    }
}

useNewFeature()
```