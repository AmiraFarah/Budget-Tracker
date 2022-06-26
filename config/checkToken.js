const jwt= require('jsonwebtoken')

module.exports = (req,res,next)=>{
    //check for token being sent in headerws or query parameter
    let token = req.get('Authorization') || process.env.TESTING_TOKEN
    if(token)
    {
        //we need a space for our token string between the word breaer and our token
        token=token.replace('Bearer ','')

        jwt.verify(token, process.env.SECRET, (err,decoded)=>{
            req.user = err ? null : decoded.user

            //expiration
            req.exp = err ? null : new Date(decoded.exp*1000)
        })
        next()
    }
    else {
        //no token was sent in headers
        req.user = null 
        next()
    }
}