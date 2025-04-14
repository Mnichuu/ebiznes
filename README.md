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


+ ❌ 3.0 W ramach projektu należy stworzyć dwa komponenty:  [Commit]()
  + Produkty oraz Płatności; 
  + Płatności powinny wysyłać do aplikacji serwerowej dane
  + W Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej;
+ ❌ 3.5 Należy dodać Koszyk wraz z widokiem: [Commit]()
  + należy wykorzystać routing 
+ ❌ 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks [Commit]()
+ ❌ 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose [Commit]()
+ ❌ 5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS [Commit]()
+ Kod: folder 'Zadanie 5'
