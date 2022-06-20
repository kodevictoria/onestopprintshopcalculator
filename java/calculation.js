var showWeb;

function webLoader() {
  showWeb = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myWeb").style.display = "block";
}

function calculatePriceIn(){
  var inwidth = document.getElementById("job-widthin").value;
  var inheight = document.getElementById("job-heightin").value;
  var innumber = document.getElementById("innumber").value;
  var inprice = Math.round(inwidth*inheight*innumber*130/144);
  
  document.getElementById("calculated-price").innerHTML = inprice;
}
function calculatePriceFt(){
  var ftwidth = document.getElementById("job-widthft").value;
  var ftheight = document.getElementById("job-heightft").value;
  var ftnumber = document.getElementById("ftnumber").value;
  var ftprice = Math.round(ftwidth*ftheight*ftnumber*130);
  
  document.getElementById("calculated-price").innerHTML = ftprice;
}
function resetUnits(){
  document.getElementById("job-widthin").value = '';
  document.getElementById("job-heightin").value = '';
  document.getElementById("innumber").value = '';
  document.getElementById("job-widthft").value = '';
  document.getElementById("job-heightft").value = '';
  document.getElementById("ftnumber").value = '';
  document.getElementById("calculated-price").innerHTML = '';
  document.getElementById("calculated-price").innerHTML = '';

}