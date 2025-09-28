const userService = require("./user.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerHandler = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Email or Password bị trống!" });
    }

    const user = await userService.registerUser({ email, name, password });
    res.status(201).send(user);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).send({ message: "Existed Email" });
    }

    console.log(error);
    res.status(500).send({ message: "Lỗi server nội bộ!" });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .send({ message: "Email hoặc mật khẩu không đúng." });
    }

    const payload = { id: user.id, email: user.email, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Lỗi server nội bộ." });
  }
};

const getUsersHandler = async (req, res) => {
  const users = await userService.getAllUsers();
  res.send(users);
};

module.exports = {
  registerHandler,
  loginHandler,
  getUsersHandler,
};
