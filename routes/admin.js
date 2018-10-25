var router = require('koa-router');

//首页
router.get('/',async(ctx)=>{
    let title="Clown博客";

    await ctx.render('index',{
        title,
        name:'张三'
    });
});

module.exports=router.routes();