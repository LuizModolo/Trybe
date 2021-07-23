### exercício 1 ###
```bash
➜  trybe-exercicios git:(main) cd fundamentos 
➜  fundamentos git:(main) ✗ cd bloco-1-unix-e-shell 
➜  bloco-1-unix-e-shell git:(main) ✗ cd unix-e-bash-parte-2 
➜  unix-e-bash-parte-2 git:(main) ✗ cd unix_tests 
```
### exercício 2 ###
```bash
➜  unix_tests git:(main) ✗ cat > skills2.txt
Internet
Unix
Bash
```
### exercício 3 ###
```bash
➜  unix_tests git:(main) ✗ cat >> skills2.txt 
HTML
CSS
Phyton
JavaScript
C++
➜  unix_tests git:(main) ✗ cat skills2.txt 
Internet
Unix
Bash
HTML
CSS
Phyton
JavaScript
C++
➜  unix_tests git:(main) ✗ sort skills2.txt 
Bash
C++
CSS
HTML
Internet
JavaScript
Phyton
Unix
```
### exercício 4 ###
```bash
➜  unix_tests git:(main) ✗ wc -l skills2.txt 
       8 skills2.txt
➜  unix_tests git:(main) ✗ 
```
### exercício 5 ###
```bash
➜  unix_tests git:(main) ✗ sort < skills2.txt > top_skills.txt
➜  unix_tests git:(main) ✗ cat top_skills.txt 
Bash
C++
CSS
HTML
Internet
JavaScript
Phyton
Unix
➜  unix_tests git:(main) ✗ head -3 top_skills.txt > top_skills2.txt
➜  unix_tests git:(main) ✗ cat top_skills2.txt 
Bash
C++
CSS
```
### exercício 6 ###
```bash
➜  unix_tests git:(main) ✗ cat > phrases2.txt
Eu adoro gatos brasileiros
Gatos amercanos são mais bem cuidados.
Gatos europeus são mais gordos.
Gatos surgiram no Egito.
➜  unix_tests git:(main) ✗ 
```
### exercício 7 ###
```bash
➜  unix_tests git:(main) ✗ grep -i "br" phrases2.txt | wc -l
       1
```
### exercício 8 ###
```bash
➜  unix_tests git:(main) ✗ grep -iv "br" phrases2.txt | wc -l
       3
```
### exercício 9 ###
```bash
➜  unix_tests git:(main) ✗ cat >> phrases2.txt 
Brasil
Alemanha
➜  unix_tests git:(main) ✗ cat phrases2.txt 
Eu adoro gatos brasileiros
Gatos amercanos são mais bem cuidados.
Gatos europeus são mais gordos.
Gatos surgiram no Egito.
Brasil
Alemanha
```
### exercício 10 ###
```bash
➜  unix_tests git:(main) ✗ cat phrases2.txt countries.txt > bunch_of_things.txt
➜  unix_tests git:(main) ✗ cat bunch_of_things.txt 
Eu adoro gatos brasileiros
Gatos amercanos são mais bem cuidados.
Gatos europeus são mais gordos.
Gatos surgiram no Egito.
Brasil
Alemanha
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
Zimbabwe%
```
### exercício 11 ###
```bash
➜  unix_tests git:(main) ✗ sort bunch_of_things.txt 
Afghanistan
Albania
Alemanha
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
Brasil
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
Eu adoro gatos brasileiros
Fiji
Finland
France
Gabon
Gambia
Gatos amercanos são mais bem cuidados.
Gatos europeus são mais gordos.
Gatos surgiram no Egito.
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
St Kitts & Nevis
St Lucia
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
