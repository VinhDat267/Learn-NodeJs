// src/modules/dashboard/dashboard.controller.js

// Nhập service
const dashboardService = require("./dashboard.service");

async function getDashboardHandler(req, res) {
  try {
    console.log("Controller: Đã nhận request, đang gọi service...");
    const data = await dashboardService.getDashboardData();
    console.log("Controller: Service đã xử lý xong, gửi response.");

    // Gửi dữ liệu về cho client với status code 200 (OK)
    res.status(200).send(data);
  } catch (error) {
    console.error("Controller: Có lỗi xảy ra", error);
    // Nếu có lỗi, gửi về status code 500 (Internal Server Error)
    res.status(500).send({ message: "Lỗi hệ thống" });
  }
}

module.exports = { getDashboardHandler };
