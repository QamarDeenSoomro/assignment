// var marks = prompt("Enter your marks")
// var grade = "fail";
// if (marks>100){
//     console.log("Incorrect Percentage, please try again with valid perentage")
//     grade="Incorrect Percentage, please try again with valid perentage"
// }
// else if (marks>=80) {
//     console.log("Grade (A1)");
//     grade="Grade (A1)"
// }
// else if (marks>=70) {
//     console.log("Grade (A)");
//     grade="Grade (A1)"
// }
// else if(marks>=60){
//     console.log("Grade (B)")
// }
// else if(marks>=50){
//     console.log("Grade (C)")
// }
// else if(marks>=40){
//     console.log("Grade (D)")
// }
// else if (marks==="") {
//     console.error("Enter marks")    
// }
// else {
//     console.log("Grade (F)")
// }


var country = prompt("Country") // Capital, or normal
var state = prompt("State") // list of cities in states too.
var city= prompt("City")//
var address="Not Found";
// document.write(country)
//Mithi//
//Islamkot
//Karachi
//Hyderabad


if (country==="") {
    country="Please input Country name"}
else if(country==="pakistan"|| country==="Pakistan"|| country==="pk"){
    country="Pakistan"
    if (state==="") {
        state="Please input State name"}
    else if(state==="Sindh"|| state==="sindh"){
        state="Sindh"
        if (city==="") {
            city="Please input City name"}
        else if (city==="mithi"||city==="Mithi") {
            city="Mithi"
        } 
        else if(city==="islamkot"||city==="Islamkot"){
            city="Islamkot"
        }
        else if(city==="Karachi"||city==="karachi"){
            city="Karachi"
        }
        else if(city==="Hyderabad"||city==="hyderabad"){
            city="Hyderabad"
        }
        else {
            city="Your entered city "+city+" is not in our database"
        }
    }
    else if(state==="punjab"|| state==="Punjab"){
        state="Punjab"
    }
    else if(state==="kpk"|| state==="KPK"){
        state="KPK"
    }
    else if(state==="balochistan"|| state==="Balochistan"){
        state="Balochistan"
    }
    
     else {
        state="You have entered "+state+" as a state which doesn't exist in Pakistan"
    }

}
 else {
    country="Your not a Pakistani, your country is <b>"+country+"</b>"
}
if (city==="Mithi") {
    address="69230"+", "+state+", "+country
}
else if (city==="Karachi"){
    address="10032"+", "+state+", "+country
}
else if (city==="Hyderabad"){
    address="10232"+", "+state+", "+country
}
else if (city==="Islamkot"){
    Zip="69231"
}

else {
    Zip="Zip Not Found"
}
// var address=Zip+", "+state+", "+country
// // if (Zip==="69231"||Zip==="69230"||Zip==="10232"||Zip==="10032") {
// if (Zip==="69230") {
//     Zip=Zip
// } else {
//     address="Not Found"
// // }

// if (address="") {
//     address="Not Found"
// } else {
//     address=address
// }

document.getElementById("country").innerHTML = country;
document.getElementById("state").innerHTML = state;
document.getElementById("city").innerHTML = city;
document.getElementById("address").innerHTML = "<b>Address: </b>"+address;