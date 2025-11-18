const express = require('express');
const app = express();
const RoutePago = require('./routes/RoutePago');
const cors = require("cors")

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}))
app.use(express.json());
app.use("/api", RoutePago);

app.listen(5000, () => {
    console.log("Listo ya lo poemos unar en el 5k");
});