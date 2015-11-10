/* jshint esnext: true */
import React from 'react';
import grid from 'flexboxgrid';
import style from './styles'

import Button from 'react-toolbox/lib/button';


class Home extends React.Component {
  render() {
    return (
      <div className={style.content}>
        <div className={grid.row}>
          <div className={grid['col-lg-6']}>
            <div className={grid.box}>
              <img src="static/arts/grablabracoon.gif"
                   width="90%" />
            </div>
          </div>
          <div className={grid['col-lg-6']}>
            <div className={grid.box}>
              <h1>Web Scraping</h1>
              <h3>ПАРСИНГ ВЕБСАЙТОВ и API</h3>
              <p>
                <small>Мы оказываем услуги в сфере сбора и обработки данных.</small>
                <ul>
                  <li>Парсинг веб-сайтов и извлечение нужных вам данных</li>
                  <li>Работа с API</li>
                  <li>Парсинг поисковых систем</li>
                  <li>Фронтэнд для администрирования данных</li>
                  <li>Проектирование REST API бэкендов</li>
                  <li>Поиск и детектирование CMS</li>
                </ul>
              </p>
              <br />
              <Button kind="raised" label="Сделать заказ" accent icon="favorite" />
            </div>
          </div>
        </div>
        <div className={grid.row}>
          <div className={grid['col-lg-6']}>
            <div className={grid.box}>
              <h4>Что такое веб-скрапинг?</h4>
              <p>
                <b>Веб-скрапинг</b> или <b>парсинг веб-сайтов</b> это технология извлечения
                данных с веб-сайтов и API. Как правило, процесс извлечения данных включает
                в себя разработку специальных программ - веб-спайдеров или ботов, которые
                могут использовать как низкоуровневые запросы через протокол http так и
                полную эмуляцию веб-браузера. В результате получается некий набор данных
                пригодный для дальнейшего использования.
              </p>
               <Button kind="flat" label="Более подробно можно прочитать в F.A.Q." icon="favorite" />
            </div>
          </div>
          <div className={grid['col-lg-6']}>
            <div className={grid.box}>
              <img src="static/arts/codescreen.png" />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Home;
