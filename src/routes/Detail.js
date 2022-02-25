import { useEffect } from "react";
import  { useParams }  from "react-router-dom";
// useParams 함수를 사용하면 react router는 바로 이 (id)변수의 값을 넘겨줌

function Detail() {
  const {id} = useParams();
  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return<h1>Detail</h1>;
}
export default Detail;

// await는 async 함수 내부에 있지 않으면 사용불가 

// gh-pages는 결과물을 github pages에 업로드 할수 있게 해주는 나이스한패키지