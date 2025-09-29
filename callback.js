const bookTicket=()=>{
    console.log("welcome!");
    setTimeout(()=>{
        console.log("login successful");
        setTimeout(()=>{
            console.log("seats has been selected succes");
            setTimeout(()=>{
                console.log("payment has been done succesful");
                setTimeout(()=>{
                    console.log("your ticket has been booked");
                    setTimeout(()=>{
                        console.log("thank you for visiting");
                    },1000)
                },2000)
            },3000)
        },4000)
    },5000)
}