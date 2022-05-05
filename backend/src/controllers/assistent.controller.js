const Assist = require('../models/assistent');
const jwt = require('jsonwebtoken');
const { PasswordMail } = require('../utils/mail');

// -------------------------- authenticate --------------------------

exports.authenticate = async(req, res) => {

    const { email, password } = req.body;

    !email || !password ? res.status(400).json({ message: 'Email and password are required' }) : null;

    const foundAssist = await Assist.findOne({ email, password });
    
    if (!foundAssist) {
        res.status(404).send({ message:'user not found !' })
    }else{

        const token = jwt.sign(
            { id: foundAssist._id, email:foundAssist.email, password:foundAssist.password },
            `${process.env.JWT_SECRET_KEY}`,
            {
                expiresIn: "1h",
            }
        );
        
        res.status(200).send({token, id:foundAssist._id, email:foundAssist.email, password:foundAssist.password, message: "You logged in successfully"});
    }

}

// -------------------------- Create assistent --------------------------

exports.createAssist = async(req,res) =>{

    const { email, name } = req.body;

    if(!email || !name)
        return res.status(400).json({ message: "Please fill all the fields" }) // input validation

    let password = Math.random().toString(20).substring(2, 10) //generate password

    try{

        const assistentFound = await Assist.findOne({email})

        if(assistentFound) 
            return res.status(400).json({ message: "This mail is already used" }) // check if the email already existed
        
        
        const newAssist = await Assist.create({
            email,
            name,
            password: password,
        })

        PasswordMail(email , name , password) //send email
        res.status(200).json({ newAssist })

    }catch(err){
        res.status(400).json({ error: err.message }) // req error
    }
    
}

// -------------------------- Get all assistents --------------------------

exports.fetch = (req,res) =>{
    try {

        Assist.find()
        .then( data => res.status(200).json(data) )

    } catch (error) {

        res.status(404).json({ message: error.message })
        
    }
}

// -------------------------- Delete assistent --------------------------

exports.deleteAssist = (req,res) =>{
    const id = req.params._id;

    Assist.findByIdAndDelete(id)
    .then( data => {
        if(!data) {
            res.status(404).send({
                message: `Assistent not found!`
            });
        }else{
            res.status(200).send({
                message: "Assistent deleted successfully!"
            })
        }
    })

}