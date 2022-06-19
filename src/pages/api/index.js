
const handler = (req, res) => {

  res.status(200)
     .json({ name: 'this is server root...' });

}

export default handler;