

![image](https://github.com/poeroff/2024nbcamp_timeattack/assets/80104001/9f8ad418-f01b-4a2e-83e3-323da8857319)









        

POST(URL :  http://localhost:3000/account/register) 기능 : 회원가입 


          
          request : 
          {
              "email" : "test@naver.com",
              "password" : "test123",
              "confirmPassword" : "test123",
              "name" : "choi",
              "phonenumber": "???-???-???"
          }
          
          response : 
        
        성공 : 
        {
            "id": 4,
            "email": "chlxodud09@naver.com",
            "name": "choi",
            "createdAt": "2024-01-06T05:22:32.339Z"
        }
        
        
        실패 : 
        {
            "success": false,
            "timestamp": "2024-01-06T05:15:05.466Z",
            "path": "/account/register",
            "error": "이미 존재하는 이메일입니다"
        }
    POST(URL : http://localhost:3000/account/login) 기능 : 로그인 
    
    request : 
          {
              "email" : "chlxodud07@naver.com",
              "password" : "wqdsdsf12"
          }
          
    response :
    성공 : 
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjaGx4b2R1ZDA3QG5hdmVyLmNvbSIsImlhdCI6MTcwNDUxODY1NX0.bHz3qDG6zDEpuiq8YLYzVdzoK5y_PjLBnDX4n1BE14o"
    }

    실패 : 
    {
    "success": false,
    "timestamp": "2024-01-06T05:15:46.514Z",
    "path": "/account/login",
    "error": "비밀번호를 확인해주세요."
    },
    {
    "success": false,
    "timestamp": "2024-01-06T05:24:07.012Z",
    "path": "/account/login",
    "error": "등록되지 않은 이메일입니다"
    }


    프로젝트 개요
    로그인과 회원가입 기능을 구현함으로써 인증되지 않는 사용자는 로그인한 사용자만이 들어갈수 있는 사이트에 허용되지 않게 하는 프로젝트를 구현한다. 동시에 예상치 못한 에러를 처리할 수 있는 프로젝트또한 동시에 구현함으로써 인증에 대한 기본이 되는 프로젝        트를 만든다.


    구현하며 중요하게 생각했던 점 
    csrf 토큰을 이용해서 허락되지 않은 유저의 출입을 금지한다.
    예상치 못한 에러를 처리한다.
    



