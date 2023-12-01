const Location = require('../models/locationModel');

const shareLocation = async (req, res) => {
  const { username, lat, lng } = req.body;

  try {
    const location = new Location({ username, lat, lng });
    await location.save();
    res.status(201).json({ message: 'Location shared successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const allLocations = await Location.find();
    res.json(allLocations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getLocation = async (req, res) => {
  const username = req.params.username;

  try {
    const location = await Location.findOne({ username });
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }

    res.json({lat: location.lat , lng: location.lng});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const deleteSingleLocation = async (req, res) => {
  const username = req.params.username;

  try {
    const location = await Location.deleteOne({ username });
    if (location.deletedCount === 0) {
      return res.status(404).json({ error: 'Location not found' });
    }

    res.status(200).json({ message: 'Location deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






const deleteAllLocations = async (req, res) => {
  try {
    await Location.deleteMany({});
    res.status(200).json({ message: 'All locations deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};







module.exports = { shareLocation,getAllLocations, getLocation, deleteSingleLocation, deleteAllLocations };
