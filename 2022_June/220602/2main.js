
/*
CSS 선택자

태그 선택자
div { color: red; } 이렇게 하면 모든 div 태그가 전부 적용된다.
p {color: black}

ID셀렉터
#name {color: red;} 이렇게 쓰면 id 어트리뷰트가 name인 선택자
 id는 이름이 중복하며 안됨

클래스 셀렉터
.content{color:red;} 클래스는 동일한 이름을 가질수 있다.
content 클래스를 가지고있는 모든 요소에 적용

어트리뷰트 셀렉터
div[href] {color:red;}  div에 href가 있는 모든요소

div[target="_blank"] {color:red;}  div에 target이 있는데, 값이 _blank인 요소

자식 선택자
 .content .name { color : red;}  content 클래스의 자식요소중 name클래스를 가지고 있는 모든요소

 .content > .name { color : red; }  content클래스의 자식요소중 첫번째 있는 자식요소에만 적용


 형제 셀렉터
 .content + .content2 { color : red; }  content클래스의 같은 레벨의 형제요소 선택


가상 클래스 셀렉터
a:hover { color : red; }   a에 마우스를 올렸을때 일어나는 스타일
input:focus { color : red; }  input이 포커스 상태일때 일어나는 스타일

다수의 클래스 선택자
.content.active { coloc : red; }   content클래스도 가지고 있고 active클래스도 가지고 있는 요소

*/