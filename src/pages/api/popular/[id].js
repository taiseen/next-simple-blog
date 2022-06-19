import data from "../db/data";

const handler = (req, res) => {

    const { id } = req.query; // get [variable data] from url 
    const { Popular } = data;

    // find specific single post from Posts[array] db
    const singlePost = Popular.find(post => post.id == id);

    if (singlePost) {
        return res.status(200).json(singlePost);
    } else {
        return res.status(404).json({error : 'Sorry! No Post 🔎 Found...'});
    }
}

export default handler;