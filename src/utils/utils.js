export default {
    /*判断无效值：undefined、isNaN、null、"null"、""*/
    isNullUndefinedTemp: function (value) {
        return (typeof (value) == "undefined") || ((typeof (value) == "number") && isNaN(value)) || (value == "null") || (!value && value == 0) || (typeof (value) === "string" ? value.trim() == "" : false);
    },
}
