import { progressBarRender } from './modules/progressBarRender';
import { course } from './modules/course';
import { langSelect } from './modules/langSelect';
import { login } from './modules/login';
import { modal } from './modules/modal';


// рендеринг анимации прогресса для карточки курса на главной странице и на странице курса
//чтобы все работало нужно для линейного прогрессбара в элемент span <div  class="progress"> передать значение процента в виде атрибута data-progress
// для кольцевого значение передается вот в такой элемент <div data-progress="95" class="circle">
//передавать значение процента при рендеринге страницы
progressBarRender();

//скрипты для страницы курса
course();

//выбор языка, используется на страницах логина и регистрации
langSelect()
//рендеринг списка стран и слушатели событий инпутов, используется на страницах логина и регистрации
login()
//закрытие модальных окон. используется везде
modal()