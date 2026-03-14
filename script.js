document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let year = document.getElementById("year").value;
let area = document.getElementById("area").value;
let district = document.getElementById("district").value;
let state = document.getElementById("state").value;

let photo = document.getElementById("photo").files[0];

let currentYear = new Date().getFullYear();
let age = currentYear - year;

/* AGE CHECK */

if(age < 18){
alert("You must be 18 or older to join TVK Virtual Warrior");
return;
}

let reader = new FileReader();

reader.onload = function(){

let card = `
<div class="pvc-card">

<div class="header">
தமிழக வெற்றிக் கழகம்
<p>பிறப்பொக்கும் எல்லா உயிர்க்கும்!</p>
</div>

<div class="card-body">

<div class="left">
<img src="${reader.result}" class="user-photo">
</div>

<div class="middle">

<h3>உறுப்பினர் அட்டை</h3>

<p>பெயர் : ${name}</p>

<p>பிறந்த ஆண்டு : ${year}</p>

<p>வயது : ${age}</p>

<p>சட்டமன்றம் : ${area}</p>

<p>மாவட்டம் : ${district}</p>

<p>மாநிலம் : ${state}</p>

<p>பதவி : VIRTUAL WARRIOR</p>

</div>

<div class="right">
<img src="images/vijay.png" class="vijay">
</div>

</div>

</div>
`;

document.getElementById("card").innerHTML = card;

}

reader.readAsDataURL(photo);

});