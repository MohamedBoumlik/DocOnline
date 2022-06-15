const Admin = require('../models/Admin');
var jwt = require('jsonwebtoken');

// -------------------------- authenticate --------------------------

exports.authenticate = async(req, res) => {

    const { email, password } = req.body;

    !email || !password ? res.status(400).json({ message: 'Email and password are required' }) : null;

    const foundAdmin = await Admin.findOne({ email, password });
    
    if (!foundAdmin) {
        res.status(404).send({ message:'user not found !' })
    }else{

        const token = jwt.sign(
            { id: foundAdmin._id, email:foundAdmin.email, password:foundAdmin.password },
            `${process.env.JWT_SECRET_KEY}`,
            {
                expiresIn: "1h",
            }
        );
        
        res.status(200).send({token, id:foundAdmin._id, email:foundAdmin.email, password:foundAdmin.password, role:"admin", message: "You logged in successfully"});
    }

}