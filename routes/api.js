module.exports = (app) => {
  const event = require('../controllers/api/event');
  const booking = require('../controllers/api/booking');
  const user = require('../controllers/api/user');
app.post('/api/event', event.create);
app.get('/api/events', event.get);
app.post('/api/user/create', user.create);
app.post('/api/user/login', user.login);
}
