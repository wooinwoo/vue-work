vue work

//////////////</br>
데이터 변경 감지
</br>
watch(data, (new_data, old_data) => {
console.log(new_data, old_data)
});

//////////////</br>
태그가 scoped 속성을 가지고있을 때, CSS는 현재 컴포넌트의 엘리먼트에만 적용됩니다. 이는 Shadow DOM에 있는 스타일 캡슐화와 유사합니다. 
</br>

<style scope> </style>
