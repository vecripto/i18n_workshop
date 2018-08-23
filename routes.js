'use strict';

module.exports = (app, i18n) => {
  app.get('/', function (req, res) {
    //let's validate that the cookie exists
    if (!!req.cookies.i18n){
      res.setLocale(req.cookies.i18n);
    }
    res.render('main', {
    i18n: res
    })
  });

  app.get('/:id', function (req, res) {
      console.log(res);
    res.cookie('i18n', req.params.id);
    res.redirect('/')
  });


}
