import { Admin } from "../models/Schema.js";

export const getAllBanners = async (req, res) => {
  try {
    const adminData = await Admin.findOne(); 
    res.json(adminData?.banner || ""); 
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch banner" });
  }
};


export const updateBanner = async (req, res) => {
  try {
    const { banner } = req.body; 

    let adminData = await Admin.findOne();

    if (!adminData) {
      adminData = await Admin.create({ banner });
    } else {
      adminData.banner = banner;
      await adminData.save();
    }

    res.json({ message: "Banner updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update banner" });
  }
};
