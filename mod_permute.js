module.exports = function permute(str, len) {
    var key = len - 1,
        newKey = len - 1,
        temp;

    while ((key > 0) && (str[key] <= str[key - 1])) {
        key = key - 1;
    }
    key = key - 1;

    if (key < 0) {
        return false;
    }

    while ((newKey > key) && (str[newKey] <= str[key])) {
        newKey = newKey - 1;
    }

    temp = str[key];
    str[key] = str[newKey];
    str[newKey] = temp;

    len = len - 1;
    key = key + 1;

    while (len > key) {
        temp = str[len];
        str[len] = str[key];
        str[key] = temp;
        key = key + 1;
        len = len - 1;
    }
    return true;
};
