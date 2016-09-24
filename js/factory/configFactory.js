app.factory('config', function() {
    var configData = {};

    configData.wpUrl =  "http://backend.trentsalazar.com/wp-json/wp/v2";
    configData.loading = false;

    return {
    setData: function (key, val) {
        configData[key] = val;
    },
    getData: function (key) {
        return configData[key];
    }
    }
});