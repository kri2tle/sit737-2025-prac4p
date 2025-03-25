//web server is created 
const express = require("express");

//it handles paths 
const path = require("path");

const logger = require("./logger"); // Import our Winston logger.js file

//it creates express application as app and server port as 3000 
const app = express();
const PORT = 3040;

// Serve static files without caching
app.use(express.static(path.join(__dirname, "public"), { maxAge: 0 }));

// Force cache refresh
app.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
    next();
});

//index.html will be available at localhost:3040 
// app.use(express.static(path.join(__dirname, "public")));

// Route to serve the calculator page and showrespones in index.html page 
app.get("/", (req, res) => {
    logger.info("Serving the calculator page.");
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// handles requests for API as calcualtions are performed 
app.get("/calculate", (req, res) => {

    //variables are defined as per requirenmnets 
    const { num1, num2, operation } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    //basic logic is applied for calculation 

    if (isNaN(n1) || isNaN(n2)) {
        logger.error("Invalid numbers provided.");
        return res.status(400).json({ error: "Invalid numbers" });
    }

    switch (operation) {

        //addition  logic 
        case "add":
            result = n1 + n2;
            break;

        //subtraction logic 
        case "subtract":
            result = n1 - n2;
            break;

        //multipilcation logic 
        case "multiply":
            result = n1 * n2;
            break;
        //dovosion logic
        case "divide":
            if (n2 === 0) {
                logger.error("Division by zero is not possible please enter correct number .");
                return res.status(400).json({ error: "Cannot divide by zero enter new number " });
            }
            result = n1 / n2;
            break;

        //if all conditions are failed then default part will excecute 
        default:
            logger.error("Invalid operation are performed .");
            return res.status(400).json({ error: "Invalid operation please check !! " });
    }

    //Logs the calculation and returns the result as JSON to the frontend
    logger.info(`Calculation performed: ${n1} ${operation} ${n2} = ${result}`);
    res.json({ result });
});

// Start the server at port 3000
app.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
});
