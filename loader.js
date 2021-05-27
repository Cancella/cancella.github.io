const loadContent = (selector, address) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open("get", address, true);
		xhr.onload = () => {
			document.querySelector(selector).innerHTML = xhr.response;
			resolve();
		};
		xhr.send();
	});
};

const loadHeader = async () => {
	await loadContent('#top', './header.html');
	Object.values(document.querySelectorAll(".item1, .drop-menu-item")).forEach(v => v.onclick = () => {
		let atr = v.getAttribute("href");
		if(atr && atr.length > 0)
		{
			location.href = atr;
		}
		else
		{
//			location.href = "./empty.html";
		}
	});
}

loadHeader();