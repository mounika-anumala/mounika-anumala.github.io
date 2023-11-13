
const btn = document.querySelector("#btn")

function getroots(a, b, c) {

    var r1, r2

    if (b * b - (4 * a * c) < 0) {

        return "NA"

    } else {

        r1 = (-b + Math.pow(b * b - (4 * a * c), 0.5)) / (2 * a)
        r2 = (-b - Math.pow(b * b - (4 * a * c), 0.5)) / (2 * a)
        return JSON.stringify({ "a1": r1, "a2": r2 })
    }

}

function displayroots() {

    const A = document.querySelector("#a").value
    const B = document.querySelector("#b").value
    const C = document.querySelector("#c").value

    
    var myans = getroots(A, B, C)

    console.log(myans)

    if(myans!="NA"){

        myans = JSON.parse(myans)

        document.querySelector("#root1").innerHTML = `Root1=${myans["a1"]}`
        document.querySelector("#root2").innerHTML = `Root2=${myans["a2"]}`

    }else{

        document.querySelector("#root1").innerHTML = "No real roots"
        document.querySelector("#root2").innerHTML = "No real roots"


    }

    
}