import nc from 'next-connect'
import Project from '../../../models/ProjectsModel';
import db from '../../../utils/dbConnect'
import cloudinary from 'cloudinary'
const handler = nc()
cloudinary.config({
  cloud_name: 'dtmjc8y9z',
  api_key: '379966828288349',
  api_secret: 'a41LSvU3XXAJuQOLxorhOVFPauw',
});
handler.get(async (req, res) =>
{
  await db.connect();
  try
  {
    const projects = await Project.find({});
    res.status(201).json({
      success: true,
      projects,
    });

  } catch (error)
  {
    res.status(500).json({
      success: false,
      message: error.message
    })
    
  }
  await db.disconnect();
})

handler.post(async (req, res) =>
{
  await db.connect();
  try
  {

    // image
    let images = [];

    if (typeof req.body.images === "string")
    {
      images.push(req.body.images);
    } else
    {
      images = req.body.images;
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++)
    {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "portfolio",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({
      success: true,
      project,
    });
  } catch (error)
  {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
  await db.disconnect();
})

export default handler