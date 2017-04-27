var app = angular.module("bmiApp", []);

app.controller("bmiCtrl", 
function($scope) 
{
	function convert_height(ht)
	{
		return (ht/100).toFixed(2);
	}

	function convert_weight(wt)
	{
		return (wt/1000).toFixed(2);
	}

	function convert_bmi(ht,wt)
	{
		return (wt/(ht*ht)).toFixed(2);
	}

	function convert_remarks(bmi)
	{
		if (bmi<=20) return "You're malnourished.";
		if (bmi>20&&bmi<=22) return "Looking a tad lightweight here.";
		if (bmi>22&&bmi<=24) return "Looking good.";
		if (bmi>24&&bmi<=27) return "Time to shed a few pounds.";
		if (bmi>27) return "Dude, you have a problem. A HEAVY problem.";
	}	

	$scope.calc_bmi=
	function()
	{
		$scope.height_m=convert_height($scope.height_cm);
		$scope.weight_kg=convert_weight($scope.weight_g);

		$scope.bmi=convert_bmi($scope.height_m,$scope.weight_kg);

		$scope.remarks=convert_remarks($scope.bmi);
	};

	$scope.height_cm=100;
	$scope.weight_g=10000;
}
);
