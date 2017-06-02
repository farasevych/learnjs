/*Є дівчинка Даша, яка має різноманітні захоплення(іншими словами, об"єкт із полем name = Dasha, 
який має також поле hobbies - масив), які інколи змінюються(додаються) 
Однак люди не можуть займатись одночасно десятком справ, тому ми повинні передбачити обмеження: 
не більше 3 хоббі одночасно. Створіть метод addHobbie для додавання нового захоплення Даші. 
Якщо пробуємо додавати 4-е хоббі, то повернути false, інакше - повертаємо true.*/

var girl = {
	name: 'Dasha',
	hobbies: ['lindy-hop', 'balboa'],
}

girl.addHobbie = function(n){
		if(this.hobbies.length >= 3){
			return false; // Too much!
		} else {
			this.hobbies.push(n);
			return true;
		}
	}

/* OR
girl.addHobbie = function(n){
  if(this.hobbies.length >= 3) return false;
  this.hobbies.push(n);
  return true;
}
*/

/*
girl.addHobbie('Javascript'); // true
girl.addHobbie('Photography'); // false
*/