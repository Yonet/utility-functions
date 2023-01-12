function createSlugFromText(text) {
    return text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

// parse a date in yyyy-mm-dd format to ISO 8601 format. Read more here: https://262.ecma-international.org/5.1/#sec-15.9.1.15
function parseDate(input) {

    const parts = input.split('-');
    // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // Note: months are 0-based
}
