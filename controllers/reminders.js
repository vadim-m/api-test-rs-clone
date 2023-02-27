import User from "../models/User.js";
import Reminder from "../models/Reminder.js";

class RemindersController {
  async createReminders(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID);
      const newReminder = new Reminder(req.body);

      user.reminders.push(newReminder);

      await newReminder.save();
      await user.save();
      res.status(201).json(newReminder);
    } catch (error) {
      res.status(500).json({ message: "Creating error" });
    }
  }

  async getReminders(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID).populate("reminders");

      if (!userID) {
        return res.status(400).json({ message: "UserID is required!" });
      }

      const reminders = user.reminders;
      return res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateReminders(req, res) {
    try {
      const reminderObj = req.body;
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const updatedReminder = await Reminder.findByIdAndUpdate(
        id,
        reminderObj,
        {
          new: true,
        }
      );

      return res.status(200).json(updatedReminder);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteReminders(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const deletedReminder = await Reminder.findByIdAndDelete(id);

      return res.status(200).json(deletedReminder);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new RemindersController();
