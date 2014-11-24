var app = angular.module('calc')

app.factory('mathService', function(){
	var mathArr = [];

	return {
		getMath: function(){
			return mathArr;
		},

		updateMath: function(math, cb){
			mathArr.push(math)
			cb()
		}
	}
})