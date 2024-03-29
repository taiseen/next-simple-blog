// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// this is main url for backend data connection
import useSWR from "swr";


// const baseURL = 'http://localhost:3000/'
const baseURL = 'https://next-simple-blog-bd.vercel.app/'


const response = (...url) => fetch(...url).then(res => res.json());


const fetcher = (endPoint) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error } = useSWR(`${baseURL}${endPoint}`, response);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

export default fetcher;