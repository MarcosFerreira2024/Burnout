"use server"

export const uploadToCloud = async (fileData: File) => {

    try {
        const file = fileData

        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', "cloud_preset_Burnout")
        data.append('cloud_name', "dlf9xex9z")



        const response = await fetch(`https://api.cloudinary.com/v1_1/dlf9xex9z/image/upload`, {
            method: 'POST',
            body: data
        })
        if (response.status !== 200) throw new Error("Tipo de arquivo incompátivel")
        const json = await response.json()



        return json.url

    } catch (e) {
        return new Error(e.message)
    }
}