// Top ~50 per atleta — stagione 2025 (fonte: World Athletics toplists, marche legali).
// Righe grezze "Nome|NAZ|misura" incollate dalle toplist; righe() normalizza e converte.
import { righe } from './_parse.js'

export default [
  ...righe('100m', 'M', 2025, `
Kishane Thompson|JAM|9.75
Oblique Seville|JAM|9.77
Kenneth Bednarek|USA|9.79
Bryan Levell|JAM|9.82
Courtney Lindsey|USA|9.82
T'Mars Mccallum|USA|9.83
Trayvon Bromell|USA|9.84
Abdul-Rasheed Saminu|GHA|9.84
Christian Coleman|USA|9.86
Eugene Amo-Dadzie|GBR|9.87
Gift Leotlela|RSA|9.87
Ackeem Blake|JAM|9.88
Kayinsola Ajayi|NGR|9.88
Noah Lyles|USA|9.89
Akani Simbine|RSA|9.90
Zharnel Hughes|GBR|9.91
Maurice Gleaton|USA|9.92
Ronnie Baker|USA|9.92
Brandon Hicklin|USA|9.93
Erik Cardoso|BRA|9.93
Bayanda Walaza|RSA|9.94
Kalen Walker|USA|9.94
Letsile Tebogo|BOT|9.94
Puripol Boonson|THA|9.94
Jordan Anthony|USA|9.95
Eloy Benitez|PUR|9.95
Jerome Blake|CAN|9.95
Ronal Longa|COL|9.96
Marcellus Moore|USA|9.96
Jeremiah Azu|GBR|9.97
Benjamin Azamati|GHA|9.98
Lachlan Kennedy|AUS|9.98
Ryiem Forde|JAM|9.98
Davonte Howell|CAY|9.98
Felipe Bardi|BRA|9.99
Emmanuel Eseme|CMR|9.99
Retshidisitswe Mlenga|RSA|9.99
Yoshihide Kiryu|JPN|9.99
Ferdinand Omanyala|KEN|10.00
Romell Glave|GBR|10.00
Lucas Ansah-Peprah|GER|10.00
Rohan Watson|JAM|10.00
Carlos Florez Angulo|COL|10.00
Sorato Shimizu|JPN|10.00
Yuhi Mori|JPN|10.00
Hiroki Yanagita|JPN|10.00
Rohan Browning|AUS|10.01
Sunday Akintan|NGR|10.01
Jelani Watkins|USA|10.01
`),
  ...righe('100m', 'F', 2025, `
Melissa Jefferson-Wooden|USA|10.61
Julien Alfred|LCA|10.75
Tina Clayton|JAM|10.76
Tia Clayton|JAM|10.82
Kayla White|USA|10.84
Twanisha Terry|USA|10.85
Jacious Sears|USA|10.85
Anthaya Charlton|BAH|10.87
JaMeesia Ford|USA|10.87
Favour Ofili|NGR|10.87
Marie-Josée Ta Lou-Smith|CIV|10.87
Shericka Jackson|JAM|10.88
Aleia Hobbs|USA|10.89
Tima Godbless|NGR|10.91
Thelma Davies|LBR|10.91
Shelly-Ann Fraser-Pryce|JAM|10.91
Leah Bertrand|TTO|10.92
Alexis Brown|USA|10.93
Samirah Moody|USA|10.93
Dajaz Defrand|USA|10.93
Dina Asher-Smith|GBR|10.93
Zoe Hobbs|NZL|10.94
Audrey Leduc|CAN|10.94
Ashanti Moore|JAM|10.94
Daryll Neita|GBR|10.94
Sha'Carri Richardson|USA|10.94
Sade McCreath|CAN|10.95
Camille Rutherford|BAH|10.96
Maia McCoy|USA|10.96
Tamari Davis|USA|10.96
Anavia Battle|USA|10.98
Cambrea Sturgis|USA|10.98
Mckenzie Long|USA|10.98
Shenese Walker|JAM|10.98
Semira Killebrew|USA|10.99
Jada Mowatt|USA|10.99
Kemba Nelson|JAM|10.99
Brittany Brown|USA|10.99
Kaila Jackson|USA|11.00
Jodean Williams|JAM|11.00
Celera Barnes|USA|11.01
Joella Lloyd|ANT|11.01
Victoria Cameron|USA|11.01
Brianna Selby|USA|11.01
Gabrielle Thomas|USA|11.02
Dana Wilson|USA|11.02
Jasmine Montgomery|USA|11.02
Alana Reid|JAM|11.02
Amy Hunt|GBR|11.02
`),
  ...righe('200m', 'M', 2025, `
Noah Lyles|USA|19.51
Kenneth Bednarek|USA|19.58
Bryan Levell|JAM|19.64
Letsile Tebogo|BOT|19.65
T'Mars McCallum|USA|19.73
Zharnel Hughes|GBR|19.78
Robert Gregory|USA|19.80
Courtney Lindsey|USA|19.82
Tapiwanashe Makarawu|ZIM|19.84
Garrett Kaalund|USA|19.85
Jereem Richards|TTO|19.86
Alexander Ogando|DOM|19.86
Makanakaishe Charamba|ZIM|19.92
Jordan Anthony|USA|19.93
Jaleel Croal|IVB|19.95
Jerome Blake|CAN|19.95
Erriyon Knighton|USA|19.97
Sinesipho Dambile|RSA|19.97
Xavi Mo-Ajok|NED|20.01
Xavier Butler|USA|20.02
Max Thomas|USA|20.02
Gout Gout|AUS|20.02
Christian Coleman|USA|20.02
Reynier Mena|CUB|20.05
Joseph Fahnbulleh|LBR|20.07
Wayde van Niekerk|RSA|20.07
Puripol Boonson|THA|20.07
Bayanda Walaza|RSA|20.08
Busang Collen Kebinatshipi|BOT|20.08
Aaron Brown|CAN|20.08
Adrian Kerr|JAM|20.08
Jamarion Stubbs|USA|20.11
Towa Uzawa|JPN|20.11
Cameron Miller|USA|20.12
Eseosa Fostine Desalu|ITA|20.12
Naeem Jack|RSA|20.13
Oblique Seville|JAM|20.13
Jaiden Reid|CAY|20.13
Andre de Grasse|CAN|20.13
Tate Taylor|USA|20.14
Abdulaziz Abdui Atafi|KSA|20.14
Abdurahman Karriem|RSA|20.15
Lidio Andres Feliz|DOM|20.15
José Figueroa|PUR|20.16
Tyson Williams|USA|20.17
Udodi Chudi Onwuzurike|NGR|20.17
Javonte' Harding|USA|20.19
Ackeem Blake|JAM|20.20
Ibrahim Fuseini|GHA|20.20
Denzel Simusialela|ZIM|20.20
`),
  ...righe('200m', 'F', 2025, `
Melissa Jefferson-Wooden|USA|21.68
Julien Alfred|LCA|21.71
Brittany Brown|USA|21.89
Mckenzie Long|USA|21.93
Gabrielle Thomas|USA|21.95
JaMeesia Ford|USA|21.98
Shericka Jackson|JAM|21.99
Favour Ofili|NGR|22.00
Tamari Davis|USA|22.05
Anavia Battle|USA|22.07
Amy Hunt|GBR|22.08
Dina Asher-Smith|GBR|22.14
Madison Whyte|USA|22.16
Marie-Josée Ta Lou-Smith|CIV|22.17
Deajah Stevens|USA|22.18
Jaël Bestué|ESP|22.19
Dajaz Defrand|USA|22.20
Kayla White|USA|22.23
Jasmine Montgomery|USA|22.26
Marileidy Paulino|DOM|22.30
Daryll Neita|GBR|22.30
Jadyn Mays|USA|22.31
Ashanti Moore|JAM|22.31
Minke Bisschops|NED|22.39
Helene Parisot|FRA|22.42
Dejanea Oakley|JAM|22.43
Elise Cooper|USA|22.44
Salwa Eid Naser|BRN|22.45
Kenondra Davis|USA|22.45
Thelma Davies|LBR|22.46
Caisja Chandler|USA|22.46
Camryn Dickson|USA|22.48
Anthonique Strachan|BAH|22.48
Jassani Carter|USA|22.52
Rhasidat Adeleke|IRL|22.52
Sophia Junk|GER|22.53
Success Eduan|GBR|22.53
Kelly Ufodiama|NGR|22.54
Jayla Jamison|USA|22.54
Leah Bertrand|TTO|22.54
Tima Godbless|NGR|22.55
Maia McCoy|LBR|22.55
Samirah Moody|USA|22.55
Sha'Carri Richardson|USA|22.56
Torrie Lewis|AUS|22.56
Jessika Gbai|CIV|22.56
Tiriah Kelley|USA|22.58
Gabrielle Matthews|JAM|22.59
Lieke Klaver|NED|22.59
Miriam Sánchez|MEX|22.60
`),
  ...righe('400m', 'M', 2025, `
Busang Collen Kebinatshipi|BOT|43.53
Jereem Richards|TTO|43.72
Zakithi Nene|RSA|43.76
Jacory Patterson|USA|43.85
Khaleb McRae|USA|43.91
Rusheen McDonald|JAM|44.04
Matthew Hudson-Smith|GBR|44.10
Quincy Wilson|USA|44.10
Muzala Samukonga|ZAM|44.11
Charles Dobson|GBR|44.14
Chris Robinson|USA|44.15
Chris Bailey|USA|44.15
Bayapo Ndori|BOT|44.20
Quincy Hall|USA|44.22
Bryce Deadmon|USA|44.30
Vernon Norwood|USA|44.34
Micahi Danzy|USA|44.38
Lee Bhekempilo Eppie|BOT|44.40
Samuel Ogazi|NGR|44.43
Yuki Joseph Nakajima|JPN|44.44
Demarius Smith|USA|44.45
Edoardo Scotti|ITA|44.45
Kirani James|GRN|44.48
George Mutinda|KEN|44.51
Bovel McPherson|JAM|44.51
Alison dos Santos|BRA|44.53
Elián Larregina|ARG|44.53
Reece Holder|AUS|44.54
Attila Molnár|HUN|44.55
Aleksey Danilov|RUS|44.56
Samuel Reardon|GBR|44.60
Auhmad Robinson|USA|44.61
Matheus Lima|BRA|44.63
Daniel Segers|BEL|44.63
Ammar Ismail Yahia Ibrahim|QAT|44.63
Alexander Doom|BEL|44.66
Brian Onyari Tinega|KEN|44.67
Rok Ferlan|SLO|44.70
Justin Robinson|USA|44.70
Jonas Phijffers|NED|44.71
Lythe Pillay|RSA|44.73
Ezekiel Nathaniel|NGR|44.74
Mihai Sorin Dringo|ROU|44.74
Delano Kennedy|JAM|44.74
Alexander Ogando|DOM|44.78
Kevin Kipkorir|KEN|44.80
Oleksandr Pohorilko|UKR|44.81
Jayden Davis|USA|44.84
Patrik Simon Enyingi|HUN|44.84
Christopher Morales Williams|CAN|44.85
`),
  ...righe('400m', 'F', 2025, `
Sydney McLaughlin-Levrone|USA|47.78
Marileidy Paulino|DOM|47.98
Salwa Eid Naser|BRN|48.19
Aaliyah Butler|USA|49.09
Gabrielle Thomas|USA|49.14
Isabella Whittaker|USA|49.24
Natalia Bukowiecka|POL|49.27
Amber Anning|GBR|49.36
Nickisha Pryce|JAM|49.46
Femke Bol|NED|49.48
Roxana Gómez|CUB|49.48
Henriette Jæger|NOR|49.49
Stacey Ann Williams|JAM|49.59
Dejanea Oakley|JAM|49.65
Martina Weil|CHI|49.72
Evelis Aguilar|COL|49.80
Lynna Irby-Jackson|USA|49.82
Wadeline Venlogh|HAI|49.91
Lieke Klaver|NED|50.11
Alexis Holmes|USA|50.12
Mercy Adongo Oketch|KEN|50.14
Vimbayi Maisvorewa|ZIM|50.25
Britton Wilson|USA|50.25
Ella Onojuvwevwo|NGR|50.31
Kaylyn Brown|USA|50.35
Bassant Hemida|EGY|50.36
Sada Williams|BAR|50.39
Rhasidat Adeleke|IRL|50.42
JaMeesia Ford|USA|50.43
Sami Oblad|USA|50.49
Rosey Effiong|USA|50.49
Mary Moraa|KEN|50.49
Bailey Lear|USA|50.50
Yemi Mary John|GBR|50.50
Polina Tkalich|RUS|50.52
Printassia Johnson|BAH|50.53
Savannah Sutherland|CAN|50.62
Rachel Joseph|USA|50.66
Javonya Valcourt|BAH|50.68
Paula Sevilla|ESP|50.69
Anna Polinari|ITA|50.76
Emma Zapletalová|SVK|50.76
Quanera Hayes|USA|50.76
Leah Anderson|JAM|50.78
Victoria Ohuruogu|GBR|50.79
Emily Newnham|GBR|50.84
Imke Vervaet|BEL|50.86
Laviai Nielsen|GBR|50.86
Andrea Miklós|ROU|50.90
Madison Whyte|USA|50.91
`),
  ...righe('triplo', 'M', 2025, `
Pedro Pichardo|POR|17.91
Andy Díaz Hernández|ITA|17.80
Ruiting Wu|CHN|17.68
Andrea Dallavalle|ITA|17.64
Jordan Scott|JAM|17.52
Melvin Raffin|FRA|17.52
Lázaro Martínez|CUB|17.49
Max Heß|GER|17.43
Yasser Mohammed Triki|ALG|17.42
Praveen Chithravel|IND|17.37
Yaming Zhu|CHN|17.37
Russell Robinson|USA|17.30
Kaiwan Culmer|BAH|17.29
Hugues Fabrice Zango|BUR|17.21
Abdulla Aboobacker Narangolintevida|IND|17.19
Jordan A. Díaz Fortun|ESP|17.16
Chengetayi David Mapaya|ZIM|17.15
Salif Mane|USA|17.15
Jangwoo Kim|KOR|17.13
Thomas Gogois|FRA|17.11
Wen Su|CHN|17.09
Will Claye|USA|17.09
Jonathan Seremes|FRA|17.08
Almir dos Santos|BRA|17.07
Andy Hechavarría|CUB|17.00
Sami Bakheet|KSA|16.98
Dmitriy Chizhikov|RUS|16.95
Jah-Nhai Perinchief|BER|16.95
Brandon Green|USA|16.94
Simone Biasutti|ITA|16.94
Praise Aniamaka|CAN|16.94
James Carter|USA|16.93
Ilya Telkunov|RUS|16.90
Cristian Nápoles|CUB|16.90
Donald Scott|USA|16.88
Elton Petronilho|BRA|16.88
Luke Brown|JAM|16.87
Endiorass Kingley|AUT|16.85
Maksim Niastsiarenka|BLR|16.85
Ethan Olivier|NZL|16.84
Vladyslav Shepeliev|UKR|16.83
Marcos Ruiz|ESP|16.78
Trevon Hamer|GUY|16.77
Connor Murphy|AUS|16.77
Sean Dixon-Bodie|USA|16.76
Vitaliy Pavlov|RUS|16.75
Yaoqing Fang|CHN|16.74
Felipe Izidoro|BRA|16.74
Leodan Torrealba|VEN|16.72
`),
  ...righe('triplo', 'F', 2025, `
Leyanis Pérez Hernández|CUB|14.94
Thea Lafond|DMA|14.89
Liadagmis Povea|CUB|14.84
Yulimar Rojas|VEN|14.76
Davisleydi Velazco|CUB|14.72
Jasmine Moore|USA|14.68
Shanieka Ricketts|JAM|14.64
Saly Sarr|SEN|14.55
Caroline Joyeux|GER|14.45
Ackelia Smith|JAM|14.44
Neja Filipič|SLO|14.42
Tuğba Danişmaz|TUR|14.42
Gabriela Petrova|BUL|14.41
Yekaterina Koneva|RUS|14.38
Ana Peleteiro-Compaoré|ESP|14.37
Sharifa Davronova|UZB|14.33
Diana Ana Maria Ion|ROU|14.31
Gabriele Santos|BRA|14.31
Erika Giorgia Anoeta Saraceni|ITA|14.24
Elena Andreea Taloș|ROU|14.19
Ilionis Guillaume|FRA|14.19
Maja Åskag|SWE|14.18
Regiclecia Candido|BRA|14.17
Ivana Španović|SRB|14.15
Anastasiya Kobylyanskikh|RUS|14.14
Janne Nielsen|DEN|14.13
Senni Salminen|FIN|14.13
Nastassia Drozd|BLR|14.13
Taisiya Dmitriyeva|RUS|14.10
Anne-Suzanna Fosther-Katta|CMR|14.08
Ilona Masson|BEL|14.06
Hui Zhou|CHN|14.06
Alexia Ioana Dospin|ROU|14.05
Jessie Maduka|GER|14.04
Oxana Koreneva|GRE|14.03
Linda Suchá|CZE|14.03
Viktoria Gorlova|RUS|14.02
Darya Nidbaykina|RUS|14.02
Winny Chepngetich Bii|KEN|14.01
Emilia Sjöstrand|SWE|14.01
Shantae Foreman|JAM|14.01
Rūta Kate Lasmane|LAT|14.00
Natricia Hooper|GUY|13.98
Georgina Forde-Wells|GBR|13.98
Qiujiao Tan|CHN|13.97
Kira Wittmann|GER|13.97
Mariia Siney|UKR|13.96
Lisay de la C. González|CUB|13.96
Yingying Huang|CHN|13.96
Diana Zagainova|LTU|13.95
`),
  ...righe('asta', 'M', 2025, `
Armand Duplantis|SWE|6.30
Emmanouil Karalis|GRE|6.08
Christopher Nilsen|USA|6.01
Kurtis Marschall|AUS|5.95
Sam Kendricks|USA|5.95
Ersu Şaşma|TUR|5.92
Menno Vloon|NED|5.92
Austin Miller|USA|5.92
Robin Emig|FRA|5.92
Thibaut Collet|FRA|5.91
Baptiste Thiery|FRA|5.91
Renaud Lavillenie|FRA|5.91
Sondre Guttormsen|NOR|5.90
Zachery Bradford|USA|5.90
Chenyang Li|CHN|5.85
Matvei Volkov|BLR|5.85
Mikhail Shmykov|RUS|5.85
Bokai Huang|CHN|5.85
Matt Ludwig|USA|5.83
Valters Kreišs|LAT|5.82
Valentin Imsand|SUI|5.82
Ethan Cormont|FRA|5.82
Aleksandr Solovyov|RUS|5.80
Torben Blech|GER|5.80
Ben Broeders|BEL|5.80
Ernest John Obiena|PHI|5.80
Hunter Garretson|USA|5.76
Jacob Wooten|USA|5.76
David Holý|CZE|5.75
Oleg Zernikel|GER|5.75
KC Lightfoot|USA|5.75
Simen Guttormsen|NOR|5.75
Tao Zhong|CHN|5.75
Cole Walsh|USA|5.75
Bo Kanda Lita Baehre|GER|5.75
Seifeldin Abdelsalam|QAT|5.75
Kyle Rademeyer|RSA|5.73
Piotr Lisek|POL|5.73
Ashton Barkdull|USA|5.73
Ioannis Rizos|GRE|5.73
Scott Toney|USA|5.73
Olen Tray Oates|USA|5.72
Mathieu Collet|FRA|5.72
Anthony Ammirati|FRA|5.72
Keaton Daniel|USA|5.72
Nate Richartz|USA|5.72
Hussain Asim Al Hizam|KSA|5.72
Dmitriy Kachanov|RUS|5.72
Matteo Oliveri|ITA|5.71
Jimmy Rhoads|USA|5.71
`),
  ...righe('asta', 'F', 2025, `
Amanda Moll|USA|4.91
Katie Moon|USA|4.90
Polina Knoroz|RUS|4.86
Molly Caudery|GBR|4.85
Sandi Morris|USA|4.85
Hana Moll|USA|4.81
Angelica Moser|SUI|4.80
Tina Šutej|SLO|4.80
Juliana de Menis Campos|BRA|4.76
Marie-Julie Bonnin|FRA|4.75
Brynn King|USA|4.75
Emily Grove|USA|4.75
Amálie Švábíková|CZE|4.75
Olivia McTaggart|NZL|4.73
Lene Onsrud Retzius|NOR|4.73
Elien Vekemans|BEL|4.73
Roberta Bruni|ITA|4.70
Elina Lampela|FIN|4.70
Imogen Ayris|NZL|4.67
Gabriela Leon|USA|4.66
Eliza McCartney|NZL|4.65
Chunge Niu|CHN|4.65
Maryna Kylypko|UKR|4.65
Tatyana Kalinina|RUS|4.65
Chloe Timberg|USA|4.63
Elisa Molinarolo|ITA|4.62
Molly Haywood|USA|4.61
Kristen Leland|USA|4.60
Hanga Klekner|HUN|4.60
Olivia Lueking|USA|4.59
Sydney Horn|USA|4.59
Julia Fixsen|USA|4.58
Lea Bachmann|SUI|4.58
Tori Thomas|USA|4.57
Nastassja Campbell|USA|4.57
Marleen Mülla|EST|4.57
Mason Meinershagen|USA|4.56
Aksana Gataullina|RUS|4.55
Kitty Friele Faye|NOR|4.55
Saga Andersson|FIN|4.55
Berenice Petit|FRA|4.54
Alix Dehaynain|FRA|4.53
Anna Willis|USA|4.52
Allika Inkeri Moser|EST|4.52
Bridget Williams|USA|4.51
Ashley Callahan|USA|4.51
Tenly Kuhn|USA|4.51
Pascale Stöcklin|SUI|4.51
Marijn Kieft|NED|4.51
Alysha Newman|CAN|4.50
`),
  ...righe('martello', 'M', 2025, `
Ethan Katzberg|CAN|84.70
Bence Halász|HUN|83.18
Rudy Winkler|USA|83.16
Merlin Hummel|GER|82.77
Mykhaylo Kokhan|UKR|82.02
Yann Chaussinand|FRA|81.91
Paweł Fajdek|POL|79.07
Trey Knight|USA|78.76
Valeriy Pronkin|RUS|78.73
Angelos Mantzouranis|GRE|78.61
Daniel Haugh|USA|78.55
Thomas Mardal|NOR|78.44
Tyler Williams|USA|78.30
Patrik Hájek|CZE|78.20
Konstantinos Zaltos|GRE|78.08
Ármin Szabados|HUN|78.06
Volodymyr Myslyvčuk|CZE|78.03
Denzel Comenentia|NED|78.01
Eivind Henriksen|NOR|77.70
Joaquin Gomez|ARG|77.69
Aliaksandr Shymanovich|BLR|77.43
Wojciech Nowicki|POL|77.03
Andrey Romanov|RUS|77.03
Tanner Berg|USA|76.93
Ronald Mencia Zayas|CUB|76.91
Gabriel Kehr|CHI|76.90
Hilmar Örn Jónsson|ISL|76.80
Özkan Baltaci|TUR|76.79
Tarik O'Hagan|USA|76.78
Matija Gregurić|CRO|76.68
Humberto Mansilla|CHI|76.61
Yury Vasilchanka|BLR|76.52
Christos Frantzeskakis|GRE|76.52
Kieran McKeag|USA|76.45
Rowan Hamilton|CAN|76.36
Justin Stafford|USA|76.33
Dániel Rába|HUN|76.21
Marcin Wrotyński|POL|76.17
Ioannis Korakidis|GRE|76.14
Jake Norris|GBR|76.12
Michail Anastasakis|GRE|76.09
Alex Young|USA|76.02
Mostafa Elgamel|EGY|75.98
Texas Tanner|USA|75.83
Adam Kelly|EST|75.81
Ragnar Carlsson|SWE|75.81
Henri Liipola|FIN|75.39
Jordan Geist|USA|75.33
Donát Varga|HUN|75.30
Kenneth Ikeji|GBR|75.20
`),
  ...righe('martello', 'F', 2025, `
Camryn Rogers|CAN|80.51
Brooke Andersen|USA|79.29
Rachel Richeson|USA|78.80
DeAnna Price|USA|78.53
Jie Zhao|CHN|77.60
Jiale Zhang|CHN|77.24
Krista Tervo|FIN|77.14
Silja Kosonen|FIN|77.07
Sofiya Palkina|RUS|76.63
Janee' Kassanavoid|USA|76.42
Annette Nneka Echikunwoke|USA|75.47
Jiangyan Li|CHN|75.07
Anita Włodarczyk|POL|74.70
Jinyao Gao|CHN|74.65
Katrine Koch Jacobsen|DEN|74.21
Anastasiya Grigoryeva|RUS|74.11
Bianca Florentina Ghelber|ROU|73.99
Alena Sobaleva|BLR|73.94
Rose Loga|FRA|73.17
Rosa Andreina Rodríguez|VEN|73.13
Li Ji|CHN|73.08
Beatrice Nedberge Llano|NOR|73.08
Sara Fantini|ITA|73.06
Erin Reese|USA|72.98
Anna Purchase|GBR|72.96
Janeah Stewart|USA|72.87
Jillian Weir|CAN|72.61
Aileen Kuhn|GER|72.53
Alisiya Naumova|RUS|72.36
Yelizaveta Tsareva|RUS|72.29
Anastasiya Maslova|BLR|72.20
Stamatia Alexandra Scarvelis|GRE|71.95
Nicola Tuthill|IRL|71.75
Samantha Borutta|GER|71.60
Jalani Davis|USA|71.53
Guðrún Karítas Hallgrímsdóttir|ISL|71.38
Stephanie Ratcliffe|AUS|71.37
Jillian Shippee|USA|71.37
Axi Zhang|CHN|71.34
Shelby Moran|USA|71.22
Emily Fink|USA|71.12
Shelby Frank|USA|71.05
Lara Roberts|AUS|70.97
Nayoka Clunis|JAM|70.85
Zahra Tatar|ALG|70.82
Ling Fang|CHN|70.74
Zsanett Németh|HUN|70.66
Na Luo|CHN|70.63
Ewa Różańska|POL|70.51
Suvi Niiranen|FIN|70.43
`),
  ...righe('800m', 'M', 2025, `
Emmanuel Wanyonyi|KEN|1:41.44
Djamel Sedjati|ALG|1:41.90
Marco Arop|CAN|1:41.95
Josh Hoey|USA|1:42.01
Cian McPhillips|IRL|1:42.15
Donavan Brazier|USA|1:42.16
Mohamed Attaoui|ESP|1:42.21
Cooper Lutkenhaus|USA|1:42.27
Max Burgin|GBR|1:42.29
Bryce Hoppel|USA|1:42.49
Peter Bol|AUS|1:42.55
Tshepiso Masalela|BOT|1:42.70
Gabriel Tual|FRA|1:42.72
Navasky Anderson|JAM|1:42.76
Slimane Moula|ALG|1:42.77
Handal Roban|VIN|1:42.87
Laban Kipkorir Chepkwony|KEN|1:42.96
Brandon Miller|USA|1:43.14
Jonah Koech|USA|1:43.32
Wyclife Kinyamal|KEN|1:43.37
Mark English|IRL|1:43.37
Nicholas Kiplangat Kebenei|KEN|1:43.54
Mohamed Ali Gouaned|ALG|1:43.56
Kethobogile Haingura|BOT|1:43.58
Kelvin Kimtai Loti|KEN|1:43.61
Mariano García|ESP|1:43.62
Yanis Meziane|FRA|1:43.71
Andreas Kramer|SWE|1:43.73
Tyrice Taylor|JAM|1:43.74
Eliott Crestan|BEL|1:43.79
Moad Zahafi|MAR|1:43.82
Francesco Pernici|ITA|1:43.84
Isaac Nader|POR|1:43.86
David Barroso|ESP|1:43.95
Samuel Chapple|NED|1:43.96
Marino Bloudek|CRO|1:44.01
Adrián Ben|ESP|1:44.05
Peyton Craig|AUS|1:44.07
Abderrahman El Assal|MAR|1:44.07
Ibrahim Abass M Chuot|QAT|1:44.08
Pieter Sisk|BEL|1:44.09
Henry Jonas|GBR|1:44.10
Ben Pattison|GBR|1:44.14
Patryk Sieradzki|POL|1:44.16
Alexander Stepanov|GER|1:44.17
Abdelati El Guesse|MAR|1:44.19
Niels Laros|NED|1:44.19
Maciej Wyderka|POL|1:44.23
Isaiah Harris|USA|1:44.23
Filip Ostrowski|POL|1:44.25
`),
  ...righe('800m', 'F', 2025, `
Lilian Odira|KEN|1:54.62
Keely Hodgkinson|GBR|1:54.74
Georgia Hunter Bell|GBR|1:54.90
Sarah Moraa|KEN|1:55.74
Sage Hurta-Klecker|USA|1:55.89
Audrey Werro|SUI|1:55.91
Tsige Duguma|ETH|1:56.64
Oratile Nowe|BOT|1:56.76
Anaïs Bourgoin|FRA|1:56.97
Nigist Getachew|ETH|1:57.01
Mary Moraa|KEN|1:57.10
Jessica Hull|AUS|1:57.15
Prudence Sekgodiso|RSA|1:57.16
Shafiqua Maloney|VIN|1:57.29
Addison Wiley|USA|1:57.43
Raevyn Rogers|USA|1:57.52
Halimah Nakaayi|UGA|1:57.62
Claudia Hollingsworth|AUS|1:57.67
Abbey Caldwell|AUS|1:57.70
Sarah Billings|AUS|1:57.83
Assia Raziki|MAR|1:57.87
Gabija Galvydytė|LTU|1:57.96
Ajee' Wilson|USA|1:57.98
Nia Akins|USA|1:58.09
Michaela Rose|USA|1:58.12
Roisin Willis|USA|1:58.13
Daily Cooper Gaspar|CUB|1:58.16
Meghan Hunter|USA|1:58.21
Nikki Hiltz|USA|1:58.23
Lore Hoffmann|SUI|1:58.29
Worknesh Mesele|ETH|1:58.40
Maggi Congdon|USA|1:58.42
Natoya Goule-Toppin|JAM|1:58.43
Gabriela Gajanová|SVK|1:58.53
Anna Wielgosz|POL|1:58.63
Eloisa Coiro|ITA|1:58.64
Jemma Reekie|GBR|1:58.66
Emily Mackay|USA|1:58.72
Clara Liberman|FRA|1:58.82
Maeliss Trapeau|CAN|1:58.90
Caroline Bredlinger|AUT|1:58.95
Makayla Paige|USA|1:58.97
Charne Swart|RSA|1:58.98
McKenna Keegan|USA|1:59.01
Smilla Kolbe|GER|1:59.02
Revee Walcott-Nolan|GBR|1:59.05
Angelika Sarna|POL|1:59.08
Veronica Vancardo|SUI|1:59.10
Rocio Arroyo|ESP|1:59.17
Georgia Griffith|AUS|1:59.22
`),
  ...righe('1500m', 'M', 2025, `
Azeddine Habz|FRA|3:27.49
Phanuel Kipkosgei Koech|KEN|3:27.72
George Mills|GBR|3:28.36
Festus Lagat|KEN|3:29.03
Niels Laros|NED|3:29.20
Stefan Nillessen|NED|3:29.23
Isaac Nader|POR|3:29.37
Josh Kerr|GBR|3:29.37
Abel Kipsang|KEN|3:29.46
Jakob Ingebrigtsen|NOR|3:29.63
Timothy Cheruiyot|KEN|3:29.75
Josh Hoey|USA|3:29.75
Cameron Myers|AUS|3:29.80
Reynold Cheruiyot|KEN|3:29.91
Jonah Koech|USA|3:30.17
Ethan Strand|USA|3:30.25
Narve Gilje Nordås|NOR|3:30.26
Håkon Moe Berg|NOR|3:30.28
Yared Nuguse|USA|3:30.37
Cole Hocker|USA|3:30.37
Anass Essayi|MAR|3:30.67
Tshepiso Masalela|BOT|3:30.71
Flavien Szot|FRA|3:30.74
Robert Farken|GER|3:30.80
Samuel Pihlström|SWE|3:30.87
Ruben Verheyden|BEL|3:30.99
Hobbs Kessler|USA|3:31.12
Elliot Giles|GBR|3:31.13
Brian Komen|KEN|3:31.14
Oliver Hoare|AUS|3:31.15
Tshepo Tshite|RSA|3:31.35
Federico Riva|ITA|3:31.42
Yann Schrub|FRA|3:31.42
Pierrik Jocteur-Monrozier|FRA|3:31.51
Anas Lagtiy Chaoudar|FRA|3:31.58
Jake Wightman|GBR|3:31.58
Romain Mornet|FRA|3:31.62
Paul Anselmini|FRA|3:31.63
Samuel Chapple|NED|3:31.65
Vincent Ciattei|USA|3:31.67
Adrián Ben|ESP|3:31.70
Pol Oriach|ESP|3:31.75
Pieter Sisk|BEL|3:31.85
Jude Thomas|AUS|3:31.87
José Carlos Pinto|POR|3:31.94
Gary Martin|USA|3:32.03
Cathal Doyle|IRL|3:32.15
Nuno Pereira|POR|3:32.16
Louis Gilavert|FRA|3:32.25
Ryan Mphahlele|RSA|3:32.27
`),
  ...righe('1500m', 'F', 2025, `
Faith Kipyegon|KEN|3:48.68
Gudaf Tsegay|ETH|3:50.62
Jessica Hull|AUS|3:52.67
Beatrice Chebet|KEN|3:54.73
Georgia Hunter Bell|GBR|3:54.76
Dorcus Ewoi|KEN|3:54.92
Nelly Chepchirchir|KEN|3:55.25
Nikki Hiltz|USA|3:55.94
Freweyni Hailu|ETH|3:56.30
Linden Hall|AUS|3:56.33
Birke Haylom|ETH|3:56.79
Sinclaire Johnson|USA|3:56.93
Sarah Healy|IRL|3:57.15
Laura Muir|GBR|3:57.63
Saron Berhe|ETH|3:57.72
Heather Maclean|USA|3:57.79
Emily Mackay|USA|3:57.91
Worknesh Mesele|ETH|3:57.95
Klaudia Kazimierska|POL|3:57.95
Susan Lokayo Ejore|KEN|3:58.05
Sarah Madeleine|FRA|3:58.09
Nadia Battocletti|ITA|3:58.15
Georgia Griffith|AUS|3:58.25
Agathe Guillemot|FRA|3:58.29
Marta Pérez|ESP|3:58.54
Diribe Welteji|ETH|3:58.89
Marta Zenoni|ITA|3:59.16
Sarah Billings|AUS|3:59.24
Abbey Caldwell|AUS|3:59.32
Salomé Afonso|POR|3:59.32
Marta García|ESP|3:59.40
Jemma Reekie|GBR|3:59.42
Esther Guerrero|ESP|3:59.45
Gaia Sabbatini|ITA|3:59.49
Gabriela Debues-Stafford|CAN|3:59.65
Revee Walcott-Nolan|GBR|3:59.89
Hirut Meshesha|ETH|4:00.06
Josette Andrews|USA|4:00.10
Likina Amebaw|ETH|4:00.14
Águeda Marqués|ESP|4:00.57
Helen Schlachtenhaufen|USA|4:00.69
Netsanet Desta|ETH|4:00.69
Gabija Galvydytė|LTU|4:00.71
Erin Wallace|GBR|4:01.10
Axumawit Embaye|ETH|4:01.46
Joceline Wind|SUI|4:01.59
Weronika Lizakowska|POL|4:01.70
Katie Snowden|GBR|4:02.02
Riley Chamberlin|USA|4:02.03
Wilma Nielsen|SWE|4:02.05
`),
  ...righe('5000m', 'M', 2025, `
Grant Fisher|USA|12:44.09
Andreas Almgren|SWE|12:44.27
Nico Young|USA|12:45.27
Biniam Mehary|ETH|12:45.93
Kuma Girma|ETH|12:46.41
George Mills|GBR|12:46.59
Hagos Gebrhiwet|ETH|12:46.82
Thierry Ndikumwenayo|ESP|12:47.67
Yomif Kejelcha|ETH|12:47.84
Graham Blanks|USA|12:48.20
Birhanu Balew|BRN|12:48.67
Mezgebu Sime|ETH|12:49.80
Berihu Aregawi|ETH|12:50.45
Dominic Lokinyomo Lobalu|SUI|12:50.87
Jacob Krop|KEN|12:51.16
Jimmy Gressier|FRA|12:51.59
Samuel Tefera|ETH|12:53.44
Mohamed Abdilaahi|GER|12:53.63
Adriaan Wildschutt|RSA|12:55.02
Soufiane El Bakkali|MAR|12:55.49
Etienne Daguinos|FRA|12:55.76
Yann Schrub|FRA|12:56.57
Nicholas Kipkorir|KEN|12:56.81
Cooper Teare|USA|12:57.05
Cornelius Kemboi|KEN|12:57.80
Cole Hocker|USA|12:57.82
Oscar Chelimo|UGA|12:58.13
Ky Robinson|AUS|12:58.38
Amon Kemboi|KEN|12:58.51
Eduardo Herrera|MEX|12:58.57
Luis Grijalva|GUA|12:58.58
Mathew Kipchumba Kipsang|KEN|12:58.61
Isaac Kimeli|BEL|12:58.78
Santiago Catrofe|URU|12:59.26
Jack Rayner|AUS|12:59.43
Telahun Haile Bekele|ETH|12:59.59
Gulveer Singh|IND|12:59.77
Brian Muange Musau|KEN|12:59.82
Keneth Kiprop|UGA|13:00.49
Saymon Amanuel|ERI|13:01.85
`),
  ...righe('5000m', 'F', 2025, `
Beatrice Chebet|KEN|13:58.06
Agnes Jebet Ngetich|KEN|14:01.29
Gudaf Tsegay|ETH|14:04.41
Freweyni Hailu|ETH|14:19.33
Nadia Battocletti|ITA|14:23.15
Birke Haylom|ETH|14:24.20
Josette Andrews|USA|14:25.37
Medina Eisa|ETH|14:25.92
Chaltu Dida|ETH|14:27.11
Aleshign Baweke|ETH|14:27.33
Hirut Meshesha|ETH|14:29.29
Margaret Akidor|KEN|14:30.34
Caroline Nyaga|KEN|14:30.45
Likina Amebaw|ETH|14:30.54
Fantaye Belayneh|ETH|14:30.90
Rose Davies|AUS|14:31.45
Asayech Ayichew|ETH|14:31.88
Fotyen Tesfay|ETH|14:32.55
Aynadis Mebratu|ETH|14:32.58
Georgia Griffith|AUS|14:32.82
Marta García|ESP|14:33.40
Maureen Koster|NED|14:33.97
Nozomi Tanaka|JPN|14:34.10
Marta Alemayo|ETH|14:34.46
Jana Van Lent|BEL|14:37.47
Weini Kelati Frezghi|USA|14:37.77
Yenawa Nbret|ETH|14:39.13
Karissa Schweizer|USA|14:39.30
Hannah Nuttall|GBR|14:39.48
Innes Fitzgerald|GBR|14:39.56
Janeth Chepngetich|KEN|14:40.25
Joy Cheptoyek|UGA|14:40.27
Lauren Ryan|AUS|14:40.39
Elise Vanderelst|BEL|14:40.70
Sembo Almayew|ETH|14:41.75
Mekedes Alemeshete|ETH|14:43.29
Linden Hall|AUS|14:43.61
Diane Van Es|NED|14:43.80
Jane Hedengren|USA|14:44.79
Caroline Kariba|KEN|14:44.96
`),
  ...righe('10000m', 'M', 2025, `
Biniam Mehary|ETH|26:43.82
Berihu Aregawi|ETH|26:43.84
Selemon Barega|ETH|26:44.13
Edwin Kurgat|KEN|26:46.35
Ishmael Rokitto Kipkurui|KEN|26:47.72
Benson Kiplangat|KEN|26:50.00
Habtom Samuel|ERI|26:51.06
Adriaan Wildschutt|RSA|26:51.27
Telahun Haile Bekele|ETH|26:52.79
Stanley Waithaka Mburu|KEN|26:56.36
Graham Blanks|USA|26:57.30
Gulveer Singh|IND|27:00.22
Samuel Kibathi|KEN|27:01.70
Anthony Kibe|KEN|27:02.15
Emmanuel Moi Maru|KEN|27:02.47
Ahmed Muhumed|USA|27:03.19
Kelvin Kiplagat|KEN|27:03.21
Mezgebu Sime|ETH|27:04.17
Evans Keitany Kiptum|KEN|27:05.78
Mebuki Suzuki|JPN|27:05.92
Nicholas Kipkorir|KEN|27:06.76
Samwel Chebolei Masai|KEN|27:07.65
Raphael Dapash|KEN|27:09.32
Casey Clinger|USA|27:11.00
Denis Kipngetich|KEN|27:20.10
Sean McGorty|USA|27:20.19
James Mwanzia Mutuku|KEN|27:20.79
Yamato Yoshii|JPN|27:21.45
Dennis Mutuku|KEN|27:22.89
Kiprono Sitonik|KEN|27:23.21
Michael Kiplangat Temoi|KEN|27:23.87
Amos Kipkemoi|KEN|27:24.47
Andrew Hunter|USA|27:24.49
Gideon Kipkertich Rono|KEN|27:24.72
Richard Lodung|KEN|27:25.49
Shadrack Rono|KEN|27:26.53
Efrem Gidey|IRL|27:26.95
Emile Cairess|GBR|27:27.95
Shadrack Kipkemei|KEN|27:29.15
Brian Kibor Akotir|KEN|27:29.38
`),
  ...righe('10000m', 'F', 2025, `
Janeth Chepngetich|KEN|30:27.02
Agnes Jebet Ngetich|KEN|30:27.38
Beatrice Chebet|KEN|30:27.52
Yenawa Nbret|ETH|30:28.82
Miriam Chebet|KEN|30:32.90
Chaltu Dida|ETH|30:33.86
Rose Davies|AUS|30:34.11
Elise Cranny|USA|30:36.56
Senayet Getachew|ETH|30:36.67
Nadia Battocletti|ITA|30:38.23
Weini Kelati Frezghi|USA|30:38.60
Gudaf Tsegay|ETH|30:39.65
Karoline Bjerkeli Grøvdal|NOR|30:41.66
Joy Cheptoyek|UGA|30:41.95
Caroline Kariba|KEN|30:43.42
Asayech Ayichew|ETH|30:47.24
Daisy Jepkemei|KAZ|30:48.44
Calli Hauger-Thackery|GBR|30:50.64
Tabithanjeri Kamau|KEN|30:50.99
Isobel Batt-Doyle|AUS|30:51.27
Aynadis Mebratu|ETH|30:53.29
Nozomi Tanaka|JPN|30:54.40
Ejgayehu Taye|ETH|30:55.52
Ririka Hironaka|JPN|30:56.32
Taylor Roe|USA|30:58.66
Lauren Ryan|AUS|30:58.69
Emily Infeld|USA|30:59.38
Jessica McClain|USA|30:59.71
Dominique Scott|RSA|31:02.32
Pamela Kosgei|KEN|31:02.73
Wakana Kabasawa|JPN|31:03.14
Esther Muthoni|KEN|31:05.22
Kana Mizumoto|JPN|31:07.21
Diane Van Es|NED|31:08.05
Miu Saito|JPN|31:08.28
Mikuni Yada|JPN|31:12.21
Jana Van Lent|BEL|31:14.22
Pauline Kamulu|KEN|31:16.09
Elisa Palmero|ITA|31:18.03
Risa Yamazaki|JPN|31:18.54
`),
  ...righe('ostacoli', 'M', 2025, `
Cordell Tinch|USA|12.87
Rachid Muratake|JPN|12.92
Just Kwaou-Mathey|FRA|12.99
Trey Cunningham|USA|13.00
Ja'Kobe Tharp|USA|13.01
Dylan Beard|USA|13.02
Sasha Zhoya|FRA|13.06
Rasheed Broadbell|JAM|13.06
Jason Joseph|SUI|13.07
Jamal Britt|USA|13.08
Orlando Bennett|JAM|13.08
Freddie Crittenden|USA|13.09
Grant Holloway|USA|13.11
Demario Prince|JAM|13.12
Tatsuki Abe|JPN|13.12
Enrique Llopis|ESP|13.12
Tyler Mason|JAM|13.12
Zhuoyi Xu|CHN|13.12
Kendrick Smallwood|USA|13.13
Jamar Marshall|USA|13.13
Zachary Extine|USA|13.13
Junxi Liu|CHN|13.14
Enzo Diessl|AUT|13.17
Ja'qualon Scott|USA|13.18
Wilhem Belocian|FRA|13.18
Lorenzo Ndele Simonelli|ITA|13.18
Yuanjiang Chen|CHN|13.18
Shunsuke Izumiya|JPN|13.19
Michael Obasuyi|BEL|13.19
Eric Edwards|USA|13.20
Demaris Waters|USA|13.21
Shusei Nomoto|JPN|13.21
Job Geerds|NED|13.22
Jerome Campbell|JAM|13.23
De'Vion Wilson|USA|13.24
Hansle Parchment|JAM|13.24
Asier Martínez|ESP|13.26
Aurel Manga|FRA|13.26
Louis François Mendy|SEN|13.27
Jaheim Stern|JAM|13.27
`),
  ...righe('ostacoli', 'F', 2025, `
Masai Russell|USA|12.17
Tia Jones|USA|12.19
Grace Stark|USA|12.21
Tobi Amusan|NGR|12.24
Tonea Marshall|USA|12.24
Ditaji Kambundji|SUI|12.24
Nadine Visser|NED|12.28
Ackera Nugent|JAM|12.30
Danielle Williams|JAM|12.31
Alaysha Johnson|USA|12.32
Alia Armstrong|USA|12.32
Megan Tapper|JAM|12.34
Kendra Harrison|USA|12.37
Pia Skrzyszowska|POL|12.49
Devynne Charlton|BAH|12.49
Christina Clemons|USA|12.54
Kerrica Hill|JAM|12.54
Destiny Huven|USA|12.55
Marione Fourie|RSA|12.60
Habiba Harris|JAM|12.62
Viktória Forster|SVK|12.63
Amoi Brown|JAM|12.67
Lotta Harala|FIN|12.67
Maayke Tjin-A-Lim|NED|12.68
Giada Carmassi|ITA|12.69
Aasia Laurencin|LCA|12.69
Jasmine Camacho-Quinn|PUR|12.70
Sydney McLaughlin-Levrone|USA|12.70
Maribel Vanessa Caicedo|ECU|12.70
Sacha Alessandrini|FRA|12.70
Greisys Roble|CUB|12.71
Yanla Ndjip-Nyemeck|BEL|12.71
Alexandra Webster|USA|12.71
Hitomi Nakajima|JPN|12.71
Nooralotta Neziri|FIN|12.73
Mako Fukube|JPN|12.73
Aaliyah McCormick|USA|12.74
Luca Kozák|HUN|12.75
Sarah Lavin|IRL|12.76
Yanique Thompson|JAM|12.76
`),
  ...righe('400hs', 'M', 2025, `
Karsten Warholm|NOR|46.28
Rai Benjamin|USA|46.52
Alison dos Santos|BRA|46.65
Abderrahman Samba|QAT|47.06
Ezekiel Nathaniel|NGR|47.11
Ismail Doudai Abakar|QAT|47.61
Caleb Dean|USA|47.76
Chris Robinson|USA|47.76
Emil Agyekum|GER|47.83
Fyodor Ivanov|RUS|47.94
CJ Allen|USA|48.00
Owe Fischer-Breiholz|GER|48.01
Malik James-King|JAM|48.01
Roshawn Clarke|JAM|48.02
Matheus Lima|BRA|48.08
Trevor Bassitt|USA|48.14
Tyri Donovan|GBR|48.21
Matic Ian Guček|SLO|48.25
Wiseman Were Mukhobe|KEN|48.27
Ja'qualon Scott|USA|48.29
Bassem Hemeida|QAT|48.29
Alastair Chalmers|GBR|48.30
İsmail Nezir|TUR|48.33
Vít Müller|CZE|48.41
Seamus Derbyshire|GBR|48.42
Assinie Wilson|JAM|48.42
Kemorena Tisang|BOT|48.42
Saad Hinti|MAR|48.44
Alessandro Sibilio|ITA|48.44
Jesús David Delgado|ESP|48.45
Oskar Edlund|SWE|48.52
Victor Ntweng|BOT|48.54
Ken Toyoda|JPN|48.55
Sabelo Dhlamini|RSA|48.57
Joshua Faulds|GBR|48.59
Daiki Ogawa|JPN|48.61
Antti Sainio|FIN|48.61
Vladimir Lysenko|RUS|48.64
Kody Blackwood|USA|48.66
Julien Bonvin|SUI|48.66
`),
  ...righe('400hs', 'F', 2025, `
Femke Bol|NED|51.54
Sydney McLaughlin-Levrone|USA|52.07
Jasmine Jones|USA|52.08
Savannah Sutherland|CAN|52.46
Dalilah Muhammad|USA|52.58
Gianna Woodruff|PAN|52.66
Anna Cockrell|USA|52.89
Emma Zapletalová|SVK|53.00
Rachel Glenn|USA|53.48
Naomi Van Den Broeck|BEL|53.65
Andrenette Knight|JAM|53.67
Akala Garrett|USA|53.73
Rushell Clayton|JAM|53.81
Shiann Salmon|JAM|54.03
Kemi Adekoya|BRN|54.04
Emily Newnham|GBR|54.08
Ayomide Folorunso|ITA|54.21
Zenéy van der Walt|RSA|54.25
Amalie Iuel|NOR|54.28
Sarah Carli|AUS|54.29
Eileen Demes|GER|54.29
Alice Muraro|ITA|54.36
Anna Hall|USA|54.43
Paulien Couckuyt|BEL|54.45
Fatoumata Binta Diallo|POR|54.45
Michelle Smith|ISV|54.56
Elena Kelety|GER|54.61
Jiadie Mo|CHN|54.63
Lina Nielsen|GBR|54.66
Tia-Adana Belle|BAR|54.67
Daniela Ledecká|SVK|54.69
Emiliya Tangara|RUS|54.82
Louise Maraval|FRA|54.86
Rebecca Sartori|ITA|54.91
Hilla Uusimäki|FIN|54.94
Sanique Walker|JAM|54.94
Lena Wernli|SUI|55.02
Alanah Yukich|AUS|55.04
Anna Gryc|POL|55.07
Ashley Miller|ZIM|55.09
`),
  ...righe('siepi', 'M', 2025, `
Soufiane El Bakkali|MAR|8:00.70
Frederik Ruppert|GER|8:01.49
Ryuji Miura|JPN|8:03.43
Edmund Serem|KEN|8:04.00
Samuel Firewu|ETH|8:05.61
Salah Eddine Ben Yazide|MAR|8:06.44
Lamecha Girma|ETH|8:07.01
Simon Kiprop Koech|KEN|8:07.12
Getnet Wale|ETH|8:07.57
Abrham Sime|ETH|8:07.92
Karl Bebendorf|GER|8:08.21
Mohamed Amin Jhinaoui|TUN|8:08.27
Ruben Querinjean|LUX|8:09.47
Hailemariyam Amare|ETH|8:09.95
Abraham Kibiwot|KEN|8:10.13
Matthew Wilkinson|USA|8:10.23
Daniel Arce|ESP|8:10.58
Isaac Updike|USA|8:10.59
Nicolas-Marie Daru|FRA|8:10.69
Samuel Duguna|ETH|8:10.87
Louis Gilavert|FRA|8:11.49
Djilali Bedrani|FRA|8:11.52
Milkesa Fikadu|ETH|8:11.97
Baptiste Fourmont|FRA|8:12.10
Etson Barros|POR|8:12.19
Nahuel Carabaña|AND|8:12.80
Alexis Miellet|FRA|8:12.89
Edward Trippas|AUS|8:13.15
Alejandro Quijada|ESP|8:13.40
Luc Le Baron|FRA|8:13.70
Geordie Beamish|NZL|8:13.86
Geoffrey Kipkemoi Kirwa|KEN|8:13.89
Faid El Mostafa|MAR|8:14.04
Niklas Buchholz|GER|8:14.05
Daniel Michalski|USA|8:14.07
Kenneth Rooks|USA|8:14.25
Ala Zoghlami|ITA|8:14.38
Jean-Simon Desgagnés|CAN|8:14.40
Tim Van de Velde|BEL|8:14.40
Nathan Mountain|USA|8:14.43
`),
  ...righe('siepi', 'F', 2025, `
Winfred Yavi|BRN|8:45.25
Faith Cherotich|KEN|8:48.71
Peruth Chemutai|UGA|8:51.77
Doris Lemngole|KEN|8:58.15
Sembo Almayew|ETH|8:58.86
Norah Jeruto|KAZ|8:59.46
Marwa Bouzayani|TUN|9:01.46
Gabrielle Jennings|USA|9:06.61
Alemnat Walle|ETH|9:06.88
Kaylee Mitchell|USA|9:08.66
Lexy Halladay|USA|9:08.68
Courtney Wayment|USA|9:08.88
Lea Meyer|GER|9:09.21
Alice Finot|FRA|9:09.84
Angelina Napoleon|USA|9:10.72
Kristlin Gear|USA|9:11.64
Lomi Muleta|ETH|9:12.20
Parul Chaudhary|IND|9:12.46
Olivia Markezich|USA|9:14.26
Gesa Felicitas Krause|GER|9:14.27
Elise Thorner|GBR|9:14.37
Flavie Renouard|FRA|9:14.69
Olivia Gürth|GER|9:15.28
Pamela Kosgei|KEN|9:15.93
Daisy Jepkemei|KAZ|9:15.98
Valerie Constien|USA|9:16.57
Sarah Tait|GBR|9:18.66
Celestine Jepkosgei Biwot|KEN|9:19.22
Adva Cohen|ISR|9:19.90
Rihab Dhahri|TUN|9:20.17
Wosane Asefa|ETH|9:20.83
Marta Serrano|ESP|9:21.00
Ilona Mononen|FIN|9:21.02
Cara Feain-Ryan|AUS|9:22.01
Angelina Ellis|USA|9:22.03
Kinga Królik|POL|9:22.14
Caren Chebet|KEN|9:22.35
Sophie Novak|USA|9:23.04
Gracie Hyde|USA|9:24.62
Miu Saito|JPN|9:24.72
`),
  ...righe('lungo', 'M', 2025, `
Miltiadis Tentoglou|GRE|8.46
Mattia Furlani|ITA|8.39
Tajay Gayle|JAM|8.34
Simon Ehammer|SUI|8.34
Liam Adcock|AUS|8.34
Jorge A. Hodelín|CUB|8.34
Carey McLeod|JAM|8.33
Yuhao Shi|CHN|8.33
Wayne Pinnock|JAM|8.29
Tom Campagne|FRA|8.27
Thobias Montler|SWE|8.25
Anvar Anvarov|UZB|8.25
Erwan Konate|FRA|8.25
Mingkun Zhang|CHN|8.24
Juan Miguel Echevarría|CUB|8.24
Peiqi Gao|CHN|8.23
Emanuel Archibald|GUY|8.22
Heng Shu|CHN|8.22
Shunsuke Izumiya|JPN|8.21
Bozhidar Sarâboyukov|BUL|8.21
Lester Lescay|ESP|8.21
Yu-Tang Lin|TPE|8.20
Gerson Baldé|POR|8.20
Sander Skotheim|NOR|8.19
Jacob Fincham-Dukes|GBR|8.18
Julien Pauthonnier|FRA|8.18
Marquis Dendy|USA|8.18
Cheswill Johnson|RSA|8.17
JC Stevenson|USA|8.17
Damarcus Simpson|USA|8.17
William Williams|USA|8.16
Kelsey Daniel|TTO|8.16
Chenlong Yuan|CHN|8.16
Nikaoli Williams|JAM|8.16
Kemonie Briggs|USA|8.15
Hibiki Tsuha|JPN|8.15
Isaac Grimes|USA|8.15
Jaime Guerra|ESP|8.14
Cameron Crump|USA|8.14
Nikolaos Stamatonikolos|GRE|8.14
Keito Yamaura|JPN|8.14
Xinyu Wei|CHN|8.13
Aniel Molina|CUB|8.13
Sreeshankar|IND|8.13
Treyshon Malone|USA|8.12
Jarrion Lawson|USA|8.12
Junhui Tao|CHN|8.11
José Mandros|PER|8.11
Riku Ito|JPN|8.11
Jeremiah Davis|USA|8.11
`),
  ...righe('lungo', 'F', 2025, `
Tara Davis-Woodhall|USA|7.13
Malaika Mihambo|GER|7.07
Larissa Iapichino|ITA|7.06
Alexis Brown|USA|7.03
Hilary Kpatcha|FRA|7.02
Anthaya Charlton|BAH|6.98
Claire Bryant|USA|6.96
Natalia Linares|COL|6.95
Tacoria Humphrey|USA|6.94
Pauline Hondema|NED|6.91
Annik Kälin|SUI|6.90
Quanesha Burks|USA|6.90
Alyssa Jones|USA|6.90
Jazmin Sawyers|GBR|6.89
Monae' Nichols|USA|6.88
Jasmine Moore|USA|6.85
Lissandra Maysa Campos|BRA|6.84
Agate de Sousa|POR|6.84
Fátima Diame|ESP|6.82
Alina Rotaru-Kottmann|ROU|6.81
Mikaelle Assani|GER|6.79
Yelena Sokolova|RUS|6.79
Evelyn Yankey|ESP|6.79
Ese Brume|NGR|6.79
Taliyah Brooks|USA|6.79
Yekaterina Levitskaya|RUS|6.78
Alysbeth Felix Boyer|PUR|6.78
Rosmaiby T. Quesada|CUB|6.77
Viktoria Gorlova|RUS|6.76
Marthe Koala|BUR|6.76
Milica Gardašević|SRB|6.75
Maja Åskag|SWE|6.75
Jasmine Akins|USA|6.75
Ackelia Smith|JAM|6.74
Petra Bánhidi-Farkas|HUN|6.74
Tyra Gittens-Spotsville|TTO|6.73
Synclair Savage|USA|6.72
Ramilya Valitova|RUS|6.72
Nemata Nikiema|BUR|6.72
Sophia Beckmon|USA|6.71
Anna Matuszewicz|POL|6.71
Plamena Mitkova|BUL|6.70
Nicole Warwick|USA|6.70
Esraa Owis|EGY|6.70
Taisiya Dmitriyeva|RUS|6.70
Irati Mitxelena|ESP|6.70
Khaddi Sagnia|SWE|6.69
Jessica Kähärä|FIN|6.68
Shiqi Xiong|CHN|6.68
Funminiyi Olajide|GBR|6.67
`),
  ...righe('alto', 'M', 2025, `
Hamish Kerr|NZL|2.36
Danil Lysenko|RUS|2.35
Oleh Doroshchuk|UKR|2.34
Sanghyeok Woo|KOR|2.34
Jan Štefela|CZE|2.33
Yuto Seko|JPN|2.33
Jonathan Kapitolnik|ISR|2.31
Stefano Sottile|ITA|2.31
Raymond Richards|JAM|2.30
Matteo Sioli|ITA|2.30
Matvey Tychinkin|RUS|2.30
Scottie Vines|USA|2.29
Riyon Rankin|USA|2.29
Tomohiro Shinno|JPN|2.29
Ryoichi Akamatsu|JPN|2.29
Tyus Wilson|USA|2.28
Elijah Kosiba|USA|2.28
Donald Thomas|BAH|2.28
JuVaughn Harrison|USA|2.28
Sarvesh Anil Kushare|IND|2.28
Yaroslav Kutkovoy|RUS|2.27
Ilya Ivanyuk|RUS|2.27
Chao-Hsuan Fu|TPE|2.27
Dmytro Nikitin|UKR|2.27
Yuhang Duan|CHN|2.27
Yong Zha|CHN|2.27
Takashi Eto|JPN|2.27
Zhen Wang|CHN|2.27
Arvesta Troupe|USA|2.27
Kason O'Riley|USA|2.27
Jaivon Harrison|USA|2.27
Thomas Carmoy|BEL|2.27
Naoto Hasegawa|JPN|2.27
Stepan Vetkin|RUS|2.27
Juozas Baikštys|LTU|2.27
Tobias Potye|GER|2.27
Antrea Mita|GRE|2.26
Manuel Lando|ITA|2.26
Shelby McEwen|USA|2.26
Jef Vermeiren|BEL|2.26
Romaine Beckford|JAM|2.26
Mikołaj Szczęsny|POL|2.26
Matyáš Čudlý|CZE|2.26
Tihomir Ivanov|BUL|2.25
Luis Enrique Zayas|CUB|2.25
Erick Portillo|MEX|2.25
Vernon Turner|USA|2.25
Kyren Washington|USA|2.25
Kampton Kam|SGP|2.25
Sota Haraguchi|JPN|2.25
`),
  ...righe('alto', 'F', 2025, `
Nicola Olyslagers|AUS|2.04
Yaroslava Mahuchikh|UKR|2.02
Mariya Kochanova|RUS|2.00
Christina Honsel|GER|2.00
Morgan Lake|GBR|2.00
Yuliia Levchenko|UKR|2.00
Maria Żodzik|POL|2.00
Eleanor Patterson|AUS|1.99
Rachel Glenn|USA|1.98
Imke Onnen|GER|1.98
Temitope Simbiat Adeshina|NGR|1.97
Vashti Cunningham|USA|1.97
Merel Maes|BEL|1.97
Angelina Topić|SRB|1.97
Kristina Korolyova|RUS|1.96
Elena Kulichenko|CYP|1.96
Karyna Demidik|BLR|1.95
Anna Hall|USA|1.95
Natalya Spiridonova|RUS|1.95
Jenna Rogers|USA|1.94
Charity Hufnagel|USA|1.94
Michaela Hrubá|CZE|1.94
Engla Nilsson|SWE|1.94
Sanaa Barnes|USA|1.94
Kateryna Tabashnyk|UKR|1.93
Lilianna Bátori|HUN|1.93
Rose Amoanimaa Yeboah|GHA|1.93
Buse Savaşkan|TUR|1.93
Dacsy Adelina Brisón|CUB|1.93
Nagisa Takahashi|JPN|1.92
Lamara Distin|JAM|1.92
Idea Pieroni|ITA|1.92
Asia Tavernini|ITA|1.92
Yelizaveta Valuyeva|BLR|1.92
Jana Koščak|CRO|1.92
Marija Vuković|MNE|1.92
Emily Whelan|AUS|1.91
Emma Gates|USA|1.91
Tatiana Gkousin|GRE|1.91
Una Stancev|ESP|1.91
Britt Weerman|NED|1.91
Joana Herrmann|GER|1.91
Styliana Ioannidou|CYP|1.91
Darya Yermolova|RUS|1.91
Paulina Borys|POL|1.90
Bianca Stichling|GER|1.90
Polina Parfenenko|RUS|1.90
Marysabel Senyu|DOM|1.90
Kristi Snyman|RSA|1.90
Fatoumata Balley|GUI|1.90
`),
  ...righe('peso', 'M', 2025, `
Leonardo Fabbri|ITA|22.82
Joe Kovacs|USA|22.48
Josh Awotunde|USA|22.47
Payton Otterdahl|USA|22.35
Ryan Crouser|USA|22.34
Adrian Piperi|USA|22.29
Roger Steen|USA|22.11
Chukwuebuka Enekwechi|NGR|22.10
Rajindra Campbell|JAM|22.04
Uziel Muñoz|MEX|21.97
Tom Walsh|NZL|21.94
Jacko Gill|NZL|21.85
Zane Weir|ITA|21.84
Jordan Geist|USA|21.52
Aleh Tamashevich|BLR|21.52
Wictor Petersson|SWE|21.49
Willian Dourado|BRA|21.41
Jason Swarens|USA|21.37
Konrad Bukowiecki|POL|21.33
Andrei Rares Toader|ROU|21.27
Tomáš Staněk|CZE|21.26
Marcus Thomsen|NOR|21.23
Tarik O'Hagan|USA|21.11
Scott Lincoln|GBR|21.09
Armin Sinančević|SRB|21.07
Nick Ponzio|ITA|21.04
Welington Morais|BRA|20.92
Semen Borodayev|RUS|20.91
Chris van Niekerk|RSA|20.86
Yousef Mahmod Ali Bakhit Ahmad|EGY|20.85
Giorgi Mujaridze|GEO|20.82
Jordan West|USA|20.80
Riccardo Ferrara|ITA|20.76
Eric Favors|IRL|20.75
Thomas Kitchell|USA|20.74
Aiden Smith|RSA|20.73
Juan Carley Vázquez Gómez|CUB|20.68
Zach Landa|USA|20.64
Fred Moudani-Likibi|FRA|20.62
Maksim Afonin|RUS|20.62
Mesud Pezer|BIH|20.56
Daniel McArthur|USA|20.54
Christopher Licata|USA|20.46
T'Mond Johnson|USA|20.45
Nikolas Curtiss|USA|20.44
Jialiang Xing|CHN|20.44
Brandon Lloyd|JAM|20.43
Tsanko Arnaudov|POR|20.38
Eric Maihöfer|GER|20.37
Yauheni Bryhi|BLR|20.37
`),
  ...righe('peso', 'F', 2025, `
Chase Jackson|USA|20.95
Jessica Schilder|NED|20.69
Sarah Mitton|CAN|20.68
Yemisi Ogunleye|GER|20.27
Jaida Ross|USA|20.13
Maddison-Lee Wesche|NZL|20.06
Maggie Ewen|USA|19.94
Lijiao Gong|CHN|19.79
Axelina Johansson|SWE|19.72
Fanny Roos|SWE|19.66
Mya Lesnar|USA|19.60
Jessica Ramsey|USA|19.56
Linru Zhang|CHN|19.47
Keayla Dove|USA|19.46
Yue Ma|CHN|19.33
Danniel Thomas-Dodd|JAM|19.30
Auriol Dongmo|POR|19.26
Katharina Maisch|GER|19.25
Jessica Inchude|POR|19.21
Jessica Woodard|USA|19.10
Abby Moore|USA|19.00
Jiayuan Song|CHN|18.95
Akaoma Odeluga|USA|18.93
Abria Smith|USA|18.92
Nina Chioma Ndubuski|GER|18.91
Alina Kenzel|GER|18.91
Jorinde van Klinken|NED|18.89
Aliona Dubitskaya|BLR|18.73
Jayden Ulrich|USA|18.52
Sara Lennman|SWE|18.45
Emilia Kangas|FIN|18.42
Eliana Bandeira|POR|18.40
Gracelyn Leiseth|USA|18.31
Alyona Gordeyeva|RUS|18.27
Elizabeth Tapper|USA|18.26
Melanie Duron|USA|18.21
Mye'Joi Williams|USA|18.18
Treneese Hamilton|DMA|18.14
Yue Sun|CHN|18.14
Colette Uys|RSA|18.14
Adelaide Aquilla|USA|18.12
Lloydricia Cameron|JAM|18.12
Ching-Yuan Chiang|TPE|18.08
Paige Low|USA|18.05
Eveliina Rouvali|FIN|18.03
Kelsie Murrel-Ross|GRN|18.00
Ashley Erasmus|RSA|17.99
Rosa Angelica Santana|DOM|17.97
Kalynn Meyer|USA|17.96
Alena Trus|BLR|17.96
`),
  ...righe('disco', 'M', 2025, `
Mykolas Alekna|LTU|75.56
Matthew Denny|AUS|74.78
Kristjan Čeh|SLO|72.36
Ralford Mullings|JAM|72.01
Sam Mattis|USA|71.27
Clemens Prüfer|GER|71.01
Lawrence Okoye|GBR|70.76
Daniel Ståhl|SWE|70.47
Lolassonn Djouhan|FRA|70.25
Roje Stona|JAM|70.17
Mika Sosna|GER|70.05
Henrik Janssen|GER|69.94
Claudio Romero|CHI|69.65
Shaquille Emanuelson|NED|69.65
Steven Richter|GER|69.61
Connor Bell|NZL|69.51
Mauricio Ortega|COL|69.00
Marcus Gustaveson|USA|69.00
Reggie Jagers III|USA|68.52
Jordan Guehaseim|FRA|68.51
Robbie Zorawar Otal|USA|68.41
Juan Caicedo|ECU|68.05
Nicholas Percy|GBR|67.86
Alex Rose|SAM|67.52
Emanuel Sousa|POR|67.51
Mario Alberto Díaz|CUB|67.44
Abuduaini Tuergong|CHN|67.29
Joseph Brown|USA|67.25
Ruben Rolvink|NED|67.18
Martynas Alekna|LTU|67.16
Lukas Weißhaidinger|AUT|67.03
Marek Bárta|CZE|67.00
Andrew Evans|USA|66.99
Andrius Gudžius|LTU|66.86
Alin Alexandru Firfirică|ROU|66.36
Fedrick Dacres|JAM|66.33
Alessio Mannucci|ITA|65.60
Diego Casas|ESP|65.54
Victor Hogan|RSA|65.51
Daniel Jasinski|GER|65.33
Mitch Weber|USA|65.21
Dimitrios Pavlidis|GRE|65.11
Aleksey Khudyakov|RUS|65.04
Oussama Khennoussi|ALG|64.54
Yasiel Sotero|ESP|64.53
Masateru Yugami|JPN|64.48
Francois Prinsloo|RSA|64.48
Uladzislau Puchko|BLR|63.94
Marius Karges|GER|63.92
Trevor Gunzell|JAM|63.88
`),
  ...righe('disco', 'F', 2025, `
Valarie Allman|USA|73.52
Laulauga Tausaga|USA|70.72
Jayden Ulrich|USA|69.39
Veronica Fraley|USA|68.72
Gabi Jacobs|USA|68.21
Yaimé Pérez|CUB|68.18
Shanice Craft|GER|68.10
Cierra Jackson|USA|67.82
Kristin Pudenz|GER|67.61
Jorinde van Klinken|NED|67.50
Silinda Moráles|CUB|67.25
Sandra Elkasević|CRO|66.97
Erika Beistle|USA|66.63
Vanessa Kamga|SWE|66.61
Marike Steinacker|GER|65.64
Bin Feng|CHN|65.52
Alida van Daalen|NED|65.45
Liliana Cá|POR|65.35
Samantha Hall|JAM|64.97
Obiageri Amaechi|NGR|64.80
Claudine Vita|GER|64.78
Chioma Onyekwere-Lyons|NGR|64.12
Marija Tolj|CRO|64.04
Melina Robert-Michon|FRA|64.02
Denia Caballero|CUB|63.87
Micaela Hazlewood|USA|63.85
Izabela da Silva|BRA|63.75
Amanda Ngandu-Ntumba|FRA|63.59
Alexandra Emilianov|MDA|63.46
Shelby Frank|USA|63.37
Andressa de Morais|BRA|63.32
Irina Rodrigues|POR|63.17
Daisy Osakue|ITA|63.10
Julia Tunks|CAN|62.95
Antonia Kinzel|GER|62.64
Caisa-Marie Lindfors|SWE|62.57
Fang Wang|CHN|62.30
Michaëlle Valentin|HAI|62.17
Joyce Oguama|GER|62.06
Elena Bruckner|USA|61.99
Melany Matheus|CUB|61.93
Ieva Gumbs|LTU|61.86
Daria Zabawska|POL|61.65
Violetta Ignatyeva|RUS|61.59
Nora Monie|CMR|61.33
Jade Whitfield|USA|61.25
Özlem Becerek|TUR|61.15
Cedricka Williams|JAM|61.07
Lisa Brix Pedersen|DEN|61.03
Essence Henderson|USA|60.89
`),
  ...righe('giavellotto', 'M', 2025, `
Julian Weber|GER|91.51
Luiz Mauricio da Silva|BRA|91.00
Neeraj Chopra|IND|90.23
Anderson Peters|GRN|89.53
Keshorn Walcott|TTO|88.16
Curtis Thompson|USA|87.76
Yuta Sakiyama|JPN|87.16
Aliaksei Katkavets|BLR|86.67
Rumesh Tharanga Pathirage|SRI|86.50
Arshad Nadeem|PAK|86.40
Sachin Yadav|IND|86.27
Julius Yego|KEN|85.96
Cyprian Mrzygłód|POL|85.92
Sumedha Ranasinghe|SRI|85.78
Dawid Wegner|POL|85.67
Roderick Genki Dean|JPN|84.66
Marcin Krukowski|POL|84.39
Ioannis Kyriazis|GRE|84.38
Douw Smit|RSA|84.12
Jakub Vadlejch|CZE|84.11
Edis Matusevičius|LTU|84.05
Oliver Helander|FIN|83.97
Boris Bezdolniy|RUS|83.83
Rohit Yadav|IND|83.65
Alexandr Čača|CZE|83.42
Cameron McEntyre|AUS|83.03
Giovanni Frattini|ITA|82.78
Marc Anthony Minichello|USA|82.65
Nikolay Orlov|RUS|82.59
Yash Vir Singh|IND|82.57
Andrian Mardare|MDA|82.38
Devoux Deysel|RSA|82.35
Toni Keränen|FIN|82.26
Simon Wieland|SUI|82.26
Billy Julio López|COL|81.99
Leandro Ramos|POR|81.94
Donavon Banks|USA|81.92
Lassi Etelätalo|FIN|81.90
Haoran Hu|CHN|81.60
Lars Anthony Flaming|PAR|81.56
Eemil Porvari|FIN|81.55
Taisei Aibara|JPN|81.54
Manu Quijera|ESP|81.46
Sindri Hrafn Guðmundsson|ISL|81.39
Rin Suzuki|JPN|81.23
Artur Felfner|UKR|81.14
Keyshawn Strachan|BAH|81.01
Ahmed Sameh Mohamed Hussein|EGY|80.95
Shivam Satish|IND|80.95
Thomas Röhler|GER|80.79
`),
  ...righe('giavellotto', 'F', 2025, `
Victoria Hudson|AUT|67.76
Adriana Vilagoš|SRB|67.22
Ziyi Yan|CHN|65.89
Sigrid Borge|NOR|65.66
Mackenzie Little|AUS|65.54
Juleisy Angulo|ECU|65.12
Elina Tzengko|GRE|64.90
Anete Sietiņa|LAT|64.64
Haruka Kitaguchi|JPN|64.63
Qianqian Dai|CHN|64.38
Manuela Rotundo|URU|64.17
Tatsiana Khaladovich|BLR|63.94
Lianna Davidson|AUS|63.79
Huihui Lyu|CHN|63.76
Lingdan Su|CHN|63.29
Jo-Ane du Plessis|RSA|63.06
Tori Moorby|NZL|62.78
Annu Rani|IND|62.59
Ella Kunetsova|RUS|62.54
Liveta Jasiūnaitė|LTU|62.38
Jucilene Sales de Lima|BRA|62.32
Flor Denis Ruiz Hurtado|COL|62.32
Momone Ueda|JPN|62.20
Valentina Barrios|COL|62.00
Rhema Otabor|BAH|61.94
Małgorzata Maślak-Glugla|POL|61.79
Marija Vučenović|SRB|61.61
Yuliya Katkavets|BLR|61.45
Xinai Liu|CHN|61.43
Sara Kolak|CRO|61.20
Julia Ulbricht|GER|61.02
Qiaozhen Ma|CHN|60.94
Marie-Therese Obst|NOR|60.91
Andrea Železná|CZE|60.88
Evelyn Bliss|USA|60.81
Alizée Minard|FRA|60.65
Sayuka Kurata|JPN|60.57
Sae Takemoto|JPN|60.51
Maria Andrejczyk|POL|60.42
Petra Sičaková|CZE|60.35
Irene Jepkemboi|KEN|60.31
Mckyla van der Westhuizen|RSA|60.29
Daniella Mieko Nisimura|BRA|60.27
Dilhani Lekamge|SRI|60.14
Esra Türkmen|TUR|60.07
Madison Wiltrout|USA|60.03
Jingyi Yin|CHN|60.02
Mayya Bogatyrova|RUS|59.85
Yiset Magali Jimenez|COL|59.80
Eda Tuğsuz|TUR|59.76
`),
  ...righe('maratona', 'M', 2025, `
Sabastian Kimaru Sawe|KEN|2:02:16
Jacob Kiplimo|UGA|2:02:23
John Korir|KEN|2:02:24
Tadese Takele|ETH|2:03:23
Geofry Toroitich Kipchumba|KEN|2:03:30
Amos Kipruto|KEN|2:03:46
Deresa Geleta|ETH|2:03:51
Vincent Kipkemoi Ngetich|KEN|2:04:00
Philemon Kiplimo|KEN|2:04:01
Amanal Petros|GER|2:04:03
Tesfaye Deriba|ETH|2:04:13
Tsegaye Getachew|ETH|2:04:18
Getaneh Molla|ETH|2:04:19
Alexander Munyao|KEN|2:04:20
Abdi Nageeye|NED|2:04:20
Awet Nftalem Kibrab|NOR|2:04:24
Erick Kiplagat Sang|KEN|2:04:30
Geoffrey Kamworor|KEN|2:04:33
Gabriel Gerald Geay|TAN|2:04:36
Alex Chesiro Masai|KEN|2:04:37
Tamirat Tola|ETH|2:04:42
Conner Mantz|USA|2:04:43
Mohamed Esa|ETH|2:04:49
Bute Gemechu|ETH|2:04:51
Joshua Cheptegei|UGA|2:04:52
Cornelius Kibet Kiplagat|KEN|2:04:54
Suguru Osako|JPN|2:04:55
Chala Regasa|ETH|2:05:06
Berehanu Tsegu|ETH|2:05:14
Lemi Berhanu|ETH|2:05:14
Selemon Barega|ETH|2:05:15
Seifu Tura|ETH|2:05:17
Bazezew Asmare|ETH|2:05:17
Enock Onchari|KEN|2:05:20
Addisu Gobena|ETH|2:05:22
Benard Biwott|KEN|2:05:25
Eliud Kipchoge|KEN|2:05:25
Chimdessa Debele|ETH|2:05:26
Kennedy Kimutai|KEN|2:05:27
`),
  ...righe('maratona', 'F', 2025, `
Joyciline Jepkosgei|KEN|2:14:00
Peres Jepchirchir|KEN|2:14:43
Hawi Feysa|ETH|2:14:57
Tigst Assefa|ETH|2:15:50
Sutume Asefa Kebede|ETH|2:16:31
Brigid Kosgei|KEN|2:16:36
Winfridah Moraa Moseti|KEN|2:16:56
Megertu Alemu|ETH|2:17:18
Aynalem Desta|ETH|2:17:37
Workenesh Edesa|ETH|2:17:55
Bertukan Welde|ETH|2:17:56
Magdalena Shauri|TAN|2:18:03
Loice Chemnung|KEN|2:18:24
Bedatu Hirpa|ETH|2:18:27
Dera Dida|ETH|2:18:32
Ruti Aga|ETH|2:18:46
Irine Chepet Cheptai|KEN|2:18:51
Sifan Hassan|NED|2:19:00
Haven Hailu Desse|ETH|2:19:17
Mary Ngugi-Cooper|KEN|2:19:26
Magdalyne Masai|KEN|2:19:28
Sharon Chelimo|KEN|2:19:33
Buze Diriba|ETH|2:19:34
Hellen Obiri|KEN|2:19:51
Sichala Kumeshi|ETH|2:19:53
Mekides Shimeles|ETH|2:19:56
Rosemary Wanjiru|KEN|2:19:57
Desi Jisa Mokonin|BRN|2:20:07
Sharon Lokedi|KEN|2:20:07
Sheila Chepkirui|KEN|2:20:24
Gotytom Gebreslase|ETH|2:20:25
Degitu Azimeraw|ETH|2:20:26
Waganesh Mekasha|ETH|2:20:26
Shitaye Eshete|BRN|2:20:32
Tiruye Mesfin|ETH|2:20:38
Chloé Herbiet|BEL|2:20:38
Tigist Girma|ETH|2:20:47
Yebrgual Melese|ETH|2:20:47
Alisa Vainio|FIN|2:20:48
`),
  ...righe('marcia', 'M', 2025, `
Toshikazu Yamanishi|JPN|1:16:10
Sergey Kozhevnikov|RUS|1:17:23
Satoshi Maruo|JPN|1:17:24
Zhaozhao Wang|CHN|1:17:30
Lihong Cui|CHN|1:17:33
Caio Bonfim|BRA|1:17:37
Kento Yoshikawa|JPN|1:17:38
Evan Dunfee|CAN|1:17:39
Danila Martynov|RUS|1:17:40
Ryo Hamanishi|JPN|1:17:53
Maksim Denisov|RUS|1:17:57
Haifeng Qian|CHN|1:17:58
Chenjie Li|CHN|1:18:04
Paul McGrath|ESP|1:18:05
Jun Zhang|CHN|1:18:09
Francesco Fortunato|ITA|1:18:16
Masatora Kawano|JPN|1:18:19
Ricardo Ortiz|MEX|1:18:21
Kazuki Takahashi|JPN|1:18:23
Gabriel Bordier|FRA|1:18:23
Massimo Stano|ITA|1:18:25
Yuta Koga|JPN|1:18:26
Diego García Carrera|ESP|1:18:28
Jinrui Zhang|CHN|1:18:32
Rhydian Cowley|AUS|1:18:35
Perseus Karlström|SWE|1:18:35
Motofumi Suwa|JPN|1:18:42
Andrea Cosi|ITA|1:18:43
Peiyang Huang|CHN|1:18:49
Aurélien Quinion|FRA|1:18:49
Mukola Rushchak|UKR|1:18:50
Xuanfei Hu|CHN|1:18:51
Atsuki Tsuchiya|JPN|1:18:52
David Hurtado|ECU|1:18:53
Christopher Linke|GER|1:18:55
Yingcheng Zhou|CHN|1:19:01
Lin Li|CHN|1:19:03
Yutaro Murayama|JPN|1:19:04
Xiangfei Zhao|CHN|1:19:05
Chang Ding|CHN|1:19:05
`),
  ...righe('marcia', 'F', 2025, `
Elvira Chepareva|RUS|1:24:20
Reykhan Kagramanova|RUS|1:24:49
María Pérez|ESP|1:25:54
Alegna González|MEX|1:26:06
Nanako Fujii|JPN|1:26:18
Paula Milena Torres|ECU|1:26:18
Kimberly García León|PER|1:26:22
Jiayu Yang|CHN|1:27:16
Jemima Montag|AUS|1:27:20
Li Ma|CHN|1:27:28
Yuxia Shi|CHN|1:27:41
Li Peng|CHN|1:27:45
Antia Chamosa|ESP|1:27:55
Lyudmila Olyanovska|UKR|1:27:56
Clémence Beretta|FRA|1:28:05
Quanming Wu|CHN|1:28:06
Rebecca Henderson|AUS|1:28:11
Viktoryia Bartash|BLR|1:28:15
Lorena Arenas|COL|1:28:16
Kumiko Okada|JPN|1:28:17
Pauline Stey|FRA|1:28:18
Elizabeth McMillen|AUS|1:28:18
Antonella Palmisano|ITA|1:28:28
Viviane Lyra|BRA|1:28:30
Eleonora Anna Giorgi|ITA|1:28:32
Jinlin Ning|CHN|1:28:32
Hanna Shevchuk|UKR|1:28:37
Ilse Guerrero|MEX|1:28:43
Hang Yin|CHN|1:28:49
Mary Luz Andia|PER|1:28:49
Nicole Colombi|ITA|1:28:51
Alexandrina Mihai|ITA|1:28:57
Lucy Alejandra Mendoza Malagon|COL|1:29:01
Hong Liu|CHN|1:29:09
Haiying Ji|CHN|1:29:12
Mariia Sakharuk|UKR|1:29:13
Anna Terlyukevich|BLR|1:29:15
Antigoni Ntrismpioti|GRE|1:29:16
Olivia Sandery|AUS|1:29:19
Katarzyna Zdziebło|POL|1:29:19
`),
]
