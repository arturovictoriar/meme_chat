# Meme chat

# ![Meme chat](assets/meme-chat.png)

## Description :book:

Meme chat is an Internet Relay Chat using Node.js. This service lets you communicate in real-time with your friends. You also can share youtube videos in the chat.

## Visuals :camera:

### ![Meme chat](assets/login-meme-chat.png)
### ![Meme chat](assets/signin-meme-chat.png)
### ![Meme chat](assets/messages-meme-chat.png)
### ![Meme chat](assets/youtube-meme-chat.png)
### ![Meme chat](assets/send-youtube-meme-chating.png)

## Installation :floppy_disk:

In Ubuntu:

- Install node.js and npm:

```console
foo@bar:~$ sudo apt update
foo@bar:~$ sudo apt install nodejs npm -y
```

- Inside the meme-chat folder go to the backend folder and install all the needed dependencies:

```console
foo@bar:~/meme-chat$ cd backend
foo@bar:~/meme-chat/backend$ npm install
```

- Go back to the meme_chat folder and go to frontend folder and install all the needed dependencies:

```console
foo@bar:~/meme-chat$ cd frontend
foo@bar:~/meme-chat/frontend$ npm install
```

## Usage :open_file_folder:

- Go inside the backend folder and execute the backend service:

```console
foo@bar:~/meme-chat/backend$ npm start
```

- Go inside the frontend folder and execute the frontend service:

```console
foo@bar:~/meme-chat/frontend$ npm start
```
- Note1: the backend runs in port 5000 by default.
- Note2: the frontend runs in port 3000 by default.

## Support :email:

LinkedIn:

- [Arturo Victoria Rincon](https://www.linkedin.com/in/arturovictoriar/)

## Project status :white_check_mark:

This is an MVP and it handles just 1 channel. It does not reconnect automaticly. The number of message per second is depend on your system.

## Author :black_nib:

* **Arturo Victoria Rincon** [@arturovictoriar](https://github.com/arturovictoriar)
