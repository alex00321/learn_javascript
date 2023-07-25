var products = [{
    name:'iPhone',
    price:'6999'
},{
    name:'Kindle',
    price:'999'
}];

module.exports = {
    'GET /api/products':async(ctx,next)=>{
        ctx.response.type = 'application/json';
        ctx.response.body = {
            products:products
        };
    }
};