exports.myDateTimeVerbose = function () {
    return Date();
};


exports.myDateTime = function () {
    var time = new Date().toISOString().replace(/T/, ' ').replace(/:/g, '-').replace(/\..+/, '')
    //console.log(time);
    return time;
};
