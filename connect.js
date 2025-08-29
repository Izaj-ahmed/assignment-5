// Heart icon clicking

document.querySelectorAll(".heart-btn").forEach(button => {
    button.addEventListener("click",function(e){
        e.preventDefault();
        const availableHeartAmount = parseInt(
        document.getElementById("heart-amount").innerText
        );
        const totalNewAvailableAmount = 1 + availableHeartAmount;
            document.getElementById("heart-amount").innerText = totalNewAvailableAmount;
    });
})



// Call 

document.getElementById("Call-1").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-1").innerText + "\n" +document.getElementById("service-num-1").innerText);
        return
    }
    else{
        alert("Not enough token for Call.")
    }
})



