'use strict'

export default function checkURL(url) {
    var regURL = /^https?:\/\/(www\.)?[\.a-zA-Z0-9]+\.[a-z]{2,6}(\.[a-z]{2,6})?\/?(\/[_\/&?#=a-zA-Z0-9.-]+)?$/;
    return regURL.test(url);
}