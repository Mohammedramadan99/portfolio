import nc from 'next-connect'
import Order from '../../../models/OrdersModel';
import db from '../../../utils/dbConnect'
import cloudinary from 'cloudinary'
const handler = nc()

handler.get(async (req, res) =>
{
  await db.connect();
  try
  {
    const orders = await Order.find({});
    res.status(201).json({
      success: true,
      orders,
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
    const order = await Order.create(req.body);
    res.status(201).json({
      success: true,
      order,
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