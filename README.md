## Setup

1. install `firebase-tools`

    ```sh
    $ npm install -g firebase-tools
    ```

2. clone this repo

    ```sh
    $ git clone git@github.com:ta-chibana/hanashiai.git
    $ cd path/to/repo
    ```

3. install node modules

    ```sh
    $ yarn install
    $ cd functions
    $ yarn install
    $ cd -
    ```

4. [create firebase project](https://console.firebase.google.com/u/0/)
5. run `firebase init` (select the created project)

    ```sh
    $ firebase init
    ```

6. run `firebase use`

    ```sh
    $ firebase use --add staging
    ```

7. create firebase config file( `src/firebase/config.js` )

    ```js
    export default {
      apiKey: "API_KEY",
      authDomain: "AUTH_DOMAIN",
      databaseURL: "DATABASE_URL",
      projectId: "PROJECT_ID",
      storageBucket: "STORAGE_BUCKET",
      messagingSenderId: "MESSAGING_SENDER_ID"
    }
    ```

8. build scripts(development build)

    ```sh
    $ yarn build
    ```

9. enable google authentication on firebase console
10. deploy

    ```sh
    $ firebase deploy
    ```
