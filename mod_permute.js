/*jslint node: true */

function permute(str, len) {
    'use strict';
    var key    = len - 1,
        newkey = len - 1,
        temp;

    while ((key > 0) && (str[key] <= str[key - 1])) {
        key = key - 1;
    }
    key = key - 1;

    if (key < 0) {
        return false;
    }

    while ((newkey > key) && (str[newkey] <= str[key])) {
        newkey = newkey - 1;
    }

    temp        = str[key];
    str[key]    = str[newkey];
    str[newkey] = temp;

    len = len - 1;
    key = key + 1;

    while (len > key) {
        temp     = str[len];
        str[len] = str[key];
        str[key] = temp;
        key = key + 1;
        len = len - 1;
    }
    return true;
}

module.exports = permute;