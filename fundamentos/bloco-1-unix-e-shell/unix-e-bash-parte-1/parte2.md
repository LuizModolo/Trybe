```bash
➜  unix_tests git:(master) # exercício 1
➜  unix_tests git:(master) 
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1842  100  1842    0     0   6649      0 --:--:-- --:--:-- --:--:--  6649
➜  unix_tests git:(master) ✗ ls
countries.txt
```
```bash
➜  unix_tests git:(master) ✗ # exercício 2
➜  unix_tests git:(master) ✗ cat countries.txt 
Afghanistan
Albania
Algeria
Andorra
Angola
Antigua & Deps
Argentina
Armenia
Australia
Austria
Azerbaijan
Bahamas
Bahrain
Bangladesh
Barbados
Belarus
Belgium
Belize
Benin
Bhutan
Bolivia
Bosnia Herzegovina
Botswana
Brazil
Brunei
Bulgaria
Burkina
Burundi
Cambodia
Cameroon
Canada
Cape Verde
Central African Rep
Chad
Chile
China
Colombia
Comoros
Congo
Congo {Democratic Rep}
Costa Rica
Croatia
Cuba
Cyprus
Czech Republic
Denmark
Djibouti
Dominica
Dominican Republic
East Timor
Ecuador
Egypt
El Salvador
Equatorial Guinea
Eritrea
Estonia
Ethiopia
Fiji
Finland
France
Gabon
Gambia
Georgia
Germany
Ghana
Greece
Grenada
Guatemala
Guinea
Guinea-Bissau
Guyana
Haiti
Honduras
Hungary
Iceland
India
Indonesia
Iran
Iraq
Ireland {Republic}
Israel
Italy
Ivory Coast
Jamaica
Japan
Jordan
Kazakhstan
Kenya
Kiribati
Korea North
Korea South
Kosovo
Kuwait
Kyrgyzstan
Laos
Latvia
Lebanon
Lesotho
Liberia
Libya
Liechtenstein
Lithuania
Luxembourg
Macedonia
Madagascar
Malawi
Malaysia
Maldives
Mali
Malta
Marshall Islands
Mauritania
Mauritius
Mexico
Micronesia
Moldova
Monaco
Mongolia
Montenegro
Morocco
Mozambique
Myanmar, {Burma}
Namibia
Nauru
Nepal
Netherlands
New Zealand
Nicaragua
Niger
Nigeria
Norway
Oman
Pakistan
Palau
Panama
Papua New Guinea
Paraguay
Peru
Philippines
Poland
Portugal
Qatar
Romania
Russian Federation
Rwanda
St Kitts & Nevis
St Lucia
Saint Vincent & the Grenadines
Samoa
San Marino
Sao Tome & Principe
Saudi Arabia
Senegal
Serbia
Seychelles
Sierra Leone
Singapore
Slovakia
Slovenia
Solomon Islands
Somalia
South Africa
South Sudan
Spain
Sri Lanka
Sudan
Suriname
Swaziland
Sweden
Switzerland
Syria
Taiwan
Tajikistan
Tanzania
Thailand
Togo
Tonga
Trinidad & Tobago
Tunisia
Turkey
Turkmenistan
Tuvalu
Uganda
Ukraine
United Arab Emirates
United Kingdom
United States
Uruguay
Uzbekistan
Vanuatu
Vatican City
Venezuela
Vietnam
Yemen
Zambia
Zimbabwe
```
```bash
➜  unix_tests git:(master) ✗ # exercício 3      
➜  unix_tests git:(master) ✗ less countries.txt 
...
Saint Vincent & the Grenadines
Samoa
San Marino
Sao Tome & Principe
Saudi Arabia
Senegal
Serbia
Seychelles
Sierra Leone
Singapore
Slovakia
Slovenia
Solomon Islands
Somalia
South Africa
South Sudan
Spain
Sri Lanka
Sudan
Suriname
Swaziland
Sweden
Switzerland
Syria
Taiwan
Tajikistan
Tanzania
Thailand
Togo
Tonga
Trinidad & Tobago
Tunisia
Turkey
Turkmenistan
Tuvalu
Uganda
Ukraine
United Arab Emirates
United Kingdom
United States
Uruguay
Uzbekistan
Vanuatu
Vatican City
Venezuela
Vietnam
Yemen
Zambia
(END)
```
```bash
➜  unix_tests git:(master) ✗ # exercício 4             
➜  unix_tests git:(master) ✗ less countries.txt 
Zambia
Zimbabwe
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
(END)
```
```bash
➜  unix_tests git:(master) ✗ # exercício 5
➜  unix_tests git:(master) ✗ grep Brazil countries.txt 
Brazil
```
```bash
➜  unix_tests git:(master) ✗ # exercício 6
➜  unix_tests git:(master) ✗ grep -i brazil countries.txt 
Brazil
```
```bash
➜  unix_tests git:(master) ✗ # exercício 7
➜  unix_tests git:(master) ✗ cat > phrases.txt
Espn e Sportv são meus canais favoritos.
Senhor dos Anéis é o melhor filme que já vi.
NBA e NFL são ligas de esportes americanos.
Fox Sports foi comprado pelos canais Disney.
➜  unix_tests git:(master) ✗ grep -iv fox phrases.txt 
Espn e Sportv são meus canais favoritos.
Senhor dos Anéis é o melhor filme que já vi.
NBA e NFL são ligas de esportes americanos.
```
```bash
➜  unix_tests git:(master) ✗ # exercício 8
➜  unix_tests git:(master) ✗ wc -w phrases.txt 
      32 phrases.txt
```
```bash
➜  unix_tests git:(master) ✗ # exercício 9
➜  unix_tests git:(master) ✗ wc -l phrases.txt 
       4 phrases.txt
```
```bash
➜  unix_tests git:(master) ✗ # exercício 10
➜  unix_tests git:(master) ✗ touch empty.tbt
➜  unix_tests git:(master) ✗ touch empty.pdf
➜  unix_tests git:(master) ✗ ls
countries.txt empty.pdf     empty.tbt     phrases.txt
```
```bash
➜  unix_tests git:(master) ✗ # exercício 11
➜  unix_tests git:(master) ✗ ls
countries.txt empty.pdf     empty.tbt     phrases.txt
```
```bash
➜  unix_tests git:(master) ✗ # exercício 12
➜  unix_tests git:(master) ✗ ls *.txt
countries.txt phrases.txt
```
```bash
➜  unix_tests git:(master) ✗ # exercício 13
➜  unix_tests git:(master) ✗ ls *.t?t
countries.txt empty.tbt     phrases.txt
```
```bash
➜  unix_tests git:(master) ✗ # exercício 14
➜  unix_tests git:(master) ✗ man ls
```
