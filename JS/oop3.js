class parent {
    showMyCar(){
        console.log("My car is Benz");
    }
}

class child extends parent{
    car(){
        console.log("I got an Audi");
    }
}

const ch = new child()
ch.showMyCar()