javascript: (function () {

var currentStatusCookie = document.cookie.match(
      "(^|[^;]+)\\s*contentEditableStatus\\s*=\\s*([^;]+)"
    );
var cookie =  currentStatusCookie ? currentStatusCookie : document.cookie = "contentEditableStatus=True";
    
  var currentStatus = !(
    document.cookie.match(
      "(^|[^;]+)\\s*contentEditableStatus\\s*=\\s*([^;]+)"
    )[2] == "true"
  );
  
  document.body.contentEditable = currentStatus;
  document.cookie = "contentEditableStatus=" + currentStatus;
  console.log(currentStatus ? "Editable" : "Not Editable");
})();