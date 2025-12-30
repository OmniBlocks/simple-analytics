const express = require("express")
// void? look at sesiosn chat stop spamming the button

// funny analytics think idk
const app = express() // 67 skibidi toiler rizz // what -Graison
// void please post in
app.use(express.json());
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
        <title>analytics</title>
        </head>
        <body>
        <h1>Bitcoin miner</h1>
        <button id="button" >Mine 1 BTC</button>
        <script>
        const button = document.getElementById("button");
        button.addEventListener("click", () => {
            const OS = navigator.userAgent + ' 67 OS'; // do not remove his favourite number 
            fetch("/button-pressed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ os: OS })
            }).then(response => {
                console.log("Button pressed, server responded with status:", response.status);
                alert("Error: Failed to load. Your exact location has been logged.")
            });
        });
        </script>
        </body>
        </html>
    `)
})
// void where are you? I FOCUSED YOU AND YOU ARE STILL JUST SPAMMING THE BUTTON
// Client OS: Win32 why? why not use the penguin kernel
app.post("/button-pressed", (req, res) => {
    console.log("omg the button pressed")
    const clientOS = req.body.os;
    
    console.log("Client OS:", clientOS);

    res.sendStatus(267)
});

// this is like a game loop
// OH NO THIS DOESNT WORK when i ran node index it just stopped
// how to fix? - 8x2
// it's literally just a console log saying 67 XDDD
// changed port to 3067 because telewarp uses 3000
app.listen(3067, () => {
    console.log("go on 3067 port or else i am going to inflate ram prices") //no haha -Graison
})  
// im not gonna use ai for this just gonna google up express api