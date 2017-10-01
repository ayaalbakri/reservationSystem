//defined the module woh will have the controller for all the HTML page
var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl', function($scope){

	$scope.doctors =[{
	name:'aya',specialization:'heart',phonnumber:079877546 ,availableAppointments:[{date:'12.oct' ,time :'10.05'},{date:'14.oct' ,time :'10.05'},{date:'15.oct' ,time :'10.05'}],show:false
},{
	name:'ammar',specialization:'heart',phonnumber:079877546 ,availableAppointments:[{date:'12.oct' ,time :'10.05'},{date:'14.oct' ,time :'10.05'},{date:'15.oct' ,time :'10.05'}],show:true}];
	$scope.reserveApp =function (){
		console.log('hi')
	};
	$scope.resrvation = function (){
		for (var i = 0; i < $scope.doctors.length; i++) {
			if(!$scope.doctors[i].name){
				!$scope.doctors[i].show;
			}
		}
	}
 });






