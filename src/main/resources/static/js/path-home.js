
// import jquery from 'https://cdn.skypack.dev/jquery';


//URL 복사
function copyClip(link){
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val(link).select();
    document.execCommand('copy');
    $temp.remove();
    alert('복사되었습니다.');
}
$('.copy-btn').on('click', function(e){
    e.preventDefault();
    var link = $('#linuxPath').val();
    copyClip(link);
});

// Copyright (c) 2022 by good charlotte (https://codepen.io/lostinyou/pen/mdrrYEa) 참조



/*
document.execCommand 권장 안함. 일부 브라우저에서는 막아놓음.
해결책 아래 코드 참조 링크 : https://develop-sense.tistory.com/entry/HTMLJavaScript-HTML-DOM-execCommand-%EB%A9%94%EC%84%9C%EB%93%9Cft-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EB%B3%B5%EC%82%AC%ED%95%98%EA%B8%B0-Clipboard-API

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>클립보드 복사하기</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">
// $(document).ready(function(){
// 	$("[name=btnClick]").click(function(){
// 		copyToClickBoard();
// 	});
// });
function fncClickBoardApi(){
	if (!navigator.clipboard) {
		// Clipboard API not available
		return;
	}
	var copyArea = $("#copyArea").val();
	navigator.clipboard.writeText(copyArea)
		.then(resultText => {
			console.log("Text copied to clipboard...");
			copyArea += resultText;
		})
		.catch(err => {
			console.log('Something went wrong', err);
		});
}
</script>
</head>
<body>
	<span>클립보드 복사하기</span>
	<div>
		<input type="text" id="copyArea" value="" placeholder="텍스트를 입력하세요." />
		<button type="button" name="btnClick" onclick="fncClickBoardApi();">클릭</button>
	</div>
</body>
}*/
