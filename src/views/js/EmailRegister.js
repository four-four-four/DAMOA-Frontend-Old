export default {
    name: '',

    components: {},

    data() {
        return {
            // 이용약관 동의 내용
            options: [
                {title: "DAMOA 이용약관 동의(필수)", content: "약관 내용 1", index: "CK01"},
                {title: "개인정보 수집 및 이용 동의(필수)", content: "약관 내용 2", index: "CK02"},
                {title: "위치정보 이용약관 동의(선택)", content: "약관 내용 3", index: "CK03"},
                {title: "프로모션 정보 수신 동의(선택)", content: "약관 내용 4", index: "CK04"}
            ],
            selected: [],
            selectAll: false,

            alert_empty: '',

            // availableEmail: true,
            isEmailOk: true,
            isEmailEmpty: true,
            isEmailDupl: true,

            // passEmail: false,
            isPasswordEmpty: true,
            isPasswordCheckEmpty: true,
            availablePassword: true,
            passPassword: false,
            duplPassword: false,
            notDuplPassword: false,

            // nickname 변수
            isNickEmpty: true,
            isNickDupl: null,

            urlEmailDuplCheck: 'https://c4463872-d5df-4f02-ad5c-cf7d329eeac2.mock.pstmn.io/emailDuplCheck',
            urlNickDuplCheck: 'https://c4463872-d5df-4f02-ad5c-cf7d329eeac2.mock.pstmn.io/nickDuplCheck'
        };
    },

    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeUnmount() {
    },
    unmounted() {
    },
    methods: {
        select() {
            this.selected = [];
            if (!this.selectAll) {
                for (let i in this.options) {
                    this.selected.push(this.options[i].index);
                }
            }
        },
        updateCheckall: function () {
            if (this.options.length == this.selected.length) {
                this.selectAll = true;
            } else {
                this.selectAll = false;
            }
        },
        async emailDuplCheck() {
            // 이메일 검증 변수 초기화

            // 이메일 가져오기
            const userEmail = document.getElementById("useremail").value;

            this.isEmailEmpty = true;
            this.isEmailOk = true;
            if (userEmail.length > 0) {
                this.isEmailEmpty = false;

                // 정규식
                const reg_email = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;

                // 이메일 형식이 맞으면
                if (reg_email.test(userEmail)) {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({email: userEmail})
                    };
                    fetch(this.urlEmailDuplCheck, requestOptions)
                        .then(async response => {
                            const data = await response.json();
                            this.isEmailDupl = data.isDupl;

                            // check for error response
                            if (!response.ok) {
                                // get error message from body or default to response status
                                const error = (data && data.message) || response.status;
                                return Promise.reject(error);
                            }
                        })
                        .catch(error => {
                            this.errorMessage = error;
                            console.error('There was an error!', error);
                        });
                }
                // 이메일 형식이 안맞으면
                else {
                    this.isEmailOk = false;
                    this.isEmailDupl = true;
                }
            } else {
                this.isEmailEmpty = true;
                this.isEmailDupl = true;
            }
        },
        pwCheck() {
            const userPassword = document.getElementById("userpw").value;
            this.passPassword = false;
            this.availablePassword = true;
            if (userPassword.length > 0) {
                this.isPasswordEmpty = false;
                this.availablePassword = true;
                // this.passEmail = false;
                const numIdx = userPassword.search(/[0-9]/g);
                const sEngIdx = userPassword.search(/[a-z]/g);
                const cEngIdx = userPassword.search(/[A-Z]/g)
                const speIdx = userPassword.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

                let count = 0;
                if (numIdx < 0) --count;
                if (sEngIdx < 0) --count;
                if (cEngIdx < 0) --count;
                if (speIdx < 0) --count;

                if (count < -2 || userPassword.length < 8) this.availablePassword = false;
                else this.availablePassword = true;
                this.passPassword = this.availablePassword
            } else {
                this.isPasswordEmpty = true;
            }
        },
        pwDuplCheck() {
            const pw1 = document.getElementById("userpw").value;
            const pw2 = document.getElementById("userpwchk").value;

            if (pw2.length == 0) {
                this.isPasswordCheckEmpty = true;
                this.duplPassword = false;
                this.notDuplPassword = false;
            } else if (pw1 === pw2) {
                this.duplPassword = true;
                this.notDuplPassword = false;
                this.isPasswordCheckEmpty = false;
            } else {
                this.isPasswordCheckEmpty = false;
                this.duplPassword = false;
                this.notDuplPassword = true;
            }
        },
        async nicknameDuplCheck() {
            // 닉네임 가져오기
            const nickname = document.getElementById("usernickname").value;
            this.isNickDupl = null;
            this.isNickEmpty = true;
            if (nickname.length > 0) {
                this.isNickEmpty = false;

                // 서버에서 체크하고 값을 받아오는 코드
                // ...
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({nickname: nickname})
                };
                fetch(this.urlNickDuplCheck, requestOptions)
                    .then(async response => {
                        const data = await response.json();
                        this.isNickDupl = data.isDupl;

                        // check for error response
                        if (!response.ok) {
                            // get error message from body or default to response status
                            const error = (data && data.message) || response.status;
                            return Promise.reject(error);
                        }
                    })
                    .catch(error => {
                        this.errorMessage = error;
                        console.error('There was an error!', error);
                    });
                // ...
            } else {
                this.isNickEmpty = true;
                this.isNickDupl = null;
            }
        },
        totalCheck() {
            if (
                !this.isEmailDupl && this.duplPassword &&
                !this.isNickDupl &&
                this.selected.includes("CK01") && this.selected.includes("CK02")
            ) {
                // 이메일, 비밀번호,  닉네임, 약관동의
                const data = {
                    email: document.getElementById("useremail").value,
                    password: document.getElementById("userpw").value,
                    nickname: document.getElementById("usernickname").value,
                    agree: this.selected
                };
                // data.email = document.getElementById("useremail").value;
                // data.password = document.getElementById("userpw").value;
                // data.nickname = document.getElementById("usernickname").value;
                // data.agree = this.selected;
                console.log(data);
                // postman 테스트 해서
                // const response = await axios.post("url", data);

                // 성공

                // 실패
                alert('성공');
            } else {
                this.alert_empty = '필수 정보입니다.'
            }
        }
    }
}
