import User from "../models/User.js";
import Refuel from "../models/Refuel.js";

class RefuelsController {
  async createRefuels(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID);
      const newRefuel = new Refuel(req.body);

      user.refuels.push(newRefuel);

      await newRefuel.save();
      await user.save();
      res.status(201).json(newRefuel);
    } catch (error) {
      res.status(500).json({ message: "Creating error" });
    }
  }

  async getRefuels(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID).populate("refuels");

      if (!userID) {
        return res.status(400).json({ message: "UserID is required!" });
      }

      const refuels = user.refuels;
      return res.status(200).json(refuels);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateRefuels(req, res) {
    try {
      const refuelObj = req.body;
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const updatedRefuel = await Refuel.findByIdAndUpdate(id, refuelObj, {
        new: true,
      });

      return res.status(200).json(updatedRefuel);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteRefuels(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const deletedRefuel = await Refuel.findByIdAndDelete(id);

      return res.status(200).json(deletedRefuel);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new RefuelsController();
