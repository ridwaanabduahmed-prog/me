import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server wuu shaqaynayaa 🚀');
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: "Ahmed" },
        { id: 2, name: "Amina" }
    ]);
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    res.json({
        message: "User waa la diiwaangeliyay",
        user
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});