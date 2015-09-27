/* (c) 2015 Ari Porad. MIT License: ariporad.mit-license.org */
const http = require('http');
const koa = require('koa');
const koaRouter = require('koa-router');

module.exports.start = (port) => {
  const app = koa();
  const router = koaRouter();

  router.get('/', function* getRoot(next) {
    this.body = { ok: true };
  });

  app
    .use(formatResponse())
    .use(router.routes())
    .use(router.allowedMethods());

  const server = http.createServer(app.callback());
  return new Promise((done) => {
    server.listen(port, () => done({ app, server }));
  });
};
