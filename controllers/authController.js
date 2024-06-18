import userModel from "../models/userModel.js";

export const loginController = async (req, res) => {
  try {
    const {u_u_email,u_pwd} = req.body;
    // find user by email
    const user = await userModel.findOne({u_u_email})
    console.log(user)
    if(!user){
        return res.status(404).json({
            status:"Failed",
            message: "User doesn't exist!"
        })
    }
    if(u_pwd !== user.u_pwd){
       return res.status(400).json({
            status:"Failed",
            message:"Password invalid"
        })
    }
    return res.status(200).json({
        status:"success",
        data:{
            user,
        }
    })
  } catch (error) {
    return res.status(404).json({
      status: "Failed",
      message: error.message,
    });
  }
};

export const registerController = async (req, res) => {
  try {
    const { u_name, u_pwd, u_u_email, u_addr, u_u_contact } = req.body;
    const user = await userModel.create({
      u_name,
      u_pwd,
      u_u_email,
      u_addr,
      u_u_contact,
    });
    return res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    return res.status(404).json({
      status: "Failed",
      message: error.message,
    });
  }
};


