const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const kronoRoute = require('./router/kronologi')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz ExpressJS API by peika');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use('/api/kronologi', kronoRoute)

app.listen(port, () => console.log(`app listening on port http://localhost:${port}!`));