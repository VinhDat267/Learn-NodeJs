const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

const registerUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = await prisma.user.create({
    data: {
      email: userData.email,
      name: userData.name,
      password: hashedPassword,
    },
  });

  delete user.password;
  return user;
};

const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

const getAllUsers = async () => {
  return prisma.user.findMany({
    // Bỏ qua trường password khi truy vấn
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
    },
  });
};

module.exports = { registerUser, findUserByEmail, getAllUsers };
