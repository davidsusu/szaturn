
browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({
        "url": "/index.html"
    }).then(tab => {
        // XXX
    });
});
