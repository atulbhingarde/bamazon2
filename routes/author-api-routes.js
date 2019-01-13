// Requiring our models
const db = require('../models');

module.exports = function(app) {

  // GET route for retrieving all authors
  app.get('/api/authors', function(req, res) {

    // Here we add an 'include' property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Article
    db.Author.findAll({
      include: [db.Article]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // GET route for retrieving a single specified author
  app.get('/api/authors/:id', function(req, res) {

    // Here we add an 'include' property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Article
    db.Author.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Article]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST route for adding new authors
  app.post('/api/authors', function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // PUT route for updating authors
  app.put('/api/authors/:id', function(req, res) {
    db.Author.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE route for deleting authors
  app.delete('/api/authors/:id', function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

};
