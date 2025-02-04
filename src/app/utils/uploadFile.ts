"use server"
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config()
const cloudName = "dlf9xex9z";
export const uploadToCloud = async (fileData: File) => {

    try {
        const file = fileData

        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', "cloud_preset_Burnout")
        data.append('cloud_name', cloudName)



        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: data
        })
        if (response.status !== 200) throw new Error("Tipo de arquivo incompátivel")
        const json = await response.json()




        return {
            url: json.secure_url,
            public_id: json.public_id
        };

    } catch (e) {
        return new Error(e.message)
    }




}




const apiSecret = process.env.MY_API_SECRET!

const apiKey = process.env.MY_API_KEY!

export const deleteFromCloud = async (public_id: string) => {
    try {
        const timestamp = Math.floor(Date.now() / 1000);

        const stringToSign = `public_id=${public_id}&timestamp=${timestamp}`;

        const signature = crypto.createHash("sha1").update(stringToSign + apiSecret).digest("hex");

        const formData = new URLSearchParams();
        formData.append("public_id", public_id);
        formData.append("api_key", apiKey);
        formData.append("timestamp", timestamp.toString());
        formData.append("signature", signature);

        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
            method: "POST",
            body: formData,
        });



        const json = await response.json();
        if (!response.ok) throw new Error(json.message);


        return json;
    } catch (error) {
        console.error("Erro ao deletar:", error);
    }
};