const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let books = [
    {
        "id": 1,
        "judul": "Laskar Pelangi",
        "pengarang": "Andrea Hirata",
        "penerbit": "Bentang Pustaka",
        "tahun_terbit": 2005
    },
    {
        "id": 2,
        "judul": "Bumi Manusia",
        "pengarang": "Pramoedya Ananta Toer",
        "penerbit": "Hasta Mitra",
        "tahun_terbit": 1980
    },
    {
        "id": 3,
        "judul": "Negeri 5 Menara",
        "pengarang": "Ahmad Fuadi",
        "penerbit": "Gramedia Pustaka utama",
        "tahun_terbit": 2009
    },
    {
        "id": 4,
        "judul": "Supernova: Ksatria, Puteri, dan Bintang Jatuh",
        "pengarang": "Dewi Lestari (Dee)",
        "penerbit": "Truedee Books",
        "tahun_terbit": 2001
    },
    {
        "id": 5, 
        "judul": "Sapiens: A Brief History of Humankind",
        "pengarang": "Yuval Noah Harari",
        "penerbit": "Harper",
        "tahun_terbit": 2015
    }
];

app.get('/book', (req, res) => {
    res.json(books);
});

app.post ('/book', (req, res) => {
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push (newBook);
    res.status (201) . json (newBook);
});


app.listen(port, () => {
    console.log (`Server berjalan di http://localhost:${port}`);
});