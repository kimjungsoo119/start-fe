const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

function setLog(text) {
    $log.innerHTML = text;
  }
function bad(error) {
  printLog(error);
}

function $fetch() {
    if (!$url.value) {
        window.alert('url를 입력하세요');
    } else {
        fetch($url.value)
            .then(res => {
                res.text().then(text => {
                    $log.value = text;
                });
            })
            .catch(e=> {
                $log.value = error;
            });
    }
}
$btn.addEventListener('click', fetchUrl);
$url.addEventListener('keypress', checkSubmit);