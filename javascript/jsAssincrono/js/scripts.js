const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');//html pegando os id
const catImg = document.getElementById('cat');//html pegando os id

const getCats = async ()=>{
    // try{
    //     const data = await fetch(BASE_URL);
    //     const json = await data.json();

    //     return json.webpurl;
    // } catch (e) {
    //     console.log(e.massage);
    // } ou pode usar
    const data = await fetch(BASE_URL)
      .then((res) => res.json())
      .catch((e) => console.log(e));
    return data.webpurl;
    
};
const loadImg = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click',loadImg);//quando clicar aparecer uma imagem

loadImg();//iniciar a pagina com uma imagem

