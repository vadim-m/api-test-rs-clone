import bcryptjs from "bcryptjs";
import * as dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config();

class SettingsController {
  async getSettings(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID);

      if (!userID) {
        return res.status(400).json({ message: "UserID is required!" });
      }

      const settings = {
        fullName: user.fullName,
        hasCar: user.hasCar,
        language: user.language,
        currency: user.currency,
        rememberPriceFuel: user.rememberPriceFuel,
        predictMileage: user.predictMileage,
        darkTheme: user.darkTheme,
      };

      return res.status(200).json(settings);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateSettings(req, res) {
    try {
      const userID = req.headers["user-id"];
      const settingsObj = req.body;
      const user = await User.findByIdAndUpdate(userID, settingsObj, {
        new: true,
      });

      const updatedSettings = {
        fullName: user.fullName,
        hasCar: user.hasCar,
        language: user.language,
        currency: user.currency,
        rememberPriceFuel: user.rememberPriceFuel,
        predictMileage: user.predictMileage,
        darkTheme: user.darkTheme,
        orientation: user.orientation,
      };

      res.status(200).json(updatedSettings);
    } catch (error) {
      res.status(400).json({ message: "Registration error" });
    }
  }
}

export default new SettingsController();
