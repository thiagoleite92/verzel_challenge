const app = require('./server');

const PORT = 3001;

app.listen(PORT, () => `Online on port ${PORT}`);