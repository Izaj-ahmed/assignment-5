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

// Copy
document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click",function(e){
        e.preventDefault();
        const availableCopyAmount = parseInt(
        document.getElementById("copy-amount").innerText
        );
        const totalNewCopyAvailableAmount = 1 + availableCopyAmount;
            document.getElementById("copy-amount").innerText = totalNewCopyAvailableAmount;
        alert("You are successfully copied");
    });
})


const historyData = []




// Call 

document.getElementById("Call-btn-1").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-1").innerText + "\n" +document.getElementById("service-num-1").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"National Emergency",
        num:"999",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})
document.getElementById("Call-btn-2").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-2").innerText + "\n" +document.getElementById("service-num-2").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"Police",
        num:"999",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})
document.getElementById("Call-btn-3").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-3").innerText + "\n" +document.getElementById("service-num-3").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"Fire Service",
        num:"999",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})
document.getElementById("Call-btn-4").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-4").innerText + "\n" +document.getElementById("service-num-4").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"Ambulance",
        num:"1994-999999",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})
document.getElementById("Call-btn-5").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-5").innerText + "\n" +document.getElementById("service-num-5").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"Women & Child Helpline",
        num:"109",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})
document.getElementById("Call-btn-6").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-6").innerText + "\n" +document.getElementById("service-num-6").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"Anti-Corruption",
        num:"106",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})
document.getElementById("Call-btn-7").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-7").innerText + "\n" +document.getElementById("service-num-7").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"Electricity Outage",
        num:"16216",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})
document.getElementById("Call-btn-8").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-8").innerText + "\n" +document.getElementById("service-num-8").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"Brac",
        num:"16445",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})
document.getElementById("Call-btn-9").addEventListener("click",function(e){
    e.preventDefault();
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    if (availableCallToken >= 20){
        document.getElementById("call-token").innerText = availableCallToken - 20;
        alert(document.getElementById("service-name-9").innerText + "\n" +document.getElementById("service-num-9").innerText);
       
    }
    else{
        alert("Not enough token for Call.")
    }

    const data = {
        name:"Bangladesh Railway",
        num:"163",
        date:new Date().toLocaleTimeString()
    }

    historyData.push(data)
    console.log(historyData)
        
        
   
})




// history
document.getElementById("Call-btn-1").addEventListener("click",function(){
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""

    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
})
document.getElementById("Call-btn-2").addEventListener("click",function(){
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""

    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
})
document.getElementById("Call-btn-3").addEventListener("click",function(){
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""

    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
})
document.getElementById("Call-btn-4").addEventListener("click",function(){
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""

    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
})
document.getElementById("Call-btn-5").addEventListener("click",function(){
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""

    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
})
document.getElementById("Call-btn-6").addEventListener("click",function(){
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""

    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
})
document.getElementById("Call-btn-7").addEventListener("click",function(){
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""

    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
})
document.getElementById("Call-btn-8").addEventListener("click",function(){
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""

    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
})
document.getElementById("Call-btn-9").addEventListener("click",function(e){
    e.preventDefault();
    const transactionContainer = document.getElementById("history-container")
    transactionContainer.innerText = ""
    const availableCallToken = parseInt(
    document.getElementById("call-token").innerText
    );
    
    for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        
        <div class="flex justify-between items-center p-3 m-2 rounded-xl bg-gray-100">
            <div>
                <h4 class="text-[15px] font-bold">${data.name}</h4>
                <p class="text-[14px]">${data.num}</p> 
            </div>
            <p class="text-[10px]">${data.date}</p>
        </div>
        
        `

        transactionContainer.appendChild(div)


    }
    
    
})

