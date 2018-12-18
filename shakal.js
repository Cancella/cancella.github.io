function Game()
{	
	var team = [[],[],[],[],[]];
	var hod;
	var selected = null;
	var selectedgold = null;
	var selectedtreasure = null;
	var susha = [];
	var pole = [];
	var opisanie;
	var button; 
	var music;
	var zvuk;
	var body;
	var card;
	var slider;
	var cheliki;
	var block = [];
	var hodd = [];

	this.Start = function()
	{		
		CreateCard(susha, 0, 19,'pysto', 'no'); //         18!!!!!!!!
		CreateCard(susha, 0, 3, 'arrow', 'right');
		CreateCard(susha, 0, 3, 'arrow', 'rightleft');
		CreateCard(susha, 0, 3, 'arrow', 'rightleftupdown');
		CreateCard(susha, 0, 3, 'arrow', 'right-up');
		CreateCard(susha, 0, 3, 'arrow', 'diagonal-down-up');
		CreateCard(susha, 0, 3, 'arrow', 'diagonal');
		CreateCard(susha, 0, 3, 'arrow', 'left-up-down-right');
		CreateCard(susha, 0, 3, 'horse', 'no');
		CreateCard(susha, 0, 5, 'pustina', '2');
		CreateCard(susha, 0, 4, 'pustina', '3');
		CreateCard(susha, 0, 2, 'pustina', '4');
		CreateCard(susha, 0, 1, 'pustina', '5');
		CreateCard(susha, 0, 8, 'ice', 'no'); //            6!!!!!!!!
		CreateCard(susha, 0, 3, 'kapkan', 'no');
		CreateCard(susha, 0, 4, 'crocodile', 'no');
		CreateCard(susha, 0, 2, 'castle', 'no');
		CreateCard(susha, 0, 1, 'supercastle', 'no');
		CreateCard(susha, 1, 5, 'box', 'no');
		CreateCard(susha, 2, 5, 'box', 'no');
		CreateCard(susha, 3, 3, 'box', 'no');
		CreateCard(susha, 4, 2, 'box', 'no');
		CreateCard(susha, 5, 1, 'box', 'no'); 
		CreateCard(susha, 0, 1, 'treasure', 'no');
		CreateCard(susha, 0, 3, 'cannibal', 'no'); //        2!!!!!!!
		CreateCard(susha, 0, 2, 'balloon', 'no');
		CreateCard(susha, 0, 2, 'gun', 'no'); 
		CreateCard(susha, 0, 1, 'beacon', 'no');
		CreateCard(susha, 0, 1, 'missionary', 'no');
		CreateCard(susha, 0, 1, 'friday', 'no');
		CreateCard(susha, 0, 1,'ben', 'no');
		CreateCard(susha, 0, 3,'rome1', 'no');
		CreateCard(susha, 0, 2, 'rome2', 'no');
		CreateCard(susha, 0, 1,'rome3', 'no');
		CreateCard(susha, 0, 1, 'plane', 'no'); 
		CreateCard(susha, 0, 4, 'barrel', 'no');
		//CreateCard(susha, 0, 4, 'cave', 'no');
		CreateCard(susha, 0, 1, 'earthquake', 'no');
		CreateCard(susha, 0, 3, 'jungle', 'no');
		CreateCard(susha, 0, 2, 'grass', 'no');

		susha = Shuffle(susha);
		susha = Shuffle(susha);

		music = document.getElementById('music');
		body = document.getElementsByTagName('body');
		body[0].onclick = Music;
		var bl = document.getElementsByClassName('block');
		block.push(0);
		for(i = 0; i < bl.length; i++)
			block.push(bl[i]);
		var hd = document.getElementsByClassName('hod');
		hodd.push(0);
		for(i = 0; i < hd.length; i++)
			hodd.push(hd[i]);

		button = document.getElementById('userum');
		button.onclick = Button;

		var divpole = document.createElement('div');
		document.body.appendChild(divpole);
		divpole.setAttribute('class','pole');
		opisanie = document.getElementById('opisanie');
		var h1 = document.getElementsByTagName('h1');
		var h2 = document.getElementsByTagName('h2');
		for(i = 0; i <= 12; i++)
		{
			pole[i]=[];
			for(j = 0; j <= 12; j++)
			{
				if(i == 0 || j == 0 || i == 12 || j == 12 || (i == 1 && j == 1) || (i == 1 && j == 11) || (i == 11 && j == 1) || (i == 11 && j == 11))
				{	
					pole[i][j] = {};
					pole[i][j].water = true;
					pole[i][j].ship = false;;
					pole[i][j].gold = 0;
					pole[i][j].players = [];
				}

				else
				{
					pole[i][j]=susha.pop();
				}

				var nd = document.createElement('div');
				if(pole[i][j].water == true)
				{
					nd.setAttribute('class','card sea');
				}
				if(pole[i][j].water == false && pole[i][j].open == false)
				{
					nd.setAttribute('class','card close');
				}
				if(pole[i][j].ship == true)
				{
					nd.setAttribute('class','card ship');
				}
				nd.onclick = Perevernyt;
				pole[i][j].div = nd;
				divpole.appendChild(nd);
				nd.mesto = {x:j, y:i};
				nd.kletka = pole[i][j];
				pole[i][j].div.golddiv = null;
				var time;
				nd.onmouseenter = function(event)
				{
					var e = event.target;
					var type = event.target.kletka.type;
				  	var open = event.target.kletka.open;
					time = setTimeout(Test, 800, e, type, open, h1[0], h2[0]);
				}
				nd.onmouseleave = function()
				{
					opisanie.style.visibility = 'hidden';
					clearTimeout(time);
				} 
				
				if(nd.kletka.water && nd.kletka.ship == false) 
				{
					var povorot = '';
					if((nd.mesto.x == 1 && nd.mesto.y == 0) || (nd.mesto.x == 0 && nd.mesto.y == 1))
					{
						povorot = 10;
					}
					else if((nd.mesto.x == 0 && nd.mesto.y == 11) || (nd.mesto.x == 1 && nd.mesto.y == 12))
					{
						povorot = 11;
					}
					else if((nd.mesto.x == 12 && nd.mesto.y == 11) || (nd.mesto.x == 11 && nd.mesto.y == 12))
					{
						povorot = 12;
					}
					else if((nd.mesto.x == 11 && nd.mesto.y == 0) || (nd.mesto.x == 12 && nd.mesto.y == 1))
					{
						povorot = 13;
					}
					else if(nd.mesto.x == 0 && nd.mesto.y != 0 && nd.mesto.y != 12)
					{
						povorot = 2;
					}
					else if(nd.mesto.x == 12 && nd.mesto.y != 0 && nd.mesto.y != 12)
					{
						povorot = 4;
					}
					else if(nd.mesto.y == 0 && nd.mesto.x != 0 && nd.mesto.x != 12)
					{
						povorot = 1;
					}
					else if(nd.mesto.y == 12 && nd.mesto.x != 0 && nd.mesto.x != 12)
					{
						povorot = 3;
					}
					else if(nd.mesto.x == 1 && nd.mesto.y == 1)
					{
						povorot = 5;
					}
					else if(nd.mesto.x == 1 && nd.mesto.y == 11)
					{
						povorot = 8;
					}
					else if(nd.mesto.x == 11 && nd.mesto.y == 1)
					{
						povorot = 6;
					}
					else if(nd.mesto.x == 11 && nd.mesto.y == 11)
					{
						povorot = 7;
					}
					
					else
					{
						povorot = 9;
					}

					nd.style.background = 'url(./sea' + povorot + '.png)'
				}
				
				
			}
		}

		Ship(pole, 0, 6, 1, team[1]);
		Ship(pole, 6, 0, 2, team[2]);
		Ship(pole, 12, 6, 3, team[3]);
		Ship(pole, 6, 12, 4, team[4]);

		hod = 1;
		hod1.style.visibility = 'visible';
		cheliki = document.getElementsByClassName('people');
		card = document.getElementsByClassName('card');
		zvuk = document.getElementById('zvuk');
		zvuk.volume = 0.5;
		for(i = 0; i <= 11; i++)
		{
			cheliki[i].onmouseenter = function(event)
			{
				zvuk.play();
			}
		}		

		slider = document.getElementById('myRange');
		slider.value = '50';
		music.volume = 0.5;
		slider.oninput = function() 
		{
		    music.volume = this.value/100;
		    zvuk.volume = this.value/100;
		}
			
			

		
	}

	//usic.play();

	var dontFlip = false;
	var numcave = 1;
	var caveentry = [null];
	var planeU = false;
	var beaconU = 4;
	var earthquakeU = false;
	var earthquake1 = null;
	var gold = [0, 0, 0, 0, 0];
	var rom = [0, 0, 0, 0, 0];
	var arrow = false;
	var drug = false;
	var crocodile = false;
	var gun1;
	var gun1n;
	var gun2;
	var gun2n;
	var plane = false;
	var horse = false;
	var benU = false;
	var fridayU = false;
	var missionaryU = false;
	var block1, block2, block3, block4;
	var musicp = false;

	var timer = setTimeout(Jakal, 1000);
	var netimer = setTimeout(NeJakal, 3000);

	

	function Perevernyt(event, target)
	{
		if(dontFlip == true)
		{ 
			dontFlip = false; 
			return;
		}
		var eta = target == null ? event.target : target;
		var canStep = false;
		
		if(selected == null && eta.kletka && eta.kletka.ship && hod == eta.team)
		{
			selected = eta;
			if(eta.team == 1)
				eta.style.background = 'url(./ship1selected.png)';
			else if(eta.team == 2)
				eta.style.background = 'url(./ship2selected.png)';
			else if(eta.team == 3)
				eta.style.background = 'url(./ship3selected.png)';
			else if(eta.team == 4)
				eta.style.background = 'url(./ship4selected.png)';
			return;
		}

		if(selected == null)
			return;

		if(selected.kletka != null && selected.kletka.ship)
		{
			var a = Math.abs(eta.mesto.y - selected.mesto.y);
			var b = Math.abs(eta.mesto.x - selected.mesto.x);
			var c = eta.mesto.y - selected.mesto.y;
			var d = eta.mesto.x - selected.mesto.x;
		}
		else
		{
			var a = Math.abs(eta.mesto.y - selected.parentElement.mesto.y);
			var b = Math.abs(eta.mesto.x - selected.parentElement.mesto.x); 
			var c = eta.mesto.y - selected.parentElement.mesto.y;
			var d = eta.mesto.x - selected.parentElement.mesto.x;

			if(selected.parentElement.kletka.type == 'pustina' && eta == selected.parentElement && selected.trap > 0)
				canStep = true;

			else if((eta.kletka.ship == false && selected.parentElement.type == 'cave' && numcave%2 == 1) || selected.trap > 0)
			{
				return;
			}
		}


		if(selected.kletka != null && selected.kletka.ship && a<=1 && b<=1 && (a != 0 || b != 0) && eta.kletka.water && eta.kletka.ship == false && 
			selected.kletka.players.length > 0) //ход кораблем
		{	
			var flag = false;
			for(k = 0; k <= selected.kletka.players.length; k++)
			{
				if(selected.kletka.players[k].skill == 'no')
				{
					if(((selected.team == 1 || selected.team == 3) && a == 0 && b == 1) || ((selected.team == 2 || selected.team == 4) && a == 1 && b == 0))
					{
						flag = true;
						break;
					}
					
				}
			}
			if(flag)
			{
				if(eta.kletka.players.length > 0)
				{
					for(i = 0; i < eta.kletka.players.length; i++)
					{
						if(eta.kletka.players[i].skill == 'friday' || eta.kletka.players[i].skill == 'missionary' )
						{
							for(j = 0; j <= selected.players.length; j++)
							{
								if(selected.kletka.players[j].skill == 'missionary' || selected.kletka.players[j].skill == 'friday')
								{
									eta.removeChild(eta.kletka.players[i]);
									eta.kletka.players = eta.kletka.players.filter(p => p!=selected);
									selected.removeChild(selected.kletka.players[j]);
									selected.kletka.players.splice(selected.kletka.players[j]);
								}
							}
						}
						else if(eta.kletka.players[i].team != selected.team)
						{
							eta.kletka.players = eta.kletka.players.filter(p => p!=selected);
							eta.kletka.players[i].ship.appendChild(eta.kletka.players[i]);
						}
					}
				}
				Swap(eta, selected);
				var someVar = pole[eta.mesto.y][eta.mesto.x];
				pole[eta.mesto.y][eta.mesto.x] = pole[selected.mesto.y][selected.mesto.x];
				pole[selected.mesto.y][selected.mesto.x] = someVar;
				selected.mesto.x = selected.mesto.x + d;
				selected.mesto.y = selected.mesto.y + c;
				eta.mesto.x = eta.mesto.x - d;
				eta.mesto.y = eta.mesto.y - c;
				if(selected.team == 1)
					selected.style.background = 'url(./ship1.png)';
				else if(selected.team == 2)
					selected.style.background = 'url(./ship2.png)';
				else if(selected.team == 3)
					selected.style.background = 'url(./ship3.png)';
				else if(selected.team == 4)
					selected.style.background = 'url(./ship4.png)';
				selected = null;
				Hod();
				return;
			}	
			
		}
		
		
		if(selected.parentElement.classList.contains('ship')) // ход с корабля
		{
			if((selected.parentElement.mesto.y == 0 && a == 1 && b == 0) || (selected.parentElement.mesto.y == 12 && a == 1 && b == 0) ||
				(selected.parentElement.mesto.x == 0 && a == 0 && b == 1) || (selected.parentElement.mesto.x == 12 && a == 0 && b == 1))
				canStep = true;
		}

		else if(eta.kletka.ship)
		{
			//добавить золото
			canStep = true;
		}
		else if(arrow)
		{
			if((selected.drug == 'right' && a == 0 && d == 1) || (selected.drug == 'rightleft' && a == 0 && b == 1) || 
            (selected.drug == 'rightleftupdown' && (a == 1 || b == 1) && (a == 0 || b == 0)) || (selected.drug == 'right-up' && c == -1 && d == 1) || 
            (selected.drug == 'left-up-down-right' && (a == 1 && b == 1) && c == -d ) || (selected.drug == 'diagonal' && a == 1 && b == 1) ||
            (selected.drug == 'diagonal-down-up' && ((c == 0 && d == 1) || (c == 1 && d == 0) || (c == -1 && d == -1))))
			{
				canStep = true;
				arrow = false;
				drug = false;
			}
			else
				return;
		}

		else if(selected.drug == 'horse')
		{
			var l = Math.abs(eta.mesto.x - selected.parentElement.mesto.x);
			var r = Math.abs(eta.mesto.y - selected.parentElement.mesto.y);
			if((l == 2 && r == 1) || (r == 2 && l == 1) && r != l)
			{
				canStep = true;
				drug = false;
			}
				
		}  
		
		

		else if((a<=1 && b<=1 && (a != 0 || b != 0) && selected.trap < 1) || selected.drug == 'ice' && selected.trap == 0) // обычный ход
			canStep = true;
		if(selected.parentElement.water && eta.water == false && selected.parentElement.kletka.ship == false)
			canStep = false;
		if((eta.kletka.type == 'castle' || eta.kletka.type == 'supercastle') && eta.kletka.players.length > 0)
		{
			for(i = 0; i <= eta.kletka.players.length; i++)
			{
				if(eta.kletka.players[i].team != selected.team)
				{
					canStep = false;
					break;
				}
			}
		}
		if(eta.kletka.type != 'ice' && selected.parentElement.kletka.players.length > 1 && eta.kletka.players.length > 0)
		{
			var missionaryy;
			for(i = 0; i < selected.parentElement.kletka.players.length; i++)
			{
				if(selected.parentElement.kletka.players[i].skill == 'missionary')
				{
					missionaryy = true;
					for(j = 0; j < eta.kletka.players.length; j++)
					{
						if(eta.kletka.players[j].team != selected.team && missionaryy)
						{
							canStep = false;
							break;
						}
					}
					
						
				} 
			}
		}
		if(eta.kletka.players.length > 0)
		{
			for(i = 0; i < eta.kletka.players.length; i++)
			{
				if(eta.kletka.players[i].skill == 'missionary' && eta.kletka.players[i].team != selected.team)
				{
					canStep = false;
					break;
				}
			}
		}
		else if(selected.parentElement.kletka.water == false && eta.kletka.water  && 
			(eta.kletka.ship == null || eta.kletka.ship == false) &&
		 	selected.parentElement.kletka.type != 'arrow' && selected.parentElement.kletka.type != 'ice' && selected.parentElement.kletka.type != 'horse')
			canStep = false;
		if(selected.drug == 'plane') // ход с самолета
		{
			if(eta.kletka.water == false && eta.kletka.water == false)
			{
				canStep = true;
				drug = false;
			}
		}

		if(crocodile)
			canStep = true;

		if(selected.drug  == 'earthquake' && selected.drug != 'beacon')
		{
			if(!eta.childNodes.length)
			{	
				if(earthquake1)
				{
					Swap(earthquake1, eta);
					f = eta.mesto.x;
					g = eta.mesto.y;
					eta.mesto.x = earthquake1.mesto.x;
					eta.mesto.y = earthquake1.mesto.y;
					earthquake1.mesto.x = f;
					earthquake1.mesto.y = g;
					selected.drug = 'no'
					selected.classList.remove('selected');
					selected = null;
					Hod();
					drug = false;
					earthquakeU = true;
				}
				else
					earthquake1 = eta;
				return;

			}
		}

		if(selected.drug  == 'beacon')
		{
			if(eta.kletka.open == false)
			{
				eta.classList.remove('close');
				eta.classList.add('open');
				var background = '';
				if(eta.kletka.type == 'pysto')
				{
					background = Math.floor(Math.random() * 4 + 1);
				}
				if(eta.kletka.type == 'rome1')
					rom[selected.team] = rom[selected.team] + 1;
				if(eta.kletka.type == 'rome2')
					rom[selected.team] = rom[selected.team] + 2;
				if(eta.kletka.type == 'rome3')
					rom[selected.team] = rom[selected.team] + 3;
				if(eta.kletka.type != 'gun' && eta.kletka.type != 'box' && eta.kletka.type != 'rome1' && eta.kletka.type != 'rome2' && 
					eta.kletka.type != 'rome3' && eta.kletka.type != 'arrow' && eta.kletka.type != 'pustina')
				{
					eta.style.background = "url(./" + eta.kletka.type + background + ".jpg)";
				}
				else if(eta.kletka.type == 'box')
				{
					eta.style.background = 'url(./box' + eta.kletka.gold + '.jpg)'
					var zoloto = document.createElement('div');
					zoloto.classList.add('gold');
					zoloto.innerText = eta.kletka.gold;
					zoloto.onclick = Gold;
					eta.appendChild(zoloto);
					eta.kletka.golddiv = zoloto;
				}
				else if(eta.kletka.type == 'rome1')
					eta.style.background = "url(./rome1.jpg)";
				else if(eta.kletka.type == 'rome2')
					eta.style.background = "url(./rome2.jpg)";
				else if(eta.kletka.type == 'rome3')
					eta.style.background = "url(./rome3.jpg)";
				else if(eta.kletka.type == 'gun') 
				{
					var max = 4, min = 1;
					var number = Math.floor(Math.random() * (max - min + 1) + min);
					if(gun1)
					{
						gun2 = eta;
						gun2n = number;
					}
					else
					{
						gun1 = eta;
						gun1n = number;
					}
					var suda;
					if(number == 1)
						suda = pole[0][eta.mesto.x];
					if(number == 2)
						suda = pole[eta.mesto.y][0];
					if(number == 3)
						suda = pole[12][eta.mesto.x];
					if(number == 4)
						suda = pole[eta.mesto.y][12];
					eta.style.background = 'url(./gun' + number + '.jpg)';
				}
				else if(eta.kletka.type == 'pustina')	
					eta.style.background = 'url(./pustina' + eta.kletka.direction + '.jpg)'; 
				else if(eta.kletka.type == 'arrow')
					eta.style.background = 'url(./' + eta.kletka.direction + '.jpg)'; 	
			}
			else
				return;
			beaconU = beaconU - 1;
			if(beaconU == 0)
			{
				selected.drug = 'no';
				selected.classList.remove('selected');
				selected = null;
				Hod();
				drug = false;
			}
			return;
		}


		if(canStep == false)
		{
			if(selected.drug != 'plane' && selected.drug != 'horse' && selected.drug != 'earthquake' && selected.drug != 'arrow' && 
				selected.drug != 'cave')
			{
				selected.classList.remove('selected');
				selected = null;
				
			}
			earthquake1 = null;
			return;
		}
		else
		{	
			//условия конца игры
			crocodile = false;
			var open = eta.kletka.open;
			for(i = 0; i < team[selected.team].length; i++)
			{
				if(team[selected.team][i].trap == 6)
					team[selected.team][i].trap = 0;
				
			}
			
			if(eta.kletka.open == false)
				close = true;
			else
				close = false;
			if(selected.drug == 'ice' || selected.drug == 'plane')
			{
				selected.drug = 'no';
				drug = false;
			}
			if(planeU)
			{
				//хз
			}
			if(eta.kletka.open == false)
			{
				eta.kletka.open = true;
				eta.classList.remove('close');
				eta.classList.add('open');
				var background = '';
				if(eta.kletka.type != 'gun' && eta.kletka.type != 'box' && eta.kletka.type != 'rome1' && eta.kletka.type != 'rome2' &&
					eta.kletka.type != 'rome3')
				{
					if(eta.kletka.type == 'pysto')
						background = Math.floor(Math.random() * 4 + 1);
					eta.style.background = "url(./" + eta.kletka.type + background + ".jpg)";
				}
			}

			if(eta.kletka.type == 'arrow' || (eta.kletka.type == 'plane' && open == false) || (eta.kletka.type == 'beacon' && beaconU > 0) || 
				eta.kletka.type == 'horse' || eta.kletka.type == 'earthquake')
			{
				drug = true;
			}

			

			if(eta.kletka.ship)
			{
                if((a <= 1 && b <= 1) || selected.drug == 'horse' || plane)
				{
				}
				else
					return;
			} 

			if(eta.kletka.type == 'pustina')
			{	
				eta.style.background = 'url(./pustina' + eta.kletka.direction + '.jpg)'; 
				if(selected.parentElement.kletka.type == 'pustina' && selected.trap > 0)
				{
					selected.trap = selected.trap - 1;
					selected.classList.remove('selected');
					selected = null;
					Information()
					Hod();
					return;
				}
				else
					selected.trap = eta.kletka.direction;
				Information();
			}

			if(selected.parentElement.kletka.type == 'plane' && planeU == false)
			{
				planeU = true;
				plane = true;
			}

			if(eta.kletka.type == 'cannibal' && selected.skill != 'friday')
			{
				selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
				selected.parentElement.removeChild(selected);
				team[selected.team] = team[selected.team].filter(p => p!=selected);
				Hod();
				return;
			}

			if(eta.kletka.type != 'crocodile' && eta.kletka.type != 'ice' && eta.kletka.type != 'cannibal' &&
			 (eta.kletka.ship != true || eta.kletka.ship == null)) // нападение
			{

				if(eta.kletka.players.length > 0)
				{
					if(eta.kletka.water == false && eta.kletka.type != 'jungle' && eta.kletka.type != 'castle' && 
						eta.kletka.type != 'supercastle')  //добавить этапы ловушек
					{
						var missionary = false;
						for(i = 0; i < eta.kletka.players.length; i++)
						{
							for(j = 0; j < selected.parentElement.kletka.players.length; j++)
							{
								if(selected.parentElement.kletka.players.length > 1 && selected.parentElement.kletka.players[j].skill == 'missionary' && 
									eta.kletka.players[i].team != selected.team)
								{
									missionary = true;
									break;
								}
                            }
                            var pustina = eta.kletka.players[i].trap - selected.trap
                            if (eta.kletka.type != 'pustina' || pustina == 1)
                            {
                                if(eta.kletka.players[i].team != selected.team && (eta.kletka.players[i].skill == 'missionary' || 
							    selected.skill == 'missionary'))
							    {
								    if(selected.skill == 'friday' || eta.kletka.players[i].skill == 'friday') // умирают оба
								    {
									    selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
									    selected.parentElement.removeChild(selected);
									    team[selected.team] = team[selected.team].filter(p => p!=selected);
									    team[eta.kletka.players[i].team] = team[eta.kletka.players[i].team].filter(p => p!=selected); //вроде бред
									    eta.kletka.players[i].div.parentElement.removeChild(eta.kletka.players[i]);
									    eta.kletka.players.splice(i, 1);
								    }
								    else //умирает выбранный
								    {		
									    selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
									    selected.parentElement.removeChild(selected);
									    team[selected.team] = team[selected.team].filter(p => p!=selected);
									    i = i - 1;
								    }   
							    }
							    else if(eta.kletka.players[i].team != selected.team && (selected.skill == 'no' || selected.skill == 'ben'))
							    {
								    if(missionary /*|| selected.skill == 'friday'*/) //миссионер не даст ходить //умирает выбранный
								    {
									    selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
									    selected.parentElement.removeChild(selected);
									    team[selected.team] = team[selected.team].filter(p => p!=selected);
									    selected = null;
									    Hod();
								    }
								    else
								    {
									    if(eta.kletka.players[i].skill == 'friday') //присоединяется пятница
									    {
										    if(selected.team == 1)
										    {
											    team[1].push(eta.kletka.players[i]);
											    eta.kletka.players[i].classList.add('team1');
											    eta.kletka.players[i].team = 1;
											    eta.kletka.players[i].classList.add('team1');
										    }
										    if(selected.team == 2)
										    {
											    team[2].push(eta.kletka.players[i]);
											    eta.kletka.players[i].classList.add('team2');
											    eta.kletka.players[i].team = 2;
											    eta.kletka.players[i].classList.add('team2');
										    }
										    if(selected.team == 3)
										    {
											    team[3].push(eta.kletka.players[i]);
											    eta.kletka.players[i].classList.add('team3');
											    eta.kletka.players[i].team = 3;
											    eta.kletka.players[i].classList.add('team3');
										    }
										    if(selected.team == 4)
										    {
											    team[4].push(eta.kletka.players[i]);
											    eta.kletka.players[i].classList.add('team4');
											    eta.kletka.players[i].team = 4;
											    eta.kletka.players[i].classList.add('team4');
										    }
										    team[eta.kletka.players[i].team] = team[eta.kletka.players[i].team].filter(p => p!=eta.kletka.players[i]);
											if(eta.kletka.players[i].team == 1)									   
											    //team1.players.splice(eta.kletka.players[i], 1); хз ваще че это
											    eta.kletka.players[i].classList.remove('team1');
										    if(eta.kletka.players[i].team == 2)
											    eta.kletka.players[i].classList.remove('team2');
										    if(eta.kletka.players[i].team == 3)
											    eta.kletka.players[i].classList.remove('team3');
										    if(eta.kletka.players[i].team == 4)
											    eta.kletka.players[i].classList.remove('team4');
										    eta.kletka.players[i].team = selected.team;
										    selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
									    }
									    else // умирает стоящий
									    {
										    eta.kletka.players[i].trap = 0;
										    eta.kletka.players[i].ship.div.appendChild(eta.kletka.players[i].parentElement.removeChild(eta.kletka.players[i]));
										    eta.kletka.players[i].ship.players.push(eta.kletka.players[i]);
										    eta.kletka.players = eta.kletka.players.filter(p => p!=eta.kletka.players[i]);

									    }
									    selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
									    eta.kletka.players.push(selected);
									    eta.appendChild(selected.parentElement.removeChild(selected));
									
								    }
								
							    }
							    else if((eta.kletka.players[i].skill == 'friday' && selected.skill == 'missionary') || //умирают оба
								    (eta.kletka.players[i].skill == 'missionary' && selected.skill == 'friday'))
							    {
								    selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
								    selected.parentElement.removeChild(selected);
								    team[selected.team] = team[selected.team].filter(p => p!=selected);
								    team[eta.kletka.players[i].team] = team[eta.kletka.players[i].team].filter(p => p!=selected);
								    eta.kletka.players[i].div.parentElement.removeChild(eta.kletka.players[i]);
								    eta.kletka.players.splice(i, 1);
							    }
                            }
							
						}
					}
					else// в воде
					{
						
					}
					
					
				}



				else if(eta.kletka.type != 'kapkan')
				{
					eta.kletka.players.push(selected);
					selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
					eta.appendChild(selected.parentElement.removeChild(selected));
					
				}
			}

			if(eta.kletka.type == 'plane' && planeU == false)
			{
				selected.drug = 'plane';
				return;
			}

			if(eta.kletka.type == 'balloon')
			{
				selected.ship.players.push(selected);
				selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
				selected.ship.div.appendChild(selected.parentElement.removeChild(selected));
				GoldM(selected, selected.ship.div)
			}

			if(eta.kletka.type == 'barrel')
			{
				if(selected.skill == 'friday')
				{
					selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
					selected.parentElement.removeChild(selected);
					team[selected.team] = team[selected.team].filter(p => p!=selected);
					selected = null;
					selectedgold = null;
					Hod();
					return;
				}
				else if(selected.skill == 'missionary')
				{
					selected.skill = 'no';
				}
				else
				{
					selected.trap = 6;
				}

			}

			if(eta.kletka.type == 'beacon' && beaconU == 4)
			{
				selected.drug = 'beacon';
			}

			if(eta.kletka.type == 'horse')
			{
				selected.drug = 'horse';
			}

			if(eta.kletka.type == 'earthquake' && !earthquakeU)
			{
				selected.drug = 'earthquake';
			}

			if(eta.kletka.type == 'crocodile')
			{
				if(selected.parentElement.kletka.type == 'arrow')
				{
					if(selected.parentElement.kletka.direction == 'right' || selected.parentElement.kletka.direction == 'right-up')
					{
						selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
					    selected.parentElement.removeChild(selected);
					    team[selected.team] = team[selected.team].filter(p => p!=selected);
					    selected = null;
					    Hod();
					    return;
					}
					//else if() добавить направления
				}
				crocodile = true;
				Perevernyt(null, selected.parentElement);
				return;
			}

			if(eta.kletka.type == 'ben' || eta.kletka.type == 'missionary' || eta.kletka.type == 'friday' && selected.drug != 'beacon')
			{
				if(eta.kletka.type == 'ben' && benU == false)
				{
					CreateChelik(eta, selected.team, eta.kletka.type, selected.ship, team[selected.team]);
					benU = true;
				} 
				if(eta.kletka.type == 'friday' && fridayU == false) 
				{
					CreateChelik(eta, selected.team, eta.kletka.type, selected.ship, team[selected.team]);
					fridayU = true;
				}
				if(eta.kletka.type == 'missionary' && missionaryU == false)
				{
					CreateChelik(eta, selected.team, eta.kletka.type, selected.ship, team[selected.team]);
					missionaryU = true;
				}
				

			}

			if(eta.kletka.type == 'kapkan')
			{
				if(eta.kletka.players.length > 0)
				{
					for(i = 0; i <= eta.kletka.players.length - 1; i++)
					{
						if(eta.kletka.players[i].team == selected.team)
						{
							eta.kletka.players[i].trap = 0;
							selected.trap = 0;
						}	
						else
							return;
					}
				}
				else
					selected.trap = 5

				selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
				eta.kletka.players.push(selected);
				eta.appendChild(selected.parentElement.removeChild(selected));
			}
			if(eta.kletka.type == 'cave')
			{
				if(open == false)
				{
					caveentry.push(eta);
					var mozhno;
					for(i = 1; i <= caveentry.length; i++)
					{
						if(caveentry[i] != eta && caveentry[i].kletka.players > 0)
						{	
							var chislo;
							for(j = 0; i < caveentry[i].kletka.players.length; i++)
							{
								if(caveentry[i].kletka.players[j].team == selected.team)
								{
									mozhno = mozhno + 1;
								}
							}
						}
						else if(caveentry[i] != eta && caveentry[i].kletka.players == 0)
							mozhno = mozhno + 1;
					}
					if(mozhno == 0)
						{
							selected.trap = 7;	
						}
						else if(mozhno == 1)
						{
							//переместить туда
						}
						else if(mozhno > 1)
						{
							selected.drug = cave;
							drug = true;
							return;
						}
					if(caveentry.length == 3)
					{
						selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
						caveentry[3].appendChild(selected.parentElement.removeChild(selected));
						if(caveentry[2])
						{

						}
					}
				}
			}

			if(eta.kletka.type == 'ice')
			{
				if(selected.drug != 'horse' && !plane)
					otkrit = pole[eta.mesto.y+c][eta.mesto.x+d];
				if(otkrit.type == 'crocodile')
				{
					otkrit.div.kletka.open = true;
					otkrit.div.classList.remove('close');
					otkrit.div.classList.add('open');
					otkrit.div.style.background = 'url(./crocodile.jpg)';
					selected.classList.remove('selected');
					selected = null;
					Hod();
					return;
				}
				if((otkrit.type == 'castle' || otkrit.type == 'supercastle') && otkrit.players > 0)
				{
					for(i = 0; i < otkrit.players; i++)
					{
						if(otkrit.players[i].team != selected.team)
						{
							selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
						    selected.parentElement.removeChild(selected);
						    team[selected.team] = team[selected.team].filter(p => p!=selected);
						    selected = null;
						    Hod();
						    return;
						}
					}
				}
				if(plane || selected.drug == 'horse')
				{
					eta.kletka.players.push(selected);
					selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
					eta.appendChild(selected.parentElement.removeChild(selected));
					return;
                }
 				
                if (!otkrit.div.close)
                {
                    GoldM(selected, eta);
                    Information();
                }  
                else
                {
                    selectedgold.classList.remove('selectedg');
                    selectedgold = null;
                }
				
				selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
				eta.appendChild(selected.parentElement.removeChild(selected));
				eta.kletka.players.push(selected);
				selected.drug = 'ice';
				Perevernyt(null, otkrit.div); 
				return;
			}
			

			if(eta.kletka.type == 'gun') 
			{
				if(close)
				{
					var max = 4, min = 1;
					var number = Math.floor(Math.random() * (max - min + 1) + min);
					if(gun1)
					{
						gun2 = eta;
						gun2n = number;
					}
					else
					{
						gun1 = eta;
						gun1n = number;
					}
				}
				else if(gun1 && gun1 == eta)
					number = gun1n;

				else if(gun2 && gun2 == eta)
					number = gun2n;

				var suda;
				number = 1;
				if(number == 1)
					suda = pole[0][eta.mesto.x];
				if(number == 2)
					suda = pole[eta.mesto.y][0];
				if(number == 3)
					suda = pole[12][eta.mesto.x];
				if(number == 4)
					suda = pole[eta.mesto.y][12];
				eta.style.background = 'url(./gun' + number + '.jpg)';
				
				if(number == 1)
				{
					for(i = eta.mesto.y - 1; i >= 0; i--)
					{		
						var p = pole[i][eta.mesto.x].div;
						if(p.childNodes.length > 0 && (p.kletka.ship == false || p.kletka.ship == null))
						{
							while(p.childNodes.length > 0)
							{
								if(p.firstChild.classList.contains('people'))
								{
									team[p.firstChild.team] = team[p.firstChild.team].filter(sos => sos != p.firstChild);
									p.kletka.players = p.kletka.players.filter(sos => sos != p.firstChild);
									p.removeChild(p.firstChild);
								}
								else if(p.firstChild.classList.contains('gold'))
								{
									p.gold = 0;
									p.golddiv = null;
									p.removeChild(p.firstChild);
								}
							}
						}
						/*else
						{
							team[selected.team] = team[selected.team].filter(sos => sos != team[selected.team].selected);
							selected.classList.remove('selected');
							selected = null;
							Hod();
							return;
						}*/
						
					}
				}
				//for(i = eta.kletka.mesto.y; i < 13 - selected.parentElement.kletka.mesto.y; i++)

				if((suda.ship && suda.div == selected.ship.div) || suda.ship == false)
				{
					GoldM(selected, suda.div);
					selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
					suda.players.push(selected);
					suda.div.appendChild(selected.parentElement.removeChild(selected));
					
				}
				else if(suda.ship && suda.div != selected.ship.div)
				{
					selected.parentElement.removeChild(selected);
					eta.kletka.players = eta.kletka.players.filter(p => p!=selected);
					team[selected.team] = team[selected.team].filter(p => p!=selected);
				}		
				
				GoldM(selected, eta, suda.div);
				Information();
				
				
			}

			if(eta.kletka.type == 'treasure')
			{
				var treasure = document.createElement('div');
				eta.appendChild(treasure);
				treasure.classList.add('treasure');
				eta.kletka.gold = eta.kletka.gold + 3;
				treasure.onclick = Treasure;
				
			}

			if(eta.kletka.type == 'box')
			{
				if(close)
				{
					eta.style.background = 'url(./box' + eta.kletka.gold + '.jpg)'
					var zoloto = document.createElement('div');
					zoloto.classList.add('gold');
					zoloto.innerText = eta.kletka.gold;
					zoloto.onclick = Gold;
					eta.appendChild(zoloto);
					eta.kletka.golddiv = zoloto;
				}
				
			}
			

			if(eta.kletka.type == 'rome1')
			{
				if(close)
				{
					eta.style.background = "url(./rome1.jpg)";
					rom[selected.team] = rom[selected.team] + 1;
				}
				
			}

			if(eta.kletka.type == 'rome2')
			{
				if(close)
				{
					eta.style.background = "url(./rome2.jpg)";
					rom[selected.team] = rom[selected.team] + 2;
				}
				
			}

			if(eta.kletka.type == 'rome3')
			{
				if(close)
				{
					eta.style.background = "url(./rome3.jpg)";
					rom[selected.team] = rom[selected.team] + 3;
				}
				
			}
			
			if(eta.kletka.type == 'arrow')
			{
				arrow = true;
				eta.style.background = 'url(./' + eta.kletka.direction + '.jpg)';
				selected.drug = eta.kletka.direction;
			}


			if(eta.kletka.type == 'supercastle') 
			{
				
				for(j = 1; j <=4; j++)
				{
					var killers = 0;
					for(i = 0; i < team[j].length; i++)
					{
						if(team[j][i].skill == 'no' || team[j][i].skill == 'ben')
							killers = killers + 1;
					}
					if(killers < 3)
						CreateChelik(eta, selected.team, 'no', selected.ship, team[j]);
				}
				
			}
			if(eta.kletka.water && eta.kletka.ship && eta.team == selected.team)
			{
				GoldM(selected, eta);
				eta.kletka.players.push(selected);
				selected.parentElement.kletka.players = selected.parentElement.kletka.players.filter(p => p!=selected);
				eta.appendChild(selected.parentElement.removeChild(selected));

			}
			else
				GoldM(selected, eta);
				
			Information();

			if(eta.kletka.type != 'ice' && selected.drug != 'ice' && eta.kletka.type != 'horse' && (eta.kletka.type != 'beacon' || 
				(eta.kletka.type == 'beacon' && beaconU == 0)) && 
				eta.kletka.type != 'arrow' && (eta.kletka.type != 'earthquake' || earthquakeU))
			{
				if(eta.kletka.type != 'gun' && eta.kletka.type != 'balloon' && eta.kletka.type != 'cannibal')
				{
					eta.appendChild(selected.parentElement.removeChild(selected));
				}
			}
			if(selected.drug == 'ice')
			{
				selected.drug = 'no';
			}
			if(plane && eta.kletka.type != 'ice')
				plane = false;
			if(selected.drug == 'horse' && selected.parentElement.kletka.type != 'ice' && selected.parentElement.kletka.type != 'horse')
				selected.drug = 'no';

			if(eta.kletka.type != 'ice' && selected.drug != 'ice' && eta.kletka.type != 'horse' && (eta.kletka.type != 'beacon' || 
				(eta.kletka.type == 'beacon' && beaconU == 0)) && 
				eta.kletka.type != 'arrow' && (eta.kletka.type != 'earthquake' || earthquakeU))
				Hod();

			
			/*if(eta.kletka.type != 'ice' && selected.drug != 'ice' && eta.kletka.type != 'horse' && (eta.kletka.type != 'beacon' || 
				(eta.kletka.type == 'beacon' && beaconU == 0)) && 
				eta.kletka.type != 'arrow' && eta.kletka.type != 'earthquake')
			{
				selected.classList.remove('selected');
				selectedgold = null;
				selected = null;
			}*/
			
			return;
		}
	}
	function Test(e, type, open, h1, h2)
	{
		opisanie.style.visibility = 'visible';
		var rect = e.getBoundingClientRect(); 
		opisanie.style.top = rect.top - 20;
		opisanie.style.left = rect.left + 70;
		if(open)
		{
			if(type == 'jungle')
			{
				h1.innerText += "Джунгли";
				h2.innerText += "За высокими деревьями не видно врагов. Людей не бить! Монеты не вносить!";
			}	
			else if(type == 'crocodile')
			{
				h1.innerText += "Крокодил";
				h2.innerText += "Немедленно возвращайтесь туда, откуда пришли, если не хотите быть съеденными.";
			}
			else if(type == 'pysto')
			{
				h1.innerText += "Поляна";
				h2.innerText += "Можно присесть и отдохнуть, пока остальные носятся по острову.";
			}
			else if(type == 'ice')
			{
				h1.innerText += "Лед";
				h2.innerText += "Осторожно! На льду вы скользите на одну клетку в том же направлении, в котором шли.";
			}
			else if(type == 'plane')
			{
				h1.innerText += "Самолет";
				h2.innerText += "Вы можете улететь в любое место острова, но только один раз.";
			}
			else if(type == 'earthquake')
			{
				h1.innerText += "Землетрясение";
				h2.innerText += "Позволяет незаметно поменять местами любые две клетки, если на них ничего не стоит.";
			}
			else if(type == 'beacon')
			{
				h1.innerText += "Маяк";
				h2.innerText += "С высокого маяка вы можете рассмотреть любые 4 клетки.";
			}
			else if(type == 'box')
			{
				h1.innerText += "Сундук";
				h2.innerText += "Золото! Уносите его скорее на свой корабль!";
			}
			else if(type == 'arrow')
			{
				h1.innerText += "Указатель";
				h2.innerText += "Теперь вы можете идти только в направлении одной из стелок, иначе заблудитесь и умрете.";
			}
			else if(type == 'pustina')
			{
				if(e.kletka.direction == 2)
				{
					h1.innerText += "Густой лес";
					h2.innerText += "На трезвую голову понадобится 2 хода, чтобы найти выход.";
				}
				else if(e.kletka.direction == 3)
				{
					h1.innerText += "Пустыня";
					h2.innerText += "На трезвую голову понадобится 3 хода, чтобы найти выход.";
				}
				else if(e.kletka.direction == 4)
				{
					h1.innerText += "Болото";
					h2.innerText += "На трезвую голову понадобится 4 хода, чтобы найти выход.";
				}
				else if(e.kletka.direction == 5)
				{
					h1.innerText += "Горы";
					h2.innerText += "На трезвую голову понадобится 5 ходов, чтобы найти выход.";
				}
			}
			else if(type == 'horse')
			{
				h1.innerText += "Лошади";
				h2.innerText += "Ходят как шахматный конь";
			}
			else if(type == 'kapkan')
			{
				h1.innerText += "Капкан";
				h2.innerText += "Придется ждать помощи союзников, чтобы продолжить путь";
			}
			else if(type == 'cannibal')
			{
				h1.innerText += "Людоед";
				h2.innerText += "Если вас зовут не пятница, то попрощайтесь с жизнью.";
			}
			else if(type == 'castle')
			{
				h1.innerText += "Крепость";
				h2.innerText += "Врагам и монетам вход запрещен.";
			}
			else if(type == 'supercastle')
			{
				h1.innerText += "Крепость с аборигенкой";
				h2.innerText += "Аборигенка возродит ваших умерших союзников, если вы настоящий пират. Врагам и монетам вход запрещен.";
			}
			else if(type == 'rome1')
			{
				h1.innerText += "Ром";
				h2.innerText += "Добавляет в ваш инвентарь бутылочку рома. Можно споить местных жителей или быстро выйти из ловушек";
			}
			else if(type == 'rome2')
			{
				h1.innerText += "Ром";
				h2.innerText += "Добавляет в ваш инвентарь две бутылочки рома. Можно споить местных жителей или быстро выйти из ловушек";
			}
			else if(type == 'rome3')
			{
				h1.innerText += "Ром";
				h2.innerText += "Добавляет в ваш инвентарь три бутылочки рома. Можно споить местных жителей или быстро выйти из ловушек";
			}
			else if(type == 'balloon')
			{
				h1.innerText += "Шар";
				h2.innerText += "Всегда унесет вас на корабль вместе со всем награбленным.";
			}
			else if(type == 'ben')
			{
				h1.innerText += "Бен Ганн";
				h2.innerText += "Старый пират с удовольствием присоединится к вашей команде.";
			}
			else if(type == 'friday')
			{
				h1.innerText += "Пятница";
				h2.innerText += "Местный житель поможет вашей команде в переноске грузов." +
				"Пятница не умеет драться и под натиском врага запросто перейдет в другую команду.";
			}
			else if(type == 'missionary')
			{
				h1.innerText += "Миссионер";
				h2.innerText += "Проповедует добро. Не нападает и сам не может быть атакован.";
			}
			else if(type == 'barrel')
			{
				h1.innerText += "Бочонок";
				h2.innerText += "Пират напивается и пропускает ход.";
			}
			else if(type == 'cave')
			{
				h1.innerText += "Пещера";
				h2.innerText += "Если не обнаружен хотя бы один выход, пират остается блуждать внутри.";
			}
			else if(type == 'grass')
			{
				h1.innerText += "Трава";
				h2.innerText += "Волшебная трава заставляет вражеских пиратов ходить за следующую команду.";
			}
			else if(type == 'gun')
			{
				h1.innerText += "Пушка";
				h2.innerText += "Выстреливает вас в море в том направлении, в котором стоит.";
			}
			else if(type == 'treasure')
			{
				h1.innerText += "Сокровище";
				h2.innerText += "Один такой слиток стоит целых 3 монет.";
			}
		}
		else
		{/*
			h1.innerText += "Лес";
			h2.innerText += "Эта карта закрыта. Возможно, именно за ней прячется сокровище.";*/
			h1.innerText += type;
		}
	}

	function Hod()
    {
		button.classList.add('inactive');
		button.classList.remove('active');
		
        if (selectedgold)
        {
            selectedgold.classList.remove('selectedg');
            selectedgold = null;
        }
        
        if (selected)
        {
            selected.classList.remove('selected');
            selected = null;
        }
			
		arrow = false;
		drug = false;
		hod = hod % 4 + 1;
		var n;
		if(hod == 1)
			n = 4
		else
			n = hod - 1;
		block[n].classList.remove('activeb');
		block[hod].classList.add('activeb');
		hodd[n].style.visibility = 'hidden';
		hodd[hod].style.visibility = 'visible';
		/*else if(hod == 4)
		{
			block3.classList.remove('activeb');
			block4.classList.add('activeb');
			hod3.style.visibility = 'hidden';
			hod4.style.visibility = 'visible';
		}*/
		if(gold[1]+gold[2]+gold[3]+gold[4] == 40 || team[1].length == 0 || team[2].length == 0
    		|| team[3].length == 0 || team[4].length == 0 || (team[1].length == 1 && team[1][0].trap > 4)
    		|| (team[2].length == 1 && team[2][0].trap > 4) || (team[3].length == 1 && team[3][0].trap > 4)
    		|| (team[4].length == 1 && team[4][0].trap > 4))
    		GameOver();
	}
	function TreasureM(selectedtreasure, selected, eta, suda)
	{
		
	}

	function Music(event)
	{
		if(!musicp)
		{
			musicp = true;
			music.play();
		}
		else
			return;
	}

	function GoldM(selected, eta, suda)
	{
		var parent = true;
		var eta = suda == null ? eta : suda;
		if(selectedgold != null)
		{
			if(!close)
			{
				if(selectedgold.parentElement.kletka.gold <= 1)
				{
					selectedgold.parentElement.kletka.golddiv = null;
					selectedgold.parentElement.kletka.gold = 0;
					if(eta.kletka.golddiv == null)
					{
						parent = false;
						if(eta.kletka.ship == false || eta.kletka.ship == null)
						{
							
							eta.appendChild(selectedgold);
							eta.kletka.golddiv = selectedgold;
							eta.kletka.gold = 1;
							eta.kletka.golddiv.innerText = eta.kletka.gold;
							selectedgold.classList.remove('selectedg');
						}
						else
							selectedgold.parentElement.removeChild(selectedgold);
						//selectedgold = null;
					}
					/*else
						selectedgold.parentElement.removeChild(selectedgold);*/
				}
				else
				{
					selectedgold.parentElement.kletka.gold = selectedgold.parentElement.kletka.gold - 1;
					selectedgold.innerText = selectedgold.parentElement.kletka.gold;
					/*
					if(eta.kletka.type != 'ice' && eta.kletka.type != 'balloon' && eta.kletka.type != 'cave' && eta.kletka.type != 'gun' && 
						eta.kletka.type != 'horse' && eta.kletka.type != 'arrow')
					{
						selectedgold.classList.remove('selectedg');
						selectedgold = null;
					}
					*/	
				}
                if (eta.kletka.water == false) 
                {
                    if (eta.kletka.gold == 0) 
                    {
                    	if(/*eta.kletka.type != 'ice' && */eta.kletka.type != 'balloon')
                    	{
                    		var zoloto = document.createElement('div');
	                        zoloto.classList.add('gold');
	                        eta.kletka.gold = eta.kletka.gold + 1;
	                        zoloto.innerText = eta.kletka.gold;
	                        zoloto.onclick = Gold;
	                        eta.appendChild(zoloto);
	                        eta.kletka.golddiv = zoloto;
	                    }
                        if (eta.kletka.type == 'ice' || eta.kletka.type == 'cave' || eta.kletka.type == 'gun' ||
                            eta.kletka.type == 'horse' || eta.kletka.type == 'arrow' || (eta.kletka.type == 'plane' && planeU == false)) 
                        {
                            selectedgold.classList.remove('selectedg');
                            if (selectedgold.parentElement.kletka.type == 'arrow' && selectedgold.parentElement.kletka.gold == 1)
                            {
                                selectedgold.parentElement.kletka.gold = 0;
                                selectedgold.parentElement.removeChild(selectedgold)
                            }
                        	
                            selectedgold = zoloto;
                            /*eta.appendChild(selectedgold);*/
                            selectedgold.classList.add('selectedg');
                        }
                        else if (eta.kletka.type == 'balloon')
                        {
                            gold[selected.team] = gold[selected.team] + 1;
                            if (selectedgold && selectedgold.classList.length > 0) {
                                selectedgold.classList.remove('selectedg');
                                selectedgold = null;
                            }
                        }
                        else
                        {
                        	selectedgold.classList.remove('selectedg');
                        	selectedgold = null;
                        }

                        
                    }
                    else if (parent) 
                    {
                        eta.kletka.gold = eta.kletka.gold + 1;
                        eta.kletka.golddiv.innerText = eta.kletka.gold;
                    }

                }
                else if (eta.kletka.ship && eta.team == selected.team) 
                {
                    gold[selected.team] = gold[selected.team] + 1;
                    if (selectedgold && selectedgold.classList.length > 0) 
                    {
                        selectedgold.classList.remove('selectedg');
                        selectedgold = null;
                    }
                }
			}
			else
			{
				selectedgold.classList.remove('selectedg');
				selectedgold = null;
			}
		}
		if(gold[selected.team] >= 20)
			GameOver();
		Information();

	}

	function Swap(e1,e2)
    {
        var n = e1.nextElementSibling;
        if(n != e2)
        {
            e2.before(e1);
            n.before(e2);            
        }
        else
        {
            n = e2.nextElementSibling;
            e1.before(e2);
            n.before(e1);
        }
    }

    function Button()
    {
    	if(button.classList.contains('active'))
    	{
    		selected.trap = 0;
			button.classList.add('inactive');
			button.classList.remove('active');
			rom[selected.team] = rom[selected.team] - 1;
			Information();
    	}
    }

    function GameOver()
    {
    	button.style.background = 'red';
    }

	function Fishka(event)
	{
		etot = event.target;
		//если уже выбран челик, то проверить выбранное золото и всякое	
		if(drug == false && selected && etot.team == hod && etot.classList.contains("people"))
		{
			if(selected == etot)
			{
				selected.classList.remove('selected');
				selected = null;
			}
			else
			{
				selected.classList.remove('selected');
				selected = etot;
				selected.classList.add('selected');
			}
			if(selectedgold)
			{
				selectedgold.classList.remove('selectedg');
				selectedgold = null;
			}
		}
		
		else if(etot.classList.contains("people") && etot.team == hod && drug == false)
		{
			dontFlip = true;
			etot.selected = true;
			selected = etot;
			selected.classList.add('selected');
			if(selected.parentElement.kletka && selected.parentElement.kletka.type == 'pustina' && rom[selected.team] > 0 && selected.trap > 0)
			{
				button.classList.remove('inactive');
				button.classList.add('active');
			}
			
			/*for(i = 0; i <= 11; i++)
				chelik[i].onmouseenter = null;
			for(i = 0; i <= 168; i++)
			{
				card[i].onmouseenter = function(event)
				{
					zvuk.play();
				}
			}*/
		}
	}

	function Gold(event)
	{
		eto = event.target;
		if(eto.parentElement == selected.parentElement)
		{
			dontFlip = true;
			selectedgold = eto;
			eto.classList.add('selectedg');
		}
	}
	function Treasure(event)
	{
		eto = event.target;
		if(eto.parentElement == selected.parentElement)
		{
			dontFlip = true;
			selectedtreasure = eto;
			eto.classList.add('selectedtreasure');
		}
	}

	function Information()
	{
		var rum1 = document.getElementById('rom1');
		var rum2 = document.getElementById('rom2');
		var rum3 = document.getElementById('rom3');
		var rum4 = document.getElementById('rom4');

		rum1.innerText = rom[1]; 
		rum2.innerText = rom[2];
		rum3.innerText = rom[3];
		rum4.innerText = rom[4];

		var coin1 = document.getElementById('coin1');
		var coin2 = document.getElementById('coin2');
		var coin3 = document.getElementById('coin3');
		var coin4 = document.getElementById('coin4');

		coin1.innerText = gold[1];
		coin2.innerText = gold[2];
		coin3.innerText = gold[3];
		coin4.innerText = gold[4];

		for(j = 1; j <= 4; j++)
		{
			for(i = 0; i < team[j].length; i++)
			{
				if(team[j][i].trap > 0)
				{
					if(team[j][i].parentElement.kletka && team[j][i].parentElement.kletka.type == 'pustina')
						team[j][i].innerText = team[j][i].trap;
					else
						team[j][i].innerText = "X";
				}
				else
					team[j][i].innerText = "";
			}
			
		}
		
		/*var block;
		if(team == 1)
			block = block1;
		else if(team == 2)
			block = block2;
		else if(team == 3)
			block = block3;
		else 
			block = block4;*/

		


	}

	function CreateCard(a, gold, count, type, direction) //создает карточки
	{
		for(i = 1; i <= count; i++)
		{
			var thiscard = {};
			thiscard.type = type;
			thiscard.water = false;
			thiscard.gold = gold;
			thiscard.open = false;
			thiscard.direction = direction;
			thiscard.players = [];
			a.push(thiscard);
		}
	}


	function CreateChelik(a, team, skill, ship, massiv) //создает челиков
	{
		var player = document.createElement('div');
		player.team = team;
		player.onclick = Fishka;
		player.drug = 'no';
		player.selected = false;
		player.skill = skill;
		a.appendChild(player);
		player.setAttribute('class','people');
		player.classList.add(skill)
		player.classList.add('team'+team);
		player.gold = 0;
		player.treasure = false;
		player.trap = 0;
		if(a.water)
			player.ship = a;
		else
			player.ship = ship;
		player.cave = false;
		a.kletka.players.push(player);
		massiv.push(player);
	}


	function Ship(a, y, x, team, massiv)
	{
		a[y][x].ship = true;
		a[y][x].div.setAttribute('class','card ship');
		a[y][x].div.team = team;
		if(team == 1)
		{
			a[y][x].div.classList.add('ship1');
			a[y][x].div.style.background = 'url(./ship1.png)';
		}
		if(team == 2)
		{
			a[y][x].div.classList.add('ship2');
			a[y][x].div.style.background = 'url(./ship2.png)';
		}
		if(team == 3)
		{
			a[y][x].div.classList.add('ship3');
			a[y][x].div.style.background = 'url(./ship3.png)';
		}
		if(team == 4)
		{
			a[y][x].div.classList.add('ship4');
			a[y][x].div.style.background = 'url(./ship4.png)';
		}
		for(i = 1; i <= 3; i++) 
		{ 
			CreateChelik(a[y][x].div, team, 'no', a[y][x], massiv); 
		}

	}
	function Jakal()
	{
		jakal = document.getElementById('jakal');
		jakal.style.display = 'block';
	}
	function NeJakal()
	{
		jakal = document.getElementById('jakal');
		jakal.style.display = 'none';
	}


	function Shuffle(array) 
	{
		var currentIndex = array.length, temporaryValue, randomIndex;
	  	while (0 !== currentIndex) 
	  	{
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;

	}
}

var game = new Game();
document.addEventListener('DOMContentLoaded',game.Start);
