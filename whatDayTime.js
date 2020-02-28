exports.dateTimeModule = function () { /* allow code within dateTimeModule to be used by other files within the app */
    console.log('getting the date for ya!'); /* message appear in terminal to inform that the date function is attempting to get the date, does not appear in DevTool console for the browser (e.g., accessed using Ctrl+Shift+i when in broswer, this is because the server file run by node is on the backend*/
    return Date() /* used built in Date function to access current date and time */
}