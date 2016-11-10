/**
 * Created by Random on 11/9/2016.
 */
var app = angular.module("myApp", [])


app.controller("RegisterController", function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.pageClass = 'register';
    $scope.register = function(username, password, email) {
        console.log("inside login function");
        $http({
            method: 'POST',
            url : 'https://api.mongolab.com/api/1/databases/sample/collections/rak?apiKey=hv9Vbo5nEe_ArJD8NgrwdyFg476l4E-o',
            data: JSON.stringify({
                name: username,
                password: password,
                email: email
            }),
            contentType: "application/json"
        }).success(function() {
            $scope.userName ="";
            $scope.password ="";
            $scope.email ="";

            $scope.msg ="User created successfully";
        })
    }

});
