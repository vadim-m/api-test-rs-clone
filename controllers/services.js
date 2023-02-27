import User from "../models/User.js";
import Service from "../models/Service.js";

class ServicesController {
  async createServices(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID);
      const newService = new Service(req.body);

      user.services.push(newService);

      await newService.save();
      await user.save();
      res.status(201).json(newService);
    } catch (error) {
      res.status(500).json({ message: "Creating error" });
    }
  }

  async getServices(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID).populate("services");

      if (!userID) {
        return res.status(400).json({ message: "UserID is required!" });
      }

      const services = user.services;
      return res.status(200).json(services);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateServices(req, res) {
    try {
      const serviceObj = req.body;
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const updatedService = await Service.findByIdAndUpdate(id, serviceObj, {
        new: true,
      });

      return res.status(200).json(updatedService);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteServices(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const deletedService = await Service.findByIdAndDelete(id);

      return res.status(200).json(deletedService);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new ServicesController();
