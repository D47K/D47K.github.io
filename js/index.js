//Inicial
var Nav = function Nav() {
  return React.createElement(
    "div",
    { className: "row header-profile bg-dark" },
    React.createElement(
      "div",
      { className: "col-12 d-flex justify-content-center" },
      React.createElement("img", {
        className: "rounded-circle img-profile m-1",
        src: "https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/30707719_1640298776039966_7798285058170893456_n.jpg?_nc_cat=110&_nc_oc=AQlbDbve5jIeefb0WBre4D-cBZrzZvMsgpITpPP4UHDFMOcZsGpF8uuaIOniGA0veYwHiYl8n1sJy7yyMyXpS4dF&_nc_ht=scontent.fmex10-2.fna&oh=2fbfefa5fa3f9f057a9a52b45a1c36ec&oe=5E2B9C93"
      })
    ),
    React.createElement(
      "div",
      { className: "col-12 " },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-12 " },
          React.createElement(
            "h4",
            { className: "text-white text-center" },
            "Andres Hilario Vidal"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-12 " },
          React.createElement(
            "h6",
            { className: "text-white text-center" },
            "Desarrollador WEB, aplicaciones m\xF3viles y aplicaciones de escritorio"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-12 d-flex justify-content-end" },
          React.createElement(
            "a",
            { href: "https://github.com/D47K" },
            React.createElement("img", {
              src: "../media/logos/icons8-github.svg",
              className: "link",
              alt: "github-logo"
            })
          ),
          React.createElement(
            "a",
            { href: "https://www.facebook.com/andres.hilariovidal" },
            React.createElement("img", {
              src: "../media/logos/icons8-facebook.svg",
              className: "link-fb",
              alt: "facebook-logo"
            })
          )
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(Nav, null), document.getElementById("root"));