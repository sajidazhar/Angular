/// <reference path="angular.min.js"/>

var myApp=angular.module("myModule",[]);
myApp.controller("myController",function($scope){
	var emp={
		fisrtName: " sajid ",
		lastName: " azhar ",
		gender: " male ",
	};
	$scope.emp=emp;
});