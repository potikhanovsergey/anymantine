import { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import { createReadStream, existsSync } from "fs"
import { themes } from "public/themes"

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(400).json({ message: "Not existing endpoint" })
    return
  }

  //Check if the user is signed in
  // if (!req.session?.credentials?.userId) {
  //     res.status(401).json({message: 'Access denied!'})
  //     return
  // }

  try {
    const { theme } = req.query

    //If no file name, return 404
    if (!theme || !process.env.PROTECTED_FILES_FOLDER) {
      res.status(404).json({ message: "No theme or folder provided" })
      return
    }

    if (!Object.keys(themes).includes(theme as string)) {
      res.status(404).json({ message: "There is no theme with such name available" })
      return
    }

    const filePath = path.join(process.env.PROTECTED_FILES_FOLDER, theme as string, "index.tsx")

    if (!existsSync(filePath)) {
      res.status(404).json({ message: "Filepath not found " + filePath })
      return
    }

    //Set the proper headers
    res.setHeader("Content-Type", "application/zip")
    // res.setHeader("Content-Disposition", `attachment; filename=${theme}Theme.tsx`)

    //Create a read stream and pipe to the response
    createReadStream(filePath).pipe(res)
  } catch (exception) {
    //Conceal the exception, but log it
    console.warn(exception)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export default handler
