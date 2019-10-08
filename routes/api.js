module.exports = (app) => {
  const event = require('../controllers/api/event');
app.post('/api/event', event.create);
}
