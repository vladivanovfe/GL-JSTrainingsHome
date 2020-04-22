/* A result of your investigation will be implementation of methods:
getUser(): User
In order to fetch data from remote source, use https://developer.github.com/v3/users/ API
*/

function getUser(username) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `http://api.github.com/users/:${username}`);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
}