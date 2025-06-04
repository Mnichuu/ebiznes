> Zadanie 1: Docker
+ ✅ 3.0 obraz ubuntu z Pythonem w wersji 3.10
+ ✅ 3.5 obraz ubuntu:24.02 z Javą w wersji 8 oraz Kotlinem
+ ✅ 4.0 do powyższego należy dodać najnowszego Gradle’a oraz paczkę JDBC
SQLite w ramach projektu na Gradle (build.gradle)
+ ✅ 4.5 stworzyć przykład typu HelloWorld oraz uruchomienie aplikacji
przez CMD oraz gradle
+ ✅ 5.0 dodać konfigurację docker-compose 
- Link do dockerhuba: https://hub.docker.com/repository/docker/smnich/dockerjavaapp/general
<br> *Po zajęciach 24.03 dopisuję, że moim zdaniem zadanie 1 zrobiłem na 5*
+ Kod: folder 'Zadanie 1'
> Zadanie 2:
Należy stworzyć aplikację na frameworku Play w Scali 3. 
+ ✅ 3.0 Należy stworzyć kontroler do Produktów [Commit](https://github.com/Mnichuu/ebiznes/commit/0d012d75a6609b4ba18f5cd115b98239b68c26fd)
+ ✅ 3.5 Do kontrolera należy stworzyć endpointy zgodnie z CRUD - dane
pobierane z listy [Commit](https://github.com/Mnichuu/ebiznes/commit/0d012d75a6609b4ba18f5cd115b98239b68c26fd)
+ ✅ 4.0 Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy
zgodnie z CRUD [Commit](https://github.com/Mnichuu/ebiznes/commit/27c4e01a58c5ab70186ed463e319f3a4aa35f018)
+ ❌ 4.5 Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać
skrypt uruchamiający aplikację via ngrok
+ ❌ 5.0 Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUD
Kontrolery mogą bazować na listach zamiast baz danych. CRUD: show all,
show by id (get), update (put), delete (delete), add (post).
+ Kod: folder 'Zadanie 2'
> Zadanie 3: Kotlin
+ ✅ 3.0 Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor, która pozwala na przesyłanie wiadomości na platformę Discord [Commit](https://github.com/Mnichuu/ebiznes/commit/6fda92238b86ab51f116653a4bc0b7fbb6d6eeb4)
+ ✅ 3.5 Aplikacja jest w stanie odbierać wiadomości użytkowników z platformy Discord skierowane do aplikacji (bota) [Commit](https://github.com/Mnichuu/ebiznes/commit/b94eac48f551b3c282fe8ea6e2e0b6808b871b70)
+ ❌ 4.0 Zwróci listę kategorii na określone żądanie użytkownika [Commit]()
+ ❌ 4.5 Zwróci listę produktów wg żądanej kategorii [Commit]()
+ ❌ 5.0 Aplikacja obsłuży dodatkowo jedną z platform: Slack, Messenger, Webex [Commit]()
+ Kod: folder 'Zadanie 3'
+ > Zadanie 4: Go
+ ✅ 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Produktów zgodny z CRUD [Commit](https://github.com/Mnichuu/ebiznes/commit/e67bd3ce3165c31601e00e4b03c295fdafe7246b)
+ ✅ 3.5 Należy stworzyć model Produktów wykorzystując gorm oraz wykorzystać model do obsługi produktów (CRUD) w kontrolerze (zamiast listy) [Commit](https://github.com/Mnichuu/ebiznes/commit/e67bd3ce3165c31601e00e4b03c295fdafe7246b)
+ ✅ 4.0 Należy dodać model Koszyka oraz dodać odpowiedni endpoint [Commit](https://github.com/Mnichuu/ebiznes/commit/1906ad1af07f4134232f90c9665e0b95eeb253f3)
+ ✅ 4.5 Należy stworzyć model kategorii i dodać relację między kategorią, a produktem [Commit](https://github.com/Mnichuu/ebiznes/commit/98ddd46107b2fed4eb2345b7b9162be173f262b1)
+ ❌ 5.0 Należy pogrupować zapytania w gorm’owe scope'y [Commit]()
+ Kod: folder 'Zadanie 4'
> Zadanie 5: Frontend. Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js.
W ramach projektu należy stworzyć trzy komponenty: 
> + Produkty - powinien pobierać dane o produktach z aplikacji serwerowej.
> + Koszyk - powinien wysyłać do aplikacji serwerowej dane
> + Płatności - powinien wysyłać do aplikacji serwerowej dane
> + Aplikacja serwera w jednym z trzech języków: 
>   + Kotlin
>   + Scala
>   + Go 
> + Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.


+ ✅  3.0 W ramach projektu należy stworzyć dwa komponenty:  [Commit](https://github.com/Mnichuu/ebiznes/commit/15e56d3e9b6715b6de76e040526f48d8e4a25c45)
  + Produkty oraz Płatności; 
  + Płatności powinny wysyłać do aplikacji serwerowej dane
  + W Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej;
+ ✅  3.5 Należy dodać Koszyk wraz z widokiem: [Commit1](https://github.com/Mnichuu/ebiznes/commit/7169ec453f9a03a63bfc7a40b15668e6cadbffe0)[Commit2](https://github.com/Mnichuu/ebiznes/commit/a9076eae7abb6acf1adb610e9901ca584bb388b0)[Commit-z-poprawionymi-płatnościami](https://github.com/Mnichuu/ebiznes/commit/5fd30a439d608ca0f72df3bcc394fd72f2b3d15d)
  + należy wykorzystać routing 
+ ❌ 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks [Commit]()
+ ❌ 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose [Commit]()
+ ❌ 5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS [Commit]()
+ Kod: folder 'Zadanie 5'

> Zadanie 6: Testy

+ ✅ 3.0 Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala) [Commit](https://github.com/Mnichuu/ebiznes/commit/195b34164d49e2d1d519599ebec20468325c2eab)
+ ✅ 3.5 Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji [Commit](https://github.com/Mnichuu/ebiznes/commit/2ea6883d34a410e0b462fdddfb988e1c72e30636)
+ ✅ 4.0 Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami [Commit](https://github.com/Mnichuu/ebiznes/commit/2ea6883d34a410e0b462fdddfb988e1c72e30636)
+ ❌ 4.5 Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint [Commit]()
+ ❌ 5.0 Należy uruchomić testy funkcjonalne na Browserstacku [Commit]()

**Wymagania:**
- Testy funkcjonalne muszą być napisane w CypressJS lub Selenium w jednym z języków: Kotlin, Python, Java, JS, Go, Scala.
- Testy muszą zawierać minimum 50 asercji.
- Testy jednostkowe muszą być dodane do jednego z wcześniejszych projektów.
- Testy API muszą pokrywać wszystkie endpointy, w tym minimum jeden scenariusz negatywny na każdy endpoint.
- Testy funkcjonalne muszą być uruchamiane na platformie Browserstack.

**Dodatkowe informacje:**
- Należy stworzyć darmowe konto na Browserstack za pomocą [GitHub Student Pack](https://education.github.com/pack).
- Kod: folder 'Zadanie 6'

> Zadanie 7: Sonar

+ ✅ 3.0 Należy dodać litera do odpowiedniego kodu aplikacji serwerowej w hookach gita [Commit](https://github.com/Mnichuu/ebiznes/commit/86d9b223f629fdda9733d7b1148ecf90bf98fe35)
+ ✅ 3.5 Należy wyeliminować wszystkie bugi w kodzie w Sonarze (kod aplikacji serwerowej) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=mnichuu_ebiznes&metric=bugs)](https://sonarcloud.io/summary/new_code?id=mnichuu_ebiznes)
+ ✅ 4.0 Należy wyeliminować wszystkie zapaszki w kodzie w Sonarze (kod aplikacji serwerowej) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=mnichuu_ebiznes&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=mnichuu_ebiznes)
+ ✅ 4.5 Należy wyeliminować wszystkie podatności oraz błędy bezpieczeństwa w kodzie w Sonarze (kod aplikacji serwerowej) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=mnichuu_ebiznes&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=mnichuu_ebiznes) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=mnichuu_ebiznes&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=mnichuu_ebiznes)
+ ✅ 5.0 Należy wyeliminować wszystkie błędy oraz zapaszki w kodzie aplikacji klienckiej [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=mnichuu_ebiznes_1&metric=bugs)](https://sonarcloud.io/summary/new_code?id=mnichuu_ebiznes_1)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=mnichuu_ebiznes_1&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=mnichuu_ebiznes_1)

**Wymagania**
- Należy dodać projekt aplikacji klienckiej oraz serwerowej (jeden branch, dwa repozytoria) do Sonara w wersji chmurowej (https://sonarcloud.io/). 
- Należy poprawić aplikacje uzyskując 0 bugów, 
  - 0 zapaszków, 
  - 0 podatności,
  - 0 błędów bezpieczeństwa. 
- Dodatkowo należy dodać widżety sonarowe do README w repozytorium dane projektu z wynikami.

**Dodatkowe informacje:**
- https://golangci-lint.run/
- https://github.com/pinterest/ktlint
- https://scalameta.org/scalafmt/docs/installation.html

> Zadanie 8: OAuth2

+ ✅ 3.0 Logowanie przez aplikację serwerową (bez OAuth2) [Commit](https://github.com/Mnichuu/ebiznes/commit/a38b5299516157aef87824d8a9da8ed5723de3ed) [Frontend](https://github.com/Mnichuu/ebiznes/commit/cdc412cd7464439a5eef7b37f3a6b24b2425bff3)
+ ✅ 3.5 Rejestracja przez aplikację serwerową (bez OAuth2) [Commit](https://github.com/Mnichuu/ebiznes/commit/e4481f3e0f7448f08d36d2701c48b6071f73bed7) [Frontend](https://github.com/Mnichuu/ebiznes/commit/6463b6edd825695a1903f085449f59206cab1521)
+ ❌ 4.0 Logowanie via Google OAuth2 [Commit]()
+ ❌ 4.5 Logowanie via Facebook lub Github OAuth2 [Commit]()
+ ❌ 5.0 Zapisywanie danych logowania OAuth2 po stronie serwera [Commit]()

**Wymagania:**
- Należy skonfigurować klienta OAuth2.
- Dane o użytkowniku wraz z tokenem powinny być przechowywane po stronie bazy serwera.
- Nowy token (inny niż ten od dostawcy) powinien zostać wysłany do klienta (React).
- Można zastosować mechanizm sesji lub inny dowolny.
- Zabronione jest tworzenie klientów bezpośrednio po stronie React'a, wyłączając z komunikacji aplikację serwerową (np. wykorzystując auth0).

**Prawidłowa komunikacja:**
`React -> Serwer -> Dostawca -> Serwer (via return URI) -> React`

> Zadanie 9: ChatGPT bot

+ ✅ 3.0 Należy stworzyć po stronie serwerowej osobny serwis do łączenia z ChatGPT do usługi chat [Commit](https://github.com/Mnichuu/ebiznes/commit/56f8aa1a8bfe37a9d2cdfa2d2a1f36e8a9f57e66)
+ ❌ 3.5 Należy stworzyć interfejs frontowy dla użytkownika, który komunikuje się z serwisem; odpowiedzi powinny być wysyłane do frontendowego interfejsu [Commit]()
+ ❌ 4.0 Stworzyć listę 5 różnych otwarć oraz zamknięć rozmowy [Commit]()
+ ❌ 4.5 Filtrowanie po zagadnieniach związanych ze sklepem (np. ograniczenie się jedynie do ubrań oraz samego sklepu) do GPT [Commit]()
+ ❌ 5.0 Filtrowanie odpowiedzi po sentymencie [Commit]()

**Wymagania:**
- Rozszerzenie funkcjonalności bota o osobny serwis w Pythonie do komunikacji z ChatGPT.
- Stworzenie aplikacji frontendowej do komunikacji z serwisem.
- Odpowiedzi z ChatGPT przesyłane do użytkownika przez frontend.
- Lista 5 różnych otwarć i zamknięć rozmowy.
- Filtrowanie tematów do GPT (tylko sklep/ubrania).
- Filtrowanie odpowiedzi po sentymencie.

+ Kod: folder 'Zadanie 9'

> Zadanie 10: Chmura/CI

+ ❌ 3.0 Należy stworzyć odpowiednie instancje po stronie chmury na dockerze [Commit]()
+ ❌ 3.5 Stworzyć odpowiedni pipeline w Github Actions do budowania aplikacji (np. via fatjar) [Commit]()
+ ❌ 4.0 Dodać notyfikację mailową o zbudowaniu aplikacji [Commit]()
+ ❌ 4.5 Dodać krok z deploymentem aplikacji serwerowej oraz klienckiej na chmurę [Commit]()
+ ❌ 5.0 Dodać uruchomienie regresyjnych testów automatycznych (funkcjonalnych) jako krok w Actions [Commit]()

**Wymagania:**
- Wykorzystanie GitHub Actions (lub innego CI) oraz chmury (np. Azure) do budowy i wdrożenia aplikacji frontendowej i backendowej jako osobnych usług.
- Wykorzystanie obrazów dockerowych, uruchomienie aplikacji w kontenerach.
- Możliwość budowania aplikacji lokalnie (np. fatjar) lub w pipeline.
- Notyfikacja mailowa po zbudowaniu aplikacji.
- Deployment obu aplikacji na chmurę.
- Uruchomienie testów regresyjnych jako krok w pipeline.

+ Kod: folder 'Zadanie 10'
