import pool from "../config/db.js";

export const getstudents = async () => {
    const [rows] = await pool.query("SELECT * FROM tblstudent");
    return rows;
    }


