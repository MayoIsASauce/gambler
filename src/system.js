const fs = require('fs');


function fetchRoot(dir_path) {
    var full_name = dir_path;
    if (!dir_path.endsWith('/')) {
        full_name += '/index.html';
    } else {
        full_name += "index.html";
    }

    if (fs.existsSync(full_name)) {
        return full_name;
    } else {
        return "./pages/ERROR/index.html";
    }
}

module.exports = fetchRoot;