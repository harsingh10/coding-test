const transformPayload = (payload, referenceData) => {
    // let transformedPayload = JSON.parse(JSON.stringify(payload));
    let transformedPayload = payload;
    const referenceKeys = Object.keys(referenceData);

    // Transofrmation logic   

    // return if key != value
    if (typeof transformedPayload.value !== 'string') {
        transformedPayload.value.forEach((valueObj) => { valueObj = transformPayload(valueObj, referenceData) })
    } else {
        // check if value of 'value' key is present in referenceKeys
        referenceKeys.forEach(refKey => {
            const refKeyRegex = new RegExp('{' + refKey + '}', 'i') // create regex from reference key
            // const refKeyRegex = /refKey/i
            if (transformedPayload.value.includes(refKey)) {
                transformedPayload.value = transformedPayload.value.replace(refKeyRegex, referenceData[refKey]);
            }
        })
    }
    return transformedPayload;
}

module.exports = transformPayload;