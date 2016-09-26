var app = angular.module("todoApp", []);
app.controller("todoCtrl", function ($scope) {
    $scope.todoList = [];
    $scope.todoVal = "";

    $scope.addToList = function () {
        if ($scope.todoVal != "") {
            $scope.todoList.push({
                todoText: $scope.todoVal,
                marked: false
            });
            $scope.todoVal = "";
        }
    };

    $scope.close = function (element) {
        $scope.index = $scope.todoList.indexOf(element);

        $scope.tag = document.querySelectorAll(".itemHolder");
        $scope.element = $scope.tag[$scope.index];
        if ($scope.element.className.search(/fade-out/i) > 0)
            return;

        $scope.element.className += " fade-out";
        $scope.todoList.splice($scope.index, 1);
    }

    $scope.toggleMark = function (element) {
        $scope.index = $scope.todoList.indexOf(element);
        $scope.tag = document.querySelectorAll("span");
        $scope.element = $scope.tag[$scope.index];
        if ($scope.element.className.search(/strike/i) > 0) {
            $scope.todoList[$scope.index].marked = false;
            $scope.element.className = $scope.element.className.replace(/(?:^|\s)strike(?!\S)/g, '');
            $scope.element.parentElement.className = $scope.element.parentElement.className.replace(/(?:^|\s)done(?!\S)/g, '');
        } else {
            $scope.todoList[$scope.index].marked = true;
            $scope.element.className += " strike";
            $scope.element.parentElement.className += " done";
        }
    }

});