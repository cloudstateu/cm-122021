<img src="../../../img/logo.png" alt="Chmurowisko logo" width="200" align="right">
<br><br>
<br><br>
<br><br>

# Run web application

## Lab Overeview

#### In this lab you will learn how to work with Dockerfiles and how to build your own docker images and web applications in Node.js

## Task 1: Create container and test web application

1. In terminal go to **app** folder.
2. Run: `docker build -t app .`. Wait for the build to finish.
3. Run `docker images` and verify that your image is on a list.
4. Execute `docker run -d -p 8080:8080 app`
5. Check your web application - execute: `curl localhost:8080/`
6. Run: `curl localhost:8080/chmurowisko\?name=`**`<here write your name>`**
7. To stop container you have to run `docker images` and then copy container ID that you want to stop. Next run `docker stop `**`<copied container ID>`**

## Task 2: Modify your web app and test it

1. Modify existing app.js - add code below &#8595;
   
    ```js
    app.get("/workshop", (req, res) => {
        const name = req.query.name;
        res.send(`It is new modyfication that you added.`);
    });
    ```

1. Save your modyfication and then build image again: `docker build -t app .`
1. Run container: `docker run -d -p 8080:8080 app`
1. Check your modyfication - execute: `curl localhost:8080/workshop`

<br><br>

<center><p>&copy; 2021 Chmurowisko Sp. z o.o.<p></center>