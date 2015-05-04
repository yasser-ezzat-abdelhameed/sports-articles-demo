angular.module("filters", []).filter("leagueName", function () {
    return function (input) {
        switch (input) {
            case 'eg' : return "Egyptian Football League"; break;
            case 'epl' : return "English Premier League"; break;
            default: return input; break;    
        }
    };
});