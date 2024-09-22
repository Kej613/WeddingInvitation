import './Header.css';

export default function Test() {
    function onClickHandle(){
        console.log("clicked");
        alert("clicked");
    }

    return (
        <div className= "wrap">
            <div className= "main">
                <h2 className="date"> 2024|10|05 </h2>
                <p className="date"> Saturday </p>

                <div className="absolute-container">
                      <img
                        src="/images/headerimage.jpg"
                        alt="Header"
                        style={{ width: '300px', height: 'auto' }}
                      />
                </div>

                <div className="content">
                  <h1 className="header"> 고우림 | 김연아 </h1>
                  <p className="content1"> 2024년 10월 12일 토요일 오후 1시 30분 <br/>
                    아펠가모 광화문 B2 로스타뇨홀
                  </p>
                </div>

                <div className="content">
                  <p className="content1"> 두 사람이 꽃과 나무처럼 걸어와서 <br/>
                    서로의 모든 것이 되기 위해 <br/>
                    오랜 기다림 끝에 혼례식을 치르는 날 <br/>
                    세상은 더욱 아름다워라 <br />
                    이해인
                  </p>
                </div>

                <div className="content">
                  <h2 className="date"> 소중한 사람들을 초대합니다 </h2>
                  <p className="content1"> 살랑이는 바람결에 <br/>
                    사랑이 묻어나는 계절입니다. <br/>
                    여기 곱고 예쁜 두 사람이 사랑을 맺어 <br/>
                    인생의 반려자가 되려 합니다. <br/>
                  </p>
                </div>

               <div className="absolute-container">
                     <img
                       src="/images/Wedding2.jpg"
                       alt="Header"
                       style={{ width: '300px', height: 'auto', borderRadius: '10px'}}
                     />
               </div>
            </div>
        </div>
    )
}