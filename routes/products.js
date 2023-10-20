import express from "express"
import path from "path"
const productsFile = path.join(process.cwd(), "src", "views", "products.html");
const router = express.Router();

router.get("/", (req, res) => {
 res.sendFile(productsFile)
})

export default router