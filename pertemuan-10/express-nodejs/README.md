# Simple CRUD projects example using Nodejs and Express

## Usage

- install the necessary package by typing `npm install` in your command prompt
- run the app by typing `npm run dev`
- kill the app by typing `Control-C`

## HOW THIS APP WORKS

- Install dulu aplikasi [Postman](https://www.postman.com/) atau [Thunder Client (Vscode Extension)](https://www.thunderclient.com/) agar dapat menggunakan api dari aplikasinya
- file `app.js` menjalankan library express agar aplikasi dapat mengekspos api dan mendengar/merespon semua request yang dilakukan oleh user
- file `routes/products.js` dipakai sebagai tempat menyimpan url yang bisa dipakai user untuk menggunakan api dan perintah/fungsi yang harus dijalankan di file `controllers/productController.js`
- file `controllers/productController.js` dipakai sebagai tempat menyimpan semua fungsi yang akan dipakai oleh user setelah user menjalankan perintah melalui aplikasi/[Postman](https://www.postman.com/)

## REFERENCE

- [Postman](https://www.postman.com/)
- [Thunder Client (Vscode Extension)](https://www.thunderclient.com/)
- [CRUD](https://id.wikipedia.org/wiki/Create,_read,_update_and_delete)
- [HTTP Request Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)
- [HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
