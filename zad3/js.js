// Funkcja sprawdzająca, czy pole posiada wartość
function validateRequiredField(fieldId, fieldName) {
const value = document.getElementById(fieldId).value;
  if (value.trim() === '') {
    document.getElementById(fieldId).setCustomValidity(`Pole ${fieldName} jest wymagane.`);
    document.getElementById(fieldId).reportValidity();
	}
	else{
	document.getElementById(fieldId).setCustomValidity('');
    document.getElementById(fieldId).reportValidity();
	}
}

// Funkcja sprawdzająca długość znaków
function validatePhone() {
	const value = document.getElementById("tel").value;
	const fieldName = "telefon";
	const minLength = 9;
	const maxLength = 11;
	const phoneRegex = /^[0-9]*$/;
  if (!phoneRegex.test(value)) {
	document.getElementById('tel').setCustomValidity('W tym polu mogą być tylko liczby');
	document.getElementById('tel').reportValidity();
	}
	else if (value.length < minLength || value.length > maxLength) {
    document.getElementById('tel').setCustomValidity(`Pole ${fieldName} powinno mieć od ${minLength} do ${maxLength} znaków.`);
	 document.getElementById('tel').reportValidity();
	}
	else{
	document.getElementById('tel').setCustomValidity('');
    document.getElementById('tel').reportValidity();
	}
}

// Funkcja sprawdzająca poprawność adresu email
function validateEmail() {
	const value = document.getElementById("mail").value;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!emailRegex.test(value)) {
    document.getElementById('mail').setCustomValidity('Podaj poprawny adres email.');
	document.getElementById('mail').reportValidity();
  }
  else{
	document.getElementById('mail').setCustomValidity('');
	document.getElementById('mail').reportValidity(); 
  }
}

// Funkcja sprawdzająca trudność hasła
function validatePassword() {
	const value = document.getElementById("haslo").value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(value)) {
    document.getElementById('haslo').setCustomValidity('Hasło powinno zawierać co najmniej 8 znaków, przynajmniej jedną małą literę, jedną wielką literę i jedną cyfrę.');
	document.getElementById('haslo').reportValidity();
  }
  else{
	document.getElementById('haslo').setCustomValidity('');
	document.getElementById('haslo').reportValidity();
  }
}
// Funkcja sprawdzająca wiek
function validateDate(){
	const value = document.getElementById("data").value;
	const dataUrodzenia = new Date(value);
	const today = new Date();
	const elapsedTime = today - dataUrodzenia;
	if(value.trim()===''){
	document.getElementById('data').setCustomValidity(`Podaj swoją datę urodzenia.`);
    document.getElementById('data').reportValidity();
	}
	else if(elapsedTime < 568025136000){  //sprawdza czy od podanej daty do dzisiaj minęło 568025136000 milisekund, czyli 18 lat
	document.getElementById('data').setCustomValidity('Musisz mieć co najmniej 18 lat.');
	document.getElementById('data').reportValidity();
  }
  else{
	document.getElementById('data').setCustomValidity('');
	document.getElementById('data').reportValidity();
  }
}

//Funkcja sprawdzająca poprawnosć powtórzonego hasła

function validateRepeatPassword(){
	const haslo1 = document.getElementById('haslo').value;
	const haslo2 = document.getElementById('haslo2').value;
	if(haslo1!=haslo2){
	document.getElementById('haslo2').setCustomValidity('Hasła się nie zgadzają.');
	document.getElementById('haslo2').reportValidity();
  }
  else{
	document.getElementById('haslo2').setCustomValidity('');
	document.getElementById('haslo2').reportValidity();
  }
}
//Funkcja ukrywająca wojewodztwo  i sprawdzająca czy warotść wynosi polska
function hide1(){
	const value = document.getElementById("kraj").value;
	if(value.trim()===""){
		document.getElementById("1").style.display = "none";//block for enabled
		document.getElementById("wojewodztwo").disabled = true;
	}
	else{
		document.getElementById("1").style.display = "block";//block for enabled
		document.getElementById("wojewodztwo").disabled = false;
	}	
	if(value == "polska"){
		convertToList();
	}
	else{
		convertToText();
	}
}
//funckja zmieniająca pole województwo w listę
var originalInput;
function convertToList(){
	originalInput = document.getElementById("wojewodztwo");
	var parentElement = document.getElementById("wojewodztwo").parentNode;
	var selectElement = document.createElement("select");
	selectElement.id = "wojewodztwo";
	
	var option = document.createElement("option");
	option.text="";
	selectElement.appendChild(option);
	
	var option1 = document.createElement("option");
	option1.value="Podkarpackie";
	option1.text="Podkarpackie";
	selectElement.appendChild(option1);
	
	var option2 = document.createElement("option");
	option2.value="Lubelskie";
	option2.text="Lubelskie";
	selectElement.appendChild(option2);
	
	var option3 = document.createElement("option");
	option3.value="Mazowieckie";
	option3.text="Mazowieckie";
	selectElement.appendChild(option3);
	
	selectElement.addEventListener("change", function(){hide2()});
	
	parentElement.replaceChild(selectElement, document.getElementById("wojewodztwo"));
}

//konwersja z powrotem na text

function convertToText(){
	var parentElement = document.getElementById("wojewodztwo").parentNode;
	parentElement.replaceChild(originalInput, document.getElementById("wojewodztwo"));
}

//Fukcja ukrywająca pola adresow
function hide2(){
	const value = document.getElementById("wojewodztwo").value;
	if(value.trim()===""){
		document.getElementById("2").style.display = "none";//block for enabled
		document.getElementById("adreszam").disabled = true;
		document.getElementById("same").disabled = true;
	}
	else{
		document.getElementById("2").style.display = "block";//block for enabled
		document.getElementById("adreszam").disabled = false;
		document.getElementById("same").disabled = false;
	}	

}

//funkcja ukrywajaca pole adres korespondencyjny

function hide3(){
	const value = document.getElementById("same")
	if(same.checked == true){
		document.getElementById("3").style.display = "none";//block for enabled
		document.getElementById("adreskor").disabled = true;
	}
	else{
		document.getElementById("3").style.display = "block";//block for enabled
		document.getElementById("adreskor").disabled = false;
	}	
}




// Funkcja walidująca formularz
function validateForm() {
	validateRequiredField('imie', 'Imie');
	validateRequiredField('nazwisko', 'Nazwisko');
	validateEmail();
	validatePassword();
	validateRepeatPassword();
	validatePhone();
	validateDate();
	validateRequiredField('kraj', 'Kraj');
}