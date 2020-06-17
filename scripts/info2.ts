let info_arr = JSON.parse(info)


for (let index in info_arr){
	if (index == 0){
	document.getElementById("v-pills-tab").innerHTML += 
	`<a class="nav-link active" id="v-pills-${index}-tab" data-toggle="pill" href="#v-pills-${index}" role="tab" aria-controls="v-pills-${index}" aria-selected="true">
		${info_arr[index].Title}
	</a>`

	document.getElementById("v-pills-tabContent").innerHTML += 
	`<div class="content tab-pane fade show active" id="v-pills-${index}" role="tabpanel" aria-labelledby="v-pills-${index}-tab"> 
		<div class="row no-gutters"> 
			<div class="col-4">
				<p> ${info_arr[index].Image}</p>
			</div>
			<div class="col-8">
				<h2> ${info_arr[index].Title}</h2>
				<p>${info_arr[index].Description}</p>
			</div>
		</div>
	</div>`}

	else{
	document.getElementById("v-pills-tab").innerHTML += 
	`<a class="nav-link" id="v-pills-${index}-tab" data-toggle="pill" href="#v-pills-${index}" role="tab" aria-controls="v-pills-${index}" aria-selected="true">
			${info_arr[index].Title}
	</a>`

	document.getElementById("v-pills-tabContent").innerHTML += 
	`<div class="content tab-pane fade show" id="v-pills-${index}" role="tabpanel" aria-labelledby="v-pills-${index}-tab"> 
		<div class="row no-gutters"> 
			<div class="col-4">
				<p> ${info_arr[index].Image}</p>
			</div>
			<div class="col-8">
				<h2> ${info_arr[index].Title}</h2>
				<p>${info_arr[index].Description}</p>
			</div>
		</div>
	</div>`}
	}