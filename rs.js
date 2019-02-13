function slotRoller(spd, selector) { //selector?

	var speed = 25; // slot Rotation Speed (starts fast and slows down. Higher then number, the slower the spin. Makes no sense but ok).
	var firstChild = $("#list li:first-child"); //First list item of the slots 
		lastChild = $("#list li:last-child");  //last list item of the slots

	// slot 
	$(selector).animate({


        marginTop: "-500px" // margin top?
        
        //end of selector animate
		}, speed + (spd * .01 + spd), "linear", function(){ //how fast the slots spin before stopping on the random number
			// 
			firstChild = $("li:first-child", this);
			$(this).append(firstChild); //?
			$(this).css({ marginTop: "-250px"}); //?

			// 현재 심볼 번호
			var symbol_no1 = $('li:nth-child(2)', '#slot_box1').attr('data-roll');
            var symbol_no2 = $('li:nth-child(2)', '#slot_box2').attr('data-roll');
            var symbol_no3 = $('li:nth-child(2)', '#slot_box3').attr('data-roll');
			$('#symbol_no1').html("symbol No: " + symbol_no1);
            $('#symbol_no2').html("symbol No: " + symbol_no2);
						$('#symbol_no3').html("symbol No: " + symbol_no3);
						//slots do not stop here
	});
//end of first function
}

/* 슬롯 객체를 정의 */
function Slot_roll(slotName){
	this.min = 30;
	this.max = 50;
	this.dice = function(){
		var dice = Math.round(Math.random() * (this.max - this.min)) + this.min;
		for (var i = 0; i < dice; i++) {
			slotRoller(i, slotName);
		}
		console.log(dice);	
	}
}

/* 슬롯 객체 인스턴스 생성 */
var slot_roll1 = new Slot_roll('#slot_box1 #list');
var slot_roll2 = new Slot_roll('#slot_box2 #list');
var slot_roll3 = new Slot_roll('#slot_box3 #list');

/* 슬롯 시작!! */
$('#btn_r').on( "click", function(){

	// 애니메이션이 재생중이 아닐 때만 돌리고!!
	if( $('#slot_box1 #list').is(':not(:animated)') ){
		slot_roll1.dice();
	}
	if( $('#slot_box2 #list').is(':not(:animated)') ){
		slot_roll2.dice();
    }	
    if( $('#slot_box3 #list').is(':not(:animated)') ){
		slot_roll3.dice();
	}	
});

