var router = require('koa-router');

//首页
router.get('/',async(ctx)=>{

    let title="Clown博客";

    //koa中没法直接设置中文的cookie
    title=new Buffer(title).toString('base64');
    ctx.cookies.set('title',title,{
        maxAge:60*1000*60
    });

    await ctx.render('index',{
        title,
        name:'张三'
    });
});


//首页
router.get('/',async(ctx)=>{

    var data=ctx.cookies.get('title');

    var userinfo=new Buffer(data, 'base64').toString();

    //koa中没法直接设置中文的cookie
    title=new Buffer(title).toString('base64');
    ctx.cookies.set('title',title,{
        maxAge:60*1000*60
    });

    await ctx.render('index',{
        title,
        name:'张三'
    });
});


module.exports=router.routes();