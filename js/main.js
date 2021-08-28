const currentTheme = {
  _currentTheme: 'white',

  get currentTheme() {
    return this._currentTheme
  },
  set currentTheme(value){
    this._currentTheme = value;
    import('./weatherForecast.js')
    .then(({testWeather}) => {
      testWeather();
    })
    .catch((err) => {
      console.dir(err);
    });
    import('./detail.js')
    .then(({detail}) => {
      detail();
    })
    .catch((err) => {
      console.log(err);
    });
  },

  whiteStyle: {
    btn: '#FFFFFF',
    div: '#48484A',
    svg: '#E6E6E6',
    color: 'var(--main-color-text)',
    colorSecond: 'Var(--second-color-text)',
  },
  blackStyle: {
    btn: '#212331',
    div: '#EC6E4D',
    svg: '#212331',
    color: 'var(--main-color-text-black)',
    colorSecond: 'Var(--second-color-text-black)',
  },
};

export default currentTheme