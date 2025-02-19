//axios import buraya gelecek
import axios from "axios";
var benimIP;
// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
import "babel-core/register";
//import "babel-polyfill";
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

async function geoAPI() {
  await ipAdresimiAl();
  axios
    .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
    .then((response) => {
      console.log(response);
      const card1 = createCard(response.data);
      cardsDOM.append(card1);
    });
}
geoAPI();

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
const cardsDOM = document.getElementsByClassName("cards")[0];

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
		<img src={ülke bayrağı url} />
		<div class="card-info">
			<h3 class="ip">{ip adresi}</h3>
			<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
			<p>Enlem: {enlem} Boylam: {boylam}</p>
			<p>Şehir: {şehir}</p>
			<p>Saat dilimi: {saat dilimi}</p>
			<p>Para birimi: {para birimi}</p>
			<p>ISP: {isp}</p>
		</div>
    </div>
*/

function createCard(data) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const bayrakImg = document.createElement("img");
  bayrakImg.src = "https://flagsapi.com/TR/flat/64.png";

  const infoDiv = document.createElement("div");
  infoDiv.className = "card-info";

  const ipH3 = document.createElement("h3");
  ipH3.className = "ip";
  ipH3.textContent = data.sorgu;

  const ulkeP = document.createElement("p");
  ulkeP.className = "ulke";
  ulkeP.textContent = `${data["ülke"]} (${data["ülkeKodu"]})`;

  const enlemBoylamDiv = document.createElement("div");
  enlemBoylamDiv.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;

  const sehirDiv = document.createElement("div");
  sehirDiv.textContent = data["şehir"];

  const saatDilimiDiv = document.createElement("div");
  saatDilimiDiv.textContent = data.saatdilimi;

  const paraBirimiDiv = document.createElement("div");
  paraBirimiDiv.textContent = data.parabirimi;

  const ispDiv = document.createElement("div");
  ispDiv.textContent = data.isp;

  infoDiv.append(
    ipH3,
    ulkeP,
    enlemBoylamDiv,
    sehirDiv,
    saatDilimiDiv,
    paraBirimiDiv,
    ispDiv
  );

  cardDiv.append(bayrakImg, infoDiv);

  return cardDiv;
}

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
