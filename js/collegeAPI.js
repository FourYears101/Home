var rightNow = new Date();
var res = rightNow.toISOString().slice(0, 10);

angular.module('demo', [])
    .controller('Hello', function ($scope, $http) {
        $http.get('https://api.data.gov/ed/collegescorecard/v1/schools/?api_key=moYeplvtRRahs3Re9Egipa4tDHdoA3I7AICUIx1H').
            then(function (response) {
                $scope.apod = response.data;
            });
    });