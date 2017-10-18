# test_mocha_supertest
1. Add thư viện: mocha --dev : Để test  
  https://mochajs.org/
  
2. require thư viện: assert của node để so sánh có bằng nhau không => Tự động quăng biệt lệ
  https://nodejs.org/api/assert.html
  
3. Thêm vao package.json sử dụng nodemon để auto chạy giống reload
  "scripts": {
    "test": "nodemon --exec mocha"
  },
  
4. Test với bất đồng bộ thì thêm hàm done()

5. Test với Async func Promise thêm async trước () và bỏ done().

6. Thêm --recursive vào để test được những file nằm trong thư mục con của test
  "scripts": {
    "test": "nodemon --exec mocha --recursive"
  },
  https://mochajs.org/: Search Option...
  
7. Thêm file test_helper.js ngoài thư mục test thêm code xóa all document in collection ở all các file test với collection Products. Có thể xóa nhiều cái khác.

8. Test file index.js (Test Controller): Test coi các router có hoạt động đúng chức năng của nó không?

Cài gói: supertest
  https://www.npmjs.com/package/supertest
   -Chủ yếu dùng để thêm, xóa, sửa trong csdl mà không cần chạy server nodeJS mà chỉ cần chạy test để kiểm chứng thôi.
