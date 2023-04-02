const React = require('react');
const Layout = require('./Layout');

function GuestPage({}) {
  return (
    <Layout>
      <div className="d-flex flex-column mb-3">
        <div className="container">
          <nav className="navbar d-flex flex-wrap">
            <a id="home" className="navbar-brand">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135788.png" alt="Logo" height="40" className="d-inline-block align-text-center me-2" />
              ЦЛ
            </a>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-wrap align-items-center">
                <a id="signin" className="nav-link me-2">Войти</a>
                <button id="signup" type="button" className="btn btn-warning">Зарегистрироваться</button>
              </div>
            </div>
          </nav>
        </div>
        <div className="my__guest-background">
          <div className="container d-flex justify-content-between">
            <div className="guest__column-left">
              <div className="my__guest-box">
                <div className="guest__box-title">
                  Система автоматизации рекрутмента
                </div>
                <div className="guest__box-subtitle">
                  Центр Лидеров — рекрутинговая система, которая помогает закрывать больше вакансий за меньшее время
                </div>
                <div className="guest__box-subtitle">
                  Чтобы конкурировать за кандидатов, нужно действовать быстро. Хантфлоу автоматизирует всю рутину и фокусирует рекрутеров на действительно важных задачах
                </div>
                <div className="guest__box-text">
                  *Чтобы использовать функционал сайта - необходимо войти или зарегистрироваться
                </div>
              </div>
              <button id="btn_signup" type="button" className="btn btn-warning guest__btn">Зарегистрироваться</button>
            </div>
            <div className="guest__column-right">
              {/* <div id="resultWindow" /> */}

            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-end">
          <footer className="d-flex align-items-center">
            ©
            <span className="p-2">2023</span>
            Центр Лидеров
          </footer>
        </div>
      </div>
      <script src="/js/goHome.js" />
      <script src="/js/guest/signUp.js" />
      <script src="/js/guest/signIn.js" />
      <script src="/js/guest/enter.js" />
      <script src="/js/guest/register.js" />
      <script src="/js/guest/guest.js" />

    </Layout>
  );
}

module.exports = GuestPage;
