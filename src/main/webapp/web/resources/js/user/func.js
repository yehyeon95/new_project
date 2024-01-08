/**
 * user와 관련된 이벤트 정의한다.
 */

var USERFUNC = {

    login:function(){
        var userId = $('#userId').val();
        var userPassword = $('#userPassword').val();

        if(userId.trim()===''){
            alert('아이디를 입력하세요!')
            return
        }
        if(userPassword.trim()===''){
            alert('비밀번호를 입력하세요!')
            return
        }
        window.location.href = 'main.html';
    },

    join:function(){
        console.log('join함수 들어오는지 확인')
    }
}