const url = 'https://jsonplaceholder.typicode.com/posts';

window.onload = () => {
	JsAjaxGet();
	JsAjaxPost();
	reset();
};
// reset main container
function reset() {
	document.getElementById('reset').addEventListener('click',function(){
		let reset = document.getElementById('container');
		reset.innerHTML = '';
	});	
}
// GET: /posts  
function JsAjaxGet() {
	document.querySelector('#button').addEventListener('click', function () {
		let xhr = new XMLHttpRequest();
		//typ połączenia, url, czy połączenie asynchroniczne
		xhr.open('GET', url, true);
		xhr.addEventListener('load', function () {
			if (xhr.status == 200 && xhr.readyState == 4) {
				let el = document.getElementById('container');
				let json = JSON.parse(xhr.responseText);
				json.forEach(element => {
					console.log(element.id + ' ' + element.title);
					el.innerHTML += '<br>' + element.id + ' ' + element.title;
				});
			}
		});
		xhr.addEventListener('progress', function (e) {
			console.log(e);
		});
		xhr.send();
	});
}
// POST: /posts
function JsAjaxPost() {

	document.getElementById('sendform').addEventListener('click', function (e) {
		e.preventDefault(); //!! prevent default behavior of html submit element.

		let xhr = new XMLHttpRequest();
		let id = document.getElementById('UserId').value;
		let title = document.getElementById('Title').value;
		let message = document.getElementById('Message').value;
		
		let myobj = {'userId':id,'title':title,'body':message};

		let text = JSON.stringify(myobj);
		console.log(text);

		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		xhr.addEventListener('load', function () {
			if (this.status === 201) {
				console.log(this.responseText);
				let container = document.getElementById('container');
				container.innerHTML += '<br>' + xhr.responseText;
				let text = JSON.parse(xhr.response);
				container.innerHTML += '<table><tr>'
				+ '<td> id: '+ text.userId +'</td>'
				+ '<td> title: '+ text.title +'</td>'
				+ '<td> body: '+ text.body +'</td>'
				+'</tr></table>';
			
			}
		});
		// todo: data in json format
		xhr.send(text);

	});
}


