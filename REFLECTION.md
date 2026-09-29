# Reflektion: Laboration 2 – Skriv en modul, inte en app


## 1. Namngivning

| Namn | Förklaring | Reflektion och regler från Clean Code |
| ---- | ---------- | -------------------------------------- |
|   greatestCommonDivisor   |       Funktion son räknar ut den största gemensamma nämnaren.     |              Som beskrivs i kapitel 3 så tänkte jag att funktionen bör avslöja vad den gör och använder därför ett längre namn istället för något smidigare som "gcd" eller liknande.                           |
|    savedMemory  |    Variabel i `scaleBatch` som lagrar sparad minnesmängd.        | Namnet är beskrivande och sökbart i koden, till skillnad från vaga namn som diff eller temp.                                         |
|  targetWeight    |  Variabel i `scaleToMaxWeight`         |  Beskriver syfte och roll för variabeln men kan missförstås eftersom den inte anger exakt vilket format det är (b, kb eller mb)                                       |
|   bytesResult, kilobytesResult, megabytesResult  | Variabler som innehåller resultaten av `Weight` .           |     Ville tydligt beskriva exakt vad variablerna innehöll, istället för att använda förkortningar som kan bli förvirrande.                                    |
|      |            |                                         |

*Upptäckte du någon brist i din egen namngivning när du läste kapitlet om namngivning? Höll du med
om alla "reglerna", eller finns det någon du ifrågasätter?*

Svar: Ja jag tänkte mycket på det när jag gjorde den här uppgiften, särskilt efter workshopen när jag skulle försöka navigera i någon annans kod. Det gick att utläsa mellan raderna oftast vad funktionerna/variablerna gjorde, men om funktioner och variabler beskriver exakt vad de gör blir det lättare att förstå och diskutera med andra. Kan bli frustrerad ibland när jag har ett ganska långt ord som måste upprepas eller hänvisas till men jag tror att det kommer bli en vana ju längre tiden går.

## 2. Funktioner

| Metodnamn | Länk eller kod | Antal rader (ej ws) | Reflektion |
| --------- | --------------- | -------------------- | ---------- |
|       generateThumbnails    |  [generateThumbnails](./src/generatethumbnails.ts)               |  31                     |   Använde switch-sats, ganska tydlig kod.         |
|        getImageDetails   |     [getImageDetails](./src/getimagedetails.ts)            | 33                      |      Många variabler, men ganska simpel.      |
|     greatestCommonDivisor      |    [greatestCommonDivisor](./src/greatestcommondivisor.ts)             |       19                |     Använde a och b som namn på parametrar, men är ganska vanligt i matematiska formler. Kunde ha hetat något mer beskrivande.        |
|       scale    |      [scale](./src/scale.ts)           |          26             |      Försökte hålla isär begreppen med nya och gamla mått genom att inte förkorta för mycket.     |
|       scaleBatch    |     [scaleBatch](./src/scalebatch.ts)            |                36       |    Kändes lite rörig med variabler blandat med arrayer som innehåller objekt som har blivit vägda men ska vägas igen etc. eller förminskade, men jag känner att jag gjorde det begripligt.        |
|    scaleToMaxWeight       |  [scaleToMaxWeight](./src/scaletomaxweight.ts)               |              30          |       Även där lätt att det blir rörigt med många varianter av enheter och tempus, kanske hade ja kunnat vara tydligare med att vikten kommuniceras i megabyte.     |
|       scaleToRatio    |      [scaleToRatio](./src/scaletoratio.ts)            |         38              |       Tre olika if-satser beroende på konsekvensen av input-bildens mått, förtydligar det mer med kommentarer.     |
|        weight    |  [weight](./src/weight.ts)                |      15               |     Väldigt kort men koncis, använde inte förkortningar i resultatenheterna för ökad tydlighet.      |

*Upptäckte du någon brist i hur du tidigare skrivit funktioner/metoder när du läste kapitlet om
funktioner? Höll du med om alla "reglerna", eller finns det någon du ifrågasätter?*

Svar: Ja jag reflekterade över hur jag hade döpt funktioner/metoder tidigare och var då slarvigare med
om andra skulle förstå sålänge jag visste vad det var eller hur exakt namnet beskrev funktionens uppgift.


## 3. Din kodkvalitet

*Beskriv dina erfarenheter av att arbeta med din egen kodkvalitet i den här laborationen. Använd
vedertagna begrepp. (Cirka en halv sida.)*

Svar: Att arbeta med kodkvalitet i den här uppgiften var ibland enkelt, men ju fler funktioner ju mer komplext upplevde jag det. Till exempel så kändes principen om enskilt ansvar för funktioner (SRP) som en vettig princip där funktionerna bara hade sina egna uppgifter och behandlade inga andra saker än det ansvarsområde som det givits. Efter 2-3 funktioner kändes det däremot som att de gjorde lite liknande saker och när funktionerna började använda varandra (t ex. `scaleToMaxWeight` som använder både `scale` och `weight`) så undrade jag hur pass "självständiga" den egentligen ska vara. Men för att den ska kunna göra sitt arbete måste den importera funktionerna eller skriva dem igen, vilket då hade brutit mot DRY(Don't Repeat Yourself)-principen, så jag valde det första alternativet.

Tidigare hade jag också inkluderat en sak som `greatestCommonDivisor` i `scaleToRatio`, för att dess användingsområde är sammankopplat med den funktionen. Dock, så är Single Responsibility Principle tydlig att funktioner ska hållas rena så därför bröt jag ut den till sin egen funktion. Även om funktionen hålls relativt kort, synliggjordes värdet av att eftersträva "One Level of Abstraction per Function" för att förenkla framtida refaktorisering.

Utöver funktionernas struktur var arbetet med guard clauses och felhantering för indata och för att säkra begripliga och överskådliga resultat, speciellt när funktionerna använder varandra (runda av decimaler i `weight` till exempel som sen används i `scaleToMaxWeight`) en viktig del i att höja kodkvaliteten. Genom att tillämpa principen om att "falla snabbt" (fail-fast) placerades indatavalidering högst upp i funktionerna innan några beräkningar utfördes. Tillsammans med enhetstester i Vitest, där både framgångsrika flöden (happy path) och kantfall (edge cases) verifierades, skapades en mer robust och förutsägbar kodbas.


## 4. Att skriva en modul

*Hur var det att skriva kod för andra programmerare istället för en app med egna slutanvändare?
Vad blev din USP, och ändrades den under arbetets gång?*

Svar:

## 5. Testning

*Vilket av testalternativen valde du, och varför? Vad var svårast att testa i din modul?*

Svar:

## 6. AI-samarbete

*Använde du AI-assistenter (t.ex. ChatGPT, GitHub Copilot, Claude) annorlunda i den här
laborationen jämfört med laboration 1 — nu när uppgiften är en större, mer kvalitetskänslig modul
snarare än ett enkelt program? Var det till exempel till mer eller mindre hjälp vid design,
testning eller kodkvalitetsreflektionerna, eller valde du bort AI i delar där du använde det förra
gången?*

Svar:
