var app = angular.module('calc')

app.controller('MathCtrl', function(mathService, $scope){
	


	$scope.calculate = function(){
		var calcs = {};
		calcs.left = $scope.math.leftSideArg;
		calcs.op = $scope.math.operand;
		calcs.right = $scope.math.rightSideArg;
		if($scope.math.operand === '+'){
			calcs.answer = $scope.math.leftSideArg + $scope.math.rightSideArg;
		}else if($scope.math.operand === '-'){
			calcs.answer = $scope.math.leftSideArg - $scope.math.rightSideArg;
		}else if($scope.math.operand === '*'){
			calcs.answer = $scope.math.leftSideArg * $scope.math.rightSideArg;
		}
		$scope.answer = calcs.answer
		mathService.updateMath(calcs, function(){
			$scope.calculations = mathService.getMath();
		});
	}
})