'use strict';

/**
 * @ngdoc function
 * @name chusmearemosApp.controller:GrafoCtrl
 * @description
 * # GrafoCtrl
 * Controller of the chusmearemosApp
 */
angular.module('chusmearemosApp')
  .controller('GrafoCtrl', function ($scope, escuchas, toGraph, $timeout) {

    $scope.grafo = {};
    $scope.selected = {node:{}, out:[], in:[]};

    $scope.status = {open:{}};

    escuchas.all(function(res){


      $scope.grafo = toGraph.transform(res);



      var margin = {top: -5, right: -5, bottom: -5, left: -5},
      width = 960,
      height = 500;
      var lastSelected = null;


      var n = $scope.grafo.nodos.length;
      var color = d3.scale.category20();


      var force = d3.layout.force()
      .nodes($scope.grafo.nodos)
      .links($scope.grafo.vinculos)
      .size([width, height]);

      var svg = d3.select("div#grafo").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("svg:g")
        .call(d3.behavior.zoom().on("zoom", rescale))
        .on("dblclick.zoom", null)
      .append('svg:g')
        .on("mousedown", mousedown);

      function mousedown() {
          svg.call(d3.behavior.zoom().on("zoom"), rescale);
      }

      function rescale() {
        var trans=d3.event.translate;
        var scale=d3.event.scale;

        svg.attr("transform",
        "translate(" + trans + ")"
        + " scale(" + scale + ")");
      }

      var loading = svg.append("text")
      .attr("x", width / 2)
      .attr("y", height / 2)
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text("Cargando, espere por favor...");

      setTimeout(function(){

        // Run the layout a fixed number of times.
        // The ideal number of times scales with graph complexity.
        // Of course, don't run too long—you'll hang the page!
        force.start();
        for (var i = n; i > 0; --i) force.tick();
        //for (var i = 50; i > 0; --i) force.tick();
        force.stop();

        var link = svg.selectAll("line")
        .data($scope.grafo.vinculos)
        .enter().append("line")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

        var circle = svg.selectAll("circle")
        .data($scope.grafo.nodos)
        .enter().append("circle")
        .attr("class", "node")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", 4.5)
        .style("fill", function(d) { return color(d.provincia); })

        .on("click", function click(d) {
          d3.event.stopPropagation();

          d3.select(this).transition()
          .duration(750)
          .attr("r", 16);

          if(lastSelected && $scope.selected.index !== d.index){
            d3.select(lastSelected).transition()
            .duration(200)
            .attr("r", 4.5);
          }
          lastSelected = this;

          var call_out;
          var call_in;
          if(d.name in $scope.grafo.indexadosOrigen){
            call_out = $scope.grafo.indexadosOrigen[d.name];
          }else{
            call_out = [];
          }
          if(d.name in $scope.grafo.indexadosDestino){
            call_in = $scope.grafo.indexadosDestino[d.name];
          }else{
            call_in = [];
          }


          $scope.$apply(function(){
            $scope.loading = true;
          });

          $timeout(function(){
            $scope.$apply(function(){
              $scope.selected.node = d;
              $scope.selected.out = call_out;
              $scope.selected.in = call_in;
              $scope.loading = false;
            });
          }, 500);
        });

        loading.remove();
      }, 10);

    });

  });
