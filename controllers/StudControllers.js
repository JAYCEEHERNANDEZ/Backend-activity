import * as studentModel from "../models/StudModels.js";

export const fetchstudents = async (req, res) => {
    try {
        const students = await studentModel.getstudents();
        res.status(200).json({success: true, message: students });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}