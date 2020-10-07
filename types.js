function type(obj) {

    // get toPrototypeString() of obj (handles all types)
    // Early JS environments can return '[object Object]' for null, so it's best to directly check for it.    

    if (obj == null) { return (obj + '').toLowerCase(); } // implicit toString() conversion

    var deepType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

    // prevent overspecificity (for example, [object HTMLDivElement], etc).
    // account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52)
    // String.prototype.match has universal browser support.

    return deepType.match(/array|date|error|function|regexp//*|number|string|symbol|bigint|boolean/*/) ? deepType :
        (typeof obj === 'object' || typeof obj === 'function') ? 'object' : deepType;
}

if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}