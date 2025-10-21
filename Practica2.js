// CLASE PADRE
class Vehiculo {
    constructor(marca, modelo, año, color) {
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
        this.color=color;
    }
    
    informacion() {
        console.log(`La ${this.marca} ${this.modelo} - ${this.año} viene en de color:${this.color}`);
    }
    
    arrancar() {
        console.log("El vehículo está arrancando...");
    }
    atraco(){
        console.log("La moto atraco la banca pum!! pum!! pum!! (Se mato)")
    }
}

// CLASES HIJAS
class Motor extends Vehiculo {
    calibrar() {
        console.log("¡La moto está calibrando!");
    }
}

class Camion extends Vehiculo {
    cargarMercancia() {
        console.log("El camión está Robando la mercancía...");
    }
}

// ejecucion de las clases
const moto1 = new Motor("Honda", "CBR", 2023, "Negro");
const camion1 = new Camion("Volvo", "FH16", 2022, "Azul");

moto1.informacion();
moto1.calibrar();
moto1.atraco();
camion1.informacion()
camion1.cargarMercancia();