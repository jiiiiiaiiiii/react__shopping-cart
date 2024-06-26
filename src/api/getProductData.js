const request = async (url) => {
  try {
    const respose = await fetch(url);
    if (respose.ok) {
      const data = await respose.json();
      return data;
    }
    const errData = await respose.json();
    throw errData;
  } catch (e) {
    console.log(e);
  }
};

// 비동기식으로 데이터를 가져오는 함수(함수앞에 async를 붙여주고 내부에서 await를 사용해야함)
// fetch API를 사용하여 데이터를 가져옴

const getProductData = async () => {
  const result = await request('/productData.json');
  return result;
};

export default getProductData;