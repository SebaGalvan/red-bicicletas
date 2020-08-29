"use strict";

var Bicicleta = function Bicicleta(id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function () {
  return "id: ".concat(this.id, " | color ").concat(this.color, " | modelo ").concat(this.modelo, " | ubicacion : ").concat(this.ubicacion);
};

Bicicleta.allBicis = [];

Bicicleta.add = function (aBici) {
  Bicicleta.allBicis.push(aBici);
};

var a = new Bicicleta(1, "Rojo", "Urbana", [-32.9522582, -60.6685305]);
var b = new Bicicleta(2, "Blanca", "BMX", [-32.946297, -60.6556573]);
var c = new Bicicleta(3, "Azul", "MTB", [-32.9476745, -60.6520952]);
var d = new Bicicleta(4, "Negra", "Cruisers", [-32.9498229, -60.658379]);
Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);
Bicicleta.add(d);
module.exports = Bicicleta;