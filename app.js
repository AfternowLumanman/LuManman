const Koa=require('koa'),
    router=require('koa-router')(),
    static=require('koa-static'),
    render=require('koa-art-template'),
    path=require('path'),
    bodyParser=require('koa-bodyparser');

//引入模块
var system=require('./routes/system.js');

//实例化
var app=new Koa();

//模板引擎设置
render(app, {
    root: path.join(__dirname, 'views'),   //视图的位置
    extname: '.html', //后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式
});

//使用bodyParser
app.use(bodyParser());

//指定静态文件
app.use(static(path.join(__dirname, 'static')));

//错误处理中中间件
app.use(async (ctx,next)=>{
    next();
    if(ctx.status!=200){
        let status=ctx.status;
        await ctx.render('system/error',{
            status
        });
    }
})

//配置层级路由
router.use(system);

//启动路由
app.use(router.routes()).use(router.allowedMethods());

//设定端口
app.listen(8081);