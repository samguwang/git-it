var exec = require('child_process').exec
exec('git config user.username', function(err, stdout, stdrr) {
  var show = stdout.trim()
  
    console.log("Changes have been committed!")
})