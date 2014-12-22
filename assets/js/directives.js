'use strict';

AsaanApp.directive('ajText', function () {
  	return{
    	restrict: 'A',
	    templateUrl: 'ajText',
	    replace: true
    }
  });

AsaanApp.directive('ajPicklist', function () {
  	return{
    	restrict: 'A',
	    templateUrl: 'ajPicklist',
	    replace: true
    }
  });

AsaanApp.directive('ajRadio', function () {
    return{
      restrict: 'A',
      templateUrl: 'ajRadio',
      replace: true
    }
  });
