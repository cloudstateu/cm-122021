<img src="./img/logo.png" alt="Chmurowisko logo" width="200" align="right">
<br><br>
<br><br>
<br><br>

# Logowanie do maszyny studenckiej za pomocą SSH

W tym laboratorium dowiesz się jak zalogować się na maszynę VM podczas ćwiczeń związanych z Docker oraz jak zainstalować samego Dockera.

---

## Krok 1: Logowanie do maszyny studenckiej

1. Przejdź do [portal.azure.com](https://portal.azure.com) i uruchom Cloud Shell.
1. W Cloud Shell wykonaj ponizszą komendę i skopiuj adres IP dla swojej maszyny (z numerem Twojego konta studenta)

    ```bash
    az vm list-ip-addresses --query "[].{name:virtualMachine.name, IP:virtualMachine.network.publicIpAddresses[0].ipAddress}" -o table
    ```

1. Uzupełnij ponizszą komendę swoim loginem studenta oraz skopiowanym adresem IP i wykonaj ją w Cloud Shell

    ```bash
    ssh <login>@<vm-ip>
    ```

    Gotowa komenda powinna wyglądać podobnie do tej:

    ```bash
    ssh cmst01@20.100.200.10
    ```

1. Zapytany o autentyczność hosta wpisz `yes` i naciśnij Enter

    ```bash
    The authenticity of host '20.100.200.10 (20.100.200.10)' can't be established.
    ECDSA key fingerprint is SHA256:l9i...WTe7FPg...IDGQw/ZFJt...AB60.
    Are you sure you want to continue connecting (yes/no)?
    ```

1. W tym kroku podasz hasło uzytkownika. Kazdy uzytkownik posiada haslo w formacie:

    ```bash
    VMstudentXX!
    ```

    gdzie `XX` to Twój numer studenta

    Przykładowe hasło uzytkownika o loginie `cmst01` to `VMstudent01!`

    Po wpisaniu hasła zatwierdź próbę logowania naciskając Enter.

1. Powinieneś zostać zalogowany z sukcesem.

## END LAB

<br><br>

<center><p>&copy; 2021 Chmurowisko Sp. z o.o.<p></center>
