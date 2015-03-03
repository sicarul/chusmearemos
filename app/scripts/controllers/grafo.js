'use strict';

/**
 * @ngdoc function
 * @name chusmearemosApp.controller:GrafoCtrl
 * @description
 * # GrafoCtrl
 * Controller of the chusmearemosApp
 */
angular.module('chusmearemosApp')
  .controller('GrafoCtrl', function ($scope, escuchas, toGraph) {

    $scope.grafo = {};

    var selectVal = function(index){
      
    }

    escuchas.get({}, function(res){


      $scope.grafo = toGraph.transform(res);


      var width = 1280,
      height = 700;

      var color = d3.scale.category20();

      var force = d3.layout.force()
      .charge(-120)
      .linkDistance(30)
      .size([width, height])
      .gravity(0.3);

      var svg = d3.select("div#grafo").append("svg")
      .attr("width", width)
      .attr("height", height);

      var n = $scope.grafo.nodos.length;

        force
        .nodes($scope.grafo.nodos)
        .links($scope.grafo.vinculos)
        .start();




        var link = svg.selectAll(".link")
        .data($scope.grafo.vinculos)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.selectAll(".node")
        .data($scope.grafo.nodos)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)
        .style("fill", function(d) { return color(1); })
        .call(force.drag)
        .on("click", function(d){

          d3.selectAll('circle.node')
          .attr("r", 5)
          .style("fill", function(d) { return color(1); });

          d3.select(this).attr('r', 7)
          .style("fill","red");

          selectVal(d.index);
        });;

        node.append("title")
        .text(function(d) { return d.name; });

        force.on("tick", function() {
          link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

          node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
        });

    });

  });
