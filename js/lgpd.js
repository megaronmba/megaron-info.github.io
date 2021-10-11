let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';
let lgpdHtml = `
	<div class="lgpd">
		<div class="lgpd--left">
			Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência
			em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse.<br>
			Ao utilizar nossos serviços, você concorda com tal monitoramento.
			<a href="politica-de-privacidade.html">Leia Mais</a>
		</div>
		<div class="lgpd--right">
			<button>Aceitar e fechar!</button>
		</div>
	</div>
	<link rel="stylesheet" href="css/lgpd.css" />
`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {
	document.body.innerHTML += lgpdHtml;
	
	let lgpdArea = document.querySelector('.lgpd');
	let lgpdButton = lgpdArea.querySelector('button');
	
	lgpdButton.addEventListener('click', async ()=>{
		lgpdArea.remove();
		
		let result = await fetch(lgpdUrl);
		let json = await result.json();
		
		if(jason.error != '') {
			let id = '123'; // json.id;	
			localStorage.setItem('lgpd', id);
		}
	});
}