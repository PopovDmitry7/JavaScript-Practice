import { getUserData } from "./modules/fetchUser.js";

function getSingleUser() {
    const userId = Number(document.getElementById('user_id').value);

    getUserData(userId)
        .then((userData) => {
            const resultSpan = document.getElementById('result_span');
            resultSpan.textContent = userData;
            resultSpan.style.display = 'inline';
        })
        .catch((errorMessage) => {
            alert(errorMessage);
        });
}

function getMultipleUsers() {
    const stringUserId = document.getElementById('text_users_id');
    const arrayUserId = stringUserId.value.replace(/\s+/g, '').split(',');

    //getting array of promises to be used together in the Promise.all
    let concomitentPromises = arrayUserId.map(id => getUserData(Number(id)));

    Promise.all(concomitentPromises)
        .then((values) => {
            let resultText = '';
            values.forEach(userData => {
                resultText += userData;
            });
            const multipleResultSpan = document.getElementById('multiple_result_span');
            multipleResultSpan.textContent = resultText + '\n';
            multipleResultSpan.style.display = 'inline';
        })
        .catch((errorMessage) => {
            alert(errorMessage);
        });
}

window.getSingleUser = getSingleUser;
window.getMultipleUsers = getMultipleUsers;