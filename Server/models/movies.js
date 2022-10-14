const e = require("express");
const fs = require("fs");
const path = require("path");
const { isArray } = require("util");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "movieList.json"
);
const pGener = path.join(
  path.dirname(require.main.filename),
  "data",
  "genreList.json"
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
  static getPageMoviesTrend(page, callback) {
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
  static getPageMoviesTopRate(page, callback) {
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
        moviesArr.sort((a, b) => b.vote_average - a.vote_average);
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
  static getPageMoviesDiscover(genre, page, callback) {
    fs.readFile(p, (err, data) => {
      if (err) {
        callback(null);
      } else {
        if (!page) page = 1;
        const response = {};
        // số phim trên 1 trang là 20
        const moviesPage = 20;
        //tạo 1 mẳng mới chứ phần tử mảng cũ tránh kiểu dữ liệu
        const moviesArr = [...JSON.parse(data)];
        // lọc ra các phim có genre_ids truyền vào
        /////////////////
        const t = moviesArr.filter((movie) => {
          return !movie.genre_ids;
        });
        console.log(t);
        ///////////////////////
        const moviesArrDiscover = moviesArr.filter((movie) => {
          // tạo 1 mảng chứa các genre_ids của từng phim
          let genre_idsArr = [];
          // nếu phim đó có thuộc tính genre_ids
          if (movie.genre_ids) {
            genre_idsArr = movie.genre_ids;
            // ngược lại nếu phim có có genre_ids mà có known_for
          } else if (movie.known_for) {
            if (movie.known_for.length == 0) {
              genre_idsArr = [];
            } else {
              //dữ liệu có dang known_for[obj,obj,{..., genre_ids:[]}]
              for (const movieKnown_for of movie.known_for) {
                for (const i of movieKnown_for.genre_ids) {
                  genre_idsArr.push(i);
                }
              }
            }
          }
          return genre_idsArr.includes(Number(genre));
        });
        // số phần tử trong mảng
        const moviesAllItem = moviesArrDiscover.length;
        if (moviesAllItem === 0) {
          response.results = [];
          response.page = 0;
          response.total_pages = 0;
        } else {
          // tổng số trang = tổng phẩn tử / số phim trên 1 trang
          const totalPage = Math.floor(
            (moviesAllItem / moviesPage) % 2 === 0
              ? moviesAllItem / moviesPage
              : moviesAllItem / moviesPage + 1
          );
          // lọc ra số phim theo page là param truyền vào
          let moviesInPage;
          if (page === 1) {
            moviesInPage = moviesArrDiscover.slice(0, 20);
          } else {
            const start = page * moviesPage - moviesPage;
            console.log(start);
            const end = start + moviesPage;
            moviesInPage = moviesArrDiscover.slice(start, end);
          }
          // slice cắt mảng từ phần tử thứ 0 dến 20 (lấy ptu index= 0 và k lấy ptu index= 20)
          response.results = [...moviesInPage];
          response.page = Number(page);
          response.total_pages = totalPage;
        }
        /// lấy ra tên thể loại theo id thể loại truyền vào
        fs.readFile(pGener, (err, data) => {
          if (err) response.genre_name = "";
          else {
            const genre_Arr = JSON.parse(data);
            const genreName = genre_Arr.find((genreid) => {
              return genreid.id == genre;
            });
            response.genre_name = genreName ? genreName.name : "";
            callback(response);
          }
        });
      }
    });
  }
};
