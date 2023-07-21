// class for koa:
const Koa = require('koa');
// import body parser
const bodyParser = require('koa-bodyparser');
const controller = require('./controller')

const app = new Koa();
// log requst URL;
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
// add body parser
app.use(bodyParser())
app.use(controller())
// listen at 3000
app.listen(3000);
console.log('app started at port 3000...');
