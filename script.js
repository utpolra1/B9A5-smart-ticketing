let pricesTotal=0;
let count = 0;
let counts =40;

const ticketCard = document.querySelectorAll('.col-span-1');
for(const tickets of ticketCard){
    tickets.addEventListener('click', function(){
        count += 1;
        const seats=tickets.querySelector('h1').innerText;

        const seatPtag=document.getElementById("seat");
        const pSeats=document.createElement('p');
        pSeats.innerText=seats;
        seatPtag.appendChild(pSeats);

        const classe=document.getElementById("class");
        const classSeat=document.createElement("p");
        classSeat.innerText="Economoy";
        classe.appendChild(classSeat);

        const Prices=document.getElementById("price");
        const priceBdt=document.createElement("p");
        const priceAll = priceBdt.innerText=550;
        Prices.appendChild(priceBdt);

        pricesTotal+=priceAll;
        const totalPrice= document.getElementById("total-cost").innerText=pricesTotal;

        const totalGrand= document.getElementById("total-grand").innerText=totalPrice;
        document.getElementById("cart-count").innerText = count;


        counts-=1
        document.getElementById("availableSet").innerText=counts;
    })
}

document.querySelector("#btnNext").addEventListener("click", function(){
    const header = document.getElementById("headerSection");
    header.classList.add("hidden");
    const mainsection = document.getElementById("mainSection");
    mainsection.classList.add("hidden");

    const success=document.getElementById("success");
    success.classList.remove("hidden");
})

const buttons = document.querySelectorAll('.col-span-1');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});


let counter = 0;
const buttonse = document.querySelectorAll('button.col-span-1');
for (let i = 0; i < buttons.length; i++) {
    buttonse[i].addEventListener('click', function() {
        counter++;
        if (counter === 4) {
            for (let j = 0; j < buttonse.length; j++) {
                buttonse[j].disabled = true;
            }
        }
    });
}
const buttonApply =document.getElementById("buttonApply");
buttonApply.addEventListener("click", function(){
    const couponCode=document.getElementById("couponCode").value.split(" ").join("").toUpperCase();
    if(couponCode ==="NEW15"){
        const total=pricesTotal*.15;
        const totalGrand= document.getElementById("total-grand").innerText=pricesTotal-total;
        const hiddenfeild= document.getElementById("hiidenfiled");
        hiddenfeild.style.display = "none";
    }
    else if(couponCode==="COUPLE20"){
        const total=pricesTotal*.2;
        const totalGrand= document.getElementById("total-grand").innerText=pricesTotal-total;
        const hiddenfeild= document.getElementById("hiidenfiled");
        hiddenfeild.style.display = "none";
    }
    else{
        const hiddenfeild= document.getElementById("hiidenfiled");
        hiddenfeild.style.display = "none";
    }
})




