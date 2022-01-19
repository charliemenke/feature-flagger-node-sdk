let server_url = ""

exports.setFeatureFlaggerUrl = function(url) {
    server_url = url
}

exports.isEnabled = async function(featureName) {
    const axios = require("axios");
    if (featureName === "") {
        console.warn("Please provide a feature name ")
    } else {
        try {
            const resp = await axios.get(server_url+"/api/features/"+featureName)
            if (resp.status === 200) {
                let feature = resp.data
                return feature.enabled
            } else {
                console.error(resp.body)
            }
        } catch (error) {
            console.error(error.response.data)
        }
    }
}