const axios = require('axios');
const API_URL = process.env.API_URL;
const ResponseStatus = require('./../utils/response-status'); 

const getUsers = async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.status(ResponseStatus.SUCCESS).json(response.data);
  } catch (error) {
    console.error(error); 
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'No jalaron los usuarios pa' });
  }
};

const getUserById = async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`);
    res.status(ResponseStatus.SUCCESS).json(response.data);
  } catch (error) {
    console.error(error); 
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'Ese usuario no existe pa' });
  }
};

const createUser = async (req, res) => {
  try {
    const response = await axios.post(API_URL, req.body);
    res.status(ResponseStatus.SUCCESS).json(response.data);
  } catch (error) {
    console.error(error); 
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'No puedes crear el usuario, no eres rey pa' });
  }
};

const updateUser = async (req, res) => {
  try {
    const response = await axios.put(`${API_URL}/${req.params.id}`, req.body);
    res.status(ResponseStatus.SUCCESS).json(response.data);
  } catch (error) {
    console.error(error); 
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'No jalo papi, que quieres que haga??' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; 
    await axios.delete(`${API_URL}/${userId}`);
    res.status(200).json({ message: `No me quiero ir señor Stark :-(  Usuario con ID ${userId} borrado. ` });

  } catch (error) {
    console.error(error);
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'Si sabes que el asesinato está penado rey???' });
  }
};



module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};