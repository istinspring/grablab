/* jshint esnext: true */
import React from 'react';

import style from './styles';
import Header from './../components/header';
import Footer from './../components/footer';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lang: props.params.lang};
  }

  render() {
    return (
      <div>
        <Header lang={this.state.lang} />
        <main>
          <section className={style.content}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Donec a diam lectus.
            Sed sit amet ipsum mauris.
            Maecenas congue ligula ac quam viverra
            nec consectetur ante hendrerit.
            Donec et mollis dolor. Praesent et diam eget
            libero egestas mattis sit amet vitae augue.
            Nam tincidunt congue enim, ut porta lorem
            lacinia consectetur. Donec ut libero sed
            arcu vehicula ultricies a non tortor.
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean ut gravida lorem.
            Ut turpis felis, pulvinar a semper sed,
            adipiscing id dolor. Pellentesque auctor
            nisi id magna consequat sagittis.
            Curabitur dapibus enim sit amet elit pharetra
            tincidunt feugiat nisl imperdiet. Ut convallis
            libero in urna ultrices accumsan.
            Donec sed odio eros. Donec viverra mi quis
            quam pulvinar at malesuada arcu rhoncus.
            Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
            In rutrum accumsan ultricies. Mauris vitae
            nisi at sem facilisis semper ac in est.
          </section>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  };
}
App.propTypes = { lang: React.PropTypes.string };
App.defaultProps = { lang: 'ru' };
