var curCounter = 0;

function tickUp() {
    var counter = document.getElementById("counter");
    curCounter += 1;
    counter.innerHTML = curCounter;
}

function tickDown() {
    var counter = document.getElementById("counter");
    curCounter -= 1;
    counter.innerHTML = curCounter;
}

function runForLoop() {
    var result = document.getElementById("forLoopResult");

    for (var i = 0; i < curCounter + 1; i++) {
        result.innerHTML += i + " ";
    }
}

function showOddNumbers() {
    var result = document.getElementById("oddNumberResult");

    for (var i = 0; i < curCounter + 1; i++) {
        if (i % 2 !== 0) {
            result.innerHTML += i + " ";
        }
    }
}

function addMultiplesToArray() {
    var array = [];

    for (var i = curCounter + 1; i > 0; i--) {
        if (i % 5 == 0) {
            array.push(i);
        }
    }

    console.log(array);
}

function printCarObject() {
    var car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value,
    };

    console.log(car);
}

function loadCar(carId) {

    if (carId == 1) {
        document.getElementById("carType").value = carObject1.cType;
        document.getElementById("carMPG").value = carObject1.cMPG;
        document.getElementById("carColor").value = carObject1.cColor;
    } else if (carId == 2) {
        document.getElementById("carType").value = carObject2.cType;
        document.getElementById("carMPG").value = carObject2.cMPG;
        document.getElementById("carColor").value = carObject2.cColor;
    } else if (carId == 3) {
        document.getElementById("carType").value = carObject3.cType;
        document.getElementById("carMPG").value = carObject3.cMPG;
        document.getElementById("carColor").value = carObject3.cColor;
    }
}

function changeColor(colorId) {
    var styleParagraph = document.getElementById("styleParagraph");
    

    if (colorId == 1) {
        styleParagraph.style.color = "red";
    } else if (colorId == 2) {
        styleParagraph.style.color = "green";
    } else if (colorId == 3) {
        styleParagraph.style.color = "blue";
    }
}