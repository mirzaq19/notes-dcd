const getData = () => {
  return [
    {
      id: 1,
      title: 'Babel',
      body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
      archived: false,
      createdAt: '2023-05-14T04:27:34.572Z',
    },
    {
      id: 2,
      title: 'Webpack',
      body: 'Webpack merupakan tools open-source yang berfungsi untuk mengelola dependensi JavaScript. Webpack akan membaca semua file JavaScript yang kita buat, kemudian membuat dependency graph berdasarkan keseluruhan aplikasi kita. Setelah itu, Webpack akan mengemas semua file JavaScript tersebut menjadi satu file.',
      archived: false,
      createdAt: '2023-06-13T04:27:34.572Z',
    },
    {
      id: 3,
      title: 'ESLint',
      body: 'ESLint merupakan tools open-source yang digunakan untuk menganalisis kode JavaScript. ESLint akan mengecek kode JavaScript yang kita buat apakah ada kesalahan atau tidak. Jika ada kesalahan, ESLint akan memberikan laporan error.',
      archived: false,
      createdAt: '2023-07-12T04:27:34.572Z',
    },
    {
      id: 4,
      title: 'Prettier',
      body: 'Prettier merupakan tools open-source yang digunakan untuk memformat kode JavaScript. Prettier akan membaca kode JavaScript yang kita buat, kemudian memformatnya sesuai dengan aturan yang telah ditentukan.',
      archived: true,
      createdAt: '2023-08-11T04:27:34.572Z',
    },
    {
      id: 5,
      title: 'React',
      body: 'React merupakan library open-source yang digunakan untuk membangun antarmuka pengguna (user interface/UI) pada aplikasi web. React dibuat oleh Jordan Walke, seorang software engineer dari Facebook. React pertama kali diterapkan pada News Feed Facebook pada 2011 dan kemudian pada Instagram pada 2012.',
      archived: true,
      createdAt: '2023-09-10T04:27:34.572Z',
    },
    {
      id: 6,
      title: 'React Router',
      body: 'React Router merupakan library open-source yang digunakan untuk membuat aplikasi React yang memiliki banyak halaman. React Router akan memanipulasi URL pada browser sehingga ketika URL berubah, React Router akan memastikan komponen yang sesuai dengan URL ditampilkan pada halaman tersebut.',
      archived: true,
      createdAt: '2023-10-09T04:27:34.572Z',
    },
  ]
}

export default getData
