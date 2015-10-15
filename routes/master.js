module.exports = function(app){

  app.use('/', require('./index'));
  //app.use('/test', require('./test'));
  app.use('/tennis', require('./tennis'));

}
