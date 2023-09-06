import React from 'react';

import neptunClient from './neptun/neptunClient';

function FetchTestButton() {
    return (
        <button onClick={async e => neptunClient.loadSomeContent()}>
            Do it
        </button>
    );
}

export default FetchTestButton;
