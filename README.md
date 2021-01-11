# Szaturn

Alternatív felület a NEPTUN💩-hoz, böngészőpluginon keresztül.

Egyelőre erősen fejlesztés alatt.
Ez egy lassú folyású hobbiprojekt (tekintettel a demotiváló kontextusra),
nagyon aktív fejlesztésre egyelőre biztosan nem lehet számítani.

Tervezett funkciók:

- könnyen használható react alapú felület
- más intézménnyel is működjön, mint az ELTE
- offline böngészés
- üzenetek nézegetése
- alapadatok, kurzusok, tárgyak nézegetése
- bejelentkezés félévre
- kurzusfelvétel

A plugin fetch api-n keresztül a webes neptun-felületre küldi
a lekéréseket, eljátszva a webes böngészést a NEPTUN felé.
Az információkat a html és egyéb tartalmak parse-olásával szedi össze.
A kinyert adatokat egy react-alapú alkalmazásban jeleníti meg.
Az adatok (opcionálisan) local storage-ban tárolódnak,
és így offline is böngészhetők.

Míg e plugin prototípusa el nem készül, érdemes az alábbiakat is kipróbálni:

- https://github.com/solymosi/npu
- https://github.com/RuzsaGergely/Poszeidon

Természetesen a legjobb lenne, ha a NEPTUN-t végre le lehetne váltani.
