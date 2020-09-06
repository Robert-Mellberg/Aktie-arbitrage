# Aktie-arbitrage

## Introduktion

Projektet går ut på att dels undersöka hur effektiv en investeringsstrategi byggd på aktiearbitrage är och dels på att skriva ett program som hjälper en följa en sådan investeringsstrategi.

### Aktiearbitrage

Aktiearbitrage är ett sätt att utnyttja ineffektiv prissättning på marknaden, att två produkter som representerar samma sak svänger i relativt pris till varandra. Tänk en Aktie B och en Aktie A, båda representerar en ägarandel på underliggande företag och den enda skillnaden är rösträtten. Eftersom båda aktierna representerar samma sak är det rimligt att äga den billigaste av de två, vilket vi säger är Aktie B. Sedan svänger priset i aktierna och Aktie B är dyrare än Aktie A. Då säljer man alla sina Aktie B och istället köper Aktie A, eftersom Aktie A är billigare än Aktie B kommer man få fler aktier än vad man hade innan. Sedan kanske Aktie A blir dyrare igen och då byter man till Aktie B. Genom att alltid byta till den billigaste aktien ökar man antalet aktier man har.

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
