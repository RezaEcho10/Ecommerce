import nodemailer from 'nodemailer'
import User from '../models/user.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

//function to send Verification Email to the user
const sendVerificationEmail = async (email, verificationToken) => {
    //Create a nodemailer Transport
    const transport = nodemailer.createTransport({
        //configure the email service
        service: "gmail",
        auth:{
            user: "rezah1377m@gmail.com",
            pass: ""
        }
    })

    //compose the email message
    const emailOptions = {
        from: "amazon.com",
        to: email,
        subject: "Email Verification",
        text: `Please click on the verification link : http://localhost:1010/verify/${verificationToken}`
    }

    //send the email
    try {
        await transport.sendMail(emailOptions)
    } catch (err) {
        console.log("Error sending verification email", err);
    }
}

export const Signup = async (req, res) => {
    try {
        const {name, email, password} = req.body

        //Check if the email is already registered
        const existngUser = await User.findOne({email})
        if(existngUser){
            return res.status(200).json({message: "Email already registered"})
        }

        //Create a new user
        const newUser = new User({name, email, password})

        //Generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex")

        //save the user to the database
        await newUser.save()

        //Send verification email to the user
        sendVerificationEmail(newUser.email.newUser.verificationToken)
    } catch (err) {
        console.log('Error Registering User');        
        res.status(500).json({message: "Registeration failed"})
    }
}

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString('hex')
    return secretKey
}

const secretKey = generateSecretKey()

export const Login = async (req, res) => {
    try {
        const {email, password} = req.body

        //Check if the email is already login
        const user = await User.findOne({email})
        if(!user){
            res.status(401).json({message: "Invalid email and password"})
        }

        // Check if the password is correct
        if(user.password != password){
            res.status(401).json({message: "Invalid password"})
        }

        const token = jwt.sign({userId: user._id}, secretKey)

        res.status(200).json({token})
    } catch (err) {
        
    }
}