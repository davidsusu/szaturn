 #!/bin/bash

preferredNodeVersion='14.21.3'

if command -v nvs > /dev/null; then
    echo "nvs found"
else
    echo "nvs not found, install"
    export NVS_HOME="$HOME/.nvs"
    git clone https://github.com/jasongin/nvs "$NVS_HOME"
    . "$NVS_HOME/nvs.sh" install
fi

nvs add "$preferredNodeVersion"
nvs use "$preferredNodeVersion"

npm i

