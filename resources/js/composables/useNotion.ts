import axios from 'axios';

const useNotion = () => {
  const show = async (id: string) => {
    console.log('show', id);
    axios.get(`/api/v1/fetch/notion/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  return {
    show,
  };
};
export default useNotion;
