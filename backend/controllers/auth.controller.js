import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match"});
        }

        const user = await User.findOne({userName});

        if(user) {
            return res.status(400).json({error:"Username already exists"});
        }

        //HASH PASSWORDD HERE

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password,
            confirmPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        });

    } catch (error) {
        console.log("Error in singup controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}