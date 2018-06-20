
let app = angular.module('amsterdam', []);

app.controller("establishmentCtrl", function ($scope, $http) {
    $http.get("http://localhost:8080/establishment-data.json").then(function (response) {
        $scope.establishments = response.data;

    });
    $scope.query = '';
});