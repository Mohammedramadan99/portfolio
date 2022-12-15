import nc from 'next-connect'
import Service from '../../../models/ServicesModel';
import db from '../../../utils/dbConnect'

const handler = nc()

handler.get(async (req, res) =>
{
  await db.connect();
  try
  {
    const services = await Service.find();
    res.status(201).json({
      success: true,
      services,
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
    const service = new Service(req.body);
    await service.save();

    res.status(201).json({
      success: true,
      service,
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
handler.delete(async (req, res) =>
{
  await db.connect();
  try
  {
    const service = await Service.findByIdAndDelete(req.query.id);
    res.status(201).json({
      success: true,
      deleted: true,
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
