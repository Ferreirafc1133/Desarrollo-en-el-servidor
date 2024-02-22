const User = require('./../models/userMod');
const ResponseStatus = require('./../utils/response-status');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(ResponseStatus.SUCCESS).json(users);
  } catch (error) {
    console.error(error); 
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'No jalaron los usuarios Pa' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(ResponseStatus.NOT_FOUND).json({ message: 'No existe papi' });
      return;
    }
    res.status(ResponseStatus.SUCCESS).json(user);
  } catch (error) {
    console.error(error); 
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'Ocurrió un error al buscar el usuario' });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(ResponseStatus.SUCCESS).json(savedUser);
  } catch (error) {
    console.error(error); 
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'Mamaste' });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(ResponseStatus.SUCCESS).json(updatedUser);
  } catch (error) {
    console.error(error); 
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'No se pudo actualizar el usuario' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(ResponseStatus.SUCCESS).json({ message: 'Baja confirmada' });
  } catch (error) {
    console.error(error);
    res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message: 'Moriste tu' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
