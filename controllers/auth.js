import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config();

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        const isValidPass = bcryptjs.compareSync(password, candidate.password);

        if (isValidPass) {
          const token = jwt.sign(
            {
              id: candidate._id,
              email: candidate.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
          );

          const userSettings = {
            fullName: candidate.fullName,
            hasCar: candidate.hasCar,
            language: candidate.language,
            currency: candidate.currency,
            darkTheme: candidate.darkTheme,
            predictMileage: candidate.predictMileage,
            rememberPriceFuel: candidate.rememberPriceFuel,
          };
          // ! потом убрать id, так как он будет в passport
          res.status(200).json({
            token: `Bearer ${token}`,
            id: candidate._id,
            userSettings,
          });
        } else {
          res.status(401).json({ message: "Invalid password!" });
        }
      } else {
        res.status(404).json({ message: "The email not found!" });
      }
    } catch (error) {
      res.status(400).json({ message: "Login error" });
    }
  }

  async register(req, res) {
    try {
      const { email, password, fullName } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        res.status(409).json({ message: "The email already registered!" });
      } else {
        const newUser = new User({
          email,
          password: bcryptjs.hashSync(password, 8),
          fullName,
        });

        await newUser.save();
        res.status(201).json(newUser);
      }
    } catch (error) {
      res.status(400).json({ message: "Registration error" });
    }
  }
}

export default new AuthController();
