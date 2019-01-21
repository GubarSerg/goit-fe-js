"use strict";

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

const inputs =[]
const list = document.body.querySelectorAll('input')
const labels = list.forEach(function(elem){
	if(elem.hasAttribute('checked')){
		inputs.push(elem)
	}
});

function collectInputData(inputs) {
	return inputs.map(item => item.value)
}

console.log(collectInputData(inputs))

