import express from "express";
import path from "path"
const router = express.Router();
const homeFile = path.join(process.cwd(),"src","views","home.html")
router.get("/", (req, res) => {
    res.sendFile(homeFile)
})

export default router