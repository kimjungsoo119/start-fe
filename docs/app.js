<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>랜덤값 만들기</title>
    <style>
        #box {
            width: 200px;
            text-align: center;
            border: 15px solid #000;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <h1>랜덤값 만들기</h1>
        <ul>
            <li>최소,최대값 사이에 랜덤한 숫자를 출력합니다</li>
            <li>
                출력할때 숫자가 증가되는 에니메이션 효과를 줍니다 (setInterval())
            </li>
            <li>랜덤 숫자가 출력중에는 생성버튼이 비활성가 됩니다</li>
        </ul>
        <div id="box">0</div>
        <hr />
        최소 <input type="text" placeholder="10" id="min" value="10" /> 
        <br />
        최대 <input type="text" placeholder="100" id="max" value="100" />
        <hr />
        <button id="btn">생성</button>
    </div>
    <script src="quiz8.js"></script>
</body>
</html>