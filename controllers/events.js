const { response } = require("express");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate("user", "name");
  res.json({
    ok: true,
    events,
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const eventDB = await event.save();
    res.json({
      ok: true,
      event: eventDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: true,
      msg: "Error",
    });
  }
};

const updateEvent = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "Unauthorized",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const eventUpdated = await Event.findByIdAndUpdate(id, newEvent, {
      new: true,
    });

    res.json({
      ok: true,
      event: eventUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error",
    });
  }
};
const deleteEvent = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "Unauthorized",
      });
    }

    await Event.findByIdAndDelete(id);

    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error",
    });
  }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
