import Car from "../models/Car.js";

class CarController {
  async createCar(req, res) {
    try {
      const { car, event, driver } = req.body;
      const carObj = await Car.create({ car, event, driver });

      return res.status(200).json(carObj);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAllCars(req, res) {
    try {
      const cars = await Car.find();

      return res.status(200).json(cars);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOneCar(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }
      const car = await Car.findById(id);

      return res.status(200).json(car);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateCar(req, res) {
    try {
      const carObj = req.body;
      if (!carObj._id) {
        res.status(400).json({ message: "ID is required!" });
      }
      const updatedCar = await Car.findByIdAndUpdate(carObj._id, carObj, {
        new: true,
      });
      return res.status(200).json(updatedCar);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteCar(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }
      const car = await Car.findByIdAndDelete(id);
      return res.status(200).json(car);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new CarController();
