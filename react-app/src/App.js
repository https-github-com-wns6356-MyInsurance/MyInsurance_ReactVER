import './App.css';

function App() {
    return (
    <div className='app'>
    <div class="wrap">
    <div class="login">
        <h2>로그인</h2>

        <form action="/member/loginBtn" method="post">
            <div class="login_id">
                <h4>아이디</h4>
                <input type="text" name="id" id="" placeholder="ID"/>
            </div>
            <div class="login_pw">
                <h4>패스워드</h4>
                <input type="password" name="password" id="" placeholder="Password"/>
            </div>
            <div class="login_etc">
                <div class="checkbox">
                    <label><input type="checkbox" name="" value=""/>
                        <span>로그인 상태 유지</span></label>
                </div>
            </div>
            <div class="submit">
                <input type="submit" value="로그인"/>
            </div>
            <div class="signup">
                <a href="signup.html" >회원가입</a>
            </div>
        </form>
        </div>
    </div>
</div>
);
}

export default App;
