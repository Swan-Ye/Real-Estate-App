import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        //HASH THE PASSWORD

        const hashadpassword = await bcrypt.hash(password, 10)
        console.log(hashadpassword)

        //CREATE USER
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashadpassword,
            }
        })

        console.log(newUser)

        res.status(201).json({ message: "User created successfully" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Failed to create user!" })
    }

}

export const login = (req, res) => {
    //db operations
}

export const logout = (req, res) => {
    //db operations
}