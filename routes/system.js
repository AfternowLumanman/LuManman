var router=require('koa-router')();

//首页
router.get('/',async(ctx)=>{

    let includeHtml="user/";

    await ctx.render('index',{
        title
    });
});

module.exports=router.routes();