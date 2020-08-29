let Bicicleta = function(id, color,modelo, ubicacion){
    this.id =id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;

}

Bicicleta.prototype.toString = function(){
    return `id: ${this.id} | color ${this.color} | modelo ${this.modelo} | ubicacion : ${this.ubicacion}`;
}

Bicicleta.allBicis =[];
Bicicleta.add= function (aBici){
    Bicicleta.allBicis.push(aBici);
}

let a = new Bicicleta(1,"Rojo","Urbana",[-32.9522582,-60.6685305]);
let b = new Bicicleta(2,"Blanca","BMX",[-32.946297,-60.6556573]);
let c = new Bicicleta(3,"Azul","MTB",[-32.9476745,-60.6520952]);
let d = new Bicicleta(4,"Negra","Cruisers",[-32.9498229,-60.658379]);

Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);
Bicicleta.add(d);


module.exports = Bicicleta;