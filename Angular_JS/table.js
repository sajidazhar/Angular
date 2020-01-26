var myApp=angular
          .module("myModule",[])
          .controller("myController",function($scope)){
          	var subjects=[
               {class:"A",course:"apc"},
               {class:"A",course:"wp"},
               ];
               $scope.subjects=subjects;
          });