
function removeSpecialChars(str) {
    str = str.replace(/["']/g, "");
    str = str.replace('<', '');
    str = str.replace('>', '');
    str = str.replace('/', '');
    str = str.replace(`\\`, '');
    str = str.replace(':', '');
    str = str.replace('(', '');
    str = str.replace(')', '');
    //str = str.replace('|', '');
    str = str.replace('-', '');
    str = str.replace('_', '');
    str = str.replace(';', '');
    str = str.replace("'", '');
   // console.log(str);
    return str;
};

module.exports = removeSpecialChars;