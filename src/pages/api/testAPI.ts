import axios from "axios";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${BASE_URL}/api/users/1`)
    res.status(200).json(response.data);
}

export default handler;