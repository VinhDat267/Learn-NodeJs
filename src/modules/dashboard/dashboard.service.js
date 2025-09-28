// src/modules/dashboard/dashboard.service.js

// Giả lập một hàm gọi API lấy thông tin người dùng
async function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Kỹ sư Java" }), 500); // Giả lập trễ 0.5s
  });
}

// Giả lập một hàm gọi API lấy đơn hàng
async function getOrders() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 101, item: "Sách Node.js" },
          { id: 102, item: "Sách TypeScript" },
        ]),
      800
    ); // Giả lập trễ 0.8s
  });
}

// Giả lập một hàm gọi API lấy thông báo
async function getNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ count: 5 }), 300); // Giả lập trễ 0.3s
  });
}

// Hàm chính của service: gọi tất cả các hàm trên song song
async function getDashboardData() {
  console.log("Service: Bắt đầu lấy dữ liệu dashboard...");

  // Dùng Promise.all để thực thi các tác vụ I/O song song
  const [user, orders, notifications] = await Promise.all([
    getUserInfo(),
    getOrders(),
    getNotifications(),
  ]);

  console.log("Service: Đã lấy xong tất cả dữ liệu.");

  // Tổng hợp lại thành một đối tượng duy nhất
  return {
    user,
    orders,
    notifications,
  };
}

// Export hàm chính ra ngoài
module.exports = { getDashboardData };
