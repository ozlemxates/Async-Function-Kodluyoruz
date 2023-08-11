import axios from "axios";

const myFunction = async (Number) => {
    try {
        const user = await axios("https://jsonplaceholder.typicode.com/users/1");
        const userData = user.data;

        const post = await axios("https://jsonplaceholder.typicode.com/posts?userId=1");
        const postData = post.data[0];

        const combined = {
            user: userData, 
            post: postData
        };

        return combined;
        } catch (error) {
            console.error(error);
        }
}


export default myFunction;


