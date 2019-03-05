function createAccount() {
    var new_user = $('#new-username').val();
    var new_pass = $('#new-password').val();
    var confirm_pass = $('#confirm-password').val();
    var new_email = $('#new-email').val();
    $.post('createaccount.php', {
        new_user: new_user,
        new_pass: new_pass,
        confirm_pass: confirm_pass,
        new_email: new_email