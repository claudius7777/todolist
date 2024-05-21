
function keyCodeCheck() {
    console.log(window.event)

    if(window.event.keyCode === 13){
        const newLi = document.createElement('li'); // li 생성
        const newBtn = document.createElement('button'); // button 생성
        const newSpan = document.createElement('span'); // span 생성
        const todoInput = document.querySelector('#todoInput');
        const todoList = document.querySelector('#todoList');
        // 할일 추가 함수 작성

        newLi.appendChild(newBtn); // li안에 button담기
        newLi.appendChild(newSpan); // li안에 span 담기
        newSpan.textContent = todoInput.Value; 
        todoList.appendChild(newLi);

        console.log(newLi)
        console.log(todoList)

        todoInput.value =''; // value 값에 빈 문자열 담기
        
       
        
        
    }
}

//textContent 메소드로 텍스트를 가져옵니다.