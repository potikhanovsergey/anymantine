import { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import archiver from "archiver"

const publicFolderPath = path.join(process.cwd(), "public")

export default function archiveTheme(req: NextApiRequest, res: NextApiResponse) {
  const archive = archiver("zip")
  const theme = req.query.theme as string

  // Set the name of the output archive file
  const outputFileName = `${theme}.zip`

  const folderToArchive = path.join(publicFolderPath, `/themes/${theme}`)

  // Set the appropriate content type for the response
  res.setHeader("Content-Type", "application/zip")
  res.setHeader("Content-Disposition", "attachment;filename=" + outputFileName)

  // Pipe the output stream to the archiver
  archive.pipe(res)

  // Append all files and subdirectories from the folder to the archive
  archive.directory(folderToArchive, false)

  // Finalize the archive
  archive.finalize()
}
