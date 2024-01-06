

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
    모든 웹사이트의 기본적인 인증을 구현하는 프로젝트로써 인증되지않은 사용자는 허락된 유저만 사용할 수 있는 사이트를 만듬과 동시에 예상하지 못한 예외처리를 할수 있는 기본적인 로직을 만드는 프로젝트인데.

    구현하며 중요하게 생각햇던 점 
    인증되지 않은 사용자는 접속이 안되게 하는것(구현못함)
    예상하지 못한 예외처리
    Jwt토큰을 사용하여 인증을 처리하는 미들웨어 작성


  단
    



