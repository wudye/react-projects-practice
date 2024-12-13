


const dummyApiResponse = {



    showLightAndDarkMode: false,
    showTickTakToe: true,
    showRandomColorGenerator: true,
    showAccordion: false,
    showTreeViewer: true,
}

function featureDataSeviceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Error fetching data");
    })

}
export default featureDataSeviceCall;