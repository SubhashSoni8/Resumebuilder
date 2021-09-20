// alert("loading");
function addNewWEField() {
    // console.log("Added new button");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")
    let weOb = document.getElementById('we');

    let weAddButtonOb = document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);

}

// alert("loading");
function addNewAQField() {
    //  console.log("Added new  aqualification button");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rowns", 3);
    newNode.setAttribute("placeholder", "Enter here")
    let aqOb = document.getElementById('aq');

    let aqAddButtonOb = document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode, aqAddButtonOb);
}


function generateResume() {
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = nameField;

    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;

    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;

    document.getElementById('linkedinT').innerHTML = document.getElementById('linkedinField').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    let wes = document.getElementsByClassName('weField');

    let str = '';

    for (let e of wes) {
        str += `<li>${e.value}</li>`;
        console.log(str);
    }

    document.getElementById('weT').innerHTML = str;

    let aqs = document.getElementsByClassName('aqField');
    let str1 = "";
    for (let e of aqs) {
        
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str1;


    document.getElementById('resume-form').style.display='none';
    document.getElementById('resume-template').style.display='block';

    //    let contactField=document.getElementById('contactField').value;
    //    let contactT=document.getElementById('contactT');
    //    contactT.innerHTML=contactField;

    //    let addressField=document.getElementById('addressField').value;
    //    let addressT=document.getElementById('addressT');
    //    addressT.innerHTML=addressField;

    //    let fbField=document.getElementById('fbField').value;
    //    let fbT=document.getElementById('fbT');
    //    fbT.innerHTML=fbField;

    //    let instaField=document.getElementById('instaField').value;
    //    let instaT=document.getElementById('instaT');
    //    instaT.innerHTML=instaField;

    //    let linkedinField=document.getElementById('linkedinField').value;
    //    let linkedinT=document.getElementById('linkedinT');
    //    linkedinT.innerHTML=linkedinField;

}

function printResume() {
    window.print();
}