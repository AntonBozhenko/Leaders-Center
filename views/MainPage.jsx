const React = require('react');
const Layout = require('./Layout');

function MainPage({ appl, name }) {
  return (
    <Layout>
      <div className="d-flex flex-column mb-3">
        <div className="container">
          <nav className="navbar d-flex flex-wrap">
            <div className="logo d-flex align-items-center">
              <a id="home" className="navbar-brand">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135788.png" alt="Logo" height="40" className="d-inline-block align-text-center me-2" />
                ЦЛ
              </a>
              <div className="nameUser me-2">
                Хорошо поработать,
                {' '}
                {name}
              </div>

            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-wrap align-items-center">
                <a id="getFormApplicant" className="nav-link me-3">Добавить соискателя</a>
              </div>
              <div className="d-flex flex-wrap align-items-center">
                <a id="logout" className="nav-link me-2">Выйти</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="my__main-background">
          <div className="container d-flex flex-column">
            <ul id="menuStage" className="d-flex flex-wrap justify-content-between align-items-center">
              <li className="active"><a id="allUsers" className="nav-link">Все</a></li>
              <li><a id="1" className="nav-link">Новые</a></li>
              <li><a id="2" className="nav-link">Видео интервью</a></li>
              <li><a id="3" className="nav-link">У заказчика</a></li>
              <li><a id="4" className="nav-link">Интервью с заказчиком</a></li>
              <li><a id="5" className="nav-link">Звонок скрининг</a></li>
              <li><a id="6" className="nav-link">Оффер</a></li>
              <li><a id="7" className="nav-link">Принял Оффер</a></li>
              <li><a id="8" className="nav-link">Выход на работу</a></li>
              <li><a id="9" className="nav-link">Отказ</a></li>
            </ul>
            <div className="fix-1 d-flex flex-row">
              <div className="main__column-left" id="main__column-left">
                {appl.map((appl) => (
                  <div key={appl.id} id={appl.id} className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                    <div className="col-3">
                      <div
                        className="user__preview-foto"
                        style={
                      {
                        backgroundImage: `url(${appl.applPhoto})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
}
                      />
                    </div>
                    <div className="col-8 ms-2">
                      <div className="row">
                        <div className="preview-ref-fio">
                          {appl.applName}
                          {' '}
                          {appl.applLastName}
                        </div>
                      </div>
                      <div className="row">
                        <div className="preview-ref-position">{appl.position}</div>
                      </div>
                    </div>
                  </div>

                ))}
              </div>
              <div className="main__column-right me-auto p-3">
                <div className="user__card d-flex flex-column gap-3 p-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="container end d-flex justify-content-end my-auto">
          <footer className="d-flex align-items-center">
            ©
            <span className="p-2">2023</span>
            Центр Лидеров
          </footer>
        </div>
      </div>

      <script src="/js/goHome.js" />
      <script src="/js/user/logOut.js" />
      <script src="/js/user/getAllApplicants.js" />
      <script src="/js/user/filter.js" />
      <script src="/js/user/getApplicantPreview.js" />
      <script src="/js/user/getFormApplicant.js" />
      <script src="/js/user/uploadFormData.js" />
      <script src="/js/user/selectStageApp.js" />
      <script src="/js/user/user.js" />
    </Layout>
  );
}

module.exports = MainPage;
