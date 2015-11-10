/* jshint esnext: true */
import React from 'react';
import grid from 'flexboxgrid';

import Button from 'react-toolbox/lib/button';


class Home extends React.Component {
  render() {
    return (
      <div className={grid.row}>
        <div className={grid['col-lg-6']}>
          <div className={grid.box}>
            <img src="static/arts/grablabracoon.gif"
                 width="100%" />
          </div>
        </div>
        <div className={grid['col-lg-6']}>
          <div className={grid.box}>
            <h1>Web Scraping</h1>
            <h3>ПАРСИНГ ВЕБСАЙТОВ и API</h3>
            <p>
              Мы оказываем услуги в сфере сбора и обработки данных.
              <ul>
                <li>Парсинг веб-сайтов и извлечение нужных вам данных</li>
                <li>Работа с API</li>
                <li>Парсинг поисковых систем</li>
                <li>Проектирование REST API бэкендов</li>
              </ul>
            </p>
            <br />
            <Button label="Сделать заказ" />
          </div>
        </div>
      </div>
    );
  };
}

export default Home;
