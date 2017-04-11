function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + " i cena to: " + this.cena + ".");
}

var GalaxyS6 = new Telefon("Samsung", 2000, "srebrny");
GalaxyS6.printInfo();

var iPhone6s = new Telefon("Apple", 2300, "srebrny");
iPhone6s.printInfo();

var OnePlus3 = new Telefon("OnePlus", 1800, "czarny");
OnePlus3.printInfo();