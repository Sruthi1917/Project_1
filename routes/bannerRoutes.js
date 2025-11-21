// backend/routes/bannerRoutes.js
import express from "express";
import {
  updateBanner,
  getAllBanners,
} from "../controllers/bannerController.js";

const router = express.Router();

router.get("/banner", getAllBanners);
router.put("/banner", updateBanner);

export default router;
