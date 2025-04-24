import { getUserData } from "./modules/fetchUser.js";

function getSingleUser() {
    const userId = Number(document.getElementById('user_id').value);

    getUserData(userId)
        .then((userData) => {
            const resultSpan = document.getElementById('resultSpan');
            resultSpan.textContent = userData;
            resultSpan.style.display = 'inline';
        })
        .catch((errorMessage) => {
            alert(errorMessage);
        });
}

function getMultipleUsers() {
    const arrUserIdSpan = document.getElementById('text_users_id');
    const arrUserId = arrUserIdSpan.value.replace(/\s+/g, '').split(',');
    console.log(arrUserId);

    //getting array of promises to be used together in the Promise.all
    let concomitentPromises = arrUserId.map(id => getUserData(Number(id)));

    Promise.all(concomitentPromises).then((values) => {
        let resultText = '';
        values.forEach(userData => {
            resultText += userData;
        });
        arrUserIdSpan.textContent = resultText;
        arrUserIdSpan.style.display = 'inline';
      });
}

window.getSingleUser = getSingleUser;
window.getMultipleUsers = getMultipleUsers;