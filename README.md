# Aktie-arbitrage

## Introduktion

Projektet går ut på att dels undersöka hur effektiv en investeringsstrategi byggd på aktiearbitrage är och dels på att skriva ett program som hjälper en följa en sådan investeringsstrategi.

### Aktiearbitrage

Aktiearbitrage är ett sätt att utnyttja ineffektiv prissättning på marknaden, att två produkter som representerar samma sak svänger i relativt pris till varandra. Tänk en Aktie B och en Aktie A, båda representerar en ägarandel på underliggande företag och den enda skillnaden är rösträtten. Eftersom båda aktierna representerar samma sak är det rimligt att äga den billigaste av de två, vilket vi säger är Aktie B. Sedan svänger priset i aktierna och Aktie B är dyrare än Aktie A. Då säljer man alla sina Aktie B och istället köper Aktie A, eftersom Aktie A är billigare än Aktie B kommer man få fler aktier än vad man hade innan. Sedan kanske Aktie A blir dyrare igen och då byter man till Aktie B. Genom att alltid byta till den billigaste aktien ökar man antalet aktier man har. Dessutom är det en riskfri investering (förutom att aktien kan förlora i värde) eftersom man vid varje transaktion erhåller fler aktier.

## Undersökning

Google finance användes för att få fram finansiell data om olika aktier. De aktier som undersöktes var Tele2, Klövern, Ericsson, Kinnevik, SEB, Handelsbanken. Det var de enda aktier som var noterade på large-cap och som det fanns tillräcklig data. Intervallet som undersöktes var 2016-08-26 till 2020-08-26 och det var aktiernas kurser vid stängningstid som användes.

Först identifierades vilken av aktie typen som generellt var billigast (B) och vilken som generellt var dyrast (D). Sen "köptes" den billigaste på startdatumet 2016-08-26. När D blev billigare än B byttes aktie B mot D. När D blir mer än X% dyrare än B byts D tillbaka till B, där X valdes till 0; 0,5 respektive 1. Sedan kollades det hur många fler aktier man hade 2020-08-26 jämfört med 2016-08-26 och resultaten redovisades i en tabell. Strategin testades med både gratis courtage samt med 0,06% courtage.

[Arbitrage.xlsx](Arbitrage.xlsx) användes för alla beräkningar.

## Resultat

Tabellen nedan visar resultaten från aktiearbitragen. Radnamnen anger vilket aktie det gäller och kolumnnamnen anger vilken gräns som använts för när dyra aktien ska bytas till billiga aktien. Gränsen anger att den dyra aktien måste vara mer än X% dyrare än billiga aktien för att bytas. Värdena i cellerna anger hur många gånger fler aktier man skulle haft 2020-08-26 jämfört med 2016-08-26, värdet i parantes tar hänsyn till 0,06% courtage.

| Aktie/Variabler| 0% gräns | 0,5% gräns | 1% gräns |
| --- | --- | --- | --- |
| Tele2 | **5,03** (3,72) | **5,11** (4,13) | **2,92** (2,61) |
| Klövern | **3,32** (2,68) | **3,31** (2,76) | **2,61** (2,31) |
| Ericsson | **2,18** (1,75) | **1,99** (1,76) | **1,73** (1,62) |
| Kinnevik | **1,41** (1,29) | **1,35** (1,28) | **1,29** (1,25) |
| SEB | **1,38** (1,23) | **1,38** (1,29) | **1,30** (1,25) |
| Handelsbanken | **1,31** (1,19) | **1,25** (1,19) | **1,22** (1,18) |

## Diskussion

Från tabellen kan man se att vissa aktier lämpar sig bättre (eller har lämpat sig bättre) för aktiearbitrage. Tele2 har under perioden ökat med gränsen 0,5% ökat med 5,11 gånger (50% genomsnittlig årlig avkastning) och klövern har med samma gräns ökat med 3,31 gånger (35% genomsnittlig årlig avkastning). Om man tittar på den sämst presterande aktien med det sämst presterande gränsen så hamnar den genomsnittliga årliga avkastningen på 5%. Detta är alltså en extra riskfri avkastning utöver kursutvecklingen. Värt att notera också är att courtaget har en stor påverkan trots att den endast är 0,06%. Påverkan är som störst då gränsen är som minst eftersom det sker fler köp och sälj då. Om man tar Tele2 med gränsen 0% så sjunker den genomsnittliga årliga avkastningen från 50% till 39% om man räknar med courtaget.

Det finns vissa förbättringar man kan göra. På vissa aktier skiljer sig priset väldigt mycket mellan B- och A aktien, då kanske det är lämpligt att ändra gränserna. Man kanske t.ex ska byta från A- till B aktien då A är 10% dyrare än B och byta från B- till A aktien då A är 8% dyrare än B. Problemet med denna strategi är dock att det inte är garanterat att man slutar med fler aktier än man började med, eftersom man i vissa fall byter från en billigare aktie till en dyrare.

En annan förbättring skulle vara om man testade strategin på aktiekurser över hela handeldagen istället för slutkursen. Detta eftersom det är mer representativt för verkligheten då man handlar aktier under börsens öppettider. Då skulle man kunna få fram gränser som passar bättre i verkligheten. T.ex skulle gränsen 0% inte kunna leda till fler antal aktier i praktiken då man alltid skulle byta aktier då de kostar lika. Om man använder gränserna från denna undersökning bör man också endast handla en gång om dagen då det är detta gränserna är baserade på.

## Program

För att hjälpa en att hålla koll på när man ska byta aktier har jag utvecklat ett [skript](script.gs). Det utgår från en [google sheet](Arbitrage_Notifierare.xlsx) som innehåller nuvarande aktiekurserna med hjälp av google finance. När en aktiekurs blir tillräckligt billig relativt en annan aktiekurs (t.ex Klövern B relativt Klövern A) skickar skriptet ett email till den angivna adressen med information vilken av aktierna man ska sälja och vilken man ska köpa. Skriptet skickar aldrig samma tips två gånger i rad, i klöverns fall skulle den alternera mellan "Sälj A och köp B" och "Sälj B och köp A". Man kan ändra i google sheet för att lägga till fler aktier, ändra emailadress och ändra gränserna. För att skriptet ska fungera måste det kopplas ihop med google sheetet, sedan måste google sheetet uppdateras även när det är avstängt och skriptet behöver en utlösare.

## Kontakt

robmel@kth.se
