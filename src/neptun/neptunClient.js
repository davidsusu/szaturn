const exportFields = [];

const findLoginToken = (loginContent) => {
    const parser = new DOMParser();
    const remoteDocument = parser.parseFromString(loginContent, 'text/html');
    const tokenInput = remoteDocument.querySelector("[name='__RequestVerificationToken']");
    return tokenInput.value;
};

const findRedirectToken = (redirectContent) => {
    const parser = new DOMParser();
    const remoteDocument = parser.parseFromString(redirectContent, 'text/html');
    const tokenInput = remoteDocument.querySelector("#FormToNeptun [name='__RequestVerificationToken']");
    return tokenInput.value;
};

const doLogin = exportFields["doLogin"] = async () => {
    const username = document.getElementById("neptun-username").value;
    const password = document.getElementById("neptun-password").value;

    const loginContent = await fetch("https://neptun.elte.hu/Account/Login", {
        method: "GET",
    }).then(response => {
        return response.text();
    });

    const loginToken = findLoginToken(loginContent);

    alert(`Try login with username: ${username}; password: ${password}; token: ${loginToken}...`);

    await fetch("https://neptun.elte.hu/Account/Login", {
        method: "POST",
        referrer: "https://neptun.elte.hu/Account/Login",
        body: `LoginName=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}&ReturnUrl=&__RequestVerificationToken=${loginToken}`,
        mode: "cors",
        credentials: "include",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded",
        }
    });

    alert("Load move page...");

    const redirectContent = await fetch("https://neptun.elte.hu/ToNeptunWeb/ToNeptunHWeb", {
        method: "GET",
        referrer: "https://neptun.elte.hu/",
        mode: "cors",
        credentials: "include",
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }).then(response => {
        return response.text();
    });

    const redirectToken = findRedirectToken(redirectContent);

    alert(`Redirect with token: ${redirectToken}`);

    return await fetch("https://neptun.elte.hu/ToNeptunWeb/ToNeptunHWeb", {
        method: "POST",
        referrer: "https://neptun.elte.hu/Account/Login",
        body: `NeptunWebType=HWeb&__RequestVerificationToken=${redirectToken}`,
        mode: "cors",
        redirect: "follow",
        credentials: "include",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded",
        },
    }).then(request => {
        return new URL(request.url).host;
    });
};

const loadSomeContent = exportFields["loadSomeContent"] = async () => {

    const server = await doLogin();

    alert(`Load list page, server: ${server}`);

    const url = `https://${server}/main.aspx?trl=inbox`;
    const finalContent = await fetch(url, {
        method: "GET",
        referrer: "https://neptun.elte.hu/",
        mode: "cors",
        credentials: "include",
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }).then(response => {
        return response.text();
    });

    document.getElementById("output").innerHTML = new DOMParser()
        .parseFromString(finalContent, 'text/html')
        .body
        .innerHTML
    ;

    alert(document.querySelector('#c_messages_gridMessages_bodytable'));

};

export default exportFields;
