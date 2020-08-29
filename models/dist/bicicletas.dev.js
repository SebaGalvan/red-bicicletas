"use strict";

var Bicicleta = function Bicicleta(id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
};

bicicleta.prototype.toString = function () {
  return "id: ".concat(this.id, " | color ").concat(this.color, " | modelo ").concat(this.modelo, " | ubicacion : ").concat(this.ubicacion);
};

Bicicleta.allBicis = [];

Bicicleta.add = function (aBici) {
  Bicicleta.allBicis.push(aBici);
};

var a = new Bicicleta(1, "Rojo", "Urbana", [-32.9522582, -60.6685305]);
var b = new Bicicleta(1, "Blanca", "Urbana", [-32.946297, -60.6556573]);
Bicicleta.add(a);
Bicicleta.add(b);
module.exports = Bicicleta;