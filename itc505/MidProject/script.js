const startPage = {

    story: "You finished your schooling. Choose a next step for continuing studies.",
    buttons: ["Intermediate", "Diploma"],
    images: ["./images/intermediate.jpg", "./images/diploma.jpg"]

}

const afterDiploma = {

    story: "You successfully completed your diplamo course, choose the below options for your next step.",
    buttons: ["Bachelors", "Job"],
    images: ["./images/bachelors.avif", "./images/IT.png"]

}

const afterInter = {

    story: "You chose to do intermediate. Select if you like to do maths or biology.",
    buttons: ["Mathematics", "Biology"],
    images: ["./images/Math.webp", "./images/bio.jpg"]

}

const afterMath = {

    story: "you finished your intermediate education in maths. Choose a next step for your studies.",
    buttons: ["Commerce", "Bachelors"],
    images: ["./images/commerce.png", "./images/bachelors.avif"]

}

const afterBio = {

    story: "you finished your intermediate education in Biology. Choose a next step for your studies.",
    buttons: ["Medicine", "Agri Science"],
    images: ["./images/medicine.jpg", "./images/agricultural.webp"]

}

const afterComm = {

    story: "You sucessfully finished commerce, fly high with your new skill.You can now start a business or earn in corporate sector",

}

const afterBach = {

    story: "You finished your bachelors, you can earn high or study high now. Choose an option.",
    buttons: ["Masters", "Job"],
    images: ["./images/masters.png", "./images/IT.png"]
}

const afterMedi = {

    story: "You finished your medicine studies. You can now become a physician or do a specialization",
    buttons: ["General Physician", "Surgeon"],
    images: ["./images/generalphysician.jpg", "./images/surgeon.webp"]

}

const aftersurgeon = {

    story: "You are now a neuro surgeon, you can mess with peoples brains!!."

}

const afterGP = {

    story: "You are now a doctor. You can now legally prescribe whatever you want."

}

const afterJob = {

    story: "You have skill to earn now, search for a job and get going with your life."

}

const afterMas = {

    story: "You finished your master, now you can futher contribute to research or get a good job."

}

const afteArgri={

    story: "You finished your bachelors in Agri science, you can now contunue your journey by conributing to humanity or study more."

}

const ad = '<h2>Addendum</h2><h4>HTML: </h4><p> For creating my project, First I decided to update my using a single simple layout that can be updated by JavaScript when a button is clicked every time.To achieve this, I used the following method.I first created two div containers one to store the heading of the page and one to store the content of the page.In the content div, I again created three div tags which are arranged in a row structure.Here I used the first div to display my story content, second to display my buttons and the third to display my images.</p ><h4>CSS:</h4><p>For the styling part I use simple background with some height and width manipulation. I manipulated the height and width of every div and image in the page such that it looks clean. To arrange the div tags and their child tags, I used flex box parent and child properties. </p><h4>JavaScript:</h4><p>To update the HTML page on button clicks, I used three major functions, one function starts the webpage with initial data, one function updates the middle of the page and one function updates the end of the page. I used a helper function that is invoked when the button is clicked, and the update functions are called internally in that function. To maintain my story I used objects that hold story line with button names and images.</p>'

function updateData(obj) {


    console.log("hello")
    document.getElementById("story").innerHTML = obj['story'];
    document.querySelector("#btn1").innerHTML = obj['buttons'][0]
    document.querySelector("#btn2").innerHTML = obj['buttons'][1]
    document.querySelector("#image1").src = obj.images[0]
    document.querySelector("#image2").src = obj.images[1]


}

function updateDataEnd(obj, ed) {

    document.getElementById("story").innerHTML = obj['story'];
    document.querySelector("#button").innerHTML = ""
    document.querySelector("#images").innerHTML = ed
    document.querySelector("#images").id = "ad"


}

function startGame() {

    updateData(startPage)

}

function updateOnClick(name) {

    //let name = document.querySelector("#btn1").innerHTML
    if (name == "Intermediate") {
        updateData(afterInter)
    }

    if (name == "Diploma") {
        updateData(afterDiploma)
    }

    if (name == "Mathematics") {
        updateData(afterMath)
    }

    if (name == "Biology") {
        updateData(afterBio)
    }

    if (name == "Commerce") {

        updateDataEnd(afterComm, ad)

    }

    if (name == "Surgeon") {

        updateDataEnd(aftersurgeon, ad)
    }

    if (name == "General Physician") {

        updateDataEnd(afterGP, ad)

    }

    if (name == "Masters") {

        updateDataEnd(afterMas, ad)

    }

    if (name == "Bachelors") {

        updateData(afterBach)
    }

    if (name == "Medicine") {

        updateData(afterMedi)
    }

    if (name == "Job") {

        updateDataEnd(afterJob, ad)

    }

    if(name =="Agri Science"){

        updateDataEnd(afteArgri, ad)
    }

}

startGame()




