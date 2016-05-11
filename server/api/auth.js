module.exports = app => {
  app.get('/api/user', (req, res) => {
    res.json({
      user: 'eddie',
      email: 'eddie@eddiewang.me',
    });
  });
};
