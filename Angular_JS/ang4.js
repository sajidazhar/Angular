var myApp=angular
          .module("myModule",[])
          .controller("myController",function($scope){
          	var employees=[
          	{firstname:"sajid",lastname:"azhar",gender:"male",salary:"6000"},
          	{firstname:"aamir",lastname:"khan",gender:"male",salary:"4000"},
          	{firstname:"mr",lastname:"ben",gender:"male",salary:"1004"},
          	{firstname:"tom",lastname:"cruise",gender:"male",salary:"3000"},
          	];
          	$scope.employees=employees;
          });