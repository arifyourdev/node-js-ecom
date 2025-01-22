import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import commonRoute from "./routes/commonRoute.js"
import loginRoute from "./routes/loginRoute.js"
import cartRoute from "./routes/cartRoute.js";
import paypalRoute from "./routes/paypalRoute.js";
import categoryRoute from "./routes/admin/categoryRoute.js";
import productRoute from "./routes/admin/productRoute.js";
import typeRoute from "./routes/admin/typeRoute.js";
import sizeRoute from "./routes/admin/sizeRoute.js";
import prodRoute from "./routes/prodRoute.js";

const app = express();
app.use(cors())
dotenv.config()
app.locals.baseURL = "http://localhost:8085/"

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Middleware to make user session data available in all views
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
  });
  
// Set View Engine
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.static("public"))
app.use(express.json()); //
app.use(express.urlencoded({ extended: true }))

// Json Api Routes
app.use('/m-t',(req,res) =>{
    res.render('m-t')
})

// Routes
app.use('/', prodRoute);
app.use('/', commonRoute);
app.use('/',loginRoute) ;
app.use('/', cartRoute);
app.use('/', paypalRoute);

 
// Admin Routes
app.use('/admin/',categoryRoute);
app.use('/admin/', productRoute);
app.use('/admin/', typeRoute);
app.use('/admin/',sizeRoute)

const PORT = 8085

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
}) 