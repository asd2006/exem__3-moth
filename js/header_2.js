const box1=document.getElementById("button__box__link1");
const box2=document.getElementById("button__box__link2");
const box3=document.getElementById("button__box__link3");
const content=document.getElementById("contant__box");
box1.addEventListener("click",()=>{
    content.innerHTML=`                <div>
    <p>Состав</p><p>Доставка и оплата</p>
</div>
<ul>
    <li>Гербера Оранжевая  —  11 шт.</li>
    <li>Гвоздика однобутонная розовая  —  7 шт.</li>
    <li>Хризантема кустовая Филин Грин  —  5 шт.</li>
    <li>Роза Шангри Ла  —  29 шт.</li>
    <li>Роза Пенни Лейн  —  29 шт.</li>
</ul>`
})
box2.addEventListener("click",()=>{
    content.innerHTML=`                <div>
    <p>Состав</p><p>Доставка и оплата</p>
</div>
<ul>
    <li>Гербера Оранжевая  —  17 шт.</li>
    <li>Гвоздика однобутонная розовая  —  13 шт.</li>
    <li>Хризантема кустовая Филин Грин  —  10 шт.</li>
    <li>Роза Шангри Ла  —  35 шт.</li>
    <li>Роза Пенни Лейн  —  35 шт.</li>
</ul>`
})
box3.addEventListener("click",()=>{
    content.innerHTML=`                <div>
    <p>Состав</p><p>Доставка и оплата</p>
</div>
<ul>
    <li>Гербера Оранжевая  —  20 шт.</li>
    <li>Гвоздика однобутонная розовая  —  16 шт.</li>
    <li>Хризантема кустовая Филин Грин  —  14 шт.</li>
    <li>Роза Шангри Ла  —  38 шт.</li>
    <li>Роза Пенни Лейн  —  38 шт.</li>
</ul>`
})