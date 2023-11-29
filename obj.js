let myObj = {
    name : "deepa";
    age: "26"
};

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem("myObj", myObj_serialized);

let myObj_real =JSON.parse(localStorage.getItem("myObj"))