<!-- Custom component for social cards. -->
<!-- N.B.: THIS COMPONENT RENDERS ON THE SERVER! -->

<script>
	let { pageTitle = 'The Astronomy Feed' } = $props();
	const ten = 5 + 5;
	const imageHeight = 87;

    const maxLength = 30;
    const maxFontSize = 65;
	let fontSize = $state(maxFontSize);
	if (pageTitle.length > maxLength) {
		fontSize = (maxFontSize * maxLength) / pageTitle.length;
	}
</script>

<div
	style="
    display: flex;
    height: {imageHeight}%; 
    width: 100%; 
    background-color: black;
    background-image: url(https://cdn.esahubble.org/archives/images/screen/heic0206a.jpg);
    background-size: cover;
    "
></div>

<div
	style="
    display: flex; 
    flex-direction: row; 
    font-size: 40px; 
    height: {100 - imageHeight}%; 
    width: 100%; 
    align-items: center; 
    justify-content: space-between; 
    text-align: center; 
    gap: 0px;
    color: white;
    background-color: #262626;
    padding-left: 20px;
    padding-right: 20px;

    "
>
	<div
		style="
    display: flex; 
    gap: 20px; 
    flex-direction: row; 
    align-items: center; 
    justify-content: center;
    "
	>
		<!-- <img src="https://astrosky.eco/favicon.png" style="height: 50px; margin: 0px" alt="Logo" /> -->
		<p
			style="width: 180px; font-size: 30px; font-weight: bold; line-height: 100%; font-family: Bold; text-align: center;"
		>
			The Astrosky Ecosystem
		</p>
		<h1
			style="
    font-size: 50px; 
    margin: 0px; 
    padding: 0px;
    "
		>
			|
		</h1>
	</div>

	<h1
		style="
    font-size: {fontSize}px; 
    padding: 0px;
    margin: 0 0 8px 0;
    "
	>
		{pageTitle}
	</h1>
</div>

<!-- <div
	style="display: flex; 
    justify-content: center; 
    align-items: center; 
    gap: 10px; 
    position: absolute; 
    right: 0px; 
    bottom: 0px; 
    width: 100%;
    color: white;
    "
>
	
</div> -->
