//PROBLEM ONE
class Multiplier{
	constructor(n){
		this.n = n;
		this.current_value = 1;
	}
	multiply(){
		this.current_value = this.n * this.current_value;
	}
	get_current_value(){
		return this.current_value;
	}

}
var number = new Multiplier(8);
number.multiply();
console.log(number.get_current_value());
number.multiply();
console.log(number.get_current_value());
number.multiply();
console.log(number.get_current_value());
number.multiply();
console.log(number.get_current_value());

//PROBLEM TWO

class Album{
	constructor(photos){
		this.photos = [];
	}
	addPhoto(photo){
		this.photos.push(photo);
	}
	selectPhotos(i){
		return this.photos[i];
	}
	listPhotos(photos){
		var list = '';
		for (var i = 0; i < this.photos.length; i++) {
			list = list + ' ' + this.photos[i].name;
		}
		return list;
	}
}

class Photo{
	constructor(name, location){
		this.location = location;
		this.name = name;
	}
	printLocation(){
		console.log(`Image was taken at ${this.location}`);
	}
	printName(){
		console.log(`Image name is ${this.name}`);
	}
}
var album = new Album();
var photo = new Photo('778.jpg', 'North Korea');
var another_photo = new Photo('442.jpg', 'Iran');
album.addPhoto(another_photo);
album.addPhoto(photo);
console.log(album.listPhotos());
photo.printName();
another_photo.printName();
photo.printLocation();
another_photo.printLocation();
console.log(album.selectPhotos(1));
console.log(album.selectPhotos(0));
console.log(album);


// PROBLEM THREE
class Library{
	constructor(books){
		this.books = [];
	}
	retrieveBook(title){
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === title) {
				return this.books[i];
			}
		}
	}
	addBook(books){
		this.books.push(books);
	}
	bookCount(){
		return this.books.length;
	}
	removeBook(remove_title){
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === remove_title){
				this.books.splice(i, 1);
			}
		}
		
	}
	listBooks(){
		var list = '';
		for (var i = 0; i < this.books.length; i++) {
			list = list + ' ' + this.books[i].title;
		}
		return list;
	}
}

class Book{
	constructor(title, author, genre){
		this.title = title;
		this.author = author;
		this.genre = genre;
	}
	printTitle(){
		console.log(`Book title is ${this.title}`);
	}
}
var library = new Library();
var book = new Book('The Poisonwood bible', 'Barbara Kingsolver', 'Historical Fiction');
var another_book = new Book('The Alchemist', 'Paulo Coelho', 'Quest: Fiction');
var novel = new Book('Crime and Punishment', 'Fyodor Dostoyevsky')
library.addBook(book);
library.addBook(another_book);
library.addBook(novel);
console.log(library.retrieveBook('The Poisonwood bible'));
console.log(library.retrieveBook('The Alchemist'));
console.log(library.retrieveBook('Crime and Punishment'));
console.log(library.listBooks());
library.removeBook('The Alchemist');
console.log(library.listBooks());
console.log(library.bookCount());

// PROBLEM FOUR
Date.prototype.formattedDate = function(){
	var m = this.getMonth();
	var d = this.getDay();
	var y = this.getYear();
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return monthNames[m] + ',' + d + ',' + y;
}
var date = new Date();
console.log(date.formattedDate());

// PROBLEM FIVE

Date.prototype.formattedTime = function(){
	var h = this.getHour();
	var m = this.getMinutes();
	var s = this.getSeconds();
	return '' + (h) + ':' + (m) + ':' + (s);
}

var date = new Date();
console.log(date.formattedTime());













