import axios from 'axios';

const useNotion = () => {
  const show = async (id: string) => {
    /// https://notion-page-to-html-api.vercel.app/html?id=4d64bbc0634d4758befa85c5a3a6c22f
    await axios.get(`https://notion-api.splitbee.io/v1/page/${id}`).then((res) => {
      console.log(res.data);
    });
    await axios.get(`https://notion-api.splitbee.io/v1/page/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  return {

  };
};
export default useNotion;
