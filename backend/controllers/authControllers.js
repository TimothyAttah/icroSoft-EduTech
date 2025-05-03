import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const authControllers = {
  signUp: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password)
        return res.status(400).json({ msg: 'Please fill in all fields.' });


      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ msg: 'This email already exists.' });

      const hashPassword = await bcrypt.hash(password, 12)

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashPassword
      });

      await newUser.save();

      return res
        .status(201)
        .json({ msg: 'Sign up was successful.', data: newUser });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email)
        return res.status(400).json({ msg: 'Please enter your email' })

      if (!password)
        return res.status(400).json({ msg: 'Please enter your password.' })

      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: 'This email does not exists.' })

      const confirmPassword = await bcrypt.compare(password, user.password)

      if (!confirmPassword)
        return res.status(400).json({ msg: 'Incorrect password' })

      const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, )

      user.password = undefined;

      return res.status(200).json({msg: 'Sign in was successful.', token, user})

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

export default authControllers;
