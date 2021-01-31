/* Author: https://github.com/lesha1337
   Этот скрипт выделяет элементы на сайте https://contacts.google.com

   Там при прокручивании подгружаются новые элементы и исчезают старые, 
   поэтому мы используем обработчик onscroll.
   
   У родителей элементов, на которые мы кликаем, есть стиль transform, 
   по которому их можно отличить между собой. Мы используем это, 
   чтобы не кликать на те элементы, на которые мы уже кликнули.
*/

const items = new Map();
 
const checkAllV2 = () => {
 var aa = document.querySelectorAll(".XXcuqd");
    for (var i = 0; i < aa.length; i++){
        if (!items.has(aa[i].style.transform)){
            aa[i].children[0].children[0].children[2].click()
            items.set(aa[i].style.transform, 1)
        }
    }
}
 
 
document.querySelector("#yDmH0d > c-wiz").onscroll = checkAllV2;


// Мы вставили это вот всё в консоль браузера и начали скроллить