let vehicles = ["Car", "Bus", "Bike"];

pushVehicle=(vehiclename)=> {
    vehicles.push(vehiclename);
    console.log(vehicles)
}
function popVehicle(){
    vehicles.pop();
    console.log(vehicles)
}
for (let index=0; index < 4; index++) {
    pushVehicle("Lorry" + index);
}
// for (let index = 0; index < 4; index++) {
    // popVehicle();
// }
function shift() {
    vehicles.shift()
    console.log(vehicles)
}
for (let index = 0; index < 4; index++) {
    shift()
}
function unshift() {
    console.log(vehicles)
    vehicles.unshift("Car")
    console.log(vehicles)
}
unshift ();
function join() {
    console.log(vehicles.join())
} 
join();
delete vehicles[0]
function concat() {
    
}
console.log(vehicles)
console.log(vehicles[0])