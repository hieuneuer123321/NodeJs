const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "movieList.json"
);

module.exports = class Movies {
  constructor() {}
  static getAllMovies(callback) {
    fs.readFile(p, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
  // array.sort(function (a, b)). Trong đó function
  // (a, b) (không bắt buộc) là callback để bạn tùy
  // chỉnh thứ tự sắp xếp các phần tử trong mảng.
  // Tham số a, b là một cặp phần tử trong mảng.
  //  Callback trả về >= 0 thì a và b sẽ không đổi chỗ,
  //   trả về < 0 thì a và b sẽ đổi chỗ cho nhau.
  static getPageMovies(page, callback) {
    fs.readFile(p, (err, data) => {
      if (err) {
        callback(1, null);
      } else {
        if (!page) page = 1;
        const response = {};
        // số phim trên 1 trang là 20
        const moviesPage = 20;
        //tạo 1 mẳng mới chứ phần tử mảng cũ tránh kiểu dữ liệu
        //tham chiếu của mãng và sắp xếp lại mảng
        const moviesArr = [...JSON.parse(data)];
        moviesArr.sort((a, b) => b.popularity - a.popularity);
        // số phần tử trong mảng
        const moviesAllItem = moviesArr.length;
        // tổng số trang = tổng phẩn tử / số phim trên 1 trang
        const totalPage = Math.floor(
          (moviesAllItem / moviesPage) % 2 === 0
            ? moviesAllItem / moviesPage
            : moviesAllItem / moviesPage + 1
        );
        // lọc ra số phim theo page là param truyền vào
        let moviesInPage;
        if (page === 1) {
          moviesInPage = moviesArr.slice(0, 20);
        } else {
          const start = page * moviesPage - moviesPage;
          console.log(start);
          const end = start + moviesPage;
          moviesInPage = moviesArr.slice(start, end);
        }
        // slice cắt mảng từ phần tử thứ page -1 dến page - 1 + moviesPage
        response.results = [...moviesInPage];
        response.page = page;
        response.total_pages = totalPage;
        callback(response);
      }
    });
  }
};
