var app = angular.module("myApp",["ngRoute","ngAnimate","angularUtils.directives.dirPagination"]);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "dashboard.html"
    })
    .when("/loai", {
       templateUrl : "loai.html",
       // controller: "loaiController"
    })
    .when("/sp", {
       templateUrl : "sp.html",
       // controller: "spController"
    })
    .when("/themsp", {
        templateUrl : "themsp.html"
    })
    .when("/themloai", {
        templateUrl : "themloai.html"
    })
    .when("/editproduct", {
        templateUrl : "editproduct.html"
    })
    .when("/edittype.html/", {
        templateUrl : "edittype.html"
    })
    .otherwise({ redirectTo: '/' });
}]);

app.controller("dataController",function($scope,$rootScope,$routeParams,$http){
    $rootScope.pageSize = 10;
    $rootScope.currentPage = 1;
    // $rootScope.totalItems = 20;

    $http.get('/typeedit').
        then(function(result, status, headers, config) {
          $rootScope.edits = result.data.data;
        });
    $http.get('/productedit').
        then(function(result, status, headers, config) {
          $rootScope.productedit = result.data.data;
        });
    // $rootScope.hienthi = true;
    $rootScope.chuyen = function(doituong){
      doituong.hienthi = !doituong.hienthi;
    };

    // $http.get('/counttype').
    //     then(function(result, status, headers, config) {
    //       $rootScope.counttype = result.data;
    //     });
    // $http.get('/countproduct').
    //     then(function(result, status, headers, config) {
    //       $rootScope.countproduct = result.data;
    //     });
    $http.get('/all_product').
        then(function(result, status, headers, config) {
          $rootScope.products = result.data.data;
        });
    $http.get('/type').
      then(function(result, status, headers, config) {
        $rootScope.types = result.data.data;
      });
    $http.get('/user').
        then(function(result, status, headers, config) {
          $rootScope.users = result.data.data;
          console.log(result);
        });
});

// app.filter('startFrom', function() {
//     return function(input, start) {
//         if (!input || !input.length) { return; }
//         start = +start; //parse to int
//         return input.slice(start);
//     }
// });


// app.controller("loaiController",function($scope,$rootScope,$routeParams,$http){
//     $http.get('/type').
//       then(function(result, status, headers, config) {
//         $rootScope.types = result.data.data;
//       });
// });
// app.controller("spController",function($scope,$rootScope,$routeParams,$http){
//     $http.get('/all_product').
//         then(function(result, status, headers, config) {
//           $rootScope.products = result.data.data;
//         });           
// });
