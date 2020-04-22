/* A result of your investigation will be implementation of methods:
getUsers(): Array<Users>
In order to fetch data from remote source, use https://developer.github.com/v3/users/ API
*/

function getUsers(since) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users?since=${since}`);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      });
}