const server_url = ""

module.exports = function setFeatureFlaggerUrl(url) {
    server_url = url
}

module.exports = async function isEnabled(featureName) {
    const axios = require("axios");
    if (featureName === "") {
        console.warn("Please provide a feature name ")
    } else {
        try {
            const resp = await axios.get("/api/features/"+featureName)
            if (resp.status === 200) {
                let feature = resp.data
                return feature.enabled
            } else {
                console.error(resp.body)
            }
        } catch (error) {
            console.error(error)

        }
    }
}