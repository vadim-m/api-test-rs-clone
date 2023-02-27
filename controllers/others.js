import User from "../models/User.js";
import Other from "../models/Other.js";

class OthersController {
  async createOthers(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID);
      const newOther = new Other(req.body);

      user.others.push(newOther);

      await newOther.save();
      await user.save();
      res.status(201).json(newOther);
    } catch (error) {
      res.status(500).json({ message: "Creating error" });
    }
  }

  async getOthers(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID).populate("others");

      if (!userID) {
        return res.status(400).json({ message: "UserID is required!" });
      }

      const others = user.others;
      return res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateOthers(req, res) {
    try {
      const otherObj = req.body;
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const updatedOther = await Other.findByIdAndUpdate(id, otherObj, {
        new: true,
      });

      return res.status(200).json(updatedOther);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteOthers(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const deletedOther = await Other.findByIdAndDelete(id);

      return res.status(200).json(deletedOther);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new OthersController();
