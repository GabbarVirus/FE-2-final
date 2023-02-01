document.getElementById("image-2").disabled = true;
document.getElementById("image-3").disabled = true;
document.getElementById("image-4").disabled = true;
let formInfoArray = [];
let diceScore = [];
let attempt = 2;
let RemainingDiceClick = 3;
let totalScore = 0;
function openFormFunction() {
    document.getElementById('form').classList.remove('hidden');
}


function submitFormInfoFunction() {
    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    if (name && userName && email) {
        let obj = {
            Name: name,
            UserName: userName,
            Email: email,
        }

        formInfoArray.push(obj);
        document.getElementById("image-2").disabled = false;
        document.getElementById("image-1").disabled = true;
        alert('Your Info is Submitted successfully! Click on the next image to view your info.')
        document.getElementById('form').classList.add('hidden');
        
    } else {
        alert(`Please fill all the fields.`)
    }
}


function displayFormInfoFunction() {
    document.getElementById('info').innerText = `Name: ${formInfoArray[0].Name}, User Name: ${formInfoArray[0].UserName}, Email: ${formInfoArray[0].Email}`
    document.getElementById('displayInfo').classList.remove('hidden');
    document.getElementById("image-3").disabled = false;
    document.getElementById("image-2").disabled = true;
}
function displaydiceScore() {
    document.getElementById('displayInfo').classList.add('hidden');
    attempt--;
    console.log(`attempt remaining= ${attempt}`);
    document.getElementById('attemptsleft').innerText = attempt;
    document.getElementById('diceScore').classList.remove('hidden');
    document.getElementById("image-3").disabled = true;
}
function diceClick() {
    RemainingDiceClick--;
    document.getElementById('diceClicks').innerText = RemainingDiceClick;
    let randomNo = Math.floor(Math.random() * 6) + 1;
    totalScore += randomNo;
    document.getElementById('score').innerText = totalScore;

    if (RemainingDiceClick === 0) {
        document.getElementById("dice-Image").disabled = true;
        document.getElementById('score').innerText = totalScore;
        if (totalScore > 10) {
            alert(`Yehhh Congratulations 🎉🎉🎊🎊😊😊!!! Your total score is ${totalScore} which is greater than 10. Click on next Image to avail your coupon code.`);
            document.getElementById('diceScore').classList.add('hidden');
            document.getElementById("image-4").disabled = false;
        } else {
            if (attempt != 0) {
                
                alert(`O Ohhh!!! Your total score is ${totalScore} which is less than 10. Try once again!!`);
                document.getElementById("image-3").disabled = false;
                RemainingDiceClick = 3;
                totalScore = 0;
                document.getElementById("dice-Image").disabled = false;
                document.getElementById('diceScore').classList.add('hidden');
                console.log(`RemainingDiceClick = ${RemainingDiceClick}`);
                console.log(`totalScore = ${totalScore}`);

            } else {
                document.getElementById('score').innerText = totalScore;
                alert(`Sorry Bad luck 🥹🥹🥹!!! Your total score is ${totalScore} which is not greater than 10 & You have exausted all your attempts. Please Start from begining!!!!`);
                document.getElementById('diceScore').classList.add('hidden');
                document.getElementById('tryAgainImage').classList.remove('hidden');
            }
        }
    }
}
function generateCouponCodeFunction() {
    document.getElementById("image-4").disabled = true;
    let coupon = '';
    for (let i = 0; i < 12; i++) {
        coupon += Math.floor(Math.random() * 10);
    }
    document.getElementById('congratsImage').classList.remove('hidden');
    alert(`Congratulations 🎉🎉🎊🎊😊😊!!! You have successfully generated a coupon. Your coupon code is ${coupon}`)
}