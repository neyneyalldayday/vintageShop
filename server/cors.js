module.exports = (req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://the-vintage-shop.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }
    next();
}