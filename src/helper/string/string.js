sogh.convertToString = function (input) {
    if(input) {
        if(typeof input === "string") {
            return input;
        }

        return String(input);
    }

    return '';
};