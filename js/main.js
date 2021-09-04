const currentTheme = {
  _currentTheme: 'white',

  get currentTheme() {
    return this._currentTheme
  },
  set currentTheme(value){
    this._currentTheme = value;
    import('./weatherForecast.js')
    .then(({chooseTheme}) => {
      chooseTheme();
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

  _openWeatherMap: false,

  get openWeatherMap() {
    return this._openWeatherMap
  },
  set openWeatherMap(value) {
    this._openWeatherMap = value;
    import('./weatherForecast.js')
    .then(({updateWeatherForecast}) => {
      updateWeatherForecast(value);
    })
    .catch((err) => {
      console.dir(err);
    });

    import('./sidebar.js')
    .then(({updateWeatherForecast}) => {
      updateWeatherForecast(value);
    })
    .catch((err) => {
      console.dir(err);
    });

    import('./detail.js')
    .then(({updateWeatherForecast}) => {
      updateWeatherForecast(value);
    })
    .catch((err) => {
      console.dir(err);
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
  apiKey: 'e0b2c6d3de6468c1fe09f7d895119d68',
  city: '',
  searchData: '',
};

export default currentTheme